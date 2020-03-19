import React from 'react';
import Layout from './layout';
 

function App() {

    let query;

    if (window.location.search.length === 0) {
        query =  {
            state: 'Alabama',
            election: 'General'
        };
    }
    else {
        query = parseSearch(window.location.search);
    }
    return (
        <React.Fragment>
            <Layout
                selectedState = {query.state}
                selectedElection = {query.election}/> 
        </React.Fragment>
        )
} 
    
function parseSearch(url) {

    let selectedState = url.slice(url.lastIndexOf('=')+1, url.length)
    let selectedElection = url.slice(url.indexOf('=')+1,url.indexOf('&'))
    console.log(selectedState + ' ' + selectedElection)
    let query =  {
        state: selectedState,
        election: selectedElection
    }
    return(query)
}
export default App;