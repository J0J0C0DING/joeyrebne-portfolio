import React, { useEffect } from 'react';

import { capitalizeFirstLetter } from '../../utils';

const navLinks = ['portfolio', 'about', 'resume', 'contact'];

function Navigation(props) {
  const { currentPage, setCurrentPage } = props;
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  });
  return (
    <div id="main" className="w-full flex justify-center bg-black">
      <div className="flex items-center justify-between px-3 pb-4 md:w-2/3 ">
        {navLinks.map(link => (
          <a
            key={link}
            href={`#${link}`}
            className="navLink w-24"
            onClick={() => setCurrentPage(link)}
          >
            <p className="px-3 pb-2">{capitalizeFirstLetter(link)}</p>
            <hr className={currentPage === link ? 'w-14' : 'hidden'} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
