import React, { Component } from "react";
//import RegData from '../data/RegDeadlines2020.json';

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
        console.log(this.props.regData)
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
