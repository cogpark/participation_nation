import React, { Component } from 'react';

function testdata(data, election, state, site="online_registration") {
    if (data[election.toLowerCase()][state][site]) {
        return "<a href='data[election.toLowerCase()][state][site]>'" + "Register to vote online" + "</a>.";
    } else {
        return state + " doesn't have online registration."
    };
       
}


function OnlineRegistration(props) {
    return (
        <p><a href=''>Register to vote online</a></p>
    );
}

function NoOnlineRegistration(props) {
    return (
        <p>No online registration.</p>
    )
}


