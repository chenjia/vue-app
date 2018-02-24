export default [{
  name: 'tab',
  path: 'tab',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/tab/Tab.vue')), 'tab')
  }
}]