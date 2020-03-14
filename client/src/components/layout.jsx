import React, { Component } from "react";
import RegistrationDeadlinesRow from './registrationDeadlinesRow';
import AbsenteeEarlyVotingRow from './absenteeEarlyRow';
import Feedback from './feedback';
import Picker from './picker'
import OnlineRegistrationController from './onlineRegistrationControl';
import RegData from '../data/RegDeadlines2020.json';
import AbsenteeData from '../data/AbsenteeVoting.json'
//import { ReactComponent } from '*.svg';


class Layout extends Component { 
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

        this.electionTypes = ['General', 'Democratic Primary'];
        this.methods = 
        this.state = {
            selectedState: 'Alabama',
            selectedElection: 'general',
            onlineRegistration: 'https://www.alabamainteractive.org/sos/voter_registration/voterRegistrationWelcome.action',
            datesData: RegData,
            absenteeData: AbsenteeData,
        }

        this.handleSelectAState = this.handleSelectAState.bind(this);
        this.handleSelectElectionType = this.handleSelectElectionType.bind(this);
    } 

    handleSelectAState(event, election) {
        this.setState({ selectedState: event.target.value,
                        onlineRegistration: RegData[election][event.target.value]['onlineRegistration']})
    }

    handleSelectElectionType(event) {
        this.setState({ selectedElection: event.target.value });
    }

    render() {
        return (
            <React.Fragment> 
                <div id="banner">
                    <div className="row" style={{maxWidth:'1300px', margin:'0 54px', width:"100%", marginRight:"auto", marginLeft:"auto"}}>
                        <div className="col">
                            <h1 className="header-text">Participation Nation</h1>
                        </div>
                    </div>
                </div>

                <div className="container" >
                    <div className="row">
                        <div className="col-md-6">
                            <p>SELECT A STATE:</p>
                            <Picker onChange={event => this.handleSelectAState(event,this.state.selectedElection.toLowerCase())} selection={this.selectedState} data={this.usStates} />
                        </div>
                        <div className="col-sm-4">
                            <p>SELECT AN ELECTION:</p>
                            <Picker onChange={event => this.handleSelectElectionType(event)} selection={this.selectedElection} data={this.electionTypes} />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <RegistrationDeadlinesRow 
                            selectedState={this.state.selectedState}
                            selectedElection={this.state.selectedElection}
                            datesData={this.state.datesData} />
                        </div>
                    </div>
                    <div className="row padded-down">
                        <div className="col">
                           <OnlineRegistrationController 
                           selectedState = {this.state.selectedState}
                           onlineRegistration = {this.state.onlineRegistration}/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <AbsenteeEarlyVotingRow 
                            selectedState={this.state.selectedState}
                            selectedElection={this.state.selectedElection}
                            absenteeData={this.state.absenteeData}/>
                        </div>
                    </div>
                </div> 
		<div className="container" >
		   <div className="row">
		       <div className="col">
		           <Feedback usStates={this.usStates} elections={this.electionTypes} />
		       </div>
		   </div>
		</div> 
            </React.Fragment>
        );
    }
}

export default Layout;
