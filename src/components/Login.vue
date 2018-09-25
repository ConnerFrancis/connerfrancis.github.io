<template>
  
  <div id="login">
    <!-- TODO -->
    <input v-model="username" placeholder="username" type="text" />
    <input v-model="username" placeholder="password" type="password" />
    <button type="submit">Submit</button>
  </div>
  
</template>

<!-- ### -->

<script>
  
  export default {
    name: 'Login',
    
    data () {
      username: ''
      password: ''
    },
    
    methods: {
      login () {
        
      }
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #login {
    
  }
  
</style>