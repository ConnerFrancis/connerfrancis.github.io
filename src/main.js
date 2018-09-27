// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Polyfills
import 'es6-promise/auto' // polyfill for Promises

// Vuex and DB
import store from './store'
import './auth'

Vue.config.productionTip = false

// init Vue
/* eslint-disable no-new */

new Vue({
  el: '#app',
  store, // link Vuex store
  router,
  components: { App },
  template: '<App/>'
})
