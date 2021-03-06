import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
## Introduction

The U.S. [election system](/all-elections) is complicated, and the presidential election maybe most of all. When you vote for president, you’re actually not voting for the candidate. You’re voting for the President’s party’s electors to get to cast their votes. In most states, these electors' names don’t even appear on the ballot, so it sure looks like you’re voting for presidential candidates. But confusingly, that’s not how it works.

So, who are the electors, and how does this system work? Let’s straighten it out.

## How the electoral college works

The electoral college is an indirect voting system. Voters vote for electors, and then electors vote for the president. There are 538 total electors spread across 50 states plus Washington, D.C. A candidate needs 270 elector votes (the majority) to win the electoral college -- and the presidency. 

### Who are the electors?
Each political party selects its own group of electors in each state. This is a lot like a primary election in that it's the parties nominating their preferred candidates for the positions. They usually nominate governors, state and local elected leaders, important local figures, and so on. Unless you’re very interested in local and state politics, you wouldn’t have heard of most of electors. They don’t get much attention. 

In most states, when you vote for president, you’re actually saying which group of electors you want to vote for president. For example, voting for the Democratic candidate really means, “I choose the group of electors picked by the Democratic Party to vote for President.” In most states, electors’ names don’t even appear on the ballot, so this might sound very confusing -- but it’s true. 

There are 2 exceptions to this way of doing things. Maine and Nebraska use [the district method](http://archive.fairvote.org/e_college/me_ne.htm). Instead of adding up all the votes in the whole state to decide which group of electors get to vote, they divide the state into “districts.” The party that wins each district gets an electoral vote, and then the winner of the overall vote gets 2 more votes. 

You might sometimes hear this called proportional representation, but it only sort of is. Many people feel that [a true proportional representation system](|https://www.fairvote.org/how_proportional_representation_elections_work) would be an improvement over the current electoral system. 

## Do the electors really pick who I voted for?
Almost always. Lots of states have laws that [require electors](https://tropicsofmeta.com/2013/09/16/how-do-different-states-allocate-their-electoral-votes/), to vote for whichever candidate won the popular vote in your state, vote for whomever they’ve sworn to vote for, or toss out faithless electors’ votes. 

A faithless elector is someone who doesn’t vote for their party’s nominee for president. It’s worth noting that there have been very few [faithless electors throughout American history](http://www.latimes.com/nation/la-na-faithless-electors-2016-story.html), especially given the total number of electors. 

## How many electors does my state get?
Each state gets 2 electors plus the number of representatives they get in the House of Representatives. Washington, D.C. also gets 3 electors, even though they don’t have any representatives in Congress. 

[Here’s a list of how many electors each state gets](https://www.archives.gov/federal-register/electoral-college/allocation.html). 

## The electoral college is a little controversial

Not everybody likes the electoral college. One reason for this is that you can win most of the votes for president and still lose the election. This happened in 2016, for example, when Democrat Hillary Clinton received 3 million more votes than Donald Trump, who was the official winner.

But dissatisfaction with the electoral college isn't a recent phenomenon. Americans keep changing it and trying to improve it.

In 1804, Congress passed [the Twelfth Amendment](/amendments-eleven-to-twenty-seven), which corrected a problem with the electoral college where whoever came in second in the presidential voting became vice president. Since the parties vigorously disagree with each other, you can imagine how that might have (not) worked out.  

In 1951, Washington, D.C. got the right to vote for president (i.e. got 3 electoral votes). Before then, D.C. residents had no say. 

Originally, state legislatures got to pick the electors. Today, as we learned, parties nominate electors and the voters pick which party’s electors get to vote. 

States continue to pass laws tying electors’ votes to their constituents’ overall vote. This is kind of like saying, “You only get to do what the people in the state tell you to do.” Taking away electors’ choice is about as close as you can come to removing electors without doing away with the system completely.

Finally, there’s the [National Popular Vote Interstate Compact](https://ballotpedia.org/National_Popular_Vote_Interstate_Compact), which hasn’t been implemented yet, but which has gained support recently. States that have signed on have pledged that their electors vote for whomever wins the national popular vote. When enough states sign on that they control 270 electoral votes, we’ll basically have a national popular vote system (since getting 270 votes means you win the presidency). 
`

export default function ElectoralCollege() {
    return (
    <ReactMarkdown
  source={markdown}
  escapeHtml={false}
/>
    )
}