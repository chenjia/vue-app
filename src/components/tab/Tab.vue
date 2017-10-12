<template>
  <div>
    <mt-header title="表单">
      <mt-button @click="go('home')" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <tab :tabs="tabs" :tabIndex.sync="tabIndex" style="position:relative;top:1px;z-index:999;"></tab>
    <mt-tab-container v-model="tabIndex" :swipeable="true">
      <mt-tab-container-item :id="0">
        <div style="text-align:center;color:green;" :style="{'line-height':screenHeight-50+'px'}">
          <i class="fa fa-chrome" style="font-size:100px;"></i>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item :id="1">
        <div style="text-align:center;color:green;" :style="{'line-height':screenHeight-50+'px'}">
          <i class="fa fa-firefox" style="font-size:100px;"></i>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item :id="2">
        <div style="text-align:center;color:green;" :style="{'line-height':screenHeight-50+'px'}">
          <i class="fa fa-edge" style="font-size:100px;"></i>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item :id="3">
        <div style="text-align:center;color:green;" :style="{'line-height':screenHeight-50+'px'}">
          <i class="fa fa-safari" style="font-size:100px;"></i>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import tab from '@/components/common/Tab'
export default {
  name: 'tabs',
  components:{
    tab:tab
  },
  data () {
    return {
      tabs:['谷歌','火狐','微软','苹果'],
      tabIndex:0
    }
  },
  mounted(){
    
  }
}
</script>