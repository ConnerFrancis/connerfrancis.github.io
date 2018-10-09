// Firebase
import firebase from '@/firebase'
import db from '@/db'

import {
  SET_USER,
  LOGOUT,
  SET_DOC
} from './mutations'

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
      throw new Error('Already logged in.')
    }

    // Try to sign in with firebase
    await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).catch((e) => {

      switch(e.code) {
        case 'auth/user-not-found':
          throw new Error('That account does not exist.')
        case 'auth/invalid-email':
          throw new Error('Invalid email or credentials.')
        case 'auth/wrong-password':
          throw new Error('Incorrect password.')
        default:
          throw new Error(e.code + ': ' + e.message)
      }
    })
  },

  // Log a user out
  async logout () {
    // TODO: handle errors with GUI or whatever
    await firebase.auth().signOut().catch((e) => {
      throw new Error(e.code + ': ' + e.message)
    })
  },

  // Set the Firestore doc
  async setDoc (context, user) {
    const doc = await db.collection('users').doc(user.uid).get()
    context.commit(SET_DOC, doc)
  },

  // Create a new account
  async signUp (store, payload) {
    if (payload.password !== payload.confirmPassword) {
      throw new Error('Passwords are not the same.')
    }
    
    await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).catch((e) => {
      throw new Error(e.code + ': ' + e.message)
    })
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
