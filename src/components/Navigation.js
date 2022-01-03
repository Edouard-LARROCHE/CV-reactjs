import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialNet from './SocialNet';
import CopyrightIcon from '@material-ui/icons/Copyright';

export default function Navigation() {
  return (
    <div className='sidebar'>
      <div className='id'>
        <div className='idcontent'>
          <img src='./assets/avatar1.jpg' alt='background' />
          <h3> Edouard LARROCHE</h3>
          <p className='title-desc'> Développeur front-end React </p>
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
          <li>
            <NavLink exact to='admin' activeClassName='navActive'>
              <i className='fa fa-user-circle' />
              <span>Admin</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='socialNetwork'>
        <SocialNet />
      </div>
      <div className='signature'>
        <span>
          Edouard.CV
          <CopyrightIcon className='copyright' />
          2021
        </span>
      </div>
    </div>
  );
}
