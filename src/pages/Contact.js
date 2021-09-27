import React from 'react';
import Navigation from '../components/Navigation';
import FormContact from '../components/contact/FormContact';
import SocialNet from '../components/SocialNet';

export default function Contact() {
  return (
    <div className='contact'>
      <Navigation />
      <FormContact />
      <div className='socialNet'>
        <SocialNet />
      </div>
    </div>
  );
}
