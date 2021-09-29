import { useState, useEffect } from 'react';
import AdminHome from './adminHome/AdminHome';
import AdminLogin from './AdminLogin';
import firebase from '../firebase';
import 'firebase/auth';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem('auth')) {
      setAuth(true);
    }
  }, [auth]);

  const handleLogin = (e) => {
    e.preventDefault();
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

  const handleLogout = () => {
    firebase.auth().signOut();
    window.localStorage.removeItem('auth');
    setAuth(false);
  };

  return (
    <div>
      {auth ? (
        <AdminHome handleLogout={handleLogout} setAuth={setAuth} />
      ) : (
        <AdminLogin email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} />
      )}
    </div>
  );
}
