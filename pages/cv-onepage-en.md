<style>
@media print {
  /* Zero page margin removes the browser's printed headers and footers;
     real margins are re-created with padding (single-page document only) */
  @page { margin: 0; }
  .static-page { padding: 1.1cm 1.4cm !important; }
  .page-cv-onepage .page-content > :last-child { margin-bottom: 0 !important; }
}
</style>

<div class="cv-header">
  <img class="cv-photo" src="assets/images/cv/photo.webp" alt="Matthieu Poignant" width="512" height="512" />
  <div class="cv-identity">
    <h1>Matthieu Poignant</h1>
    <p class="cv-title">Senior Full Stack Developer · SaaS &amp; AI Agents</p>
    <p class="cv-availability">Open to opportunities</p>
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
  <a class="cv-onepage-link" href="/en/cv">Full resume</a>
</p>

Fifteen years of web development, including eight designing and running SaaS products end to end
(architecture, back, front, infra, client relationship), with generative AI in production: autonomous
agents, multi-model pipelines, custom AI tooling (Claude Code skills, rules, workflows) and advisory on
usage (cloud vs local/sovereign AI, Ollama).

## Experience

### Senior full stack developer · Highlight <span class="cv-period">February 2018 - July 2026</span>

- Design and delivery of complete SaaS products autonomously, from scoping to production
- Co-design of an in-house application foundation (CQRS / Event Sourcing) reused across several SaaS products
- Architecture, back/front development, Docker infrastructure, CI/CD, project management and client relationship
- Grew into a senior role: technical mentoring and upskilling of the team
- Technology watch: stack choices, introduction of generative AI and agents into the products
- Custom AI tooling (Claude Code skills, rules, workflows) and internal team enablement
- Advised a client (IPA Software) toward a fully local AI: dedicated machine, open-weight model selection

### Technical designer · Modis <span class="cv-period">November 2011 - February 2018</span>

- REST APIs (SSO / MFA / JWT auth), Symfony, Drupal, architecture documents
- Long-term assignment at Michelin: Java / Groovy API for IoT devices

### Analyst developer · Périscope <span class="cv-period">September 2010 - November 2011</span>

- VVF Villages website: PHP (Zend), eZ Publish

## Key projects

- **[Storytodoc](https://storytodoc.ai)** · AI-generated user documentation SaaS: asynchronous AI pipeline (GPT-4o vision, CQRS, 10 Redis queues), Chrome extension, automated video (FFmpeg), Stripe. 10,000 stories across 600 client projects
- **[DéguizFrance Tool](https://deguizfrance-tools.pockost.dev)** · AI-driven e-commerce automation: autonomous agent (OpenAI Agents SDK), 1,500 emails automated monthly, 50-60 hours of support saved per month, pluggable multi-model (GPT-4o in production)
- **[COLT](https://colt.les-affranchis.eu)** · direct-recourse car claim management: multi-tenant, rich business workflow (4 claim types, 40+ steps), JWT, document generation (mPDF). ~2,000 cases handled since 2018
- **[IzzyConstat](https://app.izzyconstat.fr/)** · digital car accident report (React, offline-first PWA): decision-tree chatbot, e-signed PDF report
- **[MyNeyrial](https://myneyrial.fr)** · offers and contracts: Yousign e-signature, PDF / Word generation, Navision ERP, Pipedrive CRM. 6,500 projects, 4,000 signed documents over 7 years
- **AITestBench** · in-house AI testing and evaluation framework: LLM-as-judge (grades outputs against natural-language criteria), 6 providers, CLI + dashboard, integrated into DéguizFrance and Storytodoc

## Skills

<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/php/777BB4" alt="" loading="lazy" onerror="this.remove()" />PHP 8</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Symfony 6 / 7</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="" loading="lazy" onerror="this.remove()" />TypeScript</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/angular/DD0031" alt="" loading="lazy" onerror="this.remove()" />Angular</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="" loading="lazy" onerror="this.remove()" />React</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/nodedotjs/5FA04E" alt="" loading="lazy" onerror="this.remove()" />Node.js</span>
  <span class="cv-chip">CQRS / Event Sourcing</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/mysql/4479A1" alt="" loading="lazy" onerror="this.remove()" />MySQL</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="" loading="lazy" onerror="this.remove()" />PostgreSQL</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/redis/FF4438" alt="" loading="lazy" onerror="this.remove()" />Redis</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/docker/2496ED" alt="" loading="lazy" onerror="this.remove()" />Docker</span>
  <span class="cv-chip">CI/CD</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/linux/FCC624" alt="" loading="lazy" onerror="this.remove()" />Unix / Linux</span>
  <span class="cv-chip">OpenAI Agents SDK</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/claude/D97757" alt="" loading="lazy" onerror="this.remove()" />Claude Code (skills, rules, MCP)</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/ollama/888888" alt="" loading="lazy" onerror="this.remove()" />Local AI (Ollama)</span>
  <span class="cv-chip">Agile</span>
</p>

## Beyond code

<p class="cv-chips">
  <span class="cv-chip">🌍 Open Source</span>
  <span class="cv-chip">📮 Philately</span>
  <span class="cv-chip">💬 Comics</span>
  <span class="cv-chip">🤡 Stephen King</span>
  <span class="cv-chip">🎬 Movies / TV shows</span>
  <span class="cv-chip">☢️ Post-apo</span>
</p>

## Education & languages

- **Master's degree in computer science engineering**, ISIMA Clermont-Ferrand, France (2010) · **DUT in computer science** (2007) · **Scientific baccalaureate** with honours (2005)
- French (native) · English (technical) · Spanish (basics)

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

  if (!window._cvPrintHook) {
    window._cvPrintHook = true;
    window.addEventListener('beforeprint', function () {
      document.querySelectorAll('.cv-email').forEach(revealEmail);
    });
  }
})();
</script>
