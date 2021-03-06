import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
## Eleventh Amendment 

Federal courts can’t hear and make rulings in lawsuits where a state is sued by someone who lives in another state or country. For example, if you live in New Jersey and sue Pennsylvania, a federal court can’t take up your lawsuit. 

Ratified in 1795.

[Read the actual text of the 11th Amendment](https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_11_(1798))

## Twelfth Amendment

Corrects a flaw in our “Electoral College” system, which is how we elect our president and vice president. (See below if you’re not sure how this works.) The Twelfth Amendment says that each elector will cast 1 vote for president and 1 for vice president. Previously, each elector just cast 2 votes, and the overall winner was president and second place was vice president.

What’s the Electoral College? It’s a pretty complicated system, but it basically comes down to this: Every state has “electors,” who are people who officially elect the president. When you vote in a presidential election, you’re telling your state’s electors who you think they should vote for. 

There are 538 total electoral votes, and you need 270 to win. If there’s ever a tie between candidates (269 to 269), or if 3 or more candidates split the vote and nobody gets to 270, the House of Representatives gets to pick the President of the U.S. 

Electors normally vote for whichever candidate wins the most of their state’s votes. (There’s currently a movement to require that electors vote according to their state’s popular vote.) There have been a few occasions when electors go rogue and disregard the popular vote, but it’s never affected an election’s outcome. 

Ratified in 1804.

[Read the actual text of the 12th Amendment.](https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_12_(1804))

## The Thirteenth Amendment

Slavery is illegal, except as punishment for a crime. (Yes, that last part really is in there.)

Ratified in 1865.

[Read the actual text of the 13th Amendment.](https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_13_(1865))

## The Fourteenth Amendment
This Amendment was passed right after the Civil War and does 4 separate things.

The citizenship clause says that anyone born in the U.S. is a citizen. This was a big deal when it passed, since it meant that black people born in the U.S. were citizens. The Amendment also says that once you become a citizen, the government can’t take your citizenship away.

The due process clause guarantees that the government can’t take away your First Amendment rights without “due process” (or a trial by a jury of citizens).

The equal protection clause says that states are supposed to protect all their citizens equally. It seems to have been written to protect blacks from discrimination after the Civil War. Unfortunately, it was written vaguely enough that it didn’t fully accomplish this. 

The privileges or immunities clause confirms that you get certain rights no matter what state you’re in. For example, you’re allowed to buy land in another state, and your free to enter and leave other states. This is actually a really complicated one, but it helps to remember that the Fourteenth Amendment was passed in 1868, right after the Civil War, when former Confederate states were passing laws that restricted the rights of ex-slaves. 

[Read the actual text of the 14th Amendment.](https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_14_(1868))


## The Fifteenth Amendment
Gives black men the right to vote. 

Read the actual text of the 15th Amendment
https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_15_(1870)


## The Sixteenth Amendment

Congress can tax your income (i.e. money your jour job pays you). 

Read the actual text of the 16th Amendment
https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_16_(1913)


## The Seventeenth Amendment
Senators are elected by popular vote. Previously, state legislatures had elected to them. 

Read the actual text of the 17th Amendment
https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_17_(1913)

## The Eighteenth Amendment
Made alcohol illegal. This is called Prohibition. Wondering why we drink alcohol if Prohibition happened? Check out the 21st Amendment.

Read the actual text of the 18th Amendment
https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_18_(1919)

## The Nineteenth Amendment
Gives women the right to vote.

Read the actual text of the 19th Amendment
https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_19_(1920)

## The Twentieth Amendment
Does 2 things. First, moves the date on which Congress, the President, and the Vice-President’s terms ended. It had been in March, and after the 20th, it was in January. Elections would still happen in November. This meant that there was much less time between when the new Congress was elected and the old Congress left. (The time between elections and the old Congress leaving is called a “lame duck” session.)
  
The 20th also says that if the President dies or leaves office, the Vice President takes over. Before the 20th, there was no official rule about what should happen.

Ratified in 1933.

Read the actual text of the 20th Amendment
https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_20_(1933)


## The Twenty-first Amendment
Made alcohol legal again. Prohibition wasn’t working so well. 

Read the actual text of the 20th Amendment
https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_21_(1933)

Ratified in 1933.
## The Twenty-second Amendment
You can only be elected President twice.

Ratified in 1951.

Read the actual text of the 22nd Amendment
https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_22_(1951)


## The Twenty-third Amendment

People who live in Washington, D.C. can vote in Presidential elections

Ratified in 1961.

Read the actual text of the 23rd Amendment
https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_23_(1961) 

## The Twenty-fourth Amendment

States can’t make people pay to vote in national elections. During the 19th and 20th centuries, some states had “poll taxes” that made it much harder for poorer people to vote. In many cases, these poll taxes were meant to prevent black people from voting. 

Ratified in 1964.
Read the actual text of the 24th Amendment

https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_24_(1964)

## The Twenty-fifth Amendment
Clears up what happens if the President and/or Vice President can’t serve for whatever reason -- death, mentally unfit, etc. It affirms that
If the President dies, the Vice President becomes President
If the Vice President leaves office, the President nominates a new one that Congress must confirm
If the President can’t do the job of being President for whatever reason, the Vice President takes over

Ratified in 1967.
Read the actual text of the 25th Amendment
https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_25_(1967)

## The Twenty-sixth Amendment
Sets the age you can vote at 18. 

Ratified in 1971.
Read the actual text of the 26th Amendment
https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_26_(1971)


## The Twenty-seventh Amendment
When Congress votes to raise or lower how much its members get paid, those changes don’t go into effect until the next session of Congress begins. 

Ratified in 1992.
Read the actual text of the 27th Amendment
https://www.senate.gov/civics/constitution_item/constitution.htm#amdt_27_(1992)
`

export default function AllAmendments() {
    return (
    <ReactMarkdown
  source={markdown}
  escapeHtml={false}
/>
    )
}