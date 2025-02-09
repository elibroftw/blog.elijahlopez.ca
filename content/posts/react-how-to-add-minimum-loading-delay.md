---
title: "React How to Add Minimum Loading Delay"
date: 2025-02-09T16:31:59-05:00
draft: false
tags:
  - programming
  - react
  - javascript
  - computer-science
  - tutorial
---

One of the tasks at work this past week was to show a spinner for a minimum duration when data fetching.

Assuming that you have a way to know whether the Promise result is still pending (i.e. a loading state that either you manage or is already managed), you can call the [useThrottledValue](https://mantine.dev/hooks/use-throttled-value/) hook from Mantine or the [useThrottle](https://usehooks.com/usethrottle) hook from use-hooks to add a minimum delay when the variable changes. Unlike most solutions to this problem, the solution I've come up with has three crucial differences.

1. Library independent. This solution does not require you to modify how you data fetch. It only requires that you already have a loading state, which is a fair assumption since the problem calls for modifying the loading state!
2. The loading state is not delayed further than the minimum duration. (i.e. if a Task takes `threshold  + 100ms` to resolve, the delay will be equal to `threshold + 100ms`, and not `threshold + 100ms + delay`). For example, [this blog post](https://web.archive.org/web/20220924222141/https://humble.dev/creating-a-nice-loading-button-with-react-hooks) from 2019 (~6 years ago) that uses setTimeout without considering an async data fetch in-between.
3. The loading state is not delayed when being set to true. Although [@iliasbhal](https://github.com/TanStack/query/discussions/6905#discussioncomment-10472806) first came up with the solution to control the delay outside of a library using a throttle hook, it would work not only when data fetching is completed but also  when data fetching is initiated. This is an oversight in my opinion since from a UX perspective, we want to show the loading state immediately but want to delay early resolves. Of course wen the UI changes from empty &rarr; something, one can argue this solution isn't necessary, but this tutorial is for those who already figured out they want a minimum loading delay.

```ts
// ...
const { loading: accountLoading, ... } = DATA_FETCHING_ABSTRACT;  // something returned by TanStack's React Query or a custom useAsync hook
const accountLoadingDelayed = useThrottledValue(accountLoading, accountLoading ? 400 : 0);
// ... show loading animation in JSX
```

Yep the solution is this elegant.
