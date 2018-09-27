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
      <img src="../assets/global/me_two.jpg" />
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
            name: 'Github',
            url: 'https://www.github.com/ConnerFrancis'
          },
          {
            name: 'Steam',
            url: 'https://steamcommunity.com/id/kumo_duck/'
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
      
      .link, .page {
        // Colors
        text-decoration: none;
        // Size
        margin-bottom: 12px;
        // Misc
        cursor: pointer;
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
        height: 192px;
        width: 192px;
      }
    }
  }

</style>
