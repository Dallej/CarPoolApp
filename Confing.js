import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBCKSAR7rQDHpDX-zzLtalZbHjxXbZr6-Y",
    authDomain: "carpool-app-bc6e0.firebaseapp.com",
    projectId: "carpool-app-bc6e0",
    storageBucket: "carpool-app-bc6e0.appspot.com",
    messagingSenderId: "12710615674",
    appId: "1:12710615674:web:0712629791d5cbfb4539c3"
  };
 
  const app = firebase.initializeApp(firebaseConfig);
  export const db = app.database();
