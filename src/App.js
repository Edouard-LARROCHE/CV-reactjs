import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Admin from './pages/Admin';

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <div className='app' data-theme={theme}>
      <div onClick={switchTheme}>
        {theme === 'light' ? <Brightness4Icon style={{ cursor: 'pointer' }} /> : <Brightness5Icon style={{ cursor: 'pointer' }} />}
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/skills' component={Skills} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
          <Route path='/admin' component={Admin} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
