import React from 'react';
import '../styles/components/NavFooter.styl';

function NavFooter() {
  return (
    <nav className="NavFooter">
      <ol className="NavFooter__list">
        <li className="NavFooter_element">
          <a href="/">TECHNOLOGY</a>
        </li>
        <li className="NavFooter_element">
          <a href="/">IDEAS</a>
        </li>
        <li className="NavFooter_element">
          <a href="/">LEADERSHIP</a>
        </li>
        <li className="NavFooter_element">
          <a href="/">VIDEO</a>
        </li>
        <li className="NavFooter_element">
          <a href="/">NEWS</a>
        </li>
        <li className="NavFooter_element">
          <a href="/">FINANCE</a>
        </li>
        <li className="NavFooter_element">
          <a href="/">ENTERTAIMENT</a>
        </li>
      </ol>
    </nav>
  );
}

export default NavFooter;
