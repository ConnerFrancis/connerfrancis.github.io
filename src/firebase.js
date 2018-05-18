import firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: "AIzaSyA6SRssT6ut6rNLQvaLPs-4QNIsbt-mFsI",
  authDomain: "connet-702fc.firebaseapp.com",
  databaseURL: "https://connet-702fc.firebaseio.com",
  projectId: "connet-702fc",
  storageBucket: "connet-702fc.appspot.com",
  messagingSenderId: "437958455389"
})

const db = app.database()
export default db
