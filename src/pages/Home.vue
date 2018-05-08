<template>

  <div id="home" class="fluid justify-end">

    <div class="main jumbotron container justify-between">

      <div class="logo col-8 fluid be-align-end container align-center">
        <logo></logo>
      </div>

      <div class="pages col-4 col-xs-12 col-sm-12 fluid container go-down align-end">
        <h1>pages</h1>

        <router-link
          class="link bold"
          v-for="page in pages"
          v-show="((page.name != 'Home') && (page.name != 'HomeOld') && (page.meta.hidden != true))"
          :key="page.name"
          :to="page.path"
        >{{ page.meta.name }}</router-link>

        <a
          class="link soft"
          v-for="link in softLinks"
          :key="link.name"
          :href="link.link"
        >{{ link.name }}</a>

        <div class="post be-justify-end be-align-end container">
          <div class="meta col fluid container align-end go-down">
            <div class="title">post title example</div>
            <div class="snippet">blah blah blah</div>
          </div>
          <div class="arrow-container col-1 fluid container">
            <i class="arrow-right white"></i>
          </div>
        </div>
      </div>
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
    padding: 0.75rem;
    color: $white;
    background-image: linear-gradient(45deg, change_color($gradient-start, $alpha: $home-gradient-opacity), change_color($gradient-end, $alpha: $home-gradient-opacity)),
                      url("../assets/pages/home/background.jpg");
    background-origin: border-box, border-box;
    background-repeat: no-repeat, no-repeat;
    background-position: bottom, bottom;
    background-size: cover, cover;
    text-transform: lowercase;

    .main {

      .logo {
        overflow: hidden;

        svg {
          /* Position */
          position: relative;
        }
      }

      .pages {
        position: relative;

        h1 {
          @include heavy-underline($color: $white);
          /* Font */
          font-size: 4em;
          font-family: $font-main;
          letter-spacing: 0.08em;
          /* Size */
          margin: 0;
          padding: 0;
        }

        .link {
          $line-width: 32px;
          $line-spacing: 6px;
          position: relative;
          right: 0;
          /* Font */
          text-decoration: none;
          font-size: 1.5em;

          transition: right 0.3s ease;

          &:hover {
            right: $line-width + $line-spacing;

            transition: right 0.3s ease;
          }

          &::after {
            content: '';
            /* Position */
            position: absolute;
            top: 50%;
            margin-left: $line-spacing;
            /* Size */
            width: 0;
            height: 2px;
            /* Color */
            background-color: $white;

            transition: width 0.3s ease;
          }

          &:hover::after {
            width: $line-width;

            transition: width 0.3s ease;
          }

          &.bold {
            opacity: 1;
          }
          &.soft {
            opacity: 0.15;
          }
        }

        .post {
          /* Size */
          padding: 0.5rem;
          width: 100%;
          height: 1.5rem;
          margin-top: auto;
          /* Background */
          background: linear-gradient(45deg, change_color($gradient-start, $alpha: $post-gradient-opacity), change_color($gradient-end, $alpha: $post-gradient-opacity));
          /* Misc */
          cursor: pointer;

          .meta {
            padding: 0 0.5rem 0 0;

            .snippet {
              opacity: 0.25;
            }
          }

          .arrow-container {

            .arrow-right {
              transition: width 0.5s ease;
              margin-bottom: 10px;
            }
          }

          &:hover .arrow-container .arrow-right {
            transition: width 0.5s ease;
            width: 28px;
          }
        }
      }
    }
  }

</style>
