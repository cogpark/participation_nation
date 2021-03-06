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
import TheSupremeCourt from './blogs/supremecourt';
import WhatsALibertarian from './blogs/whatsalibertarian';
import WhatsADemSocialist from './blogs/democraticsocialists';
import ExecutiveOrders from './blogs/executiveorders';
import Taxes from './blogs/taxes'


export default function CivicLitRenderer(props) {
    const Components = {
        "AllAmendments": AllAmendments,
        "BillOfRights": BillOfRights,
        "WhatsALiberal": WhatsALiberal,
        "WhatsAConservative": WhatsAConservative,
        "WhatsADemocrat":WhatsADemocrat,
        "WhatsARepublican":WhatsARepublican,
        "WhatsALibertarian":WhatsALibertarian,
        "AllTheElections":AllTheElections,
        "ElectoralCollege":ElectoralCollege,
        "TheSenate":TheSenate,
        "TheHouseOfRepresentatives":TheHouseOfRepresentatives,
        "TheSupremeCourt":TheSupremeCourt,
        "WhatsADemSocialist":WhatsADemSocialist,
        "ExecutiveOrders":ExecutiveOrders,
        "Taxes":Taxes
 }
    let Component = Components[props.url]

    return (
        <main  >
            <Component />
        </main>
    )
}
