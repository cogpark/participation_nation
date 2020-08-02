import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
## Conservative

### Summary
Conservatives in the U.S. today generally hold at least 1 of 3 political positions. First, they could be religious conservatives who believe Christian values should inform how we shape society. Second, they’re conservative about the U.S. constitution, and want to make sure we don’t stray too far from founders’ vision. Third, they’re economic conservatives, which means they want to restrain how much the government spends and how much it influences private companies. 

No matter which or how many of these perspectives they hold, U.S. conservatives usually vote Republican.

*This might be confusing:* The last 2 ways of being conservative come squarely from a liberal philosophical tradition. If one of today’s constitutional or economic conservatives got in a time machine and traveled back to the 18th century, he/she/they’d be considered a radical republican liberal. 

### Religious conservatives
U.S. religious conservatives are mostly Christian, and they tend to want certain Christian values to have a bigger influence in U.S. life. In practice, this mostly has to do with how kids are educated and with limits on sex and sexuality. For example, religious conservatives opposed gay marriage, prefer abstinence-only education, and argue that creationism should be taught in school along with/instead of evolution.

### Constitutional conservatives
These are folks who believe the U.S. Constitution lays out a blueprint for government and individual rights, that the Constitution is exceptional, and we should stick to it. They’re skeptical about making changes or alterations to this blueprint. Today, this means they tend to oppose new types of taxes, new government programs, and laws that change what we can say, buy, or own. 

### Economic conservatives
This type of conservative believes in free and open markets, and in limiting government spending and regulation. If you’re economically conservative, you don’t think the government should try to help people. You think that people should help themselves, and the private citizens should give to charities who help those truly in need. Economic conservatives also tend to think that government should leave private businesses alone--not to make laws about what they sell and how they treat workers. 

### Today’s conservative is yesterday’s radical liberal
It’s true: the founding fathers were considered radically liberal in their day. In the 18th century, to be conservative meant supporting monarchy and centralized, all-powerful governments. 
`

export default function WhatsAConservative() {
    return (
    <ReactMarkdown
  source={markdown}
  escapeHtml={false}
/>
    )
}