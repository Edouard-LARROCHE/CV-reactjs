import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className='sidebar'>
      <div className='id'>
        <div className='idcontent'>
          <img src='./assets/avatar.jpg' alt='background' />
          <h3> Edouard LARROCHE</h3>
        </div>
      </div>
      <div className='navigation'>
        <ul>
          <li>
            <NavLink exact to='/' activeClassName='navActive'>
              <i className='fas fa-home'></i>
              <span>Acceuil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='skills' activeClassName='navActive'>
              <i className='fas fa-mountain'></i>
              <span>Skills</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='portfolio' activeClassName='navActive'>
              <i className='fas fa-images'></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='contact' activeClassName='navActive'>
              <i className='fas fa-address-book'></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
