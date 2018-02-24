export default [{
  name: 'video',
  path: 'video',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/video/Video.vue')), 'video')
  }
}]