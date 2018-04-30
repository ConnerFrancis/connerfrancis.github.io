<template>

  <div id="home">

    <div class="top">

      <div class="left">
        <h1 class="title" @click="genTitle()">conner's<br/>{{ title }}</h1>
      </div>

      <div class="right">

        <h1 class="title">pages</h1>
        <div class="pages">
          <router-link
            v-for="page in pages"
            v-show="((page.name != 'Home') && (page.name != 'HomeOld'))"
            :key="page.name"
            :to="page.path"
            ><sotc>{{ page.meta.name }}</sotc></router-link>
          </div>

        </div>

    </div>

  </div>

</template>

<script>
  import pages from '@/pages'
  import mh    from '@/services/mathhelper'

  import SlideOverTextColor from '@/components/SlideOverTextColor'

  export default {
    name: 'Home',

    components: {
      'sotc': SlideOverTextColor
    },

    data () {
      return {
        pages,

        title: 'enabled javascript, dork',
        lastTitle: '',
        titles: [
          'ravine',
          'grotto',
          'cave',
          'cavern',
          'hovel',
          'shelter',
          'shack'
        ]
      }
    },

    methods: {
      genTitle () {
        this.lastTitle = this.title
        while(this.title == this.lastTitle) {
          this.title = mh.sample(this.titles)
        }
      }
    },

    created () {
      this.genTitle()
    }
  }

</script>

<style lang="scss" scoped>

  #home {
    @include flex-container;
    @include flex-part($padding: 0);
    @include jumbotron;
    font-family: $font-main;

    .top {
      @include flex-container;
      @include flex-part($padding: 72px);
      @include jumbotron;
      /* Colors */
      background-color: white;

      .left {
        @include flex-container($vert: center, $horiz: center);
        @include flex-part($col: 6, $padding: 0);
        @include jumbotron;
        /* Colors */
        background-color: $grey-darkest;
        color: $white;

        .title {
          @include flex-container($dir: column);
          /* Font */
          font-family: $font-main;
          font-size: 5rem;
          text-align: left;
          line-height: 1;
          /* Misc */
          cursor: pointer;
        }
      }

      .right {
        @include flex-container($dir: column);
        @include flex-part($col: 6, $padding: 0);
        @include jumbotron;
        /* Colors */
        background-color: $white;
        color: $grey-darkest;

        .title {
          padding: 0;
        }

        .pages {
          @include flex-container($dir: column);
          @include flex-part($padding: 0);
          @include jumbotron;

          a {
            text-decoration: none;
          }
        }
      }
    }
  }

</style>
