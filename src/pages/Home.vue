<template>

  <div id="home">

    <div id="center">
      <img src="../assets/global/me.jpg" />
    </div>

    <div id="text">
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.url"
      >{{ link.name }}</a>
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

        // External pages
        links: [
          {
            name: 'youtube',
            url: 'https://www.youtube.com/thxbro79'
          },
          {
            name: 'github',
            url: 'https://www.github.com/ConnerFrancis'
          },
          {
            name: 'steam',
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // Size
    width: 100%;
    // Font
    font-family: $font-main;

    #center {
      // Display
      display: flex;
      flex-grow: 1;
      align-items: flex-end;

      img {
        height: 96px;
        width: 320px;
      }
    }

    #text {
      // Display
      display: flex;
      flex-grow: 1;
      align-items: flex-end;

      a {
        // Colors
        color: $brand-light;
        text-decoration: none;
        // Size
        margin-bottom: 16px;
        margin-left: 16px;
        // Misc
        cursor: pointer;

        &:first-child {
          margin-left: 0;
        }

        &:hover {
          opacity: 0.5;
        }
      }
    }

  }

</style>
