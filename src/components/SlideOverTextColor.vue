<template>

  <div class="slide-over-text-color" @mouseenter="toggleSlideActive" @mouseleave="toggleSlideActive">
    <div class="slot one" :style="{ color: colorDisabled }">
      <slot></slot>
    </div>
    <div class="slot two" :style="{ color: colorActive }" :class="{ disabled: !isSlideActive }">
      <slot></slot>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'SlideOverTextColor',

    props: {
      colorDisabled: {
        type: String,
        default: ''
      },
      colorActive: {
        type: String,
        default: ''
      },

      animationTime: {
        type: String,
        default: '3s'
      }
    },

    data () {
      return {
        isSlideActive: false
      }
    },

    methods: {
      toggleSlideActive () {
        this.isSlideActive = !this.isSlideActive
      }
    }
  }

</script>

<style lang="scss" scoped>

  .slide-over-text-color {
    @include flex-container($dir: column);
    position: relative;
    width: auto;

    .slot {

      &.two {
        color: red;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        margin-top: -1.5em;
        transition: width 0.5s ease;

        &.disabled {
          width: 0;
          margin-top: -1.5em;
          transition: width 0.5s ease;
        }
      }
    }
  }

</style>
