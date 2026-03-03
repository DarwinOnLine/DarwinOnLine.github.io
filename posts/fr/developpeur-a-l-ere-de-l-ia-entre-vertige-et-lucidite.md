# Développeur à l'ère de l'IA : entre vertige et lucidité

*Quand ton métier avance plus vite que ta capacité à le digérer.*

<figure style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/this-is-fine.jpg"
  alt="This is fine" style="max-width: 100%;" />
<figcaption>"This is Fine" © K.C. Green, Gunshow #648 (2013)</figcaption>
</figure>

Il y a des matins où tu ouvres LinkedIn et tu te demandes si tu exerces encore le même métier qu'il y a deux ans.
Entre les threads de gens qui ont "buildé un SaaS en un week-end avec Claude", les recruteurs qui cherchent des
"AI-native developers", et les influenceurs qui t'expliquent que si tu ne "vibe code" pas encore, tu es déjà
mort... il y a de quoi avoir le vertige.

Cet article n'est pas un pamphlet anti-IA. J'utilise l'IA au quotidien,
[j'ai même laissé Claude écrire 20 000 lignes de code](/fr/blog/l-experience-mancolister) sur un projet personnel.
Ce n'est pas non plus un exercice de positivisme forcé. C'est une tentative de mettre des mots sur un malaise que
je ressens (et que beaucoup de développeurs autour de moi ressentent aussi) sans pour autant tomber dans la
plainte stérile.

## Le deuil silencieux

Ce dont on parle peu, c'est le deuil. Pas celui d'un emploi (on recrute encore des développeurs), mais celui
d'une identité.

Pendant des années, tu as construit ta valeur sur ta capacité à résoudre des problèmes complexes avec du code.
Tu as passé des nuits à comprendre des patterns, à débuguer des problèmes impossibles, à développer une intuition
que seule l'expérience donne. Et un matin, un outil sort et fait en 30 secondes ce qui te prenait une journée.

Rationnellement, tu sais que c'est un outil. Que ça ne remplace pas ta compréhension. Émotionnellement, c'est un
coup au plexus.

<figure style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/fraction-of-our-power.jpg"
  alt="Look what they need to mimic a fraction of our power" style="max-width: 100%;" />
<figcaption>"Look what they need to mimic a fraction of our power" © Amazon / Invincible (2021)</figcaption>
</figure>

Le pire, ce n'est pas que l'IA fasse le travail. C'est que des gens qui n'ont jamais eu à acquérir cette
compréhension obtiennent un résultat *qui ressemble* au tien. Et que la différence entre "ça ressemble" et "c'est
équivalent" est souvent invisible pour ceux qui décident.

## Les experts du dimanche

En 1995, aux États-Unis, deux hommes (McArthur Wheeler et Clifton Earl Johnson) braquèrent deux banques le
visage enduit de jus de citron. Arrêté quelques heures plus tard grâce aux caméras de surveillance, Wheeler
expliqua avec un aplomb désarmant qu'il avait pensé devenir invisible, selon le même principe que l'encre
sympathique. Les psychologues David Dunning et Justin Kruger, intrigués par cette assurance inébranlable face à
l'absurde, en firent le point de départ d'une étude qui allait donner naissance à
l'[effet Dunning-Kruger](https://fr.wikipedia.org/wiki/Effet_Dunning-Kruger) : moins on est compétent dans un
domaine, plus on surestime ses capacités, précisément parce qu'on n'a pas les outils cognitifs pour mesurer sa
propre incompétence.

<figure style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/mcarthur-wheeler.jpg"
  alt="McArthur Wheeler, photographié par les caméras de surveillance" style="max-width: 100%;" />
<figcaption>McArthur Wheeler, capturé par les caméras qu'il pensait tromper avec du jus de citron.</figcaption>
</figure>

Autrement dit, l'[ultracrépidarianisme](https://fr.wikipedia.org/wiki/Ultracr%C3%A9pidarianisme) (cette tendance
à donner son avis sur des sujets qu'on ne maîtrise pas) n'a rien de nouveau. Il y a toujours eu des gens qui se
présentent comme experts après avoir gratté la surface. Mais l'IA a mis ce phénomène sous stéroïdes.

Avant, se proclamer développeur quand on ne l'était pas, ça se voyait vite. Tu ne pouvais pas cacher longtemps
que tu ne savais pas ce qu'était une injection SQL ou pourquoi ton application fuitait de la mémoire. Le code,
c'était un filtre naturel.

Aujourd'hui, quelqu'un peut produire une application fonctionnelle sans comprendre un traître mot de ce qui se
passe sous le capot. Et cette personne va poster son résultat avec une assurance déconcertante, récolter des
likes, se faire inviter sur des podcasts, et devenir une référence pour des décideurs qui ne connaissent pas la
différence.

Ce n'est pas de la méchanceté. C'est l'effet Dunning-Kruger à l'échelle industrielle : tu ne sais pas ce que tu
ne sais pas. Et quand l'outil masque les conséquences de ton ignorance (pendant un temps), tu es sincèrement
convaincu de maîtriser le sujet.

Le problème, ce n'est pas ces personnes en elles-mêmes. C'est qu'**on les écoute**. C'est qu'un CTO sous
pression va préférer celui qui livre en deux jours avec Cursor à celui qui dit "il faut d'abord comprendre le
domaine". C'est que le marché récompense la vélocité apparente.

## "Pourquoi ça prend du temps si l'IA le fait en 2 secondes ?"

Si tu es développeur depuis plus de cinq ans, tu as probablement déjà entendu une variante de cette phrase. Elle
cristallise toute la déconnexion entre ce que les non-techniques *voient* de l'IA et ce qu'elle *fait* réellement.

L'IA génère du code. Parfois excellent. Parfois catastrophique. Toujours avec une confiance absolue. Le travail
du développeur n'a jamais été de taper du code (ça, c'était le *médium*). Le travail, c'est de comprendre un
besoin, de le modéliser, de faire des choix d'architecture, de prévoir les cas limites, de garantir que ça tient
dans le temps.

Quand un manager demande pourquoi tu mets trois jours là où l'IA sort quelque chose en 30 secondes, la vraie
réponse c'est : parce que les 30 secondes de l'IA ne couvrent que 20% du travail. Les 80% restants (validation,
intégration, edge cases, maintenabilité), c'est toujours toi.

<figure style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/iceberg.jpg"
  alt="Iceberg: AI-generated code vs everything else" style="max-width: 100%;" />
<figcaption>Mais essaie d'expliquer ça dans un standup de 15 minutes.</figcaption>
</figure>

## Le marché qui change sous tes pieds

Ce qui rend cette période particulièrement anxiogène, c'est que le marché de l'emploi absorbe le discours
ambiant.

Des entreprises réduisent leurs équipes de développement en pariant que l'IA compensera. Des offres d'emploi
demandent des "10x developers powered by AI" comme si c'était un trait de personnalité. Des juniors ne trouvent
plus de premiers postes parce que les tâches d'entrée (celles qui formaient) sont jugées "automatisables".

Et les seniors se retrouvent dans une position paradoxale : leur expertise n'a jamais été aussi nécessaire
(quelqu'un doit valider ce que l'IA produit), mais elle n'a jamais été aussi mal reconnue (puisque "l'IA fait la
même chose").

C'est une compression par les deux bouts. Les juniors n'entrent plus, les seniors ne sont plus valorisés à leur
juste mesure. Et entre les deux, un marché qui confond productivité et précipitation.

<figure style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/productivity-rushing.jpg"
  alt="They're the same picture: Productivity vs Rushing" style="max-width: 100%;" />
<figcaption>"They're the same picture." © NBC / The Office (2005)</figcaption>
</figure>

## Ce que personne ne dit à voix haute

Derrière les posts LinkedIn enthousiastes et les démos impressionnantes, il y a une réalité que beaucoup vivent
sans oser l'exprimer :

- **La fatigue de la course.** Chaque semaine, un nouvel outil, un nouveau paradigme, une nouvelle façon
  "révolutionnaire" de coder. Tu n'as même pas fini d'explorer le précédent.
- **Le syndrome du retardataire.** Tu n'as pas encore essayé le dernier framework agentique ? Tu es has-been.
  Tu codes encore "à la main" certaines choses ? Tu perds du temps.
- **La solitude.** Dans ton équipe, personne n'en parle. Chacun fait semblant que tout va bien et que c'est
  "excitant". Personne ne dit "en fait, je suis perdu".
- **La culpabilité.** Tu te sens illégitime de ressentir ce malaise. Après tout, c'est du progrès, non ? Tu
  devrais être content. Tu devrais t'adapter. Tu devrais aller plus vite.

Et puis il y a un malaise plus insidieux, que Benjamin Debon
([Benjamin Code](https://www.linkedin.com/feed/update/urn:li:activity:7433055093526257664/)) a formulé avec
une justesse désarmante :

> *Avant on produisait jusqu'à la limite de nos capacités, on était satisfait du ratio effort/output, et on
> était aussi épuisés. C'était trois conditions qui nous faisaient converger vers un arrêt naturel. Le
> vibecoding a fait sauter les trois en même temps. Notre signal d'arrêt naturel a disparu. [...] Quand
> continuer ne coûte plus rien, comment on mérite encore de s'arrêter ?*

C'est exactement ça. L'IA n'a pas seulement changé ce qu'on produit, elle a brisé le mécanisme qui nous
permettait de dire "c'est assez pour aujourd'hui". Quand lancer un agent prend trois minutes et que ne pas le
faire ressemble à du temps perdu, la frontière entre productivité et compulsion s'efface.

<p style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/im-in-this-photo.jpg"
  alt="I'm in this photo and I don't like it" style="max-width: 100%;" />
</p>

Si tu te reconnais dans un ou plusieurs de ces points : tu n'es pas seul. Et tu n'es pas en retard. Le rythme
qu'on essaie de t'imposer n'est pas humain.

## Séparer le signal du bruit

Maintenant que le malaise est posé, essayons d'y voir clair.

**Le bruit**, c'est :
- Les démos cherry-pickées qui montrent un cas idéal sans montrer les 47 tentatives avant
- Les influenceurs qui n'ont jamais maintenu un système en production
- Les prédictions catastrophistes sur la "fin des développeurs" ([on nous la promet depuis les années 60
  et COBOL](https://www.ivanturkovic.com/2026/01/22/history-software-simplification-cobol-ai-hype/))
- Les entreprises qui vendent de l'IA en solution miracle à des problèmes organisationnels

**Le signal**, c'est :
- L'IA est un outil puissant qui change réellement certaines parties du travail
- Les tâches répétitives et le boilerplate sont effectivement en train de disparaître
- La capacité à formuler un besoin clairement devient une compétence clé
- Le code est de plus en plus facile à produire, donc la valeur se déplace vers le jugement

<p style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/lucidity.jpg"
  alt="Barney Stinson ignoring the noise, staying focused on fundamentals" style="max-width: 100%;" />
</p>

La différence entre le bruit et le signal, c'est le long terme. Le bruit s'évapore. Le signal se confirme avec
le temps. Et savoir
[ignorer le bruit](/fr/blog/ce-que-le-metier-de-developpeur-ma-appris#ignorer-le-bruit), c'est aussi une
compétence qui s'apprend.

## Ce qui fait toujours la différence

Je ne vais pas te sortir la liste habituelle des "soft skills indémodables" (tu la connais déjà). Je vais plutôt
te dire ce que j'observe concrètement, en travaillant avec l'IA tous les jours :

**L'IA est brillante dans un couloir, aveugle à un carrefour.** Donne-lui un problème bien cadré, elle excelle.
Confronte-la à un choix d'architecture avec des contraintes métier, des compromis de performance et une dette
technique héritée, elle tourne en rond. Ce carrefour, c'est ton métier.

<p style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/ai-generated-horse.jpg"
  alt="AI-generated code in the demo vs in production" style="max-width: 100%;" />
</p>

**Le code facile est devenu gratuit. Le code juste reste cher.** N'importe qui peut générer un CRUD en
30 secondes. Concevoir un système qui tient la charge, qui évolue proprement, qui ne s'effondre pas au premier
edge case imprévu, ça demande l'expérience que tu as passé des années à acquérir.

**Débuguer du code IA, c'est débuguer du code qu'on n'a pas écrit.** Et c'est objectivement plus dur. Ça demande
une compréhension des fondamentaux que l'IA elle-même ne peut pas t'enseigner. Quand le code généré casse à 3h
du matin en production, ce n'est pas l'IA qu'on appelle. On me répondra que ça viendra, qu'un agent pourra
bientôt intervenir seul sur une prod cassée. Peut-être. Mais quelqu'un devra quand même décider si on lui fait
confiance pour ça, valider que le correctif n'aggrave pas le problème, et porter la responsabilité quand ça
dérape. Une IA qui patche ta prod sans supervision à 3h du matin, c'est au moins aussi inquiétant que le bug
lui-même.

## Ne pas subir, sans se forcer

Le piège serait de répondre à l'anxiété par une course effrénée. Apprendre chaque nouvel outil, suivre chaque
tendance, se réinventer toutes les six semaines. C'est le chemin le plus court vers le burnout.

Quelques principes qui m'aident à naviguer dans ce brouillard :

**Choisis tes batailles.** Tu ne peux pas tout suivre. Personne ne le peut. Identifie ce qui est pertinent pour
*ton* contexte (ton stack, ton domaine, tes projets) et ignore le reste sans culpabilité.

<p style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/calm-cat.jpg"
  alt="Everyone's panicking about AI replacing devs. I'm here wondering if I should upgrade to Node 54."
  style="max-width: 100%;" />
</p>

**Utilise l'IA comme un outil, pas comme un juge.** Si tu te retrouves à mesurer ta valeur par rapport à ce
qu'un LLM peut produire, tu te compares à une calculatrice. Un comptable ne se sent pas menacé par une feuille
Excel, il s'en sert.

**Investis dans ce qui ne change pas.** Les fondamentaux (algorithmique, architecture, modélisation,
communication) ne sont pas rendus obsolètes par l'IA. Ils sont rendus *plus importants*. Plus le code est
facile à générer, plus le jugement sur *quel* code écrire prend de la valeur.

**Parle.** De ton malaise, de tes doutes, de ta fatigue. Avec tes collègues, tes pairs, dans des communautés.
Le silence nourrit le syndrome de l'imposteur. La conversation le dissout. Certains vont même jusqu'à écrire
des articles dessus, paraît-il.

## Et maintenant ?

Ce que je ressens (et peut-être que toi aussi), ce n'est pas de la résistance au changement. C'est le besoin
légitime de donner du sens à une transformation qui va plus vite que notre capacité collective à l'absorber.

Le métier de développeur ne disparaît pas. Il mue. Et comme toute mue, c'est inconfortable, déstabilisant,
parfois douloureux. Mais la peau qui se forme en dessous est toujours plus solide que celle qu'on perd.

La seule chose qui serait vraiment dangereuse, ce serait de faire semblant que tout va bien. Ou de faire semblant
que tout va mal.

<figure style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/first-time.jpg"
  alt="First time?" style="max-width: 100%;" />
<figcaption>"First time?" © Netflix / The Ballad of Buster Scruggs (2018)</figcaption>
</figure>

La vérité, comme souvent, est au milieu. Et elle demande du courage pour être regardée en face.
