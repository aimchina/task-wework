(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-customlist-index"],{"29b9":function(t,n,e){var a=e("f0c9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("221663c5",a,!0,{sourceMap:!1,shadowMode:!1})},3241:function(t,n,e){"use strict";e.r(n);var a=e("4c9f"),i=e("cd1c2");for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);e("38b1");var s=e("2877"),o=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"5a3c17b8",null);n["default"]=o.exports},"38b1":function(t,n,e){"use strict";var a=e("29b9"),i=e.n(a);i.a},4126:function(t,n,e){"use strict";var a=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("aa8a")),c=a(e("62e3")),s=e("4ca1"),o={name:"contury",components:{SortPickerList:c.default},data:function(){return{back1:!0,title:"选择组织架构",accessToken:"64e9275246c6545a3b5d3ad060fe4c516f44d556",appsercert:"MTExMTEx",dataArr:[],datalist:[]}},methods:{clickData:function(t){this.datalist.push(t),console.log(this.datalist)},goback:function(){var t=this.datalist;uni.setStorageSync("list",t),uni.navigateBack({delta:1})},getlist:function(){var t=this,n="access-token="+this.accessToken+"&appsercert="+this.appsercert;this.sha=(0,i.default)(n),console.log(this.sha),this.$axios(this.$baseUrl.shenherenlist,{"access-token":this.accessToken,sign:this.sha}).then(function(n){console.log(n),t.dataArr=n.data.user},function(t){console.log(t)})}},watch:{dataArr:function(t,n){console.log(t),this.$refs["sortPickerList"].initPage(t),console.log("bianle")}},onLoad:function(){this.getlist()},onShow:function(){document.title="选择组织架构",(0,s.ChangePageTitle)("选择组织架构")}};n.default=o},"4c9f":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("SortPickerList",{ref:"sortPickerList",staticClass:"list",on:{clickData:function(n){n=t.$handleEvent(n),t.clickData(n)}}}),e("v-uni-view",{staticClass:"btn",on:{click:function(n){n=t.$handleEvent(n),t.goback(n)}}},[t._v("确定")])],1)},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},cd1c2:function(t,n,e){"use strict";e.r(n);var a=e("4126"),i=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);n["default"]=i.a},f0c9:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".list[data-v-5a3c17b8]{\n\t/* margin-top: 100upx; */}.btn[data-v-5a3c17b8]{width:%?180?%;height:%?60?%;text-align:center;line-height:%?60?%;background:#fe9400;color:#fff;position:fixed;right:%?50?%;bottom:%?50?%;border-radius:%?16?%;font-size:%?28?%}",""])}}]);