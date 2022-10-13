import React from 'react';
import Navigation from './Navigation';

import logo from '../Assets/images/branding/logo/full-logo.svg';

function Header() {
  return (
    <div className="w-screen flex flex-wrap justify-center pt-5 items-center sticky top-0 pb-3 bg-white">
      <div className="mb-2">
        <img src={logo} alt="logo" className="h-5" />
        <h2 className="font-brand">This is a header</h2>
      </div>
      <Navigation />
    </div>
  );
}

export default Header;
