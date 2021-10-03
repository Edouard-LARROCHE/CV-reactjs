import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfolio/ProjectList';
import ScrollTop from '../components/ScrollTop';
import SocialNet from '../components/SocialNet';

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <Navigation />
      <div className='portfolioContent'>
        <ProjectList />
        <div className='scrollTop'>
          <ScrollTop />
        </div>
        <div className='socialNet'>
          <SocialNet />
        </div>
      </div>
    </div>
  );
}
