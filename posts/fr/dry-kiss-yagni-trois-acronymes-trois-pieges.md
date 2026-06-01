# DRY, KISS, YAGNI : trois acronymes, trois pièges

*Trois maximes qu'on récite. Trois pièges qu'on confond. Comment elles s'éclairent l'une l'autre.*

<figure style="text-align: center;">
  <img src="/assets/images/posts/dry-kiss-yagni-trois-acronymes-trois-pieges/hero.webp"
  alt="Un cerbère à trois têtes nommées DRY, KISS et YAGNI, qui aboient chacune dans une direction différente" style="max-width: 512px;" loading="eager" />
</figure>

Tu les as déjà croisés : dans un bouquin, dans tes cours, au détour d'une revue de code. `DRY`, `KISS`, `YAGNI`, trois
acronymes qu'on se refile entre développeurs comme des évidences, avec le petit air de celui ou celle qui connaît son
métier.

Le souci, c'est qu'on te les présente comme trois commandements indépendants, à cocher chacun dans son coin. Alors qu'en
vrai, ils se tirent dessus : pousse l'un trop fort et tu trahis les autres. Le jour où tu vois comment ils se
contredisent (et où, parfois, deux d'entre eux s'allient contre le troisième), tu arrêtes de les réciter et tu commences
à t'en servir.

C'est ce dont je vais te parler aujourd'hui : ce que ces trois-là veulent vraiment dire, pourquoi ils sont utiles, et 
surtout comment ils deviennent des pièges sournois dès qu'on les prend pour une checklist de bonnes pratiques.

Voyons ça.

## DRY — Don't Repeat Yourself

### L'idée

> Every piece of knowledge must have a single, unambiguous, authoritative representation within a system
> Hunt & Thomas, The Pragmatic Programmer (1999).

En clair : *une connaissance ne devrait avoir qu'une seule représentation dans le système*.

Petite subtilité : ça ne signifie pas "n'écris jamais deux lignes pareilles" mais 
"ne duplique pas une *connaissance métier*"

Imagine que tu écris une recette de cuisine. Dans ta recette il y a de la béchamel. Tu écris tes ingrédients et comment
la préparer dans ta recette. Puis à la prochaine recette qui contient de la béchamel, tu fais pareil.
Et un beau jour, on te dit que remuer à la main ça fait trop de grumeaux et que tu devrais plutôt utiliser un fouet
électrique. Super idée !

Sauf que t'as déjà 17 recettes avec de la béchamel et tu as recopié scrupuleusement ta méthode sur chacune. La loose.

<figure style="text-align: center;">
  <img src="/assets/images/posts/dry-kiss-yagni-trois-acronymes-trois-pieges/bechamel.webp"
  alt="Bart Simpson puni au tableau, écrivant 'le_recette_de_bechamel()' en boucle" style="max-width: 100%;" loading="lazy" />
<figcaption>Toi, recopiant ta béchamel pour la 17e fois</figcaption>
</figure>

Tu écris une nouvelle page : Recette de la béchamel, tu y intègres ta nouvelle façon de faire, et tes 17 recettes 
renverront simplement vers cette page pour la partie béchamel.

### Mise en pratique

La béchamel c'est une chose, mais en code ça donne quoi ?

Exemple pour un calcul de TVA :

```php
// Avant : la même règle métier dupliquée dans deux endroits.
// Quand le taux change, on l'oublie à un des deux.

class InvoiceController
{
    public function preview(float $netAmount): float
    {
        $vat = $netAmount * 0.20;
        return $netAmount + $vat;
    }
}

class CartService
{
    public function total(array $items): float
    {
        $net = array_sum(array_column($items, 'price'));
        $vat = $net * 0.20;
        return $net + $vat;
    }
}
```

```php
// Après : une seule source de vérité.

class VatCalculator
{
    public function __construct(private float $rate) {}

    public function addVat(float $netAmount): float
    {
        return $netAmount * (1 + $this->rate);
    }
}

class InvoiceController
{
    public function __construct(private VatCalculator $vat) {}

    public function preview(float $netAmount): float
    {
        return $this->vat->addVat($netAmount);
    }
}

class CartService
{
    public function __construct(private VatCalculator $vat) {}

    public function total(array $items): float
    {
        $net = array_sum(array_column($items, 'price'));
        return $this->vat->addVat($net);
    }
}
```

### Le piège

Attention à ne pas être trop enthousiaste dans ta refactorisation.

Imagine que plus tard, tu te rends compte que ta recette de béchamel commence comme celle de la crème pâtissière :
de la farine, du lait, des grumeaux... HOP HOP c'est parti tu crées ta page "Base crémeuse".

Ouais mais bon, la béchamel il te faut du beurre et du sel, ta crème pâtissière des oeufs, du sucre, de la vanille.
Du coup ça devient comme le nouveau Kangoo, [le même mais en différent](https://www.youtube.com/watch?v=JyKwEkoOUM8).
Tu te retrouves avec une recette illisible pleine de "si tu fais la béchamel mets ça, sinon mets ça". La simplification
recherchée est devenue un monstre infâme.

Comme le dit [Sandi Metz](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction) :
> duplication is far cheaper than the wrong abstraction

### Quand NE PAS appliquer DRY

Quand la similarité est accidentelle, pas structurelle, si tu pousses le raisonnement plus loin pour faire évoluer le
code dans les cas où il est utilisé et que tu perçois vite des divergences, ne touche rien.

Quand l'abstraction te coûte plus en complexité qu'elle ne te fait gagner en maintenance, autrement dit si tu commences
à monter une usine à gaz pour gérer mille particularités, c'est non.

Petit conseil, n'hésite pas à appliquer la [Rule of Three](https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)),
attends de rencontrer au moins trois cas de comportement similaire pour penser à refactorer tout ça.

## KISS — Keep It Simple, Stupid

Bon déjà on va évacuer ça :

<figure style="text-align: center;">
  <img src="/assets/images/posts/dry-kiss-yagni-trois-acronymes-trois-pieges/kiss-band.webp"
  alt="Le groupe KISS" style="max-width: 100%;" loading="lazy" />
<figcaption>T'es hors sujet Michel</figcaption>
</figure>

### L'idée

Pas d'insulte ici, on te dit juste que ta solution doit être suffisamment simple pour qu'une personne "stupide" 
(comprends : qui n'a pas le temps, fatiguée, stressée...) puisse la comprendre rapidement et la maintenir.

Ce principe ne se limite pas à l'informatique, c'est aussi le principe du rasoir d'Ockham, c'était plébiscité 
par Léonard de Vinci ou même Antoine de Saint-Exupéry :

> Il semble que la perfection soit atteinte non quand il n'y a plus rien à ajouter, mais quand il n'y a plus rien à 
> retrancher.
> 
> Terre des hommes, chap. III, 1939.

Autrement dit, pour ton problème, plus ta solution est simple, moins tu crées de dette et plus elle sera intelligente.

Prends la chasse d'eau de tes toilettes, c'est deux boutons. Un petit, un grand. Pourquoi ? Parce que tu veux évacuer
l'eau de ta cuvette selon si t'as fait la petite ou la grosse commission (ouais c'est ça rigole). Tu n'as jamais lu le 
manuel, personne ne t'a formé, et pourtant tu l'utilises correctement depuis que tu as trois ans.
Le problème "évacuer de l'eau" est simple, la solution est simple. Tout le monde est content.

### Mise en pratique

```typescript
// Avant : une "stratégie" de remise, interface + classes + usine...
// pour choisir entre -10 % et rien du tout.

interface DiscountStrategy {
  apply(price: number): number;
}

class MemberDiscount implements DiscountStrategy {
  apply(price: number): number {
    return price * 0.9;
  }
}

class GuestDiscount implements DiscountStrategy {
  apply(price: number): number {
    return price;
  }
}

class DiscountStrategyFactory {
  static create(isMember: boolean): DiscountStrategy {
    return isMember ? new MemberDiscount() : new GuestDiscount();
  }
}

// Quelque part, après avoir relié les trois classes :
const strategy = DiscountStrategyFactory.create(isMember);
const finalPrice = strategy.apply(price);
```

```typescript
// Après : un if. Pas besoin d'un diagramme UML pour comprendre.

function finalPrice(price: number, isMember: boolean): number {
  return isMember ? price * 0.9 : price;
}
```

### Le piège

Maintenant un autre truc avec des boutons : le cockpit d'un A380. Mais là avant d'avoir le droit d'y poser les mains,
tu dois afficher des centaines d'heures de vol au compteur et passer une formation spécifique.
Des dizaines de boutons, d'interrupteurs, de voyants, d'écrans. Et là... ben c'est très bien comme ça.

Parce que le problème "faire voler 500 personnes à 900 km/h à 12000 mètres et les reposer en vie" est, lui,
infiniment plus complexe que celui auquel répond la chasse d'eau. Tu ne peux pas le réduire à deux boutons 
"monter / descendre". La complexité du cockpit est la juste réponse à la complexité du problème.

KISS, ce n'est donc pas "fais toujours le plus simple possible dans l'absolu". C'est "fais aussi simple que ton problème
le permet, pas plus compliqué". L'A380 ne *peut pas* être plus simple sans risque de mal faire son travail.

Le vrai drame, celui qu'on voit tous les jours dans le code, c'est de construire un cockpit d'A380 pour tirer une chasse
d'eau. Trois couches d'abstraction, un pattern factory + builder + strategy et une config de 80 lignes... pour afficher
un message d'erreur. Là, la complexité ne vient pas du problème, elle vient de ton ego.

Choisis ton outil selon le problème que tu as devant toi, pas selon l'image que tu veux renvoyer.

### Quand NE PAS appliquer KISS

Quand le domaine métier est intrinsèquement complexe (assurance, fiscalité, médical).

Quand la "simplicité" cache un manque de robustesse (pas de gestion d'erreur, pas de cas limites).

Quand tu confonds "court" et "simple".

## YAGNI — You Aren't Gonna Need It

### L'idée

Acronyme de "You Aren't Gonna Need It", qu'on pourrait traduire par "Tu N'En Auras Pas Besoin", mais ça donnerait TNEAPB
et c'est quand même plus chiant à prononcer.

Venu tout droit de l'[Extreme Programming](https://fr.wikipedia.org/wiki/Extreme_programming). Un de ses pères 
fondateurs, Ron Jeffries, écrivait même dès 1998 :

> Always implement things when you actually need them, never when you just foresee that you need them.
> 
> Article [You’re NOT gonna need it!](https://ronjeffries.com/xprog/articles/practices/pracnotneed/) du blog de Ron Jeffries.

Anticiper, c'est bien, mais trop anticiper, c'est se créer des problèmes pour rien. Un code écrit "au cas où" est le
pire des codes : tu dois le maintenir, le tester, veiller à ce qu'il s'intègre à l'ensemble... et il ne sert jamais.

Dans ta vie de tous les jours tu le vois peut-être : ton daron qui a toujours 5 packs d'eau d'avance "au cas où",
toi qui t'installes dans ton nouvel appart et achètes une yaourtière parce qu'un collègue t'en a dit le plus grand bien
et... Ben t'as la flemme de faire tes yaourts en fait. À chaque fois, le même réflexe : on paie aujourd'hui
(la place, l'argent, l'entretien) pour un besoin qui n'était pas là et le plus souvent, ne viendra jamais.

En code, c'est pareil. La fonctionnalité que "de toute façon on aura sûrement besoin un jour", le paramètre de config
qu'aucun appel ne fournit, l'abstraction prête à accueillir les douze cas futurs alors qu'il n'en existe qu'un seul.
YAGNI te tape sur les doigts : tu ne construis pas pour le besoin que tu imagines, tu construis pour celui que tu as
devant toi.

### Mise en pratique

```php
// Avant : un exporteur "générique" prêt pour tous les formats du monde,
// alors qu'on n'exporte jamais qu'en CSV.

interface Exporter
{
    public function export(array $rows): string;
}

class CsvExporter implements Exporter
{
    public function export(array $rows): string
    {
        $out = fopen('php://temp', 'r+');
        foreach ($rows as $row) {
            fputcsv($out, $row);
        }
        rewind($out);
        return stream_get_contents($out);
    }
}

class XmlExporter implements Exporter { /* ... jamais appelé */ }
class JsonExporter implements Exporter { /* ... jamais appelé non plus */ }

class ExporterFactory
{
    public function create(string $format): Exporter
    {
        return match ($format) {
            'csv'  => new CsvExporter(),
            'xml'  => new XmlExporter(),
            'json' => new JsonExporter(),
            default => throw new InvalidArgumentException("Format inconnu : $format"),
        };
    }
}

// À l'usage, on passe toujours, sans exception, 'csv' :
$content = (new ExporterFactory())->create('csv')->export($rows);
```

```php
// Après : on exporte en CSV. Le jour où le besoin XML arrive,
// on ajoutera ce qu'il faut, avec les vraies contraintes de ce jour-là.

function exportCsv(array $rows): string
{
    $out = fopen('php://temp', 'r+');
    foreach ($rows as $row) {
        fputcsv($out, $row);
    }
    rewind($out);
    return stream_get_contents($out);
}

$content = exportCsv($rows);
```

<figure style="text-align: center;">
  <img src="/assets/images/posts/dry-kiss-yagni-trois-acronymes-trois-pieges/skeletton.webp"
  alt="Un squelette attablé à un bureau, ayant attendu si longtemps qu'il n'en reste que les os" style="max-width: 100%;" loading="lazy" />
<figcaption>Mon XmlExporter, qui attend le jour où on en aura besoin</figcaption>
</figure>

### Le piège

Et forcément tu t'en doutes, ce principe aussi a ses limites.

YAGNI repose sur un pari implicite : « si j'ai tort de ne pas l'avoir prévu, je pourrai le rajouter plus tard sans
surcoût ». C'est ce pari qui rend le principe sûr, et la plupart du temps c'est un bon pari. Soit le besoin imaginé 
n'arrive jamais et tu as économisé tout le travail, soit il finit par arriver et tu le construis alors avec les vraies
contraintes du moment, souvent mieux et pas plus cher qu'aujourd'hui.

Le piège, c'est le jour où le pari est faux. Quand reporter ne laisse pas le coût inchangé mais le fait exploser. Là,
« je le ferai quand j'en aurai besoin » se transforme en « je paierai dix fois le prix le jour où j'en aurai besoin »,
et YAGNI, appliqué tête baissée, t'a tendu le piège lui-même.

### Quand NE PAS appliquer YAGNI

Ton pari est tenable seulement si la décision est réversible et pas trop chère à défaire ou reporter.
Et dans certains cas, ça ne l'est clairement pas :
- Lors du choix de ton système de base de données : tu démarres en SQL "parce que YAGNI, pas besoin de scaler".
  Deux ans plus tard, il faut migrer 40 services et des téraoctets de données vers autre chose.
  Le "plus tard" t'a coûté 1000 fois ton "maintenant".
- Quand tu designes le schéma d'une API publique : une fois que des clients externes consomment ton endpoint, tu ne 
  peux plus vraiment changer la forme de la réponse, ou alors au prix d'une rupture de compatibilité.
  Ce que tu n'as pas anticipé devient une dette gravée dans le marbre (versioning, dépréciation, etc.).
- Quand tu fais ton architecture de sécurité : chiffrement, modèle d'authentification, cloisonnement des données.
  Bricoler ça "quand on en aura besoin" = la faille qui te coûte cher. On ne repense pas la sécurité au doigt mouillé.

Pour ces décisions, le coût de se tromper est asymétrique. Reporter ne te fait pas économiser, ça te piège. Donc là,
l'anticipation (qui ressemble à de l'over-engineering ailleurs) est en fait de la prudence légitime.
YAGNI s'applique aux décisions bon marché à défaire, pas aux autres.

Et comme un bon article n'existe pas sans citer un milliardaire, notons qu'un cadre de prise de décision a été 
popularisé par Jeff Bezos dans sa [lettre aux actionnaires d'Amazon de 2015](https://s2.q4cdn.com/299287126/files/doc_financials/annual/2015-Letter-to-Shareholders.PDF).
Il classe les décisions en deux catégories :
1. Two-way doors (portes à double sens) : décisions réversibles. Si tu te trompes, tu repasses la porte dans l'autre
   sens, tu corriges, peu de dégâts. Il faut les prendre vite, sans process lourd, idéalement déléguées. C'est
   exactement le terrain de jeu de YAGNI.
2. One-way doors (portes à sens unique) : décisions quasi irréversibles. Une fois passée, on ne revient pas
   (ou à très grands frais). Celles-ci il faut les prendre lentement, avec délibération, en réfléchissant aux 
   conséquences. Et là on oublie YAGNI.

Sa mise en garde dans la lettre reste que le vrai danger, c'est de traiter une two-way door comme une one-way door 
(lenteur, paralysie) et inversement : traiter une one-way door comme une two-way door (foncer tête baissée) est tout
aussi dangereux.

## Le triangle

Trois concepts intéressants, mais surtout trois concepts liés. On peut même les voir comme les trois sommets d'un triangle :
- *DRY* te pousse vers l'abstraction.
- *KISS* te tire vers la lisibilité.
- *YAGNI* te freine sur la prévoyance.

Et ce qui compte vraiment, ce ne sont pas les sommets, ce sont les arêtes, c'est-à-dire la tension entre deux principes.
Sauf qu'elles ne tirent pas toutes avec la même force.

<figure style="text-align: center;">
  <img src="/assets/images/posts/dry-kiss-yagni-trois-acronymes-trois-pieges/triangle.svg"
  alt="Triangle DRY, KISS, YAGNI : DRY au sommet, à distance de KISS et YAGNI proches l'un de l'autre. Deux arêtes longues et chaudes, une arête courte et froide entre KISS et YAGNI."
  style="width: 100%; max-width: 480px; height: auto;" loading="lazy" />
<figcaption>Deux arêtes brûlantes, une tiède. Le triangle n'est pas équilatéral.</figcaption>
</figure>

1. **DRY <=> KISS, ça tire fort.** Si tu pousses DRY à fond sans KISS, tu obtiens du code factorisé que personne ne 
   comprend. Mais si tu fais l'inverse, tu obtiens de la duplication partout. Les deux principes vont se mettre sur la
   tronche à chaque refacto.
2. **DRY <=> YAGNI, l'autre arête chaude.** DRY veut mutualiser pour les douze cas à venir, YAGNI te rappelle qu'il n'y
   en aura probablement pas, douze cas. L'abstraction pour le futur, c'est là que le match va avoir lieu.
3. **KISS <=> YAGNI, là où c'est plus tranquilou.** Là ça dort presque tout le temps, parce que KISS et YAGNI sont des
   alliés naturels : les deux tuent la complexité. Mais là où ça peut se friter, c'est quand 
   *ce dont tu n'as pas besoin* est aussi *ce qui rend ton système régulier*. Prends une appli de gestion pleine de 
   listes avec recherche, tri et pagination. Tu ajoutes un écran de quelques lignes qui restera petit. 
   YAGNI te dit : pour quelques lignes, vazy pas de pagination, le reste c'est du code mort. KISS te répond : fais-le 
   comme les 49 autres pages, sinon c'est le seul qui sortira du lot et qui surprendra un dev découvrant l'appli.
   La minimalité de la pièce (YAGNI) contre la régularité du tout (KISS). C'est rare, mais c'est réel.

Le triangle n'est donc pas équilatéral : deux arêtes brûlantes, une arête tiède. Ne t'attends pas à arbitrer KISS vs
YAGNI tous les jours, mais sache reconnaître le jour où ça arrive.

Ton talent de développeur, c'est de trouver le centre de gravité, et surtout de ne pas hiérarchiser ces principes 
une fois pour toutes.

Aucune de ces trois règles ne vit seule dans son coin, elles ont toujours été pensées en système.

## Ce que tu dois retenir

Au fond, aucun des trois n'est un commandement. DRY, KISS et YAGNI ne sont pas des cases à cocher en revue de code,
ce sont trois voix qui te tirent dans des directions différentes.

L'une te pousse à factoriser, l'autre à simplifier, la dernière à ne rien construire d'inutile.

Les réciter comme des mantras, c'est justement le piège annoncé au début : tu crois bien faire et tu te retrouves avec 
du code factorisé illisible, ou une usine à gaz pleine d'"au cas où".

La vraie compétence, ce n'est pas de connaître les trois acronymes (tu les connaissais sûrement déjà avant de lire ça).
C'est de savoir, sur le code que tu as sous les yeux, là, maintenant, lequel des trois principes crie le plus fort.

Et ça, aucun article ne te l'apprendra vraiment. Tu l'apprends en te trompant, en relisant six mois plus tard un truc 
que tu trouvais malin, et en comprenant enfin pourquoi. Y compris avec celui-ci.
