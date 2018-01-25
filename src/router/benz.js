export default [{
  name: 'benz',
  path: 'benz',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/benz/Benz.vue')), 'benz')
  },
  children:[{
    name: 'benzLogin',
    path: 'login',
    meta: {
      login: false,
      hasHeader: false,
      hasFooter: false
    },
    component(r) {
      require.ensure([], () => r(require('../components/benz/Login.vue')), 'login')
    }
  },{
    name: 'benzHome',
    path: 'home',
    meta: {
      login: false,
      hasHeader: true,
      hasFooter: false
    },
    component(r) {
      require.ensure([], () => r(require('../components/benz/Home.vue')), 'home')
    }
  }]
}]