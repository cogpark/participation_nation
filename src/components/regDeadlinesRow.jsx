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
        this.handleDates = this.handleDates.bind(this);
        this.handleSelectAState = this.handleSelectAState.bind(this);
        this.handleSelectElectionType = this.handleSelectElectionType.bind(this);
    }

    handleSelectAState(stateValue) {
        this.setState({ selectedState: stateValue});
    }

    handleSelectElectionType(electionValue) {
        this.setState({ selectedElection: electionValue});
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
                        <StatePicker onSelectAState = {this.handleSelectAState} />
                    </div>
                    <div className="col-4">
                        <ElectionTypePicker onSelectElection = {this.handleSelectElectionType} />
                    </div>
                </div> 
                <div className="row">
                    <div className="col-sm"><RegDateScorecard
                            passJson = {this.handleDates('inPerson')}
                            cardTitle= "In person deadline:" />
                    </div> 
                    <div className="col-sm middle-card"><RegDateScorecard
                            passJson = {this.handleDates('byMail')}
                            cardTitle= "By mail deadline:"/>
                    </div>
                    <div className="col-sm"><RegDateScorecard
                            passJson = {this.handleDates('online')}
                            cardTitle= "Online deadline:"/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RegDeadlinesRow