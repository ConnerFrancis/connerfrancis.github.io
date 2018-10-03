<template>
  
  <div id="user-profile">
    
    {{ id }}
    {{ ref }}
    
  </div>
  
</template>

<!-- ### -->

<script>
  
  import db from '@/db'
  
  const usersRef = db.collection('users')
  
  export default {
    name: 'UserProfile',
    
    props: ['id'],
    
    computed: {
      ref () {
        usersRef.doc(this.id).get().then(doc => doc)
      }
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #user-profile {
    
  }
  
</style>