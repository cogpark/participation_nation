import React from 'react';
import Scorecard from './scorecard'


function IdRequirementsRow(props) {
    return (
        <React.Fragment>
            <div>
                <h2>Voter ID requirements</h2>
            </div>
            <div className='row'>
                <div className='col-md-8'>
                    <p className='explainer'>Most states require some form of ID at the polls. 
                    </p>
                </div>
            </div>
            <hr />

            <div className='row' id='at-the-polls'>
                <div className='col-md-8'>
                    <Scorecard 
                     cardTitle= "ID requirements at the polls"
                     passJson = ''
                    
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default IdRequirementsRow;

function lookupAbsenteeInfo(data, state, attribute ) {
    return data[state][attribute]
}