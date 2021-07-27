import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from 'src/components/svg/LogoIcon';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <a href="/">
            <LogoIcon />
          </a>
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#Community">
          Overview
        </AnchorLink>
        <AnchorLink className="px-4" href="#About">
          About
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4" href="#Leaders">
          Community
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
