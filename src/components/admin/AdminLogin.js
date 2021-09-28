import React from 'react';
import { TextField } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';

export default function AdminLogin() {
  return (
    <div className='admin'>
      <div className='adminContent'>
        <h3> administration du site </h3>

        <form className='adminForm'>
          <TextField
            style={{ width: '18rem', paddingBottom: '1rem' }}
            type='email'
            id='email'
            placeholder='Adresse mail *'
            autoComplete='off'
            required
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <div className='email-err' />

          <TextField
            style={{ width: '18rem', paddingBottom: '1rem' }}
            type='password'
            id='password'
            placeholder='Mot de passe *'
            required
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          <div className='password-err' />

          <LockOpenIcon className='unLock' />
        </form>
      </div>
    </div>
  );
}
