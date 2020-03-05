import React from 'react';
import RegDeadlinesRow from './regDeadlinesRow';
import Customers from './customers/customers';


function Layout(props) { 

    return (
        <React.Fragment> 
            <Customers />
            <div id="banner">
                <div className="row" style={{maxWidth:'1300px', margin:'0 54px', width:"100%", marginRight:"auto", marginLeft:"auto"}}>
                    <div className="col">
                        <h1 className="header-text">Participation Nation</h1>
                    </div>
                </div>
            </div>
                

            <div className="container" style={{maxWidth:'1300px'}}>
                <div className="row">
                    <div className ="col">
                        <RegDeadlinesRow />
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}


export default Layout;
