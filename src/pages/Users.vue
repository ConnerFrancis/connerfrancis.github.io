<template>
  
  <div id="users">
    
    doc: {{ userTest }}
    
  </div>
  
</template>

<!-- ### -->

<script>

  import users from '@/db/users'
  
  export default {
    name: 'Users',
    
    data () {
      return {
        userTest: {}
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
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  
  
</style>