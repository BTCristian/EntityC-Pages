import React from 'react';

const Footer = () => {
  return (
    <div className=" mt-10">
      <p className="text-3xl mb-4">We see the path,</p>
      <p className="mb-4">We build the bridge, then</p>
      <p className="text-2xl mb-4">We deconstruct it and explain to you our entire</p>
      <p className="text-3xl">experience</p>
      <div className="flex justify-center space-x-4 mt-4">
        <div className="h-8 w-8 border-2 border-white" />
        <div className="h-8 w-8 bg-red-500" />
        <div className="h-8 w-8 border-2 border-white" />
        <div className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Footer;
