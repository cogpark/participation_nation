import React from 'react';
import { slide as Menu } from 'react-burger-menu';


export default function MobileNav() {
    return (
      <Menu right>
        <a id="home" className="menu-item" href="/voting">Voting info by state</a>
        <b>WHAT IS THE...</b>
        <a id="about" className="menu-item" href="/bill-of-rights">Bill of Rights</a>
        <a id="contact" className="menu-item" href="/amendments-elevent-to-twenty-seven">Amendments 11 to 27</a>
        <b>WHAT IS A...</b>
        <a className="menu-item--small" href="/whats-a-liberal">Liberal</a>
        <a className="menu-item--small" href="/whats-a-conservative">Conservative</a>
      </Menu>
    );

}