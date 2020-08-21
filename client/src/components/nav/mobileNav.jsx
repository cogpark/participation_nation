import React from 'react';
import { slide as Menu } from 'react-burger-menu';


export default function MobileNav() {
    return (
      <Menu right>
        <a  href="/voting">Voting info by state</a>
        <b>WHAT IS/ARE...</b>

        <a href="/bill-of-rights">Bill of Rights</a>
        <a href="/amendments-elevent-to-twenty-seven">the other 17 amendments</a>
        <a href="/the-us-senate">The Senate</a>
        <a href="/the-us-house-of-representatives">The House of Representatives</a>
        <a href="/the-supreme-court">The Supreme Court</a>
        <a href="/all-elections">All the elections we hold</a>
        <a href="/electoral-college">Electoral college</a>
        <a href="/just-moved-voting">Voting when you just moved</a>
        <a href="/whats-a-liberal">Liberal</a>
        <a href="/whats-a-conservative">Conservative</a>
        <a href="/whats-a-democrat">Democrat</a>
        <a href="/whats-a-republican">Republican</a>
        <a href="/whats-a-libertarian">Libertarian</a>
      </Menu>
    );

}