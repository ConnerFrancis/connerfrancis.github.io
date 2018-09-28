<template>
  
  <form @submit.prevent="handleSubmit" id="login">
    <input v-model="email" placeholder="Email" type="text" />
    <input v-model="password" placeholder="Password" type="password" />
    <div class="wrapper">
      <button type="submit">Login</button>
      <logout v-if="loggedIn"></logout>
    </div>
    <label>{{ status }}</label>
  </form>
  
</template>

<!-- ### -->

<script>

  import { mapActions, mapGetters } from 'vuex'
  
  import Logout from '@/components/Logout'

  export default {
    name: 'Login',
    
    components: {
      logout: Logout
    },
    
    data () {
      return {
        email: '',
        password: '',
        
        status: ''
      }
    },
    
    computed: {
      ...mapGetters({
        loggedIn: 'currentUser/loggedIn'
      })
    },
    
    methods: {
      // Handle the submit
      handleSubmit () {
        this.$store.dispatch('currentUser/login', {
          email: this.email,
          password: this.password
        }).then(() => {
          // No promise Errors
          this.status = 'Login successful!'
        }).catch((e) => {
          // Errors
          this.status = e.message
        })
      }
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #login {
    .wrapper {
      width: 100%;
      // Display
      display: flex;
      justify-content: space-between;
    }
  }
  
</style>