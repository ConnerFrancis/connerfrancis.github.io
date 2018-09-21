<template>

  <div id="home">
    
    <div id="center">
      <img src="../assets/global/me.jpg" />
      
      <div id="text">
        <p v-on:click="genName">{{ fullName }}</p>
        
        <div id="links">
          <a
            v-for="link in links"
            :key="link.name"
            :href="link.url"
          >{{ link.name }}</a>
        </div>
      </div>
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
          }
        ]
        
      }
    },
    
    methods: {
      genName () {
        this.fullName = mh.sample(this.firstNames) + ' ' + mh.sample(this.lastNames)
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
    // Size
    width: 100%;
    height: 100vh;
    padding: 96px;
    // Font
    font-size: 24px;
    font-family: $font-accent;
    
    img {
      height: 96px;
    }

    #center {
      // Display
      display: flex;
      flex-direction: row;
      
      #text {
        // Display
        display: flex;
        flex-direction: column;
        align-items: space-around;
        justify-content: space-around;
        // Size
        padding-left: 32px;
        min-width: 15ch; // <-- this 15ch is about the value of youtube and github combined
        
        p {
          cursor: pointer;
          font-family: $font-accent;
        }
        
        #links {
          // Display
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        
          a {
            // Colors
            color: $brand-light;
            text-decoration: none;
            opacity: 0.5;
            // Misc
            cursor: pointer;
            
            &:hover {
              opacity: 0.25;
            }
          }
        }
      }
    }
    
  }

</style>
