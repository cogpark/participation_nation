import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# What's a Republican

## Quick summary

1 of the 2 major political parties in U.S. politics today. Republican politicians tend to be a blend of religious and economic conservatives. This means they they argue for fewer taxes and less restrictive financial regulations. However, they also argue for laws restricting sexuality and values that don’t align with traditional Christian values. 

5 things Republicans ran on in 2016:
Lower taxes for businesses
Renegotiate trade agreements with other countries
Open public lands to oil production
Spend less on healthcare and Social Security
Laws that recognize marriage as only between 1 man and 1 woman

Republicans’ vision for the U.S.

Republicans want a society characterized by limited government and Christian values. The laws and policies they favor try to reduce the size and influence of government. For example, they want to get rid of rules that affect large financial corporations and banks. They want to reform or even abolish the IRS (the government agency in charge of tax collection). They also want to make it easier for companies to drill for oil and mine coal. 

They’re also a party that thinks Christianity should have a bigger influence on U.S. government and life. For example, their platform argues that abortion violates the Fifth Amendment in the Bill of Rights (that nobody should “be deprived of life, liberty or property” without fair treatment under the law). It also argues that publicly displaying the Ten Commandments is protected under the First Amendment, which protects free speech. (The Supreme Court has ruled that you can’t do this.) They also call for laws limiting marriage to 1 man and 1 woman. 

Republicans also often argue for spending cuts, including on healthcare (Medicare), government-funded food (SNAP Benefits/food stamps), and Social Security (money you get after you retire). 

Party conflicts
President Trump ran on a several issues that run directly counter to traditional Republican values. First, President Trump promised not to cut healthcare--in fact, he said he’d expand it. He also argued against free trade, which many Republicans are for. More recently, he’s tried to advance a few laws limiting guns or gun accessories, which many Republicans feel threaten their Second Amendment rights. 

President Trump has caused a lot of upheaval within the Republican Party. He doesn’t particularly care about making the government smaller, and he’s also not a crusader for Christianity. Since he’s been in office, the Republican-controlled congress has mostly worked on traditional Republican laws. For example, they’ve tried to reduce healthcare spending, they’ve passed a tax cut that benefits big financial corporation, and they’ve cut regulations on banks. However, Trump is much more popular than the rest of the Republican Party--so it’s not clear how things will change in the next elections. 

`

export default function WhatsARepublican() {
    return (
    <ReactMarkdown
  source={markdown}
  escapeHtml={false}
/>
    )
}