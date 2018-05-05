<template>

  <div id="fellasclub">
    <div class="header-main card">
      <div class="header">
        <router-link class="router-link" to="/">Home</router-link>
        <h1 class="title-main"><h1>fellas club</h1></h1>
      </div>
      <div class="inner">
        pls
      </div>
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

  @keyframes title-main-rotate {
    0% {
      transform: rotate(0.01turn);
    }
    100% {
      transform: rotate(0.04turn);
    }
  }
  
  @keyframes title-main-size {
    0% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }

  #fellasclub {
    @include flex-container($horiz: center);
    @include flex-part($padding: 16px);
    background-color: $cyan;
    font-size: 13px;
    
    .card {
      @include flex-container($gutter: 4px);
      @include flex-part($padding: 3px 4px);
      /* Border */
      border: 2px solid;
      border-bottom-color: #535353;
      border-right-color: #535353;
      border-left-color: #dbdbdb;
      border-top-color: #dbdbdb;
      /* Size */
      //padding: 2px 4px;
      margin: 0;
      /* Colors */
      background-color: #bfbfbf;
      /* Shadow */
      //box-shadow: 4px 4px 0 darken(saturate($cyan, 4%), 4%);
    }
    
    .header {
      @include flex-container;
      @include flex-part($col: 12, $padding: 1px 4px)
      /* Colors */
      background-color: #808080;
      color: #dbdbdb;
    }
    
    .inner {
      @include flex-container;
      @include flex-part($padding: 1px 4px);
      /* Colors */
      background-color: $white;
      /* Border */
      border: 2px solid;
      border-bottom-color: #dbdbdb;
      border-right-color: #dbdbdb;
      border-left-color: #535353;
      border-top-color: #535353;
    }

    .header-main {
      @include flex-container($horiz: space-between, $gutter: 2px);
      @include flex-part($col: 11, $padding: 3px 4px);
      /* Pos/size */
      width: 100%;
      max-height: 100px;
      position: fixed;

      .title-main {
        /* Font */
        font-weight: bold;
        font-size: 1.5em;
        /* Position */
        position: absolute;
        right: 0;
        top: -0.5em;
        color: rgb(225,70,255);
        transform: rotate(0.02turn);
        text-shadow: 0.1em 0.1em darken(rgb(215,50,250), 50%);
        text-decoration: underline;
        /* Animation */
        animation: 5s alternate linear infinite title-main-size;
        
        h1 {
          /* Animation */
          animation: 3.5s alternate linear infinite title-main-rotate;
        }
      }
    }

    .content {
      @include flex-part($col: 8);
    }
  }

</style>
