<template>
  
  <div id="profile" class="container fluid col-12">
    <userprofile class="top-spaced" :id="$store.state.currentUser.data.uid"></userprofile>
  </div>
  
</template>

<!-- ### -->

<script>
  
  import UserProfile from '@/components/UserProfile'
  
  export default {
    name: 'Profile',
    
    components: {
      userprofile: UserProfile
    },
    
    mounted () {
      if(this.$store.state.currentUser.loggedIn === false) {
        this.$store.dispatch('toast/addToast', {
          type: 'error',
          message: 'Error loading profile (not signed in).'
        })
      } else if(this.$store.state.currentUser.loggedIn === true) {
        this.showLogin = false
      } else {
        this.$store.dispatch('toast/addToast', {
          type: 'error',
          message: 'Error loading profile.'
        })
      }
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #profile {
    
  }
  
</style>