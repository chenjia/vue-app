webpackJsonp([18],{"+tBs":function(t,e,n){"use strict";e.a=[{name:"form",path:"form",meta:{login:!1,hasFooter:!1},component:function(t){n.e(1).then(function(){return t(n("BeRe"))}.bind(null,n)).catch(n.oe)}}]},"0dS3":function(t,e,n){"use strict";e.a=[{name:"map",path:"map",meta:{login:!1,hasFooter:!1},component:function(t){n.e(9).then(function(){return t(n("t1kT"))}.bind(null,n)).catch(n.oe)}}]},"0xDb":function(t,e,n){"use strict";var o=n("TuU3"),a=n("4/BI"),i=n("3pLw"),c=n("jg9f"),u=n("Thh0"),r={cache:o.a,format:a.a,http:i.a,ui:c.a,version:u.a};e.a=r},"3pLw":function(t,e,n){"use strict";var o=n("//Fk"),a=n.n(o),i=n("mvHQ"),c=n.n(i),u=n("mtWM"),r=n.n(u),s=n("TuU3"),l=r.a.create({method:"post",timeout:6e4,withCredentials:!0,headers:{post:{"Content-Type":"application/x-www-form-urlencoded"}},transformRequest:[function(t){var e="";for(var n in t)e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&";return e}]});l.interceptors.request.use(function(t){var e=s.a.get("user"),n={head:{url:t.url,debug:!0,userId:e?e.userId:null,token:s.a.get("token")},body:{data:t.data}};return t.url=window.Config.server+t.url,t.data={request:c()(n)},t},function(t){return console.log(t),a.a.reject(t)}),l.interceptors.response.use(function(t){var e=t.data.head.token;return s.a.set("token",e||s.a.get("token")),t},function(t){return console.log(t),a.a.reject(t)}),e.a=l},"4/BI":function(t,e,n){"use strict";Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t};var o={toDate:function(t,e){return e||(e="yyyy-MM-dd HH:mm:ss"),t.format(e)},parseDate:function(t){return new Date(t.replace("-","/"))}};e.a=o},"48zQ":function(t,e,n){"use strict";function o(t){n("Qynr")}var a=n("o99s"),i=n("wJE3"),c=n("VU/8"),u=o,r=c(a.a,i.a,!1,u,null,null);e.a=r.exports},"5dKJ":function(t,e,n){"use strict";e.a=[{name:"list",path:"list",meta:{login:!1,hasFooter:!1},component:function(t){n.e(10).then(function(){return t(n("X5+7"))}.bind(null,n)).catch(n.oe)}}]},"8RzN":function(t,e,n){"use strict";e.a=[{name:"chat",path:"chat",meta:{login:!1,hasFooter:!1},component:function(t){n.e(3).then(function(){return t(n("T5Y6"))}.bind(null,n)).catch(n.oe)}}]},B17L:function(t,e,n){"use strict";e.a=[{name:"contact",path:"contact",meta:{login:!1,hasFooter:!1},component:function(t){n.e(11).then(function(){return t(n("+/HG"))}.bind(null,n)).catch(n.oe)}}]},C9LJ:function(t,e,n){"use strict";var o,a=n("BO1k"),i=n.n(a),c=n("bOdI"),u=n.n(c),r=n("0xDb"),s=["LOGIN","LOGOUT","TOGGLE_HEADER","TOGGLE_FOOTER","TOGGLE_TABS","TOGGLE_LOADING","TOGGLE_POPUP","UPDATE_VERSION"],l={},m=!0,p=!1,f=void 0;try{for(var h,d=i()(s);!(m=(h=d.next()).done);m=!0){var g=h.value;l[g]=g}}catch(t){p=!0,f=t}finally{try{!m&&d.return&&d.return()}finally{if(p)throw f}}var _={app:{version:""},ui:{hasHeader:!1,hasFooter:!0,fixFooter:!0,hasTabs:!1,tab:"home",loading:!1,popupTop:!1,popupText:"",popupDuration:null},user:r.a.cache.get("user"),userSetting:r.a.cache.get("userSetting")},b={hasHeader:function(){return _.ui.hasHeader},hasFooter:function(){return _.ui.hasFooter},fixFooter:function(){return _.ui.fixFooter},hasTabs:function(){return _.ui.hasTabs},isLoading:function(){return _.ui.loading},getVersion:function(){return _.app.version}},v={},T=(o={},u()(o,l.UPDATE_VERSION,function(t,e){r.a.cache.set("version",e),t.app.version=e}),u()(o,l.LOGIN,function(t,e){r.a.cache.set("user",e.user),r.a.cache.set("userSetting",e.userSetting),t.user=e.user,t.userSetting=e.userSetting}),u()(o,l.LOGOUT,function(t){r.a.cache.clear(),t.user=null,t.userSetting=null}),u()(o,l.TOGGLE_HEADER,function(t,e){t.ui.hasHeader=e}),u()(o,l.TOGGLE_FOOTER,function(t,e){t.ui.hasFooter=e}),u()(o,l.TOGGLE_TABS,function(t,e){t.ui.hasTabs=e.flag,t.ui.tab=e.tab}),u()(o,l.TOGGLE_LOADING,function(t,e){t.ui.loading=e}),u()(o,l.TOGGLE_POPUP,function(t,e){t.ui.popupTop=e.visible,t.ui.popupText=e.text,e.duration&&setTimeout(function(){t.ui.popupTop=!1,t.ui.popupText="",t.ui.popupDuration=null},e.duration)}),o);e.a={state:_,getters:b,actions:v,mutations:T}},IqcW:function(t,e,n){"use strict";e.a=[{name:"dialog",path:"dialog",meta:{login:!1,hasFooter:!1},component:function(t){n.e(4).then(function(){return t(n("A6/F"))}.bind(null,n)).catch(n.oe)}}]},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Dd8w"),a=n.n(o),i=n("v5o6"),c=n.n(i),u=n("7+uW"),r=n("48zQ"),s=n("YaEn"),l=n("YtJ0"),m=n("d8/S"),p=(n.n(m),n("WEav")),f=(n.n(p),n("0xDb")),h=n("NYxO"),d=n("Au9i");n.n(d);window.Config={native_version:"1.0",server:"http://localhost:8080/lxt-server",appUrl:"https://chenjia.github.io/vue-app/demo/index.html",chcpUrl:"https://chenjia.github.io/vue-app/demo/chcp.json"},u.default.component(d.Actionsheet.name,d.Actionsheet),u.default.component(d.Badge.name,d.Badge),u.default.component(d.Button.name,d.Button),u.default.component(d.Cell.name,d.Cell),u.default.component(d.CellSwipe.name,d.CellSwipe),u.default.component(d.Checklist.name,d.Checklist),u.default.component(d.DatetimePicker.name,d.DatetimePicker),u.default.component(d.Field.name,d.Field),u.default.component(d.Header.name,d.Header),u.default.component(d.IndexList.name,d.IndexList),u.default.component(d.IndexSection.name,d.IndexSection),u.default.component(d.Loadmore.name,d.Loadmore),u.default.component(d.Popup.name,d.Popup),u.default.component(d.Progress.name,d.Progress),u.default.component(d.Radio.name,d.Radio),u.default.component(d.Range.name,d.Range),u.default.component(d.Search.name,d.Search),u.default.component(d.Spinner.name,d.Spinner),u.default.component(d.Swipe.name,d.Swipe),u.default.component(d.SwipeItem.name,d.SwipeItem),u.default.component(d.Switch.name,d.Switch),u.default.component(d.Tabbar.name,d.Tabbar),u.default.component(d.TabContainer.name,d.TabContainer),u.default.component(d.TabContainerItem.name,d.TabContainerItem),u.default.component(d.TabItem.name,d.TabItem),u.default.config.productionTip=!1,window.utils=f.a,u.default.mixin({data:function(){return{screenWidth:document.documentElement.clientWidth,screenHeight:document.documentElement.clientHeight}},methods:a()({go:function(t){this.$router.push(t)},back:function(){s.a.goBack()}},n.i(h.a)({toggleHeader:"TOGGLE_HEADER",toggleFooter:"TOGGLE_FOOTER",toggleLoading:"TOGGLE_LOADING"}))}),new u.default({el:"#app",router:s.a,store:l.a,template:"<App/>",components:{App:r.a}}),c.a.attach(document.body)},P25B:function(t,e,n){"use strict";e.a=[{name:"video",path:"video",meta:{login:!1,hasFooter:!1},component:function(t){n.e(15).then(function(){return t(n("AmbE"))}.bind(null,n)).catch(n.oe)}}]},QNKx:function(t,e,n){"use strict";e.a=[{name:"login",path:"login",meta:{login:!1,hasFooter:!0},component:function(t){n.e(16).then(function(){t(n("NaOX")),n.e(2).then(function(){n("h6qm")}).catch(n.oe)}.bind(null,n)).catch(n.oe)}}]},Qynr:function(t,e){},RN31:function(t,e,n){"use strict";e.a=[{name:"chart",path:"chart",meta:{login:!1,hasFooter:!1},component:function(t){n.e(0).then(function(){return t(n("M+8D"))}.bind(null,n)).catch(n.oe)}}]},RTGF:function(t,e,n){"use strict";e.a=[{name:"lock",path:"lock",meta:{login:!1,hasFooter:!1},component:function(t){n.e(6).then(function(){return t(n("PMpZ"))}.bind(null,n)).catch(n.oe)}}]},Thh0:function(t,e,n){"use strict";var o=n("mvHQ"),a=n.n(o),i=n("YtJ0"),c=(n("TuU3"),n("Au9i")),u=(n.n(c),{getVersionInfo:function(t){window.chcp&&chcp.getVersionInfo(function(e,n){t(e,n)})},fetchUpdate:function(){var t=this;window.chcp&&(i.a.commit("TOGGLE_POPUP",{visible:!0,text:"正在检测新版本"}),chcp.getVersionInfo(function(e,o){chcp.fetchUpdate(function(e,u){i.a.commit("TOGGLE_POPUP",{visible:!0,text:"正在下载新版本..."});var r=JSON.parse(u.config);r.native_version!=window.Config.native_version?(i.a.commit("TOGGLE_POPUP",{visible:!0,text:"当前版本过低，请安装最新版本"}),alert("当前版本过低，请安装最新版本！"),window.open(Config.appUrl)):e?2==e.code?i.a.commit("TOGGLE_POPUP",{visible:!0,text:"已经是最新版本",duration:1e3}):(i.a.commit("TOGGLE_POPUP",{visible:!0,text:"更新包获取失败",duration:3e3}),alert(a()(e))):r.release!=o.currentWebVersion&&(n.i(c.MessageBox)("版本提示（"+r.release+"）",r.description).then(function(e){t.installUpdate(r,o)}),setTimeout(function(){document.querySelector(".mint-msgbox-message").style.textAlign="left"}))},{"config-file":Config.chcpUrl})}))},installUpdate:function(t,e){i.a.commit("TOGGLE_POPUP",{visible:!0,text:"正在安装新版本"}),chcp.installUpdate(function(t){t?(i.a.commit("TOGGLE_POPUP",{visible:!0,text:"更新包安装失败",duration:3e3}),alert(a()(t))):(i.a.commit("UPDATE_VERSION",e.currentWebVersion),i.a.commit("TOGGLE_POPUP",{visible:!0,text:"已经更新为最新版本",duration:1e3}))})}});document.addEventListener("deviceready",function(){},!1),e.a=u},TuU3:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__=__webpack_require__("mvHQ"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__),cache={set:function(t,e){"string"==typeof e?localStorage.setItem(t,e):localStorage.setItem(t,__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(e))},get:function get(key){var value=localStorage.getItem(key);if(value&&("{"==value.substr(0,1)||"["==value.substr(0,1)))try{value=eval("("+value+")")}catch(t){console.log("error in get cache key:"+key+", value:"+value)}return value},removeItem:function(t){localStorage.removeItem(t)},clear:function(){localStorage.clear()}};__webpack_exports__.a=cache},"Vr/b":function(t,e,n){"use strict";e.a=[{name:"setting",path:"setting",meta:{login:!1,hasFooter:!0},component:function(t){n.e(12).then(function(){t(n("1Gtm"))}.bind(null,n)).catch(n.oe)}},{name:"about",path:"about",meta:{login:!1,hasFooter:!0},component:function(t){n.e(13).then(function(){t(n("cEc9"))}.bind(null,n)).catch(n.oe)}}]},WEav:function(t,e){},YaEn:function(t,e,n){"use strict";var o=n("Gu7T"),a=n.n(o),i=n("7+uW"),c=n("/ocq"),u=n("YtJ0"),r=n("QNKx"),s=n("roEk"),l=n("5dKJ"),m=n("RN31"),p=n("B17L"),f=n("+tBs"),h=n("lteJ"),d=n("RTGF"),g=n("u9Kv"),_=n("oz5U"),b=n("0dS3"),v=n("IqcW"),T=n("8RzN"),E=n("P25B"),O=n("Vr/b");i.default.use(c.a),c.a.prototype.goBack=function(){this.isBack=!0,window.history.go(-1)};var G=new c.a({routes:[{path:"/",redirect:"/page/login"},{path:"/page",component:function(t){n.e(14).then(function(){return t(n("Xk10"))}.bind(null,n)).catch(n.oe)},children:[].concat(a()(r.a),a()(s.a),a()(l.a),a()(m.a),a()(p.a),a()(f.a),a()(h.a),a()(d.a),a()(g.a),a()(_.a),a()(b.a),a()(v.a),a()(T.a),a()(E.a),a()(O.a))}]});G.beforeEach(function(t,e,n){u.a.commit("TOGGLE_HEADER",0!=t.meta.hasHeader),u.a.commit("TOGGLE_FOOTER",0!=t.meta.hasFooter),u.a.commit("TOGGLE_TABS",{flag:1==t.meta.hasTabs,tab:t.name}),0==t.meta.login||u.a.state.common.user?n():(u.a.commit("TOGGLE_POPUP",{visible:!0,text:"请先登录！",duration:3e3}),n("/page/login"))}),G.afterEach(function(t,e){var n=document.querySelector(".loader-box");-1===n.className.indexOf("fadeOut")&&(n.className+=" fadeOut",setTimeout(function(){n.style.display="none"},500))}),e.a=G},YtJ0:function(t,e,n){"use strict";var o=n("7+uW"),a=n("NYxO"),i=n("C9LJ");o.default.use(a.c),e.a=new a.c.Store({modules:{common:i.a}})},"d8/S":function(t,e){},jg9f:function(t,e,n){"use strict";var o={modal:function(t){var e;return{afterOpen:function(){e=document.scrollingElement.scrollTop,document.body.classList.add("modal-open"),document.body.style.top=-e+"px"},beforeClose:function(){document.body.classList.remove("modal-open"),document.scrollingElement.scrollTop=e}}}()};e.a=o},lteJ:function(t,e,n){"use strict";e.a=[{name:"tab",path:"tab",meta:{login:!1,hasFooter:!1},component:function(t){n.e(8).then(function(){return t(n("sVk2"))}.bind(null,n)).catch(n.oe)}}]},o99s:function(t,e,n){"use strict";var o=n("Dd8w"),a=n.n(o),i=n("NYxO"),c=n("YtJ0");e.a={name:"app",data:function(){return{transitionName:"animate-in",tab:c.a.state.common.ui.tab||"home",tabs:[{id:"home",icon:"fa-home",text:"首页",url:"home"},{id:"contact",icon:"fa-address-book-o",text:"联系人",url:"contact"},{id:"message",icon:"fa-envelope-o",text:"消息",url:"message"},{id:"setting",icon:"fa-cog",text:"设置",url:"setting"}]}},computed:a()({},n.i(i.b)(["hasHeader","hasTabs","hasFooter","fixFooter","isLoading"])),watch:{"$store.state.common.ui.tab":function(t){this.go({name:t})}},mounted:function(){}}},oz5U:function(t,e,n){"use strict";e.a=[{name:"loading",path:"loading",meta:{login:!1,hasFooter:!1},component:function(t){n.e(7).then(function(){return t(n("hGVa"))}.bind(null,n)).catch(n.oe)}}]},roEk:function(t,e,n){"use strict";e.a=[{name:"home",path:"home",meta:{login:!1,hasFooter:!1,hasTabs:!0},component:function(t){n.e(2).then(function(){return t(n("h6qm"))}.bind(null,n)).catch(n.oe),setTimeout(function(){n.e(5).then(function(){n("F3mG")}).catch(n.oe),n.e(0).then(function(){n("M+8D")}).catch(n.oe),n.e(3).then(function(){n("T5Y6")}).catch(n.oe),n.e(11).then(function(){n("+/HG")}).catch(n.oe),n.e(4).then(function(){n("A6/F")}).catch(n.oe),n.e(1).then(function(){n("BeRe")}).catch(n.oe),n.e(10).then(function(){n("X5+7")}).catch(n.oe),n.e(7).then(function(){n("hGVa")}).catch(n.oe),n.e(6).then(function(){n("PMpZ")}).catch(n.oe),n.e(9).then(function(){n("t1kT")}).catch(n.oe),n.e(8).then(function(){n("sVk2")}).catch(n.oe)},500)}}]},u9Kv:function(t,e,n){"use strict";e.a=[{name:"calendar",path:"calendar",meta:{login:!1,hasFooter:!1},component:function(t){n.e(5).then(function(){return t(n("F3mG"))}.bind(null,n)).catch(n.oe)}}]},wJE3:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"slide-up",mode:"out-in"}},[n("mt-header",{directives:[{name:"show",rawName:"v-show",value:t.hasHeader,expression:"hasHeader"}],staticStyle:{position:"absolute",top:"0",width:"100%"}})],1),t._v(" "),n("router-view"),t._v(" "),n("transition",{attrs:{name:"slide-y",mode:"out-in"}},[n("mt-tabbar",{directives:[{name:"show",rawName:"v-show",value:t.hasTabs,expression:"hasTabs"}],attrs:{fixed:""},model:{value:t.$store.state.common.ui.tab,callback:function(e){t.$set(t.$store.state.common.ui,"tab",e)},expression:"$store.state.common.ui.tab"}},t._l(t.tabs,function(e,o){return n("mt-tab-item",{key:o,attrs:{id:e.id}},[n("i",{staticClass:"fa",class:e.icon,staticStyle:{"font-size":"24px"},attrs:{slot:"icon"},slot:"icon"}),t._v("\n        "+t._s(e.text)+"\n      ")])}))],1),t._v(" "),n("mt-popup",{staticStyle:{width:"100%",height:"50px","line-height":"50px",color:"#fff","text-align":"center",background:"rgba(0,0,0,0.5)"},attrs:{closeOnClickModal:!1,position:"top",modal:!0},model:{value:t.$store.state.common.ui.popupTop,callback:function(e){t.$set(t.$store.state.common.ui,"popupTop",e)},expression:"$store.state.common.ui.popupTop"}},[t._v("\n    "+t._s(t.$store.state.common.ui.popupText)+"\n  ")])],1)},a=[],i={render:o,staticRenderFns:a};e.a=i}},["NHnr"]);