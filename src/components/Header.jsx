import LogoEntityC from "./LogoEntityC";
import LogoCensus from "./LogoCensus";
import LogoCode from "./LogoCode";

const Header = () => {
  return (
    <div>
      <header className="flex flex-col pl-4 pt-4 xl:pt-4 bg-black">
        <div className="flex flex-row 2xl:gap-x-80 xl:gap-x-40 lg:gap-x-24">
          <a
            href="#EntityC" // Replace with the actual URL
            // target="_blank" // Enable open in new tab
            rel="noopener noreferrer"
            className="text-white flex"
          >
            <div className="2xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-1/4 w-1/5 ">
              <LogoEntityC />
            </div>
          </a>

          <a
            href={import.meta.env.VITE_APP_CENSUS_PAGES_URL}
            // target="_blank" // Enable open in new tab
            rel="noopener noreferrer"
            className="text-white flex"
          >
            <div className="2xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-1/4 w-1/5 ">
              <LogoCensus />
            </div>
          </a>
          <a
            href={import.meta.env.VITE_APP_CODE_PAGES_URL}
            // target="_blank" // Enable open in new tab
            rel="noopener noreferrer"
            className="text-white flex"
          >
            <div className="2xl:w-1/2 xl:w-1/3 lg:w-1/3 md:w-1/4 w-1/5 ">
              <LogoCode />
            </div>
          </a>
        </div>
        <div>
          <p className="text-xs lg:text-sm text-white text-right mt-6 mr-2 2xl:ml-40 xl:mt-8 2xl:-mt-12">
            where [c] stands for more than just crypto
          </p>
        </div>
        <div> </div>
      </header>
      <div className="text-right mt-5 text-white md:text-2xl text-sm font-no-exit ">
        <a href={import.meta.env.VITE_APP_BLOG_URL}>
          <span className="md:mr-20 mr-10 hover:text-red-500">Blog</span>
        </a>
        <a href={import.meta.env.VITE_APP_X_URL}>
          <span className="md:mr-20 mr-10 hover:text-red-500">Twitter/X</span>
        </a>
        <a href={import.meta.env.VITE_APP_DISCORD_HUB_URL}>
          <span className="md:mr-20 mr-10 hover:text-red-500">
            Discord-Research Hub
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
