(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-addfile-index"],{1277:function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac6a");var o=n(i("5d73")),a=n(i("ed70")),r=i("8e97"),s=i("be4a"),c=new s,l={data:function(){return{start_slide_x:0,accessToken:"64e9275246c6545a3b5d3ad060fe4c516f44d556",appsercert:"MTExMTEx",btnWidth:0,id:"",startX:0,LastX:0,startTime:0,screenName:"",list:[],fileList:[],sha:"",uploadlist:[]}},computed:{Screen_width:function(){return uni.getSystemInfoSync().windowWidth}},directives:{isIphoneX:{bind:function(t,e){var i="ios",n=!1;"ios"===i&&window.screen.height&&(n=window.screen.height>750),n?t.setAttribute("style"," padding-bottom: 8vh !important;min-height: 8vh !important;"):"height"===e.value&&t.setAttribute("style"," padding-bottom: 11vh !important;min-height: 89vh !important;")},update:function(t,e){}}},methods:{previewImg:function(t){console.log(111),uni.previewImage({urls:t,longPressActions:{itemList:["预览","保存图片"],success:function(t){console.log("选中了第"+(t.tapIndex+1)+"个按钮,第"+(t.index+1)+"张图片")},fail:function(t){console.log(t.errMsg)}}})},getdetail:function(){var t=this,e="access-token="+this.accessToken+"&appsercert="+this.appsercert;this.sha=(0,a.default)(e),console.log(this.sha),this.$axios({url:this.$baseUrl.missiondetail.url+this.id+"?access-token="+this.accessToken+"&sign="+this.sha,method:"get"}).then(function(e){uni.hideLoading(),console.log(e),t.detail=e.data.task,t.list=t.detail.upload,console.log(t.list);var i=!0,n=!1,a=void 0;try{for(var r,s=(0,o.default)(t.list);!(i=(r=s.next()).done);i=!0){var c=r.value;console.log(c),t.uploadlist.push(c.path)}}catch(p){n=!0,a=p}finally{try{i||null==s.return||s.return()}finally{if(n)throw a}}for(var l=new Date,u=l.getFullYear(),d=l.getMonth()+1,f=l.getDate(),h=0;h<t.list.length;h++)t.$set(t.list[h],"slide_x",0),t.$set(t.list[h],"nowtime",u+"-"+d+"-"+f)},function(t){console.log(t)})},removeFile:function(t,e){var i=this;this.$axios({url:this.$baseUrl.delFile.url+t,method:"delete"}).then(function(t){console.log(t),"删除成功"==t.data.status&&(i.getdetail(),setTimeout(function(){uni.showToast({title:t.data.status,icon:"none"})},500))},function(t){console.log(t)})},touchStart:function(t,e){var i=this;this.startTime=t.timeStamp,this.start_slide_x=this.list[e].slide_x,uni.createSelectorQuery().selectAll(".group-btn").boundingClientRect().exec(function(t){null!=t[0]&&(i.btnWidth=-1*t[0][e].width)}),this.startX=t.touches[0].pageX,this.lastX=this.startX,this.list.forEach(function(t,i){i!==e&&(t.slide_x=0)})},touchMove:function(t,e){var i=t.touches[0].pageX,n=i-this.lastX,o=this.list[e].slide_x+n;o<=0&&o>=this.btnWidth&&(this.list[e].slide_x=o),this.lastX=i},touchEnd:function(t,e){var i=10,n=t.timeStamp,o=this.startX-this.lastX;Math.abs(n-this.startTime)>200&&(i=this.btnWidth/-2),this.list[e].slide_x=o>i?this.btnWidth:o<-1*i?0:this.start_slide_x},recover:function(t,e){console.log(t),this.list[t].slide_x=0,uni.previewImage({current:this.uploadlist[t],urls:this.uploadlist})}},mounted:function(){var t=this,e=document.createElement("input");e.type="file",e.onchange=function(e){uni.showLoading({title:"添加中"}),t.list=[],t.filename=e.target.files[0].name;var i=e.target.files[0],n=new FormData;t.fileList.push(i),n.append("t_id",t.id),t.fileList.forEach(function(t,e){n.append(e,t)}),c.post(t.$baseUrl.addFile.url+"?access-token="+t.accessToken,n).then(function(i){console.log(i),i.data.length>0&&(t.getdetail(),t.fileList=[],setTimeout(function(){uni.showToast({title:"添加成功",icon:"success"}),uni.hideLoading()},500),e.target.value="")})},this.$refs.input.$el.appendChild(e)},onLoad:function(t){this.id=t.id,uni.showLoading({title:"加载中"});var e=uni.getStorageSync("login");e&&(this.accessToken=e.access_token,this.appsercert=e.appsercert),console.log(t),this.getdetail()},onShow:function(){document.title="handone",(0,r.ChangePageTitle)("handone")}};e.default=l},"1bfb":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'*[data-v-4b875406]{margin:0;padding:0}#app[data-v-4b875406],.wx-pages[data-v-4b875406],body[data-v-4b875406],html[data-v-4b875406]{padding:0;margin:0;height:100%;overflow:hidden;-webkit-overflow-scrolling:touch}uni-page-body[data-v-4b875406]{background:#f3f3f3}.btn[data-v-4b875406]{width:100%;height:%?80?%;border-top:%?2?% solid #ccc;position:fixed;bottom:0;left:0;font-size:%?28?%;text-align:center;line-height:%?80?%;background:#fff}.input[data-v-4b875406]{float:right;width:%?500?%;height:%?80?%;\n\t/* background: #00A0E9; */color:red}.input uni-input[data-v-4b875406]{background:red}.btn .sp1[data-v-4b875406]{display:block;width:100%;height:%?80?%;line-height:%?80?%;text-align:center;color:#b0b0b0;margin-top:%?10?%;float:left;margin:0 auto;border-radius:%?6?%}.btn .input[data-v-4b875406]{position:absolute;right:0;top:0;opacity:0;-ms-filter:"alpha(opacity=0)";width:100%;height:40px}.btn .input uni-input[data-v-4b875406]{position:absolute;right:0;top:0;opacity:0;-ms-filter:"alpha(opacity=0)";width:%?600?%!important;height:60px}.index[data-v-4b875406]{background:#f8f8f8}.list-box[data-v-4b875406]{padding:%?20?% 0}.container_of_slide[data-v-4b875406]{width:100%;overflow:hidden}.slide_list[data-v-4b875406]{-webkit-transition:all .1s;transition:all .1s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;min-width:200%;height:%?160?%}.now-message-info[data-v-4b875406]{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;\n\t/* justify-content: space-between; */font-size:16px;clear:both;height:%?160?%;padding:0 %?34?%;margin-bottom:%?20?%;background:#fff}.group-btn[data-v-4b875406],.now-message-info[data-v-4b875406]{float:left}.group-btn[data-v-4b875406]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?160?%;min-width:%?100?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.group-btn .btn-div[data-v-4b875406]{height:%?160?%;color:#fff;text-align:center;padding:0 %?50?%;font-size:%?34?%;line-height:%?160?%}.group-btn .top[data-v-4b875406]{background-color:#c4c7cd}.group-btn .removeM[data-v-4b875406]{background-color:#ff3b32}.icon-circle[data-v-4b875406]{\n\t/* background: #3396fb; */border-radius:100%;width:%?100?%;height:%?100?%;line-height:%?100?%;text-align:center;color:#fff;font-weight:700;font-size:20px;float:left}.icon-circle uni-image[data-v-4b875406]{width:100%;height:100%}.list-right[data-v-4b875406]{float:left;margin-left:%?25?%;margin-right:%?30?%}.list-right-1[data-v-4b875406]{float:right;color:#a9a9a9}.list-title[data-v-4b875406]{width:%?350?%;line-height:1.5;overflow:hidden;margin-bottom:%?10?%;color:#333;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.list-detail[data-v-4b875406]{width:%?350?%;font-size:14px;color:#a9a9a9;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.button-box[data-v-4b875406]{box-sizing:border-box;position:fixed;left:0;bottom:0;width:100%;z-index:998;background:#f8f8f8}.btn-sub[data-v-4b875406]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;float:left;width:100%;height:%?100?%;background:#f8f8f8;color:#7fb2ff}.btn-plusempty[data-v-4b875406]{width:%?110?%;height:%?110?%;background:#007bfa;position:fixed;bottom:%?50?%;right:%?20?%;border-radius:100%;overflow:hidden;text-align:center;line-height:%?110?%}.empty[data-v-4b875406]{color:#999}.plusempty-img[data-v-4b875406]{width:%?50?%;height:%?50?%;margin-top:%?30?%}.scan-box[data-v-4b875406]{display:block;position:fixed;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.3);z-index:99999}.scan-item[data-v-4b875406]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;margin:0 auto;width:80%;height:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:1}.scan-content[data-v-4b875406]{position:relative;width:%?400?%;height:%?500?%;background:#fff;border-radius:%?20?%}.scan-icon[data-v-4b875406]{position:absolute;top:%?-50?%;left:%?150?%;width:%?100?%;height:%?100?%;border-radius:100%;box-sizing:border-box;background:#fff;padding:%?20?%}.scan-icon-img[data-v-4b875406]{width:100%;height:100%}.scan-text[data-v-4b875406]{position:absolute;bottom:%?40?%;left:0;width:100%;text-align:center;font-size:14px}.scan-share[data-v-4b875406]{width:100%;height:100%}.scan-img[data-v-4b875406]{width:%?300?%;height:%?300?%;margin:auto;display:block;position:absolute;top:%?80?%;left:%?50?%;z-index:99}.scan-btn[data-v-4b875406]{top:%?-30?%;left:auto;right:%?-30?%;bottom:auto;position:absolute;width:%?64?%;height:%?64?%;border-radius:50%;z-index:99999;display:-webkit-box;display:-webkit-flex;display:flex}.uni-list-cell-hover[data-v-4b875406]{background-color:#eee}.bottom-btn-hover[data-v-4b875406]{background:#0564c7!important}.iphoneX[data-v-4b875406]{\n\t/* padding-bottom: env(safe-area-inset-bottom); */\n\t/* padding-bottom: 100upx; */\n\t/* box-sizing: border-box; */}body.?%PAGE?%[data-v-4b875406]{background:#f3f3f3}',""])},2349:function(t,e,i){"use strict";var n=i("2af9"),o=i.n(n);o.a},"2af9":function(t,e,i){var n=i("1bfb");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("8fe70678",n,!0,{sourceMap:!1,shadowMode:!1})},"37f8":function(t,e,i){"use strict";var n,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-uni-view",{staticClass:"list-box"},t._l(t.list,function(e,n){return i("v-uni-view",{key:n,staticClass:"container_of_slide"},[i("v-uni-view",{staticClass:"slide_list",style:{transform:"translate3d("+e.slide_x+"px, 0, 0)"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.recover(n,e.path)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart(e,n)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchEnd(e,n)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchMove(e,n)}}},[i("v-uni-view",{staticClass:"now-message-info",style:{width:t.Screen_width+"px"},attrs:{"hover-class":"uni-list-cell-hover"}},[i("v-uni-view",{staticClass:"icon-circle"},[i("v-uni-image",{attrs:{src:e.path,mode:""}})],1),i("v-uni-view",{staticClass:"list-right"},[e.name?i("v-uni-view",{staticClass:"list-title"},[t._v(t._s(e.name))]):t._e()],1),i("v-uni-view",{staticClass:"list-right-1"},[t._v(t._s(e.nowtime))])],1),i("v-uni-view",{staticClass:"group-btn"},[i("v-uni-view",{staticClass:"removeM btn-div",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.removeFile(e.id,n)}}},[t._v("删除")])],1),i("v-uni-view",{staticStyle:{clear:"both"}})],1)],1)}),1),i("v-uni-view",{directives:[{name:"isIphoneX",rawName:"v-isIphoneX"}],staticClass:"btn iphoneX"},[i("span",{staticClass:"sp1"},[t._v("+添加附件")]),i("v-uni-view",{ref:"input",staticClass:"input"})],1)],1)},a=[];i.d(e,"b",function(){return o}),i.d(e,"c",function(){return a}),i.d(e,"a",function(){return n})},"469f":function(t,e,i){i("6c1c"),i("1654"),t.exports=i("7d7b")},"5d73":function(t,e,i){t.exports=i("469f")},"7d7b":function(t,e,i){var n=i("e4ae"),o=i("7cd6");t.exports=i("584a").getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return n(e.call(t))}},be4a:function(t,e,i){(function(e,i){t.exports=i()})(0,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.i=function(t){return t},i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e,i){"use strict";var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports={type:function(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()},isObject:function(t,e){return e?"object"===this.type(t):t&&"object"===("undefined"===typeof t?"undefined":n(t))},isFormData:function(t){return"undefined"!==typeof FormData&&t instanceof FormData},trim:function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},encode:function(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")},formatParams:function(t){var e="",i=!0,o=this;if("object"!=("undefined"===typeof t?"undefined":n(t)))return t;function a(t,n){var r=o.encode,s=o.type(t);if("array"==s)t.forEach(function(t,e){a(t,n+"%5B%5D")});else if("object"==s)for(var c in t)a(t[c],n?n+"%5B"+r(c)+"%5D":r(c));else i||(e+="&"),i=!1,e+=n+"="+r(t)}return a(t,""),e},merge:function(t,e){for(var i in e)t.hasOwnProperty(i)?this.isObject(e[i],1)&&this.isObject(t[i],1)&&this.merge(t[i],e[i]):t[i]=e[i];return t}}},,function(t,e,i){var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=i(0),r="undefined"!==typeof document,s=function(){function t(e){function i(t){var e,i;function n(){t.p=e=i=null}a.merge(t,{lock:function(){e||(t.p=new Promise(function(t,n){e=t,i=n}))},unlock:function(){e&&(e(),n())},clear:function(){i&&(i("cancel"),n())}})}o(this,t),this.engine=e||XMLHttpRequest,this.default=this;var n=this.interceptors={response:{use:function(t,e){this.handler=t,this.onerror=e}},request:{use:function(t){this.handler=t}}},r=n.request,s=n.response;i(s),i(r),this.config={method:"GET",baseURL:"",headers:{},timeout:0,params:{},parseJson:!0,withCredentials:!1}}return n(t,[{key:"request",value:function(t,e,i){var n=this,o=new this.engine,s="Content-Type",c=s.toLowerCase(),l=this.interceptors,u=l.request,d=l.response,f=u.handler,h=new Promise(function(l,h){function p(t){return t&&t.then&&t.catch}function b(t,e){t?t.then(function(){e()}):e()}function g(i){e=i.body,t=a.trim(i.url);var n=a.trim(i.baseURL||"");if(t||!r||n||(t=location.href),0!==t.indexOf("http")){var u="/"===t[0];if(!n&&r){var f=location.pathname.split("/");f.pop(),n=location.protocol+"//"+location.host+(u?"":f.join("/"))}if("/"!==n[n.length-1]&&(n+="/"),t=n+(u?t.substr(1):t),r){var g=document.createElement("a");g.href=t,t=g.href}}var v=a.trim(i.responseType||""),m="GET"===i.method,w=a.type(e),x=i.params||{};m&&"object"===w&&(x=a.merge(e,x)),x=a.formatParams(x);var y=[];x&&y.push(x),m&&e&&"string"===w&&y.push(e),y.length>0&&(t+=(-1===t.indexOf("?")?"?":"&")+y.join("&")),o.open(i.method,t);try{o.withCredentials=!!i.withCredentials,o.timeout=i.timeout||0,"stream"!==v&&(o.responseType=v)}catch(S){}var k=i.headers[s]||i.headers[c],_="application/x-www-form-urlencoded";for(var j in a.trim((k||"").toLowerCase())===_?e=a.formatParams(e):a.isFormData(e)||-1===["object","array"].indexOf(a.type(e))||(_="application/json;charset=utf-8",e=JSON.stringify(e)),k||m||(i.headers[s]=_),i.headers)if(j===s&&a.isFormData(e))delete i.headers[j];else try{o.setRequestHeader(j,i.headers[j])}catch(S){}function C(t,e,n){b(d.p,function(){if(t){n&&(e.request=i);var o=t.call(d,e,Promise);e=void 0===o?e:o}p(e)||(e=Promise[0===n?"resolve":"reject"](e)),e.then(function(t){l(t)}).catch(function(t){h(t)})})}function T(t){t.engine=o,C(d.onerror,t,-1)}function E(t,e){this.message=t,this.status=e}o.onload=function(){var t=o.response||o.responseText;t&&i.parseJson&&-1!==(o.getResponseHeader(s)||"").indexOf("json")&&!a.isObject(t)&&(t=JSON.parse(t));var e=o.responseHeaders;if(!e){e={};var n=(o.getAllResponseHeaders()||"").split("\r\n");n.pop(),n.forEach(function(t){if(t){var i=t.split(":")[0];e[i]=o.getResponseHeader(i)}})}var r=o.status,c=o.statusText,l={data:t,headers:e,status:r,statusText:c};if(a.merge(l,o._response),r>=200&&r<300||304===r)l.engine=o,l.request=i,C(d.handler,l,0);else{var u=new E(c,r);u.response=l,T(u)}},o.onerror=function(t){T(new E(t.msg||"Network Error",0))},o.ontimeout=function(){T(new E("timeout [ "+o.timeout+"ms ]",1))},o._options=i,setTimeout(function(){o.send(m?null:e)},0)}a.isObject(t)&&(i=t,t=i.url),i=i||{},i.headers=i.headers||{},b(u.p,function(){a.merge(i,n.config);var o=i.headers;o[s]=o[s]||o[c]||"",delete o[c],i.body=e||i.body,t=a.trim(t||""),i.method=i.method.toUpperCase(),i.url=t;var r=i;f&&(r=f.call(u,i,Promise)||i),p(r)||(r=Promise.resolve(r)),r.then(function(t){t===i?g(t):l(t)},function(t){h(t)})})});return h.engine=o,h}},{key:"all",value:function(t){return Promise.all(t)}},{key:"spread",value:function(t){return function(e){return t.apply(null,e)}}}]),t}();s.default=s,["get","post","put","patch","head","delete"].forEach(function(t){s.prototype[t]=function(e,i,n){return this.request(e,i,a.merge({method:t},n))}}),["lock","unlock","clear"].forEach(function(t){s.prototype[t]=function(){this.interceptors.request[t]()}}),t.exports=s}])})},c8fd:function(t,e,i){"use strict";i.r(e);var n=i("37f8"),o=i("ffcb");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("2349");var r,s=i("f0c5"),c=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"4b875406",null,!1,n["a"],r);e["default"]=c.exports},ffcb:function(t,e,i){"use strict";i.r(e);var n=i("1277"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a}}]);