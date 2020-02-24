import React, { Component } from "react";
import {InPersonScorecard, ByMailScorecard, OnlineScorecard} from './registrationScorecard';
import StatePicker from './statePicker';

class ScorecardRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (stateSelection) => {
        this.setState({value: stateSelection});
    }

    render() {    
        return (
            <React.Fragment>
                <div className="form-group">
                    <StatePicker value={this.state.value} onChange={this.handleChange} />
                </div> 
                <p>I should get the state here: {this.state.value}</p>   
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