export default [{
  name: 'video',
  path: 'video',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/video/Video.vue')), 'video')
  }
},{
  name: 'publisher',
  path: 'publisher',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/video/Publisher.vue')), 'publisher')
  }
},{
  name: 'observer',
  path: 'observer',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/video/Observer.vue')), 'observer')
  }
}]