import React from 'react';
import Navigation from '../Navigation';

function Header() {
  return (
    <header>
      <div className="h-14 mx-4 mt-3">
        <img
          src={require('../../assets/images/branding/logo-full/full-logo-black.png')}
          alt="logo"
          className="h-1/2"
        />
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
