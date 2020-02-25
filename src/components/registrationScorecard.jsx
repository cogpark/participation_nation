import React, { Component } from "react";

class RegDateScorecard extends Component {
    scorecardStyle = {
        background: "red",
        height: 300,
    };

    render() {
        //const stateName = this.state.stateName;
        return (
            <React.Fragment>
                <div style={this.scorecardStyle}>
                    <p>{this.getDates(this.props.selectedState,this.props.method)}</p>
                </div>
            </React.Fragment>
        );
    }

    getDates(stateName, method) {
        const data = require('../data/regDeadlines.json')
        //console.log(data[stateName][method])
        return data[stateName][method]
    }
}

export default RegDateScorecard;
