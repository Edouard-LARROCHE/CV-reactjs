import React from 'react';
import Navigation from '../components/Navigation';
import AdminLogin from '../components/admin/Admin';
import SocialNet from '../components/SocialNet';

export default function Admin() {
  return (
    <div className='admin'>
      <Navigation />
      <div className='adminContent'>
        <AdminLogin />
      </div>
      <div className='socialNet'>
        <SocialNet />
      </div>
    </div>
  );
}
