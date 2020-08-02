import React from 'react';
import BillOfRights from './blogs/billofrights.jsx';
import ReactMarkdown from 'react-markdown';
import AllAmendments from './blogs/allamendments';



export default function CivicLitRenderer(props) {
    const Components = {
        "AllAmendments": AllAmendments,
        "BillOfRights": BillOfRights,
 }
    let Component = Components[props.url]

    return (
        <main >
                <Component />
        </main>
    )
}
