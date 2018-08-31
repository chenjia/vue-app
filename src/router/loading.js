export default [{
  name: 'loading',
  path: 'loading',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/loading/Loading.vue')), 'loading')
  }
}]