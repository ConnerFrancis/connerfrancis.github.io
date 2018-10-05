<template>
  
  <div id="sidebar">
    <sitelinks></sitelinks>
    <div class="nav">
      <a class="arrow-left" @click="$router.go(-1)">Back</a>
      <a class="arrow-right" @click="$router.go(1)">Forward</a>
    </div>
  </div>
  
</template>

<!-- ### -->

<script>
  
  import SiteLinks from '@/components/SiteLinks'
  
  export default {
    name: 'Sidebar',
    
    components: {
      sitelinks: SiteLinks
    }
  }
  
</script>

<!-- ### -->

<style lang="scss" scoped>
  
  #sidebar {
    padding: 48px;
    position: fixed;
  }
  
</style>