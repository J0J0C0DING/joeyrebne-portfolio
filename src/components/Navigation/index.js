import React, { useEffect } from 'react';

import { capitalizeFirstLetter } from '../../utils';

function Navigation(props) {
  const { currentPage, setCurrentPage } = props;
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  });
  return (
    <div id="main" className="flex items-center justify-between px-3 pb-4 bg-black">
      <a href="#portfolio" onClick={() => setCurrentPage('portfolio')}>
        <p className="px-3">My Work</p>
      </a>
      <a href="#about" onClick={() => setCurrentPage('about')}>
        <p className="px-3">About</p>
      </a>
      <a href="#resume" onClick={() => setCurrentPage('resume')}>
        <p className="px-3">Resume</p>
      </a>
      <a href="#contact" onClick={() => setCurrentPage('contact')}>
        <div id="contact" className="p-1 border-2 border-slate-500 bg-black">
          <p>Contact</p>
        </div>
      </a>
    </div>
  );
}

export default Navigation;
