webpackJsonp([26],{"+tBs":function(e,t,n){"use strict";t.a=[{name:"form",path:"form",meta:{login:!1,hasFooter:!1},component:function(e){n.e(3).then(function(){return e(n("BeRe"))}.bind(null,n)).catch(n.oe)}}]},0:function(e,t,n){e.exports=n("NHnr")},"0dS3":function(e,t,n){"use strict";t.a=[{name:"map",path:"map",meta:{login:!1,hasFooter:!1},component:function(e){n.e(20).then(function(){return e(n("t1kT"))}.bind(null,n)).catch(n.oe)}}]},"0xDb":function(e,t,n){"use strict";var o=n("TuU3"),a=n("4/BI"),i=n("3pLw"),r=n("jg9f"),c=n("Thh0"),u=(n("uiUg"),{cache:o.a,format:a.a,http:i.a,ui:r.a,version:c.a});t.a=u},"1sIE":function(e,t,n){"use strict";t.a=[{name:"zoom",path:"zoom",meta:{login:!1,hasFooter:!1},component:function(e){n.e(12).then(function(){return e(n("LsPf"))}.bind(null,n)).catch(n.oe)}}]},"2qc7":function(e,t,n){"use strict";t.a=[{name:"upload",path:"upload",meta:{login:!1},component:function(e){n.e(14).then(function(){return e(n("WiDM"))}.bind(null,n)).catch(n.oe)}}]},"3pLw":function(e,t,n){"use strict";var o=n("BMa3"),a=n.n(o),i=n("TuU3"),r=n("YtJ0"),c=n("MIpE");n("d7e3");window.axios=a.a;var u=a.a.create({method:"post",timeout:6e4,withCredentials:!0,headers:{post:{"Content-Type":"application/x-www-form-urlencoded"}},transformRequest:[function(e){var t="";for(var n in e)t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n])+"&";return t}]});u.interceptors.request.use(function(e){var t=i.a.get("user"),o={head:{url:e.url,debug:!0,userId:t?t.userId:null,token:i.a.get("token"),timestamp:(new Date).getTime()},body:{data:e.data}};return console.log("\n【request:"+e.url+"】",o,"\n\n"),e.url=window.Config.server+e.url,e.data={request:n.i(c.a)(JSON.stringify(o),n.i(c.b)(window.Config.key))},e},function(e){return console.log(e),Promise.reject(e)}),u.interceptors.response.use(function(e){var t=n.i(c.c)(e.data.response,n.i(c.b)(window.Config.key));e.data=JSON.parse(t),console.log("\n【response:"+e.config.url+"】",e,"\n\n"),200!=e.data.head.status&&r.a.commit("TOGGLE_POPUP",{visible:!0,text:e.data.head.msg,duration:3e3});var o=e.data.head.token;return i.a.set("token",o||i.a.get("token")),e},function(e){return console.log(e),Promise.reject(e)}),t.a=u},"4/BI":function(e,t,n){"use strict";Date.prototype.format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e};var o={toDate:function(e,t){return t||(t="yyyy-MM-dd HH:mm:ss"),e.format(t)},parseDate:function(e){return new Date(e.replace("-","/"))}};t.a=o},"48zQ":function(e,t,n){"use strict";function o(e){n("62qv")}var a=n("af8/"),i=n("Akum"),r=n("C7Lr"),c=o,u=r(a.a,i.a,!1,c,null,null);t.a=u.exports},"5OHe":function(e,t){},"5dKJ":function(e,t,n){"use strict";t.a=[{name:"list",path:"list",meta:{login:!1,hasFooter:!1},component:function(e){n.e(15).then(function(){return e(n("X5+7"))}.bind(null,n)).catch(n.oe)}}]},"62qv":function(e,t){},"7s+H":function(e,t){},"8O0P":function(e,t){},"8RzN":function(e,t,n){"use strict";t.a=[{name:"chat",path:"chat",meta:{login:!1,hasFooter:!1},component:function(e){n.e(5).then(function(){return e(n("T5Y6"))}.bind(null,n)).catch(n.oe)}}]},Akum:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:"slide-up",mode:"out-in"}},[n("mt-header",{directives:[{name:"show",rawName:"v-show",value:e.hasHeader,expression:"hasHeader"}],staticStyle:{position:"absolute",top:"0",width:"100%"}})],1),e._v(" "),n("router-view"),e._v(" "),n("transition",{attrs:{name:"slide-y",mode:"out-in"}},[n("mt-tabbar",{directives:[{name:"show",rawName:"v-show",value:e.hasTabs,expression:"hasTabs"}],attrs:{fixed:""},model:{value:e.$store.state.common.ui.tab,callback:function(t){e.$set(e.$store.state.common.ui,"tab",t)},expression:"$store.state.common.ui.tab"}},e._l(e.tabs,function(t,o){return n("mt-tab-item",{key:o,attrs:{id:t.id}},[n("i",{staticClass:"fa",class:t.icon,staticStyle:{"font-size":"24px"},attrs:{slot:"icon"},slot:"icon"}),e._v("\n        "+e._s(t.text)+"\n      ")])}),1)],1),e._v(" "),n("mt-popup",{staticStyle:{width:"100%",height:"50px","line-height":"50px",color:"#fff","text-align":"center",background:"rgba(0,0,0,0.5)"},attrs:{closeOnClickModal:!1,position:"top",modal:!0},model:{value:e.$store.state.common.ui.popupTop,callback:function(t){e.$set(e.$store.state.common.ui,"popupTop",t)},expression:"$store.state.common.ui.popupTop"}},[e._v("\n    "+e._s(e.$store.state.common.ui.popupText)+"\n  ")]),e._v(" "),n("mt-popup",{staticStyle:{width:"100%",height:"100%"},attrs:{"popup-transition":"popup-fade"},model:{value:e.$store.state.common.version.popupVersion,callback:function(t){e.$set(e.$store.state.common.version,"popupVersion",t)},expression:"$store.state.common.version.popupVersion"}},[n("mt-header",{attrs:{title:"有新版本可更新"}},[n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:e.back},slot:"left"},[n("span",[e._v("返回")])])],1),e._v(" "),n("div",{staticStyle:{padding:"15px","line-height":"30px","overflow-y":"auto"},style:{height:e.screenHeight-140+"px"}},[n("span",{staticStyle:{color:"#4caf50"}},[e._v("本次更新内容（"+e._s(e.appVersion)+" -> "+e._s(e.$store.state.common.version.nextVersion)+"）：")]),e._v(" "),e._l(e.$store.state.common.version.description,function(t,o){return n("div",{key:o,staticStyle:{"font-size":"14px"}},[e._v(e._s(t))])}),e._v(" "),n("div",{staticStyle:{position:"fixed",left:"5%",padding:"15px 0",bottom:"0",width:"90%"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.common.version.updating,expression:"$store.state.common.version.updating"}]},[n("mt-progress",{attrs:{value:e.$store.state.common.version.progress,"bar-height":5}}),e._v(" "),""==e.$store.state.common.version.updatingText?n("div",{staticClass:"center"},[e._v("更新进度："),n("span",{staticStyle:{display:"inline-block",width:"46px","text-align":"right"}},[e._v(e._s(e.$store.state.common.version.progress+"%"))])]):e._e(),e._v(" "),""!=e.$store.state.common.version.updatingText?n("div",{staticClass:"center"},[e._v(e._s(e.$store.state.common.version.updatingText))]):e._e()],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.$store.state.common.version.updating,expression:"!$store.state.common.version.updating"}]},[n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:e.toggleUpdating}},[e._v("立即更新")])],1)])],2)],1)],1)},a=[],i={render:o,staticRenderFns:a};t.a=i},B17L:function(e,t,n){"use strict";t.a=[{name:"contact",path:"contact",meta:{login:!1,hasFooter:!1},component:function(e){n.e(17).then(function(){return e(n("+/HG"))}.bind(null,n)).catch(n.oe)}}]},C9LJ:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a,i=n("TuU3"),r=["LOGIN","LOGOUT","TOGGLE_HEADER","TOGGLE_FOOTER","TOGGLE_TABS","TOGGLE_LOADING","TOGGLE_POPUP","TOGGLE_NEXT_VERSION","TOGGLE_PROGRESS","TOGGLE_UPDATING","TOGGLE_POPUP_VERSION","TOGGLE_UPDATING_TEXT","TOGGLE_DESCRIPTION"],c={},u=!0,s=!1,l=void 0;try{for(var p,f=r[Symbol.iterator]();!(u=(p=f.next()).done);u=!0){var m=p.value;c[m]=m}}catch(e){s=!0,l=e}finally{try{!u&&f.return&&f.return()}finally{if(s)throw l}}var d={app:{},ui:{hasHeader:!1,hasFooter:!0,fixFooter:!0,hasTabs:!1,tab:"home",loading:!1,popupTop:!1,popupText:"",popupDuration:null},version:{nextVersion:"",popupVersion:!1,updating:!1,progress:0,updatingText:"",description:[]},user:i.a.get("user"),userSetting:i.a.get("userSetting")},h={hasHeader:function(){return d.ui.hasHeader},hasFooter:function(){return d.ui.hasFooter},fixFooter:function(){return d.ui.fixFooter},hasTabs:function(){return d.ui.hasTabs},isLoading:function(){return d.ui.loading},getVersion:function(){return d.app.version}},g={},v=(a={},o(a,c.LOGIN,function(e,t){i.a.set("user",t.user),i.a.set("userSetting",t.userSetting),e.user=t.user,e.userSetting=t.userSetting}),o(a,c.LOGOUT,function(e){i.a.clear(),e.user=null,e.userSetting=null}),o(a,c.TOGGLE_HEADER,function(e,t){e.ui.hasHeader=t}),o(a,c.TOGGLE_FOOTER,function(e,t){e.ui.hasFooter=t}),o(a,c.TOGGLE_TABS,function(e,t){e.ui.hasTabs=t.flag,e.ui.tab=t.tab}),o(a,c.TOGGLE_LOADING,function(e,t){e.ui.loading=t}),o(a,c.TOGGLE_POPUP,function(e,t){e.ui.popupTop=t.visible,e.ui.popupText=t.text,t.duration&&setTimeout(function(){e.ui.popupTop=!1,e.ui.popupText="",e.ui.popupDuration=null},t.duration)}),o(a,c.TOGGLE_NEXT_VERSION,function(e,t){e.version.nextVersion=t}),o(a,c.TOGGLE_PROGRESS,function(e,t){e.version.progress=t}),o(a,c.TOGGLE_UPDATING,function(e,t){e.version.updating=t}),o(a,c.TOGGLE_POPUP_VERSION,function(e,t){e.version.popupVersion=t}),o(a,c.TOGGLE_UPDATING_TEXT,function(e,t){e.version.updatingText=t}),o(a,c.TOGGLE_DESCRIPTION,function(e,t){e.version.description=t}),a);t.a={state:d,getters:h,actions:g,mutations:v}},FbAg:function(e,t){},Hrkw:function(e,t,n){"use strict";t.a=[{name:"workflow",path:"workflow",meta:{login:!1,hasFooter:!1},component:function(e){n.e(21).then(function(){return e(n("QcW+"))}.bind(null,n)).catch(n.oe)}}]},IqcW:function(e,t,n){"use strict";t.a=[{name:"dialog",path:"dialog",meta:{login:!1,hasFooter:!1},component:function(e){n.e(13).then(function(){return e(n("A6/F"))}.bind(null,n)).catch(n.oe)}}]},"KL+/":function(e,t){},MIpE:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return r});var o=n("d7e3"),a=function(e,t){var n=o.enc.Utf8.parse(t);return o.AES.encrypt(e,n,{mode:o.mode.ECB,padding:o.pad.Pkcs7}).ciphertext.toString(o.enc.Base64).replace(/[\r\n]/g,"")},i=function(e,t){var n=o.enc.Utf8.parse(t);return o.AES.decrypt({ciphertext:o.enc.Base64.parse(e.replace(/[\r\n]/g,""))},n,{mode:o.mode.ECB,padding:o.pad.Pkcs7}).toString(o.enc.Utf8)},r=function(e){e=o.enc.Base64.parse(e).toString(o.enc.Utf8).split("").reverse().join("");for(var t="",n=0,a=0;n<e.length;n++)t+=e[n],n+=a++%2+1;return t}},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("QmSG"),a=(n.n(o),n("yf3K")),i=n("0xDb"),r=n("48zQ"),c=n("YaEn"),u=n("YtJ0"),s=n("5OHe"),l=(n.n(s),n("WEav")),p=(n.n(l),n("HVJf")),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};a.default.config.productionTip=!1,window.utils=i.a,window.Vue=a.default,a.default.mixin({data:function(){return{env:window.cordova?"app":"web",screenWidth:document.documentElement.clientWidth,screenHeight:document.documentElement.clientHeight}},methods:f({go:function(e){this.$router.push(e)},back:function(){c.a.goBack()}},n.i(p.a)({toggleHeader:"TOGGLE_HEADER",toggleFooter:"TOGGLE_FOOTER",toggleLoading:"TOGGLE_LOADING"}))}),window.vm=new a.default({el:"#app",router:c.a,store:u.a,template:"<App/>",components:{App:r.a}})},NU8x:function(e,t,n){"use strict";var o=n("YaEn"),a=n("HVJf"),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.a={name:"page",data:function(){var e=location.href.substr(location.href.indexOf("#")+1),t=[];return"/page/login"===e?t.push("/page/login"):"/page/home"===e?t.push("/page/login","/page/home"):t.push("/page/login","/page/home",e),{keepAlive:["login","home"],urlArray:t,transitionName:"animate-in"}},computed:i({},n.i(a.b)(["hasHeader","hasTabs","hasFooter","fixFooter","isLoading"])),beforeRouteUpdate:function(e,t,n){(this.urlArray.length>1&&this.urlArray[this.urlArray.length-2]==e.path&&(this.$router.isBack=!0),this.$router.isBack?(this.transitionName="animate-out",this.$router.isBack=!1):this.transitionName="animate-in",e.meta.keepAlive&&-1==this.keepAlive.indexOf(e.meta.name)&&this.keepAlive.push(e.name),window.lazyLibsLoaded||-1!=["login"].indexOf(e.name))?n():function e(){setTimeout(function(){window.lazyLibsLoaded?n():e()},200)}()},created:function(){var e=this;o.a.afterEach(function(t,n){e.urlArray.length>1&&e.urlArray[e.urlArray.length-2]==t.path?e.urlArray.pop():e.urlArray.push(t.path)})}}},P25B:function(e,t,n){"use strict";t.a=[{name:"video",path:"video",meta:{login:!1,hasFooter:!1},component:function(e){n.e(22).then(function(){return e(n("AmbE"))}.bind(null,n)).catch(n.oe)}},{name:"publisher",path:"publisher",meta:{login:!1,hasFooter:!1},component:function(e){n.e(23).then(function(){return e(n("mQRn"))}.bind(null,n)).catch(n.oe)}},{name:"observer",path:"observer",meta:{login:!1,hasFooter:!1},component:function(e){n.e(6).then(function(){return e(n("L8Lp"))}.bind(null,n)).catch(n.oe)}}]},QNKx:function(e,t,n){"use strict";t.a=[{name:"login",path:"login",meta:{login:!1,hasFooter:!0,keepAlive:!0},component:function(e){n.e(10).then(function(){return e(n("NaOX"))}.bind(null,n)).catch(n.oe),setTimeout(function(){n.e(0).then(function(){n("h6qm")}).catch(n.oe)},Config.preload)}}]},QmSG:function(e,t){window.Config={appVersion:"1.0.3",nativeVersion:"1.0",server:"http"+(0==location.href.indexOf("https")?"s":"")+"://47.100.119.102/api",appDownloadUrl:"http://47.100.119.102/vue-app",chcpUrl:"http://47.100.119.102/vue-app/chcp.json",key:"dzg5czJyejd5NjFkN3g3MjNjc2QwamN3OXUxODFjb280YWE4djhvYmV1NW9lemUxMzFjdGFiYTZ0OXo5dXhkMWNrYzRvZHZ3NjcyMzZkdWU=",random:(new Date).getTime(),preload:1e3}},RN31:function(e,t,n){"use strict";t.a=[{name:"chart",path:"chart",meta:{login:!1,hasFooter:!1},component:function(e){n.e(2).then(function(){return e(n("M+8D"))}.bind(null,n)).catch(n.oe)}}]},RTFJ:function(e,t){},RTGF:function(e,t,n){"use strict";t.a=[{name:"lock",path:"lock",meta:{login:!1,hasFooter:!1},component:function(e){n.e(7).then(function(){return e(n("PMpZ"))}.bind(null,n)).catch(n.oe)}}]},SUzx:function(e,t){},Thh0:function(e,t,n){"use strict";var o=n("yvAY"),a=(n.n(o),n("fc0N")),i=n.n(a),r=n("YtJ0"),c={checkForUpdate:function(){c.getServerVersion().then(function(e){Config.nativeVersion!=e.data.nativeVersion?i.a.alert("当前版本过低，请安装最新版本！","版本更新").then(function(){window.open(Config.appDownloadUrl)}):Config.appVersion!=e.data.appVersion&&(r.a.commit("TOGGLE_POPUP_VERSION",!0),r.a.commit("TOGGLE_NEXT_VERSION",e.data.appVersion),r.a.commit("TOGGLE_DESCRIPTION",e.data.description))})},getServerVersion:function(){return axios.get(Config.chcpUrl+"?r="+(new Date).getTime())},fetchUpdate:function(){if(!window.chcp)return alert("未找到热更新插件！"),!1;chcp.fetchUpdate(function(e,t){if(console.log("in fetchUpdate",t,t.config),e)return void console.log(e);if(t.totalNum){var n=parseInt(100*t.progress);console.log("progress",n),r.a.commit("TOGGLE_PROGRESS",n),100==n&&(r.a.commit("TOGGLE_UPDATING_TEXT","正在安装新版本"),setTimeout(function(){console.log("ready to install"),c.installUpdate()},500))}},{"config-file":Config.chcpUrl})},installUpdate:function(){chcp.installUpdate(function(e){e?(r.a.commit("TOGGLE_UPDATING_TEXT","更新包安装失败"),alert(JSON.stringify(e))):r.a.commit("TOGGLE_POPUP",{visible:!0,text:"已经更新为最新版本",duration:3e3})})}};t.a=c},TuU3:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__security__=__webpack_require__("MIpE"),cache={set:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:86400;"string"!=typeof t&&(t=JSON.stringify(t)),t=JSON.stringify({value:t,expired:(new Date).getTime()+1e3*n}),localStorage.setItem(e,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__security__.a)(t,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__security__.b)(window.Config.key)))},get:function get(key){var value=localStorage.getItem(key);if(value)if(value=JSON.parse(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__security__.c)(value,__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__security__.b)(window.Config.key))),value.expired>(new Date).getTime()){if(value=value.value,"{"==value.substr(0,1)||"["==value.substr(0,1))try{value=eval("("+value+")")}catch(e){console.log("error in get cache key:"+key+", value:"+value)}}else localStorage.removeItem(key),value=null;return value},removeItem:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}};__webpack_exports__.a=cache},ULuq:function(e,t){},"Vr/b":function(e,t,n){"use strict";t.a=[{name:"about",path:"about",meta:{login:!1,hasFooter:!0},component:function(e){n.e(1).then(function(){e(n("cEc9"))}.bind(null,n)).catch(n.oe)}},{name:"setting",path:"setting",meta:{login:!1,hasFooter:!0},component:function(e){n.e(19).then(function(){e(n("1Gtm"))}.bind(null,n)).catch(n.oe),n.e(1).then(function(){n("cEc9")}).catch(n.oe)}}]},WEav:function(e,t){},Xk10:function(e,t,n){"use strict";function o(e){n("7s+H")}var a=n("NU8x"),i=n("Y0um"),r=n("C7Lr"),c=o,u=r(a.a,i.a,!1,c,null,null);t.a=u.exports},Y0um:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition",{attrs:{name:e.transitionName,mode:"out-in"}},[n("keep-alive",{attrs:{include:e.keepAlive}},[n("router-view")],1)],1)],1)},a=[],i={render:o,staticRenderFns:a};t.a=i},YaEn:function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=n("yf3K"),i=n("cigS"),r=n("YtJ0"),c=n("Xk10"),u=n("QNKx"),s=n("roEk"),l=n("5dKJ"),p=n("RN31"),f=n("B17L"),m=n("+tBs"),d=n("lteJ"),h=n("RTGF"),g=n("u9Kv"),v=n("oz5U"),_=n("0dS3"),b=n("IqcW"),O=n("8RzN"),T=n("P25B"),E=n("Vr/b"),w=n("2qc7"),G=n("m2qh"),y=n("1sIE"),x=n("Hrkw"),k=n("m3lF"),L=n("bGpb");a.default.use(i.a),i.a.prototype.goBack=function(){this.isBack=!0,window.history.go(-1)};var N=new i.a({routes:[{path:"/",redirect:"/page/login"},{path:"/page",component:c.a,children:[].concat(o(u.a),o(s.a),o(l.a),o(p.a),o(f.a),o(m.a),o(d.a),o(h.a),o(g.a),o(v.a),o(_.a),o(b.a),o(O.a),o(T.a),o(E.a),o(w.a),o(G.a),o(y.a),o(x.a),o(k.a),o(L.a))}]}),P={},S=!1,F=document.querySelector(".loader-box"),U=void 0,A=void 0;N.beforeEach(function(e,t,n){P[e.name]||-1!==F.className.indexOf("fadeOut")&&(U=setTimeout(function(){F.style.display="block",A=setTimeout(function(){F.className=F.className.replace(" fadeOut","")})},100)),0==e.meta.login||r.a.state.common.user?(console.log("next"),n()):(console.log("to login"),r.a.commit("TOGGLE_POPUP",{visible:!0,text:"请先登录！",duration:3e3}),n("/page/login"),F.className+=" fadeOut",setTimeout(function(){F.style.display="none"},500))}),N.afterEach(function(e,t){clearTimeout(A),clearTimeout(U),P[e.name]=!0,r.a.commit("TOGGLE_HEADER",0!=e.meta.hasHeader),r.a.commit("TOGGLE_FOOTER",0!=e.meta.hasFooter),r.a.commit("TOGGLE_TABS",{flag:1==e.meta.hasTabs,tab:e.name}),S?(-1===F.className.indexOf("fadeOut")&&setTimeout(function(){F.className+=" fadeOut"},500),setTimeout(function(){F.style.display="none"},1e3)):(S=!0,-1===F.className.indexOf("fadeOut")&&(F.className+=" fadeOut",setTimeout(function(){F.style.display="none"},500)))}),t.a=N},YtJ0:function(e,t,n){"use strict";var o=n("yf3K"),a=n("HVJf"),i=n("C9LJ");o.default.use(a.c),t.a=new a.c.Store({modules:{common:i.a}})},"af8/":function(e,t,n){"use strict";var o=n("kMAb"),a=(n.n(o),n("Occv")),i=n.n(a),r=n("FbAg"),c=(n.n(r),n("Fp7H")),u=n.n(c),s=n("pIlK"),l=(n.n(s),n("0Qqo")),p=n.n(l),f=n("KL+/"),m=(n.n(f),n("uVSC")),d=n.n(m),h=n("vKIO"),g=(n.n(h),n("GQr1")),v=n.n(g),_=n("RTFJ"),b=(n.n(_),n("s9Cd")),O=n.n(b),T=n("8O0P"),E=(n.n(T),n("rxcl")),w=n.n(E),G=n("yf3K"),y=n("HVJf"),x=n("YtJ0"),k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};G.default.component(w.a.name,w.a),G.default.component(O.a.name,O.a),G.default.component(v.a.name,v.a),G.default.component(d.a.name,d.a),G.default.component(p.a.name,p.a),G.default.component(u.a.name,u.a),G.default.component(i.a.name,i.a),t.a={name:"app",data:function(){return{appVersion:Config.appVersion,transitionName:"animate-in",tab:x.a.state.common.ui.tab||"home",tabs:[{id:"home",icon:"fa-home",text:"首页",url:"home"},{id:"contact",icon:"fa-address-book-o",text:"通讯录",url:"contact"},{id:"calendar",icon:"fa-calendar",text:"日历",url:"list"},{id:"setting",icon:"fa-cog",text:"设置",url:"setting"}]}},computed:k({},n.i(y.b)(["hasHeader","hasTabs","hasFooter","fixFooter","isLoading"])),methods:{toggleUpdating:function(){x.a.commit("TOGGLE_UPDATING",!0),utils.version.fetchUpdate()},back:function(){x.a.commit("TOGGLE_POPUP_VERSION",!1)}},watch:{"$store.state.common.ui.tab":function(e){this.go({name:e})}},created:function(){n("gMcV")},mounted:function(){document.addEventListener("deviceready",function(){utils.version.checkForUpdate()},!1)}}},bGpb:function(e,t,n){"use strict";t.a=[{name:"splash",path:"splash",meta:{login:!1,hasHeader:!1,hasFooter:!1},component:function(e){n.e(18).then(function(){return e(n("bu5r"))}.bind(null,n)).catch(n.oe)}}]},gMcV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("yf3K");n.e(4).then(function(){n("iDdd").attach(document.body);var e=n("Xshf").default,t=n("Qh9b").default,a=n("rxcl").default,i=n("cfQL").default,r=n("8qk2").default,c=n("cefO").default,u=n("3djZ").default,s=n("s9Cd").default,l=n("GQr1").default,p=n("fmon").default,f=n("pIwM").default,m=n("Pfw0").default,d=n("t2au").default,h=n("hwfq").default,g=n("0Qqo").default,v=n("uVSC").default,_=n("nqp9").default,b=n("BOYZ").default,O=n("z2kZ").default,T=n("nWv3").default,E=n("BZYI").default,w=n("wccJ").default,G=n("LuYC").default,y=n("Fp7H").default,x=n("XFAJ").default,k=n("1nxA").default,L=n("Occv").default;o.default.use(m),o.default.component(e.name,e),o.default.component(t.name,t),o.default.component(a.name,a),o.default.component(i.name,i),o.default.component(r.name,r),o.default.component(c.name,c),o.default.component(u.name,u),o.default.component(s.name,s),o.default.component(l.name,l),o.default.component(p.name,p),o.default.component(f.name,f),o.default.component(d.name,d),o.default.component(h.name,h),o.default.component(g.name,g),o.default.component(v.name,v),o.default.component(_.name,_),o.default.component(b.name,b),o.default.component(O.name,O),o.default.component(T.name,T),o.default.component(E.name,E),o.default.component(w.name,w),o.default.component(G.name,G),o.default.component(y.name,y),o.default.component(x.name,x),o.default.component(k.name,k),o.default.component(L.name,L),window.lazyLibsLoaded=!0;var N=window.vm.$root.$children[0].$children.length;window.vm.$root.$children[0].$children[N-1].$children[0].$forceUpdate()}.bind(null,n)).catch(n.oe)},jg9f:function(e,t,n){"use strict";var o={modal:function(e){var t;return{afterOpen:function(){t=document.scrollingElement.scrollTop,document.body.classList.add("modal-open"),document.body.style.top=-t+"px"},beforeClose:function(){document.body.classList.remove("modal-open"),document.scrollingElement.scrollTop=t}}}()};t.a=o},kMAb:function(e,t){},lteJ:function(e,t,n){"use strict";t.a=[{name:"tab",path:"tab",meta:{login:!1,hasFooter:!1},component:function(e){n.e(16).then(function(){return e(n("sVk2"))}.bind(null,n)).catch(n.oe)}}]},m2qh:function(e,t,n){"use strict";t.a=[{name:"browser",path:"browser",meta:{login:!1,hasFooter:!1},component:function(e){n.e(24).then(function(){return e(n("/1G5"))}.bind(null,n)).catch(n.oe)}}]},m3lF:function(e,t,n){"use strict";t.a=[{name:"signature",path:"signature",meta:{login:!1,hasFooter:!1},component:function(e){n.e(9).then(function(){return e(n("ro03"))}.bind(null,n)).catch(n.oe)}}]},oz5U:function(e,t,n){"use strict";t.a=[{name:"loading",path:"loading",meta:{login:!1,hasFooter:!1},component:function(e){n.e(11).then(function(){return e(n("hGVa"))}.bind(null,n)).catch(n.oe)}}]},pIlK:function(e,t){},roEk:function(e,t,n){"use strict";t.a=[{name:"home",path:"home",meta:{login:!1,hasFooter:!1,hasTabs:!0,keepAlive:!0},component:function(e){n.e(0).then(function(){return e(n("h6qm"))}.bind(null,n)).catch(n.oe)}}]},u9Kv:function(e,t,n){"use strict";t.a=[{name:"calendar",path:"calendar",meta:{login:!1,hasFooter:!1},component:function(e){n.e(8).then(function(){return e(n("F3mG"))}.bind(null,n)).catch(n.oe)}}]},uiUg:function(e,t,n){"use strict";var o=n("yf3K"),a=n("4/BI"),i=[],r=function(){return a.a.toDate(new Date)};o.default.config.errorHandler=function(e){i.push({time:r(),content:e.stack})},window.onerror=function(e,t,n,o,a){i.push({time:r(),content:a.stack})},window.addEventListener("error",function(e){i.push({time:r(),content:e.error.stack})}),setInterval(function(){if(i.length>0){i.length}},3e3)},vKIO:function(e,t){},yvAY:function(e,t){}},[0]);