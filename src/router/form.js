export default [{
  name: 'form',
  path: 'form',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/form/Form.vue')), 'form')
  }
}]