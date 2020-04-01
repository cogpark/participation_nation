import React from "react";

function Picker(props) { 

    return (
        <select name = {props.name}
            onChange={props.onChange}
            value={props.selection}
            className="form-control">
            {props.data.map((value, index) =>
                <option key={index} value={removeSpaces(value)}>{value}</option>)}
        </select>
    );
}

export default Picker;

function removeSpaces(value) {
    return value.replace(/\s+|\.|,/g,"")
}
