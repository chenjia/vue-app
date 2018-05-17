import utils from '../../utils'

const typeArrays = [
  'LOGIN',
  'LOGOUT',
  'TOGGLE_HEADER',
  'TOGGLE_FOOTER',
  'TOGGLE_TABS',
  'TOGGLE_LOADING',
  'TOGGLE_POPUP',
  'TOGGLE_PROGRESS',
  'TOGGLE_UPDATING'
]

const types = {}

for (let type of typeArrays) {
  types[type] = type
}

const state = {
  app: {
    version: '',
    progress: 0,
    updatingText: ''
  },
  ui: {
    hasHeader: false,
    hasFooter: true,
    fixFooter: true,
    hasTabs: false,
    tab: 'home',
    loading: false,
    popupTop: false,
    popupText: '',
    popupDuration: null
  },
  user: utils.cache.get('user'),
  userSetting: utils.cache.get('userSetting')
}

const getters = {
  hasHeader() {
    return state.ui.hasHeader
  },
  hasFooter() {
    return state.ui.hasFooter
  },
  fixFooter() {
    return state.ui.fixFooter
  },
  hasTabs() {
    return state.ui.hasTabs
  },
  isLoading() {
    return state.ui.loading
  },
  getVersion() {
    return state.app.version
  }
}

const actions = {
  // toggleTab({
  //   commit,
  //   state
  // }, show) {
  //   commit(types.TOGGLE_TAB, show)
  // }
}

const mutations = {
  [types.LOGIN](state, data) {
    utils.cache.set('user', data.user)
    utils.cache.set('userSetting', data.userSetting)
    state.user = data.user
    state.userSetting = data.userSetting
  },
  [types.LOGOUT](state) {
    utils.cache.clear()
    state.user = null
    state.userSetting = null
  },
  [types.TOGGLE_HEADER](state, flag) {
    state.ui.hasHeader = flag
  },
  [types.TOGGLE_FOOTER](state, flag) {
    state.ui.hasFooter = flag
  },
  [types.TOGGLE_TABS](state, params) {
    state.ui.hasTabs = params.flag
    state.ui.tab = params.tab
  },
  [types.TOGGLE_LOADING](state, flag) {
    state.ui.loading = flag
  },
  [types.TOGGLE_PROGRESS](state, progress) {
    state.app.progress = progress
  },
  [types.TOGGLE_POPUP](state, params) {
    state.ui.popupTop = params.visible
    state.ui.popupText = params.text
    if(params.duration){
      setTimeout(() => {
        state.ui.popupTop = false
        state.ui.popupText = ''
        state.ui.popupDuration = null
      }, params.duration)
    }
  },
  [types.TOGGLE_UPDATING](state, text) {
    state.app.updatingText = text
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}