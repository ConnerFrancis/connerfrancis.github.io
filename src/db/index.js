import Vue from 'vue'
import firebase from '@/firebase'

import users from './users'

const db = firebase.firestore()
Vue.prototype.$db = db

export default db
