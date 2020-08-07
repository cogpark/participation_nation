import React from 'react';
import BillOfRights from './blogs/billofrights.jsx';
import AllAmendments from './blogs/allamendments';
import WhatsALiberal from './blogs/whatsaliberal';
import WhatsAConservative from './blogs/whatsaconservative';
import WhatsADemocrat from './blogs/whatsademocrat';



export default function CivicLitRenderer(props) {
    const Components = {
        "AllAmendments": AllAmendments,
        "BillOfRights": BillOfRights,
        "WhatsALiberal": WhatsALiberal,
        "WhatsAConservative": WhatsAConservative,
        "WhatsADemocrat":WhatsADemocrat
 }
    let Component = Components[props.url]

    return (
        <main  >
            <Component />
        </main>
    )
}
