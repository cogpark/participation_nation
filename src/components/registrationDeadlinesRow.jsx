import React, { Component } from "react";
import RegistrationScorecard from './registrationScorecard';


class RegistrationDeadlinesRow extends Component {
    constructor(props) {
        super(props);
    }

    handleDates = (method) => {
        return this.props.datesData[this.props.selectedElection.toLowerCase()][this.props.selectedState][method];
    }
    render() {

        return (
            <React.Fragment>
                <h2>Registration deadlines</h2>
                <hr />
               
                <div className="row">
                    <div className="col-sm"><RegistrationScorecard
                            passJson = {this.handleDates('inPerson')}
                            cardTitle= "In person deadline:" />
                    </div> 
                    <div className="col-sm middle-card"><RegistrationScorecard
                            passJson = {this.handleDates('byMail')}
                            cardTitle= "By mail deadline:"/>
                    </div>
                    <div className="col-sm"><RegistrationScorecard
                            passJson = {this.handleDates('online')}
                            cardTitle= "Online deadline:"/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RegistrationDeadlinesRow;
