export default [{
  name: 'chart',
  path: 'chart',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/chart/Chart.vue')), 'chart')
  }
}]