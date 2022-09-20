import React, { useState } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [pages] = useState([
    {
      page: 'About',
    },
    {
      page: 'Contact',
    },
    {
      page: 'Portfolio',
    },
    {
      page: 'Resume',
    },
  ]);

  const [currentPage, setCurrentPage] = useState('portfolio');

  return (
    <main>
      <header className="sticky top-0 z-10">
        <Header></Header>
        <Navigation
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navigation>
      </header>
      <section id={currentPage}>
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'about' && <About />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'resume' && <Resume />}
      </section>

      <Footer />
    </main>
  );
}
export default App;
