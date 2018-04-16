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
    <router-view></router-view>
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
    @include flex-container;
    @include jumbotron;
  }

</style>
