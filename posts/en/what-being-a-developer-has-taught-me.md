# What being a developer has taught me

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/learn.gif" alt="Learn" />
</p>

This article is a free adaptation of [Henrik Warne's post](https://henrikwarne.com/2015/04/16/lessons-learned-in-software-development/) that I read with great interest back in 2015. He shares his experience as a developer and provides a relevant analysis of the profession. I took it upon myself to complement and illustrate each point with my own experience and additional thoughts where I felt they were appropriate.

This article will keep evolving as my experience grows 😉

## A complex project is a simple project that has evolved

<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/pika.png" alt="" style="float: left; margin: 0 1rem 1rem 0; max-width: 128px;" />

When you start a new project, a new application, a website, or even add a feature to an existing project, go straight to the essentials first, even if it means not implementing all the planned features. You can then evolve it step by step, bringing it towards the full expected solution. If a project involving many concepts, algorithms, or tools is tackled all at once from the start, it will invariably be hard to maintain.
There is an empirical rule to sum up this notion, [Gall's Law](https://en.wikipedia.org/wiki/John_Gall_(author)#Gall's_law):

> A complex system that works is invariably found to have evolved from a simple system that worked. The inverse proposition also appears to be true: A complex system designed from scratch never works and you can never make it work. You have to start over, beginning with a simple system.

Let's say you want to build a general-purpose vending machine (snacks, sandwiches, drinks). You'll start by setting up your raw steel casing. At first, your machine won't be able to do anything, not even accept coins, but it will still be a vending machine.
Then you'll add empty compartments, a window, a keypad, an LED display, and a coin slot. You'll add change management to the coin mechanism, link it to the keypad and compartments to unlock products, and set up the LED display. Each step will enrich and add complexity to your project, but at each iteration, your machine will work and be capable of doing more.

## Do one thing at a time

This principle applies to development, but first and foremost in general. If you encounter an error, a test fails, or a regression occurs, and you know you've only modified the code in one specific place (and everything worked before 🙂), detecting the bug becomes much easier. This is directly related to the previous point — move forward step by step. Modify point A, commit. Modify point B, commit. And so on. Commits are excellent markers and milestones for this; they clearly compartmentalize the changes you make to the code.

## Enable logging and error handling as early as possible

<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/quand-je-regarde-logs.gif" alt="" style="float: right; margin: 0 0 1rem 1rem; max-width: 219px;" />

If not before anything else. It may seem trivial at the beginning of a project, but the first problems can appear early. It's important to always stay in control of what you're doing, and smart logging coupled with good error handling will help you maintain that control from the start and continuously.

And of course, even though most logging systems do it already, timestamp everything that's written.

## Everything you code must be executed at least once

<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/bug-plane.jpg" alt="It only happens to others, y'know." style="float: left; margin: 0 1rem 1rem 0; max-width: 300px;" />

This seems like common sense. You might think that unit tests and integration tests are there to verify every line written, which is true (provided you actually write them!), but sometimes you write a few lines of code that will, in theory, never be executed. For example, handling the case where column my_column isn't present in the database. You tell yourself you'll be careful with your structure and it'll never happen. However, if you put a safeguard in place for this, it's worth verifying that safeguard actually works. So you cheat a little — take your database offline, deliberately misspell the column name, invert a condition to artificially trigger the error case, and test it, to confirm that this time it was properly handled.

## Things (always) take longer than expected

A cliché for anyone who's managed a project with deadlines. "How long do you think it'll take?" You never answer this question with certainty, unless you've done this exact task recently (and then you just know). Assume that whatever you undertake will practically never go without a hitch. You'll have a merge accident, you'll have a stupid bug that eats up 2 hours, you'll need to update a framework only to discover in horror that half your code is deprecated... All these factors and more are covered by [Hofstadter's Law](https://en.wikipedia.org/wiki/Hofstadter%27s_law):

> It always takes longer than you expect, even when you take into account Hofstadter's Law.

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/hofstader.jpg" alt="Hofstadter" />
</p>

...and it's very hard to explain to your scrum master or your sales team without looking like a slacker.

## Understand what you're working on

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/getit.gif" alt="Get it" />
</p>

Many of your projects will involve modifying or evolving existing code. So take the time to truly understand what you're about to break. The client has deep knowledge of their product (well, usually), and they won't hesitate to point out that they used to have this great feature you had no idea about, and now they can't use it anymore, and it's an outrage. Maybe you even did it on purpose so they'd have to pay for it again, you scoundrel of a developer. Tests therefore become crucial — if they're comprehensive, you give your successor a chance to better understand what you've done. Read but above all execute the code, create a sandbox application if needed, play with the project, put it to the test.

## There will always be bugs

<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/bugs.jpg" alt="" style="float: right; margin: 0 0 1rem 1rem; max-width: 150px;" />

And mark my words. This doesn't mean you're incompetent, just that you can't think of everything. So forget the marketing approach of "Everything will work as expected the first time and all the time." That's false — even the requirements themselves can be flawed, causing sequences that can be described as bugs. One day a user will perform actions in a specific order and get an absurd result, simply because you didn't anticipate it. And that's fine, as long as you're there to fix it. So prefer the approach "I detect a problem, I fix it, and I deploy the fix" — ideally before the end user encounters the issue.

<div style="clear: both;"></div>

## Take the time to solve problems

<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/multitask.gif" alt="" style="float: left; margin: 0 1rem 1rem 0; max-width: 215px;" />

As a consequence of the previous point, take the time to solve problems — make it a recurring task. Fixing a bug isn't a waste of time but an excellent way to improve user experience by understanding what people tried to do with your application, to test the maintainability of your code, and to keep in mind that you're responsible for what you develop.

An important point: reproduce the problem, and do so systematically. Write a test that highlights it, and from there, fix it. This ensures you'll fix the right problem instead of creating a new one 🙂

Don't try to tackle everything at once. Identify and fix each problem within your reach; don't try to plan too far ahead. Once all known errors are fixed, see what remains and start again if needed.

<div style="clear: both;"></div>

## There are no coincidences

<p style="text-align: center;">
  <img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/coincidence.gif" alt="Coincidence" />
</p>

Never. The rule is simple: if you created feature A and now feature B is buggy — no coincidence. If after adding your new module the system seems slower — no coincidence. Don't rely on some divinity of randomness; investigate. More often than not, it will turn out that YOU are the random variable.

## Talk to each other

If you have the opportunity, rather than exchanging a thousand emails, chatting, texting, calling, or video conferencing — go see the person directly to solve a problem. The interaction will be much more effective if you cooperate face to face.

## Asking questions != being stupid

Another cliché of collaborative work, and even if you've read this a thousand times before this article: don't be afraid to ask questions. There are no bad questions, possibly bad listeners, but no bad questions. Nobody's there to say "Damn, you're annoying with your questions." You'll certainly come across such people, but you'll also quickly understand that consulting them is pointless.

Get yourself a rubber ducky. In other words, a person, an object, preferably with no skill to solve said problem, and explain in detail what's wrong. It'll seem like magic, but often the solution appears just by stating the problem out loud. Yes, like in 99% of House M.D. episodes.

<figure style="text-align: center;">
<img src="/assets/images/posts/ce-que-le-metier-de-developpeur-ma-appris/rubber-ducky.jpg" alt="Rubber ducky" style="max-width: 300px;" />
<figcaption>Two excellent examples of rubber duckies.</figcaption>
</figure>

Finally, once your problem is solved, give credit where credit is due. Did Michel find the shameful infinite loop crashing your program? Mention it when reporting on the issue. Beyond basic politeness, it's also an excellent way to return the favor and continue leading a life as an honest developer. Once again, you won't always think of everything. You will make mistakes.

## Never stop learning

The beauty of being a developer is that you'll never reach the end of what you know. There will always be something to learn, a new language to master, a framework to tame. If one day you feel you have nothing left to learn technically, well, that's probably a sign it's time to change careers, because your primary activity is, above all, to keep learning. And don't be afraid of change — technologies evolve, and you must evolve with them. You won't always do the same thing your whole life. Learning may take time; you'll struggle, test, fail, start over, but that's how you'll learn.

## Relax

Take stock of your situation, your work — you're a developer, not an ER doctor. You should certainly take the greatest care in what you do, but keep in mind that you're not going to kill anyone (unless you were on the team that planned [the Challenger shuttle launch](https://en.wikipedia.org/wiki/Space_Shuttle_Challenger_disaster)), so relax. I'm not saying you should stop caring, but it's still a job, even if it's your passion. You have a thousand things more important in your life than your project's build and the smiles on your clients' faces (even though that's cool).
