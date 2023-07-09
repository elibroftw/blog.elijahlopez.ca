---
title: "C# MongoDB Add Item to Dictionary"
date: 2023-07-09T11:12:03-04:00
draft: false
tags: [
    "programming",
    "tutorial",
    "c#",
]
---

To add an item to a Dictionary field in a MongoDB collection - say `JoinRequests` of the `Ride` collection - treat the dictionary field an array and utilize the `$addToSet` operator.

Here is an example.

```cs
using Microsoft.Extensions.Options;
using MongoDB.Driver;

public async Task<bool> AcceptJoinRequest(string rideId, string driver, string user) {
    var update = Builders<Ride>.Update.Pull(r => r.JoinRequests, user).AddToSet(r => r.Passengers, new KeyValuePair<string, Passenger>(user, new Passenger()));
    var res = await _ridesCollection.UpdateOneAsync(x => x.Driver == driver && x.Id == rideId && x.JoinRequests.Contains(user), update);
    return res.IsModifiedCountAvailable && res.ModifiedCount > 0;
}
```
