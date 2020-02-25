import React, { Component } from "react";
import RegDateScorecard from './registrationScorecard';
import {StatePicker, ElectionTypePicker} from './statePicker';


class ScorecardRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedState: 'Alabama',
            selectedElection: 'General' 
        };
        this.handleSelectAState = this.handleSelectAState.bind(this);
        this.handleSelectElectionType = this.handleSelectAState.bind(this);
    }

    handleSelectAState(stateValue) {
        console.log(stateValue)
        this.setState({ selectedState: stateValue});
    }

    handleSelectElectionType(electionValue) {
        console.log(electionValue)
        this.setState({ selectedElection: electionValue});
    }


    render() {
        return (
            <React.Fragment>
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
                            electionType = {this.state.selectedElection}/>
                    </div> 
                    <div className="col-sm"><RegDateScorecard
                            selectedState = {this.state.selectedState}
                            method = 'byMail'
                            electionType = {this.state.selectedElection}/>
                    </div>
                    <div className="col-sm"><RegDateScorecard
                            selectedState = {this.state.selectedState}
                            method = 'online'
                            electionType = {this.state.selectedElection}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ScorecardRow