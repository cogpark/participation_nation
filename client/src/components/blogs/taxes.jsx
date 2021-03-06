import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
## How do taxes work?

### Introduction
Taxes are controversial, and they should be. The government – a massive, powerful organization that commands the most technologically advanced army in history – takes your money and does stuff with it. They don’t ask you if you’re okay with what they’re doing or how much they’re taking – at least, not directly. Governments make wars, buy expensive medical care, contract with private businesses, build stuff, and employ people. Citizens tend to have strong opinions about which of these things are cool and which aren’t. 

This is why taxes have been at the heart of so many revolutions. You might know that one cause of the U.S. Revolution was [“taxation without representation”](https://www.awesomestories.com/asset/view/TAXATION-WITHOUT-REPRESENTATION-American-Revolution-Highlights). It was also a big part of [the French Revolution](https://www.revolutionspodcast.com/2014/02/018-the-stamp-act.html). It was a major cause of [the 13th century revolt in England that lead to the Magna Carta](https://www.salisburycathedral.org.uk/magna-carta-what-magna-carta/key-clauses-magna-carta). Wikipedia has a whole list of [“acts of tax resistance”](https://en.wikipedia.org/wiki/List_of_historical_acts_of_tax_resistance) – and it is long. 

On top of this, taxes are confusing. There are a lot of them, and you have to be an expert to understand exactly what many of them do. There are entire industries dedicated to helping people pay taxes. In fact, taxes should probably be _more_ controversial than they are. 

Let’s unpack them.

### First: What are taxes
Taxes are money you contribute to your governments. You pay taxes to the federal government, your state government, and your local (town/city) government. 

There are many types of taxes: income, sales, property, imports, capital gains, and more. Here’s a few you should probably be familiar with.

#### Property taxes
Taxes you pay if you own a home (and sometimes a business). The amount varies across the U.S., but is always a percent of the home’s (or building’s) value.

Property taxes often fund local schools. Lots of people have [a problem with this](http://www.ncsl.org/research/education/funding-approaches-the-property-tax-and-public-ed.aspx); if you live in a wealthy town where property values are higher, then property taxes result in more money for schools. This means that schools in places where people make lots of money tend to be better funded than in poorer communities. Also, if you don’t have kids, you might wonder why you have to pay for everyone else’s education. 

#### Income taxes
These are taxes you pay on money your job pays you. The percent the government takes out of your paycheck goes up as you make more money. These are called tax brackets or marginal tax rates. This sounds complicated, but it’s a crucial part of how taxes work.

What happens is this: your income taxes start with a “base” percent. In 2018, it was (basically) 10% of the money you made. On top of this base is a series of “brackets.” Each bracket has a different tax rate that applies to the money in that bracket. 

For example, imagine the U.S. had 3 different tax brackets: 
* 10% for $10,000
* 20% for 20,000
* 30% for 30,000. 

The first $10,000 you make is taxed at 10% – bracket 2. The next $10,000 is in bracket 2 and is taxed at 20%. And the last $10,000 is 30%. 

In reality, it’s [much more complicated](https://www.nerdwallet.com/blog/taxes/federal-income-tax-brackets/), but that’s the general idea. Some people argue for “flat tax,” where we all pay the same rate amount no matter how much we make. It’s true that that would be simpler. It would also be much more beneficial for people making much more money. The reason for this is, we currently tax higher amounts of income at higher rates. So a flat tax wouldn’t change how much you pay if your income is low, but it would save you a lot if you make a lot.

Trivia fact: We didn’t have an income tax until 1913, when [the 16th Amendment passed](/amendments-eleven-to-twenty-seven). It’s a fairly new tax technology. However, it’s made possible some very ambitious government programs, such as as Social Security and Medicare. 

#### Social Security and Medicare
Social Security is money the government gives out to older Americans to make sure they have enough after they retire. Since it’s often recommended that you need [more than a million dollars in savings|](https://www.aarp.org/work/retirement-planning/info-2015/nest-egg-retirement-amount.html#quest1) to retire comfortably, you can imagine how Social Security would be important for people who might not’ve had high-paying jobs during their lives, or who haven’t saved enough. Social Security is [the most expensive of all government programs](https://www.thebalance.com/current-u-s-federal-government-spending-3305763). 

Medicare pays for health insurance for the elderly and for people whose health prevents them from working. (As I’m writing this, the U.S. is having a national discussion about if Medicare should pay for everyone’s health insurance, but historically, it’s been for people who are old, ill, or unable to work because of their health.) It’s not as expensive as Social Security, but still among the highest-cost government programs. That said, it [lowers health care costs more than do private health insurance plans](https://www.ajmc.com/newsroom/federal-spending-rises-total-health-expenditures-drops-in-medicare-for-all-plan).

### Other taxes
There are lots of other ways that governments collect money. Here are a few

#### Sales tax
Lots of state and town/city governments add a little extra to anything you buy. Since sales tax is different in every town and state, there’s no general rule about how much more you’ll pay. Some states, like Delaware and New Hampshire, don’t have sales tax at all. 

The federal government does not collect sales tax. 

#### Estate taxes
Both federal and state governments tax property or money you might inherit. 

#### “Sin” taxes
Sometimes governments use taxes as tools to dissuade people from buying products that are bad for them, such as cigarettes and alcohol. Thus, “sin” taxes. 

#### Capital gains taxes
Taxes on investments, such as stocks or real estate.

### Taxes and politics: Redistribution, taxing the rich, managing society
If we had to boil down all the reasons that people get upset or passionate about taxes to one statement, it might be that taxes are a way governments manage societies. 

As we saw, they fund ambitious, expensive programs. Some people don’t want government involved in healthcare. Others feel that profit-driven private companies shouldn’t be anywhere near school or health. 

But taxes also allow governments to influence behavior. One reason you would tax cigarettes is so that smoking becomes an expensive habit, and fewer people do it. You might also give tax breaks for things like solar panels to encourage people to move away from fossil fuels.

Finally, there’s taxing for redistributing money. If you think that the way money is distributed among society is  unfair and/or leaves some people unable to afford basics, you might increase taxes on the wealthy. This allows you to [fund programs like Medicare and Medicaid](https://www.hhs.gov/answers/medicare-and-medicaid/who-is-eligible-for-medicaid/index.html), which serve people who often can’t afford healthcare themselves. 

You might hear capital gains taxes and estate taxes called “redistributive,” since they move money from wealthier Americans to programs that help poorer Americans. 
`

export default function Taxes() {
    return (
    <ReactMarkdown
  source={markdown}
  escapeHtml={false}
/>
    )
}