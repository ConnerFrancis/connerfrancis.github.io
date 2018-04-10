<template>
  
  <div id="home" class="full">
    <h1 class="title" @click="">conner's {{ title }}</h1>
    <div class="pages">
        <router-link
          v-for="page in pages"
          :key="page.name"
          :to="page.path"
        >{{ page.meta.name }}</router-link>
    </div>
  </div>
  
</template>

<script>
  import mh    from '@/services/mathhelper'
  import pages from '@/pages'
  
  export default {
    name: 'Home',
    
    data () {
      return {
        pages: pages,
        titles: [
          'dungeon',
          'cave',
          'grotto'
        ],
        title: ''
      }
    },
    
    methods: {
      genTitle: () => {
        return mh.sample(this.titles)
      }
    },
    
    created () {
      this.title = this.genTitle();
    }
  }
  
</script>

<style lang="scss" scoped>
  
  #home {
    
    .title {
      
    }
    .pages {
      /* Display */
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      /* Size */
      padding: 35% 16px 16px 20%;
      width: 35%;
      height: 35%;
      /* Color */
      color: $text-white;
      background-color: $grey-darkest;
    }
  }
  
</style>
