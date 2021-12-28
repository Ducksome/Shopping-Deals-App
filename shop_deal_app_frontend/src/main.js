import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router'
import { initializeApp } from "firebase/app";

import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css'

import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'
import InputText from 'primevue/inputtext'

const firebaseConfig = {
    apiKey: "AIzaSyBJAbtUWJbs8-VMGocy9BoHb7L4zw6ixZY",
    authDomain: "shopping-deals-app.firebaseapp.com",
    projectId: "shopping-deals-app",
    storageBucket: "shopping-deals-app.appspot.com", 
    messagingSenderId: "478462839471",  
    appId: "1:478462839471:web:396a9911cb5f4478e7225a"  
};

initializeApp(firebaseConfig);
  

const app = createApp(App).use(router);
app.use(PrimeVue, {ripple: true});
app.component('Button', Button)
app.component('Sidebar', Sidebar)
app.component('InputText', InputText)

app.mount('#app');
