import {
  SET_THEME
} from './mutations'

const themeList = [
  'default',
  'dark',
  'soft'
]

const state = {
  theme: 'default'
}

const mutations = {
  
  // Set the theme
  [SET_THEME] (state, theme) {
    if(themeList.includes(theme)) {
      state.theme = theme
    } else if(!themeList.includes(theme)) {
      console.log('(theme/invalid_theme) Theme is not in the list of valid themes.')
      throw new Error({code: 'theme/invalid_theme', message: 'Theme is not in the list of valid themes.'})
    }
  }
  
}

const actions = {
  
  // Set the theme
  async setTheme (context, theme) {
    try {
      context.commit(SET_THEME, theme)
    } catch (e) {
      console.log(`(${e.code}) ${e.message}`)
      throw new Error(`(${e.code}) ${e.message}`)
    }
  }
  
}

const getters = {
  
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}