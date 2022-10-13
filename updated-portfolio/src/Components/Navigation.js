import React, { useEffect } from 'react';
import { useGlobalState, setGlobalState } from '../utils/navigationState';

import { capitalizeFirstLetter } from '../utils';

const navLinks = ['Portfolio', 'About', 'Resume', 'Contact'];

const handlePage = page => {
  setGlobalState('currentPage', page);
};

function generateNavLinks() {
  return navLinks.map(link => (
    <a href={link} onClick={() => handlePage('portfolio')}>
      <p className="px-3">{link}</p>
    </a>
  ));
}

function Navigation() {
  const currentPage = useGlobalState('currentPage')[0];
  console.log(currentPage);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  });
  return (
    <div id="main" className="flex items-center justify-between px-3 pb-4 bg-white">
      {generateNavLinks()}
    </div>
  );
}

export default Navigation;
