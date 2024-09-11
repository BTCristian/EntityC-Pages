import React from "react";
import arweaveLogo from "../assets/ArweaveLogoDark.svg";
import aoLogo from "../assets/AoLogoDark.svg";

const MainContent = () => {
  return (
    <div className="text-white mt-32 px-4 ">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-none">
        <div>Building bridges</div>
        <div>
          between <span className="text-red-500">blockchain</span> and
        </div>
        <div>the trad world.</div>
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
    </div>
  );
};

export default MainContent;
