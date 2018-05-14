<template>

  <div id="app-header" class="container justify-end">
    <i class="search"></i>
    <i class="menu" @click="showMenu = !showMenu"></i>
    
    <app-menu :class="{ active: showMenu }"></app-menu>
  </div>

</template>

<script>
  import AppMenu from '@/components/AppMenu'

  export default {
    name: 'AppHeader',
    
    components: {
      'app-menu': AppMenu
    },
    
    data () {
      return {
        showMenu: false
      }
    }
  }

</script>

<style lang="scss" scoped>

  #app-header {
    padding: 0.25rem;
    
    /* Sidebar menu */
    #app-menu {
      /* Display */
      position: fixed;
      right: -100%;
      top: 0;
      z-index: 10;
      
      &.active {
        right: 0;
      }
    }
    
    /* Search icon animation */
    .search {
      margin-right: 0.25rem;
      &::before { transition: width 0.3s ease, right 0.3s ease; }
    }
    .search:hover {
      &::before { width: 0; right: 5px; }
    }
    
    /* Menu icon animation */
    .menu {
      &::before, &::after { transition: width 0.3s ease, left 0.3s ease; }
    }
    .menu:hover {
      &::before { width: 16px; left: 8px; }
      &::after { width: 24px; left: 0; }
    }
    
    /* Icon color altering */
    &.color-white {
      
      .search {
        &::before { background-color: $white; }
        &::after { border-color: $white; }
      }
      
      .menu {
        border-top-color: $white;
        &::before, &::after { background-color: $white; }
      }
    }
    &.color-black {
      
      .search {
        &::before { background-color: $black; }
        &::after { border-color: $black; }
      }
      
      .menu {
        border-top-color: $black;
        &::before, &::after { background-color: $black; }
      }
    }
  }

</style>
