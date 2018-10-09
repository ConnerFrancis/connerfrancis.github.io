<template>

  <div id="app" class="container" :class="theme">
    <router-view class="router-view" :class="theme"></router-view>
    <sidebar></sidebar>
    <toast :class="theme"></toast>
  </div>

</template>

<script>

  import Sidebar from '@/components/Sidebar'
  import Toast   from '@/components/Toast'

  export default {
    name: 'App',
    
    components: {
      sidebar: Sidebar,
      toast: Toast
    },
    
    computed: {
      
      theme () {
        return this.$store.state.theme.theme
      }
      
    }
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
