webpackJsonp([12],{"1Gtm":function(t,_,i){"use strict";function e(t){i("W+z3")}Object.defineProperty(_,"__esModule",{value:!0});var n=i("YfJp"),s=i("gQTY"),a=i("VU/8"),o=e,l=a(n.a,s.a,!1,o,"data-v-b3600cbe",null);_.default=l.exports},GVZe:function(t,_,i){_=t.exports=i("FZ+f")(!1),_.push([t.i,".list-group[data-v-b3600cbe]{padding-top:15px}",""])},"W+z3":function(t,_,i){var e=i("GVZe");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i("rjj0")("21f91709",e,!0,{})},YfJp:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_axios__=__webpack_require__("mtWM"),__WEBPACK_IMPORTED_MODULE_0_axios___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__),__WEBPACK_IMPORTED_MODULE_1_mint_ui__=__webpack_require__("Au9i"),__WEBPACK_IMPORTED_MODULE_1_mint_ui___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mint_ui__);__webpack_exports__.a={name:"setting",data:function(){return{}},methods:{logout:function(){var t=this;__WEBPACK_IMPORTED_MODULE_1_mint_ui__.MessageBox.confirm("确定要退出登录吗?","确认退出").then(function(_){t.go("login")},function(t){console.log(t)})},debug:function debug(){window.eruda||__WEBPACK_IMPORTED_MODULE_0_axios___default()({method:"get",url:"http://cdn.jsdelivr.net/npm/eruda",responseType:"application/script"}).then(function(response){eval(response.data),eruda.init()})}},mounted:function(){}}},ZBJ4:function(t,_,i){t.exports=i.p+"static/img/logo.png"},gQTY:function(t,_,i){"use strict";var e=function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("div",{staticStyle:{position:"absolute","overflow-y":"auto",background:"#eee",width:"100%",height:"100%"}},[e("mt-header",{attrs:{title:"设置"}},[e("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.back},slot:"left"},[t._v("返回")])],1),t._v(" "),e("div",{staticClass:"list-group"},[e("mt-cell",{attrs:{"is-link":""}},[e("span",{attrs:{slot:"title"},slot:"title"},[t._v("账号：admin")]),t._v(" "),e("img",{attrs:{slot:"icon",src:i("ZBJ4"),width:"24",height:"24"},slot:"icon"})])],1),t._v(" "),e("div",{staticClass:"list-group"},[e("mt-cell",{attrs:{title:"账号与安全","is-link":""}})],1),t._v(" "),e("div",{staticClass:"list-group"},[e("mt-cell",{attrs:{title:"新消息通知","is-link":""}}),t._v(" "),e("mt-cell",{attrs:{title:"隐私","is-link":""}}),t._v(" "),e("mt-cell",{attrs:{title:"通用","is-link":""}}),t._v(" "),e("mt-cell",{attrs:{title:"调试","is-link":""},nativeOn:{click:function(_){t.debug()}}})],1),t._v(" "),e("div",{staticClass:"list-group"},[e("mt-cell",{attrs:{title:"关于app","is-link":""},nativeOn:{click:function(_){t.go("about")}}})],1),t._v(" "),e("div",{staticStyle:{padding:"20px"}},[e("mt-button",{attrs:{type:"danger",size:"large"},on:{click:function(_){t.logout()}}},[t._v("退出登录")])],1)],1)},n=[],s={render:e,staticRenderFns:n};_.a=s}});