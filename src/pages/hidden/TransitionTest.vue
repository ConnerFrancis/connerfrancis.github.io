<template>
  
  <div id="transitiontest">
    
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="test-group" tag="div">
      <div
        class="test-group-item"
        v-for="testGroupItem in testGroupItems"
        :key="testGroupItem"
      >{{ testGroupItem }}</div>
    </transition-group>
    
  </div>
  
</template>

<!-- ### -->

<script>
  
  export default {
    name: 'TransitionTest',
    
    data () {
      return {
        testGroupItems: [1,2,3,4,5,6,7,8,9],
        nextNum: 10
      }
    },
    
    methods: {
      
      // Get a random index
      randomIndex () {
        return Math.floor(Math.random() * this.testGroupItems.length)
      },
      
      // Add a new number
      add () {
        this.testGroupItems.splice(this.randomIndex(), 0, this.nextNum++)
      },
      
      // Remove a number
      remove () {
        this.testGroupItems.splice(this.randomIndex(), 1)
      }
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #transitiontest {
    
    .test-group-enter, .test-group-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }
    .test-group-enter-active, .test-group-leave-active {
      transition: all 1s;
    }
    .test-group-leave-active {
      position: absolute;
    }
    .test-group-move {
      transition: transform 1s;
    }
    
  }
  
</style>