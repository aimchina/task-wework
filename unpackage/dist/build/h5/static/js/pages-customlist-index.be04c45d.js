(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-customlist-index"],{"0828":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".list[data-v-353750ee]{\n\t/* margin-top: 100upx; */}.btn[data-v-353750ee]{width:%?180?%;height:%?60?%;text-align:center;line-height:%?60?%;background:#fe9400;color:#fff;position:fixed;right:%?50?%;bottom:%?50?%;border-radius:%?16?%;font-size:%?28?%}",""])},"543b":function(t,e,n){"use strict";var a=n("6b7c"),i=n.n(a);i.a},"6b7c":function(t,e,n){var a=n("0828");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("737892e2",a,!0,{sourceMap:!1,shadowMode:!1})},"7e40":function(t,e,n){"use strict";n.r(e);var a=n("cafc"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a},af1a:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("SortPickerList",{ref:"sortPickerList",staticClass:"list",on:{clickData:function(e){arguments[0]=e=t.$handleEvent(e),t.clickData.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goback.apply(void 0,arguments)}}},[t._v("确定")])],1)},s=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"a",function(){return a})},c1a1:function(t,e,n){"use strict";n.r(e);var a=n("af1a"),i=n("7e40");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("543b");var c,o=n("f0c5"),r=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"353750ee",null,!1,a["a"],c);e["default"]=r.exports},cafc:function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("ed70")),s=a(n("5ff2")),c=n("8e97"),o={name:"contury",components:{SortPickerList:s.default},data:function(){return{back1:!0,title:"选择组织架构",accessToken:"64e9275246c6545a3b5d3ad060fe4c516f44d556",appsercert:"MTExMTEx",dataArr:[],datalist:[]}},methods:{clickData:function(t){this.datalist.push(t),console.log(this.datalist)},goback:function(){var t=this.datalist;uni.setStorageSync("list",t),uni.navigateBack({delta:1})},getlist:function(){var t=this,e="access-token="+this.accessToken+"&appsercert="+this.appsercert;this.sha=(0,i.default)(e),console.log(this.sha),this.$axios(this.$baseUrl.shenherenlist,{"access-token":this.accessToken,sign:this.sha}).then(function(e){console.log(e),t.dataArr=e.data.user},function(t){console.log(t)})}},watch:{dataArr:function(t,e){console.log(t),this.$refs["sortPickerList"].initPage(t),console.log("bianle")}},onLoad:function(){this.getlist()},onShow:function(){document.title="选择组织架构",(0,c.ChangePageTitle)("选择组织架构")}};e.default=o}}]);