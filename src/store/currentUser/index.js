// Firebase
import firebase from '@/firebase'
import db from '@/db'

import {
  SET_USER,
  LOGOUT,
  SET_DOC
} from './mutations'

const usersRef = db.collection('users')

const state = {
  // Holds the object from Firebase Auth
  data: {},
  doc: {},
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
    state.doc = {}
  },
  
  // Set the Firestore document
  [SET_DOC] (state, doc) {
    state.doc = doc
  }
}

const actions = {
  
  // Log a user in
  async login (store, payload) {
    // If the user is already signed in, exit
    if (store.state.loggedIn) {
      // TODO: Provide GUI notification of logout please
      throw new Error('Error: ' + 'Already logged in.')
    }
    
    // Try to sign in with firebase
    await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).catch((e) => {
      throw new Error('Error: ' + e.message)
    })
  },
  
  // Log a user out
  async logout () {
    // TODO: handle errors with GUI or whatever
    await firebase.auth().signOut().catch((e) => {
      throw new Error('Error: ' + e.message)
    })
  },
  
  // Set the Firestore doc
  async setDoc (context, user) {
    const doc = await db.collection('users').doc(user.uid).get()
    context.commit(SET_DOC, doc)
  }
  
}

const getters = {
  
  // Check if logged in
  // NOTE: maybe use es6 destructors idk
  loggedIn: state => {
    return state.loggedIn
  },
  
  data: state => {
    return state.data
  },
  
  doc: state => {
    return state.doc
  }
  
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
