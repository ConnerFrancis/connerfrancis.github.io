// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Cloud Firestore setup
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.config.productionTip = false

// init Vue
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// Initialize VueFire
Vue.use(VueFire)
firebase.initializeApp({
  apiKey: 'AIzaSyC3KZUyCjXWUxNuEEVoEcTblDIW_S0ayt0',
  authDomain: 'conr-217017.firebaseapp.com',
  databaseURL: 'https://conr-217017.firebaseio.com',
  projectId: 'conr-217017',
  storageBucket: 'conr-217017.appspot.com',
  messagingSenderId: '942784549997'
})
export const db = firebase.firestore()
