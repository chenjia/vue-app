export default [{
  name: 'browser',
  path: 'browser',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/browser/Browser.vue')), 'browser')
  }
}]