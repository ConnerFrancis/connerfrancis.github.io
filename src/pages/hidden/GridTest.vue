<template>

  <div id="gridtest" class="container jumbotron pls pls-2">
    <div class="container jumbotron cells-1 col-xs-12">
      <div class=".w-xs-12 .h-xs-3">rem cells</div>
      <div class="col-xs-12 container">
        <div class="w-xs-1 h-xs-1"><p>1</p></div>
        <div class="w-xs-1 h-xs-2"><p>2</p></div>
        <div class="w-xs-1 h-xs-1"><p>1</p></div>
        <div class="w-xs-1 h-xs-2"><p>2</p></div>
        <div class="w-xs-1 h-xs-1"><p>1</p></div>
        <div class="w-xs-1 h-xs-2"><p>2</p></div>
        <div class="w-xs-1 h-xs-1"><p>1</p></div>
        <div class="w-xs-1 h-xs-2"><p>2</p></div>
        <div class="w-xs-1 h-xs-1"><p>1</p></div>
        <div class="w-xs-1 h-xs-2"><p>2</p></div>
        <div class="w-xs-1 h-xs-1"><p>1</p></div>
        <div class="w-xs-1 h-xs-2"><p>2</p></div>
        <div class="w-xs-1 h-xs-1"><p>1</p></div>
        <div class="w-xs-1 h-xs-2"><p>2</p></div>
        <div class="w-xs-1 h-xs-1"><p>1</p></div>
        <div class="w-xs-1 h-xs-2"><p>2</p></div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'GridTest'
  }

</script>

<style lang="scss" scoped>

  #gridtest {

    .cells-1 {
      div {
        background-color: $white;
        border: $grey-lighter 2px solid;
      }
    }
  }

</style>
