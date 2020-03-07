import React from 'react';
import RegistrationDeadlinesRow from './registrationDeadlinesRow';
//ximport Feedback from './feedback';


function Layout(props) { 

    const usStates = ['Alabama','Alaska', 'Arizona','Arkansas','California',
            'Colorado','Connecticut','Delaware',
            'Florida','Georgia','Hawaii',
            'Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
            'Louisiana','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri',
            'Montana','Nebraska','Nevada','New Hampshire','New Jersey',
            'New Mexico','New York','North Carolina','North Dakota',
            'Ohio','Oklahoma','Oregon', 'Pennsylvania','Rhode Island','South Carolina',
            'South Dakota','Tennessee','Texas','Utah','Vermont',
            'Virginia','Washington', 'Washington, D.C.','West Virginia','Wisconsin',
            'Wyoming'];

    const elections = ['General', 'Democratic Primary'];

    return (
        <React.Fragment> 
            <div id="banner">
                <div className="row" style={{maxWidth:'1300px', margin:'0 54px', width:"100%", marginRight:"auto", marginLeft:"auto"}}>
                    <div className="col">
                        <h1 className="header-text">Participation Nation</h1>
                    </div>
                </div>
            </div>
                

            <div className="container" >
                <div className="row">
                    <div className="col">
                        <RegistrationDeadlinesRow usStates={usStates} electionTypes={elections} />
                    </div>

                </div>
            </div> 
        </React.Fragment>
    );
}
 /* FEEDBACK FOR WHEN IT IS READY
             <div className="container" >
                <div className="row">
                    <div className="col">
                        <Feedback usStates={usStates} elections={elections} />
                    </div>
                </div>
            </div> 
*/

export default Layout;
