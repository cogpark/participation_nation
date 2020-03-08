import React from "react";

function Scorecard(props) {
    /*let's do this test elsewhere -->
        
    // otherwise asking for e.g. Northern Mariana Islands throws an error 
    const info = safeLookup(props.regData, props.electionType, props.selectedState, props.method); 
    */

    return (
        <div className="card">
            <div className="card-header">
                <h3>{props.cardTitle}</h3>
            </div>
            <div className="card-body">
                <p dangerouslySetInnerHTML={{ __html: props.passJson}}></p>
            </div>
        </div>
    );

}

export default Scorecard;
/*
function safeLookup(data, election, state, method) {
    var result = "no data for " + election + ": " + state + ": " + method;
    
    if (data 
        && data[election.toLowerCase()] 
        && data[election.toLowerCase()][state] 
        && data[election.toLowerCase()][state][method])
        result = data[election.toLowerCase()][state][method];

    return result;
} */
