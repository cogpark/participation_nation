import React from 'react';

export default function DesktopNav() {
    return (
        <nav id="toc" style={{ width: "180px", marginTop:"5px", }}>
            <h3 style={{ fontSize:"1.5rem" }}>SITE CONTENTS</h3>
            <p className='toc-subhead'><b>VOTING CLARIFIED</b></p>
            <div className="toc-item">
                <a href="/voting">Voting info by state</a>
            </div>
            <p className='toc-subhead'><b>WHAT IS/ARE...</b></p>
            <div className="toc-item"> 
                <a href="/bill-of-rights">The Bill of Rights</a>
            </div>
            <div className="toc-item"> 
                <a href="/amendments-eleven-to-twenty-seven">The other 17 amendments</a>
            </div>
            <div className="toc-item"> 
                <a href="/the-us-senate">The Senate</a>
            </div>
            <div className="toc-item"> 
                <a href="/the-us-house-of-representatives">The House of Representatives</a>
            </div>
            <div className="toc-item"> 
                <a href="/all-elections">All the elections we vote in</a>
            </div>
            <div className="toc-item"> 
                <a href="/electoral-college">Electoral college</a>
            </div>
            <div className="toc-item"> 
                <a href="/whats-a-liberal">Liberal</a>
            </div>
            <div className="toc-item"> 
                <a href="/whats-a-conservative">Conservative</a>
            </div>
            <div className="toc-item"> 
                <a href="/whats-a-republican">Republican</a>
            </div>
            <div className="toc-item"> 
                <a href="/whats-a-democrat">Democrat</a>
            </div>

            
        </nav>
    )
}