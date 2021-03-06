import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
## What’s the Senate?

### Summary
The Senate is a group of 100 elected political leaders who make and approve new laws. The Senate and the House of Representatives together make up the U.S. Congress. They also make up the "Legislative Branch" of the U.S. government. “Legislative” means “makes laws.” 

### Senators

Each state elects 2 senators to 6-year terms. The terms are staggered so that no state is ever voting for both senators at the same time. Collectively, the U.S. holds elections for about 1/3rd of the Senate. 

Senators are elected by popular vote (i.e. the person who gets the most votes wins). This wasn’t always true; before [the 17th Amendment (1913)](/all-the-amendments), state governments picked Senators for their states. 

The fact that each state gets 2 senators is an important part of how Congress works. This means that a state like Montana, population 1 million, has the same say as Texas, population 28 million, in Senate votes. This isn’t true in the House, where Montana has 1 Representative and Texas has 36. Not everybody's pumped about this; some interpret it as meaning that voters in low-population states have a disproportionate say over what the U.S. government does. Washington, D.C. and U.S. territories such as Puerto Rico don’t have Senators. 

## What does the Senate do?

The Senate shares lawmaking responsibilities with the House of Representatives. That said, the Senate does have some special powers. 

Probably most important is that they approve or reject judges that the President nominates for the Supreme Court. They also approve or reject nominees for the President’s cabinet, such as the Secretary of State and the Secretary of Education. ([Want to know more? Here’s a lot of info on Senate nominations](https://www.senate.gov/artandhistory/history/common/briefing/Nominations.htm.))

The Senate also approves or rejects treaties with other countries. 

### Important positions in the Senate (like, who’s in charge)

The official leader of the Senate is the Vice President. When there’s a tie vote (50-50), the VP gets to cast the tie-breaking vote.
There’s also the Senate Pro Tempore, which is actually a pretty important position, since it puts you 3rd in line to be President. (“Pro Tempore” just means “for the time being.”) This person is usually the longest-serving member of whichever party has the most senators.

A couple other positions matter too, though they’re not in the Constitution. First, there’s the majority and minority leaders. These are elected by the party with the most and the fewest seats respectively. They set the agendas for their parties: They decide what to fight for and what goals to pursue. For the majority leader, this usually means which laws the party will try to pass. For the minority leader, it often means how they will stop laws from being passed.

There’s also majority and minority whips. The whip’s job is to “whip” the votes, to make sure that everybody in the party votes the way they’re supposed to. This doesn’t mean that members always vote the party line, but whips try to get them to. Whips are also elected by their parties.

### Salary
Senators make $174,000 per year. This sounds like a lot, but lots of people who work in private businesses in positions as high-ranking as U.S. senator make a lot more. There are dozens millionaire senators, all of whom made their money elsewhere. 
`

export default function TheSenate() {
    return (
    <ReactMarkdown
  source={markdown}
  escapeHtml={false}
/>
    )
}