import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './components/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContent = () => {
  const { dm } = useContext(ThemeContext);

  return (
    <div className={dm ? 'bg-dmbg pt-1 transition-all duration-200' : 'bg-bg pt-1 transition-all duration-200'}>
      <Header />
      <Hero />
      <Education />
      <Skill />
      <Contact/>
      <Footer/>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
