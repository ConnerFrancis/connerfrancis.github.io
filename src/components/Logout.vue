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
      status: ''
    },
    
    methods: {
      handleSubmit () {
        this.$store.dispatch('currentUser/logout').then(() => {
          this.status = 'Logout successful.'
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