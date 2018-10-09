<template>

    <transition-group name="toasts" tag="div" id="toasts">
      <div
        class="toast"
        v-for="toast in currentList"
        :key="toast.id"
        :class="toast.type"
        @click="$store.dispatch('toast/deprecateToast', toast.id)"
      >
        <div class="wrapper">
          <h4>{{ toast.type }}</h4>
          <a class="x-link"></a>
        </div>
        <p>{{ toast.message }}</p>
      </div>
    </transition-group>

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
    }
  }

</script>

<!-- ### -->

<style lang="scss" scoped>

  #toasts {
    position: fixed;
    bottom: 0;
    left: 0;
    margin: 32px;
    // Display
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: column;

    .toast {
      // Display fixes/etc
      flex-grow: 0;
      flex-basis: content;
      display: inline-block;
      opacity: 1;
      transform: translateX(0);
      // Size
      padding: 24px;
      margin-top: 8px;
      min-width: 128px;
      max-width: calc(100vw - 32px);
      // Colors
      background-color: $brand-dark;
      color: $text-light;
      // Effect
      transition: background-color 0.35s ease, color 0.35s ease, box-shadow 0.35s ease;
      .x-link::before, .x-link::after { transition: background-color 0.35s ease; }
      cursor: pointer;
      
      .wrapper {
        // Display
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        
        h4 {
          text-transform: capitalize;
          margin-right: 8px;
        }
      }

      // Types of toasts
      &.error {
        background-color: $red;
      }
      &.success {
        background-color: $pine;
      }
      
      // Effects
      &:hover {
        background-color: $brand-light;
        color: $text-dark;
        
        .x-link::before, .x-link::after { background-color: $brand-dark; }
      }
    }
    
    &.dark .toast {
      box-shadow: inset 0 0 0 1px rgba($brand-light, 0.2);
      
      &.error { box-shadow: none; }
      &.success { box-shadow: none; }
      
      &:hover { box-shadow: none; }
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
      opacity: 0;
      position: absolute;
    }
    .toasts-move {
      transition: transform 0.2s ease, width 0.2s ease;
    }
  }

</style>
