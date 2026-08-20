---
title: 'Screening Bad Job Offers with an AI-Powered n8n Workflow'
description: |
  I mined my own application history with an LLM to find what I actually want in a role, then built an n8n workflow that screens every Jobstreet alert against that profile and pings me on Discord only when it is worth my time.
pubDate: 'Aug 20 2026'
coverImageCredit: Roger Filomeno
cover: 'https://cdn.rogverse.fyi/job-screener.png'
---

Applying to jobs the traditional way was a numbers game I was losing. Hundreds of applications, a steady drip of rejections, and hours burned on postings that were never a real fit. The fix was to stop guessing and automate the screening. First I used an LLM to reverse-engineer my preferences from my own application history, then I built an n8n workflow that scores every job alert against that profile before I ever see it.

## Part 1: Mining your application history

The mistake most people make is treating a job hunt as a cold start. It isn't. If you have been in the industry for any length of time you already have a massive dataset: every role you applied for, every interview you took, every offer you turned down.

I dumped that history into an LLM. Not just my resume and cover letters — the actual job postings I applied to, which ones got me interviews, which ones I ghosted, and which ones I rejected. That last category is the goldmine. The jobs you declined tell you more about your preferences than the ones you accepted.

The LLM's job was to extract a **target career profile**: a rubric I could score any future posting against. Mine came back looking like this:

- **Technical stack:** n8n, agentic AI, cloud/DevOps tooling
- **Responsibilities:** automation architecture, not just "integrate two tools"
- **Title match:** senior-level, or a path to it
- **Remote work:** non-negotiable, but flexible hours are a bonus
- **Red flags:** vague requirements, "ninja/rockstar" language, recruiter farms

Every preference was something I could check against the data. If the LLM said "you turn down roles without remote," the declined applications confirmed it. Once the profile felt right, I had a concrete, testable definition of what a good job looks like for me.

## Part 2: The n8n workflow

The workflow watches my Jobstreet email alerts, scrapes each posting, scores it against the profile, and only pings me on Discord when the score clears the bar. Nothing runs in the cloud — Crawl4AI runs locally on my machine.

### Stage 1: Email ingestion

The **Gmail Trigger** polls every 5 minutes for unread email from `Jobstreet Job Alerts`. Each match is pulled by **Get a message**, which fetches the full body content of the alert.

### Stage 2: Link extraction

Alerts bundle multiple postings in one email, so the raw text goes into a **Basic LLM Chain** backed by Gemini (`lmChatGoogleGemini`). Its only job is to pull out the individual application URLs, enforced with a structured parser so the output is guaranteed JSON:

```json
{
	"type": "object",
	"properties": {
		"job_list": { "type": "array", "items": { "type": "string" } }
	},
	"required": ["job_list"]
}
```

A **Split Out** node fans the array out so each URL is processed independently.

### Stage 3: Loop and scrape

Each URL runs through a **Loop Over Items**. For every job link, an **HTTP Request** node POSTs to a local Crawl4AI service (`http://crawl4ai:11235/md`) and gets the posting page back as clean Markdown. Crawl4AI handles the messy parts — JavaScript rendering, cookie banners, page structure — so the LLM downstream gets text it can actually read.

### Stage 4: Scoring

The Markdown goes into a second LLM chain, this time backed by DeepSeek or Gemini Flash for speed. It scores the posting 0–100 against the target career profile: technical stack, responsibilities, title match, and remote work preference. The prompt mirrors the rubric I extracted in Part 1, so the score is only as good as the profile.

The output is structured, so the next node can route on it:

```json
{
	"job_title": "Senior Automation Engineer",
	"job_score": 87,
	"job_apply_url": "https://www.jobstreet.com/job/123456"
}
```

### Stage 5: Threshold routing

Two **If** nodes split the score into three buckets and fire the appropriate Discord webhook:

| Score | Verdict        | Discord alert                        |
| ----- | -------------- | ------------------------------------ |
| ≥ 80  | Definite match | ✅ High priority, top of the channel |
| 50–79 | Conditional    | ❔ Worth a look                      |
| < 50  | Skip           | Nothing                              |

The high-priority alert is just an **HTTP Request** posting a JSON payload to a Discord webhook URL:

```json
{
	"content": "✅ <@me> **{job_title}** scores **{job_score}/100**",
	"embeds": [{ "url": "{job_apply_url}", "title": "Apply here" }]
}
```

The conditional path posts the same shape with the ❔ emoji. Anything below 50 is dropped silently — no notification, no wasted attention.

### Stage 6: Cleanup

Once every link in the alert has been processed, the original Gmail message is tagged with a tracking label and **marked as read**. The next poll starts clean; I never see the same alert twice.

## Running Crawl4AI locally

The only moving part outside n8n is the scraper, and it is one service in Docker:

```yaml
services:
  crawl4ai:
    image: unclecode/crawl4ai
    ports:
      - '11235:11235'
```

That is the whole infrastructure. n8n does the orchestration, the LLMs do the parsing and scoring, Crawl4AI does the scraping, and Discord is the only surface I actually interact with.

## What changed

The score distribution is the real result. Most Jobstreet alerts scored under 50 — they were never a fit, and previously I would have discovered that the hard way, one interview at a time. The screener cut my application count dramatically and shifted the mix toward roles I actually had a shot at. The interviews that came out of it were at companies that matched the profile, and the rejections stopped dominating the inbox.

The lessons that stuck:

- **Your preferences are in your data.** If you have applied to jobs before, you already know what you want — you just never asked yourself systematically.
- **The scoring is only as good as the profile.** I spent more time arguing with the extracted rubric than building the workflow. That was time well spent.
- **Automation should reduce decisions, not create them.** The workflow replaces one low-value decision (should I read this alert?) with zero. Everything below the threshold disappears.

If you are mid-job-hunt and drowning in alerts, build the profile first. The workflow is the easy part.
