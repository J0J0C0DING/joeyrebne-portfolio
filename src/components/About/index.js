import React from 'react';

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
          <h1 className="w-full">Joseph Rebne</h1>
          <h3 className="font-light italic">Graphic Designer / Full Stack Web Developer</h3>
        </div>
        <div id="about" className="p-3 mb-5 border-4 md:w-1/2 h-fit mx-2">
          <h2 className="font-bold text-2xl">&#123;01&#93; About Me</h2>
          <div>
            <p>
              Minnesota raised graphic designer and web-developer. I graduated from the University
              of Wisconsin-Eau Claire in 2021 with a degree in Graphic Communications. I have since
              completed a full stack web development bootcamp at the University of Minnesota. I am
              an eager learner and enjoy new and challenging projects.
            </p>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-2xl py-3 text-white text-center bg-gradient-to-r from-pink-500 to-yellow-500 mb-5">
        &#123;02&#93; Skills
      </h2>
      <div id="skills" className="px-3 md:flex">
        {/* Web Skills */}
        <div id="webSkills" className="flex flex-wrap text-center justify-center mb-5 md:w-1/2">
          <h3 className="border-b-2 mb-2 w-3/4 font-medium text-xl">Web</h3>
          <div className="flex flex-wrap justify-center">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit p-3 text-white mb-2 font-bold mx-1 rounded-full">
              HTML5
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit p-3 text-white mb-2 font-bold mx-1 rounded-full">
              CSS3
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit p-3 text-white mb-2 font-bold mx-1 rounded-full ">
              Javascript
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit p-3 text-white mb-2 font-bold mx-1 rounded-full ">
              jQuery
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit p-3 text-white mb-2 font-bold mx-1 rounded-full ">
              Express.js
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit p-3 text-white mb-2 font-bold mx-1 rounded-full ">
              Node.js
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit p-3 text-white mb-2 font-bold mx-1 rounded-full ">
              React.js
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit p-3 text-white mb-2 font-bold mx-1 rounded-full ">
              MySQL
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit p-3 text-white mb-2 font-bold mx-1 rounded-full ">
              MongoDB
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit p-3 text-white mb-2 font-bold mx-1 rounded-full ">
              GitHub
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit p-3 text-white mb-2 font-bold mx-1 rounded-full ">
              TailwindCSS
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit p-3 text-white mb-2 font-bold mx-1 rounded-full ">
              Bootstrap
            </div>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-fit p-3 text-white mb-2 font-bold mx-1 rounded-full ">
              Handlebars
            </div>
          </div>
        </div>
        {/* Design Skills */}
        <div id="designSkills" className="flex flex-wrap text-center justify-center md:w-1/2 h-fit">
          <h3 className="border-b-2 mb-2 w-3/4 font-medium text-xl h-fit">Design</h3>
          <div className="flex flex-wrap justify-center">
            <div className="bg-gradient-to-r from-pink-500 to-yellow-500  w-fit h-fit p-3 text-white mb-2 font-bold mx-1 rounded-full">
              Photoshop
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-yellow-500  w-fit h-fit p-3 text-white mb-2 font-bold mx-1 rounded-full">
              Illustrator
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-yellow-500  w-fit h-fit p-3 text-white mb-2 font-bold mx-1 rounded-full">
              InDesign
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-yellow-500  w-fit h-fit p-3 text-white mb-2 font-bold mx-1 rounded-full">
              After Effects
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-yellow-500  w-fit h-fit p-3 text-white mb-2 font-bold mx-1 rounded-full">
              Figma
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
