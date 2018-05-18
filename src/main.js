// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/firebase'
import VueFire from 'vuefire'
import Vue from 'vue'
import App from './App'
import router from './router'

// init Firebase with Vue
Vue.use(VueFire)

Vue.config.productionTip = false

// init Vue
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
