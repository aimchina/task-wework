(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-itemdetail-index"],{"2d9f":function(t,i,n){"use strict";var e=n("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e(n("5cce")),s=e(n("58c7")),o=n("57a7"),d=e(n("b149")),c=e(n("6d0d")),r=(n("5c67"),{data:function(){return{current:0,active:999999,isLocked:999999,accessToken:"64e9275246c6545a3b5d3ad060fe4c516f44d556",appsercert:"MTExMTEx",x:"x",y:"y",tid:"",TabList:[],list:[],mission_content:""}},computed:{},methods:{tabsChange:function(t){this.current=t},active1:function(t){console.log(t),this.active=t,this.isLocked=t},feiactive1:function(t){this.active=!t},godetail:function(t){uni.navigateTo({url:"/pages/missiondetail/index?id="+t})},getlist:function(){var t=this,i="access-token="+this.accessToken+"&appsercert="+this.appsercert+"&tid="+this.tid;this.sha=(0,c.default)(i),console.log(this.sha),this.$axios(this.$baseUrl.missionlist,{"access-token":this.accessToken,sign:this.sha,tid:this.tid}).then(function(i){console.log(i),uni.hideLoading(),t.list=i.data.teamtask,t.TabList=i.data.teamtask,t.$nextTick(function(){t.getel()})},function(t){console.log(t)})},addmission:function(t){console.log(t);var i="access-token="+this.accessToken+"&appsercert="+this.appsercert+"&t_time_id="+t+"&t_taskContent="+this.mission_content+"&t_panel_id="+this.tid;this.sha=(0,c.default)(i),console.log(this.sha),this.$axios({url:this.$baseUrl.addmission.url+"?access-token="+this.accessToken+"&sign="+this.sha,method:"post"},{t_time_id:t,t_taskContent:this.mission_content,t_panel_id:this.tid}).then(function(t){console.log(t)},function(t){console.log(t)})},getel:function(){for(var t=this,i=0;i<this.TabList.length;i++)n(this.$el.querySelector("#list"+i),i);function n(i,n){new d.default(i,{onUpdate:function(e){var a=e.newIndex,s=e.oldIndex,o=i.children[a],d=i.children[s];console.log(o),i.removeChild(o),a>s?i.insertBefore(o,d):i.insertBefore(o,d.nextSibling);var c=t.list[n].task.splice(s,1);t.list[n].task.splice(a,0,c[0])},group:"shared",animation:150})}}},mounted:function(){},components:{Tabs:s.default,TabPane:a.default,SlickItem:o.SlickItem,SlickList:o.SlickList},onLoad:function(t){this.tid=t.id},created:function(){uni.showLoading({title:"加载中"});var t=uni.getStorageSync("login");t&&(this.accessToken=t.access_token,this.appsercert=t.appsercert),this.getlist()}});i.default=r},"395f":function(t,i,n){"use strict";var e,a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("Tabs",{attrs:{TabList:t.TabList,currentTab:t.current},on:{tabs:function(i){arguments[0]=i=t.$handleEvent(i),t.tabsChange.apply(void 0,arguments)}}},t._l(t.list,function(i,e){return n("TabPane",{key:e},[n("v-uni-view",{staticClass:"box1"},[n("v-uni-view",{staticClass:"content"},[n("span",[t._v(t._s(i.name)+" "+t._s(i.task.length)),n("span",{staticClass:"sp"},[n("v-uni-image",{staticStyle:{width:"60upx",height:"60upx"},attrs:{src:"/static/images/more2.png",mode:""}})],1)]),n("v-uni-view",{staticClass:"list1"},[n("ul",{staticClass:"list",attrs:{id:"list"+e}},t._l(i.task,function(i,e){return n("li",{key:e,staticClass:"list-item",attrs:{index:e},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.godetail(i.t_id)}}},[t._v(t._s(i.t_taskContent))])}),0)])],1),n("v-uni-view",{staticClass:"list_add",style:{left:750*e+"upx"}},[n("v-uni-view",{staticClass:"btn",on:{focus:function(i){arguments[0]=i=t.$handleEvent(i),t.isLocked},click:function(i){arguments[0]=i=t.$handleEvent(i),t.active1(e)}}},[t._v("添加任务")])],1),t.active==e?n("v-uni-view",{staticClass:"active_add ipt",style:{left:750*e+"upx"}},[n("v-uni-view",{staticClass:"act_btn"},[n("v-uni-textarea",{attrs:{value:"",placeholder:""},model:{value:t.mission_content,callback:function(i){t.mission_content=i},expression:"mission_content"}}),n("v-uni-view",{staticClass:"add_btn"},[n("v-uni-view",{staticClass:"btn_left",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.feiactive1(e)}}},[t._v("取消")]),n("v-uni-view",{staticClass:"btn_right",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.addmission(i.alias_id)}}},[t._v("确定")])],1)],1)],1):t._e()],1)],1)}),1)},s=[];n.d(i,"b",function(){return a}),n.d(i,"c",function(){return s}),n.d(i,"a",function(){return e})},"617b":function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,"*[data-v-4aab8bd2]{margin:0;padding:0}.box1[data-v-4aab8bd2]{width:100%;height:100%;background:#fff;box-sizing:border-box;padding:%?40?%}.content[data-v-4aab8bd2]{width:100%;height:%?1200?%;background:#f3f3f3;\n\t\t/* border-radius: 10upx; */box-sizing:border-box;overflow:hidden;padding:%?10?% 0;position:relative}.content span[data-v-4aab8bd2]{display:block;width:100%;\n\t\t/* padding: 0 30upx 0; */padding-left:%?30?%;box-sizing:border-box;font-size:%?34?%;line-height:%?80?%;overflow:hidden}.content span .sp[data-v-4aab8bd2]{float:right;width:%?80?%;height:%?60?%;\n\t\t/* margin-top: 10upx; */margin:%?10?% %?30?% 0 0}\n\n\t/* \t.content span .sp image {\n\t\t;\n\t} */.list[data-v-4aab8bd2]{width:100%;height:%?1072?%;padding:0 %?30?%;padding-bottom:%?10?%;box-sizing:border-box;overflow:hidden;position:relative;\n\t\t/* white-space: nowrap; */overflow-x:hidden;overflow-y:scroll}.list-item[data-v-4aab8bd2]{width:100%;list-style:none;background-color:#fff;font-size:%?30?%;margin:%?10?% 0;box-sizing:border-box;padding:%?20?%;overflow:hidden;border-radius:%?10?%;word-wrap:break-word}.list_add[data-v-4aab8bd2]{width:100%;height:%?80?%;box-sizing:border-box!important;text-align:center;line-height:%?80?%;background:#fff;color:#000;font-size:%?28?%;padding:0 %?40?%;position:fixed;bottom:%?40?%;left:0;box-sizing:border-box}.btn[data-v-4aab8bd2]{width:100%;background:#f3f3f3;z-index:99}.active_add[data-v-4aab8bd2]{width:100%;height:%?120?%;padding:0 %?40?%!important;box-sizing:border-box!important;text-align:center;line-height:%?80?%;background:#fff;color:#b0b0b0;font-size:%?28?%;padding:0 %?40?%;position:fixed;bottom:%?30?%;left:0;box-sizing:border-box;overflow:hidden}.active_add .act_btn[data-v-4aab8bd2]{width:100%;height:100%;background:#f3f3f3;padding:%?8?% %?30?% 0;box-sizing:border-box}.ipt uni-textarea[data-v-4aab8bd2]{width:100%;height:%?70?%;background:#fff;padding:%?10?%;box-sizing:border-box}.ipt .btn_left[data-v-4aab8bd2]{float:left;width:50%;height:%?50?%;line-height:%?50?%;text-align:center;background:#f3f3f3;color:red}.ipt .btn_right[data-v-4aab8bd2]{float:right;width:50%;height:%?50?%;line-height:%?50?%;text-align:center;background:#f3f3f3;color:red}",""])},"930b":function(t,i,n){var e=n("617b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("d3547330",e,!0,{sourceMap:!1,shadowMode:!1})},a03f:function(t,i,n){"use strict";var e=n("930b"),a=n.n(e);a.a},a4fe:function(t,i,n){"use strict";n.r(i);var e=n("395f"),a=n("d53e");for(var s in a)"default"!==s&&function(t){n.d(i,t,function(){return a[t]})}(s);n("a03f");var o,d=n("f0c5"),c=Object(d["a"])(a["default"],e["b"],e["c"],!1,null,"4aab8bd2",null,!1,e["a"],o);i["default"]=c.exports},d53e:function(t,i,n){"use strict";n.r(i);var e=n("2d9f"),a=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(i,t,function(){return e[t]})}(s);i["default"]=a.a}}]);