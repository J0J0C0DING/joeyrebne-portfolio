import React, { useState } from 'react';
import Hover from './hover';

// List of projects
const PortfolioList = ({ category }) => {
  const [photos] = useState([
    {
      name: `Julia's Children`,
      category: 'web',
      description: `Julia's Children is a forum for chefs to find recipes and share recipes.`,
      src: 'juliasChildren',
    },
    {
      name: `Movie Finder`,
      category: 'web',
      description: `Web Finder`,
      src: 'movieFinder',
    },
    {
      name: `Run Buddy`,
      category: 'web',
      description: `Run Buddy`,
      src: 'runBuddy',
    },
  ]);

  // Filter photos by category
  const currentProjects = photos.filter(photo => photo.category === category);

  return (
    <div className="flex flex-wrap w-full">
      {currentProjects.map(image => {
        return <Hover project={image} key={image.name} />;
      })}
    </div>
  );
};

export default PortfolioList;
