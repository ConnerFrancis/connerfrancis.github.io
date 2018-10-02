<template>
  
  <form @submit.prevent="handleSubmit" id="logout">
    <button type="submit">Logout</button>
    <p>{{ status }}</p>
  </form>
  
</template>

<!-- ### -->

<script>
  
  export default {
    name: 'Logout',
    
    data () {
      return {
        status: ''
      }
    },
    
    methods: {
      handleSubmit () {
        this.$store.dispatch('currentUser/logout').then(() => {
          this.status = 'Logout successful.'
          this.$store.dispatch('toast/addToast', {
            type: 'success',
            message: 'Logged out successfully!'
          })
        }).catch((e) => {
          this.status = e.message
        })
      }
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  
  
</style>