# Stephen King et le debugging

*Ou comment « Écriture : Mémoires d'un métier » m'a rendu meilleur chasseur de bugs*

<figure style="text-align: center;">
  <img src="/assets/images/posts/stephen-king-et-le-debugging/king-matrix.jpg"
  alt="King dans la matrice" style="max-width: 100%;" loading="eager" />
</figure>

Stephen King est un auteur important pour moi. Je l'ai découvert en 1<sup>ère</sup>S, en cours de français,
à l'occasion d'une séquence sur la peine de mort. La prof nous avait donné à lire le chapitre 1 de
[*La Ligne verte*](https://fr.wikipedia.org/wiki/La_Ligne_verte_(roman)), j'ai lu le premier chapitre et j'ai dévoré le
reste du livre. Depuis, j'ai enchaîné les King, les classiques, les obscurs, je sais ce qu'est un Ka-Tet et le nombre 19
a toujours une résonance particulière en moi.

En 2000, King publie [*On Writing: A Memoir of the Craft*](https://fr.wikipedia.org/wiki/%C3%89criture_:_M%C3%A9moires_d%27un_m%C3%A9tier),
moitié autobiographie, moitié manuel d'écriture. Ça sort de fait un peu de ce qu'il propose habituellement, il parle de
lui, il parle de ce qu'est être un auteur, il délivre un genre de boîte à outils pour qui voudrait un jour se lancer.
Sous les anecdotes et les conseils sur la prose, il y a quelque chose d'inattendu : une méthodologie. Une discipline.
Une façon de penser les problèmes qui rappelle furieusement ce qu'on fait nous, développeurs, quand on traque un bug.

Explorons ça.

## « La route de l'enfer est pavée d'adverbes »

King déteste les adverbes. Pas par snobisme littéraire, mais parce qu'ils trahissent un manque de confiance.
Quand vous écrivez « il ferma la porte *violemment* », c'est que votre scène n'a pas réussi à transmettre la violence toute seule.
Le fameux *« Show, don't tell »* : montrez, ne dites pas. L'adverbe est un pansement sur une narration bancale.

En debugging, les adverbes s'appellent `printf`, ou `console.log`, ou `System.out.println`, ou `Console.WriteLine`, vous avez compris.
Chaque langage a sa variante, mais le syndrome est universel. On appelle ça le *printf debugging*.
Et ce n'est pas le `printf` chirurgical, placé à un endroit précis pour confirmer une hypothèse. Non, je parle de l'autre.
Le `printf("ici")`, le `puts("coucou")`, celui des enfers qu'on saupoudre partout parce qu'on ne comprend pas ce qui se passe,
comme si le terminal allait finir par craquer et avouer.

<figure style="text-align: center;">
  <img src="/assets/images/posts/stephen-king-et-le-debugging/pistolero-and-bugs.png"
  alt="Roland Deschain face à la Tour Sombre entourée de bugs" style="max-width: 100%;" loading="lazy" />
<figcaption>Le dév, la Tour du code parfait, le debugging de seigneur.
<br/>Roland Deschain, <em>La Tour Sombre</em></figcaption>
</figure>

Si vous avez besoin de 19 logs pour comprendre le flux d'exécution, c'est que vous n'avez pas compris le flux d'exécution.
Reculez. Relisez. Utilisez un debugger, posez un breakpoint, inspectez la stack. L'adverbe masque le problème. Le `console.log` sauvage aussi.

## « Kill your darlings »

C'est probablement le conseil d'écriture le plus cité, et le moins appliqué. King (reprenant une formule attribuée à
[Faulkner](https://fr.wikipedia.org/wiki/William_Faulkner), lui-même la reprenant 
d'[Arthur Quiller-Couch]( https://en.wikipedia.org/wiki/Arthur_Quiller-Couch)) insiste : si une phrase est belle mais 
ne sert pas l'histoire, supprimez-la. Peu importe le temps que vous avez passé dessus. Peu importe à quel point vous l'aimez.

En développement, les [*darlings*](https://ideonexus.com/2011/02/28/kill-your-darlings-is-a-programming-principle-too/)
sont ces morceaux de code dont vous êtes fier. Ce petit algorithme élégant. Cette abstraction qui vous a pris une journée entière.
Cette factory de factories que vous avez pondue avec amour. Quand un bug se cache dans leur voisinage, votre cerveau fait une chose
très humaine : il regarde ailleurs. « Le problème ne peut pas venir de là, c'est mon meilleur code. »

<p style="text-align: center;">
  <img src="/assets/images/posts/stephen-king-et-le-debugging/kill-your-darlings.jpg"
    alt="Ben si." style="max-width: min(300px, 100%);" loading="lazy" />
</p>

Le [biais de confirmation](https://fr.wikipedia.org/wiki/Biais_de_confirmation) est le pire ennemi du développeur en debug. Vous cherchez des preuves que votre code est innocent,
pas des preuves qu'il est coupable. Résultat : vous passez trois heures à suspecter une bibliothèque tierce, un
problème réseau, le cycle lunaire, Emmanuel Macron... avant de revenir, penaud, à votre belle abstraction et de
découvrir qu'elle gérait mal un cas limite depuis le début. Souvenez-vous,
[il n'y a pas de coïncidences](/fr/blog/ce-que-le-metier-de-developpeur-ma-appris#il-n-y-a-pas-de-coincidences),
et le paramètre aléatoire, c'est souvent vous.

Parce que King le dit mieux que personne : « Les monstres sont réels. Les fantômes aussi. Ils vivent à l'intérieur
de nous. » Le bug est rarement *extérieur*. Ce n'est pas le framework. Ce n'est pas la bibliothèque tierce.
Ce n'est pas le compilateur. Ce n'est pas le DNS.

Bon, OK. [C'est parfois le DNS.](https://isitdns.com/)

Mais dans 99% des cas, le monstre est dans votre code. Les fantômes, ce sont ces hypothèses implicites que vous avez
faites à l'écriture. « Cet ID ne sera jamais null. » « Ce tableau aura toujours au moins un élément. »
« L'utilisateur n'entrera jamais un emoji dans ce champ. » (Spoiler : 💩)

Chaque bug est une occasion d'apprendre quelque chose sur vos propres angles morts. Pas sur le code, sur vous.
Sur votre façon de raisonner, vos raccourcis mentaux, vos hypothèses jamais remises en question.
C'est pour ça que les meilleurs développeurs ne sont pas ceux qui écrivent le code le plus élégant, mais ceux qui savent se méfier d'eux-mêmes.

Tuez vos chéris. Ou au minimum, suspectez-les en premier.

## La porte fermée, la porte ouverte

King écrit en deux phases. D'abord la porte fermée : premier jet, seul, sans montrer à personne.
C'est brut, imparfait, mais c'est *out*. Ensuite la porte ouverte : relecture, retours extérieurs, réécriture.

Le debugging suit exactement le même rythme.

**Phase porte fermée** : vous, le bug, et votre compréhension du code. C'est là que vous isolez le
problème. Vous reproduisez, vous réduisez le périmètre, vous formulez des hypothèses. Ce travail
est solitaire par nature, et c'est normal. Personne ne peut débuguer à votre place un problème que
vous n'avez pas encore compris vous-même.

**Phase porte ouverte** : vous avez identifié la zone suspecte mais vous coincez. C'est le moment
du [rubber duck debugging](https://fr.wikipedia.org/wiki/M%C3%A9thode_du_canard_en_plastique)
(ayez un [rubber ducky](/fr/blog/ce-que-le-metier-de-developpeur-ma-appris#ayez-un-rubber-ducky)),
de la PR de debug partagée avec un collègue, du message sur le channel de l'équipe.
Expliquer le problème à quelqu'un d'autre, c'est souvent le résoudre. King le sait : la réécriture
n'est pas un aveu de faiblesse, c'est le processus.

<figure style="text-align: center;">
  <img src="/assets/images/posts/stephen-king-et-le-debugging/dark-tower-door.jpg"
  alt="Jake Chambers devant la porte" style="max-width: min(300px, 100%);" loading="lazy" />
<figcaption>Parfois, la réponse est de l'autre côté de la porte.
<br/>Jake Chambers, <em>La Tour Sombre</em></figcaption>
</figure>

## Le monstre qu'on ne voit pas est toujours plus effrayant

King maîtrise l'art de la suggestion. Dans *Ça*, Pennywise est terrifiant non pas parce qu'il est visible,
mais parce qu'il *pourrait* être là. L'horreur vit dans le hors-champ, dans ce que votre imagination comble.

Les pires bugs fonctionnent exactement pareil.

Un `NullPointerException` avec une stack trace de 40 lignes ? Presque rassurant. Vous savez *où* ça a pété, *quand*,
et *pourquoi*. C'est un monstre visible. Vous le tuez et vous passez à autre chose.

Mais le bug silencieux, celui qui ne lève aucune exception, qui ne fait crasher aucun test, qui corrompt vos données
à bas bruit pendant trois semaines avant que quelqu'un ne remarque que les montants ne collent plus, celui-là :
c'est votre Pennywise. Il est dans les égouts de votre codebase, et il attend.

<figure style="text-align: center;">
  <img src="/assets/images/posts/stephen-king-et-le-debugging/pennywise.png"
  alt="Pennywise / Grippe-Sou — Ça" style="max-width: 100%;" loading="lazy" />
<figcaption>Saleté.
<br/>Pennywise / Grippe-Sou, <em>Ça</em></figcaption>
</figure>

Les bugs les plus coûteux sont ceux qui ne font pas de bruit. Parce qu'ils ne déclenchent pas votre instinct de danger.
Tout semble fonctionner. Les tests passent. La CI est verte. Et pourtant, quelque part dans un `if` mal formulé
ou un arrondi silencieux, les données dérivent.

> « La terreur, c'est rentrer chez soi et remarquer que tout ce qu'on possède a été remplacé par une copie exacte. »
> Stephen King, *Danse Macabre*

## « L'histoire, c'est de la terre fossile »

King ne planifie pas ses romans. Pas de plan détaillé, pas de synopsis chapitre par chapitre. Pour lui, l'histoire
existe déjà, enfouie, et le travail de l'écrivain est de la déterrer, précautionneusement, comme un paléontologue avec son pinceau.

Débuguer, c'est la même chose. Le bug existe déjà. Il est dans le code, quelque part, enfoui sous des couches de
logique et d'abstraction. Votre travail n'est pas de *créer* la solution mais de *découvrir* le problème.
Et comme le paléontologue, vous devez résister à la tentation d'y aller à la pelleteuse.

J'ai vu (et fait) trop de fois cette erreur : face à un bug, réécrire une portion entière de code « parce que de toute
façon c'était mal foutu ». C'est la pelleteuse. Vous détruisez le contexte, vous masquez la cause réelle, et vous
introduisez potentiellement de nouveaux bugs. Parfois le fix est une ligne. Parfois c'est un index mal initialisé,
un seul caractère. Mais pour trouver ce caractère, il faut de la patience et un pinceau.

[git bisect](https://git-scm.com/docs/git-bisect/) est votre pinceau. Il prend un état qui marche, un état qui ne marche pas, et fait une
recherche dichotomique dans l'historique. Pas de supposition, pas d'intuition, juste des faits. En quelques minutes,
vous avez le commit fautif. Ensuite, il ne reste qu'à comprendre *pourquoi* ce commit a tout cassé.

<figure style="text-align: center;">
<figcaption>Dev : « Je vais juste réécrire tout le module, ça ira plus vite. »</figcaption>
  <img src="/assets/images/posts/stephen-king-et-le-debugging/pet-sematary.jpg"
  alt="Sometimes, dead is better — Jud Crandall, Simetierre" style="max-width: 100%;" loading="lazy" />
<figcaption>Jud Crandall, <em>Simetierre</em>. Il savait.</figcaption>
</figure>

## « L'instant le plus effrayant, c'est toujours juste avant de commencer »

Cette citation de King s'applique à l'écriture, mais aussi à ce moment très précis : vous venez de recevoir un ticket,
le titre est hyper précis (« ça marche plus »), la priorité est critique, et vous n'avez aucune idée par où commencer.

La paralysie du bug inconnu.

Vous regardez le ticket. Vous regardez le code. Vous regardez le ticket à nouveau. Vous allez vous chercher un café.
Vous relisez le ticket en espérant que le sens caché va se révéler, comme un 
[Magic Eye](https://fr.wikipedia.org/wiki/Autost%C3%A9r%C3%A9ogramme) pour développeurs.

<figure style="text-align: center;">
  <img src="/assets/images/posts/stephen-king-et-le-debugging/all-work-no-play.png"
  alt="All work and no play makes Jack a dull boy — Shining" style="max-width: 100%;" loading="lazy" />
<figcaption>POV : vous relisez le ticket pour la 19<sup>ème</sup> fois.
<br/>Jack Torrance, <em>Shining</em></figcaption>
</figure>

King combat cette paralysie par la routine. Chaque matin, il s'assoit et il écrit. Pas quand l'inspiration vient.
Pas quand les conditions sont parfaites. Il s'assoit et il commence. Point.

Pour le debugging, la routine c'est la méthode :

1. **Reproduire.** Si vous ne pouvez pas le reproduire, vous ne pouvez pas le corriger. Trouvez les
étapes exactes, l'environnement, les données.
2. **Isoler.** Réduisez le périmètre. Commentez, simplifiez, éliminez les variables.
3. **Formuler une hypothèse.** Une seule. Précise. Testable.
4. **Tester l'hypothèse.** Pas « vérifier que ça marche maintenant ». Prouver que votre hypothèse
explique le comportement observé.
5. **Corriger.** Et écrire un test qui aurait attrapé le bug avant vous.

Ce n'est pas sexy. Ce n'est pas créatif. Mais ça marche, et ça vous évite de passer trois heures à tourner en rond
en maudissant l'univers.

## Le deuxième jet, c'est le premier jet moins 10%

King a une règle : la deuxième version d'un texte doit être environ 10% plus courte que la première.
Pas par dogme, mais parce qu'en coupant, vous ne gardez que l'essentiel. Chaque mot doit mériter sa place.

Quand vous corrigez un bug, regardez le diff avant de commiter. Est-ce que chaque ligne modifiée est nécessaire ?
Avez-vous glissé un petit refactoring en passant ? Ajouté un import qui ne sert pas ? Corrigé un commentaire sans rapport ?

Un bon fix de bug, c'est **chirurgical**. Il change le minimum nécessaire pour résoudre le problème, accompagné 
d'un test qui prouve la correction. Rien de plus. Si vous voulez refactorer la fonction tant qu'on y est, faites-le
dans un commit séparé. Votre futur vous (ou votre reviewer) vous remerciera quand il faudra faire un `git blame` et 
comprendre pourquoi cette ligne a changé.

Le premier jet du fix est rarement le bon. Retirez 10%.

<figure style="text-align: center;">
  <img src="/assets/images/posts/stephen-king-et-le-debugging/annie-wilkes.jpg"
  alt="Annie Wilkes lisant le manuscrit — Misery" style="max-width: 100%;" loading="lazy" />
<figcaption>Votre reviewer quand le diff du bugfix fait 400 lignes.
<br/>Annie Wilkes, <em>Misery</em></figcaption>
</figure>

## Écrire, c'est réécrire. Coder, c'est débuguer.

Si King devait résumer *On Writing* en une phrase, ce serait probablement celle-ci : écrire, c'est réécrire.
Le premier jet n'est jamais le texte final. Le travail réel commence après l'écriture.

Pour nous, c'est pareil. Le premier commit n'est jamais le code final. Le code vit, évolue, casse, se fait corriger,
recasse, se fait re-corriger. Le debugging n'est pas un accident de parcours, c'est **le métier**. Si vous avez choisi
cette carrière en pensant que l'essentiel du travail serait d'écrire du code neuf et brillant, j'ai une mauvaise nouvelle :
vous allez passer beaucoup plus de temps à comprendre du code existant qu'à en écrire du nouveau. Et encore plus de temps à comprendre
*pourquoi* ce code existant ne fait pas ce qu'il devrait.

Et c'est OK. C'est même la partie la plus intéressante.

Et à l'heure où une IA peut générer 200 lignes de code en quelques secondes, cette compétence n'a jamais été 
aussi cruciale. Parce que le code produit par une IA, il a exactement les mêmes bugs que le code humain, les
mêmes cas limites oubliés, les mêmes hypothèses implicites, les mêmes [off-by-one](https://fr.wikipedia.org/wiki/Erreur_de_d%C3%A9calage_unitaire).
Sauf que vous ne l'avez pas écrit, donc vous n'avez même pas l'intuition de ce qui pourrait casser. Celui qui sait 
débuguer comprend ce que le code fait *vraiment*, pas ce qu'il est *censé* faire. Et ça, aucun copilote ne le fera à votre place.

Parce que chaque bug résolu, c'est un chapitre de plus dans votre propre *Mémoires d'un métier*.
Et contrairement aux romans de King, le monstre à la fin... c'est toujours vous.

<figure style="text-align: center;">
  <img src="/assets/images/posts/stephen-king-et-le-debugging/boogeyman.jpg"
  alt="Le Croque-Mitaine — The Boogeyman" style="max-width: 100%;" loading="lazy" />
</figure>
