webpackJsonp([5],{"/Xc0":function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,'.popup-menu[data-v-e7f5e3d2]:before{width:0;height:0;display:inline-block;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid #fff;content:" ";position:absolute;top:-10px;right:8px}.popup-menu[data-v-e7f5e3d2]{top:195px;width:150px;border-radius:10px}.popup-config[data-v-e7f5e3d2]{width:80%;height:100%}.chat-head[data-v-e7f5e3d2]{width:36px;border-radius:50%}',""])},"0V/F":function(t,e,a){var o=a("7QXz");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("FIqI")("6b22874e",o,!0,{})},"1gSM":function(t,e,a){t.exports=a.p+"static/img/head_bg.jpg"},"4h7W":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"99.8%"}},[a("div",{attrs:{id:"editor"+t.target.userId}}),t._v(" "),a("RemoteScript",{attrs:{src:"static/lib/ueditor/ueditor.config.js"},on:{callback:function(e){t.callbackIndex=t.callbackIndex+1}}}),t._v(" "),t.callbackIndex>0?a("RemoteScript",{attrs:{src:"static/lib/ueditor/ueditor.all.min.js"},on:{callback:function(e){t.callbackIndex=t.callbackIndex+1}}}):t._e(),t._v(" "),t.callbackIndex>1?a("RemoteScript",{attrs:{src:"static/lib/ueditor/lang/zh-cn/zh-cn.js"},on:{callback:function(e){return t.initEditor()}}}):t._e(),t._v(" "),a("mt-button",{staticStyle:{position:"absolute","z-index":"99999",right:"3px",bottom:"3px",width:"50px",padding:"0"},attrs:{size:"small"},on:{click:t.send}},[t._v("发送")])],1)},i=[],s={render:o,staticRenderFns:i};e.a=s},"6U+Y":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("mt-header",{attrs:{title:"即时聊天"}},[o("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.back},slot:"left"},[o("span",[t._v("返回")])]),t._v(" "),o("mt-button",{attrs:{slot:"right"},on:{click:function(e){t.popupMenu=!0}},slot:"right"},[o("i",{staticClass:"fa fa-fw fa-plus"})])],1),t._v(" "),o("div",{staticClass:"chat-cell"},[t._l(t.contacts,function(e,i){return o("accordion",{key:i,attrs:{open:!1}},[o("div",{attrs:{slot:"title"},slot:"title"},[o("div",[o("i",{staticClass:"fa fa-fw fa-user"}),t._v(" "+t._s(e.name))])]),t._v(" "),o("div",{attrs:{slot:"content"},slot:"content"},t._l(e.friends,function(e,i){return o("mt-cell",{key:i,attrs:{title:e.realname,label:"暂无最新消息"},nativeOn:{click:function(a){return t.toDetails(e)}}},[o("img",{staticClass:"chat-head",attrs:{src:a("AH0k")}})])}),1)])}),t._v(" "),o("p",{staticClass:"pd-md",staticStyle:{color:"gray"}},[t._v("当前用户："+t._s(t.$store.state.common.user.username)),o("br"),t._v("\n    PS：可用admin/admin，chenjia/chenjia 两个用户模拟聊天场景，后台采用dwr的http长连接实现\n    ")])],2),t._v(" "),o("mt-popup",{staticClass:"popup-config",attrs:{position:"left"},model:{value:t.popupConfig,callback:function(e){t.popupConfig=e},expression:"popupConfig"}},[o("mt-cell",{attrs:{title:"创建群聊"}},[o("i",{staticClass:"fa fa-fw fa-commenting-o",attrs:{slot:"icon"},slot:"icon"})])],1),t._v(" "),o("mt-popup",{staticClass:"popup-menu",style:{left:t.screenWidth-80+"px"},model:{value:t.popupMenu,callback:function(e){t.popupMenu=e},expression:"popupMenu"}},[o("mt-cell",{attrs:{title:"创建群聊"}},[o("i",{staticClass:"fa fa-fw fa-commenting-o",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),o("mt-cell",{attrs:{title:"加好友/群"}},[o("i",{staticClass:"fa fa-fw fa-user-o",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),o("mt-cell",{attrs:{title:"扫一扫"}},[o("i",{staticClass:"fa fa-fw fa-qrcode",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),o("mt-cell",{attrs:{title:"面对面快传"}},[o("i",{staticClass:"fa fa-fw fa-retweet",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),o("mt-cell",{attrs:{title:"付款"}},[o("i",{staticClass:"fa fa-fw fa-barcode",attrs:{slot:"icon"},slot:"icon"})]),t._v(" "),o("mt-cell",{attrs:{title:"拍摄"}},[o("i",{staticClass:"fa fa-fw fa-camera",attrs:{slot:"icon"},slot:"icon"})])],1),t._v(" "),o("chatDetails",{attrs:{open:t.popupDetails,target:t.target},on:{"update:open":function(e){t.popupDetails=e}}}),t._v(" "),o("iframe",{staticStyle:{display:"none"},attrs:{id:"chatFrame",src:t.server+"/push/pushFrame.html?userId="+t.user.userId}})],1)},i=[],s={render:o,staticRenderFns:i};e.a=s},"7QXz":function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,'.popup-details{width:100%;height:100%}.chat-container{overflow-y:auto}.chat-box{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:20px}.chat-send{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.chat-head{width:36px;height:36px;border:1px solid #ccc;border-radius:50%}.chat-msg{position:relative;background:#eee;border:1px solid #ccc;border-radius:4px;margin:0 0 0 20px;padding:10px;max-width:60%;word-wrap:break-word}.chat-msg p{margin:0}.chat-send .chat-msg{border:1px solid #26a2ff;background:#e3f2fd;margin:0 20px 0 0}.chat-send .chat-msg:before{border-left:1px solid #26a2ff;border-bottom:1px solid #26a2ff;background:#e3f2fd;right:-6px;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.chat-receive .chat-msg:before,.chat-send .chat-msg:before{width:10px;height:10px;z-index:1;display:inline-block;content:" ";position:absolute;top:10px}.chat-receive .chat-msg:before{border-left:1px solid #ccc;border-bottom:1px solid #ccc;background:#eee;left:-6px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.chat-editor{position:fixed;z-index:9;bottom:0;background:#eee;width:100%;height:40px}.chat-editor .edui-default .edui-editor{border-radius:0}.chat-editor .edui-default .edui-editor-iframeholder{background:#f0f0f0}.chat-editor-btn{display:inline-block;margin-left:10px;width:30px;height:30px;line-height:30px;text-align:center;color:#666;border:1px solid #ccc;border-radius:50%}.chat-editor-input{padding:0 5px;background:none;border:none;height:30px;line-height:30px;border-bottom:1px solid #ccc;border-radius:0;-webkit-box-flex:1;-ms-flex:1 1 100px;flex:1 1 100px}#edui4_content{width:93vw!important;overflow-x:auto}.edui-editor-toolbarbox{position:absolute!important;width:30px!important;height:30px!important;line-height:30px;left:6px;bottom:6px;z-index:99999}.edui-editor-toolbarbox,.edui-editor-toolbarboxouter{-webkit-box-shadow:none!important;box-shadow:none!important}.edui-bordereraser,.edui-editor-toolbarboxinner,.edui-menubutton-body,.edui-splitbutton-body{background:#f0f0f0!important;border:none!important}.edui-editor-iframeholder{padding-left:30px}.rotate{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.loadmore-arrow{-webkit-transition:all .3s ease-out;transition:all .3s ease-out;font-size:24px;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1;color:#26a2ff}.loadmore-arrow,div[class^=mint-spinner-]{display:inline-block}',""])},AH0k:function(t,e,a){t.exports=a.p+"static/img/head.jpg"},ARbw:function(t,e,a){"use strict";var o=a("u36N");e.a={name:"UEditor",props:["target","sendMessage"],components:{RemoteScript:o.a},data:function(){return{user:utils.cache.get("user")||{userId:"admin",realname:"admin"},callbackIndex:0,editor:null}},methods:{initEditor:function(){this.editor=new UE.ui.Editor({initialFrameWidth:"100%",initialFrameHeight:40,emotionLocalization:!0,elementPathEnabled:!1,enableContextMenu:!1,autoHeightEnabled:!1,wordCount:!1,toolbars:[["emotion"]]}),this.editor.render("editor"+this.target.userId)},send:function(){var t=this.editor.getContent();if(t){var e={type:"chat",msgType:0,sendId:this.user.userId,sendUser:this.user.realname,receiveId:this.target.userId,receiveUser:this.target.realname,content:t};this.sendMessage(e),this.editor.setContent("")}else alert("发送内容不能为空！")}},watch:{},mounted:function(){}}},DOHL:function(t,e,a){var o=a("/Xc0");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("FIqI")("0e263596",o,!0,{})},"F0Q+":function(t,e,a){var o=a("ioos");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("FIqI")("08bb8900",o,!0,{})},LFDM:function(t,e,a){"use strict";var o=a("igJJ");e.a={name:"chatDetails",components:{UEditor:o.a},props:{open:{type:Boolean,default:!0},target:{type:Object}},data:function(){return{now:(new Date).getTime(),show:this.open,pageNumber:1,topStatus:"",msg:"",user:utils.cache.get("user")||{userId:"admin"},heads:{admin:a("AH0k"),chenjia:a("AH0k"),xiaoting:a("1gSM")},targets:{},records:{}}},methods:{change:function(t){this.show=t,this.$emit("update:open",t)},queryRecords:function(t){var e=this;utils.http.post("/push/record/list",{example:{sendId:this.user.userId,receiveId:this.target.userId,beforeDate:this.now},pageData:{pageNumber:this.pageNumber,pageSize:10}}).then(function(a){var o=a.data.body.data.data;setTimeout(function(){e.pageNumber++,console.log(e.records);var a=e.records[e.target.userId];if(a&&a.length>0){var i=e.records[e.target.userId][0].recordId;e.records[e.target.userId]=o.reverse().concat(e.records[e.target.userId]),e.records=Object.assign({},e.records),setTimeout(function(){document.querySelector(".chat-container").scrollTop=document.getElementById(i).offsetTop-50,t()})}else e.records[e.target.userId]=o.reverse(),e.records=Object.assign({},e.records),setTimeout(function(){document.querySelector(".chat-container").scrollTop=99999})},500)}).catch(function(){e.records={}})},loadTop:function(){var t=this;this.queryRecords(function(){t.$refs.loadmore.onTopLoaded()})},handleTopChange:function(t){this.topStatus=t},sendMessage:function(t){document.getElementById("chatFrame").contentWindow.postMessage(t,"*"),console.log(this.target),this.records[this.target.userId].push(t),this.records=Object.assign({},this.records),this.msg="",setTimeout(function(){document.querySelector(".chat-container").scrollTop=99999})},receiveMessage:function(t){this.records[t.sendId]&&(this.records[t.sendId].push(t),this.records=Object.assign({},this.records),setTimeout(function(){document.querySelector(".chat-container").scrollTop=99999}))}},watch:{open:function(t){this.change(t)},target:function(t){this.queryRecords()}},mounted:function(){var t=this;this.records[this.target.userId]=[],window.addEventListener("message",function(e){t.receiveMessage(e.data)})}}},QI3B:function(t,e,a){"use strict";function o(t){a("F0Q+")}var i=a("bgNu"),s=a("twNw"),n=a("C7Lr"),r=o,c=n(i.a,s.a,!1,r,null,null);e.a=c.exports},T5Y6:function(t,e,a){"use strict";function o(t){a("DOHL")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("eBGj"),s=a("6U+Y"),n=a("C7Lr"),r=o,c=n(i.a,s.a,!1,r,"data-v-e7f5e3d2",null);e.default=c.exports},bgNu:function(t,e,a){"use strict";e.a={name:"accordion",props:{open:{type:Boolean,default:!1}},data:function(){return{ready:!1,cascade:!1,animation:!1,expand:this.open}},mounted:function(){var t=this;this.ready=!0;var e=this.$el.previousElementSibling;e&&"accordion"==e.className&&(this.cascade=!0),setTimeout(function(){t.animation=!0})}}},eBGj:function(t,e,a){"use strict";var o=a("QI3B"),i=a("jMze");e.a={name:"chat",components:{accordion:o.a,chatDetails:i.a},data:function(){return{server:Config.server,user:utils.cache.get("user")||{userId:""},popupMenu:!1,popupConfig:!1,popupDetails:!1,contacts:[],target:{userId:"chenjia",name:"陈佳",head:"../../../static/img/head.jpg"}}},methods:{getFriends:function(){this.contacts=[{name:"最近联系人",friends:[{realname:"admin",userId:"admin"},{realname:"chenjia",userId:"chenjia"},{realname:"xiaoting",userId:"xiaoting"}]}]},toDetails:function(t){this.popupDetails=!0,this.target=t}},mounted:function(){this.getFriends()}}},igJJ:function(t,e,a){"use strict";var o=a("ARbw"),i=a("4h7W"),s=a("C7Lr"),n=s(o.a,i.a,!1,null,null,null);e.a=n.exports},ioos:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".content{padding:1px 0}.content .mint-cell:first-child .mint-cell-wrapper,.content .mint-cell:last-child{background:none}",""])},jMze:function(t,e,a){"use strict";function o(t){a("0V/F")}var i=a("LFDM"),s=a("nuQy"),n=a("C7Lr"),r=o,c=n(i.a,s.a,!1,r,null,null);e.a=c.exports},nh30:function(t,e,a){"use strict";e.a={name:"RemoteScript",props:["src","callback"],mounted:function(){var t=this,e=document.createElement("script");e.type="text/javascript",e.src=this.src,e.onload=e.readystatechange=function(){e.readyState&&!/loaded|complete/.test(e.readyState)||(t.$emit("callback"),e.onload=e.readystatechange=null)},document.body.appendChild(e)}}},nuQy:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("mt-popup",{staticClass:"popup-details",attrs:{position:"right"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("mt-header",{attrs:{title:t.target.name}},[a("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:function(e){return t.change(!1)}},slot:"left"},[t._v("返回")])],1),t._v(" "),a("div",{staticClass:"chat-container pd-md",style:{height:t.screenHeight-100+"px"}},[a("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop},on:{"top-status-change":t.handleTopChange}},[a("div",{staticClass:"mint-loadmore-top",attrs:{slot:"top"},slot:"top"},[a("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!==t.topStatus,expression:"topStatus !== 'loading'"}],staticClass:"loadmore-arrow",class:{rotate:"drop"===t.topStatus}},[t._v("↓")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.topStatus,expression:"topStatus === 'loading'"}]},[a("mt-spinner",{attrs:{type:"fading-circle",color:"#26a2ff",size:20}}),t._v(" "),a("span",{staticStyle:{position:"relative",top:"-4px",left:"4px",color:"#26a2ff"}},[t._v("加载中...")])],1)]),t._v(" "),t._l(t.records[t.target.userId],function(e,o){return a("div",{staticClass:"chat-box",class:{"chat-receive":t.user.userId==e.receiveId,"chat-send":t.user.userId==e.sendId},attrs:{id:e.recordId}},[a("img",{staticClass:"chat-head",attrs:{src:t.heads[e.sendId]}}),t._v(" "),a("div",{staticClass:"chat-msg",domProps:{innerHTML:t._s(e.content)}})])})],2)],1),t._v(" "),a("div",{staticClass:"chat-editor"},[a("UEditor",{attrs:{target:t.target,sendMessage:t.sendMessage}})],1)],1)},i=[],s={render:o,staticRenderFns:i};e.a=s},twNw:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"accordion",style:{"margin-top":t.cascade?"-1px":""}},[a("mt-cell",{staticStyle:{background:"#fefefe"}},[a("div",{staticStyle:{color:"#26a2ff"},attrs:{slot:"title"},on:{click:function(e){t.expand=!t.expand}},slot:"title"},[t._t("title"),t._v(" "),a("i",{staticClass:"fa fa-fw fa-angle-down",staticStyle:{"-webkit-transition":"all .2s ease-out",position:"absolute",right:"10px",top:"14px","font-size":"20px"},style:{"-webkit-transform":t.expand?"rotate(180deg)":""}})],2)]),t._v(" "),t.$slots.content[0].children.length>0?a("mt-cell",{style:{height:t.ready&&t.expand?t.$refs.content.clientHeight+"px":"1px","min-height":t.ready&&t.expand?t.$refs.content.clientHeight+"px":"1px","-webkit-transition":t.animation?"all .2s ease-out":""}},[a("div",{ref:"content",staticClass:"content",attrs:{slot:"title"},slot:"title"},[t._t("content")],2)]):t._e()],1)},i=[],s={render:o,staticRenderFns:i};e.a=s},u36N:function(t,e,a){"use strict";var o=a("nh30"),i=a("xAhz"),s=a("C7Lr"),n=s(o.a,i.a,!1,null,null,null);e.a=n.exports},xAhz:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{staticStyle:{display:"none"}})},i=[],s={render:o,staticRenderFns:i};e.a=s}});