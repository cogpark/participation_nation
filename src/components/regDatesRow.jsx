import React, { Component } from "react";
import RegDateScorecard from './registrationScorecard';
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
                <div className="row">
                    <div className="col-sm"><RegDateScorecard
                            selectedState = {this.state.selectedState}
                            method = 'inPerson'/>
                    </div> 
                    <div className="col-sm"><RegDateScorecard
                            selectedState = {this.state.selectedState}
                            method = 'byMail'/>
                    </div>
                    <div className="col-sm"><RegDateScorecard
                            selectedState = {this.state.selectedState}
                            method = 'online'/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ScorecardRow