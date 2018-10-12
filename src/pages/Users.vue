<template>
  
  <div id="users">
    
    doc: {{ userTest }}
    snapshot: {{ snapshot }}
    
  </div>
  
</template>

<!-- ### -->

<script>

  import users from '@/db/users'
  
  export default {
    name: 'Users',
    
    data () {
      return {
        userTest: {},
        snapshot: null
      }
    },
    
    mounted () {
      // Test user
      users
        .get('A6IqJ1FHWMUK4TEh2qJVywmm36U2')
        .then(data => {
          this.userTest = data
        }).catch(e => {
          this.$store.dispatch('toast/addToast', {
            type: 'error',
            message: `(${e.code}) ${e.message}`
          })
        })
        
      users
        .getMult(3)
        .then(snapshot => {
          this.snapshot = snapshot
        }).catch(e => {
          this.$store.dispatch('toast/addToast', {
            type: 'error',
            message: `(${e.code}) ${e.message}`
          })
        })
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  
  
</style>