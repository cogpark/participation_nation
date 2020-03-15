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
    <a className="btn btn-secondary btn-lg btn-block" href={props.onlineRegistration}>Register to vote online in <b>{props.selectedState}.</b></a>
    );
}

function NoOnlineRegistration(props) {
    return (
    <p> </p>
    )
}

export default OnlineRegistrationController;

