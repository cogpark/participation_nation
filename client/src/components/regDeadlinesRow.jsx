import React, { Component } from "react";
import RegistrationScorecard from './registrationScorecard';
import Picker from './picker';
import RegData from '../data/RegDeadlines2020.json';

class RegDeadlinesRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedState: 'Alabama',
            selectedElection: 'general',
            datesData: RegData,
        };
    }

    handleSelectAState(event) {
        this.setState({ selectedState: event.target.value });
    }

    handleSelectElectionType(event) {
        this.setState({ selectedElection: event.target.value });
    }

    render() {

        const usStates = ['Alabama','Alaska', 'Arizona','Arkansas','California',
            'Colorado','Connecticut','Delaware',
            'Florida','Georgia','Hawaii',
            'Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
            'Louisiana','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri',
            'Montana','Nebraska','Nevada','New Hampshire','New Jersey',
            'New Mexico','New York','North Carolina','North Dakota',
            'Northern Mariana Islands','Ohio','Oklahoma','Oregon',
            'Pennsylvania','Rhode Island','South Carolina',
            'South Dakota','Tennessee','Texas','Utah','Vermont',
            'Virginia','Washington', 'Washington, D.C.','West Virginia','Wisconsin',
            'Wyoming']  

        const electionTypes = ['General', 'Democratic Primary']

        return (
            <React.Fragment>
                <h2>Registration deadlines</h2>
                <hr />
                <div className="row">
                    <div className="col-8">
                        <p>SELECT A STATE:</p>
                    </div>
                    <div className="col-4">
                        <p>SELECT AN ELECTION:</p>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-8">
                        <Picker onChange={event => this.handleSelectAState(event)} selection={this.selectedState} data={usStates} />
                    </div>
                    <div className="col-4">
                        <Picker onChange={event => this.handleSelectElectionType(event)} selection={this.selectedElection} data={electionTypes} />
                    </div>
                </div> 
                <div className="row">
                    <div className="col-sm">
                        <RegistrationScorecard
                            selectedState={this.state.selectedState}
                            method='inPerson'
                            electionType={this.state.selectedElection}
                            regData={this.state.datesData}
                            cardTitle="In person deadline:" />
                    </div> 
                    <div className="col-sm middle-card">
                        <RegistrationScorecard
                            selectedState={this.state.selectedState}
                            method='byMail'
                            electionType={this.state.selectedElection}
                            regData={this.state.datesData}
                            cardTitle="By mail deadline:"/>
                    </div>
                    <div className="col-sm"><RegistrationScorecard
                            selectedState={this.state.selectedState}
                            method='online'
                            electionType={this.state.selectedElection}
                            regData={this.state.datesData}
                            cardTitle="Online deadline:"/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RegDeadlinesRow;
