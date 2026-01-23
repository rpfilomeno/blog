---
title: "Building the Astro Blog TUI Editor: A Developer's Journey"
description: |
  Discover how I built a Vim-inspired terminal editor for managing Astro blog posts using Go and the Charmbracelet ecosystem.
pubDate: 'Jan 24 2026'
coverImageCredit: Antigravity
cover: 'https://github.com/user-attachments/assets/dad2302e-d8c7-4fc0-8b40-0c495c1aac11'
---

As a developer who spends most of my time in the terminal, I've always found web-based Content Management Systems (CMS) to be a bit... cumbersome. When I started my Astro blog, I wanted a way to manage my posts without leaving my terminal. That's why I built the **[Astro Blog TUI Editor](https://github.com/rpfilomeno/astro-blog-tui-editor)**.

## The Vision

The goal was simple: Create a fast, efficient, and aesthetically pleasing terminal application to:
1. Browse existing blog posts.
2. Preview posts with rich markdown formatting.
3. Edit posts with Vim-inspired precision.
4. Create new posts from a smart template.

## The Technology Stack

I chose **Go** for this project because of its excellent concurrency support and its growing ecosystem for terminal tools. Specifically, I leveraged the **Charmbracelet** suite:

- **[Bubble Tea](https://github.com/charmbracelet/bubbletea)**: For the Elm-inspired architecture that manages state across the app.
- **[Lipgloss](https://github.com/charmbracelet/lipgloss)**: To create a beautiful, customized UI with colors, borders, and layouts.
- **[Bubbles](https://github.com/charmbracelet/bubbles)**: For pre-built TUI components like the list view and text inputs.
- **[Glamour](https://github.com/charmbracelet/glamour)**: For high-quality markdown rendering directly in the terminal.

## Core Architecture

The application follows the **Elm Architecture** (Model-Update-View). The heart of the editor is the `Model` struct, which tracks the application state:

```go
type Model struct {
    List            list.Model
    Viewport        viewport.Model
    Textarea        textarea.Model
    State           State
    VimMode         VimMode
    // ... other fields
}
```

The `Update` function handles state transitions based on key messages. For example, switching from the list view to the editor state loads the markdown content into the `textarea` component.

## Key Features

### Vim-inspired Editing
One of the most exciting parts of this project was implementing Vim modes. The editor supports:
- **Normal Mode**: Navigation and commands.
- **Insert Mode**: Standard text editing.
- **Visual Mode**: Selecting text blocks for yanking (copying) or cutting.

We integrated with the **system clipboard**, so you can `y` (yank) in Visual mode and `p` (paste) content from other applications!

### Smart Templates
To speed up post creation, the editor uses a `template.md` file. It automatically populates the `pubDate` and parses frontmatter, so you can focus on the content immediately.

## Lessons Learned

Building a TUI comes with unique challenges. Handling window resizing, managing focus across multiple inputs, and ensuring smooth navigation in a terminal environment required careful state management.

The biggest takeaway? The terminal is a remarkably powerful canvas for building productive tools when you have the right frameworks like Charmbracelet.

## What's Next?

The Astro Blog TUI Editor is just getting started. I'm planning to add:
- Integrated Git support for committing and pushing directly from the editor.
- More advanced Vim keybindings (like `f`, `t`, and `ciw`).
- Image upload integration for easier cover image management.

If you're a terminal lover building with Astro, give it a try! You can find the source code on [GitHub](https://github.com/rpfilomeno/astro-blog-tui-editor).

Happy coding!
