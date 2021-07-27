import React from 'react';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

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
      </div>
      <div className="hidden md:block">
        <a href="https://discord.gg/bnademoverflow" target="_blank">
          <Button className="text-sm">Join Us</Button>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
