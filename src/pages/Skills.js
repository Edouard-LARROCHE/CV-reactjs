import React from 'react';
import Navigation from '../components/Navigation';
import Experience from '../components/Skills/Experience';
import Hobbies from '../components/Skills/Hobbies';
import Languages from '../components/Skills/Languages';
import OthersSkills from '../components/Skills/OthersSkills';

export default function Skills() {
  return (
    <div className='skills'>
      <Navigation />
      <div className='skillsContent'>
        <Languages />
        <Experience />
        <Hobbies />
        <OthersSkills />
      </div>
    </div>
  );
}
