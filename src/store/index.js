import Vue from 'vue'

// Vuex
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

// Modules
import currentUser from './currentUser'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    currentUser
  },
  
  strict: debug, // use strict if in dev mode
  plugins: debug ? [createLogger()] : []
})

export default store
