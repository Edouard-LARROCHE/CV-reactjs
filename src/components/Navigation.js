import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className='sidebar'>
      <div className='id'>
        <div className='idcontent'>
          <img src='./assets/avatar2.png' alt='background' />
          <h3> Edouard LARROCHE</h3>
        </div>
      </div>
      <div className='navigation'>
        <ul>
          <li>
            <NavLink exact to='/' activeClassName='navActive'>
              <i className='fas fa-home' />
              <span>Acceuil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='skills' activeClassName='navActive'>
              <i className='fas fa-mountain' />
              <span>Skills</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='portfolio' activeClassName='navActive'>
              <i className='fas fa-images' />
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='contact' activeClassName='navActive'>
              <i className='fas fa-address-book' />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='socialNetwork'>
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/edouard-larroche-9099a6163/' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-linkedin' />
            </a>
          </li>
          <li>
            <a href='https://github.com/Edouard-LARROCHE' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-github' />
            </a>
          </li>
          <li>
            <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-twitter' />
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-facebook' />
            </a>
          </li>
        </ul>
        <div className='signature'>
          <p>Edouard CV - 2021</p>
        </div>
      </div>
    </div>
  );
}
