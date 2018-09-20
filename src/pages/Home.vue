<template>
  
  <div id="home">
    <div class="left">
      <div class="links">
        <a class="soft">YouTube</a>
        <a class="soft">GitHub</a>
        <a class="hard">Example hard link</a>
      </div>
      <div class="pfp"><img src="../assets/global/me.jpg" /></div>
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
    align-self: stretch;
    // Size
    width: 100%;
    height: 100vh;
    padding: 96px;
    
    .left {
      // Display
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // Size
      width: 50%;
      //background-color: black;
      
      .links {
        // Display
        display: flex;
        flex-direction: column;
        // Font
        font-weight: bold;
        
        a {
          cursor: pointer;
          margin-bottom: 8px;
          
          &.soft {
            opacity: 0.5;
          }
        }
      }
      
      .pfp {
        // Size
        height: 192px;
        width: 192px;
        // Colors
        background-color: #ededed;
        
        overflow: hidden;
        
        img {
          max-height: 192px;
        }
      }
    }
    
    .right {
      // Size
      width: 50%;
    }
  }
  
</style>