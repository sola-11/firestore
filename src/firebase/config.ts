import firebase from 'firebase/App';
import 'firebase/firestore';

const firebaseConfig=({
    apiKey: "AIzaSyA4Jhf-jZeXhVJ0V_gan0g-Lz0SG2eahJU",
    authDomain: "sql-demos1-eb2be.firebaseapp.com",
    projectId: "sql-demos1-eb2be",
    storageBucket: "sql-demos1-eb2be.appspot.com",
    messagingSenderId: "73248043504",
    appId: "1:73248043504:web:4cb50669a3ee94c4a6ed35",
    measurementId: "G-0SYRV230M6"
  })

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

console.log('Firebase configurado')


export default firebase.firestore();