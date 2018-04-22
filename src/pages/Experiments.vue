<template>

  <div id="experiments">
    <div class="navigation">
      <router-link to="/">home</router-link>
      <router-link to="/experiments">experiments</router-link>
    </div>

    <router-view class="single"></router-view>
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
    @include flex-part($padding: 32px);
    @include jumbotron;

    .single {
      @include flex-container($horiz: center, $vert: center);
      @include flex-part($padding: 0);
      @include jumbotron;
    }
  }

</style>
