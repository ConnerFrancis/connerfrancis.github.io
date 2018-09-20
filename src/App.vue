<template>

  <div id="app">
    <router-view class="router-view"></router-view>
  </div>

</template>

<script>

  export default {
    name: 'App'
  }

</script>

<style lang="scss">

  @import './style/main.scss';

  #app {
    /* Display */
    height: 100vh;
    width: 100vw;
    /* Font */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
  }

</style>
