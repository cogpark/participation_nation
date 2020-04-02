import React from 'react';
import Layout from './layout';
 

function App() {

    let query;

    if (window.location.search.length === 0) {
        query =  {
            state: 'Alabama',
            election: 'general'
        };
    }
    else {
        let url = decodeURI(window.location.search)
        query = parseSearch(url);
        console.log(query.state, ' ', query.election)
    }

    
    return (
        <React.Fragment>
            <Layout
                selectedState = {query.state}
                selectedElection = {query.election.toLowerCase()}/> 
        </React.Fragment>
        )
} 
    
function parseSearch(url) {

    let selectedState = url.slice(url.lastIndexOf('=')+1, url.length)
    console.log("Selected state: ", selectedState)
    let selectedElection = url.slice(url.indexOf('=')+1,url.indexOf('&'))
    console.log("Selected election: ", selectedElection)
    let query =  {
        state: selectedState,
        election: selectedElection
    }
    console.log (query.state)
    console.log(query.election)
    return(query)
}
export default App;