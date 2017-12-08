export default [{
  name: 'map',
  path: 'map',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/map/Map.vue')), 'map')
  }
}]