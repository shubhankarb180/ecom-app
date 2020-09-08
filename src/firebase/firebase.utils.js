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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;