import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils';
import PortfolioList from '../ProjectList';

const categories = ['web', 'design', 'mobile'];

function Portfolio() {
  const [currentCategory, setCategory] = useState('web');
  return (
    <div
      id="portfolio"
      className="flex items-center justify-between border-gradient color-border flex-wrap"
    >
      <nav className="flex justify-between items-center w-full px-3 py-2 bg-gradient-to-r from-pink-500 to-yellow-500  text-white">
        {categories.map(category => (
          <div key={category} className="flex flex-wrap justify-center px-3 pb-4 w-24">
            <h2 className="px-5 pb-1" onClick={() => setCategory(category)}>
              {capitalizeFirstLetter(category)}
            </h2>
            <hr className={category === currentCategory ? 'w-10' : 'hidden'} />
          </div>
        ))}
      </nav>
      <section className="w-full flex justify-center">
        <PortfolioList currentCategory={currentCategory} />
      </section>
    </div>
  );
}

export default Portfolio;
