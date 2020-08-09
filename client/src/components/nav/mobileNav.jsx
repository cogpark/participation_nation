import React from 'react';
import { slide as Menu } from 'react-burger-menu';


export default function MobileNav() {
    return (
      <Menu right>
        <a  href="/voting">Voting info by state</a>
        <b>WHAT IS THE...</b>
        <a href="/amendments-elevent-to-twenty-seven">Amendments 11 to 27</a>
        <a   href="/bill-of-rights">Bill of Rights</a>
            <b>WHAT IS A...</b>
        <a href="/whats-a-liberal">Liberal</a>
        <a href="/whats-a-conservative">Conservative</a>
        <a href="/whats-a-democrat">Democrat</a>
        <a href="/whats-a-republican">Republican</a>
      </Menu>
    );

}