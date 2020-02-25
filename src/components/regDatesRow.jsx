import React, { Component } from "react";
import {InPersonScorecard, ByMailScorecard, OnlineScorecard} from './registrationScorecard';
import StatePicker from './statePicker';


class ScorecardRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectedState: 'Alabama' 
        };

        this.handleSelectAState = this.handleSelectAState.bind(this);
    }

    handleSelectAState(stateValue) {
        console.log(stateValue)
        this.setState({ selectedState: stateValue});
    }

    render() {
        return (
            <React.Fragment>
                <div className="form-group">
                    <StatePicker onSelectAState = {this.handleSelectAState} />
                </div> 
                <p>I should get the state here: {this.state.selectedState}</p>   
                <div className="row">
                    <div className="col-sm"><InPersonScorecard /></div> 
                    <div className="col-sm"><ByMailScorecard /></div>
                    <div className="col-sm"><OnlineScorecard /></div>
                </div>
            </React.Fragment>
        );
    }
}

export default ScorecardRow