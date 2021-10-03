import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';

export default function AdminLogin({ email, setEmail, password, setPassword, handleLogin }) {
  const failLogin = () => {
    const errLogin = document.querySelector('.fail-login');
    errLogin.innerHTML = 'Adresse mail ou mot de passe invalide';
    if (handleLogin()) {
      errLogin.style.display = 'none';
    } else {
      errLogin.style.display = 'block';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    failLogin();
  };

  return (
    <div className='admin'>
      <div className='adminContent'>
        <h3> Administration du site </h3>

        <form className='adminForm' onSubmit={handleLogin}>
          <TextField
            style={{ width: '18rem', paddingBottom: '1rem' }}
            type='email'
            id='email'
            placeholder='Adresse mail *'
            autoComplete='off'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            style={{ width: '18rem', paddingBottom: '1rem' }}
            type='password'
            id='password'
            placeholder='Mot de passe *'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='fail-login' />

          <LockOpenIcon className='unLock' onclick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

AdminLogin.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};
