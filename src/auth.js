/**
 * Authentication setup for Firebase
 */
 
import firebase from 'firebase/app'

import store from '@/store'
import { SET_USER, LOGOUT } from '@/store/currentUser/mutations'

firebase.auth().onAuthStateChanged(function(user) {
  // If the user exists and is signed in
  if (user) {
    store.commit(`user/${SET_USER}`, user)
  // If the user does not exist or is signed out
  } else {
    store.commit(`user/${LOGOUT}`)
  }
})