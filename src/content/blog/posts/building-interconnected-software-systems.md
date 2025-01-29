---
title: "Building Interconnected Software Systems"
date: "2025-01-28"
excerpt: "What do bikes and software have in common"
tags: ["Software Engineering"]
---
# Building Interconnected Software Systems

Have you ever ordered a bike online?

If you haven’t, don’t be surprised when you receive a bunch of parts to a bike and not the nice picture you saw online.

In fact, you may even begin to question what the hell you bought. Did you buy a bike or did you just buy a bunch of random parts? 

Looking at these parts separately you might see a wheel, some handle bars, a bike chain and all the rest of the parts that compose a bike, but these parts alone don’t unlock any of the functionality or value that a bike provides.

You can’t ride this box of parts to work, or use it to exercise (well maybe if you get creative). 

You know that in order for the bike to function you have to properly build it, but that's not an easy task. There’s a lot of parts in that box and they all need to work together perfectly for you to be rolling down the street on your “bike”.

Individually all those parts are just a bunch of parts, but when properly put together in a way that they all compliment each other and work together, you get a bike.

This concept exists in building software as well. 

It's really easy to write a function that takes user input, processes it, and spits out some output, but as the requirements of your system get more complex, and you start to think about scale and user experience, it becomes increasingly difficult to have all the various components work as one.

To illustrate this concept, let's break down the workflow for an application that helps you flush out a pitch deck for business ideas.

1. The user inputs whatever content they have for their idea (word document, pitch deck, summary, etc)
2. The system looks for the following criteria: summary of the idea, founding team member information, business model and current status of the idea.
3. To enrich its knowledge and paint a complete picture, it queries the user to provide specific additional information that is either incomplete or missing from their original input.
4. The user then inputs this information.
5. The system takes all the context it has and creates a custom pitch deck in the form of a PowerPoint for the future founder to use.
6. The founder can repeat this process to enrich their results.

If you were to build each step of this workflow in isolation, it would seem quite easy. Step 1 is an input form that sends data to the backend. Step 2 is an API call to some AI model that helps identify gaps. Step 3 is yet another API call. I think you get the idea.

As simple as this sounds, there’s many intricacies that may not initially cross someone’s mind. 

For example:

- **Step 1**: What data structure(s) will be used to store this information in a way that’s consistent, yet works for many users?
- **Step 2**: When processing the data, will this/these data structure(s) change, if so how?
- **Step 3 + 4**: How will our application know which queries and added context correspond to the different sections mentioned in step 2?

Without these considerations, your intended application will just be a bunch of random data floating around the backend with no way to use it in a purposeful way.

Components that need to work together should be thought of as one system and should be designed as such. 

This is where the magic happens and when the true value of a software is unlocked.
