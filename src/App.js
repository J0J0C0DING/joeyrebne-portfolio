import React from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
// import About from './components/About';
// import Gallery from './components/Gallery';
// import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <header className="sticky top-0 z-10">
        <Header></Header>
      </header>

      <Portfolio></Portfolio>
    </div>
  );
}
export default App;
