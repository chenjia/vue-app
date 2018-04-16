import Login from '../components/login/Login.vue'

export default [{
  name: 'login',
  path: 'login',
  meta: {
    login: false,
    hasFooter: true,
    keepAlive:true
  },
  component:Login,
  beforeEnter(to, from, next){
    require.ensure([], () => {
      require(['../components/home/Home.vue'])
    }, 'login')
    next()
  }
}]