# Developer in the age of AI: between vertigo and lucidity

*When your job evolves faster than your ability to process it.*

<figure style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/this-is-fine.jpg"
  alt="This is fine" style="max-width: 100%;" />
<figcaption>"This is Fine" © K.C. Green, Gunshow #648 (2013)</figcaption>
</figure>

There are mornings when you open LinkedIn and wonder if you're still doing the same job you were two years ago.
Between the threads from people who "built a SaaS in a weekend with Claude", recruiters looking for "AI-native
developers", and influencers telling you that if you're not "vibe coding" yet, you're already dead... it's
enough to make your head spin.

This article is not an anti-AI pamphlet. I use AI daily,
[I even let Claude write 20,000 lines of code](/en/blog/the-mancolister-experience) on a personal project.
Nor is it an exercise in forced positivity. It's an attempt to put words on a discomfort I feel (and that many
developers around me feel too) without falling into pointless complaining.

## The silent grief

What we rarely talk about is grief. Not the loss of a job (developers are still being hired), but the loss of
an identity.

For years, you built your value on your ability to solve complex problems with code. You spent nights
understanding patterns, debugging impossible issues, developing an intuition that only experience gives. And one
morning, a tool comes along and does in 30 seconds what used to take you a full day.

Rationally, you know it's just a tool. That it doesn't replace your understanding. Emotionally, it's a punch to
the gut.

<figure style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/fraction-of-our-power.jpg"
  alt="Look what they need to mimic a fraction of our power" style="max-width: 100%;" />
<figcaption>"Look what they need to mimic a fraction of our power" © Amazon / Invincible (2021)</figcaption>
</figure>

The worst part isn't that AI does the work. It's that people who never had to acquire that understanding produce
results that *look like* yours. And that the difference between "looks like" and "is equivalent" is often
invisible to those who decide.

## Sunday experts

In 1995, in the United States, two men (McArthur Wheeler and Clifton Earl Johnson) robbed two banks with their
faces covered in lemon juice. Arrested hours later thanks to surveillance cameras, Wheeler explained with
disarming confidence that he had expected to become invisible, based on the same principle as invisible ink.
Psychologists David Dunning and Justin Kruger, intrigued by this unshakeable confidence in the face of the
absurd, used it as the starting point for a study that would give birth to the
[Dunning-Kruger effect](https://en.wikipedia.org/wiki/Dunning%E2%80%93Kruger_effect): the less competent you
are in a field, the more you overestimate your abilities, precisely because you lack the cognitive tools to
measure your own incompetence.

<figure style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/mcarthur-wheeler.jpg"
  alt="McArthur Wheeler, captured by the surveillance cameras" style="max-width: 100%;" />
<figcaption>McArthur Wheeler, captured by the very cameras he thought he could fool with lemon juice.</figcaption>
</figure>

In other words, [ultracrepidarianism](https://en.wikipedia.org/wiki/Ultracrepidarianism) (the tendency to give
opinions on subjects you don't master) is nothing new. There have always been people who present themselves as
experts after barely scratching the surface. But AI has put this phenomenon on steroids.

Before, claiming to be a developer when you weren't, it showed quickly. You couldn't hide for long that you
didn't know what an SQL injection was or why your application was leaking memory. Code was a natural filter.

Today, someone can produce a functional application without understanding a single word of what's happening
under the hood. And that person will post their result with disconcerting confidence, collect likes, get
invited on podcasts, and become a reference for decision-makers who can't tell the difference.

It's not malice. It's the Dunning-Kruger effect at industrial scale: you don't know what you don't know. And
when the tool masks the consequences of your ignorance (for a while), you're genuinely convinced you've
mastered the subject.

The problem isn't these people themselves. It's that **we listen to them**. It's that a CTO under pressure will
prefer the one who delivers in two days with Cursor over the one who says "we need to understand the domain
first". It's that the market rewards apparent velocity.

## "Why does it take so long if AI does it in 2 seconds?"

If you've been a developer for more than five years, you've probably heard a variation of this question. It
crystallizes the entire disconnect between what non-technical people *see* of AI and what it *actually does*.

AI generates code. Sometimes excellent. Sometimes catastrophic. Always with absolute confidence. The developer's
job has never been to type code (that was the *medium*). The job is to understand a need, model it, make
architectural choices, anticipate edge cases, ensure it holds up over time.

When a manager asks why you need three days when AI produces something in 30 seconds, the real answer is:
because those 30 seconds of AI only cover 20% of the work. The remaining 80% (validation, integration, edge
cases, maintainability), that's still you.

<figure style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/iceberg.jpg"
  alt="Iceberg: AI-generated code vs everything else" style="max-width: 100%;" />
<figcaption>Now try explaining that in a 15-minute standup.</figcaption>
</figure>

## The ground shifting under your feet

What makes this period particularly anxiety-inducing is that the job market absorbs the ambient narrative.

Companies are shrinking their development teams betting that AI will compensate. Job postings ask for "10x
developers powered by AI" as if it were a personality trait. Juniors can't find their first positions because
entry-level tasks (the ones that used to train them) are deemed "automatable".

And seniors find themselves in a paradoxical position: their expertise has never been more necessary (someone
has to validate what AI produces), but it has never been less recognized (since "AI does the same thing").

It's a squeeze from both ends. Juniors can't get in, seniors aren't valued fairly. And in between, a market
that confuses productivity with rushing.

<figure style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/productivity-rushing.jpg"
  alt="They're the same picture: Productivity vs Rushing" style="max-width: 100%;" />
<figcaption>"They're the same picture." © NBC / The Office (2005)</figcaption>
</figure>

## What nobody says out loud

Behind the enthusiastic LinkedIn posts and impressive demos, there's a reality that many experience without
daring to express:

- **The fatigue of the race.** Every week, a new tool, a new paradigm, a new "revolutionary" way to code.
  You haven't even finished exploring the previous one.
- **The latecomer syndrome.** You haven't tried the latest agentic framework yet? You're a has-been. You still
  code some things "by hand"? You're wasting time.
- **The loneliness.** In your team, nobody talks about it. Everyone pretends everything's fine and that it's
  "exciting". Nobody says "actually, I'm lost".
- **The guilt.** You feel illegitimate for feeling this discomfort. After all, it's progress, right? You should
  be happy. You should adapt. You should go faster.

And then there's a more insidious discomfort, which Benjamin Debon
([Benjamin Code](https://www.linkedin.com/feed/update/urn:li:activity:7433055093526257664/)) articulated with
disarming accuracy:

> *Before, we used to produce up to the limit of our capacities, we were satisfied with the effort/output
> ratio, and we were also exhausted. These were three conditions that made us naturally converge towards
> stopping. Vibe coding blew up all three at once. Our natural stop signal has disappeared. [...] When
> continuing costs nothing, how do we still deserve to stop?*

That's exactly it. AI hasn't just changed what we produce, it has broken the mechanism that allowed us to say
"that's enough for today". When launching an agent takes three minutes and not doing it feels like wasted time,
the line between productivity and compulsion fades.

<p style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/im-in-this-photo.jpg"
  alt="I'm in this photo and I don't like it" style="max-width: 100%;" />
</p>

If you recognize yourself in one or more of these points: you're not alone. And you're not behind. The pace
they're trying to impose on you isn't human.

## Separating signal from noise

Now that the discomfort is laid out, let's try to see clearly.

**The noise** is:
- Cherry-picked demos showing an ideal case without showing the 47 attempts before
- Influencers who have never maintained a system in production
- Catastrophist predictions about the "end of developers" ([we've been promised this since the 60s
  and COBOL](https://www.ivanturkovic.com/2026/01/22/history-software-simplification-cobol-ai-hype/))
- Companies selling AI as a miracle cure for organizational problems

**The signal** is:
- AI is a powerful tool that genuinely changes certain parts of the work
- Repetitive tasks and boilerplate are effectively disappearing
- The ability to clearly articulate a need is becoming a key skill
- Code is increasingly easy to produce, so value shifts to judgment

<p style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/lucidity.jpg"
  alt="Barney Stinson ignoring the noise, staying focused on fundamentals" style="max-width: 100%;" />
</p>

The difference between noise and signal is the long term. Noise evaporates. Signal confirms itself over time.
And knowing how to
[ignore the noise](/en/blog/what-being-a-developer-has-taught-me#ignorer-le-bruit) is also a skill that can be
learned.

## What still makes the difference

I'm not going to give you the usual list of "timeless soft skills" (you already know it). I'll rather tell you
what I concretely observe, working with AI every day:

**AI is brilliant in a corridor, blind at a crossroads.** Give it a well-framed problem, it excels. Confront it
with an architectural choice involving business constraints, performance trade-offs and inherited technical debt,
it goes in circles. That crossroads is your job.

<p style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/ai-generated-horse.jpg"
  alt="AI-generated code in the demo vs in production" style="max-width: 100%;" />
</p>

**Easy code has become free. Correct code remains expensive.** Anyone can generate a CRUD in 30 seconds.
Designing a system that handles load, evolves cleanly, doesn't collapse at the first unexpected edge case, that
requires the experience you spent years acquiring.

**Debugging AI code is debugging code you didn't write.** And it's objectively harder. It demands an
understanding of fundamentals that AI itself can't teach you. When the generated code breaks at 3am in
production, it's not the AI they call. Some will argue that this is coming, that an agent will soon be able to
intervene on its own on a broken production. Maybe. But someone will still need to decide whether to trust it,
validate that the fix doesn't make things worse, and bear the responsibility when it goes sideways. An AI
patching your prod unsupervised at 3am is at least as concerning as the bug itself.

## Don't suffer it, don't force it

The trap would be responding to anxiety with a frantic race. Learning every new tool, following every trend,
reinventing yourself every six weeks. That's the shortest path to burnout.

A few principles that help me navigate through this fog:

**Pick your battles.** You can't follow everything. Nobody can. Identify what's relevant to *your* context
(your stack, your domain, your projects) and ignore the rest without guilt.

<p style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/calm-cat.jpg"
  alt="Everyone's panicking about AI replacing devs. I'm here wondering if I should upgrade to Node 54."
  style="max-width: 100%;" />
</p>

**Use AI as a tool, not as a judge.** If you find yourself measuring your worth against what an LLM can
produce, you're comparing yourself to a calculator. An accountant doesn't feel threatened by a spreadsheet,
they use it.

**Invest in what doesn't change.** The fundamentals (algorithms, architecture, modeling, communication) are not
made obsolete by AI. They are made *more important*. The easier code is to generate, the more judgment about
*which* code to write gains value.

**Speak up.** About your discomfort, your doubts, your fatigue. With your colleagues, your peers, in
communities. Silence feeds impostor syndrome. Conversation dissolves it. Some even go as far as writing
articles about it, apparently.

## What now?

What I feel (and maybe you do too), is not resistance to change. It's the legitimate need to make sense of a
transformation that's moving faster than our collective ability to absorb it.

The developer profession isn't disappearing. It's molting. And like any molt, it's uncomfortable, unsettling,
sometimes painful. But the skin forming underneath is always stronger than the one being shed.

The only truly dangerous thing would be pretending everything is fine. Or pretending everything is terrible.

<figure style="text-align: center;">
<img src="/assets/images/posts/developpeur-a-l-ere-de-l-ia-entre-vertige-et-lucidite/first-time.jpg"
  alt="First time?" style="max-width: 100%;" />
<figcaption>"First time?" © Netflix / The Ballad of Buster Scruggs (2018)</figcaption>
</figure>

The truth, as often, lies in the middle. And it takes courage to look it in the face.
