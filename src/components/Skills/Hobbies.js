import React from 'react';

export default function hobbies() {
  return (
    <div className='hobbies'>
      <h3>Intérêts</h3>
      <ul>
        <li className='hobbiy'>
          <i className='fas fa-drum' />
          <span>Batterie et percussion</span>
        </li>
        <li className='hobbiy'>
          <i className='fas fa-laptop' />
          <span>Nouvelle technologie</span>
        </li>
        <li className='hobbiy'>
          <i className='fas fa-snowboarding' />
          <span>Sport de glisse</span>
        </li>
        <li className='hobbiy'>
          <i className='fas fa-video' />
          <span>7éme art</span>
        </li>
      </ul>
    </div>
  );
}
