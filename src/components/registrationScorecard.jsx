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
                <div style={this.scorecardStyle}></div>
            </React.Fragment>
        );
    }
}

export default RegistrationScorecard;