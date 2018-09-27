<template>
  
  <form @submit.prevent="handleSubmit" id="sign-up" class="standout">
    <h3>signup</h3>
    <input
      type="text"
      v-model="email"
      placeholder="email"
    />
    <input type="password" v-model="password" placeholder="password" 
    />
    <button type="submit">sign up</button>
    
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
        password: ''
      }
    },
    
    methods: {
      handleSubmit () {
        // etc
      }
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #sign-up {
    color: $brand-dark;
  }
  
</style>