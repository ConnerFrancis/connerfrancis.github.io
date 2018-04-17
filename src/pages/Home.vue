<template>

  <div id="home" @mousemove="setMouseCoords">

    <div class="left">
      <!--<h1 class="title" @click="genTitle()">conner's {{ title }}</h1>-->
      <div class="pages">
          <router-link
            v-for="page in pages"
            v-show="!(page.name == 'home')"
            :key="page.name"
            :to="page.path"
            :content="page.meta.name"
            @click="test"
          ><sotc :colorActive="page.meta.color">{{ page.meta.name }}</sotc></router-link>
      </div>
    </div>

    <div class="right">
      <follow-face ref="face" :pageX="pageX" :pageY="pageY" :factor="15"></follow-face>
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
        pageY: 0
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
    @include flex-container;
    @include jumbotron;
    /* Colors */
    background-color: $black;
    color: $white;

    .left {
      @include jumbotron;
      @include flex-container($dir: column, $horiz: flex-end, $vert: flex-start);
      @include flex-part($padding: 0 0 128px 64px);

      .pages {
        /* Display */
        @include flex-container($dir: column)
        @include flex-part($col: 12, $enforce-width: true);
        /* Font */
        font-size: 4em;

        a {
          @include heavy-underline;
          text-decoration: none;
        }
      }
    }

    .right {
      @include jumbotron;
      @include flex-container($horiz: flex-end, $vert: flex-end);
      @include flex-part($padding: 0 64px 128px 0);
    }
  }

</style>
