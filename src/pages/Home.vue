<template>

  <div id="home">
    <h1 class="title" @click="genTitle()">conner's {{ title }}</h1>
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
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    /* Size */
    height: 100vh;
    width: 100%;
    padding: 64px;

    .title {
      margin: 0 0 64px 0;
      font-size: 3em;
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

      a {
        padding-top: 16px;
        text-decoration: none;
      }
    }
  }

</style>
