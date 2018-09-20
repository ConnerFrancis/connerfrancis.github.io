<!--

Welcome to an ugly, outdated remnant
of what this site used to be :]

-->

<template>

  <div id="home" class="fluid justify-end">

    <!-- Main div that is full screen height -->
    <div class="main col-12 screen-height container">

      <!-- Left side -->
      <div class="left col fluid container">

        <!-- Latest post and project -->
        <div class="heading col-12 container align-end justify-start">

          <div class="project-latest col-6 container fluid go-down justify-between">
            <p class="text-less">Latest project</p>
            <div>
              <p class="container">Personal website<i class="arrow-right color-normal be-align-center"></i></p>
              <p class="text-fade">A personal website you're viewing right now.</p>
            </div>
          </div>

          <div class="post-latest col-6 container fluid go-down justify-between">
            <p class="text-white-less">Latest post</p>
            <div>
              <p class="text-white container">This is just a mock up website.<i class="arrow-right color-white be-align-center"></i></p>
              <p class="text-white-fade">It's just a design experiment for a home page.</p>
            </div>
          </div>

        </div>

        <!-- Large accent text and background image -->
        <div class="big-text col-12 fluid container go-down justify-end">
          <img src="../assets/svg/logo.svg" />
          <!--Conner's<br/>website<br/>conglomerate-->
          <!--<span>Conner's</span>
          <span>website</span>
          <span>conglomerate</span>-->
        </div>

      </div>

      <!-- Right side -->
      <div class="pages col fluid col-xs-12 col-sm-12 container justify-end align-end">

        <app-header class="col-12 be-align-start"></app-header>

        <!-- Logo positioning -->
        <h3 class="text col-12 container">Conner's<br/>website<br/>conglomerate</h3>

        <!-- Website links and lesser external links -->
        <div class="link-container col-12 container go-down">
          <!--<p class="text-underline">Pages</p>-->

          <a
            class="link soft"
            v-for="link in softLinks"
            :key="link.name"
            :href="link.link"
          >{{ link.name }}</a>

          <a class="link bold" @click="scrollToBlog">Blog</a>

          <router-link
            class="link bold"
            v-for="page in pages"
            v-show="((page.name != 'Home') && (page.name != 'HomeOld') && (page.meta.hidden != true))"
            :key="page.name"
            :to="page.path"
          >{{ page.meta.name }}</router-link>
        </div>

        <!-- Old arrow-container thing
        <div class="arrow-container container justify-center align-center" @click="scrollToBlog"></a>
          <i class="arrow-down"></i>
        </div>-->
      </div>
    </div>

    <!-- old blog layout
    <div class="blog col-12 container justify-around">
      <div class="post col-4 col-xs-12 col-sm-12   container">
        <img class="thumbnail col-12" src="../assets/pages/home/background.jpg" />
        <div class="meta col-12 container go-down">
          <h5>Title of the post</h5>
          <p>I am a real human and I do human things.</p>
        </div>
      </div>
      <div class="post col-4 container">
        <img class="thumbnail col-12" src="../assets/pages/home/background.jpg" />
        <div class="meta col-12 container go-down">
          <h5>Title of the post</h5>
          <p>I am a real human and I do human things.</p>
        </div>
      </div>
      <div class="post col-4 container">
        <img class="thumbnail col-12" src="../assets/pages/home/background.jpg" />
        <div class="meta col-12 container go-down">
          <h5>Title of the post</h5>
          <p>I am a real human and I do human things.</p>
        </div>
      </div>
    </div>-->

  </div>

</template>

<script>
  import pages from '@/pages'
  import mh    from '@/services/mathhelper'

  // Deleted resource
  // import SlideOverTextColor from '@/components/animators/SlideOverTextColor'

  // Deleted resource
  // import AppHeader from '@/components/AppHeader'

  export default {
    name: 'Home',

    /*components: {
      'sotc': SlideOverTextColor,
      'app-header': AppHeader
    },*/

    data () {
      return {
        pages,

        title: 'title generation broke',
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
      document.title = 'conner\'s ' + this.title
    }
  }

</script>

<!--<style lang="scss" scoped>

  // EDIT
  $gradient-start: /*darken(#007ea7, 30%)*/$black;
  $gradient-end: /*darken(#003249, 30%)*/$black;
  $home-gradient-opacity: 0.7;
  $post-gradient-opacity: 0.2;

  // DO NOT EDIT
  @mixin art-background {
    background-image: linear-gradient(45deg, change_color($gradient-start, $alpha: $home-gradient-opacity), change_color($gradient-end, $alpha: $home-gradient-opacity)),
                      url("../assets/pages/home/background.svg");
    background-origin: border-box, border-box;
    background-repeat: no-repeat, no-repeat;
    background-position: bottom, top;
    background-size: cover, cover;
  }

  #home {
    /* Colors */
    background-color: $white;

    .main {
      position: relative;
      color: $white;
      padding: 0 0 0 0;
      @include art-background;

      .left {

        .heading {
          height: 2.25rem;
          padding: 0;
          margin: 0;
          cursor: pointer;

          .project-latest, .post-latest {
            padding: 0.25rem 0 0.5rem 0.5rem;

            .arrow-right {
              margin-left: 0.1rem;
              transition: margin-left 0.5s ease;
            }
            
            &:hover .arrow-right {
              margin-left: 0.2rem;
              transition: margin-left 0.5s ease;
            }
          }

          .project-latest {
            background-color: $white;
            color: $text;
          }
          .post-latest {
            background-color: $grey-dark;
            color: $text-white;
          }
        }

        .big-text {
          /* Size */
          height: calc(100% - 2.25rem);
          padding: 0.5rem;
          /* Font */
          font-size: 6em;
          color: $text-white;
          font-weight: 600;
          /* Colors */
          //@include art-background;

          img {
            max-height: 2rem;
          }

          span {
            display: inline-block;
            line-height: 1em;
            height: 1em;
          }
        }
      }

      .pages {
        position: relative;
        background-color: $grey-darkest;
        color: $text-white;
        padding: 0 0 1rem 0.5rem;
        width: 3rem; // MASSIVE OVERRIDE INBOUND
        
        .text {
          color: $text-white;
          font-weight: 600;
        }

        .link-container {

          .link {
            cursor: pointer;
            position: relative;
            right: 0;
            /* Font */
            text-decoration: none;
            font-size: 1em;

            &::before {
              content: '';
              /* Position */
              position: absolute;
              top: calc(50% - 2px);
              right: calc(100% + 0.1rem);
              /* Size */
              width: 0;
              height: 2px;
              /* Color */
              background-color: $text-white;

              transition: width 0.3s ease;
            }

            &:hover::before {
              width: 0.3rem;

              transition: width 0.3s ease;
            }

            &.soft {
              color: $text-white-less;
              &::before { background-color: $text-white-less; }
            }
          }
        }

        .arrow-container {
          cursor: pointer;
          height: 2rem;
          width: 100%;

          .arrow-down {
            opacity: 0.15;
            transition: opacity 0.3s ease-out;
          }

          &:hover .arrow-down {
            opacity: 1;
            transition: opacity 0.3s ease-out;
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

</style>-->
