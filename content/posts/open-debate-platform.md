---
title: "Open-Debate Platform"
date: 2022-03-18T22:58:03-04:00
draft: true
---

This is a draft at the moment, since it is all over the place.

> Democracy cannot gauarantee truth, but can be used to guide discussion...under a set of rules.

## Open-Debate Platform

Open-debate platform (ODP) or open-source debate, strongly inspired by open-sourcecode platforms, is about like minded users cooperating informally in order to produce formal arguments in a structured and multiple opinion debate. A debate in this context is simply a question asking for answers. The purpose is to converge and display answers. It's about helping people
finding the truth without bias. If people want to know the best language to learn, they will probably be greeted with "English"
but if they don't agree that the reasons apply to them, they can look at the next alternative and so on. The platform
allows for efficient analysis of all opinions and arguments. Parts of the implementation follow. I say parts, because there might be race conditions, but the purpose of this document is to communicate the spirit of ODP so that technical solutions can be used and
created to preserve and scale this spirit.

<details>
<summary>Controversy and Extremism</summary>
Controvery and extremism is expected on a platform like this. The entire point is for an open discussion to
stamp out objectively wrong opinions. For example, murder is wrong; An argument pertaining to killing
would most likely delve into the definition of murder. However, the platform converges upon arguments that are
able to defend their position.

Even though extremism will be present on the platform, uncivil discourse is not to be tolerated.
Civil discussion does not involve calls to genocide or targetting of innocent people. Such a statement would be supressed,
however arguing whether such things are okay will be permitted. There is a difference between debating something
that is immoral vs. actually acting immoraly. Since these arguments don't actually dictate behavior, the ODP
does not have to follow any argument that is able to defend its position.
</details>

An ODP can be structured more easily digitally than physically. So the specs are made with that in mind.
Of course, a paper system could replicate this although with unsustainable logistics and so would need to cut some corners.

## Specs

With the spec, some features improve usability and user experience and are not required for the basic
implementation of an ODP. The basic is simply a platform that allows for the interactions described in the previous parapgraphs.
One way to accomplish that is given below.

### Digital Platform

- Most likely a website
- The website that acts as a host and a gatherer. A gather type system is decentralized but could take lot of technical effort to get right.
- The digital platformm is run by an unbiased [operator](#operator)
- A biased operator invalidates ODP
- People can become [users](#user) by logging in with email or using public-private key signing
- Users to able to ask [questions](#questions)
- The platform would have an ability to search and explore questions
- The platform supports a routing protocol like TOR and can be run with JavaScript disabled

### Operator

An operator is an entity that runs the ODP. Operators are to remove calls to harm. Harm is defined as anything equal to or more than a call to chastize people who haven't acted uncivil in a **formal** setting. Formality does matter. Unbiased means not using their opinion an a question to censor other opinons. For example, an operator might be pro-Monero, however that does not give them the right to impede and censor civil arguments by pro-bitcoin and pro-ethereum parties.

### User

A user has the ability to interact with the platform and create questions, [arguments](#argument), upvote argument points, and comment in [discussions](#discussions).

A user that creates an argument is also its [author](#User::Author) and one of its [maintainer](#User::Maintainer).
A user can become a maintainer but not an author if they accept a maintainer invite from the author.

A user cannot be an argument maintainer for a topic and also upvote another argument for the same topic.

### Argument

For each question, there are responses; also called arguments.
Ultimately, users are responsible for siding with an argument, the platform is just a tool to facilitate open debate as the name conveys.

- An argument has at least one reason
- An argument has rebutals for the arguments next popular and next least popular argument's points.
- <details><summary>Rebutal considerations</summary>
    Replies are to be made to at least 1 rebutal within 2 weeks or the point/rebuttal will be marked as "failed to defend point/rebuttal".
    Hence, points/rebuttals can be shown to the user sorted by point/rebutall defended -> ongoing -> failed to defend.

    This time window feature is very important in order to force discourse. It's very easy to make 1 rebutal and never respond again. Every response to a rebutal must address the rebutal fully. Not addressing a rebutal fully makes the rebutal valid. In that way, points and rebutals can follow a thread type of structure to allow multiple replies and rebutals per point rather than batching all rebutals for a point into one. For less popular arguments, operators are allowed to be leniant about the forced rebutal rule. I'd say if there are more than 5 argument, the bottom 50% won't need to comply with the forced discussion. This is because it's more likely these projects are arguing with bad faith characters and so the operator can use their own prioritization method for rule violation reports.
    </details>
- For each question, arguments should be sorted by number of upvotes. Upvotes are not an actual indication of quality, only of popularity.
- No more than 10 maintainers

When users click an argument, they should be shown the list of points for that argument and rebuttals to those points by the other two projects. Arguments can also rebut other arguments that are more popular or less popular, but it does not force the other argument to reply. Replying to rebutals is required for arguments that are beside each other in popularity.

<details>
<summary>Rogue Behavior Considerations</summary>
Arguments can be recreated (forked) in case of rogue or dormant maintainers. Since people can change
their minds, even if they decide to mess up the old argument they were supporting, history can be restored by a maintainer
in the same argument or by a proponent through forks.
If done correctly, each point has an associated history and id for each point in history.
Then, the upvotes can be restored as long as the users have no upvoted something new, and that point id does not exist
in any older forks. This way, the damage of greifing is reduced. These are all technical discussions though that uphold the
spirit of ODP.
</details>

<details>
<summary>Bad faith considerations</summary>
It is up to operators how to deal with arguing in circles; if people are arguing in circles it is best to close the rebutal. Arguing in circles usually indicates one party is not acting in good faith. Rebutals can be reported as irrelevant and will shadow ban
the user. Shadow ban in this context means that the user will see the platform as if their action was valid.
</details>

### Discussions

Discussions are informal communication features. They should be included for each argument, and each arguments merge requests.
Responses in dicussions are called comments.

Arugment discussions can be moderated **with bias** by the arguments [maintainers](#User::Maintainer) themselves since their role is to improve
discussion pertaining to their argument, not the question being answered. Comments are informal, so they can only be from proponents
of said argument. This should reduce the number of bad actors as proponents have to upvote the argument itself. The maintainers
are there to clean up remains.

### User::Author

A user that started the argument. They have the power to delete the argument if there
are less than 3 proponents of the argument. All authors are considered a maintainer.

### User::Maintainer

A maintainer is a user who has the ability to edit. Authors are considered maintainers but
not vice versa. To make a user a maintainer of an argument requires 75% of maintainers to vote.
There can only be up to 10 maintainers including the author.

Arguments should have a change history so even if a [maintainer](#User::Maintainer) goes rogue, damage should be easily reversible.
If all maintainers go rogue, the author can request operator intervension to kick out the rogue maintainers. Or if the author goes rogue, the maintainers can request an operator intervension. This is where operator neutrality becomes important although not required since arguments can be "forked", and the rogue argument basically left to die.

### Question

A question can also be referred to as a topic.

Users can ask subjective questions about topics, but questions that spark debate should be prioritzed. Think "what is **a** good ice cream flavor" vs. "what is the **best** ice cream flavor". There is a difference, the former seeks to get a good sample, but the latter seeks to find the best answer.

A question is a duplicate if it conveys the same message or is equal ignoring case and non gramatic symbols. If it is the latter,
the question can be disallowed from creation, but the former should be marked as duplicate. Duplicate questions should be searchable but not prioritized. A question marked as a duplicate should allow the question creator to argue that the question was incorrectly marked as a duplicate.

<details>
<summary>Censorship considerations</summary>
Many times on Stackoverflow, questions are marked as duplicate incorrectly on Stackoverflow where as actual duplicates fly by the radar.
These questions are not technical at all, only discussion prompts, so it is imperative to not censor valid questions.
</details>

### Vocbulary and Models

### Merge Request

A merge request is a request by a user to add a point or rebutal to an argument. Merge requests can only be
merged be maintainers and should support informal discussions.

### Reason or Point

A single reason that supports the arguments thesis. A point can have upvotes but every
edit or deletion resets the upvote to 0 and thus removes proponents of the argument.
An argument's star count is equal to the sum of upvotes of its reasons which is also the number of propronents.

### User::Contributer

Any user that modified an argument or had their modifications merged in.

### User::Proponent

A user is considered a proponent of an argument if they've upvoted a reason of the argument or are a maintainer for an argument.
Only reasoning points of the argument can be upvoted and a user is no longer a proponent if the point they upvoted
gets modified or deleted.


## Platform Logistics

A platform would be created by an operator. The operator has to make a legally bound contract
with all participants that stipulates that the operator will not manipulate or censor civil arguments and should laso provide
visitors and a link to download the platform source code (any license allowed). This holds the operator accountable for abuse.
Abuse would either be easily detectable or non-harmful to the goal of figuring out the best arguments. Platforms
can compete with each other.

If an operator deleted a comment, an argument, an arguments points, it is pretty noticeable and easy to prove using archive websites.
Vote inflating is possible, but that is why the operator needs to show the UI in terms of rebutals. Operators that can be shown
to not follow the specs mentioned in this article won't be considered an open-debate platform. If required, I can test out
a platform and classify or declassify it as an open-debate platform.

## Remarks

I'm not sure when I'll be able to implement this, but I'm leaving this here for someone to pursue. My goal with this is to improve unity and reduce polarizations. We need to stop with the harassment of people that hold an opinion. An opinion is much different from
an action and we need to make that distinction by showing our tolerance for opposing opinions.

There are people who think it's okay to be intolerant of the intolerant but that's an oxymoron. The best way
to debate against someone who promotes intolerance is to tell them they are only able to promote intolerance because of the tolerant society. If you were the other side of the coin, he wouldn't be able to speak.
