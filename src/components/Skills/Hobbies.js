import React from 'react';

export default function hobbies() {
  return (
    <div className='hobbies'>
      <h3>Intérêts</h3>
      <ul>
        <li className='hobbiy'>
          <i className='fas fa-drum' />
          <span>Batterie et percussions</span>
        </li>
        <li className='hobbiy'>
          <i className='fas fa-laptop' />
          <span>Nouvelles technologies</span>
        </li>
        <li className='hobbiy'>
          <i className='fas fa-snowboarding' />
          <span>Sports de glisse</span>
        </li>
        <li className='hobbiy'>
          <i className='fas fa-video' />
          <span>7ème art</span>
        </li>
      </ul>
    </div>
  );
}
