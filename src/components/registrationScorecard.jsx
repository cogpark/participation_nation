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
            <div className="card">
                <div className="card-header">
                    <h3>{this.props.cardTitle}</h3>

                </div>
                <div className="card-body">
                    <p dangerouslySetInnerHTML={{ __html: this.props.passJson}}></p>
                </div>
            </div>
        );
    }


}

export default RegDateScorecard;
