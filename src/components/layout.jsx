import React, { Component } from 'react';
import RegDeadlinesRow from './regDeadlinesRow'


class Layout extends Component {

    render() { 
        return (
        <React.Fragment> 
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
}


export default Layout