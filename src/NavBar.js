import React from 'react';
import { Link } from 'react-router-dom'


function Navbar(props) {
    return(
      <nav className="navbar">
        <ul className="navbar-nav"> { props.children } </ul>
        <ul><li className="navbar-item">LOGO</li></ul>
      </nav>
    )
}

export default Navbar;