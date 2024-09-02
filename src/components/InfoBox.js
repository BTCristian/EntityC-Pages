import React from 'react';

const InfoBox = () => {
  return (
    <div className="border-4 border-white p-6 mt-10 text-5xl text-white leading-tight w-max">
      <p>We see the path,</p>
      <p>we build the bridge, then</p>
      <p>We deconstruct it and</p>
      <p>walk you through the</p>
      <span>
        <span>□</span>
        <span>▣</span>
        <span className="text-red-500">▭</span>
        <span>◫</span>
        <span className="text-red-500">▣</span> experience
      </span>
    </div>
  );
};

export default InfoBox;
