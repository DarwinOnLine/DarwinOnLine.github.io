# What being a developer has taught me

This article started as a free adaptation of [Henrik Warne's post](https://henrikwarne.com/2015/04/16/lessons-learned-in-software-development/) that I read with great interest back in 2015.

Years have passed, experiences have piled up, and I've ended up with my own convictions to share.

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/learn.jpg" alt="When I was your age, I was your age" style="max-width: 100%;" />
</p>

What follows is a blend of his ideas, my own, and everything the job has taught me in between.

## A complex project is a simple project that has evolved

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/simple-complex.jpg" alt="" style="max-width: 100%;" />
</p>

When you start a new project, a new application, a website, or even add a feature to an existing project, go straight to the essentials first, even if it means not implementing all the planned features. You can then evolve it step by step, bringing it towards the full expected solution. If a project involving many concepts, algorithms, or tools is tackled all at once from the start, it will invariably be hard to maintain.

There is an empirical rule to sum up this notion, [Gall's Law](https://en.wikipedia.org/wiki/John_Gall_(author)#Gall's_law):

> A complex system that works is invariably found to have evolved from a simple system that worked. The inverse proposition also appears to be true: A complex system designed from scratch never works and you can never make it work. You have to start over, beginning with a simple system.

Let's say you want to build a general-purpose vending machine (snacks, sandwiches, drinks). You'll start by setting up your raw steel casing. At first, your machine won't be able to do anything, not even accept coins, but it will still be a vending machine.
Then you'll add empty compartments, a window, a keypad, an LED display, and a coin slot. You'll add change management to the coin mechanism, link it to the keypad and compartments to unlock products, and set up the LED display. Each step will enrich and add complexity to your project, but at each iteration, your machine will work and be capable of doing more.

## Do one thing at a time

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/one-thing.jpg" alt="One thing at a time" style="max-width: 100%;" />
</p>

This principle applies to development, but first and foremost in general. If you encounter an error, a test fails, or a regression occurs, and you know you've only modified the code in one specific place (and everything worked before 🙂), detecting the bug becomes much easier. This is directly related to the previous point — move forward step by step. Modify point A, commit. Modify point B, commit. And so on. Commits are excellent markers and milestones for this; they clearly compartmentalize the changes you make to the code.

In the same spirit, work on dedicated **feature branches** and make **small pull requests**. A 3-file PR will be reviewed carefully; a 15-file PR will be skimmed at best, rubber-stamped at worst. The shorter and more focused a PR is, the better the review will be, and the less likely you are to introduce silent regressions.

## Enable logging and error handling as early as possible

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/quand-je-regarde-logs.webp" alt="" style="max-width: 100%;" />
</p>

If not before anything else. It may seem trivial at the beginning of a project, but the first problems can appear early. It's important to always stay in control of what you're doing, and smart logging coupled with good error handling will help you maintain that control from the start and continuously.

And of course, even though most logging systems do it already, timestamp everything that's written.

## Everything you code must be executed at least once

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/bug-plane.jpg" alt="It only happens to others, y'know." style="max-width: 100%;" />
</p>

This seems like common sense. You might think that unit tests and integration tests are there to verify every line written, which is true (provided you actually write them!), but sometimes you write a few lines of code that will, in theory, never be executed. For example, handling the case where column my_column isn't present in the database. You tell yourself you'll be careful with your structure and it'll never happen. However, if you put a safeguard in place for this, it's worth verifying that safeguard actually works. So you cheat a little — take your database offline, deliberately misspell the column name, invert a condition to artificially trigger the error case, and test it, to confirm that this time it was properly handled.

## Things (always) take longer than expected

A cliché for anyone who's managed a project with deadlines. "How long do you think it'll take?" You never answer this question with certainty, unless you've done this exact task recently (and then you just know). Assume that whatever you undertake will practically never go without a hitch. You'll have a merge accident, you'll have a stupid bug that eats up 2 hours, you'll need to update a framework only to discover in horror that half your code is deprecated... All these factors and more are covered by [Hofstadter's Law](https://en.wikipedia.org/wiki/Hofstadter%27s_law):

> It always takes longer than you expect, even when you take into account Hofstadter's Law.

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/hofstader.jpg" alt="Hofstadter" style="max-width: 100%;" />
</p>

...and it's very hard to explain to your scrum master or your sales team without looking like a slacker.

There are approaches to try and tame this problem. [Planning Poker](https://en.wikipedia.org/wiki/Planning_poker) proposes collectively estimating effort using a card game based on the Fibonacci sequence, on the basis that a team consensus will be more reliable than an individual estimate. On the other end, the [#NoEstimates](https://ronjeffries.com/xprog/articles/the-noestimates-movement/) movement suggests dropping estimates altogether, and instead breaking work into increments small enough that estimation becomes unnecessary. Somewhere in between, there's the good old unofficial rule: "multiply your estimate by pi." It's only half a joke.

## Technical debt exists, and it accrues interest

When deadlines tighten or pressure mounts, you take shortcuts. A "temporary" piece of code that gets the job done, a quick workaround you promise yourself you'll revisit later.
This is [technical debt](https://en.wikipedia.org/wiki/Technical_debt), a concept coined by Ward Cunningham in 1992. Like financial debt, it's not inherently bad: borrowing to move faster can be a conscious and reasonable choice. The problem is when you stop paying it back. Interest piles up: every new feature takes longer, every fix triggers another, and one day you're spending more time working around problems than solving them. So track it, own it, and above all plan to pay it off. A TODO in the code is an IOU. If nobody ever addresses it, that's bankruptcy in the making.

<figure style="text-align: center;">
<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/gaston-dette.jpg" alt="Gaston Lagaffe — debt piling up" style="max-width: 100%;" />
<figcaption>Gaston is drowning in debt too. © Franquin</figcaption>
</figure>

## Learn to say no

"Could we also add this?" Sure. You always could. And that's precisely the problem. Every "small addition" that sneaks in mid-project has a name: [scope creep](https://en.wikipedia.org/wiki/Scope_creep). A scope that quietly inflates — a feature here, a "while we're at it" there — and eventually a project that no longer resembles what was planned, delivered late and half-finished.
Saying no isn't being difficult, it's protecting the project. A good developer doesn't just say "no," they say "not now" or "at what cost." Every addition has a price — in time, complexity, and technical debt. And just because an AI generates code in 10 seconds doesn't mean that code is free: you'll still need to understand it, maintain it, test it, debug it. The "it costs nothing, let's just add it" illusion is even more tempting when code seems to fall from the sky. The famous quality / cost / time triangle isn't just a PowerPoint slide: if you add scope without adjusting deadlines or budget, quality is what suffers. And you're the one who'll carry it.

<figure style="text-align: center;">
<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/yes-man.jpg" alt="Yes Man" style="max-width: 100%;" />
<figcaption>Don't be a Yes Man.</figcaption>
</figure>

Learn to prioritize. Not everything can be urgent and important at the same time. And if everything is, then nothing is.

## Understand what you're working on

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/getit.gif" alt="Get it" style="max-width: 100%;" />
</p>

Many of your projects will involve modifying or evolving existing code. So take the time to truly understand what you're about to break. The client has deep knowledge of their product (well, usually), and they won't hesitate to point out that they used to have this great feature you had no idea about, and now they can't use it anymore, and it's an outrage. Maybe you even did it on purpose so they'd have to pay for it again, you scoundrel of a developer. Tests therefore become crucial — if they're comprehensive, you give your successor a chance to better understand what you've done. Read but above all execute the code, create a sandbox application if needed, play with the project, put it to the test.

And think about it the other way around: if you want your successor to understand your code, write it for them. Code is read far more often than it is written. You'll write a function once; it'll be read dozens of times — by your colleagues, by yourself, by next year's intern trying to figure out why it works. Every shortcut you take while writing is a tax you impose on every future read. Write code you'd be able to re-read on a Sunday evening without coffee.

And document. Not everything, not everywhere, but decisions, the "whys," the non-obvious pitfalls. [Damian Conway](https://en.wikipedia.org/wiki/Damian_Conway) put it well:

> Documentation is a love letter that you write to your future self.

An up-to-date README, a comment explaining *why* rather than *what*, an architecture diagram scribbled in a wiki — it's little effort in the moment and a lifeline six months later. And now that AI is becoming a full-fledged teammate, readable code and up-to-date documentation are also what will allow it to assist you effectively. An AI working on a well-documented project will save you time; on an opaque one, it'll just reproduce the chaos.

## There will always be bugs

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/bugs.jpg" alt="" style="max-width: 100%;" />
</p>

And mark my words. This doesn't mean you're incompetent, just that you can't think of everything. So forget the marketing approach of "Everything will work as expected the first time and all the time." That's false — even the requirements themselves can be flawed, causing sequences that can be described as bugs. One day a user will perform actions in a specific order and get an absurd result, simply because you didn't anticipate it. And that's fine, as long as you're there to fix it. So prefer the approach "I detect a problem, I fix it, and I deploy the fix" — ideally before the end user encounters the issue.

## Take the time to solve problems

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/multitask.gif" alt="" style="max-width: 100%;" />
</p>

As a consequence of the previous point, take the time to solve problems — make it a recurring task. Fixing a bug isn't a waste of time but an excellent way to improve user experience by understanding what people tried to do with your application, to test the maintainability of your code, and to keep in mind that you're responsible for what you develop.

An important point: reproduce the problem, and do so systematically. Write a test that highlights it, and from there, fix it. This ensures you'll fix the right problem instead of creating a new one 🙂

Don't try to tackle everything at once. Identify and fix each problem within your reach; don't try to plan too far ahead. Once all known errors are fixed, see what remains and start again if needed.

## Name things properly

There's a famous quote attributed to [Phil Karlton](https://www.karlton.org/2017/12/naming-things-hard/):

> There are only two hard things in Computer Science: cache invalidation and naming things.

It's funny because it's true. A variable name, a function name, a class name — it's a contract with whoever reads your code next, and that might be you in six months, with no memory of what `tmp2` or `processData()` were supposed to do. Good naming makes comments unnecessary; bad naming makes code opaque even with comments. Take 30 extra seconds to find the right word.

`remainingRetryCount` will always be clearer than `cnt`. And if you can't clearly name a function, maybe it's doing too many things — which is precisely the definition of the **S** in [SOLID](https://en.wikipedia.org/wiki/SOLID): single responsibility. If you can't name it simply, break it up.

<figure style="text-align: center;">
<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/naming.jpg" alt="Naming things" style="max-width: 100%;" />
<figcaption>But don't be dumb about it either.</figcaption>
</figure>

## Don't build a cathedral to house a hamster

You've probably heard the acronym KISS — *Keep It Simple, Stupid*. Its companion, less famous but just as crucial, is YAGNI — [*You Aren't Gonna Need It*](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it). Together, they boil down to one sentence: only code what you need, and keep it simple.

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/kiss-yagni.jpg" alt="If it works, it works." style="max-width: 100%;" />
</p>

It's tempting, a nice abstraction. A clean pattern "just in case." A factory of factories, because maybe someday there'll be a third payment type. Except that day never comes, and in the meantime you're maintaining code nobody uses, nobody understands, and that complicates every real change. Three duplicated lines of code are often better than a premature abstraction. If the need proves real, you'll refactor. And it'll be easier, because the code stayed simple.

## There are no coincidences

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/coincidence.webp" alt="Coincidence" style="max-width: 100%;" />
</p>

Never. The rule is simple: if you created feature A and now feature B is buggy — no coincidence. If after adding your new module the system seems slower — no coincidence. Don't rely on some divinity of randomness; investigate. More often than not, it will turn out that YOU are the random variable.

And beware of yourself during the investigation. [Confirmation bias](https://en.wikipedia.org/wiki/Confirmation_bias) is your worst enemy: when you're convinced the problem isn't yours, you unconsciously look for evidence that it's somewhere else. "It's probably a framework bug," "It was working before, must be the server." Resist that reflex. Isolate the problem methodically: a [`git bisect`](https://git-scm.com/docs/git-bisect) to pinpoint the offending commit, a `git stash` to check whether your local changes are to blame, a clean environment to eliminate variables. The tools exist to replace gut feeling with facts. Use them before blaming the framework, your colleague or Elon Musk.

## Talk to each other

If you have the opportunity, rather than exchanging a thousand emails, chatting, texting, calling, or video conferencing — go see the person directly to solve a problem. The interaction will be much more effective if you cooperate face to face.

That said, face to face isn't always possible — and it's not always desirable either. Remote work has become the norm, teams are distributed, and sometimes the best way to communicate is to write. A well-crafted message in a PR, an [RFC](https://en.wikipedia.org/wiki/Request_for_Comments) or an architecture decision record (ADR) is often worth more than a 45-minute meeting nobody will remember. Asynchronous communication has a huge advantage: it gives people time to think before responding, and it produces a written record. Conversely, beware of meeting overload. Paul Graham wrote about the ["maker's schedule"](https://www.paulgraham.com/makersschedule.html): a developer needs long, uninterrupted blocks of focus. Every poorly placed meeting breaks that flow and costs far more than its stated duration. And remember:

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/meeting-email.jpg" alt="Tell me again why this meeting couldn't have been just an email?" style="max-width: 100%;" />
</p>

## Asking questions != being stupid

Another cliché of collaborative work, and even if you've read this a thousand times before this article: don't be afraid to ask questions. There are no bad questions, possibly bad listeners, but no bad questions. Nobody's there to say "Damn, you're annoying with your questions." You'll certainly come across such people, but you'll also quickly understand that consulting them is pointless.

Get yourself a rubber ducky. In other words, a person, an object, preferably with no skill to solve said problem, and explain in detail what's wrong. It'll seem like magic, but often the solution appears just by stating the problem out loud. Yes, like in 99% of House M.D. episodes.

<figure style="text-align: center;">
<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/rubber-ducky.jpg" alt="Rubber ducky" style="max-width: 100%;" />
<figcaption>Two excellent examples of rubber duckies.</figcaption>
</figure>

Finally, once your problem is solved, give credit where credit is due. Did Michel find the shameful infinite loop crashing your program? Mention it when reporting on the issue. Beyond basic politeness, it's also an excellent way to return the favor and continue leading a life as an honest developer. Once again, you won't always think of everything. You will make mistakes.

## Never stop learning

The beauty of being a developer is that you'll never reach the end of what you know. There will always be something to learn, a new language to master, a framework to tame. If one day you feel you have nothing left to learn technically, well, that's probably a sign it's time to change careers, because your primary activity is, above all, to keep learning. And don't be afraid of change — technologies evolve, and you must evolve with them. You won't always do the same thing your whole life. Learning may take time; you'll struggle, test, fail, start over, but that's how you'll learn. And that process remains essential, even — especially — in the age of AI. An AI can generate code for you, but if you don't understand what it produces, you won't be able to correct it, guide it, or judge whether what it suggests is relevant. The one who directs the AI is the one who understands the problem. Delegating without understanding isn't efficiency, it's abdication.

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/ai-learning.webp" alt="Learn to code vs learn to write prompt" style="max-width: 100%;" />
</p>

That said, learning doesn't mean chasing everything. Every week a new JavaScript framework, every month a new tool "that will change everything." The rise of AI in our daily work has amplified this phenomenon to dizzying levels: tools multiply, practices are reinvented, and with them come the mandates. "If you don't use AI you'll be replaced," "AI will kill the developer profession," "you need to relearn everything"… Self-proclaimed experts are everywhere, so are definitive opinions, and you quickly feel like you're drowning.

Breathe.

Not everything is worth adopting, not everything is worth discarding. What matters is maintaining a regular watch — follow a few trusted sources, try out what seems relevant, ignore the noise. Knowing how to tell a lasting shift from a passing fad is itself a skill worth learning. And it'll save you from learning burnout.

## Relax

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/relax.webp" alt="David Good" style="max-width: 100%;" />
  <br><em>Not too much though</em>
</p>

Take stock of your situation, your work — you're a developer, not an ER doctor. You should certainly take the greatest care in what you do, but keep in mind that you're not going to kill anyone (unless you were on the team that planned [the Challenger shuttle disaster](https://en.wikipedia.org/wiki/Space_Shuttle_Challenger_disaster)), so relax. I'm not saying you should stop caring, but it's still a job, even if it's your passion. You have a thousand things more important in your life than your project's build and the smiles on your clients' faces (even though that's cool).

And while we're on the topic of relaxing, let's talk about the thing that eats at you in silence: [impostor syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome). That feeling that you don't belong. That your colleagues are better. That if you got hired, it's only because nobody's caught on yet. That the day they discover you google basic stuff, it'll be game over.

Spoiler: everyone googles basic stuff. Everyone.

[Impostor syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome) is rampant in our profession, and it often hits the most competent people hardest — because the more you know, the more you realize what you don't know. It's a cruel bias: those who doubt the most are rarely the ones who should — there's even a name for it: the [Dunning-Kruger effect](https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect). Meanwhile, those who never doubt commit the worst stuff with full confidence.

You don't need to know everything. You don't need to understand everything on the first try.

You're allowed not to know a tool, a language, a concept. That doesn't make you a bad developer; it makes you a human being who's learning — and that's exactly what's expected of you. Re-read the previous section if needed.

So the next time that little voice tells you you're not legitimate, remember: the very fact that you're asking yourself the question already proves you take your craft seriously.

And that's exactly what makes a good developer.
