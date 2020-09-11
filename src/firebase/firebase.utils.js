import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA6wiMFlCyMkEHlfbE2w1pY_rJrZNzQRHY",
    authDomain: "crwn-ecom-app.firebaseapp.com",
    databaseURL: "https://crwn-ecom-app.firebaseio.com",
    projectId: "crwn-ecom-app",
    storageBucket: "crwn-ecom-app.appspot.com",
    messagingSenderId: "530672059042",
    appId: "1:530672059042:web:2b2978c496b48da71a4dfb",
    measurementId: "G-GRZSTDRPH4"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }catch(err) {
      console.log('Error creating User - ' + err.message);
    }
  } 

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;