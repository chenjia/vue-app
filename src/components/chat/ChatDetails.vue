<template>
  <mt-popup v-model="show" position="right" class="popup-details">
    <mt-header :title="target.name">
      <mt-button @click="change(false)" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <div class="chat-container pd-md" :style="{height:screenHeight-100+'px'}">
      <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" class="loadmore-arrow" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="fading-circle" color="#26a2ff" :size="20"></mt-spinner>
            <span style="position:relative;top:-4px;left:4px;color:#26a2ff;">加载中...</span>
          </span>
        </div>
        <div :id="item.recordId" v-for="(item,index) in records[target.userId]" class="chat-box" :class="{'chat-receive':user.userId==item.receiveId,'chat-send':user.userId==item.sendId}">
          <img class="chat-head" :src="heads[item.sendId]">
          <div class="chat-msg" v-html="item.content"></div>
        </div>
      </mt-loadmore>
    </div>
    <div class="chat-editor">
      <UEditor :target="target" :sendMessage="sendMessage"></UEditor>
      
      <!-- <div class="chat-editor-btn" style="transform:rotate(90deg);">
        <i class="fa fa-fw fa-wifi"></i>
      </div>
      <input @keyup.enter="send" v-model="msg" type="text" class="chat-editor-input" :style="{width:screenWidth-100+'px'}">
      <div class="chat-editor-btn">
        <i class="fa fa-fw fa-smile-o"></i>
      </div>
      <mt-button @click="send" v-show="msg != null && msg != ''" type="primary" size="small" style="margin:0 10px;">发送</mt-button>
      <div v-show="msg == null || msg == ''" class="chat-editor-btn" style="margin-right:10px;">
        <i class="fa fa-fw fa-plus"></i>
      </div> -->
    </div>
  </mt-popup>
</template>

<script>
import UEditor from '../common/UEditor'
export default {
  name: 'chatDetails',
  components:{
    UEditor
  },
  props:{
    open:{
      type: Boolean,
      default: true
    },
    target:{
      type: Object
    }
  },
  data() {
    return {
      now: new Date().getTime(),
      show: this.open,
      pageNumber:1,
      topStatus: '',
      msg: '',
      user:utils.cache.get('user')||{userId:'admin'},
      heads:{
        admin:require('../../../static/img/head.jpg'),
        chenjia:require('../../../static/img/head.jpg'),
        xiaoting:require('../../../static/img/head_bg.jpg')
      },
      targets:{},
      records:{}
    }
  },
  methods: {
    change(value){
      this.show = value
      this.$emit('update:open', value)
    },
    queryRecords(callback){
      utils.http.post('/push/record/list', {
        example: {
          sendId:this.user.userId,
          receiveId:this.target.userId,
          beforeDate: this.now
        },
        pageData: {
          pageNumber:this.pageNumber,
          pageSize: 10
        }
      }).then(response => {
        const data = response.data.body.data.data
        setTimeout(() => {
          this.pageNumber++
          let target = this.records[this.target.userId]
          if(target && target.length > 0){
            let recordId = this.records[this.target.userId][0].recordId
            this.records[this.target.userId] = data.reverse().concat(this.records[this.target.userId])
            this.records  = Object.assign({}, this.records)
            setTimeout(function(){
              document.querySelector('.chat-container').scrollTop = document.getElementById(recordId).offsetTop - 50
              callback()
            })
          }else{
            this.records[this.target.userId] = data.reverse()
            this.records  = Object.assign({}, this.records)
            setTimeout(function(){
              document.querySelector('.chat-container').scrollTop = 99999
            })
          }
        }, 500)
      }).catch(()=>{
        this.records = {}
      })
    },
    loadTop(){
      this.queryRecords(() => {
        this.$refs.loadmore.onTopLoaded()
      })
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    sendMessage(message){
      let frame = document.getElementById('chatFrame')
      frame.contentWindow.postMessage(message, '*')
      this.records[this.target.userId].push(message)
      this.records  = Object.assign({}, this.records)
      this.msg = ''
      setTimeout(function(){
        document.querySelector('.chat-container').scrollTop = 99999
      })
    },
    receiveMessage(message){
      if(this.records[message.sendId]){
        this.records[message.sendId].push(message)
        this.records  = Object.assign({}, this.records)
        setTimeout(function(){
          document.querySelector('.chat-container').scrollTop = 99999
        })
      }
    }
  },
  watch:{
    open(value){
      this.change(value)
    },
    target(value){
      this.queryRecords()
    }
  },
  mounted(){
    this.records[this.target.userId] = []
    window.addEventListener('message', event => {
      this.receiveMessage(event.data)
    })
  }
}
</script>
<style type="text/css">
.popup-details{
  width:100%;
  height:100%;
}
.chat-container{
  overflow-y:auto;
}
.chat-box{
  display:flex;
  margin-bottom:20px;
}
.chat-send{
  flex-direction: row-reverse;
}
.chat-head{
  width:36px;
  height:36px;
  border:1px solid #ccc;
  border-radius: 50%;
}
.chat-msg{
  position:relative;
  background:#eee;
  border:1px solid #ccc;
  border-radius: 4px;
  margin:0 0 0 20px;
  padding:10px;
  max-width: 60%;
  word-wrap:break-word;
}
.chat-msg p{
  margin:0;
}
.chat-send .chat-msg{
  border:1px solid #26a2ff;
  background:#e3f2fd;
  margin:0 20px 0 0;
}
.chat-send .chat-msg::before{
  width:10px;
  height:10px;
  z-index:1;
  display: inline-block;
  border-left: 1px solid #26a2ff;
  border-bottom: 1px solid #26a2ff;
  background:#e3f2fd;
  content: ' ';
  position: absolute;
  top: 10px;
  right: -6px;
  transform:rotate(-135deg);
}
.chat-receive .chat-msg::before{
  width:10px;
  height:10px;
  z-index:1;
  display: inline-block;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  background:#eee;
  content: ' ';
  position: absolute;
  top: 10px;
  left: -6px;
  transform:rotate(45deg);
}
.chat-editor{
  position:fixed;
  z-index:9;
  bottom:0;
  background:#eee;
  width:100%;
  height:40px;
}
.chat-editor .edui-default .edui-editor{
  border-radius: 0;
}
.chat-editor .edui-default .edui-editor-iframeholder{
   background: #f0f0f0;
}
.chat-editor-btn{
  display:inline-block;
  margin-left:10px;
  width:30px;
  height:30px;
  line-height:30px;
  text-align:center;
  color:#666;
  border:1px solid #ccc;
  border-radius:50%;
}
.chat-editor-input{
  padding:0 5px;
  background:none;
  border:none;
  height:30px;
  line-height:30px;
  border-bottom:1px solid #ccc;
  border-radius: 0;
  flex:1 1 100px;
}
#edui4_content{
  width:93vw!important;
  overflow-x:auto;
}
.edui-editor-toolbarbox{
    position: absolute!important;
    width: 30px!important;
    height: 30px!important;
    line-height: 30px;
    box-shadow: none!important;
    left: 6px;
    bottom: 6px;
    z-index: 99999;
}
.edui-editor-toolbarboxouter{
  box-shadow: none!important;
}
.edui-editor-toolbarboxinner,.edui-splitbutton-body,.edui-menubutton-body,.edui-bordereraser{
  background:#f0f0f0!important;
  border:none!important;
}
.edui-editor-iframeholder{
  padding-left:30px;
}
.rotate{
  transform:rotate(-180deg);
}
.loadmore-arrow{
  transition:all .3s ease-out;
  display:inline-block;
  font-size:24px;
  font-family: '微软雅黑';
  color:#26a2ff;
}
div[class^="mint-spinner-"]{
  display:inline-block;
}
</style>