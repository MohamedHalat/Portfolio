// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

const firebaseConfig = {
  apiKey: "AIzaSyC2Awe8ca89iMRSDtFapARXEFmQbLCYbfI",
  authDomain: "vue-site-689bd.firebaseapp.com",
  projectId: "vue-site-689bd",
  storageBucket: "vue-site-689bd.appspot.com",
  messagingSenderId: "750821278668",
  appId: "1:750821278668:web:7d7941fd95abc00fb05369",
  measurementId: "G-G3J9LPT1GB"
};

firebase.initializeApp(firebaseConfig);