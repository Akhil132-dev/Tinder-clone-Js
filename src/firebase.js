import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBmaJcHZw1CxsyHxHwz9H4sEYqXkx3UjiA",
    authDomain: "tinder-clone-654ef.firebaseapp.com",
    projectId: "tinder-clone-654ef",
    storageBucket: "tinder-clone-654ef.appspot.com",
    messagingSenderId: "601579546506",
    appId: "1:601579546506:web:544f3fddbbb5c0cd864a73",
    measurementId: "G-SLS26K5FYV",
};
// https://tinder-clone-654ef.web.app
const firebaseapp = firebase.initializeApp(firebaseConfig);
//this is a funciton which firebas give us

const database = firebaseapp.firestore();
//its a real time database firebase firestore
export default database;
