webpackJsonp([20],{"+/HG":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("ZztL"),s=a("W0Gs"),n=a("C7Lr"),i=n(r.a,s.a,!1,null,null,null);t.default=i.exports},W0Gs:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("mt-header",{attrs:{title:"联系人"}},[a("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:e.back},slot:"left"},[a("span",[e._v("返回")])])],1),e._v(" "),a("div",{staticClass:"mint-searchbar"},[a("div",{staticClass:"mint-searchbar-inner"},[a("i",{staticClass:"mintui mintui-search"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKey,expression:"searchKey"}],staticClass:"mint-searchbar-core",staticStyle:{padding:"0 5px"},attrs:{type:"search",placeholder:"输入姓名搜索"},domProps:{value:e.searchKey},on:{input:function(t){t.target.composing||(e.searchKey=t.target.value)}}})]),e._v(" "),a("a",{staticClass:"mint-searchbar-cancel",staticStyle:{display:"none"}},[e._v("取消")])]),e._v(" "),e.ready?a("mt-index-list",{ref:"indexList"},e._l(e.contacts,function(t,r){return a("mt-index-section",{key:r,attrs:{index:t.group}},e._l(t.items,function(r,s){return a("mt-cell",{key:t.group+s,attrs:{href:"tel:"+r.phoneNumbers[0].value,title:e.getName(r),value:r.phoneNumbers[0].value}})}))})):e._e()],1)},s=[],n={render:r,staticRenderFns:s};t.a=n},ZztL:function(e,t,a){"use strict";t.a={name:"contact",data:function(){return{ready:!1,searchKey:"",items:[{displayName:"张三",phoneNumbers:[{value:"13333333331"}]},{displayName:"张三2",phoneNumbers:[{value:"13333333331"}]},{displayName:"张三3",phoneNumbers:[{value:"13333333331"}]},{displayName:"阿毛",phoneNumbers:[{value:"13333333331"}]},{displayName:"adai",phoneNumbers:[{value:"13333333331"}]},{displayName:"aa",phoneNumbers:[{value:"13333333331"}]},{displayName:"查",phoneNumbers:[{value:"13333333331"}]}]}},computed:{contacts:function(){var e=[];console.log(this.items);var t=this.pySegSort(this.items);if(this.searchKey)for(var a=0;a<t.length;a++){var r=t[a],s=[],n=!0,i=!1,o=void 0;try{for(var l,u=r.items[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){var c=l.value,m=this.getName(c);-1!=m.toLowerCase().indexOf(this.searchKey.toLowerCase())&&s.push(c)}}catch(e){i=!0,o=e}finally{try{!n&&u.return&&u.return()}finally{if(i)throw o}}s.length&&e.push({group:r.group,items:s})}else e=t;return console.log(e),e}},methods:{getName:function(e){return e.displayName||e.name.formatted},pySegSort:function(e){var t=this,a=[].concat(e);if(!String.prototype.localeCompare)return null;var r="ABCDEFGHJKLMNOPQRSTWXYZ".split(""),s="阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split(""),n=[];return r.forEach(function(e,r){for(var i=[],o=a.length-1;o>=0;o--){var l=a[o],u=t.getName(l);u.substr(0,1).toUpperCase()!==e?(!s[r]||s[r].localeCompare(u)<=0)&&-1==u.localeCompare(s[r+1])&&(i.push(l),a.splice(o,1)):(i.push(l),a.splice(o,1))}i.length&&(i.sort(function(e,a){var r=t.getName(e),s=t.getName(a);return r.substr(0,1).charCodeAt()<150||s.substr(0,1).charCodeAt()<150?r.substr(0,1).charCodeAt()>s.substr(0,1).charCodeAt():r.localeCompare(s)}),n.push({group:e,items:i}))}),n}},mounted:function(){var e=this;setTimeout(function(){e.ready=!0},100),setTimeout(function(){e.items.push({displayName:"陈佳",phoneNumbers:[{value:"18702189255"}]})},200);var t=this;document.addEventListener("deviceready",function(){function e(e){t.items=e,console.log("Found "+e.length+" contacts.")}function a(e){alert("onError!")}var r=["displayName","name","phoneNumbers","emails","address"],s={filter:"",multiple:!0};navigator.contacts.find(r,e,a,s)},!1)}}}});