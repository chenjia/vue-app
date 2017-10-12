export default [{
  name: 'lock',
  path: '/lock',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/lock/Lock.vue')), 'lock')
  }
}]