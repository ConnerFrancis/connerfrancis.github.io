<template>

  <div id="home">
    <div class="pages">
      <router-link
        v-for="page in pages"
        v-show="((page.name != 'Home') && (page.name != 'HomeOld'))"
        :key="page.name"
        :to="page.path"
      >{{ page.path }}</router-link>
    </div>
  </div>

</template>

<script>
  import pages from '@/pages'

  export default {
    name: 'Home',
    
    data () {
      return {
        pages
      }
    }
  }

</script>

<style lang="scss" scoped>
  
  #home {
    @include flex-container;
    @include flex-part;
    @include jumbotron;
    /* Colors */
    background: linear-gradient($white, $grey-lighter);
    
    .pages {
      @include flex-container($dir: column);
      @include flex-part;
      
      a { text-decoration: none; }
    }
  }
  
</style>
