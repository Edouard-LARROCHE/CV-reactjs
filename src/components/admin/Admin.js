import { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import firebase from '../../firebase';
import 'firebase/auth';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem('auth')) {
      setAuth(true);
    }
  }, [auth]);

  const handleLogin = () => {
    setEmail('');
    setPassword('');
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        user
          .getIdTokenResult()
          .then((results) => {
            setAuth(true);
            window.localStorage.setItem('auth', results.token);
          })
          .catch((error) => {
            // eslint-disable-next-line
            console.log(error);
            setAuth(false);
          });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogout = () => {
    firebase.auth().signOut();
    window.localStorage.removeItem('auth');
    setAuth(false);
  };

  return (
    <div>
      {auth ? (
        <div setAuth={setAuth}>
          <h3> Welcome Admin Home </h3>
          <div>
            <button type='button' onClick={handleLogout}>
              Déconnexion
            </button>
          </div>
        </div>
      ) : (
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

              <LockOpenIcon type='submit' className='unLock' onClick={handleSubmit} />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
