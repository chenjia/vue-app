export default [{
  name: 'demo',
  path: 'demo',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/demo/Demo.vue')), 'demo')
  }
}]