import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
## How to register and vote if you recently moved

### Introdution

*Note:* This is about moving between states. If you need to know about moving overseas, check out the [Federal Voter Assistance Program](https://fvap.gov).

If you’ve recently moved states, you might be wondering where you should vote: Should you register in your new state before the deadline? Should you vote in your old state? Will they take your name off the voter roles in your old state?

The answer to these questions is usually, “it depends.” Since voting differs so much state-by-state, you might have to do a little research to figure out what the best things to do are.

Here are the steps you'll need to take to figure out if you can vote. We’re assuming you have a place to live in your new state, and that you can prove it (with a piece of mail or your new state’s driver’s license, etc.).

### Learn when the registration deadine is
You can use our [voting information lookup tool](/), or you can Google it--but figure out when your new state's registration deadline is.

If you move to a new state after the registration deadline has passed, you won’t be able to vote in the new state unless it has a rule where you can register and vote in person on voting day. If that’s the case, you should make sure you have whatever ID you need. 

### Learn if your new state has a residency duration requirement. 
There might be a rule that requires you to have lived there for 30 days before you can vote. If so, you should wait until the next election to register there.

### ID requirements
Find out what identification, if any, do you need to bring to the polls, and if you have time to get it. (We list ID requirements for every state on our [voter information lookup tool](/)).

### Find out where you vote. 
If you live in Washington, Colorado, or Oregon, you’ll get a ballot mailed to you. For all other states, you’ll need to figure out where to go. There are lots of ways to do this, but we suggest finding your Secretary of State’s website. They usually have this information available.

### Removing your name from your old residence’s voting rolls

You can get in touch with your old local election official or board of elections. They may also get in touch with you when they're clearing their roles at some point in the future 

`

export default function JustMovedVoting() {
    return (
    <ReactMarkdown
  source={markdown}
  escapeHtml={false}
/>
    )
}