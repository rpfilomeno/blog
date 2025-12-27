---
title: "Connecting Your Joplin Notes to Claude: Building an MCP Server in Go"
description: |
  How I built a Windows system tray app that lets AI assistants seamlessly interact with my note-taking workflow.
pubDate: 'Nov 3 2025'
coverImageCredit: Roger Filomeno
cover: 'https://cdn.rogverse.fyi/thorium_Q1P7VbHkWC.png'
---
If you're like me, you've been using Joplin for years to manage your notes, ideas, and knowledge base. And if you're also like me, you've been amazed by Claude's capabilities and wondered: "What if Claude could access and help me organize my notes?"

Well, wonder no more. I built a solution, and I'm going to show you exactly how it works.

## The Problem: Two Powerful Tools, Zero Integration

Joplin is an incredible open-source note-taking application. It's private, powerful, and packed with features. Claude, on the other hand, is an AI assistant that can help with research, writing, coding, and analysis. Both tools are fantastic individually, but they live in separate worlds.

I found myself constantly:
- Copying notes from Joplin to paste into Claude
- Manually creating new notes based on Claude's suggestions
- Searching through thousands of notes when I needed context for a conversation
- Wishing Claude could just "see" my notes

There had to be a better way.

## Enter the Model Context Protocol (MCP)

Anthropic recently introduced the Model Context Protocol—a standardized way for AI assistants to connect to external data sources and tools. Think of it as a universal adapter that lets Claude plug into your applications.

The beauty of MCP is its simplicity: you define "tools" that Claude can use, and Claude figures out when and how to use them. No complex prompting, no manual copying—just natural conversation.

## The Solution: A Go-Based MCP Server for Joplin

I decided to build a lightweight Windows application that:

1. **Runs in your system tray** - No clutter, just a simple icon
2. **Connects to Joplin's REST API** - Uses Joplin's built-in Web Clipper service
3. **Implements the MCP protocol** - Exposes 8 powerful tools to Claude
4. **Requires minimal configuration** - Just a simple JSON file

### What Can It Do?

The MCP server provides eight tools that give Claude complete access to your notes:

**Reading & Discovery:**
- `list_notes` - Browse all your notes or filter by notebook
- `get_note` - Retrieve any note by ID
- `search_notes` - Use Joplin's powerful search syntax
- `list_folders` - See all your notebooks
- `list_tags` - View your tag system

**Creation & Management:**
- `create_note` - Create new notes from conversations
- `update_note` - Modify existing notes
- `delete_note` - Clean up old notes

### Real-World Use Cases

Here's where it gets exciting. With this setup, you can have conversations like:

**"Claude, what notes do I have about the Q4 project?"**
Claude searches your notes and summarizes what you've written.

**"Create a new note summarizing our discussion about the API redesign"**
Claude creates a well-structured note in your chosen notebook.

**"Update my meeting notes from yesterday with the action items we just discussed"**
Claude adds to existing notes without you lifting a finger.

**"Search my notes for anything related to Python asyncio"**
Claude finds relevant notes across your entire knowledge base.

## The Technical Architecture

Let me walk you through how this works under the hood.

### The Stack

- **Language:** Go (fast, compiled, perfect for system tray apps)
- **Protocol:** MCP over HTTP JSON-RPC
- **Joplin Integration:** REST API via Web Clipper
- **UI:** Windows system tray using `getlantern/systray`

### Key Components

**1. Joplin Client**
```go
type JoplinClient struct {
    baseURL string
    token   string
    client  *http.Client
}
```

This handles all communication with Joplin. It authenticates using your API token, makes HTTP requests, and parses responses. Simple, clean, efficient.

**2. MCP Server**
```go
type MCPServer struct {
    joplin *JoplinClient
    config *Config
}
```

This implements the MCP protocol. It receives JSON-RPC requests from Claude, routes them to the appropriate tool, calls the Joplin API, and formats responses.

**3. System Tray Integration**

The app runs quietly in your system tray. Right-click the icon to check status or quit. No visible windows, no distractions—just seamless functionality.

### The MCP Protocol in Action

When Claude wants to search your notes, here's what happens:

1. **Claude sends a request:**
```json
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "search_notes",
    "arguments": {"query": "machine learning"}
  }
}
```

2. **The MCP server processes it:**
- Validates the request
- Extracts the tool name and arguments
- Calls the Joplin API
- Formats the response

3. **Joplin returns the data:**
```json
{
  "items": [
    {
      "id": "abc123",
      "title": "ML Model Training Notes",
      "body": "..."
    }
  ]
}
```

4. **Claude receives and understands it:**
The response is formatted as MCP-compliant JSON, which Claude interprets naturally in the conversation.

## Setting It Up: Easier Than You Think

### Prerequisites
- Joplin Desktop with Web Clipper enabled
- Go 1.21+ (if building from source)
- Windows 10+

### Installation (5 Minutes)

**Step 1: Get Your Joplin API Token**
1. Open Joplin → Tools → Options → Web Clipper
2. Enable the service
3. Copy your authorization token

**Step 2: Configure the Server**
Create `config.json`:
```json
{
  "joplin_port": 41184,
  "joplin_token": "your_token_here",
  "mcp_port": 3000
}
```

**Step 3: Run the Server**
```bash
./joplin-mcp-server.exe
```

**Step 4: Connect Claude Desktop**
Add to `claude_desktop_config.json`:
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

**Step 5: Restart Claude**
That's it. You're done.

## My Experience Using It

I've been using this setup for the past few weeks, and it's transformed how I interact with my notes.

### What I Love

**Natural Conversations:** I don't think about "tools" or "commands." I just ask Claude to help me with my notes, and it works.

**Context Awareness:** Claude can search through thousands of notes instantly, pulling relevant information into our conversation.

**Automated Organization:** After a brainstorming session, Claude creates structured notes automatically. No more manual cleanup.

**Seamless Workflow:** The system tray app is invisible. It just works in the background.


## Performance & Resource Usage

Go is perfect for this application:
- **Startup time:** ~100ms
- **Memory usage:** ~15MB
- **CPU usage:** Negligible when idle
- **Network:** Only active during API calls

The compiled executable is just 8MB. No runtime dependencies, no bloat.

## Security Considerations

**Local Only:** The server runs on `localhost` only. No external access.

**Token-Based Auth:** Uses Joplin's built-in token authentication.

**No Data Storage:** The server is stateless. All data stays in Joplin.

**Open Source:** You can review every line of code.

## Future Enhancements

I'm planning to add:

- **Attachment support** - Let Claude see images and PDFs in notes
- **Configuration UI** - A simple dialog for settings
- **Auto-detection** - Automatically find Joplin's port
- **Cross-platform support** - Linux and macOS versions
- **Batch operations** - Work with multiple notes at once
- **Tag management** - Better tag organization tools

## Lessons Learned

### What Worked Well

**Go's Simplicity:** The entire server is ~500 lines of clean, readable code. Go's standard library had everything I needed.

**MCP Design:** The protocol is well-designed. The JSON-RPC format is familiar, and the tool-based approach is intuitive.

**Joplin's API:** Comprehensive and well-documented. Everything I needed was available through REST endpoints.

### Challenges

**System Tray Quirks:** Windows system tray development has some odd behaviors. The `getlantern/systray` library helped, but there were edge cases.

**Error Handling:** Needed robust error handling for network issues, invalid tokens, and malformed requests.

**MCP Testing:** Testing MCP integrations requires a full Claude Desktop setup. Would love better developer tooling here.

## Why Go?

You might wonder why I chose Go instead of Python or Node.js.

**Speed:** Go compiles to native code. Startup is instant, resource usage is minimal.

**Simplicity:** No runtime to install, no dependency management issues. One executable, that's it! Hell ya!

**Concurrency:** Go's goroutines make it trivial to handle multiple requests without blocking.

**System Integration:** Great support for Windows system tray and low-level OS features.

**Type Safety:** Catching errors at compile time saved hours of debugging.

## The Open Source Aspect

The full source code is available on GitHub (MIT License). Why open source?

1. **Transparency:** You should know exactly what runs on your machine
2. **Security:** Open code is auditable code
3. **Community:** Others can improve it, add features, fix bugs
4. **Learning:** If you want to build your own MCP server, this is a working example

## Getting Started

Ready to try it yourself?

1. **Download** the latest release from [GitHub](https://github.com/rpfilomeno/joplin-mcp-go)
2. **Configure** with your Joplin token
3. **Run** the executable
4. **Connect** Claude Desktop
5. **Start talking** to your notes

The entire setup takes less than 5 minutes.

## Conclusion

Building this MCP server has fundamentally changed how I use both Joplin and Claude. They're no longer separate tools—they're a unified system for knowledge management and AI assistance.

The combination of Joplin's privacy-focused note-taking with Claude's intelligence creates something greater than the sum of its parts. I can brainstorm with Claude, have it search my knowledge base, create structured notes, and maintain everything in my own private Joplin database.

And because it's built with Go, it runs efficiently in the background without interrupting my workflow.

If you use Joplin and Claude, I highly recommend giving this a try. The productivity boost is real, and the setup is surprisingly simple.

## Resources

- **GitHub Repository:** https://github.com/rpfilomeno/joplin-mcp-go
- **Joplin REST API Docs:** https://joplinapp.org/api/references/rest_api/
- **MCP Specification:** https://spec.modelcontextprotocol.io/
- **Go Systray Library:** https://github.com/getlantern/systray

## Questions?

Have questions about the implementation? Want to contribute? Found a bug? Open an issue on GitHub or reach out. I'm excited to see what the community builds with this foundation.

Happy note-taking! 📝🤖

---

*This project is open source under the MIT License. Feel free to use, modify, and distribute as you see fit.*