import React from 'react';
import Scorecard from './scorecard'


function IdRequirementsRow(props) {
    return (
        <React.Fragment>
            <div>
                <h2 id='id-requirements-row'>Voter ID requirements</h2>
            </div>
            <div className='row'>
                <div className='col-md-8'>
                    <p className='explainer'>Most states require some form of ID at the polls. 
                    </p>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col-md-8'>
                <p style= {{ fontStyle: "italic" }}> {props.stateNameCleaned} info last updated: {lookupIDInfo(props.IdData, props.selectedState, 'last_checked')}</p>
                </div>
            </div>
      
            <div className='row' id='at-the-polls'>
                <div className='col-sm-8'>
                    <Scorecard 
                     cardTitle= {formScorecardTitle(props.stateNameCleaned)}
                     passJson = {lookupIDInfo(props.IdData, props.selectedState, 'at_polls')}
                    />
                </div>
                <div className='col-sm-4'>
                    <Scorecard
                    cardTitle= "Other ID options"
                    passJson = {lookupIDInfo(props.IdData, props.selectedState, 'other_options')}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-8'>
                    <Scorecard 
                     cardTitle= "Can't show ID?"
                     passJson = {lookupIDInfo(props.IdData, props.selectedState, 'no_id')}
                    />
                </div>
            </div>
            <h3>LEARN MORE</h3> 
            <div className='row' style={{ paddingBottom: '10px' }}>
                <div className='col-sm-6'>  
                     <a style={{ fontSize:"18px"}}className="btn btn-secondary btn-lg btn-block" href={lookupIDInfo(props.IdData, props.selectedState,'source')}>Learn more about voter ID requirements in <b>{props.stateNameCleaned}</b>.</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default IdRequirementsRow;

function lookupIDInfo(data, state, attribute ) {
    return data[state][attribute]
}

function formScorecardTitle(state) {
    return "Voter ID requirements in " + state
}
