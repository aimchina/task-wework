(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-itemdetail-index"],{"04c5":function(t,i,e){"use strict";var n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("3c4e")),s=n(e("c463")),o=e("8da4"),c=n(e("9784")),d=n(e("46a8")),r=(e("b0ba"),{data:function(){return{current:0,active:999999,isLocked:999999,accessToken:"64e9275246c6545a3b5d3ad060fe4c516f44d556",appsercert:"MTExMTEx",x:"x",y:"y",tid:"",TabList:[],list:[],mission_content:""}},computed:{},methods:{tabsChange:function(t){this.current=t},active1:function(t){console.log(t),this.active=t,this.isLocked=t},feiactive1:function(t){this.active=!t},godetail:function(t){uni.navigateTo({url:"/pages/missiondetail/index?id="+t})},getlist:function(){var t=this,i="access-token="+this.accessToken+"&appsercert="+this.appsercert+"&tid="+this.tid;this.sha=(0,d.default)(i),console.log(this.sha),this.$axios(this.$baseUrl.missionlist,{"access-token":this.accessToken,sign:this.sha,tid:this.tid}).then(function(i){console.log(i),uni.hideLoading(),t.list=i.data.teamtask,t.TabList=i.data.teamtask,t.$nextTick(function(){t.getel()})},function(t){console.log(t)})},addmission:function(t){console.log(t);var i="access-token="+this.accessToken+"&appsercert="+this.appsercert+"&t_time_id="+t+"&t_taskContent="+this.mission_content+"&t_panel_id="+this.tid;this.sha=(0,d.default)(i),console.log(this.sha),this.$axios({url:this.$baseUrl.addmission.url+"?access-token="+this.accessToken+"&sign="+this.sha,method:"post"},{t_time_id:t,t_taskContent:this.mission_content,t_panel_id:this.tid}).then(function(t){console.log(t)},function(t){console.log(t)})},getel:function(){for(var t=this,i=0;i<this.TabList.length;i++)e(this.$el.querySelector("#list"+i),i);function e(i,e){new c.default(i,{onUpdate:function(n){var a=n.newIndex,s=n.oldIndex,o=i.children[a],c=i.children[s];console.log(o),i.removeChild(o),a>s?i.insertBefore(o,c):i.insertBefore(o,c.nextSibling);var d=t.list[e].task.splice(s,1);t.list[e].task.splice(a,0,d[0])},group:"shared",animation:150})}}},mounted:function(){},components:{Tabs:s.default,TabPane:a.default,SlickItem:o.SlickItem,SlickList:o.SlickList},onLoad:function(t){this.tid=t.id},created:function(){uni.showLoading({title:"加载中"});var t=uni.getStorageSync("login");t&&(this.accessToken=t.access_token,this.appsercert=t.appsercert),this.getlist()}});i.default=r},"66ae":function(t,i,e){"use strict";e.r(i);var n=e("d1e4"),a=e("d8ae");for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);e("7630");var o,c=e("f0c5"),d=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"57a44ec6",null,!1,n["a"],o);i["default"]=d.exports},7630:function(t,i,e){"use strict";var n=e("f4dc"),a=e.n(n);a.a},bc2a:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"*[data-v-57a44ec6]{margin:0;padding:0}.box1[data-v-57a44ec6]{width:100%;height:100%;background:#fff;box-sizing:border-box;padding:%?40?%}.content[data-v-57a44ec6]{width:100%;height:%?1200?%;background:#f3f3f3;\n\t\t/* border-radius: 10upx; */box-sizing:border-box;overflow:hidden;padding:%?10?% 0;position:relative}.content span[data-v-57a44ec6]{display:block;width:100%;\n\t\t/* padding: 0 30upx 0; */padding-left:%?30?%;box-sizing:border-box;font-size:%?34?%;line-height:%?80?%;overflow:hidden}.content span .sp[data-v-57a44ec6]{float:right;width:%?80?%;height:%?60?%;\n\t\t/* margin-top: 10upx; */margin:%?10?% %?30?% 0 0}\n\n\t/* \t.content span .sp image {\n\t\t;\n\t} */.list[data-v-57a44ec6]{width:100%;height:%?1072?%;padding:0 %?30?%;padding-bottom:%?10?%;box-sizing:border-box;overflow:hidden;position:relative;\n\t\t/* white-space: nowrap; */overflow-x:hidden;overflow-y:scroll}.list-item[data-v-57a44ec6]{width:100%;list-style:none;background-color:#fff;font-size:%?30?%;margin:%?10?% 0;box-sizing:border-box;padding:%?20?%;overflow:hidden;border-radius:%?10?%;word-wrap:break-word}.list_add[data-v-57a44ec6]{width:100%;height:%?80?%;box-sizing:border-box!important;text-align:center;line-height:%?80?%;background:#fff;color:#000;font-size:%?28?%;padding:0 %?40?%;position:fixed;bottom:%?40?%;left:0;box-sizing:border-box}.btn[data-v-57a44ec6]{width:100%;background:#f3f3f3;z-index:99}.active_add[data-v-57a44ec6]{width:100%;height:%?120?%;padding:0 %?40?%!important;box-sizing:border-box!important;text-align:center;line-height:%?80?%;background:#fff;color:#b0b0b0;font-size:%?28?%;padding:0 %?40?%;position:fixed;bottom:%?30?%;left:0;box-sizing:border-box;overflow:hidden}.active_add .act_btn[data-v-57a44ec6]{width:100%;height:100%;background:#f3f3f3;padding:%?8?% %?30?% 0;box-sizing:border-box}.ipt uni-textarea[data-v-57a44ec6]{width:100%;height:%?70?%;background:#fff;padding:%?10?%;box-sizing:border-box}.ipt .btn_left[data-v-57a44ec6]{float:left;width:50%;height:%?50?%;line-height:%?50?%;text-align:center;background:#f3f3f3;color:red}.ipt .btn_right[data-v-57a44ec6]{float:right;width:50%;height:%?50?%;line-height:%?50?%;text-align:center;background:#f3f3f3;color:red}",""])},d1e4:function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("Tabs",{attrs:{TabList:t.TabList,currentTab:t.current},on:{tabs:function(i){arguments[0]=i=t.$handleEvent(i),t.tabsChange.apply(void 0,arguments)}}},t._l(t.list,function(i,n){return e("TabPane",{key:n},[e("v-uni-view",{staticClass:"box1"},[e("v-uni-view",{staticClass:"content"},[e("span",[t._v(t._s(i.name)+" "+t._s(i.task.length)),e("span",{staticClass:"sp"},[e("v-uni-image",{staticStyle:{width:"60upx",height:"60upx"},attrs:{src:"/static/images/more2.png",mode:""}})],1)]),e("v-uni-view",{staticClass:"list1"},[e("ul",{staticClass:"list",attrs:{id:"list"+n}},t._l(i.task,function(i,n){return e("li",{key:n,staticClass:"list-item",attrs:{index:n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.godetail(i.t_id)}}},[t._v(t._s(i.t_taskContent))])}),0)])],1),e("v-uni-view",{staticClass:"list_add",style:{left:750*n+"upx"}},[e("v-uni-view",{staticClass:"btn",on:{focus:function(i){arguments[0]=i=t.$handleEvent(i),t.isLocked},click:function(i){arguments[0]=i=t.$handleEvent(i),t.active1(n)}}},[t._v("添加任务")])],1),t.active==n?e("v-uni-view",{staticClass:"active_add ipt",style:{left:750*n+"upx"}},[e("v-uni-view",{staticClass:"act_btn"},[e("v-uni-textarea",{attrs:{value:"",placeholder:""},model:{value:t.mission_content,callback:function(i){t.mission_content=i},expression:"mission_content"}}),e("v-uni-view",{staticClass:"add_btn"},[e("v-uni-view",{staticClass:"btn_left",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.feiactive1(n)}}},[t._v("取消")]),e("v-uni-view",{staticClass:"btn_right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addmission(i.alias_id)}}},[t._v("确定")])],1)],1)],1):t._e()],1)],1)}),1)},s=[];e.d(i,"b",function(){return a}),e.d(i,"c",function(){return s}),e.d(i,"a",function(){return n})},d8ae:function(t,i,e){"use strict";e.r(i);var n=e("04c5"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);i["default"]=a.a},f4dc:function(t,i,e){var n=e("bc2a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("535a8e61",n,!0,{sourceMap:!1,shadowMode:!1})}}]);