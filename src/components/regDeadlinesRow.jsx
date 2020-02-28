import React, { Component } from "react";
import RegDateScorecard from './registrationScorecard';
import {StatePicker, ElectionTypePicker} from './statePicker';
import RegData from '../data/RegDeadlines2020.json';

class RegDeadlinesRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedState: 'Alabama',
            selectedElection: 'general',
            datesData: RegData,
        };

        this.handleSelectAState = this.handleSelectAState.bind(this);
        this.handleSelectElectionType = this.handleSelectElectionType.bind(this);
    }

    handleSelectAState(stateValue) {
        this.setState({ selectedState: stateValue});
    }

    handleSelectElectionType(electionValue) {
        this.setState({ selectedElection: electionValue});
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
                        <StatePicker onSelectAState = {this.handleSelectAState} />
                    </div>
                    <div className="col-4">
                        <ElectionTypePicker onSelectElection = {this.handleSelectElectionType} />
                    </div>
                </div> 
                <div className="row">
                    <div className="col-sm"><RegDateScorecard
                            selectedState = {this.state.selectedState}
                            method = 'inPerson'
                            electionType = {this.state.selectedElection}
                            regData = {this.state.datesData}
                            cardTitle= "In person deadline:" />
                    </div> 
                    <div className="col-sm"><RegDateScorecard
                            selectedState = {this.state.selectedState}
                            method = 'byMail'
                            electionType = {this.state.selectedElection}
                            regData = {this.state.datesData}
                            cardTitle= "By mail deadline:"/>
                    </div>
                    <div className="col-sm"><RegDateScorecard
                            selectedState = {this.state.selectedState}
                            method = 'online'
                            electionType = {this.state.selectedElection}
                            regData = {this.state.datesData}
                            cardTitle= "Online deadline:"/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RegDeadlinesRow