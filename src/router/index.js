import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'

import pages from '@/pages'

Vue.use(Router)

const router = new Router({
  routes: [
    // Misc. routes go here,
    // otherwise use pages/index.js
  ].concat(pages)
})

router.beforeEach((to, from, next) => {
  // Set the theme
  if(to.meta.hasOwnProperty('theme')) {
    store.dispatch('theme/setTheme', to.meta.theme)
  } else {
    store.dispatch('theme/setTheme', 'default').catch(e => {
      store.dispatch('toast/addToast', `(${e.code}) ${e.message}`)
    })
  }
  
  next()
})

router.afterEach((to, from) => {
  // Set the title of the site
  if(to.meta.title) document.title = to.meta.title 
  else document.title = 'conr.xyz'
})

export default router;