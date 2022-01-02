import {createApp} from 'vue';
import App from './App.vue';
import router from './router'
import { initializeApp } from "firebase/app";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBJAbtUWJbs8-VMGocy9BoHb7L4zw6ixZY",
    authDomain: "shopping-deals-app.firebaseapp.com",
    projectId: "shopping-deals-app",
    storageBucket: "shopping-deals-app.appspot.com", 
    messagingSenderId: "478462839471",  
    appId: "1:478462839471:web:396a9911cb5f4478e7225a"  
};

initializeApp(firebaseConfig);

const app = createApp(App).use(router).use(firebase);

library.add(faEye, faEyeSlash)

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.mount('#app');
