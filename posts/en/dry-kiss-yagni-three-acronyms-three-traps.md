# DRY, KISS, YAGNI: three acronyms, three traps

*Three maxims we recite. Three traps we mix up. How they shed light on one another.*

<figure style="text-align: center;">
  <img src="/assets/images/posts/dry-kiss-yagni-trois-acronymes-trois-pieges/hero.webp"
  alt="A three-headed Cerberus with heads labeled DRY, KISS and YAGNI, each barking in a different direction" style="max-width: 512px;" loading="eager" />
</figure>

You've already run into them: in a book, in class, somewhere in a code review. `DRY`, `KISS`, `YAGNI`, three acronyms
developers pass around like self-evident truths, with that little air of someone who clearly knows their craft.

The thing is, they're handed to you as three independent commandments, each to be ticked off in its own corner. Whereas
in reality, they pull against each other: push one too hard and you betray the others. The day you see how they contradict
each other (and how, sometimes, two of them gang up on the third), you stop reciting them and start actually using them.

That's what I'm going to talk about today: what these three really mean, why they're useful, and above all how they turn
into sneaky traps the moment you treat them as a best-practices checklist.

Let's dig in.

## DRY — Don't Repeat Yourself

### The idea

> Every piece of knowledge must have a single, unambiguous, authoritative representation within a system
> Hunt & Thomas, The Pragmatic Programmer (1999).

In plain terms: *a piece of knowledge should have only one representation in the system*.

A subtle point: it doesn't mean "never write two identical lines", it means "don't duplicate a piece of
*business knowledge*".

Picture yourself writing a cookbook. One of your recipes uses béchamel. You write out the ingredients and how to make
it, right there in the recipe. Then in the next recipe that uses béchamel, you do the same.
And one fine day, someone tells you that stirring by hand makes too many lumps and you'd be better off with an electric
whisk. Great idea!

Except you already have 17 recipes with béchamel and you carefully copied your method into every single one. Rough.

<figure style="text-align: center;">
  <img src="/assets/images/posts/dry-kiss-yagni-trois-acronymes-trois-pieges/bechamel.webp"
  alt="Bart Simpson at the chalkboard, writing 'le_recette_de_bechamel()' over and over" style="max-width: 100%;" loading="lazy" />
<figcaption>You, copying out your béchamel for the 17th time</figcaption>
</figure>

So you write a new page: Béchamel recipe. You put your new method there, and your 17 recipes simply point to that page
for the béchamel part.

### In practice

Béchamel is one thing, but what does it look like in code?

Here's an example with a VAT calculation:

```php
// Before: the same business rule duplicated in two places.
// When the rate changes, you forget one of them.

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
// After: a single source of truth.

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

### The trap

Careful not to get too carried away with your refactoring.

Say that later you notice your béchamel recipe starts just like your pastry cream: flour, milk, lumps... WHOOP, off you
go, you create a "Creamy base" page.

Yeah, but béchamel needs butter and salt, while pastry cream needs eggs, sugar, vanilla. So it ends up being the same,
but different. You're left with an unreadable recipe full of "if you're making béchamel put this, otherwise put that".
The simplification you were after has turned into a hideous monster.

As [Sandi Metz](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction) puts it:
> duplication is far cheaper than the wrong abstraction

### When NOT to apply DRY

When the similarity is accidental, not structural. If you play it forward and imagine evolving the code in each place
it's used, and you can already feel them diverging, leave it alone.

When the abstraction costs you more in complexity than it saves you in maintenance, i.e. when you start building an
over-engineered contraption to handle a thousand special cases, it's a no.

A little tip: don't hesitate to apply the [Rule of Three](https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)),
wait until you've hit at least three cases of similar behavior before thinking about factoring it all out.

## KISS — Keep It Simple, Stupid

First, let's get this out of the way:

<figure style="text-align: center;">
  <img src="/assets/images/posts/dry-kiss-yagni-trois-acronymes-trois-pieges/kiss-band.webp"
  alt="The band KISS" style="max-width: 100%;" loading="lazy" />
<figcaption>Wrong KISS, buddy</figcaption>
</figure>

### The idea

No insult intended: it just means your solution should be simple enough that a "stupid" person (read: someone with no
time, tired, stressed...) can understand it quickly and maintain it.

This principle isn't limited to software, it's also Occam's razor, and it was championed by the likes of Leonardo da
Vinci or even Antoine de Saint-Exupéry:

> It seems that perfection is attained not when there is nothing more to add, but when there is nothing more to take
> away.
>
> Terre des hommes (Wind, Sand and Stars), ch. III, 1939.

In other words, for your problem, the simpler your solution, the less debt you create and the smarter it is.

Take the flush on your toilet: two buttons. A small one, a big one. Why? Because you want to flush more or less water
depending on whether you did a number one or a number two (yeah yeah, laugh it up). You've never read the manual, nobody
trained you, and yet you've been using it correctly since you were three.
The "flush water away" problem is simple, the solution is simple. Everybody's happy.

### In practice

```typescript
// Before: a discount "strategy", interface + classes + factory...
// to choose between -10% and nothing at all.

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

// Somewhere, after wiring the three classes together:
const strategy = DiscountStrategyFactory.create(isMember);
const finalPrice = strategy.apply(price);
```

```typescript
// After: an if. No UML diagram required.

function finalPrice(price: number, isMember: boolean): number {
  return isMember ? price * 0.9 : price;
}
```

### The trap

Now another thing with buttons: an A380 cockpit. Except this time, before you're allowed to put your hands on it, you
need hundreds of flight hours under your belt and a dedicated training program.
Dozens of buttons, switches, lights, screens. And here... well, it's perfectly fine that way.

Because the problem "fly 500 people at 900 km/h at 12,000 meters and bring them back alive" is infinitely more complex
than the one the toilet flush answers. You can't reduce it to two buttons, "up / down". The cockpit's complexity is the
right answer to the problem's complexity.

So KISS isn't "always do the absolute simplest thing". It's "be as simple as your problem allows, no more complicated".
The A380 *can't* be any simpler without risking doing its job badly.

The real tragedy, the one we see every day in code, is building an A380 cockpit to flush a toilet. Three layers of
abstraction, a factory + builder + strategy pattern and an 80-line config... to display an error message. There, the
complexity doesn't come from the problem, it comes from your ego.

Choose your tool based on the problem in front of you, not the image you want to project.

### When NOT to apply KISS

When the business domain is inherently complex (insurance, taxation, medical).

When "simplicity" is hiding a lack of robustness (no error handling, no edge cases).

When you confuse "short" with "simple".

## YAGNI — You Aren't Gonna Need It

### The idea

Short for "You Aren't Gonna Need It". For once, an acronym that says exactly what it means.

Straight out of [Extreme Programming](https://en.wikipedia.org/wiki/Extreme_programming). One of its founding fathers,
Ron Jeffries, was already writing this back in 1998:

> Always implement things when you actually need them, never when you just foresee that you need them.
>
> Article [You’re NOT gonna need it!](https://ronjeffries.com/xprog/articles/practices/pracnotneed/) on Ron Jeffries' blog.

Anticipating is good, but over-anticipating means creating problems for nothing. Code written "just in case" is the worst
kind: you have to maintain it, test it, make sure it fits with everything else... and it never gets used.

You probably see it in everyday life: your dad who always keeps 5 packs of water in reserve "just in case", you moving
into your new apartment and buying a yogurt maker because a coworker raved about it and... well, turns out you can't be
bothered to make yogurt. Every time, the same reflex: we pay today (the space, the money, the upkeep) for a need that
wasn't there and, most of the time, never will be.

Same in code. The feature you'll "surely need someday anyway", the config parameter no call ever provides, the
abstraction ready to host the twelve future cases when only one exists. YAGNI smacks your hand: you don't build for the
need you imagine, you build for the one in front of you.

### In practice

```php
// Before: a "generic" exporter ready for every format in the world,
// when we only ever export to CSV.

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

class XmlExporter implements Exporter { /* ... never called */ }
class JsonExporter implements Exporter { /* ... never called either */ }

class ExporterFactory
{
    public function create(string $format): Exporter
    {
        return match ($format) {
            'csv'  => new CsvExporter(),
            'xml'  => new XmlExporter(),
            'json' => new JsonExporter(),
            default => throw new InvalidArgumentException("Unknown format: $format"),
        };
    }
}

// In practice, we always pass, without exception, 'csv':
$content = (new ExporterFactory())->create('csv')->export($rows);
```

```php
// After: we export to CSV. The day the XML need shows up,
// we'll add what's needed, with that day's real constraints.

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
  alt="A skeleton sitting at a desk, having waited so long there's nothing left but bones" style="max-width: 100%;" loading="lazy" />
<figcaption>My XmlExporter, still waiting for the day we'll need it</figcaption>
</figure>

### The trap

And as you'd guess, this principle has its limits too.

YAGNI rests on an implicit bet: "if I'm wrong not to have planned for it, I'll be able to add it later at no extra cost".
That bet is what makes the principle safe, and most of the time it's a good bet. Either the imagined need never arrives
and you've saved all the work, or it eventually arrives and you build it then, with the real constraints of the moment,
often better and no more expensive than today.

The trap is the day the bet is wrong. When deferring doesn't leave the cost unchanged but makes it explode. There,
"I'll do it when I need it" turns into "I'll pay ten times the price the day I need it", and YAGNI, applied blindly, was
the one that laid the trap.

### When NOT to apply YAGNI

Your bet only holds if the decision is reversible and not too expensive to undo or postpone.
And in some cases, it clearly isn't:
- Choosing your database system: you start with SQL "because YAGNI, no need to scale".
  Two years later, you have to migrate 40 services and terabytes of data to something else.
  The "later" cost you 1000 times your "now".
- Designing the schema of a public API: once external clients consume your endpoint, you can't really change the shape
  of the response anymore, or only at the cost of a breaking change.
  What you didn't anticipate becomes debt set in stone (versioning, deprecation, etc.).
- Designing your security architecture: encryption, authentication model, data partitioning.
  Hacking that together "when we need it" = the breach that costs you dearly. You don't rethink security off the cuff.

For these decisions, the cost of being wrong is asymmetric. Deferring doesn't save you anything, it traps you. So here,
anticipation (which looks like over-engineering elsewhere) is actually legitimate prudence.
YAGNI applies to decisions that are cheap to undo, not the others.

And since no good article exists without quoting a billionaire, note that a decision-making framework was popularized by
Jeff Bezos in his [2015 letter to Amazon shareholders](https://s2.q4cdn.com/299287126/files/doc_financials/annual/2015-Letter-to-Shareholders.PDF).
He sorts decisions into two categories:
1. Two-way doors: reversible decisions. If you get it wrong, you walk back through the door, fix it, little damage done.
   These should be made fast, without heavy process, ideally delegated. This is exactly YAGNI's playground.
2. One-way doors: near-irreversible decisions. Once you're through, there's no going back (or only at great cost).
   These should be made slowly, deliberately, thinking through the consequences. And here, forget YAGNI.

His warning in the letter is that the real danger is treating a two-way door like a one-way door (slowness, paralysis),
and conversely: treating a one-way door like a two-way door (charging in head-first) is just as dangerous.

## The triangle

Three interesting concepts, but above all three connected ones. You can even see them as the three vertices of a triangle:
- *DRY* pushes you toward abstraction.
- *KISS* pulls you toward readability.
- *YAGNI* reins you in on foresight.

And what really matters isn't the vertices, it's the edges, i.e. the tension between two principles.
Except they don't all pull with the same force.

<figure style="text-align: center;">
  <img src="/assets/images/posts/dry-kiss-yagni-trois-acronymes-trois-pieges/triangle.svg"
  alt="Triangle of DRY, KISS, YAGNI: DRY at the top, away from KISS and YAGNI which sit close together. Two long, hot edges, one short, cold edge between KISS and YAGNI."
  style="width: 100%; max-width: 480px; height: auto;" loading="lazy" />
<figcaption>Two scorching edges, one lukewarm. The triangle isn't equilateral.</figcaption>
</figure>

1. **DRY <=> KISS, this one pulls hard.** Push DRY to the max without KISS and you get factored code nobody understands.
   Do the opposite and you get duplication everywhere. These two will duke it out at every refactor.
2. **DRY <=> YAGNI, the other hot edge.** DRY wants to factor things out for the twelve cases to come, YAGNI reminds you
   there probably won't be twelve cases. Abstraction for the future, that's where the match plays out.
3. **KISS <=> YAGNI, the chill one.** This one sleeps almost all the time, because KISS and YAGNI are natural allies:
   both kill complexity. But where they can clash is when *what you don't need* is also *what keeps your system
   consistent*. Take an admin app full of lists with search, sorting and pagination. You add a screen with a handful of
   rows that'll stay small. YAGNI says: for a handful of rows, skip the pagination, the rest is dead code. KISS replies:
   do it like the other 49 pages, otherwise it's the one screen that stands out and trips up a dev discovering the app.
   The minimalism of the part (YAGNI) against the consistency of the whole (KISS). It's rare, but it's real.

So the triangle isn't equilateral: two scorching edges, one lukewarm. Don't expect to arbitrate KISS vs YAGNI every day,
but learn to recognize the day it happens.

Your skill as a developer is finding the center of gravity, and above all not ranking these principles once and for all.

None of these three rules lives alone in its corner; they were always meant to work as a system.

## What you should take away

Deep down, none of the three is a commandment. DRY, KISS and YAGNI aren't checkboxes to tick in a code review, they're
three voices pulling you in different directions.

One pushes you to factor out, another to simplify, the last to build nothing useless.

Reciting them like mantras is exactly the trap announced at the start: you think you're doing the right thing and you end
up with unreadable factored code, or an over-engineered mess full of "just in case".

The real skill isn't knowing the three acronyms (you almost certainly knew them before reading this). It's knowing, on
the code in front of you, right here, right now, which of the three principles is shouting the loudest.

And that, no article will truly teach you. You learn it by getting it wrong, by re-reading six months later something you
thought was clever, and finally understanding why. This one included.
