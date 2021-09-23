import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='notFound'>
      <div className='notFoundcontent'>
        <h3>Désolé cette page n'existe pas !</h3>
        <NavLink exact to='/'>
          <i className='fas fa-home' />
          <span> Acceuil </span>
        </NavLink>
      </div>
    </div>
  );
}
