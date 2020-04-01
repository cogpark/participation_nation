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

        this.state = {
            selectedState: 'Hawaii',
            stateNameCleaned:"",
            selectedElection: 'general',
            onlineRegistration: 'https://www.alabamainteractive.org/sos/voter_registration/voterRegistrationWelcome.action',
            datesData: RegData,
            absenteeData: AbsenteeData,
            idData: IdData,
        }

        this.handleSelectAState = this.handleSelectAState.bind(this);
        this.handleSelectElectionType = this.handleSelectElectionType.bind(this);
    } 

    componentDidMount(props) {
        this.setState({selectedState: this.props.selectedState})
    }
     
    handleSelectAState(event, election) {
        this.setState({ selectedState: event.target.value,
                        onlineRegistration: RegData[election][event.target.value]['onlineRegistration'],
                        stateNameCleaned: this.cleanupStateNames(event.target.value) });
        var fixElectionName = (election === "general") ? "general" : "democratic_primary"
        var url = "?election=" + fixElectionName + '&state=' + event.target.value.replace(/\s+|\.|,/g,"");
        history.push(url)
        }

    handleSelectElectionType(event) {
        this.setState({ selectedElection: event.target.value });
        var election = (event.target.value === "General") ? "general" : "democratic_primary"
        var url =  "?election=" + election + '&state=' + this.state.selectedState.replace(/\s+|\.|,/g,"");
        history.push(url) 
    }

    cleanupStateNames(value) {
        if (value==="WashingtonDC") {
            return 'Washington, D.C.'; 
        } else if (value.replace(/[^A-Z]/g,"").length > 1) {
            for (var i=1; i < value.length; i++) {
                if (value[i] === value[i].toUpperCase()) {
                    return [value.slice(0,i), ' ',value.slice(i)].join('')
                }
            }    
        } else {
            return value
        }
    }

    render() {
        return ( 
            <main> 
                <div className="container" >
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
                    <br />
                    <div className="row" id="registration-row">
                        <div className="col">
                            <RegistrationDeadlinesRow 
                            selectedState={this.state.selectedState}
                            stateNameCleaned={this.state.stateNameCleaned}
                            selectedElection={this.state.selectedElection}
                            datesData={this.state.datesData} />
                        </div>
                    </div>
                    <div className="row padded-down">
                        <div className="col-sm-5">
                            <OnlineRegistrationController 
                            selectedState = {this.state.selectedState}
                            stateNameCleanede={this.state.stateNameCleaned}
                            selectedElection={this.state.selectedElection}
                            onlineRegistration = {this.state.onlineRegistration}/>
                            </div>
                    </div>

                    <div className='row padded-down' id="absentee-row">
                        <div className='col'>
                            <AbsenteeEarlyVotingRow 
                            selectedState={this.state.selectedState}
                            absenteeData={this.state.absenteeData}
                            stateNameCleaned={this.state.stateNameCleaned}
                            />
                        </div>
                    </div>
                    <div className='row' id="id-requirements-row">
                        <div className='col'>
                            <IdRequirementsRow
                                selectedState={this.state.selectedState}
                                stateNameCleaned={this.state.stateNameCleaned}
                                IdData={this.state.idData}/>
                         </div>
                    </div> 
                </div>
            </main>
        );
    }
}

export default Layout;

//<div className="container" >
//<div className="row">
//    <div className="col">
//        <Feedback usStates={this.usStates} elections={this.electionTypes} />
//    </div>
//</div>
// </div> 

/**

</div> */