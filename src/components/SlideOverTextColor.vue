<template>

  <div class="slide-over-text-color" @mouseenter="toggleSlideActive" @mouseleave="toggleSlideActive">
    <div class="slot one" :class="{ active: isSlideActive, disabled: !isSlideActive }">
      <slot></slot>
    </div>
    <div class="slot two" :class="{ active: isSlideActive, disabled: !isSlideActive }">
      <slot></slot>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'SlideOverTextColor',

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
    @include flex-container($dir: row);
    position: relative;
    width: auto;

    .slot {
      position: relative;
      top: 0;
      left: 0;

      &.one {
        background-color: blue;

        &.active {
          left: 50%;
        }
      }

      &.two {
        background-color: red;
        overflow: hidden;
        width: 100%;
        transition: width 1s ease;

        &.disabled {
          width: 0;
          transition: width 1s ease;
        }
      }
    }
  }

</style>
