import { useState } from "react";
import LogoAnimation from "./LogoAnimation";

const LogoEntityC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center justify-center w-1/2 md:w-1/4 mx-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 109.69 51.09"
        className="transition-opacity duration-500 ease-in-out w-full h-auto"
      >
        <defs>
          <style>{`
            .cls-1 { fill: #fff; }
          `}</style>
        </defs>
        <g>
          <rect className="cls-1" width="49.69" height="10.55" />
          <rect className="cls-1" y="20.39" width="49.69" height="10.55" />
          <rect className="cls-1" y="40.55" width="49.69" height="10.55" />
          <rect className="cls-1" x="60" width="19.45" height="10.55" />
          <rect
            className="cls-1"
            x="60"
            y="40.55"
            width="19.45"
            height="10.55"
          />
          <rect className="cls-1" x="90" width="19.69" height="10.55" />
          <rect
            className="cls-1"
            x="90"
            y="40.55"
            width="19.69"
            height="10.55"
          />
          <rect
            className="cls-1"
            x="60"
            y="20.39"
            width="19.45"
            height="10.31"
          />
        </g>
      </svg>
      {hovered && (
        <div className="flex top-0 left-1/2 transform -translate-x-1/2 md:left-0">
          <LogoAnimation />
        </div>
      )}
    </div>
  );
};

export default LogoEntityC;
