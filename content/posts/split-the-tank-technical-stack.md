---
title: "Split the Tank Technical Stack"
date: 2024-05-12T20:29:11-04:00
draft: false
tags:
  - split-the-tank
  - programming
---

## Hosting

Azure

After applying to 'Microsoft for Startups', we got free Microsoft 365 (what we used for mail), Azure credits, and more perks.

## Database

The database used was MongoDB via Atlas. The main reason I chose this was because of extensive experience which would save time even if I do know SQL. With MongoDB, there is a focus on agility, as you don't need to think about how the tables will be created and with what columns (In MongoDB, the struct/class is automatically mapped to the Document fields). In a developer team environment however (or in a non-boostrapped startup), I would easily have chosen PostgreSQL. A positive note about MongoDB Atlas is that you can pay using the Azure credits.

One frustration I had with MongoDB + C# classes was dealing with dynamic fields in a sub-document, however I realized later that it's better to make a document for each of those dynamic fields,  make a new ID, and create an index on the old ID.

## Server-Side

The decision to use C# ASP.NET was driven by ease-of-deployment onto Azure. Even with knowledge of Continuous Deployment from the [Software Delivery course](/posts/university/cs-489-software-delivery), Visual Studio's publish is good enough and meets my minimum requirements. ASP.NET also offers superior performance to common web frameworks that I've used/worked with in the past such as Python-Flask, NodeJS-Express, Java-Springboot.

Some alternatives to consider are Actix (Rust), Supabase (JavaScript + Deno), and Vert.x (Kotlin/Java).

A strong reason to still go with ASP.NET is that there is a pretty good starter (for the time) template. I plan on releasing my own template for ASP.NET as I have spent time coding many [adjustments](https://blog.elijahlopez.ca/tags/asp.net/). Until there are maintained templates for the other frameworks, solo developers should use ASP.NET via Visual Studio or my template to get to coding quickly.

In the ideal world where I can pay people to write code, I would instruct developers to setup a Kubernetes cluster that uses Actix and RabbitMQ (a messaging queue is useful for async events). Then these developers can also maintain templates for everyone to use (side project idea for readers).

For solo-developers looking to build for production, I fully recommend using ASP.NET for Web APIs.

One of the issues I believe in the software world is a focus on capabilities and not enough focus on guiding downstream developers to use best-practices including security-related practices such as CSRF protections. This is evident in Flask, the first web framework I learned and use for my personal website. With any web-framework template I plan on releasing, I'm going to ensure that they include security practices so that no one ends up saving plaintext passwords to the database.

## Client-Side

Since Split the Tank would heavily use device features such as location, it was best to focus on native mobile apps and not a progressive web app that may not work. I am planning on adding a basic frontend for people who would only be passengers, however, that was out of scope for the official release.

When deciding the mobile application stack, I was faced with two barriers. One was that I did not have a macbook at the time, so writing both apps natively would most definitely take double the time. Two was that I didn't have experience with Kotlin nor Swift and I did not enjoy Java. I ended up picking UnoPlatform since using C# for everything would be _cool_, however it had a lot of issues and so was a waste of time. I then experimented with Flutter again, however it is still not that good. I then settled on React Native, as I already had React experience. Although I was more productive with React Native than UnoPlatform and Flutter, I still ran into react-native specific issues, and wrote about the [pains of mobile development](/posts/mobile-development-is-painful).

My thoughts after making this app are that mobile apps are too complicated and messy to use frameworks, and that native is the way to go. Writing code twice is not a problem if the developer already owns a Macbook (unless XCode is reverse engineered), and being able to write natively means being able to use best-practices set by the platforms as well as the documentation provided. For Android, this would be Jetpack Compose and for iOS, it would be SwiftUI.

Personally, I won't be writing non-commercial apps for iOS in the future. I have plans to make apps regarding Monero, however, I strongly prefer my Razer Blade 14 (2022) over my Macbook Air M2, and I don't really like Apple anyways!

## Deployment

We deployed the ASP.NET application to Azure App Service via Visual Studio's publish. The project is initialized with a Dockerfile and offers to create a GitHub action workflow, however it's a task to do in the future.

## Email

We used Postmark for sending emails. This is mostly because it's highly recommended and is the most affordable.

## Peer-to-Peer Payments

This is incredibly hard to do for low-amount payments. Stripe has  the Connect solution, however we have to pay a monthly fee for each verified account and for simply moving money within Stripe. All on top of the processing fees. Any commission we would take would be unsustainable and make the app unattractive to use.

Furthermore, Stripe's Connect feature only applies intracountry unless the host country is the USA. This would make the rollout to USA even more difficult.

The alternative considered is PayPal, however there isn't a guarantee it will work and the decision was months after the app was in the testing phase. We decided that payments wasn't that important as the off-app settlement should be good enough for the MVP as the app still provides a valuable feature.

## Closing Thoughts

Developing is hard. It should be more enjoyable and that is definitely something I can improve.
