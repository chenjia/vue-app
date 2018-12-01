export default [{
  name: 'login',
  path: 'login',
  meta: {
    login: false,
    hasFooter: true,
    keepAlive:true
  },
  component(r){
    require.ensure([], () => r(require('../components/login/Login.vue')), 'login')
    setTimeout(()=>{
      require(['../components/home/Home.vue'])
    }, Config.preload)
  }
}]