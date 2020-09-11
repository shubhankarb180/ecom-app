import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

export const dbCheck = () => {
    console.log(firestore.collection('users').then((data) => console.log(data.json())));
}
