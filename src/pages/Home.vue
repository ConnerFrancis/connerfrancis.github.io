<template>

  <div id="home">

    <div class="left-wrapper">
      <router-link
        class="arrow-link page"
        v-for="page in pages"
        :key="page.name"
        :to="page.loc"
      >{{ page.name }}</router-link>
      <a
        class="arrow-link link"
        v-for="link in links"
        :key="link.name"
        :href="link.url"
      >{{ link.name }}</a>
    </div>
    
    <div class="right-wrapper">
      <img src="../assets/global/skele_px_outline.png" />
    </div>

  </div>

</template>

<!-- ### -->

<script>

  import pages from '@/pages'
  import mh    from '@/services/mathhelper'

  export default {
    name: 'Home',

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
        ],
        
        // Internal pages
        pages: [
          {
            name: 'Boards',
            loc: '/boards'
          },
          {
            name: 'Login or sign up',
            loc: '/login'
          },
          {
            name: 'Experiments',
            loc: '/experiments'
          }
        ],

        // External pages
        links: [
          {
            name: 'YouTube',
            url: 'https://www.youtube.com/thxbro79'
          },
          {
            name: 'Steam',
            url: 'https://steamcommunity.com/id/kumo_duck/'
          },
          {
            name: 'Github',
            url: 'https://www.github.com/ConnerFrancis'
          }
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

    .left-wrapper {
      // Display
      display: flex;
      flex-direction: column;
      
      .arrow-link {
        // Colors
        text-decoration: none;
        // Size
        padding-bottom: 12px;
        // Misc
        cursor: pointer;
        
        &:last-child {
          padding-top: 0;
        }
      }
      
      .link {
        font-weight: normal;
      }
    }

    .right-wrapper {
      // Display
      display: flex;
      // Size
      padding-left: 64px;

      img {
        height: 160px;
        width: 160px;
        //filter: drop-shadow(0px 8px 8px rgba(0,0,0,0.2));
      }
    }
  }

</style>
