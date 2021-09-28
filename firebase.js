import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCFlTb2Y2Ayu-oOK3NHkeKtBnHNHI4hK9Q',
  authDomain: 'edouard-cv.firebaseapp.com',
  //   databaseURL: 'https://react-digital-cv-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'edouard-cv',
  storageBucket: 'edouard-cv.appspot.com',
  messagingSenderId: '542635442750',
  appId: '1:542635442750:web:c7c2cb28425e059c23476f',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
