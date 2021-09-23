import React from 'react';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';

const App = () => {
  return (
    <div>
      <Home />
      <Contact />
      <Skills />
      <Portfolio />
      <NotFound />
    </div>
  );
};

export default App;
