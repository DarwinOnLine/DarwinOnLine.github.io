# SOLID: autopsy of a boy band

*`SOLID`, the boy band of OOP: five letters we recite, five principles we mix up. What has aged, and what's really
under the glitter.*

<figure style="text-align: center;">
  <img src="/assets/images/posts/solid-autopsie-d-un-boys-band/hero.webp"
  alt="Parody album cover of a 2000s boy band called SOLID: five young men posing around a big muscular rock, all in Y2K chrome typography"
  style="max-width: min(512px, 100%);" loading="eager" />
<figcaption>Ever heard of the <a href="https://festivalcailloucostaud.com/" target="_blank" rel="noopener">Caillou Costaud</a> festival? That's French for "sturdy pebble".</figcaption>
</figure>

Ever seen [season 2 of Culte, the French series about 2Be3](https://www.allocine.fr/series/ficheserie_gen_cserie=37629.html)?
No? Let me give you the short version. Picture three guys... no, five, each with his own temperament. There's the wise
one who wants a single boss, the ambitious one who already sees himself headlining the Olympia, the serious one who
studied musicology in college, the quiet one whose name nobody remembers, and of course: the leader. Despite their
differences, they decide to sing together and form a band.

They call it `SOLID`. A bit odd, but sure, why not. It's simple, it takes everyone's initials and it's easy to
remember ("the solid guys", get it 😏).

Now, you can already smell the cheesy storytelling. A boy band doesn't come together overnight, and my five guys don't
all have the same talent. For starters, only one of them ever actually studied music; the others just like to sing.

And then... Maybe they're not really five.

---

The 90s and 2000s were the golden age for this kind of band. The calendar is on our side.

One last thing about the band's origin story, and not the least: there's one man behind it all,
[Robert C. Martin](http://cleancoder.com/products) (Uncle Bob to his friends). Around the year 2000, he's the one
writing the songs, laying down the five principles one by one. The band's name, though, was found by someone else:
[Michael Feathers](https://michaelfeathers.silvrback.com/archive), who a few years later had the idea of reordering
the initials so they'd spell `SOLID`. One writes the music, the other puts the name on the poster. All of it for a
niche audience: enterprise pop, Java and C#, the exact era when a boy band and an abstract class would drop the same
year. Remember the date. We'll come back to it.

And just like we judge 2Be3's music by today's standards, we're going to take stock of what's left of `SOLID`. We're
not here to bury them, they're legends. We're here to read the lyrics, look at the arrangements, see what has aged,
and above all what's really underneath.

## S — Single Responsibility

The wise one is our guy who wants a single boss. His mantra:

> A class should have only one reason to change.

Now, when you ask him what he means by "reason to change", he stays a bit vague, it's fuzzy. The answer comes from
Uncle Bob himself: a module answers to one and only one *actor*, a single stakeholder. In plain terms, the label and
the marketing department shouldn't both be able to rewrite the same piece of code, each from their own corner.

Careful though, we're not saying "the wise one does only one thing". It might sound the same, but it isn't. Crumble
everything so each class "does one thing" and you end up with ten anemic mini-classes, with the logic that changes
together scattered across ten files. The day the single actor asks for an evolution, you're chasing the pieces.
You wanted to make change lighter, you made it heavier. The exact opposite.

<figure style="text-align: center;">
  <img src="/assets/images/posts/solid-autopsie-d-un-boys-band/gru-emiettage.webp"
  alt="Gru's plan meme in four panels: split every responsibility into its own class, then realize the logic that changes together ends up scattered" style="max-width: 100%;" loading="lazy" />
<figcaption>The plan was perfect.</figcaption>
</figure>

You don't count it in "number of responsibilities", that means nothing. You read it in *who* asks for the changes:
two pieces the same boss keeps changing stay together; two different bosses, you split. You group by origin
of change, not by pretty symmetry.

```php
// ❌ Three bosses on his back: accounting, marketing AND the fan club.
final class BandMember
{
    public function sing(): string { /* ... */ }
    public function computeFee(): float { /* accounting rule */ }
    public function drawPoster(): string { /* marketing rule */ }
    public function replyToFans(): void { /* fan club rule */ }
}

// ✅ One member, one boss. One class per actor.
final class BandMember
{
    public function sing(): string { return '🎤'; }
}

final class Payroll  // boss: accounting
{
    public function fee(BandMember $member): float { /* ... */ }
}

final class PromoTeam   // boss: marketing
{
    public function poster(BandMember $member): string { /* ... */ }
}
```

## O — Open/Closed

The ambitious one already sees himself at the Olympia, you know that, so he wants to plan for everything. His
principle: open for extension, closed for modification. Translation: you add behavior (a new implementation, through
polymorphism) without reopening the code that's already running. The existing track stays sealed, you graft next to it.

Except the ambitious one overdoes it. He stuffs the code with extension points *in anticipation*: interfaces,
strategies, hooks everywhere, for variations that don't exist yet. He installs the outlet before owning the amp. And
there, the dogma contradicts itself: OCP pushed all the way is exactly the speculative generality that makes you
shout... [YAGNI](/en/blog/dry-kiss-yagni-three-acronyms-three-traps#yagni-you-aren-t-gonna-need-it)!
Two principles the same people recite in the same breath... beating each other up.

<figure style="text-align: center;">
  <img src="/assets/images/posts/solid-autopsie-d-un-boys-band/distracted-ocp.webp"
  alt="Distracted boyfriend meme: a dev looks away from today's actual need to ogle future extension points" style="max-width: 100%;" loading="lazy" />
<figcaption>YAGNI is not amused.</figcaption>
</figure>

OCP is the most dated of the five, let's be honest. Back then, opening and modifying code was expensive and scary. But
that was a world with no tests, no CI, no `git`. In yours, touching a function covered by tests is often cheaper than
having knitted an abstraction in advance. So: you open where the variation is proven and recurring (remember DRY and
the [Rule of Three](https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)): you've changed it three
times, *now* you abstract), and you simply edit where it's hypothetical.
You tune to observed change, never to dreamed-up change.

The concert setlist, open to new acts without ever touching it:

```php
interface Act
{
    public function perform(): string;
}

final class Song implements Act
{
    public function perform(): string { return 'the summer hit'; }
}

final class Cover implements Act
{
    public function perform(): string { return 'the Wonderwall cover'; }
}

final class Concert
{
    /** @param Act[] $acts */
    public function play(array $acts): void
    {
        foreach ($acts as $act) {
            echo $act->perform();
        }
    }
}

// Tomorrow, a medley? We add a class, we never reopen Concert.
// (But we wait until we've actually seen the variation. Otherwise, that's the ambitious one talking.)
final class Medley implements Act
{
    public function perform(): string { return 'the best-of medley'; }
}
```

## L — Liskov Substitution

And here's the intruder. The serious one, the only one who studied musicology in college. While the others rehearse
the choreography, he can read sheet music, which makes him the only one whose contract you can write down in black and
white. His statement comes from genuine type-theory work
([Barbara Liskov and Jeannette Wing](https://www.cs.cmu.edu/~wing/publications/LiskovWing94.pdf)):
a subtype must be able to replace its base type without breaking the program. Concretely, the child doesn't strengthen
preconditions, doesn't weaken postconditions, and preserves the parent's invariants. If `B` inherits from `A`, any
code that worked with an `A` must keep working when handed a `B`, without even knowing it.

The false friend is the eternal square inheriting from rectangle, recited to "prove" you shouldn't inherit. The lesson
was never "inheritance is bad", it's "honor the contract". Most people invoke "Liskov" as a vibe, a raised eyebrow in
code review, without being able to state it. Yet he's the only one of the five you can state *exactly*.

Here you can't dial the principle, it's binary: either you honor the contract or you violate it. Plain and simple.
What you dial is the *strictness* of the contract you write. Too loose, it guarantees nothing; too strict, it becomes
untenable for subtypes. And keep this in mind, it sets up what's coming: this contract is what makes the other two
coupling principles trustworthy. You can only depend on an abstraction if you're sure its implementations will keep
their promise. The serious one is the silent guarantor of the other band members.

The serious one's contract, and the one who breaks it:

```php
abstract class Singer
{
    /** @return string an actual vocal performance, live. That's the contract. */
    abstract public function singLive(): string;
}

final class TheSeriousOne extends Singer
{
    public function singLive(): string { return 'I sing live, right on pitch'; }
}

// ❌ Breaks the contract: you can't slip him in where a Singer is expected.
final class TheLipSyncer extends Singer
{
    public function singLive(): string
    {
        throw new \LogicException('I only do lip sync'); // strengthened precondition
    }
}

function openTheShow(Singer $singer): void
{
    echo $singer->singLive(); // fine for TheSeriousOne, blows up for TheLipSyncer
}
```

<figure style="text-align: center;">
  <img src="/assets/images/posts/solid-autopsie-d-un-boys-band/one-job-playback.webp"
  alt="'You had one job' meme: the lip-syncing member had a single task, sing live, and he throws an exception" style="max-width: 100%;" loading="lazy" />
<figcaption>Substitutability has left the building.</figcaption>
</figure>

## I — Interface Segregation

The quiet one is the guy with two lines on the album, who gets cut from the music video in editing, and who everybody
forgets, because he only signs his own part. His principle: no client should be forced to depend on methods it doesn't
use. You split the big catch-all interfaces into role interfaces, tailored to what each caller actually consumes. Deep
down, it's the wise one (the S), seen from the client's side.

The predictable misstep: getting overzealous and shattering every interface into single-method micro-interfaces.
You've just swapped one oversized interface for a soup of tiny ones. You turned one big mess into lots of small
messes; you still can't find your way around.

Segregate by the real needs of the consumers, not by taste for symmetry. And be lucid about the era: this principle
mattered with nominal typing, the Java and C# of 2002. With structural typing (TypeScript, Go), it pretty much
dissolves on its own, since the client already depends only on what it touches. That's why he's the quiet one, the
most minor of the five, and it's no accident you tend to forget him.

Roles split up, so the quiet one only signs his own part:

```php
// ❌ Catch-all interface: the quiet one has to "sign" for stuff he doesn't do.
interface BandMember
{
    public function sing(): string;
    public function dance(): string;
    public function compose(): string;
}

// ✅ Role interfaces. Everyone signs only for what they actually do.
interface Singer   { public function sing(): string; }
interface Dancer   { public function dance(): string; }
interface Composer { public function compose(): string; }

final class TheQuietOne implements Singer            // just the backing vocals, and that's fine
{
    public function sing(): string { return 'the backing vocals'; }
}

final class TheLeader implements Singer, Dancer, Composer { /* this guy does everything */ }
```

## D — Dependency Inversion

And here he is! Our leader, the self-proclaimed brains, the guy who shines on stage. His principle is the direction of
the arrow: high-level modules don't depend on low-level modules, both depend on abstractions. In other words, your
business logic doesn't depend on your database; it's the database access that bends to an abstraction defined by the
business. Policy commands, mechanism obeys.

And that, for once, is actual leadership.

Except this is where we find the most beautiful cargo cult in all of `SOLID`. `IFoo` and `FooImpl`, one interface per
class "just in case", a single implementer behind each one, and the whole dependency-injection-container industry
running on top. But an interface with a single implementation inverts *nothing*. There's no arrow to flip if there
will only ever be one detail at the end of it. What you've added is a layer of indirection, and you've called it
architecture.

<figure style="text-align: center;">
  <img src="/assets/images/posts/solid-autopsie-d-un-boys-band/trade-offer-dip.webp"
  alt="'Trade offer' meme: I receive an interface, you receive a single implementation, forever" style="max-width: 100%;" loading="lazy" />
<figcaption>Inversion, hold the inversion.</figcaption>
</figure>

That's the leader's whole entourage: staff paid to hold switched-off microphones. The idea behind DIP is deep; that
practice is its caricature.

The dial comes down to two words: volatility and plurality. You invert the dependency where the low-level detail is
volatile or swappable: a database, an external API, the system clock, the filesystem. There, the abstraction pays off
big, in testability and substitution. You don't invert where the detail is stable and unique: there, the interface is
just empty protocol.

The tour depends on the Venue abstraction, not on a hard-coded Zenith:

```php
interface Venue
{
    public function book(\DateTimeImmutable $date): void;
}

final class Zenith  implements Venue { public function book(\DateTimeImmutable $d): void { /* ... */ } }
final class Olympia implements Venue { public function book(\DateTimeImmutable $d): void { /* ... */ } }

// The Tour (high level) depends on the Venue abstraction, not on a hard-coded Zenith.
final class Tour
{
    public function __construct(private readonly Venue $venue) {}
}

$tour = new Tour(new Olympia()); // the business picks, the detail obeys
```

But if you only ever have one venue, the interface is just set dressing 🙃

## What's really underneath

Now take the band photo again, and sort our stars differently. The wise one and the quiet one are, all things
considered, pretty similar: everyone stays in their lane, nothing overlaps. That's *cohesion*. The ambitious one, the
serious one and the leader take another angle: who follows whom, in which direction, under what conditions you can
swap one voice for another. That's *coupling*.

This is where the music stops. Forget the choreography and the sequined outfits (the OOP costume), and all that's
left is... two songwriters: low coupling, high cohesion. The quintet was actually a duo that had been writing
everything since the 70s, [Larry Constantine](https://en.wikipedia.org/wiki/Larry_Constantine) and
[Ed Yourdon](https://en.wikipedia.org/wiki/Edward_Yourdon), long before enterprise pop existed. Five boys who turn out
to be two much older writers, repainted in the colors of the moment, given a manager and a name that sticks. The band's unity
is on the poster, not in the music.

They sold you five artists; it was two songwriters from 1974 dressed up in 2000s fashion.

<figure style="text-align: center;">
  <img src="/assets/images/posts/solid-autopsie-d-un-boys-band/always-has-been-1974.webp"
  alt="Two astronauts meme: 'Wait, SOLID is just coupling and cohesion?' — 'Always has been'" style="max-width: 100%;" loading="lazy" />
<figcaption>Two songwriters. Five costumes.</figcaption>
</figure>

That said, let's not lie to ourselves: it's still *largely* lip sync, just not *entirely*. Truth is, two members
genuinely rise above karaoke. The leader brings real direction, the direction of the arrow (something the 70s duo
never staged quite that way), and the serious one *actually* made music: a theory of contracts that Constantine
didn't have, and for that alone he's earned his fee.

The rest, yes, is coupling and cohesion under a new name. But it's still good music: the new band puts the two
forgotten stars back in the spotlight, paying tribute to them rather than just miming them.

## So, is it all hot air?

Go back over the dials in this article. Four of them are tuned to the same variable: *observed* change, never
*anticipated* change. The number of real actors, the variation you've already hit three times, the proven volatility
of a detail, the actual consumers of an interface. Never the imaginary "just in case". All of it concrete.

Four, yes. Because the fifth still plays apart: the serious one. His dial isn't set on change, but on the strictness
of the contract he writes. The intruder of the first verse is the intruder of the last, and it makes sense: he's the
only real musician in the band.

That's the whole craft, and it's what `SOLID` can't give you. It tells you which knobs exist on the console. It tells
you what they do and how they work, but it doesn't tell you where to set them, because that depends on the system in
front of you, and that's called judgment.

The dogma pushes every member to the max, all the time: always abstract, always segregate, always invert. Five voices
giving everything on every track, but if you let that happen, it's noise, not music.

<figure style="text-align: center;">
  <img src="/assets/images/posts/solid-autopsie-d-un-boys-band/ampli-onze.webp"
  alt="Spinal Tap meme: the amp that goes up to eleven, the dogma cranking every principle to the max" style="max-width: 100%;" loading="lazy" />
<figcaption>Eleven. Why not ten? Because this one goes to eleven.</figcaption>
</figure>

The craft (that's you) listens to the room before touching a single fader.

---

What makes a good band? Why do we go to concerts? A good band becomes a boy band the precise day it forgets the song
it came to sing. `SOLID` came to sing "how do we keep change cheap?".

The day you recite the five letters without hearing the tune anymore, they've stopped singing for you.
