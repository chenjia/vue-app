export default [{
  name: 'chat',
  path: 'chat',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/chat/Chat.vue')), 'chat')
  }
}]