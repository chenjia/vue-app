<template>
  <div class="lxt-page">
    <mt-header title="弹窗" fixed>
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <div class="lxt-content has-header">
      <br/>
      <mt-button @click="popupAccordion = !popupAccordion" type="primary" size="large">手风琴</mt-button><br/>
      <mt-button @click="showAlert" type="primary" size="large">提示</mt-button><br/>
      <mt-button @click="showConfirm" type="primary" size="large">确认</mt-button><br/>
      <mt-button @click="popupZoom = !popupZoom" type="primary" size="large">缩放</mt-button><br/>
      <mt-button @click="showPopup('Top', true)" type="primary" size="large">顶部提示</mt-button><br/>
      <mt-button @click="showPopup('Center')" type="primary" size="large">中部弹窗</mt-button><br/>
      <mt-button @click="showPopup('Bottom')" type="primary" size="large">底部弹窗</mt-button><br/>
      <mt-button @click="sheetVisible = true" type="primary" size="large">actionSheet</mt-button><br/>
      

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

    <mt-popup v-model="popupTop" position="top" :modal="false" style="width:100%;height:50px;line-height:50px;color:#fff;text-align:center;background:rgba(0,0,0,0.5)">
      <i class="fa fa-fw fa-check"></i> 版本更新成功
    </mt-popup>

    <mt-popup v-model="popupCenter" class="popup-center pd-md" style="width:80%;border-radius:6px;">
      <p>中部弹窗</p>
      <p>中部弹窗</p>
      <p>中部弹窗</p>
    </mt-popup>

    <mt-popup v-model="popupBottom" position="bottom" style="width:100%;">
      <mt-header title="已选美食" style="background:#fafafa;color:#26a2ff;border-top:1px solid #ddd;">
        <mt-button @click="popupBottom = !popupBottom" slot="right"><i class="fa fa-fw fa-times"></i></mt-button>
      </mt-header>

      <div>
        <mt-cell title="明炉烧鸭饭" value="x1"></mt-cell>
        <mt-cell title="米饭" value="x1"></mt-cell>
        <mt-cell title="打包盒" value="x2"></mt-cell>
      </div>
    </mt-popup>

    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>

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
      popupZoom: false,
      popupTop: false,
      popupCenter: false,
      popupBottom: false,
      sheetVisible: false,
      actions:[{
        name:'从文件导入'
      },{
        name:'打开照相机'
      }]
    }
  },
  methods: {
    showAlert(){
      MessageBox.alert('操作成功！', '温馨提示').then(action => {
        console.log(action)
      })
    },
    showConfirm(){
      MessageBox.confirm('确定删除该记录吗?', '确认操作').then(action => {
        console.log(action)
      },action => {
        console.log(action)
      })
    },
    showPopup(position, autoClose){
      
      this['popup'+position] = true

      if(autoClose){
        setTimeout(()=>{
          this['popup'+position] = false
        }, 3000)
      }
    }
  },
  watch:{
    popupBottom(val){
      if(val){
        utils.ui.modal.afterOpen()
      }else{
        utils.ui.modal.beforeClose()
      }
    }
  },
  mounted () {

  }
}
</script>
<style>
.popup-center::before{
  width:0;
  height:0;
  display: inline-block;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
  content: ' ';
  position: absolute;
  top: -10px;
  right: 50px;
}
</style>