import React from 'react';

export default function AdminHome({ handleLogout }) {
  return (
    <div>
      <h3> Administration du site </h3>
      <div>
        <button type='button' onClick={handleLogout}>
          Déconnexion
        </button>
      </div>
    </div>
  );
}
