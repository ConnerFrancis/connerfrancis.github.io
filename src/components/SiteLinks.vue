<template>
  
  <div id="site-links">
    
    <!--
    The following portion is manual links.
    
    The point of these stand-ins for the actual
    links that should be used below these is so
    that we can display a "section not available"
    message because this site is unfinished.
    -->
    <p>Pages</p>
    <a class="arrow-link page" @click="unfinishedMessage">Boards</a>
    <router-link class="arrow-link page" to="/login">Login or sign up</router-link>
    <a class="arrow-link page" @click="unfinishedMessage">Experiments</a>
    
    <p>Links</p>
    <a class="arrow-link link" href="https://www.youtube.com/thxbro79">YouTube</a>
    <a class="arrow-link link" href="https://steamcommunity.com/id/kumo_duck/">Steam</a>
    <a class="arrow-link link" href="https://www.github.com/ConnerFrancis">Github</a>
    
    <!--
    This should be uncommented when the website is all said and done.
    
    That means these pages are actually functional.
    
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
    -->
  </div>
  
</template>

<!-- ### -->

<script>
  
  export default {
    name: 'SiteLinks',
    
    data () {
      return {
        
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
      
      unfinishedMessage () {
        this.$store.dispatch('toast/addToast', {
          type: 'info',
          message: 'This page is unfinished and unavailable.'
        })
      }
      
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #site-links {
    // Display
    display: flex;
    flex-direction: column;
    
    .arrow-link, p {
      // Font
      text-decoration: none;
      // Size
      padding-bottom: 12px;
      // Misc
      cursor: pointer;
      
      &:last-child {
        padding-bottom: 0;
      }
      
      &.link { font-weight: normal; }
    }
    
    p {
      cursor: default;
      font-size: 66.66%;
      opacity: 0.5;
      margin-top: 1.5em;
      &:first-child { margin-top: 0; }
    }
  }
  
</style>