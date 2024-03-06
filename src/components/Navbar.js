import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Function to handle scroll event
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) { // You can adjust the value based on when you want the navbar to change
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Add and remove the window scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#about" onClick={(e) => scrollToSection('about', e)} className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#experience" onClick={(e) => scrollToSection('experience', e)} className="nav-link">Experience</a>
        </li>
        <li className="nav-item">
          <a href="#contact" onClick={(e) => scrollToSection('contact', e)} className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
