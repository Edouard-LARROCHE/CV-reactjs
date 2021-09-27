import React from 'react';
import Navigation from '../components/Navigation';
import ProjectList from '../components/portfolio/ProjectList';
import SocialNet from '../components/SocialNet';

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <Navigation />
      <ProjectList />
      <div className='socialNet'>
        <SocialNet />
      </div>
    </div>
  );
}
