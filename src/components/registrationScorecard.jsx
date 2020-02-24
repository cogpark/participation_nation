import React, { Component } from "react";


class RegistrationScorecard extends Component {
    scorecardStyle = {
        background: "red",
        height: 300,
        width: 300,
    };

    render() {
        return (
            <React.Fragment>
                <div style={this.scorecardStyle}>
                    <p>{this.getInPersonDate("Alaska","inPerson")}</p>
                </div>
            </React.Fragment>
        );
    }

    getInPersonDate(state, method) {
        const data = require('../data/regDeadlines.json')
        return data.state.method
    }
}

export default RegistrationScorecard;