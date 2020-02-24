import React, { Component } from "react";



class InPersonScorecard extends Component {
    scorecardStyle = {
        background: "red",
        height: 300,
    };

    render() {
        //const stateName = this.state.stateName;
        return (
            <React.Fragment>
                <div style={this.scorecardStyle}>
                    <p>{this.getInPersonDate('Alaska','inPerson')}</p>
                </div>
            </React.Fragment>
        );
    }

    getInPersonDate(stateName, method) {
        const data = require('../data/regDeadlines.json')
        //console.log(data[stateName][method])
        return data[stateName][method]
    }
}

class ByMailScorecard extends Component {
    scorecardStyle = {
        background: "red",
        height: 300,
    };

    render() {
        return (
            <React.Fragment>
                <div style={this.scorecardStyle}>
                    <p>{this.getInPersonDate('Alaska','byMail')}</p>
                </div>
            </React.Fragment>
        );
    }

    getInPersonDate(stateName, method) {
        const data = require('../data/regDeadlines.json')
        console.log(data[stateName][method])
        return data[stateName][method]
    }
}

class OnlineScorecard extends Component {
    scorecardStyle = {
        background: "red",
        height: 300,
    };

    render() {
        return (
            <React.Fragment>
                <div style={this.scorecardStyle}>
                    <p>{this.getInPersonDate('Alaska','online')}</p>
                </div>
            </React.Fragment>
        );
    }

    getInPersonDate(stateName, method) {
        const data = require('../data/regDeadlines.json')
        console.log(data[stateName][method])
        return data[stateName][method]
    }
}
export {
    OnlineScorecard,
    ByMailScorecard,
    InPersonScorecard
} 
