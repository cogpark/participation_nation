import React, { Component } from "react";

const statesArray = ['Alabama','Alaska', 'Arizona','Arkansas','California',
'Colorado','Connecticut','Delaware',
'District of Columbia','Florida','Georgia','Hawaii',
'Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
'Louisiana','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri',
'Montana','Nebraska','Nevada','New Hampshire','New Jersey',
'New Mexico','New York','North Carolina','North Dakota',
'Northern Mariana Islands','Ohio','Oklahoma','Oregon',
'Pennsylvania','Rhode Island','South Carolina',
'South Dakota','Tennessee','Texas','Utah','Vermont',
'Virginia','Washington','West Virginia','Wisconsin',
'Wyoming']  

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

export default StatePicker;