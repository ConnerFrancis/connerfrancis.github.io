<template>

  <div id="app-header">
    <div class="navigation">
      <router-link to="/">home</router-link>
      <router-link to="/experiments">experiments</router-link>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'AppHeader'
  }

</script>

<style lang="scss" scoped>

  #app-header {
    /* Display */
    @include flex-container;
    @include flex-part($col: 12);
    margin: 0;
    
    a {
      text-decoration: none;
    }
  }

</style>
