<template>
  <div style="width:99.8%;">
    <div :id="'editor'+target.userId"></div>
    <RemoteScript src="static/lib/ueditor/ueditor.config.js" @callback="callbackIndex=callbackIndex+1"></RemoteScript>
    <RemoteScript v-if="callbackIndex>0" src="static/lib/ueditor/ueditor.all.min.js" @callback="callbackIndex=callbackIndex+1"></RemoteScript>
    <RemoteScript v-if="callbackIndex>1" src="static/lib/ueditor/lang/zh-cn/zh-cn.js" @callback="initEditor()"></RemoteScript>
    <mt-button @click="send" size="small" style="position:absolute;z-index:99999;right:3px;bottom:3px;width:50px;padding:0">发送</mt-button>
  </div>
</template>

<script>
import RemoteScript from './RemoteScript'

export default {
  name: 'UEditor',
  props:['target','sendMessage'],
  components:{
    RemoteScript
  },
  data(){
    return {
      user:utils.cache.get('user')||{userId:'admin',realname:'admin'},
      callbackIndex:0,
      editor: null
    }
  },
  methods:{
    initEditor(){
      this.editor = new UE.ui.Editor({
        initialFrameWidth:'100%',
        initialFrameHeight:40,
        emotionLocalization:true,
        elementPathEnabled:false,
        enableContextMenu:false,
        autoHeightEnabled:false,
        wordCount:false,
        toolbars:[['emotion']]
      });
      this.editor.render('editor'+this.target.userId);
    },
    send(){
      var content = this.editor.getContent();
      if(content){
        var message = {
          msgType:0,
          sendId:this.user.userId,
          sendUser:this.user.realname,
          receiveId:this.target.userId,
          receiveUser:this.target.realname,
          content:content
        }
        this.sendMessage(message)
        this.editor.setContent('');
      }else{
        alert('发送内容不能为空！')
      }
    }
  },
  watch:{
    
  },
  mounted(){
    
  }
}
</script>
