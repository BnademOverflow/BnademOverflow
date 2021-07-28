import React from 'react';
import LogoIcon from '../svg/LogoIcon';
import { Link } from 'gatsby';

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
        <Link to="https://twitter.com/BnademOverFlow">
          <button class="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-full mr-6">
            Follow Us
          </button>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
