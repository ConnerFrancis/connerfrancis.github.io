<template>

  <div id="list">
    <h1>experiments</h1>
    <router-link
      v-for="page in pages"
      v-show="!(page.name == 'list')"
      :key="page.name"
      :to="{ name: page.name }"
      @click="test"
    >{{ page.meta.name }}</router-link>
  </div>

</template>

<script>
  import pages from '.'

  export default {
    name: 'List',

    data () {
      return {
        pages
      }
    }
  }

</script>

<style lang="scss" scoped>

  #list {
    /* Display */
    @include flex-container($dir: column);
    @include flex-part($col: 12);
    @include jumbotron;
  }

</style>
