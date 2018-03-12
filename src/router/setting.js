export default [{
  name: 'setting',
  path: 'setting',
  meta: {
    login: false,
    hasFooter: true
  },
  component(r) {
    require.ensure([], () => {r(require('../components/setting/Setting.vue'))}, 'setting')
    setTimeout(()=>{
      require(['../components/setting/About.vue'])
    },500)
  }
},{
  name: 'about',
  path: 'about',
  meta: {
    login: false,
    hasFooter: true
  },
  component(r) {
    require.ensure([], () => {
      r(require('../components/setting/About.vue'))
    }, 'about')
  }
}]