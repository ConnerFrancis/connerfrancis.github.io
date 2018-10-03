<template>
  
  <div id="profile">
    <userprofile :id="id"></userprofile>
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
    
    computed: {
      id () {
        return this.$store.state.currentUser.data.uid
      }
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #profile {
    
  }
  
</style>