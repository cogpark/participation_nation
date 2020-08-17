import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `

Here's how impeachment works: First, the House of Representatives draws up and “articles of impeachment,” which say why an official is corrupt, and then votes on them. If more than half of the Representatives agree that the official is corrupt, impeachment moves to the Senate. If 2/3rds of the Senate votes for impeachment, the official is convicted and removed from office. 

`

export default function TheHouseOfRepresentatives() {
    return (
    <ReactMarkdown
  source={markdown}
  escapeHtml={false}
/>
    )
}