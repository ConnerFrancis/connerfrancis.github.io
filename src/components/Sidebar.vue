<template>
  
  <div id="sidebar" :class="theme">
    
    <transition name="sidebar-slide">
    <div class="sidebar" v-if="showSidebar">
      <site-links></site-links>
    </div>
    </transition>
    
    <div class="nav">
      <div class="arrow-left" @click="$router.go(-1)"></div>
      <div class="arrow-right" @click="handleForward"></div>
      <div class="menu" @click="showSidebar = !showSidebar"></div>
    </div>
  </div>
  
</template>

<!-- ### -->

<script>
  
  import SiteLinks from '@/components/SiteLinks'

  export default {
    name: 'Sidebar',
    
    data () {
      return {
        showSidebar: false
      }
    },
    
    computed: {
      
      theme () {
        if(this.showSidebar === true) {
          return 'dark'
        } else {
          return this.$store.state.theme.theme
        }
      }
      
    },
    
    components: {
      'site-links': SiteLinks
    },
    
    methods: {
      
      // Go forward
      handleForward () {
        try {
          this.$router.go(1)
        } catch (e) {
          this.$store.dispatch('toast/addToast', {
            type: 'error',
            message: 'Cannot go forward.'
          })
        }
      }
      
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #sidebar {
    // Display
    position: fixed;
    display: flex;
    z-index: 1;
    bottom: 0;
    right: 0;
    // Size 
    margin: 16px;
    
    &.dark {
      
      .menu {
        border-color: $brand-light;
        &::before, &::after { border-color: $brand-light; }
        &:hover, &:hover::before, &:hover::after { border-color: $brand-main; }
      }
      
      .arrow-left, .arrow-right {
        &::before, &::after {
          border-color: $brand-light;
        }
        &:hover::before, &:hover::after {
          border-color: $brand-main;
        }
      }
    }
    
    .sidebar-slide-enter-active, .sidebar-slide-leave-active {
      transition: margin-right 0.75s cubic-bezier(0.5,0,0.5,1);
    }
    .sidebar-slide-enter, .sidebar-slide-leave-to {
      margin-right: -340px;
    }
    .sidebar-slide-enter-to, .sidebar-slide-leave {
      margin-right: 0;
    }
    
    .sidebar {
      // Display
      position: fixed;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      // Size
      height: 100vh;
      min-width: 340px;
      padding: 48px 48px 16px 48px;
      // Colors
      background-color: $brand-dark-less;
      color: $brand-light;
    }
    
    .nav {
      // Display
      position: fixed;
      bottom: 16px;
      right: 16px;
      display: flex;
      flex-direction: row;
      align-self: flex-end;
    }
  }
  
</style>