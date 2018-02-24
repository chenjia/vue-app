export default [{
  name: 'calendar',
  path: 'calendar',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/calendar/Calendar.vue')), 'calendar')
  }
}]