<template>

  <div id="fellasclub">
    <div class="header">
      <router-link class="router-link" to="/">back to NORMIE LAND</router-link>
      <h1 class="title">fella's club</h1>
    </div>
    <div class="content">
      <h1>Fella's Club</h1>
      <p>bruh just work my god</p>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'FellasClub'
  }

</script>

<style lang="scss" scoped>

  #fellasclub {
    @include flex-container;
    @include flex-part($padding: 0);

    .header {
      @include flex-container($horiz: space-around);
      @include flex-part($col: 12, $padding: 13px);
      /* Pos/size */
      width: 100%;
      max-height: 100px;
      position: fixed;
      /* Colors */
      background-color: $grey-lighter;
      /* Border */
      border: 3px solid $grey;
      box-shadow: 0 3px 0 $grey-darker;

      .router-link {
        background-color: rgba(100,255,255,0.7);
        transition: background-color 0.5s linear, color 10s ease;
        font-size: 0.75em;

        &::before {
          content: ':(';
          font-size: 2em;
          color: blue;
        }

        &:hover {
          background-color: red;
          color: $white;
          transition: background-color 3s ease-in, color 3s ease-out;

          &::before {
            content: '';
          }

          &::after {
            content: ':(';
            font-size: 2em;
            color: blue;
          }
        }
      }

      .title {
        font-weight: bold;
        color: rgb(215,50,250);
        transform: rotate(0.02turn);
        font-size: 4em;
        text-shadow: 5px 5px darken(rgb(215,50,250), 50%);
        text-decoration: underline;
      }
    }

    .content {
      @include flex-part($col: 8);
    }
  }

</style>
