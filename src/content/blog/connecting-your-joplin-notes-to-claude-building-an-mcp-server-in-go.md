---
title: "Connecting Your Joplin Notes to Claude: Building an MCP Server in Go"
description: |
  A guide to building a Windows system tray app that lets AI assistants seamlessly interact with Joplin using the Model Context Protocol.
pubDate: 'Nov 3 2025'
coverImageCredit: Roger Filomeno
cover: 'https://cdn.rogverse.fyi/thorium_Q1P7VbHkWC.png'
---
I built a Windows system tray application to connect Joplin's knowledge base with Claude using the Model Context Protocol (MCP). Here is how it works and how to set it up.

## The Goal

Joplin is excellent for private note-taking, and Claude is a capable AI assistant. Integrating them allows Claude to read, create, and update notes directly.

## The Model Context Protocol (MCP)

Anthropic's MCP is a standardized protocol allowing AI assistants to connect with external tools. It enables Claude to use defined "tools" naturally within a conversation without complex prompting.

## The Solution

A Go-based Windows application that:
1.  **Runs in the system tray**
2.  **Connects to Joplin's REST API** (via Web Clipper)
3.  **Exposes 8 tools to Claude** via MCP

### Available Tools

**Reading & Discovery:**
*   `list_notes`: Browse notes or filter by notebook
*   `get_note`: Retrieve note content by ID
*   `search_notes`: Search using Joplin's syntax
*   `list_folders`: View notebooks
*   `list_tags`: View tags

**Creation & Management:**
*   `create_note`: Create new notes
*   `update_note`: Modify existing notes
*   `delete_note`: Remove notes

### Use Cases

*   **Contextual Search**: "What notes do I have about the Q4 project?"
*   **Automated Summaries**: "Create a new note summarizing our discussion."
*   **Updates**: "Add these action items to my meeting notes."

## Technical Architecture

*   **Language**: Go (chosen for speed and single-binary compilation)
*   **Protocol**: MCP over HTTP JSON-RPC
*   **Joplin Integration**: REST API
*   **UI**: Windows system tray (`getlantern/systray`)

### Components

1.  **Joplin Client**: Handles HTTP communication with Joplin using the API token.
2.  **MCP Server**: Routes JSON-RPC requests from Claude to Joplin tools.
3.  **System Tray**: Provides a lightweight interface to manage the background process.

## Installation

### Prerequisites
*   Joplin Desktop (Web Clipper enabled)
*   Windows 10+

### Steps

1.  **Get API Token**: In Joplin, go to `Tools` → `Options` → `Web Clipper`. Enable it and copy the token.
2.  **Configure**: Create a `config.json` file:
    ```json
    {
      "joplin_port": 41184,
      "joplin_token": "your_token_here",
      "mcp_port": 3000
    }
    ```
3.  **Run**: Execute `./joplin-mcp-server.exe`.
4.  **Connect Claude**: Add to your `claude_desktop_config.json`:
    ```json
    {
      "mcpServers": {
        "joplin": {
          "url": "http://localhost:3000",
          "transport": "http"
        }
      }
    }
    ```
5.  **Restart Claude**.

## Why Go?

*   **Speed**: Instant startup (~100ms) and minimal memory usage (~15MB).
*   **Simplicity**: Compiles to a single static binary with no runtime dependencies.
*   **Concurrency**: Efficient handling of multiple requests.

## Open Source

The project is MIT licensed and available on GitHub.

*   **GitHub Repository**: [rpfilomeno/joplin-mcp-go](https://github.com/rpfilomeno/joplin-mcp-go)
*   **Joplin REST API Docs**: [joplinapp.org/api](https://joplinapp.org/api/references/rest_api/)
*   **MCP Specification**: [spec.modelcontextprotocol.io](https://spec.modelcontextprotocol.io/)