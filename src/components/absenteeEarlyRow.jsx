import React from "react";
import Scorecard from './scorecard';

function AbsenteeEarlyVotingRow(props) {
    return (
        <React.Fragment>
            <div>
                <h2>Early & absentee voting</h2>
                <ul>
                    <li>Absentee vs. early -- if a state doesn't list requirements, we just call it "early"</li>
                    <li>In most states, you'll follow this procedure: Fill out an absentee ballot request application, send it to your local election official, get a ballot in the mail, and send it back by election day</li>
                </ul>
                <hr />
            </div>
            
            <div className='row'>
                <div className='col-8'>
                    <Scorecard 
                    cardTitle="Types"/>
                </div>
                <div>
                    <p>rail</p>
                </div>
            </div>

        </React.Fragment>
    )
}

export default AbsenteeEarlyVotingRow;