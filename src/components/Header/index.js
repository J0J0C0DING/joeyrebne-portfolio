import React from 'react';

function Header() {
  return (
    <header className="w-screen flex flex-wrap justify-center pt-5 items-center sticky top-0 pb-3 bg-white">
      <div className="mb-2">
        <img
          src={require('../../assets/images/branding/logo-full/full-logo-black.png')}
          alt="logo"
          className="h-7"
        />
      </div>
    </header>
  );
}

export default Header;
