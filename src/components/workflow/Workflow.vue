<template>
  <div>
    <mt-header title="流程设计">
      <mt-button @click="back" slot="left" icon="back"><span>返回</span></mt-button>
    </mt-header>

    <iframe style="width:100%;height:500px;" src="./static/lib/mxgraph/examples/editors/workfloweditor.html"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Workflow',
  data () {
    return {
      
    }
  },
  mounted(){
    
  }
}
</script>