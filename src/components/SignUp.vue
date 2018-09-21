<template>
  
  <div id="sign-up">
    
    <input
      type="text"
      v-model="email"
      placeholder="email"
    />
    <input
      type="password"
      v-model="password"
      placeholder="password" 
    />
    <button :click="signUp">sign up</button>
    
  </div>
  
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
      
      signUp () {
        // Simple sign up with auth
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          // onResolve
          function (user) {
            // stuff
          },
          // onReject
          function (err) {
            // stuff
            alert(err.message)
          }
        )
      }
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  
  
</style>