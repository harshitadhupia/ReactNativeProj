/* eslint-disable prettier/prettier */
import Firebase from 'firebase';
 let config = {
    apiKey: 'AIzaSyBMVj8F9K263tatNZtKo3bIq75MH1jHUOY',
    authDomain: 'gitoproject.firebaseapp.com',
    databaseURL: 'https://gitoproject.firebaseio.com',
    projectId: 'gitoproject',
    storageBucket: 'gitoproject.appspot.com',
    messagingSenderId: '1021308302782',
    appId: '1:1021308302782:web:d998a7e9ab9345ed2135ef',
    measurementId: 'G-T47GVTECMZ',
  };
let app = Firebase.initializeApp(config);
export const db = app.database();