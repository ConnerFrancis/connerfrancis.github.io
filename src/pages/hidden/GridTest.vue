<template>

  <div id="gridtest" class="container jumbotron pls pls-2">
    <div class="container jumbotron cells-1">
      <div class="w-lg-1 h-lg-1"><p>1</p></div>
      <div class="w-lg-1 h-lg-2"><p>2</p></div>
      <div class="w-lg-1 h-lg-3"><p>3</p></div>
      <div class="w-lg-1 h-lg-4"><p>4</p></div>
      <div class="w-lg-1 h-lg-5"><p>5</p></div>
      <div class="w-lg-1 h-lg-6"><p>6</p></div>
      <div class="w-lg-1 h-lg-7"><p>7</p></div>
      <div class="w-lg-1 h-lg-8"><p>8</p></div>
      <div class="w-lg-1 h-lg-9"><p>9</p></div>
      <div class="w-lg-1 h-lg-10"><p>10</p></div>
      <div class="w-lg-1 h-lg-11"><p>11</p></div>
      <div class="w-lg-1 h-lg-12"><p>12</p></div>
      <div class="w-lg-1 h-lg-13"><p>13</p></div>
      <div class="w-lg-1 h-lg-14"><p>14</p></div>
      <div class="w-lg-1 h-lg-15"><p>15</p></div>
      <div class="w-lg-1 h-lg-16"><p>16</p></div>
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
