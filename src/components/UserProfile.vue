<template>
  
  <div id="user-profile" class="container modal">
    <div class="user-meta card dark container col-12">
      <img class="user-pfp" src="/static/twotone.png" />
      <div class="user-meta-text col">
        <h1>{{ user.username }}</h1>
        <h4>{{ user.bio }}</h4>
      </div>  
    </div>
    <div class="user-tabs col-4 card dark">
      <a
        class="tab-link"
        v-for="tab in tabs"
        @click="activeTab = tab.name"
        :class="{ active: (activeTab == tab.name) }"
      >{{ tab.name }}</a>
    </div>
    <!-- Posts -->
    <div class="user-tab col-8 card light user-tab-posts" v-if="activeTab == 'Posts'">
      
    </div>
    <!-- Meta -->
    <div class="user-tab col-8 card light user-tab-meta" v-if="activeTab == 'Meta'">
      <span
        v-for="(value, key) in user"
      ><h3>{{ key }}</h3><h4>{{ value }}</h4></span>
    </div>
  </div>
  
</template>

<!-- ### -->

<script>
  
  export default {
    name: 'UserProfile',
    
    props: ['id'],
    
    data () {
      return {
        user: {},
        posts: [],
        
        tabs: [
          {
            name: 'Posts'
          },
          {
            name: 'Meta'
          }
        ],
        activeTab: 'Posts'
      }
    },
    
    mounted () {
      
      // Set user
      this.$db
        .collection('users')
        .doc(this.id)
        .get()
        .then(doc => {
          
          // Check if the user exists
          if (doc.exists) {
            this.user = doc.data()
            
            // Get the posts for the user
            doc.data().posts.forEach(post => {
              this.$db
                .collection('posts')
                .doc(post)
                .get()
                .then(doc => this.posts.push({
                    id: post,
                    ...doc.data()
                  })
                )
            })
            
          // Check if the user does not exist
          } else {
            // Error when the user does not exist
            this.$store.dispatch('toast/addToast', {
              type: 'error',
              message: `User ${this.id} does not exist.`
            })
          }
        })
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #user-profile {
    align-items: flex-start;
    
    .user-meta {
      // Display
      display: flex;
      flex-direction: row;
      
      .user-pfp {
        // Size
        height: 124px;
        width: 124px;
        // Rendering
        -ms-interpolation-mode: nearest-neighbor;
        image-rendering: -webkit-optimize-contrast;
        image-rendering: -moz-crisp-edges;
        image-rendering: pixelated;
        // @DEV
        background-color: $brand-main;
      }
      
      .user-meta-text {
        padding-left: 32px;
        text-align: right;
      }
    }
    
    .user-tabs {
      // Size
      padding: 0 0 32px 64px;
      // Display
      display: flex;
      flex-direction: column;
      // Font
      text-align: right;
    }
    
    .user-tab {
      
      
      &.user-tab-meta {
        h3 { padding-bottom: 0; }
        h4 { padding-bottom: 16px; }
        
        span:last-child h4 { padding-bottom: 0; }
      }
    }
  }
  
</style>