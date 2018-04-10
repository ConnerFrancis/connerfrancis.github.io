import Vue from 'vue'
import Router from 'vue-router'

import pages from '@/pages'

// Test
import Hello from '@/components/Hello'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/hello', component: Hello }
  ].concat(pages)
})

router.afterEach((to, from) => {
  // Set the title of the site
  if(to.meta.title) document.title = to.meta.title 
  else document.title = 'conr.xyz'
})

export default router;