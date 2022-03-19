---
title: "Open-Debate Platform"
date: 2022-03-18T22:58:03-04:00
draft: false
---

## Open-Debate Platform (OBP)

Democracy cannot gauarantee truth, but it can be used to guide discussion under a set of rules.
Those rules are mentioned here. This is an overview and not a implementation spec sheet.

An open-debate platform or open-source debate would work in the following way inspired strongly by open-sourcecode platforms.
An [operator](#operator) would create a digital platform that people can interact with digitally. The platform would have a search function or a list of questions to answer. People can create an account with the platform to create a question. Duplicate questions should be searchable but not prioritized. A question marked as a duplicate should allow the question creator to argue that the question was incorrectly marked as a duplicate. Operators are strongly encouraged to act as unbiased as possible without community moderators.

<details>
<summary>Censorship considerations</summary>
Many times on Stackoverflow,
questions are marked as duplicate incorrectly on Stackoverflow where as actual duplicates fly by the radar.
These questions are not technical at all, only discussion prompts, so it is imperative to not censor valid questions.
Operators are allowed to give questions priorities but priorities should not be used to prevent search result matching.
</details>

### Responding to a Question

For each question, there are responses; also called arguments. Users can create an argument or upvote a point of an argument, but not
do both. For each question, arguments should be sorted by number of upvotes. Upvotes are not an actual indication of quality, only
of popularity. Ultimately, users are responsible for picking an argument, the platform is just a tool to facilitate open
debate as the name conveys.

Each argument is at least a list of reasons plus rebuttals to the reasons of the next most popular argument and rebuttals to
the reason of the next least popular argument. When users click an argument, they should be shown the list of points for that argument and rebuttals to those points by the other two projects. Arguments can also rebut other arguments that are more popular or less popular, but it does not force the other argument to reply. Replying to rebutals is required for arguments that are beside each other in popularity.

<details>
<summary>Rebutal considerations</summary>
Replies are to be made to at least 1 rebutal within 2 weeks or the argument risks being hidden.
This time window feature is very important in order to force discourse. It's very easy to make 1 rebutal and never respond again. Every response to a rebutal must address the rebutal fully. Not addressing a rebutal fully makes the rebutal valid. In that way, points and rebutals can follow a thread type of structure to allow multiple replies and rebutals per point rather than batching all rebutals for a point into one. For less popular arguments, operators are allowed to be leniant about the forced rebutal rule. I'd say if there are more than 5 argument, the bottom 50% won't need to comply with the forced discussion. This is because it's more likely these projects are arguing with bad faith characters and so the operator can use their own prioritization method for rule violation reports.
</details>

<details>
<summary>Bad faith considerations</summary>
It is up to operators how to deal with arguing in circles; if people are arguing in circles it is best to close the rebutal. Arguing in circles usually indicates one party is not acting in good faith. Rebutals can be reported as irrelevant and will shadow ban
the user. Shadow ban in this context means that the user will see the platform as if their action was valid.
</details>

I think that's the overview of an open-debate platform. I will now talk about some unordered technical aspects.

### Vocbulary and Models

### Merge Request

A merge request is a request by a user to add a point or rebutal to an argument. Merge requests can only be
merged be maintainers and should support informal discussions.

### Argument

An Argument is described simply as a repository containing the following.

Topic Question: What is the topic the argument is answering to?

Title or Main Point: A response to the topic question

(Supporting) Reasons: A list of points supporting the argument and main point

### Reason or Point

A single reason that supports the arguments thesis. A point can have upvotes but every
edit or deletion resets the upvote to 0 and thus removes proponents of the argument.
An argument's star count is equal to the sum of upvotes of its reasons which is also the number of propronents.

### Operator

An operator is the entity that hosts the platform and thus has a lot of power.

### User

A user is defined as having the ability to login and use the platform linking
their userid to their activities on the platform. Platforms
are not required to mandate user accounts in order to partcipate in [discussions](#discussions).

For the article there are: operators, users, (argument) maintainers, (argument) author.

### User::Contributed

Any user that modified an argument or had their modifications merged in.

### User::Maintainer

A maintainer is a user who has the ability to edit. Authors are considered maintainers but
not vice versa. To make a user a maintainer of an argument requires 75% of maintainers to vote.
There can only be up to 10 maintainers including the author.

### User::Proponent

A user is considered a proponent of an argument if they've upvoted a reason of the argument or are a maintainer for an argument.
Only reasoning points of the argument can be upvoted and a user is no longer a proponent if the point they upvoted
gets modified or deleted.

### User::Author

A user that started the argument. They have the power to delete the argument if there
are less than 100 proponents of the argument. All authors are considered a maintainer.

### Discussions

Discussions are informal communication features. They should be at least included for each argument, and each arguments merge requests.
Responses in dicussions are called comments.

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
