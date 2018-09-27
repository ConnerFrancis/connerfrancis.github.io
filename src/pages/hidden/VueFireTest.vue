<template>
  
  <div id="vuefiretest">
    
    <div class="section">
      <h1>currentUser</h1>
      <login></login>
      <logout></logout>
      <p><b>loggedIn </b>{{ loggedIn }}</p>
      <p><b>user (data) </b>{{ user }}</p>
      <p><b>user (doc) </b>{{ doc }}</p>
      
      <h2>manual db query</h2>
      <p><b>user (doc) </b>{{ manualDoc }}</p>
    </div>
    
  </div>
  
</template>

<!-- ### -->

<script>
  import Login  from '@/components/Login'
  import Logout from '@/components/Logout'
  
  import db from '@/db'
  
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'VueFireTest',
    
    components: {
      login: Login,
      logout: Logout
    },
    
    computed: {
      manualDoc () {
        db.collection('users').doc(this.$store.state.currentUser.data.uid).get()
      },
      
      ...mapGetters('currentUser', {
        loggedIn: 'loggedIn',
        user: 'data',
        doc: 'doc'
      })
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #vuefiretest {
    
    .section {
      padding: 16px;
      border: 1px solid $brand-light;
    }
  }
  
</style>