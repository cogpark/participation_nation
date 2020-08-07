import React from 'react';

export default function DesktopNav() {
    return (
        <nav id="toc" style={{ width: "180px", marginTop:"5px" }}>
            <h3 style={{ fontSize:"1.5rem" }}>SITE CONTENTS</h3>
            <p className='toc-subhead'><b>VOTING CLARIFIED</b></p>
            <div className="toc-item">
                <a href="/voting">Voting info by state</a>
            </div>
            <p className='toc-subhead'><b>WHAT IS THE...</b></p>
            <div className="toc-item"> 
                <a href="/bill-of-rights">Bill of Rights</a>
            </div>
            <div className="toc-item"> 
                <a href="/amendments-eleven-to-twenty-seven">Amendments 11 to 27</a>
            </div>
            <p className='toc-subhead'><b>WHAT IS A...</b></p>
            <div className="toc-item"> 
                <a href="/whats-a-liberal">Liberal</a>
            </div>
            <div className="toc-item"> 
                <a href="/whats-a-conservative">Conservative</a>
            </div>
            <div className="toc-item"> 
                <a href="/whats-a-democrat">Democrat</a>
            </div>
            
        </nav>
    )
}