import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBUBgBhdwqp3ZJ-WaCWowGa-fJBYL9pefg",
    authDomain: "crwn-clothing-21768.firebaseapp.com",
    databaseURL: "https://crwn-clothing-21768.firebaseio.com",
    projectId: "crwn-clothing-21768",
    storageBucket: "",
    messagingSenderId: "18535560377",
    appId: "1:18535560377:web:0950f97d3dec3107c39768",
    measurementId: "G-S4KFYXL4VR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;