import React, { Component } from "react";
import RegistrationScorecard from './registrationScorecard';
import Picker from './picker';
import RegData from '../data/RegDeadlines2020.json';

class RegistrationDeadlinesRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedState: 'Alabama',
            selectedElection: 'general',
            datesData: RegData,
            usStates: props.usStates,
            electionTypes: props.electionTypes,
        };

        this.handleDates = this.handleDates.bind(this);
        this.handleSelectAState = this.handleSelectAState.bind(this);
        this.handleSelectElectionType = this.handleSelectElectionType.bind(this);
    }

    handleSelectAState(event) {
        this.setState({ selectedState: event.target.value });
    }

    handleSelectElectionType(event) {
        this.setState({ selectedElection: event.target.value });
    }

    handleDates(method) {
        return this.state.datesData[this.state.selectedElection.toLowerCase()][this.state.selectedState][method];
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
                    <div className="col-sm"><RegistrationScorecard
                            passJson = {this.handleDates('inPerson')}
                            cardTitle= "In person deadline:" />
                    </div> 
                    <div className="col-sm middle-card"><RegistrationScorecard
                            passJson = {this.handleDates('byMail')}
                            cardTitle= "By mail deadline:"/>
                    </div>
                    <div className="col-sm"><RegistrationScorecard
                            passJson = {this.handleDates('online')}
                            cardTitle= "Online deadline:"/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RegistrationDeadlinesRow;
