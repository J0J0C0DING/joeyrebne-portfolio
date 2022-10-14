import React, { useEffect } from 'react';

import { capitalizeFirstLetter } from '../../utils';

const navLinks = ['portfolio', 'about', 'resume', 'contact'];

function Navigation(props) {
  const { currentPage, setCurrentPage } = props;
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  });
  return (
    <div id="main" className="flex items-center justify-between px-3 pb-4 bg-black">
      {navLinks.map(link => (
        <a href={`#${link}`} className="navLink w-24" onClick={() => setCurrentPage(link)}>
          <p className="px-3 pb-2">{capitalizeFirstLetter(link)}</p>
          <hr className={currentPage === link ? 'w-14' : 'hidden'} />
        </a>
      ))}
    </div>
  );
}

export default Navigation;
