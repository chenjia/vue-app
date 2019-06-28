export default [{
  name: 'splash',
  path: 'splash',
  meta: {
    login: false,
    hasHeader: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/splash/Splash.vue')), 'splash')
  }
}]