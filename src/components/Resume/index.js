import React from 'react';

function Resume() {
  return (
    <section className="text-center">
      <a href="https://docs.google.com/document/d/1_w797203cdiS2SatXPWKnz_N4R-zjALUyOy4RG7m1nw/edit?usp=sharing">
        <p className="font-bold underline underline-offset-4 bg-gradient-to-r from-pink-500 to-yellow-500 p-5 text-white">
          View Here!
        </p>
      </a>

      <img src={require('../../assets/resume_Page_1.png')} alt="resume page 1"></img>
      <img src={require('../../assets/resume_Page_2.png')} alt="resume page 1"></img>
    </section>
  );
}

export default Resume;
