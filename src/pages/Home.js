import React from 'react';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className='home'>
      <Navigation />
      <div className='homeContent'>
        <div className='content'>
          <h1>Edouard-LARROCHE</h1>
          <h2>Développeur web Full-Stack junior</h2>
          <div className='pdf'>
            <a href='./assets/cv.pdf' target='_blank'>
              Télécharger
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
