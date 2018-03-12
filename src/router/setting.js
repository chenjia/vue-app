export default [{
  name: 'about',
  path: 'about',
  meta: {
    login: false,
    hasFooter: true
  },
  component(r) {
    require.ensure([], () => {r(require('../components/setting/About.vue'))}, 'about')
  }
},{
  name: 'setting',
  path: 'setting',
  meta: {
    login: false,
    hasFooter: true
  },
  component(r) {
    require.ensure([], () => {r(require('../components/setting/Setting.vue'))}, 'setting')
    require(['../components/setting/About.vue'])
  }
}]