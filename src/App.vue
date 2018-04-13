<template>

  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>
  import mh       from '@/services/mathhelper'
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
    /* Font */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* Size */
    min-width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

</style>
