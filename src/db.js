import Vue from 'vue'
import firebase from './firebase'

const db = firebase.firestore()
Vue.prototype.$db = db

export default db
