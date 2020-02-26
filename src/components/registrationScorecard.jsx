import React, { Component } from "react";
import RegData from '../data/RegDeadlines2020.json';

class RegDateScorecard extends Component {

    scorecardStyle = {
        background: "red",
        height: 300,
    };

    render() {
        return (
            <React.Fragment>
                <div style={this.scorecardStyle}>
                    <p>{this.getDates(
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

    getDates(electionType, stateName, method ) {
        var registration =  0;
        console.log(registration);
        return registration
    }
}

export default RegDateScorecard;
