<template>

  <div id="app" class="container jumbotron">
    no: {{ postOne }}
    <router-view class="router-view container jumbotron"></router-view>
  </div>

</template>

<script>
  import mh    from '@/services/mathhelper'
  import pages from '@/pages'

  import firebase from 'firebase'

  let app = firebase.initializeApp({
    apiKey: "AIzaSyA6SRssT6ut6rNLQvaLPs-4QNIsbt-mFsI",
    authDomain: "connet-702fc.firebaseapp.com",
    databaseURL: "https://connet-702fc.firebaseio.com",
    projectId: "connet-702fc",
    storageBucket: "connet-702fc.appspot.com",
    messagingSenderId: "437958455389"
  })

  let db = app.database()

  export default {
    name: 'App',

    firebase: {
        postOne: db.ref('posts/1')
    },

    data () {
      return {
        pages: pages,
        postOne: {}
      }
    }
  }

</script>

<style lang="scss">

  @import './style/main.scss';

  #app {
    /* Display */
    height: 100vh;
    width: 100vw;
    /* Font */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
  }

</style>
