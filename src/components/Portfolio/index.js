import React, { useState } from 'react';
import PortfolioList from '../ProjectList';

function Portfolio() {
  const [category, setCategory] = useState('web');
  return (
    <div
      id="portfolio"
      className="flex items-center justify-between border-gradient color-border flex-wrap"
    >
      <nav className="flex justify-between w-full px-3 bg-gradient-to-r from-pink-500 to-yellow-500 p-5 text-white">
        <h2 onClick={() => setCategory('web')}>Web</h2>
        <h2 onClick={() => setCategory('design')}>Graphic Design</h2>
        <h2 onClick={() => setCategory('mobile')}>Mobile</h2>
      </nav>
      <section className="w-full">
        <PortfolioList category={category} />
      </section>
    </div>
  );
}

export default Portfolio;
