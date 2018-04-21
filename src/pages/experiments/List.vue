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

  #follows-you {
    /* Display */
    @include flex-container($horiz: center, $vert: center);
    @include flex-part($col: 12);
    @include jumbotron;
    background-color: $black;
    
    .visible {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
    
    //.hidden {
    //  opacity: 0;
    //  transition: opacity 0.5s ease;
    //}
  }

</style>
