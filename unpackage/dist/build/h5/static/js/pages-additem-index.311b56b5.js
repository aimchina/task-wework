(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-additem-index"],{"0ea3":function(n,t,e){"use strict";var i=e("df8a"),a=e.n(i);a.a},"1aee":function(n,t,e){"use strict";var i=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("28a5");var a=i(e("98d4")),s=i(e("d49b")),o=e("8852"),u=i(e("645f")),r={data:function(){return{accessToken:"64e9275246c6545a3b5d3ad060fe4c516f44d556",appsercert:"MTExMTEx",imgList:[],title:"",sha:"",idList:[],starttime:"请设置",endtime:"请设置",startYear:"2000",tabIndex:"",pickVal:[],mould_name:"默认模板",moulde_id:1}},components:{wPicker:s.default},methods:{submit:function(){var n=this;if(this.title){var t=this.idList.join();if(this.starttime>this.endtime)uni.showToast({title:"开始时间不能大于截止时间",icon:"none"});else if(0!=this.idList.length){var e="access-token="+this.accessToken+"&appsercert="+this.appsercert+"&teamname="+this.title+"&team_user="+t;this.sha=(0,a.default)(e),console.log(this.sha),this.$axios({url:this.$baseUrl.addtask.url+"?access-token="+this.accessToken+"&sign="+this.sha,method:"post"},{"access-token":this.accessToken,sign:this.sha,teamname:this.title,team_user:t,start_date:this.starttime,end_date:this.endtime,template_id:this.moulde_id}).then(function(t){console.log(t),t.data.t_teamName==n.title?(uni.showToast({title:"添加成功"}),n.title="",n.imgList=[],setTimeout(function(){uni.reLaunch({url:"/pages/item/index"})},1200)):uni.showToast({title:"添加失败",icon:"none"})},function(n){console.log(n)})}else{e="access-token="+this.accessToken+"&appsercert="+this.appsercert+"&teamname="+this.title;this.sha=(0,a.default)(e),console.log(this.sha),this.$axios({url:this.$baseUrl.addtask.url+"?access-token="+this.accessToken+"&sign="+this.sha,method:"post"},{"access-token":this.accessToken,sign:this.sha,teamname:this.title,start_date:this.starttime,end_date:this.endtime,template_id:this.moulde_id}).then(function(t){t.data.t_teamName==n.title?(uni.showToast({title:"添加成功"}),n.title="",n.imgList=[],setTimeout(function(){uni.reLaunch({url:"/pages/item/index"})},1200)):uni.showToast({title:"添加失败",icon:"none"})},function(n){console.log(n)})}}else uni.showToast({title:"项目名称不能为空",icon:"none"})},startChange:function(n){this.starttime=n.detail.value},endChange:function(n){this.endtime=n.detail.value},changeEndtime:function(n){this.tabIndex=n,this.$refs.picker.show()},onConfirm3:function(n){console.log(n),this.endtime=n.result},changeStarttime:function(n){this.tabIndex=n,this.$refs.picker2.show()},onConfirm:function(n){console.log(n),this.starttime=n.result},gomouldlist:function(){uni.navigateTo({url:"/pages/mouldList/index"})},goAddMember:function(){var n=this;uni.request({url:"http://testapi.shiliucrm.com/v1/hwechat_callback/callbacktask/getjsapiticket",data:{url:window.location.href.split("#")[0]},success:function(t){console.log(t),u.default.config({debug:!1,beta:!0,appId:t.data.appid,timestamp:t.data.timestamp,nonceStr:t.data.noncestr,signature:t.data.signature,jsApiList:["selectEnterpriseContact"]}),u.default.ready(function(){var t=u.default.invoke||WeixinJSBridge.invoke;t("selectEnterpriseContact",{fromDepartmentId:1,mode:"multi",type:["user"],selectedDepartmentIds:[],selectedUserIds:[]},function(t){if("selectEnterpriseContact:ok"==t.err_msg){"string"==typeof t.result&&(t.result=JSON.parse(t.result));for(var e=t.result.userList,i=0;i<e.length;i++){var a=function(n){var t=this;uni.request({url:"http://testapi.shiliucrm.com/v1/hwechat_callback/callbacktask/getuserid",data:{id:n},success:function(n){t.idList.push(n.data.user_id)}})},s=e[i];n.imgList=n.imgList.concat(s.avatar);var o=s.id;a(o)}}})})}})}},onLoad:function(){var n=uni.getStorageSync("login");n&&(this.accessToken=n.access_token,this.appsercert=n.appsercert)},onTabItemTap:function(){console.log("点击了添加项目页面"),uni.switchTab({url:"/pages/additem/index"})},onShow:function(){document.title="handone",(0,o.ChangePageTitle)("handone");var n=uni.getStorageSync("list");n&&(console.log(n),this.moulde_id=n.moulde_id,this.mould_name=n.moulde,uni.removeStorageSync("list"));var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,a=t.getDate();console.log(e,i,a),this.pickVal=[e-2e3,i-1,a-1]}};t.default=r},a4da:function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* * {\n\tmargin: 0;\n\tpadding: 0;\n} */uni-page-body[data-v-6af08338]{background:#f3f3f3}\n\n/* .btn {\n\twidth: 630upx;\n\theight: 90upx;\n\tmargin: 60upx auto 0;\n}\n\n.btn a {\n\tdisplay: block;\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 50upx;\n\tbackground: #0081ff;\n\ttext-align: center;\n\tline-height: 90upx;\n\tcolor: #fff;\n\tfont-size: 32upx;\n} */\n\n/* .content {\n\twidth: 100%;\n\tbox-sizing: border-box;\n\tborder-bottom: 2upx solid #F3F3F3;\n\tbackground: #fff;\n}\n\n.content textarea {\n\twidth: 100%;\n\theight: 100upx;\n\tpadding: 20upx;\n\tbox-sizing: border-box;\n}\n\n.select {\n\twidth: 100%;\n\toverflow: hidden;\n}\n\n.select view {\n\twidth: 100%;\n\tfloat: left;\n}\n\n.select .title {\n\twidth: 100%;\n\tpadding: 10upx 40upx;\n\tbox-sizing: border-box;\n\tfont-size: 24upx;\n\tcolor: #B0B0B0;\n}\n\n.man {\n\twidth: 100%;\n\toverflow: hidden;\n\tpadding: 0 20upx 0 40upx;\n\tbox-sizing: border-box;\n\tmargin-top: 20upx;\n\tborder-bottom: 2upx solid #F3F3F3;\n\tborder-top: 2upx solid #F3F3F3;\n\theight: 100upx;\n} */\n\n/* .man .sp1 {\n\twidth: 80%;\n\theight: 100upx;\n\tfloat: left;\n\tbox-sizing: border-box;\n\tfont-size: 28upx;\n\tline-height: 100upx;\n}\n\n.man .sp1 span {\n\twidth: 60upx;\n\theight: 60upx !important;\n\tborder-radius: 50%;\n\tmargin-right: 10upx;\n}\n\n.man .sp1 image {\n\twidth: 60upx;\n\theight: 60upx;\n\tborder-radius: 50%;\n\tmargin-top: 20upx;\n}\n\n.man .sp2 {\n\twidth: 60upx;\n\theight: 60upx;\n\tfloat: right;\n\tpadding: 4upx 0 0 0;\n\tmargin-top: 18upx;\n}\n\n.man .sp2 image {\n\twidth: 100%;\n\theight: 100%;\n\n} */\n\n/* .lab {\n\twidth: 100%;\n\theight: 80upx;\n\toverflow: hidden;\n\tpadding: 0 0 0 20upx;\n\tbox-sizing: border-box;\n\tborder-bottom: 2upx solid #F3F3F3;\n\tbackground: #fff;\n}\n\n.lab1 {\n\tfloat: left;\n\twidth: 24%;\n\theight: 80upx;\n\ttext-align: left;\n\tfont-size: 28upx;\n\tline-height: 80upx;\n}\n\n.lab2 {\n\tfloat: right;\n\twidth: 75%;\n\toverflow: hidden;\n}\n\n.select input {\n\twidth: 460upx;\n\theight: 100%;\n\tfloat: left;\n\ttext-align: right;\n\tpadding: 20upx 0;\n\tbox-sizing: border-box;\n\tcolor: #000;\n}\n\n.select .right {\n\tfloat: right;\n\tpadding: 20upx;\n\tbox-sizing: border-box;\n\n}\n\n.select .right image {\n\twidth: 40upx;\n\theight: 40upx;\n}\n\n.select .sp {\n\tfloat: left !important;\n\twidth: 460upx;\n\theight: 80upx;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\twhite-space: nowrap;\n\tpadding: 10upx 0;\n\tbox-sizing: border-box;\n\ttext-align: right;\n} */\n\n/* .select .sp span {\n\ttext-align: center;\n\tfont-size: 26upx;\n\tbox-sizing: border-box;\n}\n\n.select .sp span image {\n\twidth: 40upx;\n\theight: 40upx;\n\tborder-radius: 50%;\n\tmargin: 10upx 4upx 0;\n}\n\n.max_input {\n\tfont-size: 28upx;\n} */body.?%PAGE?%[data-v-6af08338]{background:#f3f3f3}",""])},bb78:function(n,t,e){"use strict";var i,a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[n._v("项目名称")]),e("v-uni-input",{attrs:{placeholder:"请输入"},model:{value:n.title,callback:function(t){n.title=t},expression:"title"}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[n._v("项目成员")]),e("v-uni-view",{staticClass:"img"},n._l(n.imgList,function(n){return e("span",[e("v-uni-image",{attrs:{src:n,mode:""}})],1)}),0)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[n._v("设置开始时间")]),e("v-uni-picker",{attrs:{mode:"date",value:n.starttime,start:"2000-09-01",end:"2030-09-01"},on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.startChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"picker"},[n._v(n._s(n.starttime))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[n._v("设置截止时间")]),e("v-uni-picker",{attrs:{mode:"date",value:n.endtime,start:"2000-09-01",end:"2030-09-01"},on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.endChange.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"picker"},[n._v(n._s(n.endtime))])],1)],1),e("v-uni-view",{staticClass:"cu-form-group",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gomouldlist.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"title"},[n._v("项目模板")]),e("v-uni-view",{staticClass:"mould_name"},[n._v(n._s(n.mould_name))])],1),e("v-uni-view",{staticClass:"padding flex flex-direction"},[e("v-uni-button",{staticClass:"cu-btn bg-blue lg",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.submit.apply(void 0,arguments)}}},[n._v("完成")])],1)],1)},s=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return s}),e.d(t,"a",function(){return i})},d290:function(n,t,e){"use strict";e.r(t);var i=e("1aee"),a=e.n(i);for(var s in i)"default"!==s&&function(n){e.d(t,n,function(){return i[n]})}(s);t["default"]=a.a},dea2:function(n,t,e){"use strict";e.r(t);var i=e("bb78"),a=e("d290");for(var s in a)"default"!==s&&function(n){e.d(t,n,function(){return a[n]})}(s);e("0ea3");var o,u=e("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"6af08338",null,!1,i["a"],o);t["default"]=r.exports},df8a:function(n,t,e){var i=e("a4da");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("17dbdd52",i,!0,{sourceMap:!1,shadowMode:!1})}}]);