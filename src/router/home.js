export default [{
  name: 'home',
  path: 'home',
  meta: {
    login: false,
    hasFooter: false,
    hasTabs: true,
    keepAlive:true
  },
  component(r) {
    require.ensure([], () => r(require('../components/home/Home.vue')), 'home')
    // require(['../components/calendar/Calendar.vue'])
    // require(['../components/chart/Chart.vue'])
    // require(['../components/chat/Chat.vue'])
    // require(['../components/contact/Contact.vue'])
    // require(['../components/dialog/Dialog.vue'])
    // require(['../components/form/Form.vue'])
    // require(['../components/list/List.vue'])
    // require(['../components/loading/Loading.vue'])
    // require(['../components/lock/Lock.vue'])
    // require(['../components/map/Map.vue'])
    // require(['../components/tab/Tab.vue'])
    // require(['../components/setting/Setting.vue'])
  }
}]