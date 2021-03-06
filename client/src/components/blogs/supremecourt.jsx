import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
## What's the Supreme Court?

### Introduction

The Supreme Court is the most authoritative court U.S.. It consists of 9 Justices whose combined judgment is a key part of how our government works. 

You might remember from school that the Supreme Court is responsible for “checking” the other branches of government. This means it makes sure that laws and orders that the President and Congress issue are legal. It also has last say on other cases in the court system. 

Sometimes,you’ll hear people refer to the Supreme Court as SCOTUS, which stands for Supreme Court of the United States. 

### What’s the Supreme Court do? 

The Supreme Court hears about [100 cases a year](https://www.supremecourt.gov/about/justicecaseload.aspx), though it gets thousands of requests. Many of these come from lower court decisions that the loser is appealing. [Our national court system](https://www.justice.gov/usao/justice-101/federal-courts) has 3 different levels, of which the Supreme Court is the “highest,” or has the most authority.) 

Lots of people appeal court cases, but the Supreme Court only hears cases that most of the Justices are interested in. These cases often have really important consequences for the society. For example, Miranda v. Arizona (1966) is the reason cops do the “You-have-the-right-to-remain-silent” bit every time they arrest somebody, and Loving v. Virginia in 1967 prevented states from making laws against interracial marriage. 

The Supreme Court also does something called "judicial review," which you’ll hear a lot about if you follow politics. Judicial review is when the Court decides if a law that Congress writes or an Executive Order the President issues is legal or not. 

Judicial review causes some controversy. You’ll sometimes hear people call it “legislating from the bench,” which means they think the Supreme Court is actually making law, not deciding if something is legal. The idea is that instead of deciding if something is Constitutional or not, the Supreme Court decides if it agrees with the law or or order. 

For example, imagine that Congress passes a law that gets rid of speed limits. You can now drive as fast as you want on any road, and no state can make a law that says otherwise. But then, the Supreme Court decides to review the law, and decides it violates [the 10th Amendment](/bill-of-rights). If you’re passionately opposed to speed limits, you might think the Supreme Court is making a decision about what should be law. 

Beyond appeals cases and judicial review, the Supreme Court also decides disagreements between states and between ambassadors, and it hears some military cases.

### The Justices

Right now, there are 9 Justices on the Supreme Court. You get to be a Justice if the President picks you and the majority of the Senate approves you. Then, once you are a Justice, you get to be one as long as you want -- until you die, even. Justices serve for life. 

Interesting fact: The Constitution doesn’t actually say that the Supreme Court has to have 9 Justices. In fact, the official number has changed 6 times over the course of our history.     
`
export default function WhatsTheSupremeCourt() {
    
    return (
        <ReactMarkdown
            source={markdown}
            escapeHtml={false}
        />
    
    )
}