import LogoEntityC from "./LogoEntityC";

const Header = () => {
  return (
    <div>
      <header className="flex flex-col p-2 md:p-4 bg-black">
        <div className="flex flex-row mr-20 md:gap-6 gap-14">
          <div className="text-white flex w-1/5 md:mr-64 lg:-ml-36 -ml-3">
            <LogoEntityC />
          </div>
          <div className="text-white flex w-1/5 md:mr-64 ">
            <LogoEntityC />
          </div>
          <div className="text-white flex w-1/5 ">
            <LogoEntityC />
          </div>
        </div>
        <div>
          <p className="text-sm text-white text-right mt-2.5 md:-mt-10">
            where [c] stands for more than just crypto
          </p>
        </div>
      </header>
    </div>
  );
};

export default Header;
