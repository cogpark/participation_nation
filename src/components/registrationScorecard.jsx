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
                    <p>{this.props.cardTitle}</p>

                </div>
                <div className="card-body">
                    <p>{this.handleDates(
                        this.props.electionType,
                        this.props.selectedState,
                        this.props.method
                        )
                        }
                    </p>
                </div>
            </div>
        );
    }


}

export default RegDateScorecard;
