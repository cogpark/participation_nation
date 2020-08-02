import React, { Component } from "react";
import RegistrationDeadlinesRow from './registration/registrationDeadlinesRow';
import AbsenteeEarlyVotingRow from './absenteeEarlyRow';
//import Feedback from './feedback';
import Picker from './picker'
import OnlineRegistrationController from './registration/onlineRegistrationControl';
import IdRequirementsRow from './idRequirementsRow';
import RegData from '../data/RegDeadlines2020.json';
import AbsenteeData from '../data/AbsenteeVoting.json'
import IdData from '../data/idRequirements.json';
import history from './history';
import InfoGetterHeaderDesktop from './nav/infoGetterHeaderDesktop';
//import { ReactComponent } from '*.svg';


class InfoGetter extends Component { 
    constructor(props) {
        super(props)
        
        this.usStates = ['Alabama','Alaska', 'Arizona','Arkansas','California',
        'Colorado','Connecticut','Delaware',
        'Florida','Georgia','Hawaii',
        'Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
        'Louisiana','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri',
        'Montana','Nebraska','Nevada','New Hampshire','New Jersey',
        'New Mexico','New York','North Carolina','North Dakota',
        'Ohio','Oklahoma','Oregon', 'Pennsylvania','Rhode Island','South Carolina',
        'South Dakota','Tennessee','Texas','Utah','Vermont',
        'Virginia','Washington', 'Washington, D.C.','West Virginia','Wisconsin',
        'Wyoming'];

        this.electionTypes = ['General'];

        this.state = {
            
            datesData: RegData,
            absenteeData: AbsenteeData,
            idData: IdData,
            selectedState: props.selectedState,
            selectedElection: props.selectedElection,
            onlineRegistration: RegData[props.selectedElection][props.selectedState]['onlineRegistration'],
            
        }

        this.handleSelectAState = this.handleSelectAState.bind(this);
        this.handleSelectElectionType = this.handleSelectElectionType.bind(this);
    } 

     
    handleSelectAState(event, election) {
        this.setState({ selectedState: event.target.value,
                        onlineRegistration: RegData[election][event.target.value]['onlineRegistration'],
                         });
        var url = encodeURI("?election=" + election + '&state=' + event.target.value);
        console.log(url)
        history.push(url)
        }

    handleSelectElectionType(event) {
        this.setState({ selectedElection: event.target.value.toLowerCase()});
        var url =  encodeURI("?election=" + event.target.value + '&state=' + this.state.selectedState);
        console.log(url)
        history.push(url) 
    }


    render() {
        return (        
            <main> 
                <div className="row">
                    <div className="col-sm-4">
                        <p>SELECT A STATE:</p>
                        <Picker onChange={event => this.handleSelectAState(event,this.state.selectedElection.toLowerCase())} selection={this.state.selectedState} data={this.usStates} name="state selector"/>
                    </div>
                    <div className="col-sm-4">
                        <p>SELECT AN ELECTION:</p>
                        <Picker onChange={event => this.handleSelectElectionType(event)} selection={this.selectedElection} data={this.electionTypes} name="election selector" />
                    </div>
                </div>  
                <InfoGetterHeaderDesktop/>   
                <div className="row" id="registration-row">
                    <div className="col">
                        <RegistrationDeadlinesRow 
                        selectedState={this.state.selectedState}
                        selectedElection={this.state.selectedElection.toLowerCase()}
                        datesData={this.state.datesData} />
                    </div>
                </div>
                <div className="row padded-down">
                    <div className="col-sm-5">
                        <OnlineRegistrationController 
                        selectedState = {this.state.selectedState}
                        selectedElection={this.state.selectedElection}
                        onlineRegistration = {this.state.onlineRegistration}/>
                        </div>
                </div>

                <div className='row padded-down' id="absentee-row">
                    <div className='col'>
                        <AbsenteeEarlyVotingRow 
                        selectedState={this.state.selectedState}
                        absenteeData={this.state.absenteeData}
                        />
                    </div>
                </div>
                <div className='row' id="id-requirements-row">
                    <div className='col'>
                        <IdRequirementsRow
                            selectedState={this.state.selectedState}
                            IdData={this.state.idData}/>
                    </div>
                </div> 
            </main>
        );
    }
}

export default InfoGetter;

//<div className="container" >
//<div className="row">
//    <div className="col">
//        <Feedback usStates={this.usStates} elections={this.electionTypes} />
//    </div>
//</div>
// </div> 

/**

</div> */