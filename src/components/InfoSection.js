import React from 'react';

const InfoSection = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="border-2 border-white p-4 flex flex-col items-center">
        <div className="bg-red-500 w-24 h-24 mb-4" />
        <div className="flex items-center space-x-2">
          <div className="bg-white text-black p-2 rounded-full">a</div>
          <p>rweave &</p>
        </div>
      </div>
      <div className="border-2 border-white p-4 flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <div className="text-5xl">AO</div>
          <p>native</p>
        </div>
        <div className="bg-red-500 w-full h-4 mt-4" />
      </div>
    </div>
  );
};

export default InfoSection;
