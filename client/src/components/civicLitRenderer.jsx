import React from 'react';
import BillOfRights from './blogs/billofrights.jsx';
import AllAmendments from './blogs/allamendments';
import WhatsALiberal from './blogs/whatsaliberal';
import WhatsAConservative from './blogs/whatsaconservative';
import WhatsADemocrat from './blogs/whatsademocrat';
import WhatsARepublican from './blogs/whatsarepublican';
import AllTheElections from './blogs/alltheelections';
import ElectoralCollege from './blogs/electoralcollege';
import TheSenate from './blogs/thesenate';
import TheHouseOfRepresentatives from './blogs/thehouseofrepresentatives';


export default function CivicLitRenderer(props) {
    const Components = {
        "AllAmendments": AllAmendments,
        "BillOfRights": BillOfRights,
        "WhatsALiberal": WhatsALiberal,
        "WhatsAConservative": WhatsAConservative,
        "WhatsADemocrat":WhatsADemocrat,
        "WhatsARepublican":WhatsARepublican,
        "AllTheElections":AllTheElections,
        "ElectoralCollege":ElectoralCollege,
        "TheSenate":TheSenate,
        "TheHouseOfRepresentatives":TheHouseOfRepresentatives
 }
    let Component = Components[props.url]

    return (
        <main  >
            <Component />
        </main>
    )
}
