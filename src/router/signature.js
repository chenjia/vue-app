export default [{
  name: 'signature',
  path: 'signature',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/signature/Signature.vue')), 'signature')
  }
}]