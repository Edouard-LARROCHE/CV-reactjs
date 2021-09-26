import React from 'react';
import { TextField } from '@material-ui/core';

export default function AdminLogin() {
  return (
    <div className='admin'>
      <div className='adminContent'>
        <h3 className='test'> admin </h3>
        <form className='adminForm'>
          <TextField style={{ width: '20rem', paddingBottom: '1rem' }} type='text' placeholder='Nom *' />
        </form>
      </div>
    </div>
  );
}
