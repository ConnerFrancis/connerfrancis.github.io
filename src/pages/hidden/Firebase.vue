<template>
  
  <div id="firebase">
    users:
    {{ users }}
    {{ anUser }}
    <div v-for="user of users">
      {{ user.bio }}
    </div>
  </div>
  
</template>

<script>
  
  import db from '@/firebase'
  
  export default {
    name: 'Firebase',
    
    data () {
      return {
        users: {}
      }
    },
    
    firebase: {
      anUser: db.ref('users/1'),
      
      users: {
        source: db.ref('users'),
        asObject: true,
        
        cancelCallback(err) {
          window.alert(err)
        }
      }
    }
  }
  
</script>

<style lang="scss" scoped>
  
  #firebase {
    background-color: $grey-lightest;
  }
  
</style>