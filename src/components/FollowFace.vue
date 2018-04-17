<template>

  <div class="follow-face">
    <div class="eyes" :style="{ width: scale(3) }">
      <div class="eye" ref="eyeLeft" :style="{ transform: rotateLeft, width: scale(), height: scale() }">
        <div class="pupil" :style="{ width: scale(0.4), height: scale(0.4) }"></div>
      </div>
      <div class="eye" ref="eyeRight" :style="{ transform: rotateRight, width: scale(), height: scale() }">
        <div class="pupil" :style="{ width: scale(0.4), height: scale(0.4) }"></div>
      </div>
    </div>
    <div class="nose" v-if="showNose" :style="{ width: scale(), height: scale() }"></div>
    <div class="mouth" v-if="showMouth" :style="{ width: scale(3), height: scale(), marginTop: 0, borderWidth: scale(0.4) }">
      <div class="corner" :style="{ width: scale(0.4), height: scale(0.4), left: '-' + scale(0.4), top: '-' + scale(0.2) }"></div>
      <div class="corner" :style="{ width: scale(0.4), height: scale(0.4), left: scale(1.8), top: '-' + scale(0.2) }"></div>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'FollowFace',

    props: {
      // Mouse coords
      pageX: Number,
      pageY: Number,
      // Scale
      factor: {
        default: 1,
        validator (v) {
          return v >= 0
        }
      },
      // Display
      showNose: {
        default: false
      },
      showMouth: {
        default: false
      }
    },

    data () {
      return {
        eyeLeft: {},
        eyeRight: {},

        baseScale: 16
      }
    },

    computed: {
      rotateLeft () {
        return this.track(this.eyeLeft)
      },

      rotateRight () {
        return this.track(this.eyeRight)
      },

      scaleComputed () {
        return this.baseScale * this.factor
      }
    },

    methods: {
      track (eye) {
        /* kudos to
           https://codepen.io/J-Roel/pen/wWGNQN */
        let x = (eye.offsetLeft) + (eye.clientWidth / 2)
        let y = (eye.offsetTop) + (eye.clientHeight / 2)
        let rad = Math.atan2(this.pageX - x, this.pageY - y)
        let deg = (rad * (180 / Math.PI) * -1) + 180

        return 'rotate(' + Math.round(deg) + 'deg)';
      },

      scale (factor) {
        if (factor == null) factor = 1
        return this.scaleComputed * factor + 'px'
      }
    },

    mounted () {
      this.eyeLeft = this.$refs.eyeLeft
      this.eyeRight = this.$refs.eyeRight
    }
  }

</script>

<style lang="scss" scoped>

  $eye-size: 64px;
  $nose-size: 32px;

  .follow-face {
    @include flex-container($dir: column, $horiz: center, $vert: center);

    .eyes {
      @include flex-container($dir: row, $horiz: space-around);
      width: $eye-size * 3;

      .eye {
        /* Size */
        width: $eye-size;
        height: $eye-size;
        /* Border */
        border-radius: 50%;
        border: 1px solid white;
        /* Colors */
        background-color: white;
        /* Display */
        @include flex-container($horiz: center);

        .pupil {
          /* Size */
          width: $eye-size / 3;
          height: $eye-size / 3;
          border-radius: 50%;
          /* Colors */
          background-color: $black;
        }
      }
    }

    .nose {
      /* Size */
      width: $nose-size;
      height: $nose-size;
      /* Colors */
      background-color: $blue-dark;
      /* Border */
      border-radius: 50%;
    }

    .mouth {
      /* Display */
      @include flex-container($dir: row);
      /* Size */
      width: $nose-size;
      height: $nose-size;
      margin-top: $nose-size;
      border-radius: 0 0 75% 75% / 0 0 150% 150%;
      /* Colors */
      //background-color: $grey-darkest;
      /* Border */
      border-style: solid;
      border-color: $grey-darkest;
      border-top: 0;

      .corner {
        /* Position */
        position: relative;
        /* Colors */
        background-color: $grey-darkest;
        /* Border */
        border-radius: 50%;
      }
    }
  }

</style>
