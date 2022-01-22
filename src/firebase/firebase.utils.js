import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDDWyA6bZS_Kb9BJ8Fp93PtP_ikHFWd7to',
  authDomain: 'crwn-db-359f9.firebaseapp.com',
  projectId: 'crwn-db-359f9',
  storageBucket: 'crwn-db-359f9.appspot.com',
  messagingSenderId: '723121654444',
  appId: '1:723121654444:web:c7d645957e1eaca5b6ed09',
  measurementId: 'G-WFV4VJ8KK7',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
