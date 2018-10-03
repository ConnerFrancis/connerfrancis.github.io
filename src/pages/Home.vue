<template>

  <div id="home">

    <site-links></site-links>

    <div class="right-wrapper">
      <img src="/static/twotone_flipped.png" />
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    // Size
    width: 100%;
    // Font
    font-family: $font-main;

    .right-wrapper {
      // Display
      display: flex;
      // Size
      padding-left: 64px;

      img {
        height: 160px;
        -ms-interpolation-mode: nearest-neighbor;
        image-rendering: -webkit-optimize-contrast;
        image-rendering: -moz-crisp-edges;
        image-rendering: pixelated;
      }
    }
  }

</style>
