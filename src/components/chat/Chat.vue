<template>
  <div>
    <mt-header title="聊天">
      <mt-button @click="back" slot="left" icon="back">返回</mt-button>
      <mt-button @click="popupMenu = true" slot="right">
        <i class="fa fa-fw fa-plus"></i>
      </mt-button>
    </mt-header>

    <div class="chat-cell">
      <accordion :open="false" v-for="(group,index) in contacts" :key="index">
          <div slot="title">
            <div><i class="fa fa-fw fa-user"></i> {{group.name}}</div>
          </div>
          <div slot="content">
            <mt-cell @click.native="toDetails(item)" v-for="(item,index) in group.friends" :key="index" :title="item.memo" :label="'暂无最新消息'">
              <img class="chat-head" src="../../../static/img/head.jpg">
            </mt-cell>
          </div>
        </accordion>
    </div>

    <mt-popup v-model="popupConfig" position="left" class="popup-config">
      <mt-cell title="创建群聊">
        <i class="fa fa-fw fa-commenting-o" slot="icon"></i>
      </mt-cell>
    </mt-popup>

    <mt-popup v-model="popupMenu" class="popup-menu" :style="{left:screenWidth-80+'px'}">
      <mt-cell title="创建群聊">
        <i class="fa fa-fw fa-commenting-o" slot="icon"></i>
      </mt-cell>
      <mt-cell title="加好友/群">
        <i class="fa fa-fw fa-user-o" slot="icon"></i>
      </mt-cell>
      <mt-cell title="扫一扫">
        <i class="fa fa-fw fa-qrcode" slot="icon"></i>
      </mt-cell>
      <mt-cell title="面对面快传">
        <i class="fa fa-fw fa-retweet" slot="icon"></i>
      </mt-cell>
      <mt-cell title="付款">
        <i class="fa fa-fw fa-barcode" slot="icon"></i>
      </mt-cell>
      <mt-cell title="拍摄">
        <i class="fa fa-fw fa-camera" slot="icon"></i>
      </mt-cell>
    </mt-popup>

    <chatDetails :open.sync="popupDetails" :target="target"></chatDetails>

    <iframe style="display:none;" id="chatFrame" :src="server+'/chatFrame.html?userId='+user.userId"></iframe>
  </div>
</template>

<script>
import accordion from '../common/Accordion.vue'
import chatDetails from './ChatDetails.vue'
export default {
  name: 'chat',
  components:{
    accordion,
    chatDetails
  },
  data() {
    return {
      server: Config.server,
      user:utils.cache.get('user') || {userId:'admin'},
      popupMenu: false,
      popupConfig: false,
      popupDetails: false,
      contacts:[],
      target: {
        userId: 'chenjia',
        name:'陈佳',
        head:'../../../static/img/head.jpg'
      }
    }
  },
  methods: {
    getFriends(){
      this.contacts = [{
        name:'最近联系人',
        friends:[{
          name:'佳哥哥',
          memo:'佳哥哥',
          friendId:'chenjia'
        }]
      }]
      return;
      utils.http.post('/chat/friend').then(response => {
        this.contacts = response.data.body.data
        console.log(this.contacts)
      })
    },
    toDetails(item){
      this.popupDetails = true
      this.target = item
    }
  },
  mounted(){
    this.getFriends()
  }
}
</script>
<style type="text/css" scoped>
.popup-menu::before{
  width:0;
  height:0;
  display: inline-block;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #fff;
  content: ' ';
  position: absolute;
  top: -10px;
  right: 8px;
}
.popup-menu{
  top:195px;
  width:150px;
  border-radius:10px;
}
.popup-config{
  width:80%;
  height:100%;
}
.chat-head{
  width:36px;
  border-radius: 50%;
}
</style>