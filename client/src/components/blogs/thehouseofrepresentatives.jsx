import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
## What's the House of Representatives?

### Introduction
The House of Representatives is a group of 435 elected political leaders who make and approve new laws. The House of Representatives and the Senate together make up the U.S. Congress. They also make up the "Legislative Branch" of the U.S. government. “Legislative” means “makes laws.

### Representatives

States have different numbers of representatives. The more people live in your state, the more representatives you have. For example, Illinois has 13 million people and 18 representatives, and Montana has 1 million people and 1 representative.

### What does the House of Representatives do?

The House of Representatives main job, along with the Senate, is to make laws. Like the Senate, the House has a bunch of committees, or small sub-groups of its lawmakers. These look over bills and decide if they should make it to the floor so the entire House can vote on them. They also monitor various government agencies and programs. 

The House has a couple of special responsibilities that make it different than the Senate. First, the Constitution says that bills that raise money (e.g. taxes) must start in the House. 

Second, the House is where impeachment begins. Impeachment is basically a trial for government officials, such as a judge or the President, who's been accused of corruption. 

Finally: The House plays a role in deciding disputed Presidential elections. If nobody gets the majority of electoral votes for President, the House picks from the 3 candidates who got the most electoral votes. This has actually happened twice before--first, in 1801, the House picked Thomas Jefferson over Aaron Burr, and in 1825, it picked John Quincy Adams over Andrew Jackson. 

### Important positions in the Senate (i.e. Who’s in charge here?)

First, there’s the Speaker of the House, who sets the agenda, manages debates, and picks representatives for important roles. The Speaker is elected by all the members of the House. This has always meant that the Speaker is from the party with the most House members--the “majority” party. So, the agenda the Speaker sets reflects the values of the majority party.

The Speaker is also next after the Vice President in Presidential Succession (i.e. who becomes President if the President leaves office).

There are a few other important House positions, too. The party with the most seats elects a Majority Leader, and the party with the least seats elects a Minority Leader. (This would be more complicated if there were more parties in Congress, but there are really only 2 with influence, Democrats and Republicans.) The Majority Leader’s job is usually to schedule debates for laws and manage committees. The Minority Leader is the spokesperson for their party. Also, if an election causes the minority party to become the majority party, the Minority Leader has a good shot at becoming Speaker of the house.

Last, each party has a whip. The whip’s job is to make sure that everybody in the party votes the way they’re supposed to. This is called "whipping the votes." Members don't always vote with their parties, but whips try to get them to. Whips are also elected by their parties.

### How is the number of representatives per state determined?

Every 10 years, the U.S. government conducts a census, where they count how many people live in each state. After the census, the government adjusts how many representatives each state gets. The total number hasn’t really changed since 1913 -- the seats are just re-distributed to better reflect how many people live in each state. 

### Salary

House members make the same as Senate members: $174,000 per year. Leaders earn $193,400 per year, and the Speaker gets $223,500.
`

export default function TheHouseOfRepresentatives() {
    return (
    <ReactMarkdown
  source={markdown}
  escapeHtml={false}
/>
    )
}