import React, { useState } from 'react';

const Hover = ({ project }) => {
  // Add hover state to trigger overlay
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="w-full">
      <div key={project.name} className="relative">
        <img
          src={require(`../../assets/images/projectPreview/${project.category}/project-${project.src}.png`)}
          alt={project.name}
          key={project.name}
          className="object-cover w-full max-h-52"
          // Trigger isHovering state
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
        />
        {/* Overlay */}
        <div
          // check if user is hovering, if so display div
          className={
            isHovering
              ? 'absolute top-0 h-full w-full backdrop-blur-sm backdrop-brightness-50'
              : 'hidden'
          }
          // Keep isHovering state on when image is hovered
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseOut}
        >
          {/* display project data in div */}
          <div className="absolute top-1/2  max-h-full overflow-auto">
            <div className="flex flex-wrap">
              <h2>{project.name}</h2>
              <a href={project.github}>
                <img
                  src={require('../../assets/images/icons/social-media/light/github-light.png')}
                  alt={`link to ${project.github}'s GitHub repository`}
                  className="h-6"
                />
              </a>
            </div>
            <a href={project.deployed}>
              <h4 className="italic">{project.deployed}</h4>
            </a>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hover;