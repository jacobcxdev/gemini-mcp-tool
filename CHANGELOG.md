# Changelog

## [Unreleased]

## [1.2.4] - 2026-04-30

### Fixed
- Restored `--no-fallback` CLI support and `GEMINI_MCP_NO_FALLBACK=1` handling so
  Gemini Pro quota errors propagate instead of automatically retrying with Flash.
- Threaded `noFallback` through the `ask-gemini` tool and restored regression tests
  covering the fallback gate.

## [1.2.3] - 2026-04-30

- Preserve Gemini CLI OAuth by routing model calls through the installed `gemini` binary.
- Harden child-process handling so Gemini command completion does not terminate the MCP stdio server.
- Update fork documentation and installation instructions for `jacobcxdev/gemini-mcp-tool`.

## [1.1.3]
- "gemini reads, claude edits"
- Added `changeMode` parameter to ask-gemini tool for structured edit responses using claude edit diff.
- Testing intelligent parsing and chunking for large edit responses (>25k characters). I recommend you provide a focused prompt, although large (2000+) line edits have had success in testing.
- Added structured response format with Analysis, Suggested Changes, and Next Steps sections
- Improved guidance for applying edits using Claude's Edit/MultiEdit tools, avoids reading...
- Testing token limit handling with continuation support for large responses

## [1.1.2]
- Gemini-2.5-pro quota limit exceeded now falls back to gemini-2.5-flash automatically. Unless you ask for pro or flash, it will default to pro.

## [1.1.1]

- Public
- Basic Gemini CLI integration
- Support for file analysis with @ syntax
- Sandbox mode support
