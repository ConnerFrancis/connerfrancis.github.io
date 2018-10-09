<template>
  
  <div id="toasttest">
    <form @submit.prevent="addToast" id="toasttestform">
      <input v-model="newType" type="text" placeholder="Type" />
      <label>check: {{ newType }}</label>
      <input v-model="newMessage" type="text" placeholder="Message" />
      <label>check: {{ newMessage }}</label>
      <button type="submit">New Toast</button>
    </form>
    <h3>Current Toasts</h3>
    <h4>{{ currentList }}</h4>
    <h3>Deprecated Toasts</h3>
    <h4>{{ deprecatedList }}</h4>
    <h3>All Toasts</h3>
    <h4>{{ list }}</h4>
  </div>
  
</template>

<!-- ### -->

<script>
  
  import { mapState, mapGetters } from 'vuex'
  
  export default {
    name: 'ToastTest',
    
    data () {
      return {
        newType: '',
        newMessage: ''
      }
    },
    
    computed: {
      ...mapState({
        list: state => state.toast.list
      }),
      ...mapGetters('toast', [
        'count',
        'latestToast',
        'currentList',
        'deprecatedList'
      ])
    },
    
    methods: {
      
      addToast () {
        this.$store.dispatch('toast/addToast', {
          type: this.newType,
          message: this.newMessage
        }).catch((e) => {
          this.$store.dispatch('toast/addToast', {
            type: 'error',
            message: `(${e.code}) ${e.message}`
          })
        })
      }
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #toasttest {
    
  }
  
</style>