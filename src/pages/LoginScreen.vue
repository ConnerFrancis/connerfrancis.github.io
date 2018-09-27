<template>
  
  <div id="login-screen">
      <login></login>
      <signup></signup>
      <logout></logout>
  </div>
  
</template>

<!-- ### -->

<script>
  
  import Login  from '@/components/Login'
  import SignUp from '@/components/SignUp'
  import Logout from '@/components/Logout'
  
  export default {
    name: 'LoginScreen',
    
    components: {
      login: Login,
      signup: SignUp,
      logout: Logout
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #login-screen {
    // Display
    display: flex;
    justify-content: center;
    align-items: center;
    // Size
    width: 100%;
    
    #login {
      margin-right: 32px;
    }
  }
  
</style>