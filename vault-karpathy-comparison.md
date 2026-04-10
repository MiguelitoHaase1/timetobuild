# Vault Report: Karpathy's LLM Knowledge Base vs. What We Built

**Date:** April 10, 2026
**Context:** Andrej Karpathy published his "LLM Knowledge Bases" framework on April 3, 2026. This report breaks down his philosophy, architecture, and where it converges with and diverges from what we actually built with Vault.

---

## Karpathy's System: The Core Idea

Karpathy's thesis is simple and sharp: **stop using LLMs as search engines. Use them as librarians.**

Most people's experience with LLMs and documents looks like RAG: the LLM retrieves relevant chunks at query time and generates an answer. The problem? The LLM is *rediscovering knowledge from scratch on every question.* There's no accumulation. Subtle questions requiring synthesis across multiple documents require the LLM to piece together relevant fragments every time.

Karpathy flips this. Instead of querying raw docs, the LLM **compiles** them into a persistent, structured wiki. Knowledge gets compiled once, then kept current -- not re-derived repeatedly.

> "The tedious part of maintaining a knowledge base is not the reading or the thinking -- it's the bookkeeping. Updating cross-references, keeping summaries current, noting when new data contradicts old claims, maintaining consistency across dozens of pages."

> "Humans abandon wikis because the maintenance burden grows faster than the value. LLMs don't get bored, don't forget to update a cross-reference, and can touch 15 files in one pass."

---

## Karpathy's Three-Layer Architecture

### Layer 1: Raw Sources (Immutable)
- Curated collection: articles, papers, images, data files
- Never modified by the LLM
- Single source of truth
- Obsidian Web Clipper converts web content to markdown

### Layer 2: The Wiki (LLM-Maintained)
- LLM-generated markdown files organized by domain
- Summaries, entity pages, concept pages, comparisons, syntheses
- The LLM owns this entirely; humans read it
- Backlinks and cross-references maintained automatically

### Layer 3: The Schema (The Rules)
- Configuration document (CLAUDE.md for Claude Code, AGENTS.md for Codex)
- Defines wiki structure, conventions, operational workflows
- Co-evolves with user needs

---

## The Three Operations

### Ingest
User supplies new source. LLM reads it, extracts key information, integrates into the existing wiki. Updates relevant pages, maintains cross-references, appends to operation log.

### Query
User asks questions against the wiki. LLM searches relevant pages and synthesizes answers with citations. Valuable results become new wiki pages -- knowledge compounds.

### Lint
Periodic health checks. Identifies contradictions, stale claims, orphan pages, missing cross-references, and data gaps. The LLM scans the wiki for inconsistencies.

---

## The Navigation Layer

**index.md** -- Content-oriented catalog listing all wiki pages by category with summaries. LLM updates after every ingest. Enables efficient discovery without embedding infrastructure at moderate scale (~100 sources, ~hundreds of pages).

**log.md** -- Append-only chronological record. Parseable entry prefixes (e.g., `## [2026-04-02] ingest | Article Title`). Documents wiki evolution; helps LLM understand recent context.

**wiki/dashboards/** -- Markdown-first dashboards for recent sources, timeline, contradictions, open questions. All readable in plain Obsidian.

---

## Karpathy's Philosophy: What He Actually Believes

### 1. The LLM is a Compiler, Not a Search Engine
Feed it raw data. It produces structured, navigable output. The wiki *is* the artifact -- not the conversation.

### 2. Markdown is the Universal Medium
By choosing markdown, the knowledge base isn't locked to any vendor. If Obsidian disappears, the files remain readable. If Claude Code goes away, switch to another agent. Local-first. Provider-agnostic.

### 3. The Wiki is a Compounding Asset
Each ingest makes the wiki more valuable. Cross-references deepen. Contradictions surface. This is the opposite of chat -- where each conversation starts from zero.

### 4. Humans Curate, LLMs Maintain
The human decides what's worth knowing. They curate sources and direct analysis. The LLM handles everything else -- summarizing, cross-referencing, consistency-checking.

### 5. The Memex, Realized
Karpathy explicitly echoes Vannevar Bush's 1945 Memex concept: personal, curated knowledge stores with associative trails between documents. The difference: *"The part he couldn't solve was who does the maintenance. The LLM handles that."*

---

## Eureka Labs: The Education Thread

Separately, Karpathy founded Eureka Labs (July 2024) -- an "AI native" education platform. The vision: **teacher + AI symbiosis.** Human experts design course materials. AI teaching assistants guide students through them.

First product: LLM101n, an undergraduate course on training your own AI.

The connection to the LLM Wiki is philosophical: Karpathy sees knowledge as something that should be *structured, sequenced, and actively maintained* -- whether that's a personal wiki or a curriculum. The AI doesn't replace the expert; it handles the scaffolding.

---

## Community Response

Within 48 hours of Karpathy's gist, the community built:
- **Graphify** -- turns any folder into a queryable knowledge graph with Obsidian vault output
- **LLM Wiki Kit** -- MCP server implementations
- **Wiki-Recall** -- compiled knowledge + layered memory (5-layer architecture, 1,060 tests)
- Multiple Logseq, Notion, and Obsidian integrations
- .NET, Python, and Node implementations

The pattern clearly resonated. The hunger was there.

---

## The Comparison: Karpathy vs. What We Built with Vault

### Where the Philosophies Converge

| Principle | Karpathy | Vault |
|-----------|----------|-------|
| Knowledge should compound, not reset | Yes -- wiki as persistent artifact | *[How does Vault handle persistence?]* |
| Markdown-first, vendor-agnostic | Yes -- plain .md files, any editor | *[What format does Vault use?]* |
| LLM as maintainer, not just responder | Yes -- ingest/query/lint cycle | *[How does Vault use AI?]* |
| Human curation + AI bookkeeping | Yes -- humans pick sources, LLM organizes | *[What's Vault's human/AI split?]* |
| Cross-referencing as core feature | Yes -- backlinks, entity pages | *[Does Vault do cross-refs?]* |

### Where They Might Diverge

**Scale assumptions.** Karpathy explicitly says his approach works at "moderate scale" (~100 sources, ~hundreds of pages). Beyond that, he suggests adding qmd (a local search engine with BM25/vector hybrid search). What scale did you build Vault for?

**The schema layer.** Karpathy puts significant weight on the CLAUDE.md/AGENTS.md configuration -- the rules that govern how the LLM behaves. This is essentially the "personality" of the wiki. How does Vault handle this?

**The lint operation.** This is distinctive -- periodic health checks for contradictions, stale claims, orphan pages. Most knowledge tools don't do this. Does Vault have an equivalent?

**Obsidian as visualization layer.** Karpathy leans heavily on Obsidian for graph visualization, Dataview queries, and Marp slide generation. What's Vault's UI story?

---

## Open Questions for the Comparison

I couldn't find Vault in this codebase. To complete this analysis, I need to understand:

1. **What is Vault?** Is it a separate codebase, an Obsidian vault workflow, a conceptual framework, or something else entirely?
2. **What problem does Vault solve?** Is it personal knowledge management, client-facing content, team collaboration, or something different?
3. **What's the architecture?** Three-layer like Karpathy, or structured differently?
4. **What's the AI integration model?** Does the LLM compile/maintain, or does it serve a different role?
5. **What's the content model?** Flat files, graph database, relational DB, or something hybrid?

---

## My Take: What Karpathy Got Right

**The compile-once insight is powerful.** RAG's weakness is exactly what Karpathy identifies -- re-deriving knowledge on every query is wasteful. A compiled wiki creates a durable, inspectable artifact.

**Markdown as universal substrate is smart.** No lock-in. No proprietary formats. The files outlast any tool.

**The bookkeeping framing is the best part.** "The tedious part is not the reading or the thinking -- it's the bookkeeping." This reframes AI from "replacement for thinking" to "replacement for drudgery." That's the right frame for adoption.

**What he may underestimate:** The cold-start problem. Building the initial schema and seeding the wiki takes real effort. Most people will bail before the compounding kicks in. The tools that win will be the ones that make the first 10 minutes magical, not just the 10th hour.

---

*Fill in the Vault side of this comparison and this becomes a genuine strategic document. What did you build?*
