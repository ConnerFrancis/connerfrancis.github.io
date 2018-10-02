<template>

  <div id="toasts">
    <transition-group name="toasts" tag="div">
      <div
        class="toast"
        v-for="toast in currentList"
        :key="toast.id"
        :class="toast.type"
      >
        <h4>{{ toast.type }}</h4>
        <h3>{{ toast.message }}</h3>
        <h4 @click="deprecateToast(toast.id)">Remove toast</h4>
      </div>
    </transition-group>
  </div>

</template>

<!-- ### -->

<script>

  import { mapGetters } from 'vuex'

  export default {
    name: 'Toast',

    computed: {
      ...mapGetters('toast', [
        'currentList'
      ])
    },

    methods: {
      deprecateToast (id) {
        this.$store.dispatch('toast/deprecateToast', id)
      }
    }
  }

</script>

<!-- ### -->

<style lang="scss" scoped>

  #toasts {
    position: fixed;
    bottom: 0;
    margin: 0 0 32px 32px;
    // Display
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    .toast {
      opacity: 1;
      transform: translateX(0);
      // Size
      padding: 24px;
      margin-top: 8px;
      // Colors
      background-color: $brand-dark;
      color: $text-light;

      // Types of toasts
      &.error {
        background-color: $red;
      }
    }

    .toasts-enter {
      transform: translateX(-64px);
    }
    .toasts-enter, .toasts-leave-to {
      opacity: 0;
    }
    .toasts-enter-to, .toasts-leave {
      opacity: 1;
      transform: translateX(0px);
    }
    .toasts-enter-active {
      transition: all 0.25s ease;
    }
    .toasts-leave-active {
      transition: none;
      position: absolute;
    }
    .toasts-move {
      transition: transform 0.2s ease;
    }
  }

</style>
