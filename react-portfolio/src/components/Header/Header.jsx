import React from 'react';
import './Header.css';
import CTA from './CTA';
import Me from '../../assets/me-about.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1>Timothy Urbom</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="Me" />
        </div>
        <a href="#Contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
