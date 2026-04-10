# Vault Report: Karpathy's LLM Knowledge Base vs. What We Built

**Date:** April 10, 2026
**Context:** Andrej Karpathy published his "LLM Knowledge Bases" framework on April 3, 2026. This report breaks down his philosophy, architecture, and where it converges with and diverges from what we actually built with Vault.

---

## Karpathy's System: The Core Idea

On **April 3, 2026**, Karpathy posted on X: *"Something I'm finding very useful recently: using LLMs to build personal knowledge bases for various topics of research interest. A large fraction of my recent token throughput is going less into manipulating code, and more into manipulating knowledge (stored as markdown and images)."* The post got **16+ million views.**

The next day, he dropped the [idea file gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) -- the full architecture.

Karpathy's thesis is simple and sharp: **stop using LLMs as search engines. Use them as librarians.**

Most people's experience with LLMs and documents looks like RAG: the LLM retrieves relevant chunks at query time and generates an answer. The problem? The LLM is *rediscovering knowledge from scratch on every question.* There's no accumulation. Subtle questions requiring synthesis across multiple documents require the LLM to piece together relevant fragments every time.

Karpathy flips this. Instead of querying raw docs, the LLM **compiles** them into a persistent, structured wiki. Knowledge gets compiled once, then kept current -- not re-derived repeatedly.

His analogy: **"Obsidian is the IDE, the LLM is the programmer, the wiki is the codebase."**

> "The tedious part of maintaining a knowledge base is not the reading or the thinking -- it's the bookkeeping. Updating cross-references, keeping summaries current, noting when new data contradicts old claims, maintaining consistency across dozens of pages."

> "Humans abandon wikis because the maintenance burden grows faster than the value. LLMs don't get bored, don't forget to update a cross-reference, and can touch 15 files in one pass."

> "RAG retrieves and forgets. A wiki accumulates and compounds."

At the time of posting, Karpathy's own wiki contained **~100 articles and ~400,000 words** -- without him writing a single word directly.

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
User supplies new source. LLM reads it, extracts key information, integrates into the existing wiki. Updates relevant pages, maintains cross-references, appends to operation log. A single new paper might cascade changes across **10-15 existing pages**.

### Query
User asks questions against the wiki. LLM searches relevant pages and synthesizes answers with citations. Valuable results become new wiki pages -- knowledge compounds.

### Lint
Periodic health checks. Identifies contradictions, stale claims, orphan pages, missing cross-references, and data gaps. The LLM scans the wiki for inconsistencies. Can trigger web searches to fill identified gaps.

---

## The Graph Structure: How Content Connects

The wiki is not a flat collection of documents. It's an **interconnected graph** with explicit, typed relationships.

**Backlinks and cross-references:** The LLM generates summaries, extracts key concepts, writes dedicated articles for important topics, and creates backlinks between related ideas. A single source ingestion cascades across the wiki.

**Typed edges** (from the v2 extension pattern building on Karpathy's original):

| Edge Type | Meaning |
|-----------|---------|
| `supports` | Evidence reinforcing a claim |
| `contradicts` | Conflicting evidence |
| `evolved_into` | How an idea changed over time |
| `depends_on` | Prerequisite relationships |
| `caused` | Causal chain |
| `fixed` | Resolution of a problem |
| `supersedes` | Replacement relationship |

As the community around his work puts it: *"Not all connections are equal. 'uses,' 'depends on,' 'contradicts,' 'caused,' 'fixed,' 'supersedes' carry different semantic weight."*

**Graph-based traversal:** Queries leverage the graph topology -- start at a node, walk outward through typed edges, find everything downstream. This catches connections that keyword search misses.

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
> "The human's job is to curate sources, direct the analysis, ask good questions, and think about what it all means. The LLM's job is everything else."

### 5. The Memex, Realized
Karpathy explicitly echoes Vannevar Bush's 1945 Memex concept: personal, curated knowledge stores with associative trails between documents. *"Bush's vision was closer to this than to what the web became: private, actively curated, with the connections between documents as valuable as the documents themselves."* The difference: *"The part he couldn't solve was who does the maintenance. The LLM handles that."*

---

## Eureka Labs: The Education Thread

Separately, Karpathy founded Eureka Labs (July 2024) -- an "AI native" education platform. The vision: **teacher + AI symbiosis.** Human experts design course materials. AI teaching assistants guide students through them.

First product: LLM101n -- 17 chapters building from fundamentals to production LLMs, structured as a prerequisite-based progression (bigram models -> attention -> transformers -> optimization -> deployment). Guiding philosophy via Feynman: *"What I cannot create, I do not understand."*

The connection to the LLM Wiki is philosophical: Karpathy sees knowledge as something that should be *structured, sequenced, and actively maintained* -- whether that's a personal wiki or a curriculum. LLM101n is itself a directed graph of prerequisite knowledge nodes. The AI doesn't replace the expert; it handles the scaffolding.

---

## Community Response

Within 48 hours of Karpathy's gist, the community built:
- **Graphify** -- turns any folder into a queryable knowledge graph with Obsidian vault output; reportedly cuts token usage per query by **71.5x**
- **llmwiki** -- open source implementation with MCP + Claude integration
- **Wiki-Recall** -- compiled knowledge + layered memory (5-layer architecture, 1,060 tests)
- **second-brain** -- Obsidian pattern implementation
- Multiple Logseq, Notion, .NET, Python, and Node implementations

The pattern clearly resonated. The hunger was there.

---

## Karpathy's Tooling Stack

- **Obsidian** -- the IDE for browsing the wiki (renders markdown with backlinks, graph view)
- **qmd** -- local search engine he "vibe coded"; BM25/vector hybrid search with LLM re-ranking; available as CLI or MCP server
- **Marp** -- markdown-based slide decks generated from wiki content
- **Dataview** -- query wiki frontmatter for dynamic tables
- **Git** -- the wiki is just a git repo of markdown files
- **Obsidian Web Clipper** -- converts web content to markdown for ingest

Provider-agnostic: works with OpenAI, Anthropic, Gemini, Ollama, OpenRouter, Groq, Together, xAI, Cerebras, or fully offline.

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

## Sources

- [Karpathy's original tweet (April 3, 2026)](https://x.com/karpathy/status/2039805659525644595) -- 16M+ views
- [LLM Wiki GitHub Gist (idea file)](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
- [LLM Wiki v2 Extension](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2) -- typed edges, dashboards
- [Eureka Labs](https://eurekalabs.ai/) / [LLM101n Course](https://github.com/karpathy/LLM101n)
- [Graphify](https://github.com/safishamsi/graphify) -- community implementation (71.5x token reduction)
- [llmwiki](https://github.com/lucasastorian/llmwiki) -- open source Claude MCP implementation

---

*Fill in the Vault side of this comparison and this becomes a genuine strategic document. What did you build?*
