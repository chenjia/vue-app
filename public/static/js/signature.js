webpackJsonp([8],{EMRS:function(t,e,i){"use strict";var n=i("yviK"),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.a={name:"signaturePad",props:{sigOption:{type:Object,default:function(){return{backgroundColor:"rgb(255,255,255)",penColor:"rgb(0, 0, 0)"}}},w:{type:String,default:"100%"},h:{type:String,default:"100%"},clearOnResize:{type:Boolean,default:!1},waterMark:{type:Object,default:function(){return{}}},disabled:{type:Boolean,default:!1}},data:function(){return{sig:function(){},option:{backgroundColor:"rgb(255,255,255)",penColor:"rgb(0, 0, 0)"},uid:""}},watch:{disabled:function(t){var e=this;t?e.sig.off():e.sig.on()}},created:function(){var t=this;this.uid="canvas"+t._uid;var e=Object.keys(t.sigOption),i=!0,n=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done);i=!0){var r=a.value;t.option[r]=t.sigOption[r]}}catch(t){n=!0,o=t}finally{try{!i&&s.return&&s.return()}finally{if(n)throw o}}},methods:{draw:function(){function t(){var t;e.isEmpty()||(t=e.save());var n=Math.max(window.devicePixelRatio||1,1);i.width=i.offsetWidth*n,i.height=i.offsetHeight*n,i.getContext("2d").scale(n,n),e.clear(),!e.clearOnResize&&void 0!==t&&e.fromDataURL(t),Object.keys(e.waterMark).length&&e.addWaterMark(e.waterMark)}var e=this,i=document.getElementById(e.uid);e.sig=new n.a(i,e.option),window.addEventListener("resize",t),t()},clear:function(){this.sig.clear()},getDataURL:function(t){return this.sig.toDataURL(t||"image/png")},save:function(t){this.$emit("save",this.getDataURL(t))},fromDataURL:function(t){this.sig.fromDataURL(t)},isEmpty:function(){return this.sig.isEmpty()},undo:function(){var t=this,e=t.sig.toData();e&&(e.pop(),t.sig.fromData(e))},addWaterMark:function(t){var e=this;if("[object Object]"!=Object.prototype.toString.call(t))throw new Error("Expected Object, got "+(void 0===t?"undefined":o(t))+".");var i=document.getElementById(e.uid),n={text:t.text||"",x:t.x||20,y:t.y||20,sx:t.sx||40,sy:t.sy||40},a=i.getContext("2d");a.font=t.font||"20px sans-serif",a.fillStyle=t.fillStyle||"#333",a.strokeStyle=t.strokeStyle||"#333","all"==t.style?(a.fillText(n.text,n.x,n.y),a.strokeText(n.text,n.sx,n.sx)):"stroke"==t.style?a.strokeText(n.text,n.sx,n.sx):a.fillText(n.text,n.x,n.y),e.sig._isEmpty=!1}},mounted:function(){var t=this;this.$nextTick().then(function(){t.draw()})}}},Lux2:function(t,e,i){"use strict";function n(t){i("hXYg")}var o=i("YtbI"),a=i("jPtX"),s=i("VU/8"),r=n,c=s(o.a,a.a,!1,r,null,null);e.a=c.exports},NRIf:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pd-sm",style:{width:t.w,height:t.h},on:{touchmove:function(t){t.preventDefault()}}},[i("canvas",{staticClass:"canvas",staticStyle:{width:"100%",height:"100%","border-radius":"4px",border:"1px dashed #ccc","box-shadow":"0 0 10px #ccc"},attrs:{id:t.uid,"data-uid":t.uid,disabled:t.disabled}}),t._v(" "),i("div",{staticClass:"flexable",staticStyle:{position:"absolute",left:"0",bottom:"10px",width:"100%","justify-content":"space-around"}},[i("mt-button",{attrs:{size:"small"},on:{click:function(e){return t.undo()}}},[i("i",{staticClass:"fa fa-fw fa-undo"}),t._v(" "),i("span",[t._v("撤销")])]),t._v(" "),i("mt-button",{attrs:{type:"danger",size:"small"},on:{click:function(e){return t.clear()}}},[i("i",{staticClass:"fa fa-fw fa-times"}),t._v(" "),i("span",[t._v("清除")])]),t._v(" "),i("mt-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.save()}}},[i("i",{staticClass:"fa fa-fw fa-check"}),t._v(" "),i("span",[t._v("确定")])])],1)])},o=[],a={render:n,staticRenderFns:o};e.a=a},SDtk:function(t,e,i){e=t.exports=i("FZ+f")(!1),e.push([t.i,".zoomDialog{width:100%;height:100%}",""])},YtbI:function(t,e,i){"use strict";e.a={name:"zoom",props:["show","title","dialog"],data:function(){return{showDialog:null}},watch:{show:function(t){this.showDialog=t},showDialog:function(t,e){t?document.querySelector("meta[name=viewport]").setAttribute("content","width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes"):document.querySelector("meta[name=viewport]").setAttribute("content","width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"),this.$emit("update:show",t)}},mounted:function(){this.dialog?this.showDialog=this.show:document.querySelector("meta[name=viewport]").setAttribute("content","width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes")}}},ZiMz:function(t,e,i){"use strict";var n=i("EMRS"),o=i("NRIf"),a=i("VU/8"),s=a(n.a,o.a,!1,null,null,null);e.a=s.exports},hXYg:function(t,e,i){var n=i("SDtk");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("7f3c875c",n,!0,{})},jPtX:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.dialog?i("mt-popup",{staticStyle:{width:"100%",height:"100%"},attrs:{"popup-transition":"popup-fade"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[t._t("default")],2):t._e(),t._v(" "),t.dialog?t._e():i("div",[t._t("default")],2)],1)},o=[],a={render:n,staticRenderFns:o};e.a=a},"r+1k":function(t,e,i){"use strict";var n=i("ZiMz"),o=i("Lux2");e.a={name:"signature",components:{signaturePad:n.a,zoom:o.a},data:function(){return{popupPreview:!1,dataURL:""}},methods:{preview:function(){var t=this.$refs.signaturePad.getDataURL();this.dataURL=t,this.popupPreview=!0,console.log(t)},save:function(t){alert(t)}},mounted:function(){}}},ro03:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("r+1k"),o=i("ulDc"),a=i("VU/8"),s=a(n.a,o.a,!1,null,null,null);e.default=s.exports},ulDc:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mt-header",{attrs:{title:"电子签名"}},[i("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.back},slot:"left"},[i("span",[t._v("返回")])]),t._v(" "),i("mt-button",{attrs:{slot:"right"},on:{click:t.preview},slot:"right"},[i("span",[t._v("预览")])])],1),t._v(" "),i("signaturePad",{ref:"signaturePad",attrs:{w:t.screenWidth-10+"px",h:t.screenHeight-100+"px"},on:{save:t.save}}),t._v(" "),i("zoom",{attrs:{title:"预览签名",dialog:!0,show:t.popupPreview},on:{"update:show":function(e){t.popupPreview=e}}},[i("mt-button",{staticStyle:{position:"absolute",top:"10px",right:"10px"},attrs:{type:"primary",size:"small",plain:""},on:{click:function(e){t.popupPreview=!t.popupPreview}}},[i("i",{staticClass:"fa fa-close"})]),t._v(" "),i("div",{staticStyle:{"overflow-y":"auto"},style:{height:t.screenHeight+"px"}},[i("img",{staticStyle:{width:"100%"},attrs:{src:t.dataURL}})])],1)],1)},o=[],a={render:n,staticRenderFns:o};e.a=a},yviK:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,i=0,n=null,o=void 0,a=void 0,s=void 0,r=function(){i=Date.now(),n=null,o=t.apply(a,s),n||(a=null,s=[])};return function(){var c=Date.now(),h=e-(c-i);a=this;for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];return s=u,h<=0||h>e?(n&&(clearTimeout(n),n=null),i=c,o=t.apply(a,s),n||(a=null,s=[])):n||(n=window.setTimeout(r,h)),o}}var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=function(){function t(e,i,o){n(this,t),this.x=e,this.y=i,this.time=o||Date.now()}return a(t,[{key:"distanceTo",value:function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}},{key:"velocityFrom",value:function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}]),t}(),r=function(){function t(e,i,o,a,s,r){n(this,t),this.startPoint=e,this.control2=i,this.control1=o,this.endPoint=a,this.startWidth=s,this.endWidth=r}return a(t,[{key:"length",value:function(){for(var t=0,e=void 0,i=void 0,n=0;n<=10;n+=1){var o=n/10,a=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),s=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(n>0){var r=a-e,c=s-i;t+=Math.sqrt(r*r+c*c)}e=a,i=s}return t}},{key:"point",value:function(t,e,i,n,o){return e*(1-t)*(1-t)*(1-t)+3*i*(1-t)*(1-t)*t+3*n*(1-t)*t*t+o*t*t*t}}],[{key:"fromPoints",value:function(e,i){var n=this.calculateControlPoints(e[0],e[1],e[2]).c2,o=this.calculateControlPoints(e[1],e[2],e[3]).c1;return new t(e[1],n,o,e[2],i.start,i.end)}},{key:"calculateControlPoints",value:function(t,e,i){var n=t.x-e.x,o=t.y-e.y,a=e.x-i.x,r=e.y-i.y,c={x:(t.x+e.x)/2,y:(t.y+e.y)/2},h={x:(e.x+i.x)/2,y:(e.y+i.y)/2},l=Math.sqrt(n*n+o*o),u=Math.sqrt(a*a+r*r),d=c.x-h.x,v=c.y-h.y,f=u/(l+u),p={x:h.x+d*f,y:h.y+v*f},m=e.x-p.x,y=e.y-p.y;return{c1:new s(c.x+m,c.y+y),c2:new s(h.x+m,h.y+y)}}}]),t}(),c=function(){function t(e){var i=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,t),this.canvas=e,this.options=a,this._handleMouseDown=function(t){1===t.which&&(i._mouseButtonDown=!0,i._strokeBegin(t))},this._handleMouseMove=function(t){i._mouseButtonDown&&i._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&i._mouseButtonDown&&(i._mouseButtonDown=!1,i._strokeEnd(t))},this._handleTouchStart=function(t){if(t.preventDefault(),1===t.targetTouches.length){var e=t.changedTouches[0];i._strokeBegin(e)}},this._handleTouchMove=function(t){t.preventDefault();var e=t.targetTouches[0];i._strokeMoveUpdate(e)},this._handleTouchEnd=function(t){if(t.target===i.canvas){t.preventDefault();var e=t.changedTouches[0];i._strokeEnd(e)}},this.velocityFilterWeight=a.velocityFilterWeight||.7,this.minWidth=a.minWidth||.5,this.maxWidth=a.maxWidth||2.5,this.throttle="throttle"in a?a.throttle:16,this.minDistance="minDistance"in a?a.minDistance:5,this.throttle?this._strokeMoveUpdate=o(t.prototype._strokeUpdate,this.throttle):this._strokeMoveUpdate=t.prototype._strokeUpdate,this.dotSize=a.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=a.penColor||"black",this.backgroundColor=a.backgroundColor||"rgba(0,0,0,0)",this.onBegin=a.onBegin,this.onEnd=a.onEnd,this._ctx=e.getContext("2d"),this.clear(),this.on()}return a(t,[{key:"clear",value:function(){var t=this._ctx,e=this.canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0}},{key:"fromDataURL",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2],o=new Image,a=i.ratio||window.devicePixelRatio||1,s=i.width||this.canvas.width/a,r=i.height||this.canvas.height/a;this._reset(),o.onload=function(){e._ctx.drawImage(o,0,0,s,r),n&&n()},o.onerror=function(t){n&&n(t)},o.src=t,this._isEmpty=!1}},{key:"toDataURL",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"image/png",e=arguments[1];switch(t){case"image/svg+xml":return this._toSVG();default:return this.canvas.toDataURL(t,e)}}},{key:"on",value:function(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}},{key:"off",value:function(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}},{key:"isEmpty",value:function(){return this._isEmpty}},{key:"fromData",value:function(t){var e=this;this.clear(),this._fromData(t,function(t){var i=t.color,n=t.curve;return e._drawCurve({color:i,curve:n})},function(t){var i=t.color,n=t.point;return e._drawDot({color:i,point:n})}),this._data=t}},{key:"toData",value:function(){return this._data}},{key:"_strokeBegin",value:function(t){var e={color:this.penColor,points:[]};this._data.push(e),this._reset(),this._strokeUpdate(t),"function"==typeof this.onBegin&&this.onBegin(t)}},{key:"_strokeUpdate",value:function(t){var e=t.clientX,i=t.clientY,n=this._createPoint(e,i),o=this._data[this._data.length-1],a=o.points,s=a.length>0&&a[a.length-1],r=!!s&&n.distanceTo(s)<=this.minDistance,c=o.color;if(!s||!s||!r){var h=this._addPoint(n);s?h&&this._drawCurve({color:c,curve:h}):this._drawDot({color:c,point:n}),a.push({time:n.time,x:n.x,y:n.y})}}},{key:"_strokeEnd",value:function(t){this._strokeUpdate(t),"function"==typeof this.onEnd&&this.onEnd(t)}},{key:"_handlePointerEvents",value:function(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}},{key:"_handleMouseEvents",value:function(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}},{key:"_handleTouchEvents",value:function(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}},{key:"_reset",value:function(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}},{key:"_createPoint",value:function(t,e){var i=this.canvas.getBoundingClientRect();return new s(t-i.left,e-i.top,(new Date).getTime())}},{key:"_addPoint",value:function(t){var e=this._lastPoints;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);var i=this._calculateCurveWidths(e[1],e[2]),n=r.fromPoints(e,i);return e.shift(),n}return null}},{key:"_calculateCurveWidths",value:function(t,e){var i=this.velocityFilterWeight*e.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,n=this._strokeWidth(i),o={end:n,start:this._lastWidth};return this._lastVelocity=i,this._lastWidth=n,o}},{key:"_strokeWidth",value:function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}},{key:"_drawCurveSegment",value:function(t,e,i){var n=this._ctx;n.moveTo(t,e),n.arc(t,e,i,0,2*Math.PI,!1),this._isEmpty=!1}},{key:"_drawCurve",value:function(t){var e=t.color,i=t.curve,n=this._ctx,o=i.endWidth-i.startWidth,a=2*Math.floor(i.length());n.beginPath(),n.fillStyle=e;for(var s=0;s<a;s+=1){var r=s/a,c=r*r,h=c*r,l=1-r,u=l*l,d=u*l,v=d*i.startPoint.x;v+=3*u*r*i.control1.x,v+=3*l*c*i.control2.x,v+=h*i.endPoint.x;var f=d*i.startPoint.y;f+=3*u*r*i.control1.y,f+=3*l*c*i.control2.y,f+=h*i.endPoint.y;var p=i.startWidth+h*o;this._drawCurveSegment(v,f,p)}n.closePath(),n.fill()}},{key:"_drawDot",value:function(t){var e=t.color,i=t.point,n=this._ctx,o="function"==typeof this.dotSize?this.dotSize():this.dotSize;n.beginPath(),this._drawCurveSegment(i.x,i.y,o),n.closePath(),n.fillStyle=e,n.fill()}},{key:"_fromData",value:function(t,e,i){var n=!0,o=!1,a=void 0;try{for(var r,c=t[Symbol.iterator]();!(n=(r=c.next()).done);n=!0){var h=r.value,l=h.color,u=h.points;if(u.length>1)for(var d=0;d<u.length;d+=1){var v=u[d],f=new s(v.x,v.y,v.time);this.penColor=l,0===d&&this._reset();var p=this._addPoint(f);p&&e({color:l,curve:p})}else this._reset(),i({color:l,point:u[0]})}}catch(t){o=!0,a=t}finally{try{!n&&c.return&&c.return()}finally{if(o)throw a}}}},{key:"_toSVG",value:function(){var t=this,e=this._data,i=Math.max(window.devicePixelRatio||1,1),n=this.canvas.width/i,o=this.canvas.height/i,a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("width",this.canvas.width.toString()),a.setAttribute("height",this.canvas.height.toString()),this._fromData(e,function(t){var e=t.color,i=t.curve,n=document.createElement("path");if(!(isNaN(i.control1.x)||isNaN(i.control1.y)||isNaN(i.control2.x)||isNaN(i.control2.y))){var o="M "+i.startPoint.x.toFixed(3)+","+i.startPoint.y.toFixed(3)+" C "+i.control1.x.toFixed(3)+","+i.control1.y.toFixed(3)+" "+i.control2.x.toFixed(3)+","+i.control2.y.toFixed(3)+" "+i.endPoint.x.toFixed(3)+","+i.endPoint.y.toFixed(3);n.setAttribute("d",o),n.setAttribute("stroke-width",(2.25*i.endWidth).toFixed(3)),n.setAttribute("stroke",e),n.setAttribute("fill","none"),n.setAttribute("stroke-linecap","round"),a.appendChild(n)}},function(e){var i=e.color,n=e.point,o=document.createElement("circle"),s="function"==typeof t.dotSize?t.dotSize():t.dotSize;o.setAttribute("r",s.toString()),o.setAttribute("cx",n.x.toString()),o.setAttribute("cy",n.y.toString()),o.setAttribute("fill",i),a.appendChild(o)});var s='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+n+" "+o+'" width="'+n+'" height="'+o+'">',r=a.innerHTML;if(void 0===r){var c=document.createElement("dummy"),h=a.childNodes;c.innerHTML="";for(var l=0;l<h.length;l+=1)c.appendChild(h[l].cloneNode(!0));r=c.innerHTML}var u=s+r+"</svg>";return"data:image/svg+xml;base64,"+btoa(u)}}]),t}();e.a=c}});