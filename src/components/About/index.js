import React from 'react';
import myData from './aboutData';

const name = myData.name;
const title = myData.title;
const bio = myData.bio;
const webSkills = myData.webSkills;
const designSkills = myData.designSkills;

function About() {
  return (
    <section>
      <div className="md:flex md:items-center">
        <div className="flex flex-wrap justify-center text-center mb-5">
          <img
            src={require('../../assets/images/profile/profile-picture.png')}
            alt="Joey Rebne"
            className="w-1/2 max-w-xs"
          />
          <h1 className="w-full">{name}</h1>
          <h3 className="font-light italic">{title}</h3>
        </div>
        <div id="about" className="p-3 mb-5 border-4 md:w-1/2 h-fit mx-6">
          <h2 className="font-bold text-2xl">&#123;01&#93; About Me</h2>
          <div>
            <p>{bio}</p>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-2xl py-3 text-white text-center bg-gradient-to-r from-pink-500 to-yellow-500 mb-5">
        &#123;02&#93; Skills
      </h2>

      {/* Web Skills */}
      <div id="webSkills" className="px-3 md:flex">
        <div id="webSkills" className="flex flex-wrap text-center justify-center mb-5 md:w-1/2">
          <h3 className="border-b-2 mb-5 pb-2 w-2/4 font-medium text-xl">Web</h3>
          <div className="flex flex-wrap justify-center">
            {webSkills.map(skill => (
              <div
                key={skill}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit p-3 text-white mb-2 font-bold mx-1 rounded-full"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Design Skills */}
        <div id="designSkills" className="flex flex-wrap text-center justify-center md:w-1/2 h-fit">
          <h3 className="border-b-2 mb-5 pb-2 w-2/4 font-medium text-xl h-fit">Design</h3>
          <div className="flex flex-wrap justify-center mb-10">
            {designSkills.map(skill => (
              <div
                key={skill}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit p-3 text-white mb-2 font-bold mx-1 rounded-full"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
