export default [{
  name: 'setting',
  path: 'setting',
  meta: {
    login: false,
    hasFooter: true
  },
  component(r) {
    require.ensure([], () => {
      r(require('../components/setting/Setting.vue'))
    }, 'setting')
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