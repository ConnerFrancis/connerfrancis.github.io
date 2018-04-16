<template>

  <div id="follows-you" @mousemove="setMouseCoords">
    <follow-face ref="face" :pageX="pageX" :pageY="pageY" factor="4.5" showNose="true" showMouth="true"></follow-face>
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
        pageY: 0
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
    @include jumbotron;
  }

</style>
