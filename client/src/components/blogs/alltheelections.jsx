import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# What are all the elections & who/what are they for?

## Introduction
Election Day in always the Tuesday after the first Monday in November (so: between Nov. 2 and Nov. 8). But that doesn’t really explain what happens on Election Day. 

If you’re just getting interested in U.S. politics, you might have noticed that there are a lot of elections--primaries and generals and midterms and specials and more. Here’s a breakdown.

## The most #basic basics:
Elections have in common that they are between candidates. To become a candidate, you usually have to win a political party’s internal election. This is called a primary, and winning a primary means you’ve been nominated by that party.

Then, the candidates who are nominated run against one another in the general election. General elections are operated by state leaders, and not by political parties. It is possible to get on a ballot without a political party’s nomination, but you usually have to jump through all kinds of hurdles (for example, get thousands signatures, raise thousands of dollars to pay fees, etc.). 

## Elections for each level of government: National, state, and local 

There are more or less 3 levels of government, and 3 levels of elections. 

First, we hold national elections for offices that make decisions about the whole U.S. (President, Senators, etc.).

We have state elections for offices that make decisions about each state (Governor, State Senators, etc.).

Last, we have local elections for officers that make decisions about just your town (Mayer, Police Chief, etc.) Local elections don’t make the news very often, but they probably have the biggest influence on your life, because your local officials make rules that affect where you live. 

We vote for all of these levels of government. However, we don't vote for every office each election. This is related to why you'll sometimes hear people talk about "general" or "midterm elections. 

## Different offices up for election = different names for those elections

Across the different levels of government, different offices come up for election at different times. For example, we elect a President every 4 years, but we elect Senators every 6 years and Representatives every 2 years. On top of this, Senators’ terms are staggered. Every 2 years, one third of all Senators are up for re-relection.

The most high-profile type of election is a presidential year election. When you go the polls in a presidential year, you vote for President, Senators, House of Representatives members, Governors, and some local offices.

In the middle of the President’s term are the midterm elections. These are usually not as high profile, but they matter enormously. You’ll vote for Senators, House of Representatives members, Governors, and local offices. So, you’re still voting for people who make the laws, even if you’re not voting for president.

## Ballot questions

Many elections also include _ballot questions_. These are usually about specific state or local laws, policies, or taxes. For example, your state might add a ballot question about expanding Medicaid or legalizing marijuana. Unfortunately, these are often worded confusingly. Your best bet is to try to learn ahead of time that there are ballot questions, and then do your research before going to the polls. 

Some states, like California, send out voter guides to help. 

## One more thing: Special elections

Special elections happen for offices that open unexpectedly. For example, if a Senator gets elected president, that Senator's seat is now open. To fill it, the Senator’s state holds a special election. It might not be anywhere close to a normal day, which is why this election is called "special."
`

export default function AllTheElections() {
    return (
    <ReactMarkdown
  source={markdown}
  escapeHtml={false}
/>
    )
}