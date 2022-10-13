import React from 'react';

import logo from '../../assets/images/branding/full-logo.svg';

function Header() {
  return (
    <div className="w-screen flex flex-wrap justify-center pt-5 items-center sticky top-0 pb-3 bg-black">
      <div className="mb-2">
        <img src={logo} alt="logo" className="h-7" />
      </div>
    </div>
  );
}

export default Header;
