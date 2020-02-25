import React, { Component } from "react";


class StatePicker extends Component { 
    constructor(props){
        super(props);
        this.handleNewStateSelection = this.handleNewStateSelection.bind(this);
    }

    handleNewStateSelection(event) {
        var selection = event.target.value;
        this.props.onSelectAState(selection);
    }

    render() {
        const statesArray = ['Alabama','Alaska', 'Arizona','Arkansas','California',
            'Colorado','Connecticut','Delaware',
            'Florida','Georgia','Hawaii',
            'Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
            'Louisiana','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri',
            'Montana','Nebraska','Nevada','New Hampshire','New Jersey',
            'New Mexico','New York','North Carolina','North Dakota',
            'Northern Mariana Islands','Ohio','Oklahoma','Oregon',
            'Pennsylvania','Rhode Island','South Carolina',
            'South Dakota','Tennessee','Texas','Utah','Vermont',
            'Virginia','Washington', 'Washington, D.C.','West Virginia','Wisconsin',
            'Wyoming']  
            
        const items = []
        for (const [index, value] of statesArray.entries()) {
            items.push(<option key={index} value={statesArray[index]}>{value}</option>)
        }
        return (
            <select
            onChange = {this.handleNewStateSelection}
            className='form-control'>
                {items}
            </select>
        );
    }
}

class ElectionTypePicker extends Component {
    constructor(props) {
        super(props);
        this.handleSelectElection = this.handleSelectElection.bind(this);
    }

    handleSelectElection(event) {
        var election = event.target.value;
        console.log(election)
        this.props.onSelectElection(election);
    }

    render() {
        const electionTypes = ['General', 'Primary']
        const items = []
        for ( const[index, value] of electionTypes.entries()) {
            items.push(<option key={index} value={electionTypes[index]}>{value}</option>)
        }
        return (
            <select 
            onChange = {this.handleSelectElection}
            className ='form-control'>
                {items}
            </select>
        );
    }
}
export {StatePicker, ElectionTypePicker};