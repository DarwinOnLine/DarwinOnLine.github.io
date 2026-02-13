# Ce que le métier de développeur m'a appris

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/learn.gif" alt="Learn" />
</p>

Cet article est une adaptation libre du [post de Henrik Warne](https://henrikwarne.com/2015/04/16/lessons-learned-in-software-development/) que j'ai pu lire avec intérêt en 2015. Il y partage son expérience de développeur et donne une analyse pertinente du métier. Je me suis attaché à compléter et illustrer chaque point avec mon expérience et éventuellement des précisions qui me semblaient appropriées.

Cet article sera amené à évoluer au fur et à mesure que mon expérience grandira 😉

## Un projet complexe est un projet simple qui a évolué

<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/pika.png" alt="" style="float: left; margin: 0 1rem 1rem 0; max-width: 128px;" />

Lorsque vous démarrez un nouveau projet, une nouvelle application, un site web, ou même que vous ajoutez une fonctionnalité à un projet existant, allez d'abord à l'essentiel, quitte à ne pas implémenter tout ou partie des fonctionnalités prévues. Vous pourrez ensuite le faire évoluer petit à petit, pour l'amener vers la solution complète attendue. Si un projet englobant beaucoup de notions, d'algos ou d'outils, est démarré de tout de front directement, il sera invariablement dur à maintenir.
Il existe une règle empirique pour résumer cette notion, la [Loi de Gall](https://fr.wikipedia.org/wiki/Loi_de_Gall) :

> Un système complexe qui fonctionne se trouve invariablement avoir évolué depuis un système simple qui fonctionnait. La proposition inverse se révèle également exacte: Un système complexe développé de A à Z ne fonctionne jamais et vous n'arriverez jamais à le faire fonctionner. Vous devez recommencer depuis le début, en commençant par un système simple.

Mettons que vous vouliez concevoir un distributeur de nourriture en tout genre (friandises, sandwiches, boissons), vous allez d'abord installer votre boîtier en acier brut. Dans un premier temps, votre machine ne sera capable de rien, pas même accepter des pièces, mais ce sera un distributeur quand même.
Puis vous allez ajouter des compartiments vides, une vitre, un clavier, un afficheur LED et une fente pour les pièces. Vous ajouterez la gestion de la monnaie dans le mécanisme d'insertion de pièces, vous lierez cela avec le clavier et les compartiments pour débloquer les produits, et vous configurerez un affichage pour l'écran LED. Chaque étape viendra enrichir votre projet et le complexifier, mais à chaque itération, votre machine fonctionnera, et sera capable de faire plus.

## Faites une chose à la fois

Ce précepte vaut pour le développement, mais avant tout dans le cas général. Si vous rencontrez une erreur, qu'un test échoue ou qu'une régression a lieu, si vous savez que vous n'avez modifié le code qu'à un endroit précis (et qu'avant tout fonctionnait 🙂 ), la détection du bug devient beaucoup plus facile. Cela est lié directement au point précédent, avancez pas à pas. Modifiez le point A, commitez, modifiez le point B, commitez, et ainsi de suite. Les commits sont d'ailleurs d'excellents marqueurs / jalons pour cela, ils permettent de clairement cloisonner les modifications que vous apportez au code.

## Activez les logs et la gestion d'erreur le plus tôt possible

<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/quand-je-regarde-logs.gif" alt="" style="float: right; margin: 0 0 1rem 1rem; max-width: 219px;" />

Pour ne pas dire avant toute chose. Cela peut paraître futile à la genèse du projet, mais les premiers problèmes peuvent apparaître tôt. Ainsi il est important de toujours avoir le contrôle de ce que vous faites, et un log intelligent couplé à une bonne gestion des erreurs vous permettra de maintenir ce contrôle dès le début et de façon continue.

Et bien évidemment, même si la plupart des systèmes de log le font, horodatez tout ce qui est écrit.

## Tout ce que vous codez doit être exécuté au moins une fois

<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/bug-plane.jpg" alt="Ça n'arrive qu'aux autres, m'voyez." style="float: left; margin: 0 1rem 1rem 0; max-width: 300px;" />

Cela semble tomber sous le sens. On peut se dire que les tests unitaires et tests d'intégration sont là pour vérifier chaque ligne écrite, ce qui est vrai (à condition de les écrire évidemment !), mais on peut parfois écrire quelques lignes de code qui ne seront, à priori, jamais exécutées. Par exemple, gérer le fait que la colonne my_column n'est pas présente en base. Vous vous dites que vous aurez fait attention à votre structure, et que ça n'arrivera jamais. Cependant si vous vous mettez une protection contre cela, il est bon de vérifier que cette protection fonctionne. Alors on triche un peu, on met sa base offline, on fait volontairement une faute dans le nom de la colonne, on inverse une condition pour provoquer artificiellement le cas d'erreur, et on teste, pour attester que cette fois-ci c'était bien géré.

## Les choses prennent (toujours) plus de temps que prévu

Un poncif chez quiconque a mené un projet avec des délais à tenir. « Combien de temps tu penses que ça va prendre ? » Cette question vous n'y répondez jamais avec certitude, ou alors vous avez déjà mené cette exacte tâche récemment (et du coup vous savez). Partez du principe que ce que vous entreprenez ne se déroulera pratiquement jamais sans embûche. Vous aurez un accident de merge, vous aurez un bug à la con qui vous mobilisera 2h, vous aurez à mettre à jour un framework et découvrir avec horreur que la moitié de votre code est deprecated… Tous ces paramètres et même plus sont prévus dans la [loi de Hofstadter](https://fr.wikipedia.org/wiki/Loi_de_Hofstadter) :

> Il faut toujours plus de temps que prévu, même en tenant compte de la Loi de Hofstadter.

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/hofstader.jpg" alt="Hofstadter" />
</p>

… et c'est très difficile à expliquer à votre scrum master, votre commercial, sans passer pour un fumiste.

## Comprenez ce sur quoi vous travaillez

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/getit.gif" alt="Get it" />
</p>

Beaucoup de vos projets vont consister à modifier ou faire évoluer un code existant. Alors prenez le temps de bien comprendre ce que vous vous apprêtez à casser. Car le client, lui, a une connaissance pointue de son produit (enfin, normalement), et il ne manquera pas de vous signaler qu'avant il pouvait utiliser cette super fonctionnalité dont vous n'aviez aucune idée, et que maintenant il ne peut plus, et que c'est un scandale. Peut-être même que vous l'avez fait exprès pour qu'il la repaie, sacripant d'informaticien que vous êtes. Les tests prennent donc toute leur importance, s'ils sont complets, vous laissez une chance à votre successeur de mieux appréhender ce que vous avez fait. Lisez mais surtout exécutez le code, faites une application bac à sable au besoin, jouez avec le projet, éprouvez-le.

## Il y aura toujours des bugs

<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/bugs.jpg" alt="" style="float: right; margin: 0 0 1rem 1rem; max-width: 150px;" />

Et tenez-vous cela pour dit. Cela ne signifie pas que vous êtes une tanche, juste que vous ne pouvez pas penser à tout. Ainsi oubliez cette approche marketing « Tout fonctionnera comme prévu du premier coup et tout le temps ». C'est faux, l'expression même du besoin peut tout à fait être foireuse, et provoquer des enchaînements qu'on peut qualifier de bugs. Un jour un utilisateur fera une manipulation dans un ordre précis et obtiendra un résultat aberrant, simplement parce que vous ne l'aurez pas anticipé. Et ce n'est pas grave, du moment que vous serez là pour corriger. Préférez donc l'approche « Je détecte un problème, je le corrige et je déploie le fix », cela si possible avant que l'utilisateur final ne rencontre le problème.

<div style="clear: both;"></div>

## Prenez le temps de résoudre les problèmes

<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/multitask.gif" alt="" style="float: left; margin: 0 1rem 1rem 0; max-width: 215px;" />

Conséquence du point précédent, prenez le temps de résoudre les problèmes, faites-en une tâche récurrente. Corriger un bug n'est pas une perte de temps mais un excellent moyen d'améliorer l'expérience utilisateur en cherchant à comprendre ce que les gens ont essayé de faire avec votre application, d'éprouver la maintenabilité de votre code et de garder à l'esprit que vous êtes responsable de ce que vous développez.

Point important, reproduisez le problème, et cela de façon systématique, programmez un test permettant de le mettre en évidence, et à partir de cela corrigez. Vous vous assurez ainsi que vous corrigerez le bon problème au lieu d'en créer un nouveau 🙂

N'essayez pas de tout traiter à la fois, identifiez et corrigez chaque problème à votre portée, n'essayez pas de prévoir trop loin. Une fois toutes erreurs connues fixées, voyez ce qu'il subsiste et recommencez au besoin.

<div style="clear: both;"></div>

## Il n'y a pas de coïncidences

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/coincidence.gif" alt="Coincidence" />
</p>

Jamais. La règle est simple : si vous avez créé une fonctionnalité A et que désormais la fonctionnalité B est buguée, pas de coïncidence. Si suite à l'ajout de votre nouveau module, le système semble plus lent, pas de coïncidence. Ne vous remettez pas à une quelconque divinité du hasard, investiguez. Souvent il apparaîtra que VOUS êtes le paramètre aléatoire.

## Parlez-vous

Si vous en avez la possibilité, plutôt qu'échanger mille mails, échanger par chat, SMS, appel vocal ou vidéo, allez voir la personne concernée pour résoudre un problème. L'interaction n'en sera que plus efficace si vous coopérez directement en face à face.

## Poser des questions != être con

Autre poncif du travail collaboratif, et même si vous avez lu ceci mille fois avant cet article : n'ayez pas peur de poser des questions. Il n'y a pas de mauvaise question, éventuellement des mauvais interlocuteurs, mais pas de mauvaise question. Personne n'est là pour vous dire « Putain tu casses les couilles avec tes questions ». Vous aurez bien l'occasion de croiser ce genre de personne, mais vous comprendrez aussi rapidement qu'il est inutile de les consulter.

Ayez un rubber ducky. Autrement dit une personne, un objet, si possible sans compétence pour résoudre ledit problème, et expliquez-lui par le menu ce qui ne va pas. Et bien ça va vous sembler magique, mais souvent la solution apparaît rien qu'en énonçant le problème. Oui comme dans 99% des épisodes de Docteur House.

<figure style="text-align: center;">
<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/rubber-ducky.jpg" alt="Rubber ducky" style="max-width: 300px;" />
<figcaption>Deux excellents exemples de rubber ducky.</figcaption>
</figure>

Enfin, une fois votre problème résolu, rendez à César ce qui appartient à César. Michel a mis en évidence la honteuse boucle infinie qui plantait votre programme ? Mentionnez-le quand vous devrez rendre compte du problème. Au-delà de la politesse de base, c'est aussi un excellent moyen pour vous de lui renvoyer l'ascenseur et de continuer à mener une vie de développeur intègre. Encore une fois, vous ne penserez pas toujours à tout. Vous ferez des erreurs.

## Apprenez en permanence

La beauté du métier de développeur, c'est que vous ne serez jamais arrivé au bout de ce que vous connaissez, vous aurez toujours quelque chose à apprendre, un nouveau langage à maîtriser, un framework à dompter. Si un jour vous vous dites que vous n'avez plus rien à acquérir techniquement, et bien ce sera sans doute le signe qu'il faut changer de métier, parce que votre activité première c'est avant tout d'apprendre, toujours. Et n'ayez pas peur du changement, les technos évoluent, et vous devez évoluer avec elles. Vous ne ferez pas toujours la même chose toute votre vie. Apprendre vous prendra peut-être du temps, vous allez galérer, tester, échouer, recommencer, mais c'est comme ça que vous apprendrez.

## Détendez-vous

Prenez la mesure de votre condition, de votre travail, vous êtes dév, pas médecin urgentiste. Vous devez bien sûr attacher le plus grand soin à ce que vous faites, mais gardez à l'esprit que vous n'allez tuer personne (sauf si vous étiez dans l'équipe qui a planifié [le vol inaugural de la navette Challenger](https://fr.wikipedia.org/wiki/Accident_de_la_navette_spatiale_Challenger)), alors relax. Attention, je ne dis pas que vous devez vous en foutre, mais que ça reste un métier, même si c'est votre passion. Vous avez mille choses plus importantes dans votre vie que le build de votre projet et le bonheur sur le visage de vos clients (même si c'est cool).
