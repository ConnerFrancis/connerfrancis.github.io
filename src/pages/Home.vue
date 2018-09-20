<template>

  <div id="home">
    <div class="left">
      <div class="links">
        <p>find me</p>
        <a
          v-for="link in softLinks"
          :key="link.name"
          :href="link.url"
          >{{ link.name }}</a>
      </div>

      <div class="pfp"><img src="../assets/global/me.jpg" /></div>
    </div>

    <div class="right">
      <div class="video">
        <h1 class="label">latest video</h1>
        <div class="image"></div>
        <div class="meta"></div>
      </div>
    </div>
  </div>

</template>

<!-- ### -->

<script>

  import pages from '@/pages'

  export default {
    name: 'Home',

    data () {
      return {
        // Pages on the site
        hardLinks: pages,

        // External pages
        softLinks: [
          {
            name: 'youtube',
            url: 'https://www.youtube.com/thxbro79'
          },
          {
            name: 'github',
            url: 'https://www.github.com/ConnerFrancis'
          }
        ]
      }
    }
  }

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

        a, p {
          // Size
          margin-bottom: 8px;
          width: auto;
          // Font
          color: $brand-light;
        }

        a {
          // Misc
          cursor: pointer;
          transition: opacity 0.05s ease;
          // Font
          text-decoration: none;

          &:hover { opacity: 0.5; transition: opacity 0.05s ease; }
        }

        p {
          opacity: 0.5;
          cursor: default;
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

      .video {

        .label {
          text-align: right;
          opacity: 0.5;
        }

        .image {
          background-color: #ededed;
          height: 480px;
        }

      }
    }
  }

</style>
