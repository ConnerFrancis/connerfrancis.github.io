import Vue from 'vue'
import Router from 'vue-router'

import pages from '@/pages'

Vue.use(Router)

const router = new Router({
  routes: [
    // Misc. routes go here,
    // otherwise use pages/index.js
  ].concat(pages)
})

router.afterEach((to, from) => {
  // Set the title of the site
  if(to.meta.title) document.title = to.meta.title 
  else document.title = 'conr.xyz'
})

export default router;