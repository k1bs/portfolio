---
title: useMemo and memoization
author: Alex
# date: 2020-02-19T23:43:45.262Z
path: /usememo-and-memoization
tags: ['react', 'hooks']
---

# useMemo and Memoization
### You should just use it right?

Anyone else ever worry when they're writing new React code? Ever feel like someone's watching you? Ever having a lingering dread, a feeling as if your very life is being gripped by the throat, all just because of a small possibility of awakening the dreaded _Extra Render_, a Lovecraftian horror so despicable that mortals can't-

No? Just me?

Well, regardless of how much sleep you've lost, you can rest well knowing that the React team has our back. Recently a new weapon in the fight has arisen: the `useMemo` hook.

So, we should just use it everywhere all the time, right?

### About performance

Okay, so it's easy to get worried about performance in React. There's stuff happening in the background that you can't touch, and you just have to _trust_ that it's doing the right thing. I barely trust my Roomba not to hunt me in my sleep.

