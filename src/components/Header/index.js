import React from 'react';
import Navigation from '../Navigation';

function Header() {
  return (
    <header className="w-screen flex flex-wrap justify-center mt-5 items-center">
      <div className="mb-4">
        <img
          src={require('../../assets/images/branding/logo-full/full-logo-black.png')}
          alt="logo"
          className="h-7"
        />
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
