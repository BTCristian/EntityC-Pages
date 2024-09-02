import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
      </div>
      <p className="text-sm text-white">where [c] stands for more than just crypto</p>
    </div>
  );
};

export default Header;
