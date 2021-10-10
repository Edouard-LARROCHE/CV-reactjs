import React from 'react';

export default function AdminHome({ handleLogout }) {
  return (
    <div>
      <h3> Administration du site </h3>
      <div>
        <p className='deco' onClick={handleLogout}>
          Déconnexion
        </p>
      </div>
    </div>
  );
}
