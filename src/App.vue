<template>

  <div id="app" class="container">
    <router-view class="router-view"></router-view>
    <toast></toast>
  </div>

</template>

<script>

  import Toast from '@/components/Toast'

  export default {
    name: 'App',
    
    components: {
      toast: Toast
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
