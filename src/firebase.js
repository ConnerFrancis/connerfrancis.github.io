import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyC3KZUyCjXWUxNuEEVoEcTblDIW_S0ayt0',
  authDomain: 'conr-217017.firebaseapp.com',
  databaseURL: 'https://conr-217017.firebaseio.com',
  projectId: 'conr-217017',
  storageBucket: 'conr-217017.appspot.com',
  messagingSenderId: '942784549997'
})

export default firebase
