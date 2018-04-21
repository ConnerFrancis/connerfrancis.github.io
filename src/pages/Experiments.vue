<template>

  <div id="experiments">
    <div class="navigation">
      <router-link to="/">home</router-link>
      <router-link to="/experiments">experiments</router-link>
    </div>
    <div class="single">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'Experiments'
  }

</script>

<style lang="scss" scoped>

  #experiments {
    /* Display */
    @include flex-container($dir: column);
    @include flex-part;
    @include jumbotron;

    .single {
      @include flex-container;
      @include flex-part($padding: 0);
      @include jumbotron;
      
      > div {
        @include flex-part;
        @include jumbotron;
      }
    }
  }

</style>
