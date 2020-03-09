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

            <h3>Instructions</h3> 
            <div className='row' style={{ paddingBottom: '10px;'}}>

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
            <div className='row' style={{ paddingBottom: '10px;'}}>
                <div className='col-lg-12'>
                <p>Want to learn more? Start here: {lookupAbsenteeInfo(props.absenteeData, props.selectedState,'source')}</p>
                </div>
            </div>
    </React.Fragment>
    )
}

export default AbsenteeEarlyVotingRow;

function lookupAbsenteeInfo(data, state, attribute ) {
    return data[state][attribute]
}