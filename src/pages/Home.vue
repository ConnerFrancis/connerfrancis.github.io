<template>

  <div id="home" class="col-fluid col-lg-14 col-md-15 col-sm-16 col-xs-16">

      <div class="left col">
        <h1 class="title" @click="genTitle()">conner's<br/>{{ title }}</h1>
      </div>

      <div class="right col">

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
    background-color: grey;

      .left {
        /* Colors */
        color: $white;
        background-color: $grey-darkest;
        /* Size */
        padding: 1rem;

        .title {
          /* Font */
          font-family: $font-main;
          font-size: 5em;
          text-align: left;
          line-height: 1;
          /* Misc */
          cursor: pointer;
        }
      }

      .right {
        /* Colors */
        background-color: $white;
        color: $grey-darkest;
        padding: 0 1rem;

        .title {
          padding: 0;
        }

        .pages {

          a {
            text-decoration: none;
          }
        }
      }
  }

</style>
