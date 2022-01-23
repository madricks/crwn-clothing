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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log(userAuth.uid);
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
