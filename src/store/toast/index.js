import {
  ADD_TOAST,
  NEW_TOAST,
  DEPRECATE_TOAST
} from './mutations'

const state = {
  // Holds all notifications
  list: []
}

const mutations = {
  
  // Add a new notification
  [ADD_TOAST] (state, payload) {
    // If the list is blank, id = 1
    // If the list is not blank, id = last elements id + 1
    const id = (state.list.length == 0) ? 0 : state.list[state.list.length - 1].id + 1
    
    // Add a toast
    state.list.push({
      id,
      type: payload.type,
      message: payload.message,
      deprecated: false
    })
  },
  
  // Make a toast deprecated
  [DEPRECATE_TOAST] (state, id) {
    state.list = state.list.map(e => {
      return {
        ...e,
        deprecated: (e.id == id || e.deprecated == true) ? true : false
      }
    })
  }
  
}

const actions = {
  
  // Dispatch to add a new toast
  // @payload = {type, message}
  async addToast (context, payload) {
    try {
      context.commit(ADD_TOAST, payload)
    } catch (e) {
      console.log('(' + e.code + ') ' + e.message)
      throw new Error('(' + e.code + ') ' + e.message)
    }
  },
  
  // Dispatch to deprecate a toast
  // @id = number of toast id
  async deprecateToast (context, id) {
    try {
      context.commit(DEPRECATE_TOAST, id)
    } catch (e) {
      console.log('(' + e.code + ') ' + e.message)
      throw new Error('(' + e.code + ') ' + e.message)
    }
  }
  
}

const getters = {
  
  count: state => {
    return state.list.length
  },
  
  latestToast: state => {
    return state.list[state.list.length - 1]
  },
  
  // List of non-deprecated toasts
  currentList: state => {
    return state.list.filter(e => !e.deprecated)
  },
  
  // List of deprecated toasts
  deprecatedList: state => {
    return state.list.filter(e => e.deprecated)
  }
  
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}