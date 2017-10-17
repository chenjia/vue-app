export default [{
  name: 'dialog',
  path: '/dialog',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/dialog/Dialog.vue')), 'dialog')
  }
}]