<template>
  
  <form @submit.prevent="handleSubmit" id="login">
    <input v-model="email" placeholder="Email" type="text" />
    <input v-model="password" placeholder="Password" type="password" />
    <button type="submit">Login</button>
  </form>
  
</template>

<!-- ### -->

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Login',
    
    data () {
      return {
        email: '',
        password: '',
        
        status: ''
      }
    },
    
    methods: {
      // Show login was successful
      showLoggedIn () {
        this.status = 'Login successful!'
      },
      
      // Show an error if login was not successful
      showError(e) {
        this.status = e.message
      },
      
      // Handle the submit
      handleSubmit () {
        this.$store.dispatch('currentUser/login', {
          email: this.email,
          password: this.password
        }).then(() => {
          // No promise Errors
          this.showLoggedIn()
        }).catch((e) => {
          // Errors
          this.showError(e)
        })
      }
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #login {
    
  }
  
</style>