import React from 'react';
import './App.css';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
