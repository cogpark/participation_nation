import React, { Component } from "react";
import RegistrationDeadlinesRow from './registrationDeadlinesRow';
//import Feedback from './feedback';
import Picker from './picker'
import RegData from '../data/RegDeadlines2020.json';
//import { ReactComponent } from '*.svg';


class Layout extends Component { 
    constructor() {
        super()

        this.usStates = ['Alabama','Alaska', 'Arizona','Arkansas','California',
        'Colorado','Connecticut','Delaware',
        'Florida','Georgia','Hawaii',
        'Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
        'Louisiana','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri',
        'Montana','Nebraska','Nevada','New Hampshire','New Jersey',
        'New Mexico','New York','North Carolina','North Dakota',
        'Ohio','Oklahoma','Oregon', 'Pennsylvania','Rhode Island','South Carolina',
        'South Dakota','Tennessee','Texas','Utah','Vermont',
        'Virginia','Washington', 'Washington, D.C.','West Virginia','Wisconsin',
        'Wyoming'];

        this.electionTypes = ['General', 'Democratic Primary'];
        this.methods = 
        this.state = {
            selectedState: 'Alabama',
            selectedElection: 'general',
            datesData: RegData,
        }

        this.handleSelectAState = this.handleSelectAState.bind(this);
        this.handleSelectElectionType = this.handleSelectElectionType.bind(this);
    } 

    handleSelectAState(event) {
        this.setState({ selectedState: event.target.value });
    }

    handleSelectElectionType(event) {
        this.setState({ selectedElection: event.target.value });
    }


    render() {
        return (
            <React.Fragment> 
                <div id="banner">
                    <div className="row" style={{maxWidth:'1300px', margin:'0 54px', width:"100%", marginRight:"auto", marginLeft:"auto"}}>
                        <div className="col">
                            <h1 className="header-text">Participation Nation</h1>
                        </div>
                    </div>
                </div>

                <div className="container" >
                    <div className="row">
                        <div className="col-8">
                            <p>SELECT A STATE:</p>
                        </div>
                        <div className="col-4">
                            <p>SELECT AN ELECTION:</p>
                        </div>
                    </div>
            
                    <div className="form-group row">
                        <div className="col-8">
                            <Picker onChange={event => this.handleSelectAState(event)} selection={this.selectedState} data={this.usStates} />
                        </div>
                        <div className="col-4">
                            <Picker onChange={event => this.handleSelectElectionType(event)} selection={this.selectedElection} data={this.electionTypes} />
                        </div>
                    </div> 

                    <div className="row">
                        <div className="col">
                            <RegistrationDeadlinesRow 
                            selectedState={this.state.selectedState}
                            selectedElection={this.state.selectedElection}
                            datesData={this.state.datesData} />
                        </div>
                    </div>
                </div> 
            </React.Fragment>
        );
    }
}
 /* FEEDBACK FOR WHEN IT IS READY
             <div className="container" >
                <div className="row">
                    <div className="col">
                        <Feedback usStates={usStates} elections={elections} />
                    </div>
                </div>
            </div> 
*/

export default Layout;
