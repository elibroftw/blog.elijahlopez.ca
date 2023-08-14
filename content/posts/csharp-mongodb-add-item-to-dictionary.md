---
title: "C# MongoDB Add Item to Dictionary"
date: 2023-08-12T11:12:03-04:00
draft: false
tags: [
    "programming",
    "tutorial",
    "c-sharp",
]
---

To add an item to a Dictionary field in a MongoDB collection - say `JoinRequests` of the `Ride` collection - treat the dictionary field an array and utilize the `$push` operator. I do not like the k, v extra outlining, but this is the only way I found that works with dots in the key. If you find an atomic way that can treat the dictionary as a Document and
not as an array of documents, please let me know.

Here is an example.

```cs
using Microsoft.Extensions.Options;
using MongoDB.Driver;

class Ride {
    // ..
    [BsonDictionaryOptions(DictionaryRepresentation.ArrayOfDocuments)]
    public Dictionary<Email, Passenger> Passengers { get; set; } = new();
/*
{
    "Passengers": [{ "k": Email, "v": Passenger }]
}
*/
}


public async Task<bool> AcceptJoinRequest(string rideId, string driver, string user) {
    var updatePull = Builders<Ride>.Update.Pull(r => r.JoinRequests, user);

    var update = updatePull.Update.Push(r => r.Passengers, new KeyValuePair<string, Passenger>(user, new Passenger()));

    var res = await _ridesCollection.UpdateOneAsync(x => x.Driver == driver && x.Id == rideId && x.JoinRequests.Contains(user), update);
    return res.IsModifiedCountAvailable && res.ModifiedCount > 0;
}
```
