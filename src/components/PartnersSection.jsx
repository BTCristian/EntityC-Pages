import logoDLL from "../assets/dllLogo.svg";
import fmiLogo from "../assets/facultateaMI.svg";
import fwdLogo from "../assets/fwdLogoDark.svg";

const PartnersSection = () => {
  return (
    <div className="px-2 pt-10 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-6 mb-10">
      <span className="font-semibold text-2xl text-white uppercase">
        Partners
      </span>
      <div className="flex flex-wrap justify-center items-center mt-8 sm:justify-between">
        <a
          href="https://fwd.g8way.io/"
          className="w-1/5 mr-10 mb-5 lg:mb-0 "
          target="_blank"
        >
          <img src={fwdLogo} alt="fwdResearch Logo" />
        </a>
        <a
          href="https://www.decent.land/"
          className="w-1/6 mr-10 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
          target="_blank"
        >
          <img src={logoDLL} alt="DLL Logo" />
        </a>
        <a
          href="https://fmi.unibuc.ro/"
          className="w-1/6 mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
          target="_blank"
        >
          <img src={fmiLogo} alt="University logo" />
        </a>
      </div>
    </div>
  );
};

export default PartnersSection;
