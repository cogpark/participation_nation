import React, { Component } from 'react';
import RegDeadlinesRow from './regDeadlinesRow'


class Layout extends Component {

    render() { 
        return (
            <div className="container" style={{maxWidth:'1300px'}}>
                <div className="row">
                    <div className ="col">
                        <RegDeadlinesRow />
                    </div>

                </div>
            </div>
          );
    }
}


export default Layout