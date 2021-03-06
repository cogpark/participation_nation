import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = 
`
## What's a Democratic Socialist?

### Summary

The Democratic Socialists of America is an American socialist organization. They consider themselves an organization, not a political party; that said, one of their goals is getting Democratic Socialist candidates elected to office. As their name suggests, they combine 2 ways of thinking about society (including politics). As democrats, they think society should serve the public good. As socialists, they want to get rid capitalism. Until very recently, the Democratic Socialists haven’t had much of an influence on U.S. politics.

Democratic Socialists tend to vote or even run for office as Democrats, since that’s the best way for them to get influence changes. However, being a Democrat doesn’t make you a socialist. You can think of democracy as a way to set up a government, and socialism as a way to organize the economy (who owns what, how money is spread around, etc.)

### 5 important positions Democratic Socialist positions 
* Healthcare for every American and replacing private health insurance with public
* Uniting workers in unions so that they have more power to negotiate for salaries, benefits, etc.
* Making sure unions have plenty of power to negotiate with big companies and the government for salaries, benefits, etc.
* Businesses owned by workers (“co-ops”) who share profits 
* More land and resources owned by the public (not individuals or private companies)

### Democratic Socialists’ vision for the U.S.

Democratic Socialists’ long term vision for the U.S. is to end capitalism. This would mean a lot of major changes to how we live and work. In a socialist system, companies are owned and run by groups of workers. They share profits and decide as a group how to run the company. You can see how this would be different than our current system, where a company’s owners make the decisions and keep as many of the profits as they can. 

In general, a socialist system means more limits on how much stuff or land any person could own and how much money they could accumulate. Socialist systems also usually mean much stronger social safety nets: everybody should be able to have food, housing, healthcare, etc. This also means that everyone who lives in a socialist society have to provide the money or means by which everybody gets food, housing, and healthcare.

We already have some “socialist” ideas in today’s U.S. society. Medicare, Medicaid, and the Children’s Health Insurance Program are government-funded healthcare. To pay for them, the government collects taxes from everybody and uses that tax money to pay for healthcare for old people, children, and poorer Americans. And some U.S. companies are completely employee-owned--King Arthur Flour, for example.

### Conflicts within the organization

While most Democratic Socialists agree that capitalism is bad, they disagree over how aggressively to dismantle it and what to replace it with. For example, currently, most U.S. healthcare is paid for by privately-owned businesses. DSA members might agree that it's bad for people to profit off healthcare, but disagree over if the solution is for government to take over vs. a collaborative of workers. 
The same goes for other key institutions that tend to shape our society, such as education, childcare, and energy production. 

The DSA also has some of the same internal disagreements that major U.S. political parties do: How should it distribute resources, which candidates should it try to elect and where, and is it better to push for a national strategy or foster grassroots movements. 
`



export default function WhatsADemSocialist() {
    return ( 
        <ReactMarkdown 
        source = {markdown}
        escapeHtml={false}
        />
     );
}
 