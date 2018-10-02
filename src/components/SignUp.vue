<template>
  
  <form @submit.prevent="handleSubmit" id="sign-up" class="standout">
    <input type="text" v-model="email" placeholder="Email" />
    <input id="password" type="password" v-model="password" placeholder="Password" />
    <input id="confirm-password" autocomplete="new-password" type="password" v-model="confirmPassword" placeholder="Confirm password" />
    <button type="submit">Sign up</button>
    <label>{{ status }}</label>
  </form>
  
</template>

<!-- ### -->

<script>
  
  import firebase from 'firebase'
  
  export default {
    name: 'SignUp',
    
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        
        status: ''
      }
    },
    
    methods: {
      handleSubmit () {
        this.$store.dispatch('currentUser/signUp', {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        }).then(() => {
          this.$store.dispatch('toast/addToast', {
            type: 'success',
            message: 'Created account successfully!'
          })
        }).catch((e) => {
          this.$store.dispatch('toast/addToast', {
            type: 'error',
            message: e.message
          })
        })
      }
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #sign-up {
    
  }
  
</style>