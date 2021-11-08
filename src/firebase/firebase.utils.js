import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; //DB
import 'firebase/compat/auth'; //Auth

//The config object is how firebase knows that 
//your application is connected to your
//firebase account and database!
const config = {
    apiKey: "AIzaSyD7aouWXOBc5rwvURnvH6MPbr4Wfx8okFo",
    authDomain: "crwn-db-438af.firebaseapp.com",
    projectId: "crwn-db-438af",
    storageBucket: "crwn-db-438af.appspot.com",
    messagingSenderId: "663369118220",
    appId: "1:663369118220:web:e77d8d5d83e97f40a03429",
    measurementId: "G-LJCLVYK4M1"
};

//Creates and initializes a Firebase app instance
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Setting up Google User Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;