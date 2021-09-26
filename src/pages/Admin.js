import React from 'react';
import Navigation from '../components/Navigation';
import AdminLogin from '../components/admin/AdminLogin';

export default function Admin() {
  return (
    <div className='admin'>
      <Navigation />
      <AdminLogin />
    </div>
  );
}
