export default [{
  name: 'contact',
  path: 'contact',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/contact/Contact.vue')), 'contact')
  }
}]