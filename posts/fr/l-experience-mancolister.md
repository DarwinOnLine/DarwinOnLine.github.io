# Quand ma passion pour les timbres rencontre l'IA : l'expérience Mancolister

*Ou comment j'ai laissé Claude écrire presque 20 000 lignes de code pendant que je jouais au client relou*

<figure style="text-align: center;">
  <img src="/assets/images/posts/l-experience-mancolister/collection.jpg"
  alt="Ma collection" style="max-width: 100%;" />
<figcaption>Des loisirs de vieux je vous dis</figcaption>
</figure>

## Le point de départ

Je collectionne les timbres depuis gamin. Après mes évaluations de 6<sup>ème</sup>,
mon père a débarqué avec une petite boîte remplie de petits papiers jaunis et dentelés qu'il gardait lui-même depuis
son enfance. Et c'est là que tout a commencé, j'ai trié, classé, abandonné un peu pendant mes études puis repris,
avec catalogue de cotation Yvert & Tellier, beaux classeurs et feuilles par année.

Un concept bien répandu dans le milieu des collectionneurs, c'est celui de la dispoliste et de la mancoliste,
entendez par là une liste de doubles disponibles, et de manquants.

Pour établir ces listes, le classique reste le tableur, il existe quelques solutions opaques de gestion de collection,
mais globalement, les listes philatéliques par année et avec cote ne sont pas facilement disponibles en ligne.

<figure style="text-align: center;">
  <img src="/assets/images/posts/l-experience-mancolister/mancoliste.jpg"
  alt="Mancoliste" style="max-width: 100%;" />
<figcaption>Il y a des versions hardcore aussi</figcaption>
</figure>

Donc mon rêve depuis des années était d'avoir mon appli simple, consultable hors-ligne sur mon téléphone,
avec les ~10 000 timbres français et ma collection personnelle synchronisée.

Et puis j'avais envie de tester quelque chose : [BMAD](https://github.com/bmad-code-org/BMAD-METHOD) —
une méthodologie pour structurer un projet de A à Z avec une IA comme développeur. L'occasion parfaite.

J'avais vu cette vidéo de [Benjamin Code](https://www.youtube.com/watch?v=-aUFe2r9fpE) qui m'avait un peu hypé,
j'avais mon sujet, un accès à Claude Max, c'était l'occasion de tester.

Et... ha oui, un nom : **Mancolister**.

## Les règles du jeu

Je me suis fixé trois contraintes :

### 1. Claude écrit TOUT le code

Pas une ligne de ma main. Je valide, je questionne, je refuse parfois — mais je ne code pas.
Mon rôle : Product Owner avec une casquette technique. Je connais Symfony, React, Docker...
donc je peux challenger les choix architecturaux. Mais l'implémentation, c'est Claude,
ou plutôt Charlie, ou plutôt Elena, enfin vous allez comprendre.

### 2. Zéro coût d'hébergement

- **Backend** : une image Docker sur mon NAS Synology
- **Frontend** : Vercel (gratuit pour les projets perso)
- **Base de données** : SQLite (un simple fichier)
- **CI/CD** : GitHub Actions

Total mensuel : 0€.

### 3. Se débrouiller avec des données imparfaites

Pas d'API officielle pour les timbres français, j'ai cherché, j'ai pleuré, même les solutions payantes sont pas dingues.
Solution : scraper deux sites web qui n'ont pas les mêmes informations, pas les mêmes formats...
et parfois se contredisent sur les prix :
- [Timbres de France](https://www.timbres-de-france.com) : Tenu par un passionné, qui semble maintenir CHAQUE
PAGE à la main, c'était en tout cas le cas il y a quelques années quand j'avais échangé avec lui, le site semble
être resté dans son jus mais continue d'être mis à jour 
- [StampWorld](https://www.stampworld.com) : Un genre de catalogue ouvert qui permet également l'achat et la vente.

<figure style="text-align: center;">
  <img src="/assets/images/posts/l-experience-mancolister/et-c-est-parti.jpg"
  alt="Et c'est parti" style="max-width: 100%;" />
<figcaption>POV: Tu te lances sur ton projet de philatélie</figcaption>
</figure>

## BMAD : une méthodologie structurée

BMAD découpe le projet en phases distinctes :

**1. Analysis** — Brainstorming, étude de faisabilité, recherche technique.

**2. Planning** — Rédaction du PRD, identification des requirements fonctionnels et non-fonctionnels.
Découpage en épics et stories.

**3. Solutioning** — Architecture détaillée, choix technologiques justifiés, spécifications UX.

**4. Implementation** — Développement story par story, avec rétrospective après chaque épic.

<figure style="text-align: center;">
  <img src="/assets/images/posts/l-experience-mancolister/bmad.png"
    alt="Workflow BMAD" style="max-width: 100%;" />
    <figcaption>Workflow standard (© <a href="https://www.sfeir.dev/ia/bmad-method-comment-revolutionner-le-developpement-avec-lia-agentique" target="_blank">sfeir.dev</a>)</figcaption>
</figure>

Le tout génère des artefacts traçables. Chaque décision est documentée avec son contexte et sa justification.

Pour m'accompagner, je peux compter sur mon équipe virtuelle :

- **Alice**, Product Owner — elle porte la vision produit et priorise le backlog
- **Bob**, Scrum Master — il facilite les cérémonies et veille au bon déroulement des sprints
- **Charlie**, Senior Dev — il challenge l'architecture et les choix techniques
- **Dana**, QA Engineer — elle traque les bugs et valide la qualité
- **Elena**, Junior Dev — elle monte en compétences et apporte un regard neuf
- ... et moi, **Darwin**, Project Lead — Le client quoi

## L'architecture finale

| Couche | Stack |
|---|---|
| **Frontend** (Vercel) | React 19 + TypeScript + Vite + PWA<br>IndexedDB (Dexie), Service Worker offline |
| **API** | REST |
| **Backend** (NAS Docker) | Symfony 7.4 + API Platform<br>SQLite, Scrapers (timbres-de-france + Stampworld) |

**Pourquoi ces choix ?**

- **React 19 + Vite** : PWA native, build rapide, écosystème mature
- **Symfony + API Platform** : mon terrain connu, API REST en quelques annotations
- **SQLite** : pas de serveur DB à maintenir, backup = copier un fichier
- **IndexedDB** : ~50 Mo de stockage local, recherche <500ms sur 10K timbres

## Le défi du scraping

Deux sources, deux problèmes différents.

<figure style="text-align: center;">
  <img src="/assets/images/posts/l-experience-mancolister/le-scraper.jpg"
  alt="LE scraper" style="max-width: 100%;" />
</figure>

### timbres-de-france.com

La référence pour les timbres français. Couverture quasi-complète depuis 1849. Mais :
- HTML parfois inconsistant
- Pagination à gérer
- Rate limiting nécessaire (1 requête/seconde pour rester poli)

### Stampworld

Données complémentaires sur les cotes. Mais :
- Pas tous les timbres français
- Numérotation différente
- Certains timbres existent là-bas sans équivalent Y&T

### La solution : fusion intelligente

```
Source primaire (timbres-de-france.com)
    │
    ▼
MergeStrategyService
    │
    ├── Si le timbre existe dans les deux sources → enrichir
    │
    └── Si le timbre n'existe que sur Stampworld → ignorer
```

Le numéro Y&T (Yvert & Tellier) sert de clé unique. Pas de Y&T = pas de création.
Simple, mais ça a nécessité plusieurs itérations pour gérer tous les cas limites (et il reste quelques soucis).

## Mode offline : le cœur du besoin

J'ai soumis un Use Case qui est "Je suis en brocante et je veux savoir si j'ai le timbre que je vois sur
la table du vendeur devant moi".

En brocante, pas de WiFi. L'app doit fonctionner **complètement** hors-ligne.

**La stack offline :**

1. **Service Worker** (Workbox) — Cache les assets statiques
2. **IndexedDB** (Dexie) — Stocke le catalogue complet localement
3. **Sync Queue** — Les modifications offline s'accumulent et se synchronisent au retour du réseau

Résultat : je lance l'app, je cherche "Marianne rouge 1960", j'ai ma réponse en 500ms.
Même au milieu de nulle part sans réseau (si j'avais synchronisé mes données en amont).

## Ce que j'ai appris sur le travail avec une IA

### Ce qui marche bien

**La documentation exhaustive.** Claude génère des PRD, des specs d'architecture, des rétrospectives...
Plus de documentation que je n'en aurais jamais écrit seul.
Et c'est utile : quand je reviens sur une décision 3 semaines plus tard, le contexte est là.

**Le process.** Un coucou presque suisse.
Avec la pratique et quelques itérations (en insistant en rétro), j'ai mis en place un process bien rodé pour chaque story :

> 📋 Création → 💻 Dév → 🔍 Review → 🧪 Test manuel → ✅ Commit

**Review et rigueur des tests.** Claude est impitoyable avec lui-même + 1 757 tests au total.
Claude a ce réflexe que je n'ai pas toujours : tester les cas limites, les erreurs, les états impossibles, et il fait
les reviews sans ego également, il s'auto-critique et corrige le tir.

**L'exploration d'alternatives.** "Et si on utilisait X plutôt que Y ?" 
Claude peut argumenter les deux côtés sans ego. Pratique pour les choix d'architecture.

### Ce qui demande de la vigilance

**La sur-ingénierie.** Claude adore les abstractions. Parfois trop. 
<small>(Sans doute un syndrome de l'imposteur caché ? 😏)</small>
"On pourrait créer une factory qui..." — Non, on fait simple d'abord.

**Les hallucinations techniques.** Rare, mais ça arrive.
Une API qui n'existe pas, une option de config inventée. D'où l'importance de la casquette technique du PO.

**L'accumulation de dette.** Exemple : Le fichier `CatalogSyncService` a grossi story après story.
4 stories sur 8 de l'épic 15 le modifiaient. Un refactoring s'impose pour la V2. On s'est donné RDV avec l'équipe
(on est potes à présent)

## Les chiffres

| Métrique | Valeur                                              |
|----------|-----------------------------------------------------|
| Stories complétées | 103/103                                             |
| Épics | 15                                                  |
| Lignes de code (frontend) | 8 385                                               |
| Lignes de code (backend) | 10 732                                              |
| Tests | 1 757                                               |
| Coût mensuel | 0€                                                  |
| Durée du projet | ~5 semaines (un peu le soir et le weekend) |

## Et maintenant ?

L'app est en production. J'ai galéré pour la publier sur mon NAS en automatique mais la promesse de performance
malgré la cible de déploiement est tenue.

<p style="text-align: center;">
  <img src="/assets/images/posts/l-experience-mancolister/mancolister.jpg"
    alt="One thing at a time" style="max-width: 100%;" />
</p>

Je l'utilise. Elle fait ce que je voulais qu'elle fasse.

Pour la suite, la V2, quelques idées :
- **Améliorer le scrapping** — J'ai synchronisé la période 1849-2026, ça a pris 7h, j'ai repéré des incohérences,
des manques, la promesse de quelques itérations futures. je vais essayer de trouver de nouvelles sources et faire
faire un refacto complet de `CatalogSyncService` qui est une horreur à maintenir apparemment (Charlie était pas content)
- **Prix conseillé** — Suggérer un prix de vente pour mes doublons
- **Panier d'achat** — Lister les timbres à chercher en brocante

Mais surtout, l'expérience BMAD m'a convaincu. Ce n'est pas "l'IA qui code à ma place",
c'est une collaboration structurée où chacun joue son rôle.
Le PO apporte la vision, les contraintes, la validation. L'IA apporte l'exécution, la rigueur, la documentation.

J'entends déjà que BMAD est dépassé avec la sortie des nouvelles versions d'Opus 
mais [vous savez ce que je pense de ça](/fr/blog/ce-que-le-metier-de-developpeur-ma-appris#ignorer-le-bruit).

Est-ce que je referai un projet comme ça ? Absolument.

Est-ce que ça remplace un développeur humain ? Non. Ça change la nature du travail.
Moins de syntaxe, plus de décisions. Moins d'implémentation, plus d'architecture.
Moins de "comment", plus de "pourquoi".

Un effet sur moi que je n'avais pas anticipé : malgré le fait de ne rien coder, les sessions de travail que
je m'imposais (en général un epic) m'épuisaient mentalement. Prendre des décisions, faire des choix, faire évaluer
une idée à l'IA, tout cela me laissait lessivé, avec malgré tout l'envie d'y revenir, boosté par le fait de voir l'app
prendre forme.

## Le mot de la fin

Ce projet, c'est la preuve que sur un projet perso où l'on serait habituellement seul à bricoler dans son coin,
l'IA permet de poser un vrai cadre professionnel — PRD, stories, reviews, tests, rétros — là où on aurait
d'ordinaire tout fait à l'arrache.

Le plus surprenant au final ? Ce n'est pas le code que Claude a produit. C'est ce que le projet m'a appris
sur ma propre façon de travailler. Formuler un besoin précis, savoir dire non à une solution trop complexe,
accepter qu'un premier jet soit imparfait — paradoxalement, c'est en lâchant le clavier
que j'ai le plus exercé mon métier de développeur.

Maintenant, à vous d'imaginer ce que *vous* pourriez faire avec votre idée, c'est quoi votre hobby de vieux ?
