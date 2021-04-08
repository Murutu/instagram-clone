import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCyYebH0OHqTb8Nl8qmnzhzZ717iVCneW4',
  authDomain: 'instagram-34084.firebaseapp.com',
  projectId: 'instagram-34084',
  storageBucket: 'instagram-34084.appspot.com',
  messagingSenderId: '932853673956',
  appId: '1:932853673956:web:6c720a14c387fcf0afe1f1',
  measurementId: 'G-QWGRT1V6JB'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
