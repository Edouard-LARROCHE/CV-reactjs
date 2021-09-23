import React from 'react';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className='home'>
      <Navigation />
      <div className='homeContent'>
        <div className='content'>
          <h2>Edouard-LARROCHE</h2>
          <h3>Développeur web Full-Stack junior</h3>
          <div className='pdf'>
            <a href='./assets/cv.pdf' target='_blank'>
              Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
