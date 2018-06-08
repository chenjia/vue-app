export default [{
  name: 'upload',
  path: 'upload',
  meta: {
    login: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/upload/Upload.vue')), 'upload')
  }
}]