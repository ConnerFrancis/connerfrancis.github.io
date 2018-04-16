<template>

  <div id="home" @mousemove="setMouseCoords">

    <div class="left">
      <h1 class="title" @click="genTitle()">conner's {{ title }}</h1>
      <div class="pages">
          <router-link
            v-for="page in pages"
            v-show="!(page.name == 'home')"
            :key="page.name"
            :to="page.path"
            :content="page.meta.name"
            @click="test"
          >??<span>!!</span></router-link>
      </div>
      <sotc>henlo</sotc>
    </div>

    <div class="right">
      <follow-face ref="face" :pageX="pageX" :pageY="pageY" :factor="10"></follow-face>
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
    background-color: $grey-lightest;

    .left {
      @include jumbotron;
      @include flex-container($dir: column, $horiz: flex-end, $vert: flex-end);
      @include flex-part($padding: 152px);

      .title {
        margin: 0 0 64px 0;
        font-size: 1.5em;
        cursor: pointer;
        display: none;
      }
      .pages {
        /* Display */
        @include flex-container($dir: column)
        @include flex-part;
        /* Font */
        font-size: 4em;
        font-weight: bold;
        color: $text;

        a {
          text-decoration: none;
          margin: 32px 0 0 0;
          overflow: hidden;
          width: 100%;
          padding: 0;

          span {
            /* Position */
            position: relative;
            top: 0;
            left: -50%;
            bottom: 0;
            width: 0px;
            height: 0;
            background-color: blue;
            white-space: nowrap;
            overflow: hidden;
          }

          &:hover span {
            visibility: visible;
            left: -50%;
            transition: left 0.2s ease;
            width: 100%;
            background-color: red;
          }
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
