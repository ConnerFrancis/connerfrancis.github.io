<template>

  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>
  import mh    from '@/services/mathhelper'
  import pages from '@/pages'

  export default {
    name: 'App',
    data () {
      return {
        pages: pages
      }
    }
  }

</script>

<style lang="scss">

  @import './style/main.scss';

  #app {
    /* Display */
    @include flex-container;
    @include jumbotron;
    background-color: red;
    height: 100vh;
    width: 100vw;
    /* Font */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

</style>
