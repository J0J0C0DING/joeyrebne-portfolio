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
      github: 'https://github.com/J0J0C0DING/Julias_Children',
      deployed: 'https://juliaschildren.herokuapp.com/',
    },
    {
      name: `Movie Finder`,
      category: 'web',
      description: `This web application allows anyone to search for a movie and find any streaming services offering it. `,
      src: 'movieFinder',
      github: 'https://github.com/J0J0C0DING/Movie-Finder',
      deployed: 'https://j0j0c0ding.github.io/Movie-Finder/',
    },
    {
      name: `Run Buddy`,
      category: 'web',
      description: `A website that offers fitness training services.`,
      src: 'runBuddy',
      github: 'https://github.com/J0J0C0DING/run-buddy',
      deployed: 'https://j0j0c0ding.github.io/run-buddy/',
    },
    {
      name: `Oh Snap!`,
      category: 'web',
      description: `A simple React App for a photographer's portfolio.`,
      src: 'ohSnap',
      github: 'https://github.com/J0J0C0DING/photo-port',
      deployed: 'https://j0j0c0ding.github.io/photo-port/',
    },
    {
      name: `Weather Dashboard`,
      category: 'web',
      description: `Ever want to know what the weather is? How about for the next five days? Did your phone die and the WeatherChannel is down? Well now you can get all that great information here.`,
      src: 'weatherApp',
      github: 'https://github.com/J0J0C0DING/weather-predictor',
      deployed: 'https://j0j0c0ding.github.io/weather-predictor/',
    },
    {
      name: `Work Day Scheduler`,
      category: 'web',
      description: `Plan out your day with this simple and easy to use daily planner.`,
      src: 'workDayPlanner',
      github: 'https://github.com/J0J0C0DING/workday-planner',
      deployed: 'https://j0j0c0ding.github.io/workday-planner/',
    },
    {
      name: `Foode`,
      category: 'mobile',
      description: `Redesign of social media application, Foode. Updated design offers cleaner UI with reduced clutter and simplified design.`,
      src: 'foode',
      deployed: 'https://www.figma.com/file/mIgNgPqJVd6Pdirb6HMw99/Foode-UI?node-id=0%3A1',
    },
    {
      name: `Unpacking the Opioid Epidemic`,
      category: 'design',
      description: `Junior design project. 32 page book on the Opioid Epidemic here in America.`,
      src: 'opioidEpidemic',
      deployed: 'https://joeyrebne.myportfolio.com/unpacking-the-opioid-epidemic',
    },
    {
      name: `Brainshopping`,
      category: 'design',
      description: `Two poster designs based on Ellen Lupton's 'Brainshopping'`,
      src: 'brainShopping',
      deployed: 'https://joeyrebne.myportfolio.com/brainshopping',
    },
    {
      name: `Book Cover Design`,
      category: 'design',
      description: `Concept book cover design for Margart Atwood's top selling books`,
      src: 'bookCover',
      deployed: 'https://joeyrebne.myportfolio.com/book-cover-design',
    },
    {
      name: `Mt. Telemark Branding`,
      category: 'design',
      description: `Senior year project to rebrand non-profit Mt. Telemark Village for their reoppening.`,
      src: 'mtTelemark',
      deployed: 'https://joeyrebne.myportfolio.com/mt-telemark-american-birkebeiner',
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
