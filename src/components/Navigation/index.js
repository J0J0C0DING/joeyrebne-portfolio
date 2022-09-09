import React from 'react';

function Navigation() {
  return (
    <div className="flex items-center">
      <div id="main" className="flex px-3">
        <p className="px-3">My Work</p>
        <p className="px-3">About</p>
        <p className="px-3">Resume</p>
      </div>
      <div id="contact" className="p-1 border-2 border-slate-500">
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Navigation;
