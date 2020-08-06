      import React from 'react';

      export default function DesktopHeader() { 
          return (
            <nav className='row'>
                <div className="col-sm-10 vi-toc">
                    <p><em>Jump to...</em></p> 
                    <a className="btn btn-secondary" href="#registration-row">REGISTRATION DEADLINES</a>
                    <a className="btn btn-secondary" href="#absentee-row">ABSENTEE & EARLY VOTING</a>
                    <a className="btn btn-secondary" href="#id-requirements-row">VOTER ID REQUIREMENTS</a>
                </div>
            </nav>
        )
      }