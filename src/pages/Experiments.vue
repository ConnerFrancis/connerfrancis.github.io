<template>

  <div id="experiments">
    <p>leave</p>
    <div class="pages">
      <router-link
        v-for="page in experiments"
        :key="page.name"
        :to="{ name: page.name }"
      >{{ page.meta.name }}</router-link>
    </div>
    <div class="single">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  import experiments from './experiments'

  export default {
    name: 'Experiments',

    data () {
      return {
        experiments
      }
    }
  }

</script>

<style lang="scss" scoped>

  #experiments {
    /* Display */
    @include flex-container($dir: column);
    @include jumbotron;

    .single {
      @include flex-part($col: 12);
      @include jumbotron;
    }
  }

</style>
