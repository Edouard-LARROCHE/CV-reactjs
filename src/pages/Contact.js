import React from 'react';
import Navigation from '../components/Navigation';
import FormContact from '../components/contact/FormContact';

export default function Contact() {
  return (
    <div className='contact'>
      <Navigation />
      <FormContact />
    </div>
  );
}
