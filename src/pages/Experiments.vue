<template>

  <div id="experiments-wrapper">
    
    <div id="experiments">
      <app-header></app-header>
  
      <router-view class="single"></router-view>
    </div>
  </div>

</template>

<script>
  import AppHeader from '@/components/AppHeader'

  export default {
    name: 'Experiments',
    
    components: {
      'app-header': AppHeader
    }
  }

</script>

<style lang="scss" scoped>

  #experiments {
    /* Display */
    @include flex-container($dir: column);
    @include flex-part($padding: 32px);
    @include jumbotron;
    margin: 32px;
    background-color: $white;
    
    .single {
      @include flex-container($horiz: center, $vert: center);
      @include flex-part($padding: 0);
      @include jumbotron;
    }
  }

</style>
