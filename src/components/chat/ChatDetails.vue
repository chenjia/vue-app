<template>
  <mt-popup v-model="show" position="right" class="popup-details">
    <mt-header :title="target.name">
      <mt-button @click="change(false)" slot="left" icon="back">返回</mt-button>
    </mt-header>

    <div class="chat-container pd-md" :style="{height:screenHeight-100+'px'}">
      <div v-for="(item,index) in records[target.friendId]" class="chat-box" :class="{'chat-receive':user.userId==item.receiveId,'chat-send':user.userId==item.sendId}">
        <img class="chat-head" :src="heads[item.sendId]">
        <div class="chat-msg">
          {{item.content}}
        </div>
      </div>
    </div>
    <div class="chat-editor">
      <div class="chat-editor-btn" style="transform:rotate(90deg);">
        <i class="fa fa-fw fa-wifi"></i>
      </div>
      <input @keyup.enter="send" v-model="msg" type="text" class="chat-editor-input" :style="{width:screenWidth-130+'px'}">
      <div class="chat-editor-btn">
        <i class="fa fa-fw fa-smile-o"></i>
      </div>
      <mt-button @click="send" v-show="msg != null && msg != ''" type="primary" size="small">发送</mt-button>
      <div v-show="msg == null || msg == ''" class="chat-editor-btn">
        <i class="fa fa-fw fa-plus"></i>
      </div>
    </div>
  </mt-popup>
</template>

<script>
export default {
  name: 'chatDetails',
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
      msg: '',
      user:utils.cache.get('user'),
      heads:{
        admin:'../../../static/img/head.jpg',
        chenjia:'../../../static/img/head.jpg',
        xiaoting:'../../../static/img/head_bg.jpg'
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
    queryRecords(){
      utils.http.post('/chat/record', {
        sendId:this.user.userId,
        receiveId:this.target.friendId,
        beforeDate: this.now,
        count:10
      }).then(response => {
        this.records[this.target.friendId] = response.data.body.data
        console.log(this.records[this.target.friendId])
      })
    },
    send(){
      let message = {
        msgType:0,
        sendId:this.user.userId,
        sendUser:this.user.realname,
        receiveId:this.target.friendId,
        receiveUser:this.target.memo,
        content:this.msg
      };
      let frame = document.getElementById('chatFrame')
      frame.contentWindow.postMessage(message, '*')
      this.records[this.target.friendId].push(message);
      this.msg = ''
      setTimeout(function(){
        document.querySelector('.chat-container').scrollTop = 99999
      },100);
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
    
  }
}
</script>
<style type="text/css" scoped>
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
  margin:0 24px;
  padding:10px;
  max-width: 70%;
}
.chat-send .chat-msg{
  border:1px solid #26a2ff;
  background:#e3f2fd;
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
  align-items:center;
  bottom:0;
  background:#eee;
  display:flex;
  justify-content: space-around;
  width:100%;
  height:50px;
  line-height:50px;
}
.chat-editor-btn{
  display:inline-block;
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
  flex:0 1 100px;
}
</style>