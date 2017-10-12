import utils from '../../utils'

const typeArrays = [
  'SET_TITLE',
  'TOGGLE_HEADER',
  'TOGGLE_FOOTER',
  'TOGGLE_TABS',
  'TOGGLE_LOADING'
]

const types = {}

for (let type of typeArrays) {
  types[type] = type
}

const state = {
  ui: {
    title: 'lxt-vue',
    hasHeader: false,
    hasFooter: true,
    fixFooter: true,
    hasTabs: false,
    loading: false
  },
  user: {}
}

const getters = {
  title() {
    return state.ui.title
  },
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
  [types.SET_TITLE](state, title) {
    state.ui.title = title
  },
  [types.TOGGLE_HEADER](state, flag) {
    state.ui.hasHeader = flag
  },
  [types.TOGGLE_FOOTER](state, flag) {
    state.ui.hasFooter = flag
  },
  [types.TOGGLE_TABS](state, flag) {
    state.ui.hasTabs = flag
  },
  [types.TOGGLE_LOADING](state, flag) {
    state.ui.loading = flag
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}