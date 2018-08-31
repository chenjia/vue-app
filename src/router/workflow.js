export default [{
  name: 'workflow',
  path: 'workflow',
  meta: {
    login: false,
    hasFooter: false
  },
  component(r) {
    require.ensure([], () => r(require('../components/workflow/Workflow.vue')), 'workflow')
  }
}]