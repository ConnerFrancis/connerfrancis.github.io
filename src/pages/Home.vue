<template>

  <div id="home" class="col-fluid col-lg-14 col-md-15 col-sm-16 col-xs-16">

    <div class="jumbotron container justify-between">
      
      <logo class="fluid"></logo>
      
      <div class="pages fluid container go-down align-end">
        <h1>Pages</h1>
        
        <router-link
          class="router-link"
          v-for="page in pages"
          v-show="((page.name != 'Home') && (page.name != 'HomeOld') && (page.meta.hidden != true))"
          :key="page.name"
          :to="page.path"
        >{{ page.meta.name }}</router-link>
      </div>
    </div>

  </div>

</template>

<script>
  import pages from '@/pages'
  import mh    from '@/services/mathhelper'

  import SlideOverTextColor from '@/components/animators/SlideOverTextColor'
  
  import Logo from '@/components/misc/Logo'

  export default {
    name: 'Home',

    components: {
      'sotc': SlideOverTextColor,
      'logo': Logo
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
    background-color: $white;
    padding: 1rem;
    
    > div {
      background: grey;
      
      svg {
        width: 33%;
        margin: 0;
        padding: 0;
      }
      
      .pages {
        position: relative;
        padding: 0 1rem;
        
        &::before {
          content: '';
          /* Position */
          position: absolute;
          top: 0;
          right: 0;
          /* Size */
          height: 100%;
          width: 68%;
          /* Colors */
          background: $white;
        }
        
        h1 {
          z-index: 2; // ensure the title is over the ::after box
          @include heavy-underline;
          /* Font */
          font-size: 6em;
          font-family: $font-main;
          /* Size */
          margin: 0;
          padding: 0;
        }
        
        .router-link {
          z-index: 2;
          /* Font */
          text-decoration: none;
        }
      }
    }
  }

</style>
