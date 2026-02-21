# When my stamp collecting hobby meets AI: the Mancolister experience

*Or how I let Claude write nearly 20,000 lines of code while I played the annoying client*

<figure style="text-align: center;">
  <img src="/assets/images/posts/l-experience-mancolister/collection.jpg"
  alt="My collection" style="max-width: 100%;" />
<figcaption>Old people hobbies, I'm telling you</figcaption>
</figure>

## The starting point

I've been collecting stamps since I was a kid. After my first year of secondary school exams,
my father showed up with a small box filled with yellowed, perforated little papers he'd been keeping since
his own childhood. And that's where it all began — I sorted, classified, dropped it for a bit during my studies,
then picked it back up, complete with Yvert & Tellier valuation catalogue, nice binders and sheets sorted by year.

A well-known concept among collectors is the "dispoliste" and "mancoliste" —
basically a list of available duplicates, and a list of missing items.

To build these lists, the classic approach is a spreadsheet. There are a few opaque collection management solutions,
but overall, philatelic lists by year with valuations aren't easily available online.

<figure style="text-align: center;">
  <img src="/assets/images/posts/l-experience-mancolister/mancoliste.jpg"
  alt="Mancoliste" style="max-width: 100%;" />
<figcaption>There are hardcore versions too</figcaption>
</figure>

So my dream for years was to have my own simple app, usable offline on my phone,
with all ~10,000 French stamps and my personal collection synced up.

And then I wanted to try something: [BMAD](https://github.com/bmad-code-org/BMAD-METHOD) —
a methodology to structure a project from A to Z with an AI as developer. The perfect opportunity.

I'd watched this video by [Benjamin Code](https://www.youtube.com/watch?v=-aUFe2r9fpE) that got me a bit hyped,
I had my subject, access to Claude Max, it was the perfect time to try.

And... oh right, a name: **Mancolister**.

## The rules of the game

I set myself three constraints:

### 1. Claude writes ALL the code

Not a single line by hand. I validate, I question, I sometimes reject — but I don't code.
My role: Product Owner with a technical hat. I know Symfony, React, Docker...
so I can challenge architectural choices. But the implementation is Claude's job,
or rather Charlie's, or Elena's — you'll understand soon enough.

### 2. Zero hosting cost

- **Backend**: a Docker image on my Synology NAS
- **Frontend**: Vercel (free for personal projects)
- **Database**: SQLite (a single file)
- **CI/CD**: GitHub Actions

Monthly total: €0.

### 3. Making do with imperfect data

No official API for French stamps — I searched, I cried, even the paid solutions aren't great.
Solution: scrape two websites that don't have the same information, don't use the same formats...
and sometimes contradict each other on prices:
- [Timbres de France](https://www.timbres-de-france.com): Run by an enthusiast who seems to maintain EVERY
PAGE by hand — that was at least the case a few years ago when I exchanged with him, the site seems
to have stayed the same but keeps being updated
- [StampWorld](https://www.stampworld.com): A kind of open catalogue that also allows buying and selling.

<figure style="text-align: center;">
  <img src="/assets/images/posts/l-experience-mancolister/et-c-est-parti.jpg"
  alt="Let's go" style="max-width: 100%;" />
<figcaption>POV: You're diving into your philately project</figcaption>
</figure>

## BMAD: a structured methodology

BMAD breaks the project into distinct phases:

**1. Analysis** — Brainstorming, feasibility study, technical research.

**2. Planning** — Writing the PRD, identifying functional and non-functional requirements.
Breaking down into epics and stories.

**3. Solutioning** — Detailed architecture, justified technology choices, UX specifications.

**4. Implementation** — Development story by story, with a retrospective after each epic.

<figure style="text-align: center;">
  <img src="/assets/images/posts/l-experience-mancolister/bmad.png"
    alt="BMAD Workflow" style="max-width: 100%;" />
    <figcaption>Standard workflow (© <a href="https://www.sfeir.dev/ia/bmad-method-comment-revolutionner-le-developpement-avec-lia-agentique" target="_blank">sfeir.dev</a>)</figcaption>
</figure>

Everything generates traceable artifacts. Every decision is documented with its context and rationale.

To help me along, I can count on my virtual team:

- **Alice**, Product Owner — she carries the product vision and prioritizes the backlog
- **Bob**, Scrum Master — he facilitates ceremonies and keeps sprints on track
- **Charlie**, Senior Dev — he challenges architecture and technical choices
- **Dana**, QA Engineer — she hunts bugs and validates quality
- **Elena**, Junior Dev — she's ramping up and brings a fresh perspective
- ... and me, **Darwin**, Project Lead — The client, basically

## The final architecture

| Layer | Stack |
|---|---|
| **Frontend** (Vercel) | React 19 + TypeScript + Vite + PWA<br>IndexedDB (Dexie), Service Worker offline |
| **API** | REST |
| **Backend** (NAS Docker) | Symfony 7.4 + API Platform<br>SQLite, Scrapers (timbres-de-france + Stampworld) |

**Why these choices?**

- **React 19 + Vite**: native PWA, fast builds, mature ecosystem
- **Symfony + API Platform**: my comfort zone, REST API in a few annotations
- **SQLite**: no DB server to maintain, backup = copy a file
- **IndexedDB**: ~50 MB of local storage, search <500ms across 10K stamps

## The scraping challenge

Two sources, two different problems.

<figure style="text-align: center;">
  <img src="/assets/images/posts/l-experience-mancolister/le-scraper.jpg"
  alt="THE scraper" style="max-width: 100%;" />
</figure>

### timbres-de-france.com

The reference for French stamps. Near-complete coverage since 1849. But:
- Sometimes inconsistent HTML
- Pagination to handle
- Rate limiting needed (1 request/second to stay polite)

### Stampworld

Complementary data on valuations. But:
- Not all French stamps
- Different numbering
- Some stamps exist there without a Y&T equivalent

### The solution: smart merging

```
Primary source (timbres-de-france.com)
    │
    ▼
MergeStrategyService
    │
    ├── If the stamp exists in both sources → enrich
    │
    └── If the stamp only exists on Stampworld → ignore
```

The Y&T (Yvert & Tellier) number serves as the unique key. No Y&T = no creation.
Simple, but it took several iterations to handle all the edge cases (and a few issues remain).

## Offline mode: the core need

I submitted a Use Case: "I'm at a flea market and I want to know if I already have the stamp I see on
the seller's table in front of me."

At a flea market, no WiFi. The app must work **completely** offline.

**The offline stack:**

1. **Service Worker** (Workbox) — Caches static assets
2. **IndexedDB** (Dexie) — Stores the complete catalogue locally
3. **Sync Queue** — Offline modifications accumulate and sync when the network returns

Result: I open the app, search for "Marianne rouge 1960", and get my answer in 500ms.
Even in the middle of nowhere without network (as long as I'd synced my data beforehand).

## What I learned about working with an AI

### What works well

**Exhaustive documentation.** Claude generates PRDs, architecture specs, retrospectives...
More documentation than I would ever have written on my own.
And it's useful: when I come back to a decision 3 weeks later, the context is right there.

**The process.** Almost like clockwork.
With practice and a few iterations (by insisting during retros), I set up a well-oiled process for each story:

> 📋 Creation → 💻 Dev → 🔍 Review → 🧪 Manual test → ✅ Commit

**Review and testing rigor.** Claude is merciless with himself + 1,757 tests in total.
Claude has this reflex I don't always have: testing edge cases, errors, impossible states, and he does
reviews without ego too — he self-criticizes and course-corrects.

**Exploring alternatives.** "What if we used X instead of Y?"
Claude can argue both sides without bias. Handy for architecture decisions.

### What requires vigilance

**Over-engineering.** Claude loves abstractions. Sometimes too much.
<small>(Maybe a hidden impostor syndrome? 😏)</small>
"We could create a factory that..." — No, keep it simple first.

**Technical hallucinations.** Rare, but it happens.
A non-existent API, a made-up config option. Hence the importance of the PO's technical hat.

**Debt accumulation.** Example: The `CatalogSyncService` file grew story after story.
4 out of 8 stories in epic 15 modified it. A refactoring is needed for V2. We've scheduled a meeting with the team
(we're friends now)

## The numbers

| Metric | Value |
|---|---|
| Stories completed | 103/103 |
| Epics | 15 |
| Lines of code (frontend) | 8,385 |
| Lines of code (backend) | 10,732 |
| Tests | 1,757 |
| Monthly cost | €0 |
| Project duration | ~5 weeks (evenings and weekends) |

## What's next?

The app is in production. I struggled to publish it automatically on my NAS but the performance promise
despite the deployment target has been kept.

<p style="text-align: center;">
  <img src="/assets/images/posts/l-experience-mancolister/mancolister.jpg"
    alt="Mancolister" style="max-width: 100%;" />
</p>

I use it. It does what I wanted it to do.

For the future, V2, a few ideas:
- **Improve scraping** — I synced the 1849-2026 period, it took 7 hours, I spotted inconsistencies,
gaps, the promise of a few future iterations. I'll try to find new sources and have
a complete refactoring of `CatalogSyncService` which is apparently a nightmare to maintain (Charlie wasn't happy)
- **Suggested price** — Suggest a selling price for my duplicates
- **Shopping cart** — List stamps to look for at flea markets

But above all, the BMAD experience convinced me. It's not "AI coding for me",
it's a structured collaboration where everyone plays their role.
The PO brings the vision, the constraints, the validation. The AI brings execution, rigor, documentation.

I can already hear that BMAD is outdated with the release of new Opus versions
but [you know what I think about that](/en/blog/what-being-a-developer-has-taught-me#ignore-the-noise).

Would I do a project like this again? Absolutely.

Does it replace a human developer? No. It changes the nature of work.
Less syntax, more decisions. Less implementation, more architecture.
Less "how", more "why".

One effect on me I hadn't anticipated: despite not coding anything, the work sessions I
imposed on myself (usually one epic at a time) were mentally exhausting. Making decisions, making choices, having the AI
evaluate an idea — all of it left me drained, yet still eager to come back, boosted by watching the app
take shape.

## Final thoughts

This project proves that on a personal project where you'd usually be alone hacking away in your corner,
AI lets you set up a real professional framework — PRD, stories, reviews, tests, retros — where you'd
normally just wing it.

The most surprising thing in the end? It's not the code Claude produced. It's what the project taught me
about my own way of working. Formulating a precise need, knowing when to say no to an overly complex solution,
accepting that a first draft will be imperfect — paradoxically, it's by letting go of the keyboard
that I exercised my developer skills the most.

Now it's your turn to imagine what *you* could do with your idea — what's your old person hobby?
