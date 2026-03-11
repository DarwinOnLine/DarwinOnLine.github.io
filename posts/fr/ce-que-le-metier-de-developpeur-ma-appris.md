# Ce que le métier de développeur m'a appris

Cet article est né d'une adaptation libre du
[post de Henrik Warne](https://henrikwarne.com/2015/04/16/lessons-learned-in-software-development/)
que j'avais lu avec intérêt en 2015.

Les années ont passé, les expériences se sont enchaînées, et j'ai fini par avoir mes propres
convictions à partager.

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/learn.jpg"
    alt="When I was your age, I was your age" style="max-width: 100%;" />
</p>

Ce qui suit est un mélange de ses idées, des miennes, et de tout ce que ce métier m'a appris
entre-temps.

## Un projet complexe est un projet simple qui a évolué

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/simple-complex.jpg"
    alt="" style="max-width: 100%;" />
</p>

Lorsque vous démarrez un nouveau projet, une nouvelle application, un site web, ou même que vous
ajoutez une fonctionnalité à un projet existant, allez d'abord à l'essentiel, quitte à ne pas
implémenter tout ou partie des fonctionnalités prévues. Vous pourrez ensuite le faire évoluer
petit à petit, pour l'amener vers la solution complète attendue. Si un projet englobant beaucoup
de notions, d'algos ou d'outils, est démarré de tout de front directement, il sera invariablement
dur à maintenir.

Il existe une règle empirique pour résumer cette notion, la
[Loi de Gall](https://fr.wikipedia.org/wiki/Loi_de_Gall) :

> Un système complexe qui fonctionne se trouve invariablement avoir évolué depuis un système
> simple qui fonctionnait. La proposition inverse se révèle également exacte : un système complexe
> développé de A à Z ne fonctionne jamais et vous n'arriverez jamais à le faire fonctionner. Vous
> devez recommencer depuis le début, en commençant par un système simple.

Mettons que vous vouliez concevoir un distributeur de nourriture en tout genre (friandises,
sandwiches, boissons), vous allez d'abord installer votre boîtier en acier brut. Dans un premier
temps, votre machine ne sera capable de rien, pas même accepter des pièces, mais ce sera un
distributeur quand même.
Puis vous allez ajouter des compartiments vides, une vitre, un clavier, un afficheur LED et une
fente pour les pièces. Vous ajouterez la gestion de la monnaie dans le mécanisme d'insertion de
pièces, vous lierez cela avec le clavier et les compartiments pour débloquer les produits, et vous
configurerez un affichage pour l'écran LED. Chaque étape viendra enrichir votre projet et le
complexifier, mais à chaque itération, votre machine fonctionnera, et sera capable de faire plus.

## Faites une chose à la fois

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/one-thing.jpg"
    alt="One thing at a time" style="max-width: 100%;" />
</p>

Ce précepte vaut pour le développement, mais avant tout dans le cas général. Si vous rencontrez
une erreur, qu'un test échoue ou qu'une régression a lieu, si vous savez que vous n'avez modifié
le code qu'à un endroit précis (et qu'avant tout fonctionnait 🙂), la détection du bug devient
beaucoup plus facile. Cela est lié directement au point précédent, avancez pas à pas. Modifiez le
point A, commitez, modifiez le point B, commitez, et ainsi de suite. Les commits sont d'ailleurs
d'excellents marqueurs / jalons pour cela, ils permettent de clairement cloisonner les
modifications que vous apportez au code.

Dans la même logique, travaillez sur des **feature branches** dédiées et faites des **petites pull
requests**. Une PR de 3 fichiers sera relue avec attention, une PR de 15 fichiers sera survolée au
mieux, validée les yeux fermés au pire. Plus une PR est courte et ciblée, meilleure sera la
review, et moins vous aurez de risques d'introduire des régressions silencieuses.

## Activez les logs et la gestion d'erreur le plus tôt possible

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/quand-je-regarde-logs.webp"
    alt="" style="max-width: 100%;" />
</p>

Pour ne pas dire avant toute chose. Cela peut paraître futile à la genèse du projet, mais les
premiers problèmes peuvent apparaître tôt. Ainsi il est important de toujours avoir le contrôle
de ce que vous faites, et un log intelligent couplé à une bonne gestion des erreurs vous permettra
de maintenir ce contrôle dès le début et de façon continue.

Et bien évidemment, même si la plupart des systèmes de log le font, horodatez tout ce qui est
écrit.

## Tout ce que vous codez doit être exécuté au moins une fois

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/bug-plane.jpg"
    alt="Ça n'arrive qu'aux autres, m'voyez." style="max-width: 100%;" />
</p>

Cela semble tomber sous le sens. On peut se dire que les tests unitaires et tests d'intégration
sont là pour vérifier chaque ligne écrite, ce qui est vrai (à condition de les écrire
évidemment !), mais on peut parfois écrire quelques lignes de code qui ne seront, a priori, jamais
exécutées. Par exemple, gérer le fait que la colonne `my_column` n'est pas présente en base. Vous
vous dites que vous aurez fait attention à votre structure, et que ça n'arrivera jamais. Cependant
si vous vous mettez une protection contre cela, il est bon de vérifier que cette protection
fonctionne. Alors on triche un peu, on met sa base offline, on fait volontairement une faute dans
le nom de la colonne, on inverse une condition pour provoquer artificiellement le cas d'erreur, et
on teste, pour attester que cette fois-ci c'était bien géré.

## Les choses prennent (toujours) plus de temps que prévu

Un poncif chez quiconque a mené un projet avec des délais à tenir. « Combien de temps tu penses
que ça va prendre ? » Cette question vous n'y répondez jamais avec certitude, ou alors vous avez
déjà mené cette exacte tâche récemment (et du coup vous savez). Partez du principe que ce que vous
entreprenez ne se déroulera pratiquement jamais sans embûche. Vous aurez un accident de merge,
vous aurez un bug à la con qui vous mobilisera 2h, vous aurez à mettre à jour un framework et
découvrir avec horreur que la moitié de votre code est deprecated… Tous ces paramètres et même
plus sont prévus dans la
[loi de Hofstadter](https://fr.wikipedia.org/wiki/Loi_de_Hofstadter) :

> Il faut toujours plus de temps que prévu, même en tenant compte de la Loi de Hofstadter.

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/hofstader.jpg"
    alt="Hofstadter" style="max-width: 100%;" />
</p>

… et c'est très difficile à expliquer à votre scrum master, votre commercial, sans passer pour
un fumiste.

Des approches existent pour tenter d'apprivoiser ce problème. Le
[Planning Poker](https://fr.wikipedia.org/wiki/Planning_poker) propose d'estimer collectivement
l'effort via un jeu de cartes basé sur la suite de Fibonacci, partant du principe qu'un consensus
d'équipe sera plus fiable qu'une estimation individuelle. À l'opposé, le mouvement
[#NoEstimates](https://ronjeffries.com/xprog/articles/the-noestimates-movement/) suggère
carrément de ne plus estimer, et de plutôt découper le travail en incréments suffisamment petits
pour que l'estimation devienne superflue. Entre les deux, il y a la bonne vieille règle
officieuse : « multipliez votre estimation par pi ». Ce n'est qu'à moitié une blague.

## La dette technique existe, et elle a des intérêts

Quand les délais se resserrent ou que la pression monte, on prend des raccourcis. Un bout de code
« temporaire » qui fait le job, un contournement vite fait qu'on se promet de reprendre plus tard.
C'est la [dette technique](https://fr.wikipedia.org/wiki/Dette_technique), un concept formulé par
Ward Cunningham en 1992. Comme une dette financière, elle n'est pas forcément mauvaise en soi :
emprunter pour avancer plus vite peut être un choix conscient et raisonnable. Le problème, c'est
quand on arrête de la rembourser. Les intérêts s'accumulent : chaque nouvelle fonctionnalité prend
plus de temps, chaque correction en entraîne une autre, et un jour vous passez plus de temps à
contourner les problèmes qu'à en résoudre. Alors notez-la, assumez-la, et surtout planifiez son
remboursement. Un `TODO` dans le code, c'est une reconnaissance de dette. Si personne ne le traite
jamais, c'est de la faillite qui s'organise.

<figure style="text-align: center;">
<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/gaston-dette.jpg"
  alt="Gaston Lagaffe, la dette qui s'accumule" style="max-width: 100%;" />
<figcaption>Gaston aussi croule sous la dette. © Franquin</figcaption>
</figure>

## Savoir dire non

« On pourrait pas aussi ajouter ça ? » Si. On pourrait toujours. Et c'est bien le problème.
Chaque « petit ajout » qui s'invite en cours de route a un nom : le
[scope creep](https://fr.wikipedia.org/wiki/D%C3%A9rive_des_objectifs). Un périmètre qui gonfle
insidieusement, une fonctionnalité par-ci, un « tant qu'on y est » par-là, et au bout du compte
un projet qui ne ressemble plus à ce qui était prévu, livré en retard et à moitié fini.
Dire non, ce n'est pas être difficile, c'est protéger le projet. Un bon développeur ne dit pas
juste « non », il dit « pas maintenant » ou « à quel prix ». Chaque ajout a un coût, en temps, en
complexité, en dette technique. Et ce n'est pas parce qu'une IA vous génère du code en 10 secondes
que ce code est gratuit : il faudra le comprendre, le maintenir, le tester, le débuguer.
L'illusion du « ça coûte rien, on peut rajouter » est encore plus tentante quand le code semble
tomber du ciel. Le fameux triangle qualité / coût / délai n'est pas qu'un slide de présentation
PowerPoint : si vous ajoutez du périmètre sans toucher aux délais ni au budget, c'est la qualité
qui trinque. Et c'est vous qui la porterez.

<figure style="text-align: center;">
<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/yes-man.jpg"
  alt="Yes Man" style="max-width: 100%;" />
<figcaption>Ne soyez pas un Yes Man.</figcaption>
</figure>

Apprenez à prioriser. Tout ne peut pas être urgent et important à la fois. Et si tout l'est,
alors rien ne l'est.

## Comprenez ce sur quoi vous travaillez

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/getit.gif"
    alt="Get it" style="max-width: 100%;" />
</p>

Beaucoup de vos projets vont consister à modifier ou faire évoluer un code existant. Alors prenez
le temps de bien comprendre ce que vous vous apprêtez à casser. Car le client, lui, a une
connaissance pointue de son produit (enfin, normalement), et il ne manquera pas de vous signaler
qu'avant il pouvait utiliser cette super fonctionnalité dont vous n'aviez aucune idée, et que
maintenant il ne peut plus, et que c'est un scandale. Peut-être même que vous l'avez fait exprès
pour qu'il la repaie, sacripant d'informaticien que vous êtes. Les tests prennent donc toute leur
importance, s'ils sont complets, vous laissez une chance à votre successeur de mieux appréhender
ce que vous avez fait. Lisez mais surtout exécutez le code, faites une application bac à sable au
besoin, jouez avec le projet, éprouvez-le.

Et pensez-y dans l'autre sens : si vous voulez que votre successeur comprenne votre code,
écrivez-le pour lui. Le code est lu infiniment plus souvent qu'il n'est écrit. Vous écrirez une
fonction une fois, elle sera relue des dizaines de fois, par vos collègues, par vous-même, par le
stagiaire de l'année prochaine qui essaiera de comprendre pourquoi ça marche. Chaque raccourci que
vous prenez en écriture, c'est une taxe que vous imposez à chaque future lecture. Écrivez du code
que vous seriez capable de relire un dimanche soir sans café.

Et documentez. Pas tout, pas partout, mais les décisions, les « pourquoi », les pièges non
évidents. [Damian Conway](https://fr.wikipedia.org/wiki/Damian_Conway) le résumait bien :

> La documentation est une lettre d'amour que vous écrivez à votre futur vous-même.

Un README à jour, un commentaire qui explique *pourquoi* plutôt que *quoi*, un schéma
d'architecture griffonné dans un wiki, c'est peu de travail sur le moment et une bouée de
sauvetage six mois plus tard. Et à l'heure où l'IA devient un coéquipier à part entière, un code
lisible et une documentation à jour, c'est aussi ce qui lui permettra de vous assister
efficacement. Une IA qui travaille sur un projet bien documenté vous fera gagner du temps ; sur un
projet opaque, elle ne fera que reproduire le chaos.

## Il y aura toujours des bugs

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/bugs.jpg"
    alt="" style="max-width: 100%;" />
</p>

Et tenez-vous cela pour dit. Cela ne signifie pas que vous êtes une tanche, juste que vous ne
pouvez pas penser à tout. Ainsi oubliez cette approche marketing « Tout fonctionnera comme prévu
du premier coup et tout le temps ». C'est faux, l'expression même du besoin peut tout à fait être
foireuse, et provoquer des enchaînements qu'on peut qualifier de bugs. Un jour un utilisateur fera
une manipulation dans un ordre précis et obtiendra un résultat aberrant, simplement parce que vous
ne l'aurez pas anticipé. Et ce n'est pas grave, du moment que vous serez là pour corriger.
Préférez donc l'approche « Je détecte un problème, je le corrige et je déploie le fix », cela si
possible avant que l'utilisateur final ne rencontre le problème.

## Prenez le temps de résoudre les problèmes

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/multitask.gif"
    alt="" style="max-width: 100%;" />
</p>

Conséquence du point précédent, prenez le temps de résoudre les problèmes, faites-en une tâche
récurrente. Corriger un bug n'est pas une perte de temps mais un excellent moyen d'améliorer
l'expérience utilisateur en cherchant à comprendre ce que les gens ont essayé de faire avec votre
application, d'éprouver la maintenabilité de votre code et de garder à l'esprit que vous êtes
responsable de ce que vous développez.

Point important, reproduisez le problème, et cela de façon systématique, programmez un test
permettant de le mettre en évidence, et à partir de cela corrigez. Vous vous assurez ainsi que
vous corrigerez le bon problème au lieu d'en créer un nouveau 🙂

N'essayez pas de tout traiter à la fois, identifiez et corrigez chaque problème à votre portée,
n'essayez pas de prévoir trop loin. Une fois toutes erreurs connues fixées, voyez ce qu'il
subsiste et recommencez au besoin.

## Nommez les choses

Il y a une citation célèbre attribuée à
[Phil Karlton](https://www.karlton.org/2017/12/naming-things-hard/) :

> Il n'y a que deux choses difficiles en informatique : l'invalidation du cache et nommer les
> choses.

C'est drôle parce que c'est vrai. Un nom de variable, de fonction, de classe, c'est un contrat
avec celui qui lira votre code après vous, et ce sera peut-être vous dans six mois, avec aucun
souvenir de ce que `tmp2` ou `processData()` étaient censés faire. Un bon nommage rend les
commentaires superflus, un mauvais nommage rend le code opaque même avec des commentaires. Prenez
30 secondes de plus pour trouver le bon mot.

`remainingRetryCount` sera toujours plus clair que `cnt`. Et si vous n'arrivez pas à nommer
clairement une fonction, c'est peut-être qu'elle fait trop de choses, c'est d'ailleurs l'exacte
définition du **S** de [SOLID](https://fr.wikipedia.org/wiki/SOLID_(informatique)) : une
responsabilité unique. Si vous ne savez pas la nommer simplement, découpez-la.

<figure style="text-align: center;">
<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/naming.jpg"
  alt="Naming things" style="max-width: 100%;" />
<figcaption>Soyez pas cons par contre.</figcaption>
</figure>

## Ne construisez pas une cathédrale pour héberger un hamster

Vous connaissez sûrement l'acronyme KISS, *Keep It Simple, Stupid*. Son compagnon, moins connu
mais tout aussi crucial, c'est YAGNI,
[*You Aren't Gonna Need It*](https://fr.wikipedia.org/wiki/YAGNI). Ensemble, ils tiennent en une
phrase : ne codez que ce dont vous avez besoin, et faites-le simplement.

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/kiss-yagni.jpg"
    alt="If it works, it works." style="max-width: 100%;" />
</p>

C'est tentant, une belle abstraction. Un pattern bien propre « au cas où ». Une factory de
factories, parce que peut-être un jour il y aura un troisième type de paiement. Sauf que ce jour
n'arrive jamais, et en attendant vous maintenez du code que personne n'utilise, que personne ne
comprend, et qui complique chaque évolution réelle. Trois lignes de code dupliquées valent souvent
mieux qu'une abstraction prématurée. Si le besoin se confirme, vous refactorerez. Et ce sera plus
facile, parce que le code sera resté simple.

## Il n'y a pas de coïncidences

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/coincidence.webp"
    alt="Coincidence" style="max-width: 100%;" />
</p>

Jamais. La règle est simple : si vous avez créé une fonctionnalité A et que désormais la
fonctionnalité B est buguée, pas de coïncidence. Si suite à l'ajout de votre nouveau module, le
système semble plus lent, pas de coïncidence. Ne vous remettez pas à une quelconque divinité du
hasard, investiguez. Souvent il apparaîtra que VOUS êtes le paramètre aléatoire.

Et méfiez-vous de vous-même dans l'investigation. Le
[biais de confirmation](https://fr.wikipedia.org/wiki/Biais_de_confirmation) est votre pire
ennemi : quand on est convaincu que le problème ne vient pas de soi, on cherche (inconsciemment)
des preuves que ça vient d'ailleurs. « C'est sûrement un bug du framework », « Ça marchait avant,
ça doit être le serveur ». Résistez à ce réflexe. Isolez le problème méthodiquement : un
[`git bisect`](https://git-scm.com/docs/git-bisect) pour identifier le commit fautif, un
`git stash` pour vérifier que vos modifications locales sont en cause, un environnement vierge
pour éliminer les variables. Les outils existent pour remplacer l'intuition par des faits.
Utilisez-les avant de blâmer le framework, votre collègue ou Elon Musk.

## Parlez-vous

Si vous en avez la possibilité, plutôt qu'échanger mille mails, échanger par chat, SMS, appel
vocal ou vidéo, allez voir la personne concernée pour résoudre un problème. L'interaction n'en
sera que plus efficace si vous coopérez directement en face à face.

Cela dit, le face à face n'est pas toujours possible, et n'est pas toujours souhaitable non plus.
Le télétravail s'est généralisé, les équipes sont distribuées, et parfois le meilleur moyen de
communiquer, c'est d'écrire. Un message bien rédigé dans une PR, une
[RFC](https://fr.wikipedia.org/wiki/Request_for_comments) ou un document d'architecture (ADR), ça
vaut souvent mieux qu'une réunion de 45 minutes dont personne ne retiendra rien. La communication
asynchrone a un avantage énorme : elle laisse le temps de réfléchir avant de répondre, et elle
produit une trace écrite. À l'inverse, méfiez-vous de la réunionite. Paul Graham parlait du
[« maker's schedule »](https://www.paulgraham.com/makersschedule.html) : un développeur a besoin
de plages de concentration longues et ininterrompues. Chaque réunion mal placée coupe cet élan et
coûte bien plus que sa durée affichée. Et rappelez-vous :

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/meeting-email.jpg"
    alt="Tell me again why this meeting couldn't have been just an email?"
    style="max-width: 100%;" />
</p>

## Poser des questions != être con

Autre poncif du travail collaboratif, et même si vous avez lu ceci mille fois avant cet article :
n'ayez pas peur de poser des questions. Il n'y a pas de mauvaise question, éventuellement des
mauvais interlocuteurs, mais pas de mauvaise question. Personne n'est là pour vous dire « Putain
tu casses les couilles avec tes questions ». Vous aurez bien l'occasion de croiser ce genre de
personne, mais vous comprendrez aussi rapidement qu'il est inutile de les consulter.

<span id="ayez-un-rubber-ducky" class="anchor-highlight">Ayez un rubber ducky.</span> Autrement dit une personne, un objet, si possible sans compétence pour
résoudre ledit problème, et expliquez-lui par le menu ce qui ne va pas. Et bien ça va vous
sembler magique, mais souvent la solution apparaît rien qu'en énonçant le problème. Oui comme
dans 99% des épisodes de Docteur House.

<figure style="text-align: center;">
<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/rubber-ducky.jpg"
  alt="Rubber ducky" style="max-width: 100%;" />
<figcaption>Deux excellents exemples de rubber ducky.</figcaption>
</figure>

Enfin, une fois votre problème résolu, rendez à César ce qui appartient à César. Michel a mis en
évidence la honteuse boucle infinie qui plantait votre programme ? Mentionnez-le quand vous devrez
rendre compte du problème. Au-delà de la politesse de base, c'est aussi un excellent moyen pour
vous de lui renvoyer l'ascenseur et de continuer à mener une vie de développeur intègre. Encore
une fois, vous ne penserez pas toujours à tout. Vous ferez des erreurs.

## Apprenez en permanence

La beauté du métier de développeur, c'est que vous ne serez jamais arrivé au bout de ce que vous
connaissez, vous aurez toujours quelque chose à apprendre, un nouveau langage à maîtriser, un
framework à dompter. Si un jour vous vous dites que vous n'avez plus rien à acquérir
techniquement, et bien ce sera sans doute le signe qu'il faut changer de métier, parce que votre
activité première c'est avant tout d'apprendre, toujours. Et n'ayez pas peur du changement, les
technos évoluent, et vous devez évoluer avec elles. Vous ne ferez pas toujours la même chose
toute votre vie. Apprendre vous prendra peut-être du temps, vous allez galérer, tester, échouer,
recommencer, mais c'est comme ça que vous apprendrez. Et ce processus reste essentiel, même
(surtout) à l'ère de l'IA. Une IA peut vous générer du code, mais si vous ne comprenez pas ce
qu'elle produit, vous ne serez pas capable de la corriger, de la guider, ni de juger si ce
qu'elle propose est pertinent. Celui qui dirige l'IA, c'est celui qui comprend le problème.
Déléguer sans comprendre, ce n'est pas de l'efficacité, c'est de l'abandon.

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/ai-learning.webp"
    alt="Learn to code vs learn to write prompt" style="max-width: 100%;" />
</p>

Cela dit, apprendre ne veut pas dire courir après tout. Chaque semaine un nouveau framework
JavaScript, chaque mois un nouvel outil « qui va tout changer ». L'arrivée de l'IA dans notre
quotidien a amplifié ce phénomène de manière vertigineuse : les outils se multiplient, les usages
se réinventent, et avec eux les injonctions. « Si tu n'utilises pas l'IA tu seras remplacé »,
« l'IA va tuer le métier de développeur », « il faut tout réapprendre »… Les experts
autoproclamés pullulent, les avis définitifs aussi, et on a vite la sensation de se noyer.

Respirez.

Tout n'est pas à prendre, tout n'est pas à jeter. Ce qui compte, c'est d'entretenir une veille
régulière : suivre quelques sources de confiance, tester ce qui vous semble pertinent, <span id="ignorer-le-bruit" class="anchor-highlight">ignorer le
bruit</span>. Savoir distinguer une évolution de fond d'un effet de mode, c'est aussi une compétence qui
s'apprend. Et elle vous évitera le burnout d'apprentissage.

## Détendez-vous

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/relax.webp"
    alt="David Good" style="max-width: 100%;" />
  <br><em>Pas trop quand même</em>
</p>

Prenez la mesure de votre condition, de votre travail, vous êtes dév, pas médecin urgentiste.
Vous devez bien sûr attacher le plus grand soin à ce que vous faites, mais gardez à l'esprit que
vous n'allez tuer personne (sauf si vous étiez dans l'équipe qui a planifié
[le vol de la navette Challenger](https://fr.wikipedia.org/wiki/Accident_de_la_navette_spatiale_Challenger)),
alors relax. Attention, je ne dis pas que vous devez vous en foutre, mais que ça reste un métier,
même si c'est votre passion. Vous avez mille choses plus importantes dans votre vie que le build
de votre projet et le bonheur sur le visage de vos clients (même si c'est cool).

Et tant qu'on parle de se détendre, parlons de ce truc qui vous ronge en silence : le
[syndrome de l'imposteur](https://fr.wikipedia.org/wiki/Syndrome_de_l%27imposteur). Ce sentiment
que vous n'êtes pas à votre place. Que vos collègues sont meilleurs. Que si on vous a embauché,
c'est qu'on ne s'est pas encore rendu compte. Que le jour où on découvrira que vous googlez des
trucs basiques, ce sera terminé.

Spoiler : tout le monde google des trucs basiques. Tout le monde.

Le [syndrome de l'imposteur](https://www.jesuisundev.com/syndrome-imposteur) touche massivement
notre profession, et souvent les profils les plus compétents, parce que plus vous en savez, plus
vous mesurez ce que vous ne savez pas. C'est un biais cruel : ceux qui doutent le plus sont
rarement ceux qui devraient, ça porte même un nom :
[l'Effet Dunning-Kruger](https://fr.wikipedia.org/wiki/Effet_Dunning-Kruger). Pendant ce temps,
ceux qui ne doutent jamais commettent les pires trucs en toute confiance.

Vous n'avez pas besoin de tout savoir. Vous n'avez pas besoin de tout comprendre du premier coup.

Vous avez le droit de ne pas connaître un outil, un langage, un concept. Ça ne fait pas de vous
un mauvais développeur, ça fait de vous un être humain qui apprend, et c'est exactement ce qu'on
vous demande. Relisez la section précédente si nécessaire.

Alors la prochaine fois que cette petite voix vous dit que vous n'êtes pas légitime, rappelez-vous
que le simple fait de vous poser la question prouve déjà que vous prenez votre métier au sérieux.

Et ça, c'est exactement ce qui fait un bon développeur.
