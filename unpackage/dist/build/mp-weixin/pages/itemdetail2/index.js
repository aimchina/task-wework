(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/itemdetail2/index"],{"103e":function(t,e,n){"use strict";(function(t){n("75f0"),n("921b");s(n("66fd"));var e=s(n("2a56"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"2a56":function(t,e,n){"use strict";n.r(e);var s=n("dd74"),o=n("a236");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("b147");var a,c=n("f0c5"),l=Object(c["a"])(o["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],a);e["default"]=l.exports},"93cc":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;a(n("6535"));var s=a(n("98d4")),o=a(n("69c7")),i=n("8852");n("d929");function a(t){return t&&t.__esModule?t:{default:t}}var c=function(){return n.e("components/wiszx-tabs/tabPane").then(n.bind(null,"e055"))},l=function(){return n.e("components/wiszx-tabs/tabs").then(n.bind(null,"02d7"))},u=function(){return n.e("common/vendor").then(n.t.bind(null,"638e",7))},r=function(){return n.e("common/vendor").then(n.t.bind(null,"1100",7))},h=function(){return n.e("components/loading/loading22").then(n.bind(null,"4134"))},d=function(){return n.e("components/loading/loading13").then(n.bind(null,"af77"))},f=function(){return n.e("components/mehaotian-search/mehaotian-search").then(n.bind(null,"d8ef"))},g=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"7334"))},p={data:function(){return{current:0,active:999999,accessToken:"64e9275246c6545a3b5d3ad060fe4c516f44d556",appsercert:"MTExMTEx",x:"x",y:"y",tid:"",TabList:[],show:9999999999,dis:!0,windowHeight:"",webheight:"",list:[],mission_content:"",movecount:0,i:"",id:"",add_content:"",userInput:"",scrollHeight:"97%",Loadingindex:1e20,isShow_loading:!1,t_sortid:"",listIndex:99999999999,isDel:!1,iptval:"",mouldName:"",searchList:[],searchShow:!1}},computed:{},watch:{userInput:function(t){var e=this;console.log(t),t?setTimeout(function(){},100):setTimeout(function(){document.body.scrollIntoView(),e.scrollHeight="97%",e.webheight=e.windowHeight-340+"upx"},100)}},methods:{search:function(t){this.searchShow=!0,console.log(t);var e=this;if(t){var n="access-token="+e.accessToken+"&appsercert="+e.appsercert+"&tid="+e.tid+"&word = "+t;e.sha=(0,s.default)(n),console.log(e.sha),o.default.get(e.$baseUrl.missionlist.url+"?access-token="+e.accessToken+"&sign="+e.sha+"&tid="+e.tid+"&word="+t).then(function(t){console.log(t);var n=!0,s=!1,o=void 0;try{for(var i,a=t.data.teamtask[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var c=i.value,l=!0,u=!1,r=void 0;try{for(var h,d=c.task[Symbol.iterator]();!(l=(h=d.next()).done);l=!0){var f=h.value;console.log(f),e.searchList.push(f)}}catch(g){u=!0,r=g}finally{try{l||null==d.return||d.return()}finally{if(u)throw r}}}}catch(g){s=!0,o=g}finally{try{n||null==a.return||a.return()}finally{if(s)throw o}}}).catch(function(t){console.log(t)})}},touchMove:function(){document.getElementById("list1").addEventListener("touchmove",function(t){t.stopPropagation()},!1)},godetail:function(e){console.log(e),t.navigateTo({url:"/pages/missiondetail/index?id="+e})},iosInputFocus:function(){this.userInput=!0;var t=this;this.isIOS()?t.$refs.ipt[0].scrollIntoView(!1):(document.body.scrollIntoView(),this.scrollHeight="80%",this.webheight=this.windowHeight/2-240+"upx")},isIOS:function(){var t=window.navigator.userAgent.toLowerCase().indexOf("iphone")>-1,e=window.navigator.userAgent.toLowerCase().indexOf("ipad")>-1;return t||e},outInputFocus:function(){this.userInput=!1},tabsChange:function(t){this.current=t},active1:function(t){var e=this;console.log(t),this.active=t,this.$nextTick(function(){e.isfocus();var n=document.getElementById("itemList"+t);n.scrollTop=n.scrollHeight})},isfocus:function(){console.log(this.$refs.ipt),this.$refs.ipt[0].focus=!0},isfocus2:function(){console.log(this.$refs.ipt2),this.$refs.ipt2.focus=!0},isfocus3:function(t){var e=this;console.log(this.$refs),console.log(this.$refs.text[0]),setTimeout(function(){e.$refs.text[t].focus=!0},600)},feiactive1:function(t){this.active=9999999,this.webheight=this.windowHeight-240+"upx",this.userInput=!1,this.$nextTick(function(){var e=document.getElementById("itemList"+t);e.scrollTop=0})},isLockd:function(){},change:function(t){console.log("移动完成了");var e=this,n="access-token="+e.accessToken+"&appsercert="+e.appsercert+"&t_id="+e.t_sortid+"&t_sort=2";e.sha=(0,s.default)(n),console.log(e.sha),this.$axios({url:this.$baseUrl.draggable.url+"?access-token="+this.accessToken+"&sign="+this.sha,method:"post"},{t_id:e.t_sortid,t_sort:2}).then(function(t){console.log(t)},function(t){console.log(t)})},showDeleteButton:function(t){console.log("haha"),console.log(t),this.t_sortid=t},start:function(t){console.log(t)},end:function(){console.log("移动完成")},datadragEnd:function(){console.log("jajja")},goitem_detail:function(e){console.log(e),t.navigateTo({url:"/pages/missiondetail/index?id="+e})},getlist:function(){var e=this,n=this,i="access-token="+n.accessToken+"&appsercert="+n.appsercert+"&tid="+n.tid;n.sha=(0,s.default)(i),console.log(n.sha),o.default.get(n.$baseUrl.missionlist.url+"?access-token="+n.accessToken+"&sign="+n.sha+"&tid="+n.tid).then(function(n){if(console.log(n),e.isShow_loading=!1,void 0==n||""==n)t.showToast({title:"网络异常",icon:"none"});else{e.list=n.data.teamtask,e.TabList=n.data.teamtask;var s={title:""};setTimeout(function(){e.TabList=e.TabList.concat(s)},500)}}).catch(function(t){console.log(t)})},addmission:function(e,n){var o=this;if(this.mission_content){this.userInput=!1,this.webheight=this.windowHeight-240+"upx";var i={t_taskContent:this.mission_content};this.list[n].task=this.list[n].task.concat(i),this.Loadingindex=this.list[n].task.length-1;var a="access-token="+this.accessToken+"&appsercert="+this.appsercert+"&t_panel_id="+e+"&t_taskContent="+this.mission_content+"&t_projectId="+this.tid;this.sha=(0,s.default)(a),console.log(this.sha),this.$axios({url:this.$baseUrl.addmission.url+"?access-token="+this.accessToken+"&sign="+this.sha,method:"post"},{t_panel_id:e,t_taskContent:this.mission_content,t_projectId:this.tid}).then(function(e){console.log(e),o.$nextTick(function(){setTimeout(function(){var t=document.getElementById("itemList"+n);console.log(t),t.scrollTop=t.scrollHeight})}),o.mission_content="",e.data.t_taskContent?(o.feiactive1(n),o.list[n].task[o.list[n].task.length-1]=e.data,o.Loadingindex=99999999999999):t.showToast({title:e.data.msg,icon:"none"})},function(t){console.log(t)})}else t.showToast({title:"任务内容不能为空",icon:"none"})},more_list:function(t){console.log(t),this.listIndex=t},leave_list:function(){this.listIndex=9999999999999},choose_plate:function(t,e){var n=this;console.log("修改板块"),this.show=e;e=e;this.$nextTick(function(){n.isfocus3(e),setTimeout(function(){n.leave_list()},100)})},remove:function(t){this.show=9999999999,this.$refs.text[t].focus=!1},define:function(e,n){var o=this;this.$set(this.list[n],"name",this.iptval),this.remove(n);var i="access-token="+this.accessToken+"&appsercert="+this.appsercert+"&id="+e+"&name="+this.iptval;this.sha=(0,s.default)(i),t.request({url:"https://testapi.shiliucrm.com/v1/task/panels/"+e+"?access-token="+this.accessToken+"&sign="+this.sha,method:"PUT",data:{name:this.iptval},header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(t){console.log(t),o.getlist()}})},clkipt:function(t){console.log(t),this.iptval=t.detail.value},defineDel:function(t){this.isDel=t,this.listIndex=999999999},cancel:function(){this.isDel=!this.isDel},addtask:function(){var t=this;this.show=this.TabList.length,this.$nextTick(function(){t.isfocus2()})},define_add:function(){var e=this;this.mouldName||t.showToast({title:"请输入标题",icon:"none"});var n="access-token="+this.accessToken+"&appsercert="+this.appsercert+"&name="+this.mouldName+"&project_id="+this.tid;this.sha=(0,s.default)(n),console.log(this.sha),this.$axios({url:this.$baseUrl.addtaskmould.url+"?access-token="+this.accessToken+"&sign="+this.sha,method:"post"},{project_id:this.tid,name:this.mouldName}).then(function(t){console.log(t),t.data.name==e.mouldName&&(e.mouldName="",e.callOf(),e.getlist())},function(t){console.log(t)})},callOf:function(){this.show=99999999999999},del_plate:function(e){var n=this,o="access-token="+this.accessToken+"&appsercert="+this.appsercert+"&id="+e;this.sha=(0,s.default)(o),console.log(this.sha),this.$axios({url:this.$baseUrl.delPlate.url+e+"?access-token="+this.accessToken+"&sign="+this.sha,method:"delete"},{}).then(function(e){console.log(e),1==e.data.status?(n.isDel=!n.isDel,setTimeout(function(){t.showToast({title:e.data.msg,icon:"success"}),n.getlist()},500)):(n.isDel=!n.isDel,setTimeout(function(){t.showToast({title:e.data.msg,icon:"none"})},500))},function(t){console.log(t)})}},directives:{focus:{inserted:function(t){console.log(t),t.focus()}}},components:{Tabs:l,TabPane:c,SlickItem:SlickItem,SlickList:u,draggable:r,Loading22:h,Loading13:d,mSearch:f,uniPopup:g},onLoad:function(e){var n=this;document.addEventListener("touchmove",function(t){t.preventDefault()},!1),setTimeout(function(){new iScroll("itemList0",{hScroll:!1,hScrollbar:!1,vScrollbar:!1})},700),this.tid=e.id,t.getSystemInfo({success:function(t){n.windowHeight=2*t.windowHeight,n.webheight=n.windowHeight-340+"upx"}}),this.isShow_loading=!0},onShow:function(){document.title="handone",(0,i.ChangePageTitle)("handone");var e=t.getStorageSync("login");e&&(this.accessToken=e.access_token,this.appsercert=e.appsercert),this.getlist()},mounted:function(){console.log(document.body),document.body.ondrop=function(t){t.preventDefault(),t.stopPropagation()}}};e.default=p}).call(this,n("543d")["default"])},"99af":function(t,e,n){},a236:function(t,e,n){"use strict";n.r(e);var s=n("93cc"),o=n.n(s);for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);e["default"]=o.a},b147:function(t,e,n){"use strict";var s=n("99af"),o=n.n(s);o.a},dd74:function(t,e,n){"use strict";var s,o=function(){var t=this,e=t.$createElement,n=(t._self._c,{animation:100,delay:300,ghostClass:"ghostClass",dragClass:"dragClass",chosenClass:"sortable-chosen",scroll:!0,forceFallback:!1});t.$mp.data=Object.assign({},{$root:{a0:n}})},i=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return s})}},[["103e","common/runtime","common/vendor"]]]);