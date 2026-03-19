# My job explained to my mom

*Or why "I do stuff with computers" doesn't cut it anymore*

<figure style="text-align: center;">
  <img src="/assets/images/posts/mon-metier-explique-a-ma-mere/hero.webp"
  alt="A developer trying to explain their job" style="max-width: 100%;" loading="eager" />
</figure>

It always starts the same way. A casual conversation, someone asks what I do for a living,
I say "developer," and I watch the same sequence play out in their eyes: polite interest,
genuine effort to follow along, then that subtle glaze that sets in when I've said one word
too many.

And every time, I tell myself it shouldn't be this hard to explain. That I should have a
simple, crystal-clear answer ready to go. But no. Fifteen years in the job and I still
fumble through it.

So here it is. This article is my attempt at a clear answer. For my mom, my grandma,
my kids, and everyone who watches me type on a keyboard all day wondering if that really
counts as *work*.

Spoiler: it does. And I'm going to explain why.

## I'm a builder, but without the hard hat

Picture a city. Not a city of concrete and glass, a *digital* city. Every website you visit,
every app on your phone, is a building in that city. Netflix is a massive multiplex with thousands of screens. Your doctor's booking app is the
reception desk that never closes. The tax website... that's the government building with
47 doors, 46 of which are locked, and the last one opens to a form. Yes, like the house
that drives you crazy.

<figure style="text-align: center;">
  <img src="/assets/images/posts/mon-metier-explique-a-ma-mere/la-maison-qui-rend-fou.webp"
  alt="The house that drives you crazy (The Twelve Tasks of Asterix)" style="max-width: 100%;" loading="lazy" />
</figure>

My job is to **build those buildings**. Not with bricks and mortar, but with instructions
we give to a computer. Those instructions are called **code**.

And just like a bricklayer has tools (trowel, level, plumb line), I have mine. Except mine
are invisible.

## Code is a recipe

The best analogy for algorithms is cooking. When I make my gratin lyonnais
(I love cooking), I follow specific steps:

1. Peel the potatoes and onions
2. Slice them thin
3. Prepare the sauce with mustard, cream, and stock
4. Alternate layers of potatoes, onions, and cheese
5. Bake for 1 hour at 210°C

Well, code is exactly that. **A sequence of instructions, in a specific order**, to achieve
a result. Except cooking feeds people, and code makes software work.

The difference is that a computer is the most disciplined and the most stupid kitchen helper
in the world. Let's call him Régis. Régis does **exactly** what you tell him. No more, no less.
If you forget to tell Régis to preheat the oven, he'll put the gratin in a cold oven and wait
patiently for an hour. If you tell Régis to slice the potatoes into -3 millimeter rounds,
he won't give you a puzzled look, he'll try.

And it'll crash (and not potatoes).

<figure style="text-align: center;">
  <img src="/assets/images/posts/mon-metier-explique-a-ma-mere/regis.webp"
  alt="A computer following a recipe to the letter" style="max-width: 100%;" loading="lazy" />
<figcaption>Régis is an idiot</figcaption>
</figure>

## Bugs, or when the gratin burns

A bug is when the recipe doesn't produce the expected result. Maybe I wrote "210 minutes"
instead of "210 degrees." Maybe I forgot a step. Maybe the recipe works perfectly with
regular potatoes but someone tried it with sweet potatoes and everything fell apart.

That's exactly what happens with code. We write instructions, we test them, they work.
And then a user does something we didn't anticipate (some rogue customer puts their phone
number in the "date of birth" field), and everything falls apart.

<figure style="text-align: center;">
  <img src="/assets/images/posts/mon-metier-explique-a-ma-mere/anakin-padme.webp"
  alt="Anakin Padmé meme: I fixed the bug / Without creating a new one right?" style="max-width: 100%;" loading="lazy" />
</figure>

A good chunk of my time is spent hunting these bugs. It's a bit like being a detective:
you have to find *where* things went wrong, *why*, and *how* to fix it without breaking
something else. Because yes, fixing a bug can create a new one. It's like patching a hole
in a wall and having the plaster bulge out on the other side.

## The internet is plumbing

When you open your browser and type in an address, what happens is roughly the same as
when you turn on a faucet.

Behind your faucet, there are miles of pipes, a water tower, a treatment plant, pumps,
valves. You don't see any of it. You turn the faucet, water flows. If it stops flowing,
you call the plumber.

The internet works the same way. Behind a website, there are **servers** (big computers
that never sleep), **cables** (sometimes at the bottom of the ocean, literally),
**protocols** (rules so everyone understands each other, like traffic laws for data),
and a whole bunch of software connecting your request to the response.

<figure style="text-align: center;">
  <img src="/assets/images/posts/mon-metier-explique-a-ma-mere/pipes.webp"
  alt="The internet as plumbing" style="max-width: 100%;" loading="lazy" />
</figure>

When you tap "View my photos" on your phone, your request travels through this whole
network, reaches a server somewhere (maybe Ireland, maybe Virginia), the server finds
your photos, wraps them up neatly, and sends them back. All in under a second.

My job is to build and maintain those digital pipes. Make sure the water flows, that
it's clean, and that it gets to the right place.

## "But it looks simple, why does it take so long?"

I sometimes spend an entire day on a button. A single button. And no, I'm not exaggerating.
The truth is, they're not telling you everything.

<figure style="text-align: center;">
  <img src="/assets/images/posts/mon-metier-explique-a-ma-mere/roumanoff.webp"
  alt="They're not telling us everything" style="max-width: 100%;" loading="lazy" />
<figcaption>Do you really need a caption?</figcaption>
</figure>

Imagine I ask you to add a door to your house. "It's just a door, should be quick, right?"
Except for that door, you need to:

- Check that the wall isn't load-bearing (otherwise the house collapses)
- Get an electrician to move the wires inside the wall
- Make sure the door meets accessibility standards
- Make sure it opens the right way
- Make sure it doesn't block another door when open
- Make sure it closes properly (security)
- Make sure it matches the other doors (visual consistency)
- And test it: does it creak? Does it hold up in the wind?

A "simple button" on a website is exactly that. Behind the apparent simplicity lies a world
of invisible constraints. And every forgotten constraint is a bug waiting to happen.

## Updates, or why nothing is ever "done"

Grandma, you know when your phone asks you to update and you tap "Later" for three months
straight? Well, someone wrote those updates. Sometimes that someone is me (well, not for
your phone specifically, but you get the idea).

Software is never finished. Never. It's like a garden: even when it looks beautiful and
well-maintained, you have to keep trimming, watering, weeding. Otherwise the weeds come
back (bugs), the plants die (features become obsolete), and the neighbors complain (users).

Updates are for:
- **Fixing bugs** we didn't catch
- **Adding features** that users are asking for
- **Strengthening security** (because "bad guys" are always looking for new weaknesses, like burglars testing locks)
- **Adapting** to new phone versions, browsers, and systems

<figure style="text-align: center;">
  <img src="/assets/images/posts/mon-metier-explique-a-ma-mere/update-later.webp"
  alt="Update later" style="max-width: 100%;" loading="lazy" />
</figure>

So no, Grandma, "Later" is not the right answer. Please do your updates.

## "But is what you do actually useful?"

Nobody always asks me that directly. But it floats in the air. I read it sometimes in a
silence, in a nod that's a little too polite. And honestly, I ask myself that question too.

Because if I disappeared tomorrow, nobody dies. It's not like being a nurse holding
someone's hand at 3 AM, or a teacher showing a six-year-old how to read.
[We're not under the same kind of pressure](/en/blog/what-being-a-developer-has-taught-me#relax),
and it's important to keep that in mind. My job doesn't feed anyone in the literal sense.
It doesn't build roads you can point at.

It's something I took a long time to accept, and even longer to put into words: the meaning
of what I do isn't always obvious, even to me.

But it's there.

<figure style="text-align: center;">
  <img src="/assets/images/posts/mon-metier-explique-a-ma-mere/david-goodenough.webp"
  alt="David Goodenough" style="max-width: 100%;" loading="lazy" />
</figure>

What I love about this job, what gets me out of bed in the morning, is this: **finding
simple, smart solutions to problems that can be very complex**. Taking something that
doesn't work, that's clunky, that drives people crazy, and turning it into something
smooth, obvious, invisible. The kind of solution where the user doesn't even realize there
was a problem, because everything just flows.

It's a bit like the sound engineer at a concert: if all you're thinking about is the music,
they've nailed it.

So no, I don't save lives. But I simplify the lives of people who do. The software that
lets a doctor pull up your file in two clicks instead of digging through a cabinet. The app
that lets a teacher track their students without drowning in paperwork. The system that
makes it so when Grandma orders her medication online, it arrives the next day.

Behind every "it just works," there's someone who made it work. And sometimes, that someone
is me.

## And what about AI?

Ah, this one. Lately, everyone keeps asking me if "AI is going to replace me."
I've [written about this at length in a previous article](/en/blog/developer-in-the-age-of-ai-between-vertigo-and-lucidity),
but the short version for Mom is simple.

AI is a tool. A very powerful one, granted. Imagine an assistant that can write bits of
recipes for you, very fast. That's impressive. But this assistant doesn't know if the
gratin tastes good. It doesn't taste. It doesn't know that your cousin is lactose intolerant
or that Grandma's oven trips the breaker above thermostat 7.

<figure style="text-align: center;">
  <img src="/assets/images/posts/mon-metier-explique-a-ma-mere/doge-vs-cheems.webp"
  alt="Doge vs Cheems" style="max-width: 100%;" loading="lazy" />
</figure>

My job is knowing **what to build**, **why**, and **making sure it works**. AI helps me
go faster on some tasks. Let me say it again: an accountant doesn't feel threatened by a
spreadsheet, they use it. Well, it's the same for me.

## The fridge-magnet summary

If someone ever asks you what your son/grandson/father does:

> He writes instructions so that computers do useful things. It's a bit like writing
> cooking recipes, except the cook is a robot that's very obedient but completely devoid
> of common sense. So he also spends a lot of time making sure the robot didn't put salt
> in the coffee.

And if they ask whether it's complicated, you can say:

> It's like building a house. Except the house is invisible, the blueprints change every
> week, and a million people are trying to open all the doors at the same time.

There. Now you know. And next time someone asks me "But what do you *actually* do?",
I can just say: "Here, some good fellow wrote an article about it, read it."

<figure style="text-align: center;">
  <img src="/assets/images/posts/mon-metier-explique-a-ma-mere/drop-mic.webp"
  alt="Mic drop" style="max-width: 100%;" loading="lazy" />
</figure>
