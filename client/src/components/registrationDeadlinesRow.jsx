import React from "react";
import Scorecard from './scorecard';


function RegistrationDeadlinesRow(props) { 
    return (
        <React.Fragment >
            <h2>Registration deadlines</h2>
            <hr />
            
            <div className="row">
                <div className="col-sm-4"><Scorecard
                        passJson = {lookupDates(props.datesData, props.selectedElection, props.selectedState,'inPerson')}
                        cardTitle= "In person deadline:" />
                </div> 
                <div className="col-sm-4 middle-card"><Scorecard
                        passJson = {lookupDates(props.datesData, props.selectedElection, props.selectedState,'byMail')}
                        cardTitle= "By mail deadline:"/>
                </div>
                <div className="col-sm-4"><Scorecard
                        passJson = {lookupDates(props.datesData, props.selectedElection, props.selectedState,'online')}
                        cardTitle= "Online deadline:"/>
                </div>
    <p>{testdata(props.datesData, props.selectedElection, props.selectedState)}</p>
            </div>
        </React.Fragment>
    );
}

export default RegistrationDeadlinesRow;

function lookupDates(data, election, state, method) {
    return data[election.toLowerCase()][state][method];
}
