<template>

  <div id="app" class="container" :class="theme" @click="handleAppClick">
    <transition name="router-transition" mode="out-in" appear>
      <router-view
        class="router-view"
        @click="handleAppClick"
        :class="theme"
      ></router-view>
    </transition>
    <sidebar ref="sidebar"></sidebar>
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
      
    },
    
    methods: {
      
      handleAppClick () {
        // You have to call ref methods
        // outside of the template markup
        this.$refs.sidebar.handleAppClick()
      }
      
    }
  }

</script>

<style lang="scss">

  @import './style/main.scss';

  #app {
    // Display/size
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    // Font
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    
    // Theme changes
    transition: background-color 0.1s ease;
    &.dark {
      background-color: $brand-dark;
    }
    
    .router-transition-enter-active, .router-transition-leave-active {
      transition: opacity 0.15s ease, transform 0.1s ease;
    }
    .router-transition-enter, .router-transition-leave-to {
      transform: translateY(32px);
      opacity: 0;
    }
  }

</style>
