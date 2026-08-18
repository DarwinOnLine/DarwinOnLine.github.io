<style>
@media print {
  /* Real @page margins give clean top/bottom spacing on every page, including
     the intermediate ones of this multi-page document. The browser's auto
     header/footer then depends on the print dialog's "Headers and footers"
     toggle (uncheck once, Chrome remembers; headless print-to-pdf never adds them). */
  @page { margin: 1.1cm 1.4cm; }
  .static-page { padding: 0 !important; }
  /* Trailing <script> (display:none) is the last child; trim the real last
     visible block too so nothing overflows onto an empty extra page. */
  .page-content > :last-child,
  .page-content > :nth-last-child(2) { margin-bottom: 0 !important; }
}
</style>

<div class="cv-header">
  <img class="cv-photo" src="assets/images/cv/photo.webp" alt="Matthieu Poignant" width="512" height="512" />
  <div class="cv-identity">
    <h1>Matthieu Poignant</h1>
    <p class="cv-title">Senior Full Stack Developer · SaaS &amp; AI Agents</p>
    <p class="cv-subtitle">From writing code to orchestrating AI · advisory &amp; enablement</p>
    <p class="cv-availability status-employed">Currently employed</p>
    <p class="cv-location"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Clermont-Ferrand, France</p>
  </div>
</div>

<div class="cv-links">
  <a class="social-link" href="https://github.com/DarwinOnLine" target="_blank" rel="noopener noreferrer">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    GitHub
  </a>
  <a class="social-link" href="https://www.linkedin.com/in/matthieu-poignant/" target="_blank" rel="noopener noreferrer">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    LinkedIn
  </a>
  <a class="social-link cv-email" href="#" data-u="bWF0dGhpZXUucG9pZ25hbnQ=" data-d="Z21haWwuY29t">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    <span class="cv-email-label">Email</span>
  </a>
</div>

<p class="cv-actions">
  <button class="cv-print-btn" onclick="window.print()">Print / PDF</button>
  <a class="cv-onepage-link" href="/en/cv-onepage">One-page version</a>
</p>

Fifteen years of web development, including eight spent designing and delivering SaaS products end to end
(architecture, backend, frontend, infrastructure, client relationship). Today, my value lies less in typing
code than in judgment: I design, I steer an AI that produces, and I own the quality of what it ships.
Generative AI in production (autonomous agents with tool-calling, multi-model pipelines, prompt and cost
management), custom agent tooling I use daily (Claude Code skills, rules and workflows), and advisory for
teams and clients on their AI usage: trade-offs between cloud and local/sovereign AI (Ollama), enablement,
upskilling. It is precisely those fifteen years of architecture that let me judge what the AI produces, and
spot when it gets it wrong.

## Experience

### Senior full stack developer · Highlight <span class="cv-period">February 2018 - July 2026</span>

[SaaS software company based in Clermont-Ferrand](https://highlight.pro/) (Storytodoc product and custom
business applications), also supporting companies in growing their business and adopting AI.

- Grew into a senior role: technical mentoring, support and upskilling of the development team
- Co-design of the architecture of an in-house application foundation reused across several products: data model, multi-environment handling, access-key system, bounded-context isolation for projection partitioning (CQRS / Event Sourcing)
- Design and delivery of complete SaaS products autonomously, from scoping to production: architecture, back/front development, Docker infrastructure, CI/CD
- Technology watch and stack choices for the company: introduction of generative AI and agents into the products
- In-house AI tooling design (Claude Code skills, rules and workflows) to drive day-to-day development, and team enablement: establishing practices, trade-offs between cloud and local/sovereign AI (Ollama)
- Advised a client (IPA Software, sports performance and athlete health monitoring) toward a fully local AI: no frontier models, guidance on purchasing a dedicated machine and selecting open-weight models
- Design of an in-house framework for testing and evaluating AI services (LLM-as-judge, multi-provider), integrated into the products
- Day-to-day project management and client relationship

All the projects detailed in the next section were carried out in this role.

### Technical designer · Modis <span class="cv-period">November 2011 - February 2018</span>

- Web project delivery from the Clermont-Ferrand agency
- Rich REST APIs for lightweight web applications: varied authentication schemes (simple, SSO, MFA, strong), JWT, extensive non-regression testing
- Technical architecture documents, application maintenance follow-up
- PHP development with Symfony and Drupal
- Long-term assignment at Michelin: R&D project then development for the DGSI of a Java / Groovy API serving IoT devices and web and mobile applications

### Analyst developer · Périscope <span class="cv-period">September 2010 - November 2011</span>

- Member of the permanent development team for the VVF Villages website
- PHP development with the Zend framework and the eZ Publish CMS

## Key projects

Seven SaaS products designed and built end to end at Highlight, several of them on a shared in-house application
foundation (CQRS / Event Sourcing, Symfony, Angular), across deliberately varied domains: AI documentation, e-commerce,
auto claims, accident reports, CSR, contract management, home incidents. The main ones are detailed below. Plus an in-house framework for testing and evaluating AI (LLM-as-judge), at the end of the section.
<span class="cv-screen-only">Expand each project for details.</span>

<details class="cv-project">
<summary><span class="cv-project-name">Storytodoc</span> <span class="cv-project-pitch">AI-generated user documentation SaaS</span></summary>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Symfony 7.4</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/angular/DD0031" alt="" loading="lazy" onerror="this.remove()" />Angular 21</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>CQRS / Event Sourcing</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/redis/FF4438" alt="" loading="lazy" onerror="this.remove()" />Redis</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>OpenAI</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/ffmpeg/007808" alt="" loading="lazy" onerror="this.remove()" />FFmpeg</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/stripe/635BFF" alt="" loading="lazy" onerror="this.remove()" />Stripe</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/googlechrome/4285F4" alt="" loading="lazy" onerror="this.remove()" />Chrome extension</span>
</p>

Highlight's product ([storytodoc.ai](https://storytodoc.ai)): capture a journey in any web application,
and AI turns it into illustrated, narrated and translated documentation. **10,000 stories captured across
600 client projects.** Product developed since 2023 on an in-house SaaS foundation started in 2020,
1,200+ personal commits.

- Complete multi-tenant SaaS platform: workspaces, roles, Stripe subscriptions with a credit system, public publishing with SSR for SEO
- Chrome extension (Manifest V3) capturing journeys: DOM, screenshots, user actions, with smart debouncing
- Asynchronous AI pipeline (CQRS + 10 Redis Messenger queues): visual analysis of captures (GPT-4o vision), content generation, multilingual translation via OpenAI webhooks
- Multi-provider abstraction: AI (OpenAI, Groq, Gemini, HeyGen) and text-to-speech (OpenAI, Google Cloud, ElevenLabs, Speechify) with per-locale voices
- Automated video generation with FFmpeg: transitions, voice-over synchronisation, multiple formats
- Standalone documentation player (Angular), embeddable and prerendered

</details>

<details class="cv-project">
<summary><span class="cv-project-name">DéguizFrance Tool</span> <span class="cv-project-pitch">AI-driven multi-supplier e-commerce automation</span></summary>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Symfony 6.4</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/angular/DD0031" alt="" loading="lazy" onerror="this.remove()" />Angular 16</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/nodedotjs/5FA04E" alt="" loading="lazy" onerror="this.remove()" />Node.js</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>DDD / CQRS / Event Sourcing</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>OpenAI Agents SDK</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>Multi-model</span>
</p>

E-commerce back office automating a merchant's daily operations: stock, orders, catalog, customer
support ([deguizfrance-tools.pockost.dev](https://deguizfrance-tools.pockost.dev)). The project where AI agent
management goes furthest. **1,500 emails processed per month, 50 to 60 hours of support work saved monthly**,
daily stock report of several thousand lines aggregated from 15-20 suppliers.

- Daily multi-supplier stock aggregation pipeline, bidirectional PrestaShop / EKAN (OMS) synchronisation
- Automated email processing: AI qualification, invoice reconciliation, contextualised customer replies (Crisp)
- Autonomous AI catalog-enrichment agent (dedicated Node.js service, OpenAI Agents SDK): tool-calling, prompts managed from the SaaS, SSE streaming
- Conversational orchestrator for bulk catalog operations (criteria-based selection, dry-run preview, per-product fan-out)
- Pluggable multi-model abstraction (GPT-4o in production), cost control: token estimation, context guards
- Integrations: PrestaShop, EKAN, Gmail / IMAP, Microsoft Graph (SharePoint Excel), Crisp, S3, Slack

</details>

<details class="cv-project">
<summary><span class="cv-project-name">COLT</span> <span class="cv-project-pitch">direct-recourse car claim management platform</span></summary>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Symfony 5.4</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/angular/DD0031" alt="" loading="lazy" onerror="this.remove()" />Angular 6</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/jsonwebtokens/D63AFF" alt="" loading="lazy" onerror="this.remove()" />JWT (Lexik)</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/doctrine/FC6A31" alt="" loading="lazy" onerror="this.remove()" />Doctrine ORM</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/docker/2496ED" alt="" loading="lazy" onerror="this.remove()" />Docker</span>
</p>

For Réflexe Accident: the complete direct-recourse back office, from claim declaration to litigation
([colt.les-affranchis.eu](https://colt.les-affranchis.eu)). **~2,000 recourse cases handled since 2018**, used
daily by the claims team. My largest project: 2,400+ personal commits, 10+ orchestrated Docker containers.

- Multi-tenant platform: per-company data separation, application roles, JWT + refresh tokens authentication (Lexik)
- Rich business workflows: 4 claim types, 40+ steps (assessment, negotiation, recovery, litigation), provisioning and financial tracking
- Document generation: token-based HTML templates, PDF generation (mPDF), document compression and manipulation (ILovePDF)
- Dedicated file-management microservice (Slim), QR code generation, REST API (FOSRestBundle) on Doctrine ORM
- Business integrations: Maileva (registered mail), YouSign (e-signature), Twilio (SMS), Google Geocoding, Clearbus (insurance data)

</details>

<details class="cv-project">
<summary><span class="cv-project-name">IzzyConstat</span> <span class="cv-project-pitch">consumer-facing digital car accident report</span></summary>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="" loading="lazy" onerror="this.remove()" />React 18</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="" loading="lazy" onerror="this.remove()" />TypeScript</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/pwa/5A0FC8" alt="" loading="lazy" onerror="this.remove()" />Offline-first PWA</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 2 20 20"/><path d="M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"/><path d="M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"/></svg>Workbox</span>
</p>

Réflexe Accident's field application: report a car accident from a phone, at the roadside, even without
network coverage. In production since 2024. **[Try the app on your phone](https://app.izzyconstat.fr/)**, you can fill a real report live.

- Complete declarative journey in 12 steps (32 screens): vehicles, witnesses, injuries, sketch, photos
- Offline-first PWA (Workbox): the whole report can be filled without a connection
- Decision-tree chatbot for liability assignment (French IRSA scale), synchronised with the report model
- PDF generation of the official accident report, e-signature with double confirmation, submission to the COLT back office
- Reverse geocoding (OpenStreetMap), fleet data pre-filling, bilingual FR / EN

</details>

<details class="cv-project">
<summary><span class="cv-project-name">Mecoa</span> <span class="cv-project-pitch">online CSR assessment</span></summary>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Symfony 6.4</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/php/777BB4" alt="" loading="lazy" onerror="this.remove()" />PHP 8.2</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/angular/DD0031" alt="" loading="lazy" onerror="this.remove()" />Angular 16</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>CQRS / Event Sourcing</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>Mercure</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/googleslides/FBBC04" alt="" loading="lazy" onerror="this.remove()" />Google Slides</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/docker/2496ED" alt="" loading="lazy" onerror="this.remove()" />Docker</span>
</p>

CSR audit platform built on the in-house foundation: run a corporate social responsibility assessment guided by a
standards framework ([documentation](https://mecoa.lum-transition.com/outil-de-diagnostic-rse)). Delivered in 2024.

- Multi-tenant SaaS platform: audit engine backed by a standards framework and a CSR knowledge base
- Automatic Google Slides deck generated at the end of the audit: per-category slides, risk summary, key points, recommendations and charts (Google Slides API, async processing)
- CQRS / Event Sourcing architecture (Prooph) in isolated contexts: audit, standards, finance, environments
- Full SaaS billing: plans, subscriptions, quotas and invoices (dedicated finance contexts)
- Real-time via Mercure, JWT authentication (Lexik), multi-environment handling
- Direct reuse of the in-house application foundation: data model, access keys, projection partitioning

</details>

<details class="cv-project">
<summary><span class="cv-project-name">MyNeyrial</span> <span class="cv-project-pitch">commercial offers and electronic contracting</span></summary>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Symfony 7.4</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/php/777BB4" alt="" loading="lazy" onerror="this.remove()" />PHP 8.4</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/angular/DD0031" alt="" loading="lazy" onerror="this.remove()" />Angular 22</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>Yousign</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/docker/2496ED" alt="" loading="lazy" onerror="this.remove()" />Docker</span>
</p>

From commercial offer to electronically signed contract, with synchronisation of the company's ERP
and CRM ([myneyrial.fr](https://myneyrial.fr)). A pillar of the company's sales process: **6,500 projects
handled and 4,000 signed documents (contracts, delivery reports) over 7 years**, thousands of CRM items
synchronised daily.

- Complete workflow: offers, quotes, contracts, amendments, delivery reports (13 project states)
- Yousign e-signature (API v3): multiple signers, SMS 2FA, webhooks, automatic retrieval of signed documents
- Dual-format document generation from HTML templates: PDF (mPDF) and Word (PHPWord), document merging
- Microsoft Navision ERP integration over SOAP / NTLM (customers, items, contracts) and Pipedrive CRM (deals to projects)
- 17 granular security roles, 600+ assertion E2E suite, dedicated file-management microservice, 8 Docker containers

</details>

<details class="cv-project">
<summary><span class="cv-project-name">AITestBench</span> <span class="cv-project-pitch">in-house AI testing &amp; evaluation framework</span></summary>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Symfony bundle</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/php/777BB4" alt="" loading="lazy" onerror="this.remove()" />PHP 8.2</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>LLM-as-judge</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>Multi-provider</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>PHPStan</span>
</p>

In-house Symfony bundle to test and evaluate AI services, designed end to end. An LLM acts as a judge&nbsp;: it grades
the relevance of outputs against natural-language criteria. Integrated into DéguizFrance and Storytodoc.

- LLM-as-judge&nbsp;: evaluation of AI outputs against natural-language criteria (verdict, confidence, reasoning)
- 6 providers (OpenAI, Anthropic, Gemini, Mistral, Groq, OpenRouter), extensible adapters
- Per-run metrics (cost, tokens, latency) and snapshots for regression testing
- PHPUnit-style CLI + web dashboard, encrypted credentials (libsodium), shipped as an internal bundle (PHPStan level 6)

</details>

## Skills

<div class="cv-skills">
<div class="cv-skill-group">
<h3>Backend</h3>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/php/777BB4" alt="" loading="lazy" onerror="this.remove()" />PHP 8</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Symfony 5+</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/doctrine/FC6A31" alt="" loading="lazy" onerror="this.remove()" />Doctrine</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/openapiinitiative/6BA539" alt="" loading="lazy" onerror="this.remove()" />REST APIs · OpenAPI</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>CQRS / Event Sourcing</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/nodedotjs/5FA04E" alt="" loading="lazy" onerror="this.remove()" />Node.js</span>
</p>
</div>
<div class="cv-skill-group">
<h3>Frontend</h3>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="" loading="lazy" onerror="this.remove()" />TypeScript</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/angular/DD0031" alt="" loading="lazy" onerror="this.remove()" />Angular</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="" loading="lazy" onerror="this.remove()" />React</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/ngrx/BA2BD2" alt="" loading="lazy" onerror="this.remove()" />NgRx</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/materialdesign/757575" alt="" loading="lazy" onerror="this.remove()" />Angular Material</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/sass/CC6699" alt="" loading="lazy" onerror="this.remove()" />SCSS</span>
</p>
</div>
<div class="cv-skill-group">
<h3>AI orchestration &amp; advisory</h3>
<p class="cv-chips">
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>OpenAI Agents SDK</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>Tool-calling · SSE streaming</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/claude/D97757" alt="" loading="lazy" onerror="this.remove()" />Claude Code (skills, rules, MCP, workflows)</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/ollama/888888" alt="" loading="lazy" onerror="this.remove()" />Local / sovereign AI (Ollama)</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/googlegemini/8E75B2" alt="" loading="lazy" onerror="this.remove()" />Multi-model (GPT, Claude, Gemini, Ollama)</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>Prompt &amp; cost management</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>AI advisory &amp; enablement</span>
</p>
</div>
<div class="cv-skill-group">
<h3>Data &amp; messaging</h3>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/mysql/4479A1" alt="" loading="lazy" onerror="this.remove()" />MySQL / MariaDB</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="" loading="lazy" onerror="this.remove()" />PostgreSQL</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/redis/FF4438" alt="" loading="lazy" onerror="this.remove()" />Redis</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Symfony Messenger</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>Mercure</span>
</p>
</div>
<div class="cv-skill-group">
<h3>Infra &amp; tooling</h3>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/docker/2496ED" alt="" loading="lazy" onerror="this.remove()" />Docker / docker-compose</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"/></svg>CI/CD</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/linux/FCC624" alt="" loading="lazy" onerror="this.remove()" />Unix / Linux</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/nginx/009639" alt="" loading="lazy" onerror="this.remove()" />Nginx</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/apache/D22128" alt="" loading="lazy" onerror="this.remove()" />Apache</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/git/F05032" alt="" loading="lazy" onerror="this.remove()" />Git</span>
</p>
</div>
<div class="cv-skill-group">
<h3>Quality &amp; methods</h3>
<p class="cv-chips">
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>PHPStan</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>PHP-CS-Fixer</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>Rector</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/eslint/4B32C3" alt="" loading="lazy" onerror="this.remove()" />ESLint</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/></svg>PHPUnit (E2E)</span>
  <span class="cv-chip">Agile</span>
  <span class="cv-chip">Project management</span>
  <span class="cv-chip">Client relationship</span>
</p>
</div>
</div>

## Education

- **Master's degree in computer science engineering**, ISIMA, Clermont-Ferrand, France (2007 - 2010), software engineering and computer systems track
- **Two-year technical degree in computer science (DUT)**, IUT Clermont-Ferrand (2005 - 2007)
- **French scientific baccalaureate**, engineering science specialty, with honours (2005)

## Languages

<p class="cv-chips">
  <span class="cv-chip">🇫🇷 French (native)</span>
  <span class="cv-chip">🇬🇧 English (technical)</span>
  <span class="cv-chip">🇪🇸 Spanish (basics)</span>
</p>

## Beyond code

Born and raised in Auvergne, France.

<p class="cv-chips">
  <span class="cv-chip">🌍 Open Source</span>
  <span class="cv-chip">📮 Philately</span>
  <span class="cv-chip">💬 Comics</span>
  <span class="cv-chip">🤡 Stephen King</span>
  <span class="cv-chip">🎬 Movies / TV shows</span>
  <span class="cv-chip">☢️ Post-apo</span>
</p>

This site runs on [Quarkdown](https://github.com/DarwinOnLine/quarkdown), a zero-dependency Markdown
SPA engine I built. I also write about the craft on [the blog](/en/blog): AI, craft, architecture, career.

<script>
(function () {
  function revealEmail(a) {
    var email = atob(a.dataset.u) + '@' + atob(a.dataset.d);
    a.href = 'mailto:' + email;
    var label = a.querySelector('.cv-email-label');
    if (label) label.textContent = email;
    return email;
  }

  document.querySelectorAll('.cv-email').forEach(function (a) {
    a.addEventListener('click', function (e) {
      if (a.getAttribute('href') === '#') {
        e.preventDefault();
        revealEmail(a);
      }
    });
  });

  // Print: open all accordions and reveal the email, restore accordions afterwards
  if (!window._cvPrintHook) {
    window._cvPrintHook = true;
    var closedBeforePrint = [];
    window.addEventListener('beforeprint', function () {
      document.querySelectorAll('.cv-email').forEach(revealEmail);
      closedBeforePrint = Array.from(document.querySelectorAll('details.cv-project:not([open])'));
      closedBeforePrint.forEach(function (d) { d.setAttribute('open', ''); });
    });
    window.addEventListener('afterprint', function () {
      closedBeforePrint.forEach(function (d) { d.removeAttribute('open'); });
      closedBeforePrint = [];
    });
  }
})();
</script>
