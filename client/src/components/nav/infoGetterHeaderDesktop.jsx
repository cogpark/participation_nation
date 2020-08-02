      import React from 'react';

      export default function DesktopHeader() { 
          return (
            <nav className='row' id="sub-banner" style={{backgroundColor:'red'}}>
                <div class="col-sm-2"> 
                    <a href="#registration-row">Registratation deadlines</a>
                </div>
                <div class="col-sm-2"> 
                    <a href="#absentee-row">Absentee & early voting</a>
                </div>
                <div class="col-sm-2"> 
                    <a href="#id-requirements-row">Voter ID requirements</a>
                </div>
            </nav>
        )
      }