<template>
  
  <div id="vuefiretest">
    
    <p
      v-for="user in users"
    >{{ user.username }}</p>
    
    
    
  </div>
  
</template>

<!-- ### -->

<script>
  
  // This exact format is needed bc Javascript is wiggity wack
  import { db } from '@/main'
  
  import SignUp from '@/components/SignUp'
  
  export default {
    name: 'VueFireTest',
    
    components: {
      SignUp
    },
    
    data () {
      return {
        users: [] // required for VueFire to link
      }
    },
    
    // This method makes use of VueFire
    // to link the users in data() above
    // and fetches the users db from Firestore.
    firestore () {
      return {
        users: db.collection('users').orderBy('username')
      }
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  
  
</style>