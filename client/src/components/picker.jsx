import React from "react";

function Picker(props) { 

    return (
        <select name = {props.name}
            onChange={props.onChange}
            value={props.selection}
            className="form-control">
            {props.data.map((value, index) =>
                <option key={index} value={value}>{value}</option>)}
        </select>
    );
}

export default Picker;
