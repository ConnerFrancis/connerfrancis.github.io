<template>

  <div id="app">
    <div>
      <router-link
        v-for="page in pages"
        :key="page.name"
        :to="page.path"
      >{{ page.meta.name }}</router-link>
    </div>

    <router-view></router-view>
  </div>

</template>

<script>
  import mh       from '@/services/mathhelper'
  import pageList from '@/pages'

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
    /* Font */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* Size */
    min-width: 100vw;
    min-height: 100vh;
  }

</style>
