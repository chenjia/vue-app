export default [{
  name: 'list',
  path: 'list',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/list/List.vue')), 'list')
  }
}]