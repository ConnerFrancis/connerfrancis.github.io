<template>
  
  <div id="home">
    <div class="left">
      <div class="links">
        <a class="soft">Example soft link</a>
        <a class="hard">Example hard link</a>
      </div>
      <div class="pfp"></div>
    </div>
    
    <div class="right">
      
    </div>
  </div>
  
</template>

<!-- ### -->

<script>
  
  
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #home {
    // Display
    display: flex;
    justify-content: center;
    // Size
    max-height: 100vh;
    max-width: 100vw;
    padding: 96px;
    
    .left {
      // Display
      display: flex;
      // Size
      width: 50%;
      background-color: black;
    }
    
    .right {
      // Size
      width: 50%;
    }
  }
  
</style>