import React, { Component } from "react";

class RegDateScorecard extends Component {

     constructor() {
        super()
        this.handleDates = this.handleDates.bind(this);
        }
        
        state = {
            electionType: 'primary',
            stateName: 'Alabama',
            method: ''
        }    

    handleDates(electionType, stateName, method ) {
        return this.props.regData[electionType.toLowerCase()][stateName][method]
    }

    scorecardStyle = {
        background: "red",
        height: 300,
    };

    render() {
        return (
            <React.Fragment>
                <div style={this.scorecardStyle}>
                    <p>{this.handleDates(
                        this.props.electionType,
                        this.props.selectedState,
                        this.props.method
                        )
                        }
                    </p>
                </div>
            </React.Fragment>
        );
    }


}

export default RegDateScorecard;
