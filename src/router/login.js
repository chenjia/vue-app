export default [{
  name: 'login',
  path: 'login',
  meta: {
    login: false,
    hasFooter: true
  },
  component(r) {
    require.ensure([], () => {
      r(require('../components/login/Login.vue'))
      require(['../components/home/Home.vue'])
    }, 'login')
  }
}]