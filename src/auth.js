import firebase from '@/firebase'

import store from './store';
import { SET_USER, LOGOUT } from '@/store/currentUser/mutations';

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.commit(`currentUser/${SET_USER}`, user)
    store.dispatch('setDoc', user)
  } else {
    store.commit(`currentUser/${LOGOUT}`)
  }
})

// NOTE: This file is ran in @/main.js