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
          className={'object-cover w-full max-h-52'}
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
          <div className="absolute top-1/3  min-h-full overflow-auto px-2">
            <div className="flex flex-wrap">
              <h2 className="text-white text-xl">{project.name}</h2>
              {/* Add GitHub link if web application */}
              {project.category === 'web' ? (
                <a href={project.github}>
                  <img
                    src={require('../../assets/images/icons/social-media/light/github-light.png')}
                    alt={`link to ${project.github}'s GitHub repository`}
                    className="h-6 pl-3"
                  />
                </a>
              ) : (
                ''
              )}
            </div>
            <a href={project.deployed}>
              <h4 className="italic underline text-white py-2">view here</h4>
            </a>
            <p className="text-white overflow-ellipsis">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hover;
