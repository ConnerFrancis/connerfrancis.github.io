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
    /* Display/size */
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    /* Font */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
  }

</style>
