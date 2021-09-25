import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { TextField, Grid } from '@material-ui/core';

export default function Contact() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendBack = (templateId, variables) => {
    window.emailjs.send('service_ioi4pk3', templateId, variables).then(() => {
      setName('');
      setCompany('');
      setTel('');
      setEmail('');
      setMessage('');
    });
    // .catch((err) => {});
  };

  const isEmail = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      return true;
    }
    return '';
  };

  const failEmail = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const errEmail = document.querySelector('.email-err');
    errEmail.innerHTML = 'Merci de remplir une adresse mail valide *';
    if (email.match(regex)) {
      errEmail.style.display = 'none';
    } else {
      errEmail.style.display = 'block';
    }
  };

  const failMessage = () => {
    const errMessage = document.querySelector('.message-err');
    errMessage.innerHTML = 'Merci de remplir les champs requis *';
    if (name && email && message) {
      errMessage.style.display = 'none';
    } else {
      errMessage.style.display = 'block';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    failEmail();
    failMessage();

    if (name && isEmail() && message) {
      sendBack('template_gvs6rqv', {
        name,
        company,
        tel,
        email,
        message,
      });
    } else {
    }
  };
  return (
    <div className='contact'>
      <Navigation />
      <div className='contactContent'>
        <h3 className='header'>Contactez-moi</h3>
        <Grid component='form' container required justify='center' style={{ width: '90%', maxWidth: '500px', margin: '0 auto' }}>
          <TextField hintText='Enter your Occupation' floatingLabelText='Occupation' placeholder='jhhj' />
        </Grid>
        <form className='contact-form'>
          <div className='form-content'>
            <input type='text' id='name' name='name' onChange={(e) => setName(e.target.value)} placeholder='Nom *' value={name} />
            <input
              type='text'
              id='company'
              name='company'
              onChange={(e) => setCompany(e.target.value)}
              placeholder='Nom Entreprise'
              value={company}
            />
            <input type='tel' id='tel' name='tel' onChange={(e) => setTel(e.target.value)} placeholder='Téléphone' value={tel} />
            <div className='email-content'>
              <input
                type='email'
                id='email'
                autoComplete='off'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Adresse mail *'
                value={email}
              />
            </div>

            <div className='email-err' />

            <textarea
              type='textarea'
              id='message'
              name='message'
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Message *'
              value={message}
            />

            <div className='message-err' />
          </div>
          <div>
            <button className='button' value='Envoyer' type='submit' onClick={handleSubmit}>
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
