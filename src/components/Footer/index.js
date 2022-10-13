import React from 'react';

import GitHubIcon from '../../assets/images/icons/social-media/GitHub.svg';
import BehanceIcon from '../../assets/images/icons/social-media/Behance.svg';
import InstagramIcon from '../../assets/images/icons/social-media/Instagram.svg';
import LinkedInIcon from '../../assets/images/icons/social-media/LinkedIn.svg';

function Footer() {
  return (
    <footer className="w-screen flex justify-center pt-5 items-center  bottom-0 pb-3 bg-gradient-to-r from-pink-500 to-yellow-500">
      <div className="flex flex-wrap w-full justify-center h-10">
        <a href="https://github.com/J0J0C0DING" className="h-full">
          <img src={GitHubIcon} alt="link to github" className="h-full px-2" />
        </a>
        <a href="https://www.linkedin.com/in/joeyrebne/" className="h-full">
          <img src={LinkedInIcon} alt="link to LinkedIn" className="h-full px-2" />
        </a>

        <a href="https://www.behance.net/joeyrebne" className="h-full">
          <img src={BehanceIcon} alt="link to behance" className="h-full px-2" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
