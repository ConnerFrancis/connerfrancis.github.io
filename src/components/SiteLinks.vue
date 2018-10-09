<template>
  
  <div id="site-links">
    <p>Pages</p>
    <router-link
      class="arrow-link page"
      v-for="page in pages"
      :key="page.name"
      :to="page.loc"
      v-if="!page.disabled"
    >{{ page.name }}</router-link>
    <p>Find me</p>
    <a
      class="arrow-link link"
      v-for="link in links"
      :key="link.name"
      :href="link.url"
    >{{ link.name }}</a>
  </div>
  
</template>

<!-- ### -->

<script>
  
  export default {
    name: 'SiteLinks',
    
    props: {
      showHome: Boolean
    },
    
    data () {
      return {
        
        // Internal pages
        pages: [
          {
            name: 'Home',
            loc: '/',
            disabled: this.showHome
          },
          {
            name: 'Boards',
            loc: '/boards',
            disabled: true
          },
          {
            name: 'Login or sign up',
            loc: '/login'
          },
          {
            name: 'Profile',
            loc: '/profile'
          },
          {
            name: 'Experiments',
            loc: '/experiments',
            disabled: true
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