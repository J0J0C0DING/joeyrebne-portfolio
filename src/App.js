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
    <div className="site">
      <header className="sticky top-0 z-10">
        <Header />
        <Navigation
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navigation>
      </header>
      <main className="content">
        <section id={currentPage}>
          {currentPage === 'portfolio' && <Portfolio />}
          {currentPage === 'about' && <About />}
          {currentPage === 'contact' && <Contact />}
          {currentPage === 'resume' && <Resume />}
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default App;
