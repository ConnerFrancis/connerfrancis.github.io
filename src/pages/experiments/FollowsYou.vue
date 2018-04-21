<template>

  <div id="follows-you" @mousemove="setMouseCoords" @mouseenter="eyesClosed = false" @mouseleave="eyesClosed = true">
    <follow-face :eyesClosed="eyesClosed" ref="face" :pageX="pageX" :pageY="pageY" factor="10"></follow-face>
  </div>

</template>

<script>
  import FollowFace from '@/components/FollowFace.vue'

  export default {
    name: 'FollowsYou',

    components: {
      'follow-face': FollowFace
    },

    data () {
      return {
        pageX: 0,
        pageY: 0,
        eyesClosed: true
      }
    },

    methods: {
      setMouseCoords (event) {
        this.pageX = event.pageX
        this.pageY = event.pageY
      }
    }
  }

</script>

<style lang="scss" scoped>

  #follows-you {
    /* Display */
    @include flex-container($horiz: center, $vert: center);
    @include flex-part($col: 12);
    @include jumbotron;
    background-color: $black;
    
    .visible {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
    
    //.hidden {
    //  opacity: 0;
    //  transition: opacity 0.5s ease;
    //}
  }

</style>
