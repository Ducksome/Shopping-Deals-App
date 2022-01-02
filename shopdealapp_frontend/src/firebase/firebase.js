// Import the functions you need from the SDKs you need
import * as firebase from "@firebase/app";
import '@firebase/firestore';
require('firebase/auth');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
console.log(firebase)
const app = firebase.initializeApp({
    apiKey: "AIzaSyBJAbtUWJbs8-VMGocy9BoHb7L4zw6ixZY",
    authDomain: "shopping-deals-app.firebaseapp.com",
    projectId: "shopping-deals-app",
    storageBucket: "shopping-deals-app.appspot.com",
    messagingSenderId: "478462839471",
    appId: "1:478462839471:web:396a9911cb5f4478e7225a"
  });
console.log(app)

export const auth = app.auth();
export default app;