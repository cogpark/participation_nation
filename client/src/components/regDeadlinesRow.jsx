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
            usStates: this.props.usStates,
            electionTypes: this.props.electionTypes
        };
    }

    handleSelectAState(event) {
        this.setState({ selectedState: event.target.value });
    }

    handleSelectElectionType(event) {
        this.setState({ selectedElection: event.target.value });
    }

    render() {

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
                        <Picker onChange={event => this.handleSelectAState(event)} selection={this.selectedState} data={this.state.usStates} />
                    </div>
                    <div className="col-4">
                        <Picker onChange={event => this.handleSelectElectionType(event)} selection={this.selectedElection} data={this.state.electionTypes} />
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
