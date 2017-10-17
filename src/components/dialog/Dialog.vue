<template>
  <div class="lxt-page">
    <mt-header title="弹窗" fixed>
      <mt-button @click="go('home')" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <div class="lxt-content has-header">
      <br/>
      <mt-button @click="popupAccordion = !popupAccordion" type="primary" size="large">手风琴</mt-button><br/>
      <mt-button @click="showAlert" type="primary" size="large">提示</mt-button><br/>
      <mt-button @click="showConfirm" type="primary" size="large">确认</mt-button><br/>
      <mt-button @click="popupZoom = !popupZoom" type="primary" size="large">缩放</mt-button><br/>
    </div>

    <mt-popup v-model="popupAccordion" position="top" style="width:100%;border-radius:4px;">
      <mt-header title="弹窗" fixed>
        <mt-button @click="popupAccordion = !popupAccordion" slot="left" icon="back">返回</mt-button>
      </mt-header>

      <div class="has-header" style="overflow-y:auto;" :style="{height:screenHeight-40+'px'}">
        <accordion :open="true">
          <div slot="title">
            <div><i class="fa fa-fw fa-user"></i> 基本信息</div>
          </div>
          <div slot="content" class="pd-md">
            <p>基本信息</p>
            <p>基本信息</p>
            <p>基本信息</p>
          </div>
        </accordion>
        <accordion :open="false">
          <div slot="title">
            <i class="fa fa-fw fa-phone"></i> 联系方式
          </div>
          <div slot="content" class="pd-md">
            <p>联系方式</p>
            <p>联系方式</p>
            <p>联系方式</p>
          </div>
        </accordion>
        <accordion :open="false">
          <div slot="title">
            <i class="fa fa-fw fa-cny"></i> 固定资产
          </div>
          <div slot="content" class="pd-md">
            <p>固定资产</p>
            <p>固定资产</p>
            <p>固定资产</p>
          </div>
        </accordion>
      </div>
    </mt-popup>

    <zoom title="放大缩小" :dialog="true" :show.sync="popupZoom">
      <mt-button @click="popupZoom = !popupZoom" type="primary" size="large">关闭</mt-button>
      <img style="width:100%;" src="../../../static/img/banner1.jpg">
    </zoom>
  </div>
</template>

<script>
import zoom from '../common/Zoom.vue'
import accordion from '../common/Accordion.vue'
import { MessageBox } from 'mint-ui'
export default {
  name: 'dialog',
  components:{
    accordion,
    zoom
  },
  data () {
    return {
      popupAccordion: false,
      popupAlert: false,
      popupZoom: false
    }
  },
  methods: {
    showAlert(){
      MessageBox.alert('操作成功！', '温馨提示').then(action => {
        console.log(action)
      });
    },
    showConfirm(){
      MessageBox.confirm('确定删除该记录吗?', '确认操作').then(action => {
        console.log(action)
      },action => {
        console.log(action)
      });
    }
  },
  mounted () {

  }
}
</script>