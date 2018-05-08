<template>

  <div id="home" class="fluid justify-end">

    <div class="main row screen-height container justify-between">

      <h1 class="big-text col-8 container be-justify-end be-align-end">
        Conner's<br/>website<br/>conglomerate
      </h1>

      <div class="pages col-4 punch-hole fluid col-xs-12 col-sm-12 container go-up align-end">
        
        <router-link
          class="link bold"
          v-for="page in pages"
          v-show="((page.name != 'Home') && (page.name != 'HomeOld') && (page.meta.hidden != true))"
          :key="page.name"
          :to="page.path"
        >{{ page.meta.name }}</router-link>
        <a class="link bold" @click="scrollToBlog">Blog</a>

        <a
          class="link soft"
          v-for="link in softLinks"
          :key="link.name"
          :href="link.link"
        >{{ link.name }}</a>
        
        <!--<h1 class="be-justify-end be-align-center">Pages</h1>-->

        <!--<div class="post be-justify-end be-align-end container">
          <div class="meta col fluid container align-end go-down">
            <div class="title">post title example</div>
            <div class="snippet">blah blah blah</div>
          </div>
          <div class="arrow-container col-1 fluid container">
            <i class="arrow-right white"></i>
          </div>
        </div>-->
      </div>
      
      <div class="arrow-container" @click="scrollToBlog"></a>
        <i class="arrow-down white"></i>
      </div>
    </div>
    
    <div class="blog row container justify-around">
      <div class="post col-4 container">
        <img class="thumbnail col-12" src="../assets/pages/home/background.jpg" />
        <div class="meta col-12 container go-down">
          <h5>Title of the post</h5>
          <p>I am a real human and I do human things.</p>
        </div>
      </div>
      <div class="post col-4">post</div>
      <div class="post col-4">post</div>
    </div>

  </div>

</template>

<script>
  import pages from '@/pages'
  import mh    from '@/services/mathhelper'

  import SlideOverTextColor from '@/components/animators/SlideOverTextColor'

  import Logo from '@/components/misc/Logo'

  export default {
    name: 'Home',

    components: {
      'sotc': SlideOverTextColor,
      'logo': Logo
    },

    data () {
      return {
        pages,

        title: 'enabled javascript, dork',
        lastTitle: '',
        titles: [
          'ravine',
          'grotto',
          'cave',
          'cavern',
          'hovel',
          'shelter',
          'shack'
        ],

        softLinks: [
          {
            name: 'YouTube',
            link: 'https://www.youtube.com/thxbro79'
          },
          {
            name: 'Github',
            link: 'https://www.github.com/ConnerFrancis'
          }
        ]
      }
    },

    methods: {
      genTitle () {
        this.lastTitle = this.title
        while(this.title == this.lastTitle) {
          this.title = mh.sample(this.titles)
        }
      },
      
      scrollToBlog () {
        let height = window.innerHeight;
        window.scrollTo({
          'behavior': 'smooth',
          'left': 0,
          'top': height
        });
      }
    },

    created () {
      this.genTitle()
    }
  }

</script>

<style lang="scss" scoped>

  // EDIT
  $gradient-start: darken(#007ea7, 30%);
  $gradient-end: darken(#003249, 30%);
  $home-gradient-opacity: 0.9;
  $post-gradient-opacity: 0.2;

  #home {
    /* Colors */
    background-color: $grey-darkest;
    /* old, image and grad background */
    /*background-image: linear-gradient(45deg, change_color($gradient-start, $alpha: $home-gradient-opacity), change_color($gradient-end, $alpha: $home-gradient-opacity)),
                      url("../assets/pages/home/background.jpg");
    background-origin: border-box, border-box;
    background-repeat: no-repeat, no-repeat;
    background-position: bottom, bottom;
    background-size: cover, cover;*/

    .main {
      position: relative;
      color: $white;
      padding: 1rem 0 1rem 1rem;
      
      .arrow-container {
        position: absolute;
        cursor: pointer;
        bottom: 18px;
        left: calc(50% - 1.5rem);
        height: 1rem;
        min-width: 3rem;
        
        .arrow-down {
          position: absolute;
          bottom: 8px;
          opacity: 0.15;
          transition: opacity 0.3s ease-out;
        }
        
        &:hover .arrow-down {
          opacity: 1;
          transition: opacity 0.3s ease-out;
        }
      }

      .big-text {
        /* Font */
        font-size: 7em;
        font-weight: 600;
        text-align: left;
        line-height: 1;
      }

      .pages {
        position: relative;
        background-color: $white;
        color: $text;
        padding: 0 0.75rem 0.75rem 0;
        
        &::before { backbround-color: $grey-darkest }

        h1 {
          @include heavy-underline($color: $white);
          /* Size */
          margin: 0;
          padding: 0;
          line-height: 1;
        }

        .link {
          $line-spacing: 6px;
          cursor: pointer;
          position: relative;
          right: 0;
          /* Font */
          text-decoration: none;
          font-size: 1.5em;

          &::after {
            content: '';
            /* Position */
            position: absolute;
            bottom: 0.25ex;
            right: 0;
            margin-left: $line-spacing;
            /* Size */
            width: 0;
            height: 2px;
            /* Color */
            background-color: $text;

            transition: width 0.3s ease-in;
          }

          &:hover::after {
            width: 100%;

            transition: width 0.3s ease-out;
          }

          &.soft {
            color: $text-less;
            &::after { background-color: $text-less; }
          }
        }
      }
    }
    
    .blog {
      min-height: 100vh;
      padding: 1rem;
      
      .post {
        background-color: $grey-lightest;
        
        .meta {
          padding: 0.25rem;
          
          p {
            color: $text-fade;
          }
        }
      }
    }
  }

</style>
