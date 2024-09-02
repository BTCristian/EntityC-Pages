import React from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const teamMembers = [
  {
    img: img1,
    name: 'Claudiu',
    title: 'CTO',
    github: 'https://github.com/claudiu',
    linkedin: 'https://linkedin.com/in/claudiu',
    twitter: 'https://twitter.com/claudiu',
  },
  {
    img: img2,
    name: 'Octavian',
    title: 'Lead Engineer',
    github: 'https://github.com/octavian',
    linkedin: 'https://linkedin.com/in/octavian',
    twitter: 'https://twitter.com/octavian',
  },
  {
    img: img3,
    name: 'Alexandru aka Pierre',
    title: 'Founder',
    github: 'https://github.com/alexandru',
    linkedin: 'https://linkedin.com/in/alexandru',
    twitter: 'https://twitter.com/alexandru',
  },
];

const CoreTeam = () => {
  return (
    <div className="text-white mt-10">
      <p className="text-6xl my-12">Core Team</p>
      <div className="grid grid-cols-3 gap-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="h-40 w-40 flex items-center justify-center">
              <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
            </div>
            <p className="mt-4 text-lg">{member.name}</p>
            <p className="text-sm text-gray-400">{member.title}</p>
            <div className="flex space-x-4 mt-2">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="text-white hover:text-gray-400" />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-gray-400" />
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-white hover:text-gray-400" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreTeam;
