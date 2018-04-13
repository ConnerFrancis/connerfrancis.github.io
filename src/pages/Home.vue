<template>

  <div id="home">
    
    <div class="left">
      <h1 class="title" @click="genTitle()">conner's {{ title }}</h1>
      <div class="pages">
          <router-link
            v-for="page in pages"
            :key="page.name"
            :to="page.path"
          >{{ page.meta.name }}</router-link>
      </div>
    </div>
    
    <div class="right">
      
    </div>
    
    <follow-face></follow-face>
  </div>

</template>

<script>
  import mh    from '@/services/mathhelper'
  import pages from '@/pages'
  
  import FollowFace from '@/components/FollowFace.vue'

  export default {
    name: 'Home',

    components: {
      'follow-face': FollowFace
    },

    data () {
      return {
        pages,
        titles: [
          'dungeon',
          'cave',
          'grotto',
          'hovel'
        ],
        title: '',
        lastTitle: ''
      }
    },

    methods: {
      genTitle () {
        this.lastTitle = this.title
        while(this.title == this.lastTitle) {
          this.title = mh.sample(this.titles)
        }
      }
    },

    created () {
      this.genTitle();
    }
  }

</script>

<style lang="scss" scoped>

  #home {
    /* Display */
    @include flex-container;
    /* Size */
    flex: 1;

    .left {
      @include flex-container;
      @include flex-part($col: 6);
      background-color: red;

      .title {
        margin: 0 0 64px 0;
        font-size: 1.5em;
        cursor: pointer;
      }
      .pages {
        /* Display */
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
        /* Size */
        padding: 35% 32px 32px 20%;
        width: 35%;
        height: 35%;
        /* Font */
        font-size: 2em;
        color: $text-white;
        /* Color */
        background-color: $grey-darkest;
      }
    }
    
    .right {
      height: 50px;
      background-color: green;
    }
  }

</style>
