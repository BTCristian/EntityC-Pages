import React, { useState } from "react";
import arweaveLogo from "../assets/ArweaveLogoDark.svg";
import aoLogo from "../assets/AoLogoDark.svg";

const MainContent = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="text-white mt-32 px-4 relative">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-none">
        <div>Building bridges</div>
        <div>
          between <span className="text-red-500">blockchain</span> and
        </div>
        <div>the trade world.</div>
      </div>

      <div className="flex flex-row mt-8 text-xl sm:text-2xl md:text-3xl">
        <img className="w-14 -mt-2" src={arweaveLogo} alt="Arweave Logo" />{" "}
        <p className="ml-2">Arweave & </p>
        <img className="w-14 -mt-2 ml-2 mr-2" src={aoLogo} alt="AO Logo" />
        <p>
          AO native
          <span className="border-b-4 border-red-500 inline-block w-16 sm:w-24"></span>
        </p>
      </div>

      {/* Hidden link */}
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
        onClick={toggleCollapse}
      >
        <div className="bg-red-500 text-white py-2 px-4 rounded shadow-lg hover:bg-red-700 transition-colors duration-300 cursor-pointer">
          {isCollapsed ? "Hide details" : "Read more about our mission"}
        </div>
      </div>
      <div
        className={`mt-10 transition-all duration-300 ease-in-out ${
          isCollapsed ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="bg-black p-4 text-xl leading-8">
          <p>
            This is more detailed content about our mission, explaining how we
            aim to build bridges between blockchain and the traditional world.
            Our mission is to make the technology accessible, understandable,
            and integrated into industries where it can provide real value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
