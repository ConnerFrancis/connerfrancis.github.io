// Firebase
import firebase from 'firebase/app'
import 'firebase/firestore'

import { SET_USER, LOGOUT } from './mutations'

const state = {
  // Holds the object from Firebase Auth
  data: {},
  // Default state should be false
  loggedIn: false
}

const mutations = {
  
  // Set the current user
  [SET_USER] (state, user) {
    state.loggedIn = true // will be set to false if signed out
    state.data = user
  },
  
  // Log the current user out
  [LOGOUT] (state) {
    state.loggedIn = false
    state.data = {}
  }
}

const actions = {
  
  // Log a user in
  async login (store, payload) {
    // If the user is already signed in, exit
    // TODO: Provide GUI notification
    if (store.state.loggedIn) return
    
    // Try to sign in with firebase
    // TODO: handle errors properly
    try {
      await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).catch(function(error) {
        // error.code, error.message
      })
    } catch (e) {
      console.log(e)
    }
  },
  
  // Log a user out
  async logout () {
    // TODO: handle errors with GUI or whatever
    try {
      await firebase.auth().signOut()
    } catch (e) {
      console.log(e)
    }
  }
  
}

const getters = {
  
  // Check if logged in
  // NOTE: maybe use es6 destructors idk
  loggedIn: state => {
    return state.loggedIn
  }
  
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
