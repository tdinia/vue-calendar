import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import TextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(TextAreaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyBRc3hOoYGruaakEUxOhaQ1vOFbmKzjo8k',
  authDomain: 'vue-calendar-b5e49.firebaseapp.com',
  databaseURL: 'https://vue-calendar-b5e49.firebaseio.com',
  projectId: 'vue-calendar-b5e49',
  storageBucket: 'vue-calendar-b5e49.appspot.com',
  messagingSenderId: '552997350984',
  appId: '1:552997350984:web:865c42508b89b2c8a4727d'
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
