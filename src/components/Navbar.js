import React from 'react';
// import 'C:/Users/ASingh/PycharmProjects/tvishdhi/src/styles/Navbar.css';
import logo from '../assets/images/logo.png';
import '../styles/Navbar.css';
// import logo from '../assets/images/logo.png'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-text">
        <img src={logo} alt="TvishDhi Logo" className="logo-image" />
        <span className="logo-text">TvishDhi</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#partners">Expertise</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
