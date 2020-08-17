import React from 'react';


export default function Alert(props) {

    return (
        <div className='alert'>
            <h2>How COVID-19 affects voting {props.selectedState}</h2>
            <ul>
               {Object.keys(props.data).map(function(key) {
                   return <li value={key}>{props.data[key]}</li>
                })}
            </ul>                 
        </div>
    )
}

/* {props.data.map((value,index) => 
                <li key={index} value={value}>{value}</li>
            )} */