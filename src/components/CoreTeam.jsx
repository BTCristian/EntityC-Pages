import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const CoreTeam = () => {
  return (
    <div className="text-white mt-10 mb-4">
      <p className="md:text-6xl text-3xl my-12 pl-3">Core Team</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 justify-center">
        {/* Claudiu's Section */}
        <div className="flex flex-col items-center">
          <div className="md:h-40 md:w-40 h-16 w-16 flex items-center justify-center">
            <img
              src={img1}
              alt="Claudiu"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-4 text-md md:text-4xl ">Claudiu</p>
          <p className="md:text-2xl text-sm text-gray-400">CTO</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://github.com/claoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-white hover:text-gray-400"
              />
            </a>
            <a
              href="https://twitter.com/claudiu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-white hover:text-gray-400 "
              />
            </a>
            {/* Add any other contacts here */}
          </div>
        </div>

        {/* Octavian's Section */}
        <div className="flex flex-col items-center">
          <div className="md:h-40 md:w-40 h-16 w-16 flex items-center justify-center">
            <img
              src={img2}
              alt="Octavian"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-4 text-md md:text-4xl ">Octavian</p>
          <p className="md:text-2xl text-sm text-gray-400">Lead Engineer</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://github.com/gavianu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-white hover:text-gray-400"
              />
            </a>
            {/* Add any other contacts here */}
          </div>
        </div>

        {/* Alexandru's Section */}
        <div className="flex flex-col items-center">
          <div className="md:h-40 md:w-40 h-16 w-16 flex items-center justify-center">
            <img
              src={img3}
              alt="Alexandru"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-4 text-md md:text-4xl ">Alexandru aka Pierre</p>
          <p className="md:text-2xl text-sm text-gray-400">Founder</p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://github.com/EntityC-HQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-white hover:text-gray-400"
              />
            </a>
            <a
              href="https://twitter.com/alexandru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                className="text-white hover:text-gray-400"
              />
            </a>
            {/* Add any other contacts here */}
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-3 mt-6 mb-14">
        <div className="md:h-8 md:w-8 h-4 w-4 bg-red-500" />
        <div className="md:h-8 md:w-8 h-4 w-4 border-2 border-white" />
        <div className="md:h-8 md:w-8 h-4 w-4 border-2 border-white" />
      </div>
    </div>
  );
};

export default CoreTeam;
