export default [{
  name: 'zoom',
  path: 'zoom',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/zoom/Zoom.vue')), 'zoom')
  }
}]