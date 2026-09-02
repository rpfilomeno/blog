---
title: "Automating Job Applications with CloakBrowser MCP"
description: "How I used stealth browser automation to fill out a job application form, and what I learned about hCaptcha, iframe overlays, and MCP tooling."
pubDate: 'Sep 2 2026'
cover: 'https://cdn.rogverse.fyi/ai-fill-up-forms.png'
---

Applying to jobs is repetitive. Name, email, phone, location, company, LinkedIn, GitHub, upload CV, answer three yes/no questions, solve a CAPTCHA, submit. Every form is slightly different, but the data is the same. I wanted to see if I could automate the whole thing using CloakBrowser MCP — a stealth Chromium wrapper that runs as a Model Context Protocol server.

The short version: it worked, but the CAPTCHA was the hard part.

## Why CloakBrowser

Regular Playwright or Puppeteer gets detected. Sites check for headless browser signatures — missing WebGL vendors, navigator.webdriver set to true, inconsistent viewport sizes. CloakBrowser patches these. It spoofes fingerprints, removes automation indicators, and runs Chromium with stealth mode enabled.

The MCP part means I can control the browser from any tool that speaks the protocol. In my case, opencode — an AI coding assistant — connects to CloakBrowser as a remote server on `http://127.0.0.1:3000/mcp`. I describe what I want in natural language, the agent picks the right tool calls, and the browser executes them.

## Setup

First-time install with UV:

```powershell
uv tool install cloakbrowser
```

Start the server with headed mode and a persistent profile:

```powershell
$env:PLAYWRIGHT_MCP_HEADLESS="false"
$env:CLOAK_PLAYWRIGHT_MCP_NO_SANDBOX="true"
$env:CLOAK_PLAYWRIGHT_MCP_PERSISTENT_DIR="$HOME/.cloakbrowser/profiles"
npx -y cloakbrowser-mcp@latest --transport streamable-http --http-port 3000
```

The persistent profile saves cookies and logins between sessions. Without it, you solve CAPTCHAs and log into sites every time you restart.

Add to `opencode.json`:

```json
"cloakbrowser": {
  "type": "remote",
  "url": "http://127.0.0.1:3000/mcp"
}
```

## The workflow

The target form was a job application page on Lever. Here is the exact sequence:

### 1. Navigate and snapshot

```
cloakbrowser_browser_navigate → form URL
cloakbrowser_browser_snapshot → get element refs
```

The snapshot returns an accessibility tree with refs like `e43`, `e49`, `e54`. These are stable until the page navigates or re-renders. Every interaction starts with a snapshot — stale refs cause timeouts.

### 2. Fill text fields

```
cloakbrowser_browser_fill_form → refs + values
```

Ten fields in one call: name, email, phone, location, company, LinkedIn, Twitter, GitHub, portfolio, other website. The tool maps refs to values and runs `fill()` on each input.

### 3. Select dropdowns

```
cloakbrowser_browser_select_option → ref + option text
```

Four EEO dropdowns: Gender, Race, Veteran status, Disability status. Each set to "Decline to self-identify" or "I do not want to answer".

### 4. Click radio buttons (the hard part)

The form had three yes/no questions:

- Are you at least 18 years of age?
- Have you completed your high school education?
- Can you provide proof of identity and eligibility to work in the Philippines?

I tried clicking the radio refs directly. Every attempt timed out. The error log showed the problem:

```
<iframe scrolling="no" frameborder="0" ... title="Widget containing checkbox
for hCaptcha security challenge"> from <div id="h-captcha" class="h-captcha"
...> subtree intercepts pointer events
```

hCaptcha injects an iframe that sits on top of the form. Playwright's click action waits for the element to be actionable, sees the iframe blocking it, and retries until timeout. The radio buttons are clickable — the browser just won't let Playwright click them through the normal path.

The fix: bypass Playwright's actionability check entirely.

```javascript
document.querySelector('input[name="cards[9c71cae2-...][field0]"][value="Yes"]').click();
document.querySelector('input[name="cards[9c71cae2-...][field1]"][value="Yes"]').click();
document.querySelector('input[name="cards[9c71cae2-...][field2]"][value="Yes"]').click();
```

`cloakbrowser_browser_evaluate` runs raw JavaScript in the page context. The `click()` method fires a native DOM event, which Playwright's actionability checks don't intercept. All three radios checked in one call.

### 5. Upload CV

```
cloakbrowser_browser_click → attach button ref
cloakbrowser_browser_file_upload → file path
```

File uploads require two steps. First, click the attach button to trigger the browser's file chooser dialog. Then, when the modal appears, call `file_upload` with the local file path. If you call `file_upload` before the dialog is open, it errors with "can only be used when there is related modal state present."

### 6. Submit

```
cloakbrowser_browser_click → submit button ref
```

The form submitted successfully.

## What I learned

**hCaptcha is the real gate.** The form was straightforward — ten text fields, four dropdowns, three radio buttons. The CAPTCHA existed, but it didn't trigger a challenge. It just sat there as an iframe, blocking pointer events. If it had actually challenged me with image selection, I would have been stuck. CloakBrowser handles fingerprint detection, not CAPTCHA solving.

**JS evaluate is the escape hatch.** Every time a Playwright tool failed because of an overlay or iframe, `evaluate` with raw DOM manipulation worked. It runs in the page context, bypasses actionability checks, and fires native events. It should be the first option when clicking through an iframe-blocked element.

**Persistent profiles matter.** Without `CLOAK_PLAYWRIGHT_MCP_PERSISTENT_DIR`, every session starts clean. You lose cookies, logins, and any CAPTCHA tokens you already solved. The profile directory is the difference between a tool you use once and a tool you use daily.

**Snapshots are cheap, stale refs are expensive.** The element refs from a snapshot are valid until the page changes. If you navigate, scroll, or wait long enough for a lazy render to kick in, the old refs are dead. Snapshot before every action, not once at the start.

## When to use this

This approach makes sense for:

- Applying to multiple jobs with the same data
- Automating form fills on sites that detect headless browsers
- Any browser task where you need stealth mode

It does not make sense for:

- CAPTCHA-heavy sites where you need to solve image challenges
- Sites that require OAuth login flows
- Anything with complex multi-step wizards that change structure mid-flow

The browser doesn't care who's clicking.
