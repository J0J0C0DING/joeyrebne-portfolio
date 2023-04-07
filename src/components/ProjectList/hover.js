import React, { useState } from 'react';

import GitHubIcon from '../../assets/images/icons/social-media/GitHub.svg';

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
    <div className="w-full md:w-1/2">
      <div key={project.name} className="relative h-60 overflow-hidden">
        <img
          src={require(`../../assets/images/projectPreview/${project.category}/project-${project.src}.png`)}
          alt={project.name}
          key={project.name}
          className={'object-cover min-w-full min-h-full'}
          // Trigger isHovering state
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOut}
        />
        {/* Overlay */}
        <div
          // check if user is hovering, if so display div
          className={
            isHovering
              ? 'absolute top-0 h-full w-full backdrop-blur-sm backdrop-brightness-50 overflow-auto'
              : 'hidden'
          }
          // Keep isHovering state on when image is hovered
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseOut}
        >
          {/* display project data in div */}
          <div className="absolute top-1/4  px-2">
            <div className="flex flex-wrap">
              <h3 className="text-white text-2xl font-bold">{project.name}</h3>
            </div>
            <p className="text-white text-ellipsis">{project.description}</p>
            <div id="link buttons" className="flex space-x-3">
              {/* Add GitHub link if web application */}
              {project.category === 'web' ? (
                <div className="portButton rounded-md">
                  <a href={project.github} target="_blank" className="flex flex-wrap">
                    <img
                      src={GitHubIcon}
                      alt={`link to ${project.github}'s GitHub repository`}
                      className="h-6 icon-light pr-3"
                    />
                    <div>GitHub</div>
                  </a>
                </div>
              ) : (
                ''
              )}
              <div className="portButton rounded-md">
                <a href={project.deployed} target="_blank">
                  <h4 className=" text-white">View Here</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hover;
