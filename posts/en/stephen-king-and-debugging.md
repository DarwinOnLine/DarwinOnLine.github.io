# Stephen King and debugging

*Or how "On Writing: A Memoir of the Craft" made me a better bug hunter*

<figure style="text-align: center;">
  <img src="/assets/images/posts/stephen-king-et-le-debugging/king-matrix.jpg"
  alt="King in the Matrix" style="max-width: 100%;" />
</figure>

Stephen King is an important author to me. I discovered him in high school, during a French class on the death penalty. The teacher had us read chapter 1 of [*The Green Mile*](https://en.wikipedia.org/wiki/The_Green_Mile_(novel)), I read the first chapter and devoured the rest of the book. Since then, I've gone through King after King, the classics, the obscure ones, I know what a Ka-Tet is and the number 19 always has a special resonance for me.

In 2000, King published [*On Writing: A Memoir of the Craft*](https://en.wikipedia.org/wiki/On_Writing:_A_Memoir_of_the_Craft),
half autobiography, half writing manual. It's a bit of a departure from what he usually offers, he talks about himself, about what it means to be an author, he delivers a sort of toolbox for anyone who might want to take the plunge someday. Beneath the anecdotes and advice on prose, there's something unexpected: a methodology. A discipline. A way of thinking about problems that's eerily similar to what we developers do when tracking down a bug.

Let's explore that.

## "The road to hell is paved with adverbs"

King hates adverbs. Not out of literary snobbery, but because they betray a lack of confidence.
When you write "he closed the door *violently*", it means your scene failed to convey the violence on its own.
The famous *"Show, don't tell"*. The adverb is a band-aid on wobbly narration.

In debugging, adverbs are called `printf`, or `console.log`, or `System.out.println`, or `Console.WriteLine` — you get the idea. Every language has its variant, but the syndrome is universal. It's called *printf debugging*.
And I'm not talking about the surgical `printf`, placed at a precise spot to confirm a hypothesis. No, I mean the other kind. The `printf("here")`, the `puts("hello")`, the one from hell that you sprinkle everywhere because you don't understand what's happening, as if the terminal would eventually crack and confess.

<figure style="text-align: center;">
  <img src="/assets/images/posts/stephen-king-et-le-debugging/pistolero-and-bugs.png"
  alt="Roland Deschain facing the Dark Tower surrounded by bugs" style="max-width: 100%;" />
<figcaption>The dev, the Tower of perfect code, and lordly debugging.
<br/>Roland Deschain, <em>The Dark Tower</em></figcaption>
</figure>

If you need 19 logs to understand the execution flow, you haven't understood the execution flow.
Step back. Re-read. Use a debugger, set a breakpoint, inspect the stack. The adverb hides the problem. The wild `console.log` does too.

## "Kill your darlings"

This is probably the most quoted writing advice, and the least followed. King (borrowing a phrase attributed to [Faulkner](https://en.wikipedia.org/wiki/William_Faulkner), who himself borrowed it from [Arthur Quiller-Couch](https://en.wikipedia.org/wiki/Arthur_Quiller-Couch)) insists: if a sentence is beautiful but doesn't serve the story, delete it. No matter how long you spent on it. No matter how much you love it.

In software, the [*darlings*](https://ideonexus.com/2011/02/28/kill-your-darlings-is-a-programming-principle-too/)
are those pieces of code you're proud of. That elegant little algorithm. That abstraction that took you a whole day. That factory of factories you lovingly crafted. When a bug hides in their vicinity, your brain does something very human: it looks away. "The problem can't be there, that's my best code."

<p style="text-align: center;">
  <img src="/assets/images/posts/stephen-king-et-le-debugging/kill-your-darlings.jpg"
    alt="Oh yes it can." style="max-width: 300px;" />
</p>

[Confirmation bias](https://en.wikipedia.org/wiki/Confirmation_bias) is the developer's worst enemy in debugging. You look for evidence that your code is innocent, not evidence that it's guilty. Result: you spend three hours suspecting a third-party library, a network issue, the lunar cycle, the government... before sheepishly returning to your beautiful abstraction and discovering it had been mishandling an edge case all along. Remember, [there are no coincidences](/en/blog/what-being-a-developer-has-taught-me#there-are-no-coincidences), and the random variable is usually you.

Because King says it better than anyone: "Monsters are real, and ghosts are real too. They live inside us." The bug is rarely *external*. It's not the framework. It's not the third-party library. It's not the compiler. It's not DNS.

Well, OK. [It's sometimes DNS.](https://isitdns.com/)

But in 99% of cases, the monster is in your code. The ghosts are those implicit assumptions you made when writing it. "This ID will never be null." "This array will always have at least one element." "The user will never enter an emoji in this field." (Spoiler: 💩)

Every bug is a chance to learn something about your own blind spots. Not about the code — about you. About how you reason, your mental shortcuts, your never-questioned assumptions. That's why the best developers aren't those who write the most elegant code, but those who know how to distrust themselves.

Kill your darlings. Or at the very least, suspect them first.

## The closed door, the open door

King writes in two phases. First the closed door: first draft, alone, showing no one. It's raw, imperfect, but it's *out*. Then the open door: re-reading, outside feedback, rewriting.

Debugging follows exactly the same rhythm.

**Closed door phase**: you, the bug, and your understanding of the code. This is where you isolate the problem. You reproduce, you narrow the scope, you form hypotheses. This work is solitary by nature, and that's fine. Nobody can debug a problem for you that you haven't understood yourself yet.

**Open door phase**: you've identified the suspect area but you're stuck. Time for [rubber duck debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging)
(get yourself a [rubber ducky](/en/blog/what-being-a-developer-has-taught-me#get-a-rubber-ducky)),
a shared debug PR with a colleague, a message on the team channel. Explaining the problem to someone else often means solving it. King knows this: rewriting is not an admission of weakness, it's the process.

<figure style="text-align: center;">
  <img src="/assets/images/posts/stephen-king-et-le-debugging/dark-tower-door.jpg"
  alt="Jake Chambers in front of the door" style="max-width: 300px;" />
<figcaption>Sometimes, the answer is on the other side of the door.
<br/>Jake Chambers, <em>The Dark Tower</em></figcaption>
</figure>

## The monster you don't see is always scarier

King masters the art of suggestion. In *It*, Pennywise is terrifying not because he's visible, but because he *could* be there. Horror lives off-screen, in what your imagination fills in.

The worst bugs work exactly the same way.

A `NullPointerException` with a 40-line stack trace? Almost reassuring. You know *where* it broke, *when*, and *why*. It's a visible monster. You kill it and move on.

But the silent bug — the one that throws no exception, crashes no test, that corrupts your data quietly for three weeks before someone notices the amounts don't add up anymore — that one is your Pennywise. It's in the sewers of your codebase, and it's waiting.

<figure style="text-align: center;">
  <img src="/assets/images/posts/stephen-king-et-le-debugging/pennywise.png"
  alt="Pennywise — It" style="max-width: 100%;" />
<figcaption>Filth.
<br/>Pennywise, <em>It</em></figcaption>
</figure>

The most costly bugs are those that make no noise. Because they don't trigger your danger instinct. Everything seems to work. Tests pass. CI is green. And yet, somewhere in a poorly written `if` or a silent rounding error, data drifts.

> "Terror, when you come home and notice everything you own had been taken away and replaced by an exact substitute."
> Stephen King, *Danse Macabre*

## "Stories are found things, like fossils in the ground"

King doesn't plan his novels. No detailed outline, no chapter-by-chapter synopsis. For him, the story already exists, buried, and the writer's job is to dig it up — carefully, like a paleontologist with a brush.

Debugging is the same thing. The bug already exists. It's in the code somewhere, buried under layers of logic and abstraction. Your job is not to *create* the solution but to *discover* the problem. And like the paleontologist, you must resist the temptation to use a bulldozer.

I've seen (and done) this mistake too many times: faced with a bug, rewriting an entire chunk of code "because it was poorly written anyway". That's the bulldozer. You destroy context, mask the real cause, and potentially introduce new bugs. Sometimes the fix is one line. Sometimes it's a misinitialized index, a single character. But to find that character, you need patience and a brush.

[git bisect](https://git-scm.com/docs/git-bisect/) is your brush. It takes a working state, a broken state, and performs a binary search through history. No guessing, no intuition, just facts. In a few minutes, you have the faulty commit. Then you just need to understand *why* that commit broke everything.

<figure style="text-align: center;">
<figcaption>Dev: "I'll just rewrite the whole module, it'll be faster."</figcaption>
  <img src="/assets/images/posts/stephen-king-et-le-debugging/pet-sematary.jpg"
  alt="Sometimes, dead is better — Jud Crandall, Pet Sematary" style="max-width: 100%;" />
<figcaption>Jud Crandall, <em>Pet Sematary</em>. He knew.</figcaption>
</figure>

## "The scariest moment is always just before you start"

This King quote applies to writing, but also to that very specific moment: you've just received a ticket, the title is super precise ("it doesn't work anymore"), priority is critical, and you have no idea where to start.

The paralysis of the unknown bug.

You stare at the ticket. You stare at the code. You stare at the ticket again. You go get a coffee. You re-read the ticket hoping the hidden meaning will reveal itself, like a [Magic Eye](https://en.wikipedia.org/wiki/Autostereogram) for developers.

<figure style="text-align: center;">
  <img src="/assets/images/posts/stephen-king-et-le-debugging/all-work-no-play.png"
  alt="All work and no play makes Jack a dull boy — The Shining" style="max-width: 100%;" />
<figcaption>POV: you're re-reading the ticket for the 19<sup>th</sup> time.
<br/>Jack Torrance, <em>The Shining</em></figcaption>
</figure>

King fights this paralysis with routine. Every morning, he sits down and writes. Not when inspiration strikes. Not when conditions are perfect. He sits down and starts. Period.

For debugging, the routine is the method:

1. **Reproduce.** If you can't reproduce it, you can't fix it. Find the exact steps, environment, data.
2. **Isolate.** Narrow the scope. Comment out, simplify, eliminate variables.
3. **Form a hypothesis.** Just one. Specific. Testable.
4. **Test the hypothesis.** Not "check if it works now". Prove that your hypothesis explains the observed behavior.
5. **Fix.** And write a test that would have caught the bug before you did.

It's not sexy. It's not creative. But it works, and it saves you from spending three hours going in circles cursing the universe.

## The second draft is the first draft minus 10%

King has a rule: the second version of a text should be roughly 10% shorter than the first. Not as dogma, but because by cutting, you keep only what's essential. Every word must earn its place.

When you fix a bug, look at the diff before committing. Is every modified line necessary? Did you slip in a little refactoring while you were at it? Add an unused import? Fix an unrelated comment?

A good bug fix is **surgical**. It changes the bare minimum needed to solve the problem, accompanied by a test that proves the fix. Nothing more. If you want to refactor the function while you're at it, do it in a separate commit. Future you (or your reviewer) will thank you when they need to `git blame` and understand why that line changed.

The first draft of the fix is rarely the right one. Remove 10%.

<figure style="text-align: center;">
  <img src="/assets/images/posts/stephen-king-et-le-debugging/annie-wilkes.jpg"
  alt="Annie Wilkes reading the manuscript — Misery" style="max-width: 100%;" />
<figcaption>Your reviewer when the bugfix diff is 400 lines long.
<br/>Annie Wilkes, <em>Misery</em></figcaption>
</figure>

## Writing is rewriting. Coding is debugging.

If King had to summarize *On Writing* in one sentence, it would probably be this: writing is rewriting. The first draft is never the final text. The real work begins after the writing.

For us, it's the same. The first commit is never the final code. Code lives, evolves, breaks, gets fixed, breaks again, gets fixed again. Debugging is not a bump in the road, it's **the job**. If you chose this career thinking that most of the work would be writing shiny new code, I have bad news: you'll spend far more time understanding existing code than writing new code. And even more time understanding *why* that existing code doesn't do what it should.

And that's OK. It's actually the most interesting part.

And at a time when AI can generate 200 lines of code in a few seconds, this skill has never been more crucial. Because AI-generated code has exactly the same bugs as human code — the same forgotten edge cases, the same implicit assumptions, the same [off-by-one errors](https://en.wikipedia.org/wiki/Off-by-one_error). Except you didn't write it, so you don't even have the intuition of what might break. The one who knows how to debug understands what the code *actually* does, not what it's *supposed* to do. And that, no copilot will do for you.

Because every bug resolved is another chapter in your own *Memoir of the Craft*. And unlike King's novels, the monster at the end... is always you.

<figure style="text-align: center;">
  <img src="/assets/images/posts/stephen-king-et-le-debugging/boogeyman.jpg"
  alt="The Boogeyman" style="max-width: 100%;" />
</figure>
