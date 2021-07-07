import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBxspB7hU855fhV50N4Xevs4TqCUe0-mr0",
    authDomain: "cobank-114c2.firebaseapp.com",
    databaseURL: "https://cobank-114c2-default-rtdb.firebaseio.com",
    projectId: "cobank-114c2",
    storageBucket: "cobank-114c2.appspot.com",
    messagingSenderId: "950342249290",
    appId: "1:950342249290:web:e40d72e7bcdf75f3266fb3"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.database();
let storage = firebase.storage();
let auth = firebase.auth();

export { db, storage, auth }