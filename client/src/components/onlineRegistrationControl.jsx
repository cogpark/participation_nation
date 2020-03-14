import React from 'react';


function OnlineRegistrationController(props) {
    if (props.onlineRegistration.length > 1) { 
        return <OnlineRegistration onlineRegistration = {props.onlineRegistration} selectedState = {props.selectedState} /> ;
    } else {
        return <NoOnlineRegistration selectedState = {props.selectedState}/>
    }
}


function OnlineRegistration(props) {
    return (
    <p><a href={props.onlineRegistration}>Register to vote online in {props.selectedState}.</a></p>
    );
}

function NoOnlineRegistration(props) {
    return (
    <p> </p>
    )
}

export default OnlineRegistrationController;

