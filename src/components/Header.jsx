import LogoEntityC from "./LogoEntityC";
import LogoCensus from "./LogoCensus";
import LogoCode from "./LogoCode";

const Header = () => {
  return (
    <div>
      <header className="flex flex-col p-2 md:p-4 bg-black">
        <div className="flex flex-row mr-20 md:gap-6 gap-14">
          <a
            href="#EntityC" // Replace with the actual URL
            // target="_blank" // Enable open in new tab
            rel="noopener noreferrer"
            className="text-white flex w-1/5 md:mr-64 lg:-ml-36 -ml-3"
          >
            <LogoEntityC />
          </a>

          <a
            href="#Census"
            // target="_blank" // Enable open in new tab
            rel="noopener noreferrer"
            className="text-white flex w-1/5 md:mr-64 "
          >
            <LogoCensus />
          </a>
          <a
            href="#Census"
            // target="_blank" // Enable open in new tab
            rel="noopener noreferrer"
            className="text-white flex w-1/5 "
          >
            <LogoCode />
          </a>
        </div>
        <div>
          <p className="text-xs md:text-sm text-white text-right mt-2.5 md:-mt-10 font-no-exit">
            where [c] stands for more than just crypto
          </p>
        </div>
      </header>
      <div className="text-right text-white md:text-2xl text-sm font-no-exit ">
        <a href="#Blog">
          <span className="md:mr-20 mr-10 hover:text-red-500">Blog</span>
        </a>
        <a href="#">
          <span className="md:mr-20 mr-10 hover:text-red-500">Twitter/X</span>
        </a>
        <a href="#">
          <span className="md:mr-20 mr-10 hover:text-red-500">
            Discord-Research Hub
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
