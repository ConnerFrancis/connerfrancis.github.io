<template>

  <div id="home" class="container fluid col-12">

    <h1 class="col-12">The <span class="text-color-main">cobbler</span> experience.</h1>

    <site-links class="col-12" show-home="false"></site-links>
    
    <div class="img-wrapper">
      <img src="/static/twotone_flipped_white.png" />
    </div>

  </div>

</template>

<!-- ### -->

<script>

  import pages from '@/pages'
  import mh    from '@/services/mathhelper'
  
  import SiteLinks from '@/components/SiteLinks'

  export default {
    name: 'Home',
    
    components: {
      'site-links': SiteLinks
    },

    data () {
      return {

        // Full Name
        fullName: 'javascript broke, have a nice day',

        // Names
        firstName: 'conner',
        firstNames: [
          'cobbler',
          'concon',
          'conocer',
          'cnoner',
          'cobbly'
        ],

        lastName: 'francis',
        lastNames: [
          'franny',
          'franman',
          'france says',
          'fronces',
          'frinch fri'
        ]
      }
    },

    methods: {
      genName () {
        this.fullName = mh.sample(this.firstNames) + ' ' + mh.sample(this.lastNames)

        document.title = this.fullName + '\'s cool website'
      }
    },

    created () {
      this.genName()
    }
  }

</script>

<!-- ### -->

<style lang="scss" scoped>

  #home {
    // Display
    position: relative;
    // Size
    width: 100%;
    min-height: 100vh;
    padding: 64px;
    // Colors
    background-color: $brand-dark;
    color: $brand-light;
    // Font
    font-family: $font-main;
    
    #site-links {
      font-size: 125%;
      margin-top: 48px;
    }
    
    .img-wrapper {
      // Display
      position: absolute;
      overflow: hidden;
      right: 0;
      bottom: 0;
      padding: 16px;
      
      img {
        transform: rotate(17deg);
        min-width: 480px;
        width: 50vw;
        margin-bottom: -25vh;
        margin-right: 5vw;
        right: 0;
        // Rendering
        opacity: 0.1;
        -ms-interpolation-mode: nearest-neighbor;
        image-rendering: -webkit-optimize-contrast;
        image-rendering: -moz-crisp-edges;
        image-rendering: pixelated;
      }
    }
  }

</style>
