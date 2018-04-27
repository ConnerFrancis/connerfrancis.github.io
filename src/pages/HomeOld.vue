<template>

  <div id="home" @mousemove="setMouseCoords" @mouseleave="eyesVisible = false" @mouseenter="eyesVisible = true">

    <div class="left">
      <!--<h1 class="title" @click="genTitle()">conner's {{ title }}</h1>-->
      <div class="pages">
          <router-link
            v-for="page in pages"
            v-show="(page.name != 'HomeOld')"
            :key="page.name"
            :to="page.path"
          ><sotc>{{ page.meta.name }}</sotc></router-link>
      </div>
    </div>

    <div class="right">
      <follow-face :eyesClosed="!eyesVisible" ref="face" :pageX="pageX" :pageY="pageY" :factor="10"></follow-face>
    </div>
  </div>

</template>

<script>
  import mh    from '@/services/mathhelper'
  import pages from '@/pages'

  import FollowFace         from '@/components/FollowFace.vue'
  import SlideOverTextColor from '@/components/SlideOverTextColor.vue'

  export default {
    name: 'Home',

    components: {
      'follow-face': FollowFace,
      'sotc': SlideOverTextColor
    },

    data () {
      return {
        pages,
        titles: [
          'dungeon',
          'cave',
          'grotto',
          'hovel'
        ],
        title: '',
        lastTitle: '',
        pageX: 0,
        pageY: 0,
        eyesVisible: false
      }
    },

    methods: {
      genTitle () {
        this.lastTitle = this.title
        while(this.title == this.lastTitle) {
          this.title = mh.sample(this.titles)
        }
      },

      setMouseCoords (event) {
        this.pageX = event.pageX
        this.pageY = event.pageY
      },

      test (event) {
        console.log("henlo")
      }
    },

    created () {
      this.genTitle()
    }
  }

</script>

<style lang="scss" scoped>

  #home {
    /* Display */
    @include flex-container($vert: flex-end);
    @include flex-part($col: 12);
    @include jumbotron;
    /* Colors */
    background-color: $black;
    color: $text-white-light;

    .left {
      @include flex-container($dir: column, $horiz: flex-end, $vert: flex-end);
      @include flex-part($padding: 0 0 64px 64px, $col: 6);

      .pages {
        /* Display */
        @include flex-container($dir: column)
        @include flex-part($col: 12, $enforce-width: true);
        /* Font */
        font-size: 2.75em;

        a {
          @include heavy-underline;
          text-decoration: none;
          font-family: $font-accent;
        }
      }
    }

    .right {
      @include flex-container($horiz: flex-end, $vert: flex-end);
      @include flex-part($padding: 0 64px 64px 0, $col: 6);
      @include jumbotron;
    }
    
    .visible {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
    
    .hidden {
      opacity: 0;
      transition: opacity 0.5s ease;
    }
  }

</style>
