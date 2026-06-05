# SOLID : autopsie d'un boys band

*`SOLID`, le boys band de la POO : cinq lettres qu'on récite, cinq principes qu'on confond. Ce qui a vieilli, et ce 
qu'il y a vraiment sous les paillettes.*

<figure style="text-align: center;">
  <img src="/assets/images/posts/solid-autopsie-d-un-boys-band/hero.webp"
  alt="Pochette d'album parodique d'un boys band des années 2000 nommé SOLID : cinq jeunes hommes posent autour d'un gros caillou musclé, le tout en typographie chromée façon Y2K"
  style="max-width: min(512px, 100%);" loading="eager" />
<figcaption>Vous connaissez le <a href="https://festivalcailloucostaud.com/" target="_blank" rel="noopener">festival du Caillou Costaud</a> ?</figcaption>
</figure>

T'as déjà vu [la saison 2 de Culte sur les 2Be3](https://www.allocine.fr/series/ficheserie_gen_cserie=37629.html) ?
Je vais te raconter rapidement. Imagine trois mecs, non cinq, chacun avec son propre tempérament. T'as le sage qui
veut un seul patron, le gars ambitieux qui se voit déjà à l'Olympia, le gars sérieux qui a fait musicologie à la fac,
le discret dont personne retient le nom, et bien sûr : le leader. Ils décident de chanter ensemble malgré leurs
différences et forment un groupe.

Ils l'appellent `SOLID`. Un peu chelou mais bon pourquoi pas. C'est simple, ça reprend les initiales de chacun et c'est
facile à retenir ("les gars solides", t'as compris 😏).

Bon déjà là tu sens venir le storytelling moisi. Un boys band ça se monte pas en un claquement de doigts, et mes cinq
types ont pas tous le même talent. Déjà j'en ai qu'un seul qui a vraiment étudié la musique, les autres aiment juste
chanter.

Et puis... Ils sont peut-être pas vraiment cinq.

--- 

Les années 90-2000, c'était l'âge d'or pour ce genre de groupe. Le calendrier joue pour nous.

Une dernière chose sur l'origin story du groupe, et pas des moindres : il y a un homme derrière tout ça,
[Robert C. Martin](http://cleancoder.com/products) (Uncle Bob pour les intimes). Autour de l'an 2000, c'est lui qui
écrit les morceaux, qui pose les cinq principes un à un. Le nom du groupe, par contre, c'est un autre qui l'a trouvé :
[Michael Feathers](https://michaelfeathers.silvrback.com/archive), qui quelques années plus tard a eu l'idée de
réordonner les initiales pour que ça tombe pile sur `SOLID`. L'un compose, l'autre trouve le nom sur l'affiche. Le tout
pour un public de niche : la pop d'entreprise, Java et C#, l'époque exacte où un boys band et une classe abstraite
sortaient la même année. Retiens la date. On y revient.

Et comme on juge la musique des 2Be3 à notre époque, ici on va faire un petit état des lieux de ce qu'il reste de
`SOLID`. On va pas les enterrer, c'est des légendes. Ici on lit les textes, on regarde les arrangements, on voit ce
qui a vieilli, et surtout ce qu'il y a réellement dessous.

## S — Single Responsibility

Le sage, c'est notre gars qui veut un seul patron. Lui son mantra c'est :

> Une classe ne devrait avoir qu'une seule raison de changer.

Bon, quand tu lui demandes ce qu'il entend par "raison de changer", il reste un peu vague, c'est flou. La réponse c'est
Uncle Bob qui te la donne : un module ne répond qu'à un seul *acteur*, un seul commanditaire. En clair, le label et le
service marketing ne devraient pas pouvoir te réécrire le même bout de code chacun dans son coin.

Alors attention, on ne dit pas "le sage fait une seule chose". Ça semble peut-être pareil, mais ça ne l'est pas.
À force d'émietter pour que chaque classe "fasse une seule chose", tu te retrouves avec dix mini-classes anémiques, la
logique qui bouge ensemble finit éparpillée sur dix fichiers. Le jour où l'acteur unique demande une évolution,
tu cours après les morceaux. Tu voulais alléger le changement, tu l'as fait grimper. Pile l'inverse.

<figure style="text-align: center;">
  <img src="/assets/images/posts/solid-autopsie-d-un-boys-band/gru-emiettage.webp"
  alt="Mème du plan de Gru en quatre cases : découper chaque responsabilité dans sa classe, puis réaliser que la logique qui change ensemble finit éparpillée" style="max-width: 100%;" loading="lazy" />
<figcaption>Le plan était parfait.</figcaption>
</figure>

Ça se compte pas en "nombre de responsabilités", ça, ça veut rien dire. Ça se lit dans *qui* réclame les changements :
deux bouts que le même patron fait évoluer, tu les gardes ensemble ; deux patrons différents, tu sépares. Tu regroupes 
par origine du changement, pas par jolie symétrie.

```php
// ❌ Trois patrons sur le dos : la compta, le marketing ET le fan-club.
final class Membre
{
    public function chanter(): string { /* ... */ }
    public function calculerCachet(): float { /* règle de la compta */ }
    public function dessinerAffiche(): string { /* règle du marketing */ }
    public function repondreAuxFans(): void { /* règle du fan-club */ }
}

// ✅ Un membre, un seul patron. À chaque acteur sa classe.
final class Membre
{
    public function chanter(): string { return '🎤'; }
}

final class FicheDePaie  // patron : la compta
{
    public function cachet(Membre $membre): float { /* ... */ }
}

final class ServiceCom   // patron : le marketing
{
    public function affiche(Membre $membre): string { /* ... */ }
}
```

## O — Open/Closed

L'ambitieux se voit déjà à l'Olympia, tu le sais, alors il veut tout prévoir. Son principe : ouvert à l'extension,
fermé à la modification. Traduction : t'ajoutes du comportement (une nouvelle implémentation, via le polymorphisme) 
sans rouvrir le code qui tourne déjà. Le morceau existant reste scellé, tu greffes à côté.

Sauf que l'ambitieux il en fait des caisses. Il truffe le code de points d'extension *en prévision* : interfaces,
stratégies, hooks partout, pour des variations qui n'existent pas encore. Il branche la prise avant d'avoir
l'ampli. Et là, le dogme se contredit tout seul : OCP poussé à fond, c'est exactement la généralité
spéculative où tu cries... [YAGNI](/fr/blog/dry-kiss-yagni-trois-acronymes-trois-pieges#yagni-you-aren-t-gonna-need-it) !
Les deux principes que les mêmes gens récitent dans la même phrase... et qui se mettent sur la tronche.

<figure style="text-align: center;">
  <img src="/assets/images/posts/solid-autopsie-d-un-boys-band/distracted-ocp.webp"
  alt="Mème du petit ami distrait : un dev détourne le regard du besoin réel d'aujourd'hui pour reluquer les points d'extension du futur" style="max-width: 100%;" loading="lazy" />
<figcaption>YAGNI le regarde de travers.</figcaption>
</figure>

OCP, c'est le plus daté des cinq, faut le dire. À l'époque, ouvrir et modifier du code, ça coûtait cher et ça faisait
peur. Mais c'était dans un monde sans tests, sans CI, sans `git`. Dans le tien, retoucher une fonction couverte par des
tests, c'est souvent moins cher que d'avoir tricoté une abstraction à l'avance. Donc : tu ouvres là où la variation est
prouvée et récurrente (n'oublie pas, DRY, la [Rule of Three](https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)),
tu l'as changé trois fois, *là* tu abstrais), et tu édites simplement là où elle est hypothétique.
Tu règles sur le changement observé, jamais sur le changement rêvé.

Le répertoire du concert, ouvert aux nouveaux numéros sans qu'on y touche :

```php
interface Numero
{
    public function jouer(): string;
}

final class Chanson implements Numero
{
    public function jouer(): string { return 'le tube de l\'été'; }
}

final class Reprise implements Numero
{
    public function jouer(): string { return 'la reprise de Jul'; }
}

final class Concert
{
    /** @param Numero[] $numeros */
    public function donner(array $numeros): void
    {
        foreach ($numeros as $numero) {
            echo $numero->jouer();
        }
    }
}

// Demain, un medley ? On ajoute une classe, on ne rouvre jamais Concert.
// (Mais on attend d'avoir vu la variation pour de vrai. Sinon, c'est l'ambitieux qui parle.)
final class Medley implements Numero
{
    public function jouer(): string { return 'le medley best-of'; }
}
```

## L — Liskov Substitution

Et voilà l'intrus. Le sérieux, le seul qui a fait musicologie à la fac. Pendant que les autres bossent la choré,
lui sait lire une partition, et du coup c'est le seul dont on peut écrire le contrat noir sur blanc. Son énoncé
vient d'un vrai travail de théorie des types ([Barbara Liskov et Jeannette Wing](https://www.cs.cmu.edu/~wing/publications/LiskovWing94.pdf)) :
un sous-type doit pouvoir remplacer son type de base sans casser le programme. Concrètement, l'enfant ne renforce pas 
les préconditions, n'affaiblit pas les postconditions, et préserve les invariants du parent. Si `B` hérite de `A`,
tout code qui marchait avec un `A` doit continuer avec un `B`, sans même le savoir.

Le faux ami, c'est l'éternel carré qui hérite du rectangle, récité pour "prouver" qu'il faut pas hériter. La leçon
a jamais été "l'héritage c'est mal", c'est "respecte le contrat". La plupart des gens invoquent "Liskov" comme
une ambiance, un sourcil froncé en revue de code, sans savoir l'énoncer. Lui, c'est le seul des cinq qu'on peut
énoncer *exactement*.

Ici tu peux pas doser le principe, il est binaire : ou tu respectes le contrat, ou tu le violes. Simple, basique.
Ce que tu doses, c'est la *sévérité du contrat* que tu écris. Trop lâche, il garantit rien ; trop strict, il devient
intenable pour les sous-types. Et retiens ce truc, ça prépare la suite : c'est ce contrat qui rend les deux autres
principes de couplage fiables. Tu peux dépendre d'une abstraction seulement si t'es sûr que ses implémentations
tiendront leur promesse. Le sérieux est le garant silencieux des autres membres du groupe.

Le contrat du sérieux, et celui qui le brise :

```php
abstract class Chanteur
{
    /** @return string une vraie perf vocale, en direct. C'est le contrat. */
    abstract public function chanterEnDirect(): string;
}

final class LeSerieux extends Chanteur
{
    public function chanterEnDirect(): string { return 'Je chante en live, pile dans le ton'; }
}

// ❌ Casse le contrat : impossible de le glisser à la place d'un Chanteur.
final class LePlayback extends Chanteur
{
    public function chanterEnDirect(): string
    {
        throw new \LogicException('moi je fais que du playback'); // précondition renforcée
    }
}

function ouvreLeConcert(Chanteur $chanteur): void
{
    echo $chanteur->chanterEnDirect(); // nickel pour LeSerieux, explose pour LePlayback
}
```

<figure style="text-align: center;">
  <img src="/assets/images/posts/solid-autopsie-d-un-boys-band/one-job-playback.webp"
  alt="Mème 'You had one job' : le membre playback avait une seule tâche, chanter en direct, et il lève une exception" style="max-width: 100%;" loading="lazy" />
<figcaption>La substituabilité a quitté le bâtiment.</figcaption>
</figure>

## I — Interface Segregation

Le discret, c'est celui qui a deux lignes sur l'album, qui se fait couper au montage sur le clip, et qu'on oublie toujours,
parce qu'il ne signe que sa partie. Son principe : aucun client devrait être forcé de dépendre de méthodes qu'il
n'utilise pas. Tu découpes les grosses interfaces fourre-tout en interfaces de rôle, taillées pour ce que chaque 
appelant consomme vraiment. Au fond, c'est le sage (le S), mais vu depuis le client.

Le faux pas, prévisible : faire du zèle et éclater chaque interface en micro-interfaces à une seule méthode.
T'as juste remplacé une interface trop grosse par une soupe d'interfaces minuscules. T'as transformé un gros bazar en
plein de petits bazars, tu t'y retrouves toujours pas.

Ségrège selon le besoin réel des consommateurs, pas par goût de la symétrie. Et sois lucide sur l'époque : ce
principe avait de l'importance avec du typage nominal, avec le Java et le C# de 2002. En typage structurel (TypeScript,
Go), il se dissout presque tout seul, vu que le client dépend déjà que de ce qu'il touche. C'est pour ça qu'il est 
discret, le plus mineur des cinq, et c'est pas un hasard si t'as tendance à l'oublier.

Les rôles découpés, pour que le discret ne signe que sa partie :

```php
// ❌ Interface fourre-tout : le discret doit "signer" des trucs qu'il fait pas.
interface MembreDeGroupe
{
    public function chanter(): string;
    public function danser(): string;
    public function composer(): string;
}

// ✅ Des interfaces de rôle. Chacun ne signe que ce qu'il sait faire.
interface Chanteur    { public function chanter(): string; }
interface Danseur     { public function danser(): string; }
interface Compositeur { public function composer(): string; }

final class LeDiscret implements Chanteur            // juste les chœurs, et c'est déjà bien
{
    public function chanter(): string { return 'les chœurs'; }
}

final class LeLeader implements Chanteur, Danseur, Compositeur { /* lui, il touche à tout */ }
```

## D — Dependency Inversion

Et le voilà ! Notre leader, le cerveau autoproclamé, le mec qui brille sur scène. Son principe, c'est le sens de la
flèche : les modules de haut niveau ne dépendent pas des modules de bas niveau, les deux dépendent d'abstractions.
Autrement dit, ta logique métier ne dépend pas de ta base de données, c'est l'accès à ta base qui se plie à une
abstraction définie par le métier. La politique commande, le mécanisme obéit.

Et ça, pour le coup, c'est du vrai leadership.

Sauf que c'est là qu'on tient le plus beau culte du cargo de tout `SOLID`. `IFoo` et `FooImpl`, une interface par
classe "au cas où", un seul implémenteur derrière chacune, et toute l'industrie du conteneur d'injection qui
tourne par-dessus. Mais une interface à une seule implémentation, ça inverse *rien*. Y a pas de flèche à retourner s'il
y aura jamais qu'un seul détail au bout. Là t'as ajouté une couche d'indirection et tu l'as appelée architecture.

<figure style="text-align: center;">
  <img src="/assets/images/posts/solid-autopsie-d-un-boys-band/trade-offer-dip.webp"
  alt="Mème 'trade offer' : je reçois une interface, tu reçois une unique implémentation pour toujours" style="max-width: 100%;" loading="lazy" />
<figcaption>L'inversion, sans l'inversion.</figcaption>
</figure>

C'est tout l'entourage du leader : du staff payé à tenir des micros éteints. L'idée de DIP est profonde, cette
pratique-là en est la caricature.

Le dosage tient en deux mots : volatilité et pluralité. Tu inverses la dépendance là où le détail de bas niveau
est volatil ou interchangeable : une base de données, une API externe, l'horloge système, le système de fichiers.
Là, l'abstraction se paie large, en testabilité et en substitution. Tu inverses pas là où le détail est stable et
unique : à cet endroit, l'interface c'est juste du protocole vide de sens.

La tournée dépend de l'abstraction Salle, pas du Zénith en dur :

```php
interface Salle
{
    public function reserver(\DateTimeImmutable $date): void;
}

final class Zenith  implements Salle { public function reserver(\DateTimeImmutable $d): void { /* ... */ } }
final class Olympia implements Salle { public function reserver(\DateTimeImmutable $d): void { /* ... */ } }

// La Tournée (haut niveau) dépend de l'abstraction Salle, pas d'un Zénith en dur.
final class Tournee
{
    public function __construct(private readonly Salle $salle) {}
}

$tournee = new Tournee(new Olympia()); // le métier choisit, le détail obéit
```

Mais si tu n'as qu'une seule salle, l'interface est juste du décor 🙃

## Ce qu'il y a vraiment dessous

Bon maintenant reprends la photo, et classe nos stars autrement. Le sage et le discret sont somme toute un peu pareils :
que chacun reste à sa place, que rien ne se chevauche. C'est de la *cohésion*. L'ambitieux, le sérieux et le leader
ont une autre approche : qui suit qui, dans quel sens, à quelles conditions on remplace une voix par une autre.
C'est du *couplage*.

C'est là que la musique s'arrête. Oublie la choré et les costumes à paillettes (la tenue POO), et il ne reste que...
deux auteurs : faible couplage, forte cohésion. Le quintette était en fait un duo qui écrit tout depuis les années 70,
[Larry Constantine](https://en.wikipedia.org/wiki/Larry_Constantine) et [Ed Yourdon](https://en.wikipedia.org/wiki/Edward_Yourdon),
bien avant que la pop d'entreprise existe. Cinq garçons qui se révèlent être deux plumes plus vieilles, repeintes aux
couleurs du moment, dotées d'un manager et d'un nom qui se retient. L'unité du groupe est sur l'affiche, pas dans la 
musique.

On t'a vendu cinq artistes, c'étaient deux paroliers de 1974 habillés à la mode des années 2000.

<figure style="text-align: center;">
  <img src="/assets/images/posts/solid-autopsie-d-un-boys-band/always-has-been-1974.webp"
  alt="Mème des deux astronautes : « Attends, SOLID c'est juste du couplage et de la cohésion ? » — « Ça l'a toujours été »" style="max-width: 100%;" loading="lazy" />
<figcaption>Deux paroliers. Cinq costumes.</figcaption>
</figure>

Après on va pas se mentir, c'est toujours *largement* du playback, pas *entièrement*. En fait, c'est que tu as deux 
membres qui dépassent vraiment le karaoké. Le leader apporte une direction réelle, le sens de la flèche (ce que le duo des
années 70 ne mettait pas en scène ainsi), et le sérieux a *vraiment* fait de la musique : une théorie du contrat que
Constantine n'avait pas, et rien que pour ça il mérite son cachet.

Le reste, oui, c'est du couplage et de la cohésion sous un nom neuf. Mais t'as quand même de la bonne musique, le nouveau
groupe remet en lumière les deux stars oubliées, en leur rendant hommage plutôt que de les singer.

## Alors, tout ça c'est du vent ?

Reprends les curseurs de cet article. Quatre d'entre eux se règlent sur la même variable : le changement observé,
jamais le changement anticipé. Le nombre d'acteurs réels, la variation déjà rencontrée trois fois, la volatilité avérée
d'un détail, les consommateurs effectifs d'une interface. Jamais l'imaginaire du « au cas où ». On est dans le concret.

Quatre, oui. Parce que le cinquième joue encore à part : le sérieux. Son curseur à lui ne se règle pas sur le
changement, mais sur la sévérité du contrat qu'il écrit. L'intrus du premier couplet est l'intrus du dernier, et c'est
logique : c'est le seul vrai musicien du groupe.

C'est tout le métier, et c'est ce que `SOLID` ne peut pas te donner. Il te dit quels boutons existent sur la console.
Il te dit ce qu'ils font et comment ils fonctionnent, mais il ne te dit pas où les positionner, parce que ça dépend du
système que tu as devant toi, et ça, ça s'appelle le jugement.

Le dogme pousse chaque membre à fond, tout le temps : toujours abstraire, toujours ségréger, toujours inverser.
Cinq voix qui donnent tout sur chaque morceau, mais si tu laisses faire, c'est du bruit, pas de la musique.

<figure style="text-align: center;">
  <img src="/assets/images/posts/solid-autopsie-d-un-boys-band/ampli-onze.webp"
  alt="Mème Spinal Tap : l'ampli qui monte jusqu'à onze, métaphore du dogme qui pousse chaque principe à fond" style="max-width: 100%;" loading="lazy" />
<figcaption>Onze. Pourquoi pas dix ? Parce que onze, c'est un de plus.</figcaption>
</figure>

Le craft (toi) écoute la salle avant de monter le moindre fader.

---

C'est quoi un bon groupe ? Pourquoi on va au concert ? Un bon groupe devient un boys band le jour précis où il oublie 
la chanson qu'il était venu chanter. `SOLID` était venu chanter "comment garder le changement bon marché ?".

Le jour où tu récites les cinq lettres sans plus entendre l'air, elles ont cessé de chanter pour toi.
