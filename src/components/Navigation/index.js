import React from 'react';

function Navigation() {
  return (
    <div id="main" className="flex items-center justify-between px-3 ">
      <a href="#portfolio">
        <p className="px-3">My Work</p>
      </a>
      <a href="#about">
        <p className="px-3">About</p>
      </a>
      <a href="#resume">
        <p className="px-3">Resume</p>
      </a>
      <a href="#contact">
        <div id="contact" className="p-1 border-2 border-slate-500 bg-white">
          <p>Contact</p>
        </div>
      </a>
    </div>
  );
}

export default Navigation;
