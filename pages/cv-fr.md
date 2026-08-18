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
    <p class="cv-title">Développeur Senior IA &amp; Architecte des Fondations Techniques</p>
    <p class="cv-subtitle">Du code à l'orchestration d'IA · conseil &amp; acculturation</p>
    <p class="cv-availability status-employed">En poste actuellement</p>
    <p class="cv-location"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Clermont-Ferrand</p>
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
  <button class="cv-print-btn" onclick="window.print()">Imprimer / PDF</button>
  <a class="cv-onepage-link" href="/fr/cv-onepage">Version 1 page</a>
</p>

Quinze ans de développement web, dont huit à concevoir et livrer des SaaS de bout en bout (architecture,
backend, frontend, infrastructure, relation client). Aujourd'hui, ma valeur ne tient plus à la frappe au
clavier mais au jugement&nbsp;: je conçois, j'oriente une IA qui produit, et je garantis la qualité de ce
qu'elle sort. IA générative en production (agents autonomes avec tool-calling, pipelines multi-modèles,
maîtrise des prompts et des coûts), outillage d'agent sur-mesure que j'utilise au quotidien (skills, rules
et workflows Claude Code), et accompagnement des équipes et clients sur leurs usages&nbsp;: arbitrage entre
IA cloud et locale/souveraine (Ollama), acculturation, montée en compétence. Ce sont précisément ces quinze
ans d'architecture qui me permettent de juger ce que l'IA génère, et de repérer quand elle se trompe.

## Expérience

### Développeur Senior IA & Architecte des Fondations Techniques · Behigh <span class="cv-period">depuis août 2026</span>

Je travaille sur leur SaaS ([saas.behigh.fr](https://saas.behigh.fr)).

### Développeur full stack senior · Highlight <span class="cv-period">février 2018 - juillet 2026</span>

[Éditeur clermontois de solutions SaaS](https://highlight.pro/) (produit Storytodoc et applications métier
sur mesure), qui accompagne aussi les entreprises dans le développement de leur activité et leur
acculturation à l'IA.

- Évolution vers un rôle senior&nbsp;: encadrement technique de l'équipe, accompagnement et montée en compétence des développeurs
- Co-conception de l'architecture d'un socle applicatif maison réutilisé sur plusieurs produits&nbsp;: modèle de données, multi-environnements, système d'access keys, isolation des bounded contexts pour le cloisonnement des projections (CQRS / Event Sourcing)
- Conception et réalisation de SaaS complets en autonomie, du cadrage à la production&nbsp;: architecture, dev back/front, infra Docker, CI/CD
- Veille technologique et choix de stack pour la société&nbsp;: introduction de l'IA générative et des agents dans les produits
- Conception d'outillage IA sur-mesure (skills, rules et workflows Claude Code) pour piloter le développement au quotidien, et acculturation de l'équipe&nbsp;: mise en place des pratiques, arbitrage entre IA cloud et locale/souveraine (Ollama)
- Conseil d'un client (IPA Software, performance sportive et suivi médical des athlètes) vers une IA 100&nbsp;% locale&nbsp;: refus assumé des modèles frontier, conseil à l'achat d'une machine dédiée et au choix des modèles open-weight
- Conception d'un framework interne de test et d'évaluation de services IA (LLM-as-judge, multi-provider), intégré aux produits
- Gestion de projet et relation client au quotidien

Les projets détaillés dans la section suivante ont tous été réalisés dans ce cadre.

### Concepteur technique · Modis <span class="cv-period">novembre 2011 - février 2018</span>

- Mise en œuvre de projets web depuis l'agence de Clermont-Ferrand
- APIs REST riches pour applications web légères&nbsp;: authentifications variées (simple, SSO, MFA, forte), JWT, tests de non-régression poussés
- Rédaction de dossiers d'architecture technique, suivi de maintenances applicatives
- Développements PHP avec Symfony et Drupal
- Mission longue chez Michelin&nbsp;: projet R&D puis développement pour la DGSI d'une API Java / Groovy à destination d'objets connectés (IoT) et d'applications web et mobiles

### Analyste-développeur · Périscope <span class="cv-period">septembre 2010 - novembre 2011</span>

- Intégration à l'équipe permanente de développement du site VVF Villages
- Développements PHP avec le framework Zend et le CMS eZ Publish

## Projets marquants

Sept SaaS conçus et développés de bout en bout chez Highlight, dont plusieurs bâtis sur un même socle applicatif maison
(CQRS / Event Sourcing, Symfony, Angular), dans des domaines volontairement variés&nbsp;: documentation IA, e-commerce,
sinistres auto, constat amiable, RSE, contractualisation, incidents domestiques. Les principaux sont détaillés ci-dessous. S'y ajoute un framework interne de test et d'évaluation d'IA (LLM-as-judge), en fin de section.
<span class="cv-screen-only">Dépliez chaque projet pour le détail.</span>

<details class="cv-project">
<summary><span class="cv-project-name">Storytodoc</span> <span class="cv-project-pitch">SaaS de documentation utilisateur générée par IA</span></summary>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Symfony 7.4</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/angular/DD0031" alt="" loading="lazy" onerror="this.remove()" />Angular 21</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>CQRS / Event Sourcing</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/redis/FF4438" alt="" loading="lazy" onerror="this.remove()" />Redis</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>OpenAI</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/ffmpeg/007808" alt="" loading="lazy" onerror="this.remove()" />FFmpeg</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/stripe/635BFF" alt="" loading="lazy" onerror="this.remove()" />Stripe</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/googlechrome/4285F4" alt="" loading="lazy" onerror="this.remove()" />Extension Chrome</span>
</p>

Le produit de Highlight ([storytodoc.ai](https://storytodoc.ai))&nbsp;: capture d'un parcours dans une
application web, transformé par l'IA en documentation illustrée, narrée et traduite.
**10&nbsp;000 stories capturées sur 600 projets clients.** Produit développé depuis 2023 sur un socle SaaS
maison initié en 2020, 1&nbsp;200+ commits personnels.

- Plateforme SaaS multi-tenant complète&nbsp;: workspaces, rôles, abonnements Stripe avec système de crédits, publication publique avec SSR pour le SEO
- Extension Chrome (Manifest V3) de capture de parcours&nbsp;: DOM, screenshots, actions utilisateur, avec debouncing intelligent
- Pipeline IA asynchrone (CQRS + 10 files Redis Messenger)&nbsp;: analyse visuelle des captures (GPT-4o vision), génération du contenu, traduction multilingue via webhooks OpenAI
- Abstraction multi-providers&nbsp;: IA (OpenAI, Groq, Gemini, HeyGen) et synthèse vocale (OpenAI, Google Cloud, ElevenLabs, Speechify) avec voix par locale
- Génération vidéo automatisée avec FFmpeg&nbsp;: transitions, synchronisation des voix off, multi-formats
- Player de documentation autonome (Angular) embarquable et prérendu

</details>

<details class="cv-project">
<summary><span class="cv-project-name">DéguizFrance Tool</span> <span class="cv-project-pitch">automatisation e-commerce multi-fournisseurs pilotée par IA</span></summary>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Symfony 6.4</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/angular/DD0031" alt="" loading="lazy" onerror="this.remove()" />Angular 16</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/nodedotjs/5FA04E" alt="" loading="lazy" onerror="this.remove()" />Node.js</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>DDD / CQRS / Event Sourcing</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>OpenAI Agents SDK</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>Multi-modèles</span>
</p>

Back-office e-commerce qui automatise le quotidien d'un marchand&nbsp;: stocks, commandes, catalogue, support
client ([deguizfrance-tools.pockost.dev](https://deguizfrance-tools.pockost.dev)). Le projet où le management
d'agents IA est le plus poussé. **1&nbsp;500 emails traités par mois, 50 à 60 heures de support économisées
mensuellement**, rapport de stock quotidien de plusieurs milliers de lignes agrégées depuis 15-20 fournisseurs.

- Pipeline quotidien d'agrégation de stocks multi-fournisseurs, synchronisation bidirectionnelle PrestaShop / EKAN (OMS)
- Traitement automatique des emails&nbsp;: qualification par IA, rapprochement de factures, génération de réponses client contextualisées (Crisp)
- Agent IA autonome d'enrichissement catalogue (service Node.js dédié, OpenAI Agents SDK)&nbsp;: tool-calling, prompts administrés depuis le SaaS, streaming SSE
- Orchestrateur conversationnel d'opérations en masse sur le catalogue (sélection par critères, prévisualisation dry-run, fan-out par produit)
- Abstraction multi-modèles pluggable (GPT-4o en production), maîtrise des coûts&nbsp;: estimation de tokens, garde-fous de contexte
- Intégrations&nbsp;: PrestaShop, EKAN, Gmail / IMAP, Microsoft Graph (Excel SharePoint), Crisp, S3, Slack

</details>

<details class="cv-project">
<summary><span class="cv-project-name">COLT</span> <span class="cv-project-pitch">plateforme de gestion de sinistres auto en recours direct</span></summary>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Symfony 5.4</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/angular/DD0031" alt="" loading="lazy" onerror="this.remove()" />Angular 6</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/jsonwebtokens/D63AFF" alt="" loading="lazy" onerror="this.remove()" />JWT (Lexik)</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/doctrine/FC6A31" alt="" loading="lazy" onerror="this.remove()" />Doctrine ORM</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/docker/2496ED" alt="" loading="lazy" onerror="this.remove()" />Docker</span>
</p>

Pour Réflexe Accident&nbsp;: le back-office complet du recours direct, de la déclaration du sinistre au
contentieux ([colt.les-affranchis.eu](https://colt.les-affranchis.eu)). **~2&nbsp;000 dossiers de recours traités
depuis 2018**, utilisé quotidiennement par l'équipe de gestion. Mon plus gros projet&nbsp;: 2&nbsp;400+ commits
personnels, 10+ conteneurs Docker orchestrés.

- Plateforme multi-tenant&nbsp;: séparation des données par société, rôles applicatifs, authentification JWT + refresh tokens (Lexik)
- Workflows métier riches&nbsp;: 4 types de sinistres, 40+ étapes (expertise, négociation, recouvrement, contentieux), provisionnement et suivi financier
- Génération documentaire&nbsp;: templates HTML à tokens, génération PDF (mPDF), compression et manipulation de documents (ILovePDF)
- Microservice dédié de gestion de fichiers (Slim), génération de QR codes, API REST (FOSRestBundle) sur Doctrine ORM
- Intégrations métier&nbsp;: Maileva (courrier recommandé), YouSign (signature électronique), Twilio (SMS), Google Geocoding, Clearbus (données assurance)

</details>

<details class="cv-project">
<summary><span class="cv-project-name">IzzyConstat</span> <span class="cv-project-pitch">constat amiable dématérialisé, grand public</span></summary>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/react/61DAFB" alt="" loading="lazy" onerror="this.remove()" />React 18</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/typescript/3178C6" alt="" loading="lazy" onerror="this.remove()" />TypeScript</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/pwa/5A0FC8" alt="" loading="lazy" onerror="this.remove()" />PWA offline-first</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 2 20 20"/><path d="M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"/><path d="M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"/></svg>Workbox</span>
</p>

L'application terrain de Réflexe Accident&nbsp;: déclarer un accident depuis son téléphone, au bord de la route,
même sans réseau. En production depuis 2024. **[Testez l'app sur votre mobile](https://app.izzyconstat.fr/)**, un vrai constat se remplit en direct.

- Parcours déclaratif complet en 12 étapes (32 écrans)&nbsp;: véhicules, témoins, blessés, croquis, photos
- PWA offline-first (Workbox)&nbsp;: la saisie du constat fonctionne intégralement sans connexion
- Chatbot à arbre décisionnel pour l'attribution des responsabilités (barème IRSA), synchronisé avec le modèle du constat
- Génération du constat amiable en PDF, signature électronique avec double validation, envoi vers le back-office COLT
- Géocodage inversé (OpenStreetMap), pré-remplissage des données de flotte, bilingue FR / EN

</details>

<details class="cv-project">
<summary><span class="cv-project-name">Mecoa</span> <span class="cv-project-pitch">diagnostic RSE en ligne</span></summary>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Symfony 6.4</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/php/777BB4" alt="" loading="lazy" onerror="this.remove()" />PHP 8.2</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/angular/DD0031" alt="" loading="lazy" onerror="this.remove()" />Angular 16</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>CQRS / Event Sourcing</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>Mercure</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/googleslides/FBBC04" alt="" loading="lazy" onerror="this.remove()" />Google Slides</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/docker/2496ED" alt="" loading="lazy" onerror="this.remove()" />Docker</span>
</p>

Plateforme d'audit RSE construite sur le socle maison&nbsp;: réaliser un diagnostic de responsabilité sociétale guidé par
un référentiel de normes ([documentation](https://mecoa.lum-transition.com/outil-de-diagnostic-rse)). Livrée en 2024.

- Plateforme SaaS multi-tenant&nbsp;: moteur d'audit adossé à un référentiel de normes et une base de connaissances RSE
- Génération automatique d'une présentation Google Slides en fin d'audit&nbsp;: slides par catégorie, synthèse des risques, points clés, recommandations et graphiques (API Google Slides, traitement asynchrone)
- Architecture CQRS / Event Sourcing (Prooph) en contextes isolés&nbsp;: audit, normes, finance, environnements
- Facturation SaaS complète&nbsp;: plans, abonnements, quotas et factures (contextes finance dédiés)
- Temps réel via Mercure, authentification JWT (Lexik), gestion multi-environnements
- Réutilisation directe du socle applicatif maison&nbsp;: modèle de données, access keys, cloisonnement des projections

</details>

<details class="cv-project">
<summary><span class="cv-project-name">MyNeyrial</span> <span class="cv-project-pitch">offres commerciales et contractualisation électronique</span></summary>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Symfony 7.4</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/php/777BB4" alt="" loading="lazy" onerror="this.remove()" />PHP 8.4</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/angular/DD0031" alt="" loading="lazy" onerror="this.remove()" />Angular 22</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>Yousign</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/docker/2496ED" alt="" loading="lazy" onerror="this.remove()" />Docker</span>
</p>

De l'offre commerciale au contrat signé électroniquement, avec synchronisation de l'ERP et du CRM de
l'entreprise ([myneyrial.fr](https://myneyrial.fr)). Pilier du processus de vente&nbsp;: **6&nbsp;500 projets traités
et 4&nbsp;000 documents signés (contrats, PV) en 7 ans**, des milliers d'éléments CRM synchronisés chaque jour.

- Workflow complet&nbsp;: offres, devis, contrats, avenants, PV de livraison (13 états de projet)
- Signature électronique Yousign (API v3)&nbsp;: signataires multiples, 2FA SMS, webhooks, récupération automatique des documents signés
- Génération documentaire double format depuis templates HTML&nbsp;: PDF (mPDF) et Word (PHPWord), fusion de documents
- Intégration ERP Microsoft Navision en SOAP / NTLM (clients, articles, contrats) et CRM Pipedrive (deals vers projets)
- 17 rôles de sécurité granulaires, suite E2E de 600+ assertions, microservice dédié de gestion de fichiers, 8 conteneurs Docker

</details>

<details class="cv-project">
<summary><span class="cv-project-name">AITestBench</span> <span class="cv-project-pitch">framework interne de test &amp; d'évaluation d'IA</span></summary>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Bundle Symfony</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/php/777BB4" alt="" loading="lazy" onerror="this.remove()" />PHP 8.2</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>LLM-as-judge</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>Multi-provider</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>PHPStan</span>
</p>

Bundle Symfony maison pour tester et évaluer des services IA, conçu de bout en bout. Un LLM y joue le rôle de juge&nbsp;:
il note la pertinence des sorties selon des critères en langage naturel. Intégré à DéguizFrance et Storytodoc.

- LLM-as-judge&nbsp;: évaluation des sorties IA sur critères en langage naturel (verdict, niveau de confiance, justification)
- 6 providers (OpenAI, Anthropic, Gemini, Mistral, Groq, OpenRouter), adaptateurs extensibles
- Métriques par exécution (coûts, tokens, latence) et snapshots pour la non-régression
- CLI façon PHPUnit + dashboard web, identifiants chiffrés (libsodium), distribué en bundle interne (PHPStan niveau 6)

</details>

## Compétences

<div class="cv-skills">
<div class="cv-skill-group">
<h3>Backend</h3>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/php/777BB4" alt="" loading="lazy" onerror="this.remove()" />PHP 8</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Symfony 5+</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/doctrine/FC6A31" alt="" loading="lazy" onerror="this.remove()" />Doctrine</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/openapiinitiative/6BA539" alt="" loading="lazy" onerror="this.remove()" />API REST · OpenAPI</span>
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
<h3>Orchestration &amp; conseil IA</h3>
<p class="cv-chips">
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>OpenAI Agents SDK</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>Tool-calling · streaming SSE</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/claude/D97757" alt="" loading="lazy" onerror="this.remove()" />Claude Code (skills, rules, MCP, workflows)</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/ollama/888888" alt="" loading="lazy" onerror="this.remove()" />IA locale / souveraine (Ollama)</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/googlegemini/8E75B2" alt="" loading="lazy" onerror="this.remove()" />Multi-modèles (GPT, Claude, Gemini, Ollama)</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/></svg>Gestion prompts &amp; coûts</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>Conseil &amp; acculturation IA</span>
</p>
</div>
<div class="cv-skill-group">
<h3>Données &amp; messaging</h3>
<p class="cv-chips">
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/mysql/4479A1" alt="" loading="lazy" onerror="this.remove()" />MySQL / MariaDB</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/postgresql/4169E1" alt="" loading="lazy" onerror="this.remove()" />PostgreSQL</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/redis/FF4438" alt="" loading="lazy" onerror="this.remove()" />Redis</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/symfony/888888" alt="" loading="lazy" onerror="this.remove()" />Symfony Messenger</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>Mercure</span>
</p>
</div>
<div class="cv-skill-group">
<h3>Infra &amp; outillage</h3>
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
<h3>Qualité &amp; méthodes</h3>
<p class="cv-chips">
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>PHPStan</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>PHP-CS-Fixer</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>Rector</span>
  <span class="cv-chip"><img src="https://cdn.simpleicons.org/eslint/4B32C3" alt="" loading="lazy" onerror="this.remove()" />ESLint</span>
  <span class="cv-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/></svg>PHPUnit (E2E)</span>
  <span class="cv-chip">Agile</span>
  <span class="cv-chip">Gestion de projet</span>
  <span class="cv-chip">Relation client</span>
</p>
</div>
</div>

## Formation

- **Diplôme d'ingénieur en informatique**, ISIMA, Clermont-Ferrand (2007 - 2010), option génie logiciel et systèmes informatiques
- **DUT Informatique**, IUT de Clermont-Ferrand (2005 - 2007)
- **Baccalauréat scientifique**, spécialité sciences de l'ingénieur, mention bien (2005)

## Langues

<p class="cv-chips">
  <span class="cv-chip">🇫🇷 Français (langue maternelle)</span>
  <span class="cv-chip">🇬🇧 Anglais (technique)</span>
  <span class="cv-chip">🇪🇸 Espagnol (notions)</span>
</p>

## À côté du code

Auvergnat d'Origine Contrôlée.

<p class="cv-chips">
  <span class="cv-chip">🌍 Open Source</span>
  <span class="cv-chip">📮 Philatélie</span>
  <span class="cv-chip">💬 Bande dessinée</span>
  <span class="cv-chip">🤡 Stephen King</span>
  <span class="cv-chip">🎬 Cinéma / Séries</span>
  <span class="cv-chip">☢️ Post-apo</span>
</p>

Ce site tourne sur [Quarkdown](https://github.com/DarwinOnLine/quarkdown), un moteur de blog SPA
zero-dependency que j'ai développé. J'écris aussi sur le métier dans [le blog](/fr/blog)&nbsp;: IA, craft,
architecture, carrière.

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
