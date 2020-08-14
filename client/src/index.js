import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './components/app';
import './index.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import CivicLitRenderer from './components/civicLitRenderer';
import MobileNav from './components/nav/mobileNav';
import DesktopNav from './components/nav/desktopNav';
import  { BreakpointProvider, Breakpoint } from 'react-socks';

ReactDOM.render(
    <BreakpointProvider>  
        <Breakpoint small down>
            <MobileNav left/>
        </Breakpoint>
        
        <div className='container'>
            <Breakpoint medium up style={{ padding:"0px" }}> 
                <DesktopNav/>
            </Breakpoint>
            <Router>
                <div className='col' style={{ padding:"0px" }} >
                <Route exact path="/">
                    <App />
                </Route>
                <Route path="/voting">
                    <App />
                </Route>
                <Route path="/bill-of-rights">
                    <CivicLitRenderer url = {'BillOfRights'}/>
                </Route>
                <Route path="/amendments-eleven-to-twenty-seven">
                    <CivicLitRenderer url = {'AllAmendments'}/>
                </Route>
                <Route path="/whats-a-liberal">
                    <CivicLitRenderer url = {'WhatsALiberal'}/>
                </Route>
                <Route path="/whats-a-conservative">
                    <CivicLitRenderer url = {'WhatsAConservative'}/>
                </Route>
                <Route path="/whats-a-democrat">
                    <CivicLitRenderer url = {'WhatsADemocrat'}/>
                </Route>
                 <Route path="/whats-a-republican">
                    <CivicLitRenderer url = {'WhatsARepublican'}/>
                </Route>
                 <Route path="/all-elections">
                    <CivicLitRenderer url = {'AllTheElections'}/>
                </Route>
                    <Route path="/electoral-college">
                    <CivicLitRenderer url = {'ElectoralCollege'}/>
                </Route>
                <Route path="/the-us-senate">
                    <CivicLitRenderer url = {'TheSenate'}/>
                </Route>
                <Route path="/the-us-house-of-representatives">
                    <CivicLitRenderer url = {'TheHouseOfRepresentatives'}/>
                </Route>
                </div>
            </Router>
        </div>
        
    </BreakpointProvider>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
