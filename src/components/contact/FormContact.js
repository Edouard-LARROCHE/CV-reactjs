import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import { TextField } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function FormContact() {
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
      <div className='contactContent'>
        <h3 className='header'>Contactez-moi</h3>

        <form className='contact-form'>
          <TextField
            style={{ width: '20rem', paddingBottom: '1rem' }}
            type='text'
            id='name'
            name='name'
            onChange={(e) => setName(e.target.value)}
            placeholder='Nom *'
            value={name}
          />
          <TextField
            style={{ width: '20rem', paddingBottom: '1rem' }}
            type='text'
            id='company'
            name='company'
            onChange={(e) => setCompany(e.target.value)}
            placeholder='Nom Entreprise'
            value={company}
          />
          <TextField
            style={{ width: '20rem', paddingBottom: '1rem' }}
            type='tel'
            id='tel'
            name='tel'
            onChange={(e) => setTel(e.target.value)}
            placeholder='Téléphone'
            value={tel}
          />

          <TextField
            style={{ width: '20rem', paddingBottom: '1rem' }}
            type='email'
            id='email'
            autoComplete='off'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Adresse mail *'
            value={email}
          />

          <div className='email-err' />

          <TextField
            style={{ width: '20rem', paddingBottom: '1rem' }}
            multiline
            rows={2}
            rowsMax={10}
            type='textarea'
            id='message'
            name='message'
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Message *'
            value={message}
          />

          <div className='message-err' />

          <SendIcon className='send' onClick={handleSubmit} />
        </form>
        <div className='info'>
          <div className='map'>
            <i class='fas fa-map-marker-alt' />
            <h5>Région Ile De France</h5>
          </div>
          <div className='mail'>
            <i className='fas fa-at' />
            <CopyToClipboard text='edouard.larroche@gmail.com'>
              <h5
                onClick={() => {
                  alert('Adresse mail copié !');
                }}>
                edouard.larroche@gmail.com
              </h5>
            </CopyToClipboard>
          </div>
          <div className='phone'>
            <i className='fas fa-mobile-alt' />
            <h5>+33(0)6.64.69.97.78</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
