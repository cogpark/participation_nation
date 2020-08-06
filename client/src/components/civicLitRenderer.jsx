import React from 'react';
import BillOfRights from './blogs/billofrights.jsx';
import AllAmendments from './blogs/allamendments';
import WhatsALiberal from './blogs/whatsaliberal';
import WhatsAConservative from './blogs/whatsaconservative';



export default function CivicLitRenderer(props) {
    const Components = {
        "AllAmendments": AllAmendments,
        "BillOfRights": BillOfRights,
        "WhatsALiberal": WhatsALiberal,
        "WhatsAConservative": WhatsAConservative
 }
    let Component = Components[props.url]

    return (
        <main className='col-sm-9'  >
            <Component />
        </main>
    )
}
