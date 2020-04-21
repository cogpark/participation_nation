import React from "react";
import Scorecard from './scorecard';

function AbsenteeEarlyVotingRow(props) {
    return (
        <React.Fragment>
            <div>
                <h2>Early & absentee voting</h2>
                <hr />
            </div>

            <h3>Instructions</h3> 
            <div className='row' style={{ paddingBottom: '10px'}}>

                <div className='col-md-6'>
                    <Scorecard 
                    cardTitle={lookupAbsenteeInfo(props.absenteeData, props.selectedState,'mail_title')}
                    passJson={lookupAbsenteeInfo(props.absenteeData, props.selectedState,'mail_instructions')}
                    />
                </div>
                <div className='col-md-6'>
                    <Scorecard 
                    cardTitle={lookupAbsenteeInfo(props.absenteeData, props.selectedState,'in_person_title')}
                    passJson={lookupAbsenteeInfo(props.absenteeData, props.selectedState,'in_person_instructions')}
                    />  
                    
                </div>
            </div>
            <br />
            <h3>Deadlines & requirements</h3> 
            <div className='row' style={{ paddingBottom: '10px'}}>
                <div className='col-sm-4' >
                <Scorecard 
                    cardTitle={"Deadline: Mail ballot requests"}
                    passJson={lookupAbsenteeInfo(props.absenteeData, props.selectedState,'mail_request_deadline')}
                    
                   
                />
                </div>
                <div className='col-sm-4'>
                    <Scorecard 
                    cardTitle = {'Deadline: Ballot submissions'}
                    passJson={lookupAbsenteeInfo(props.absenteeData, props.selectedState,'ballot_delivery')}
                    
                />
                </div>
            <div className ='col-sm-4'>
                <Scorecard 
                    cardTitle = {'Requirements'}
                    passJson={lookupAbsenteeInfo(props.absenteeData, props.selectedState,'requirements')}
                />
            </div>
            </div>
            <br />
            <h3>LEARN MORE</h3> 
            <div className='row' style={{ paddingBottom: '10px' }}>
                <div className='col-sm-6'>
                     <a className="btn btn-secondary btn-lg btn-block" href={lookupAbsenteeInfo(props.absenteeData, props.selectedState,'source')}>Learn more about voting absentee in <b>{props.selectedState}</b>.</a>
                </div>
            </div>
    </React.Fragment>
    )
}

export default AbsenteeEarlyVotingRow;

function lookupAbsenteeInfo(data, state, attribute ) {
    return data[state][attribute]
}