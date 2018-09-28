<template>
  
  <div id="login-screen" class="container fluid">
    <div class="wrapper container">
      <login class="col-2"></login>
      <signup class="col-2"></signup>
    </div>
  </div>
  
</template>

<!-- ### -->

<script>
  
  import { mapGetters } from 'vuex'
  
  import Login  from '@/components/Login'
  import SignUp from '@/components/SignUp'
  import Logout from '@/components/Logout'
  
  export default {
    name: 'LoginScreen',
    
    components: {
      login: Login,
      signup: SignUp,
      logout: Logout
    },
    
    computed: {
      ...mapGetters({
        loggedIn: 'currentUser/loggedIn'
      })
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #login-screen {
    // Display
    align-items: center;
    
    .wrapper {
      justify-content: center;
      
      #login {
        margin-right: 32px;
      }
    }
  }
  
</style>