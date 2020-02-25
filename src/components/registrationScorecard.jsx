import React, { Component } from "react";
import regData from '../data/RegDeadlines2020.json';

var obj = JSON.parse(regData);

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
        console.log(obj[electionType.toLowerCase()][stateName][method]);
        return obj[electionType.toLowerCase()][stateName][method]
    }
}

export default RegDateScorecard;
