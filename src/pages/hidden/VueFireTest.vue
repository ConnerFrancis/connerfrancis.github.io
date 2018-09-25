<template>
  
  <div id="vuefiretest">
    
    <p>logged in: {{ loggedIn }}</p>
    
  </div>
  
</template>

<!-- ### -->

<script>
  
  export default {
    name: 'VueFireTest',
    
    computed: {
      // Need to use verbose version,
      // mapState is broke af
      loggedIn () {
        return this.$store.state.currentUser.loggedIn
      }
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #vuefiretest {
    background-color: #ededed;
    color: $brand-dark;
    min-height: 50px;
  }
  
</style>