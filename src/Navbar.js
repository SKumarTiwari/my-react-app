// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#333',
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  };

  const liStyle = {
    float: 'left',
  };

  const linkStyle = {
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: '14px 16px',
   
    textDecoration: 'none',
  };

  const linkHoverStyle = {
    backgroundColor: '#ddd',
    color: 'black',
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="/" style={linkStyle}>Home</Link></li>
        <li style={liStyle}><Link to="/registration" style={linkStyle}>Registration</Link></li>
        <li style={liStyle}><Link to="/news" style={linkStyle}>News</Link></li>
        {/* <li style={liStyle}><Link to="/about" style={linkStyle}>About</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
