(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/customlist/index"],{"0a75":function(t,n,e){"use strict";var a,c=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return c}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return a})},"209b":function(t,n,e){},"37a5":function(t,n,e){"use strict";(function(t){e("75f0"),e("921b");a(e("66fd"));var n=a(e("99d2"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"99d2":function(t,n,e){"use strict";e.r(n);var a=e("0a75"),c=e("a670");for(var o in c)"default"!==o&&function(t){e.d(n,t,function(){return c[t]})}(o);e("b3d1");var i,s=e("f0c5"),r=Object(s["a"])(c["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=r.exports},a670:function(t,n,e){"use strict";e.r(n);var a=e("dfec"),c=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=c.a},b3d1:function(t,n,e){"use strict";var a=e("209b"),c=e.n(a);c.a},dfec:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(e("98d4")),c=e("8852");function o(t){return t&&t.__esModule?t:{default:t}}var i=function(){return e.e("components/nickro-sortPickerList/nickro-sortPickerList").then(e.bind(null,"13ea"))},s={name:"contury",components:{SortPickerList:i},data:function(){return{back1:!0,title:"选择组织架构",accessToken:"64e9275246c6545a3b5d3ad060fe4c516f44d556",appsercert:"MTExMTEx",dataArr:[],datalist:[]}},methods:{clickData:function(t){this.datalist.push(t),console.log(this.datalist)},goback:function(){var n=this.datalist;t.setStorageSync("list",n),t.navigateBack({delta:1})},getlist:function(){var t=this,n="access-token="+this.accessToken+"&appsercert="+this.appsercert;this.sha=(0,a.default)(n),console.log(this.sha),this.$axios(this.$baseUrl.shenherenlist,{"access-token":this.accessToken,sign:this.sha}).then(function(n){console.log(n),t.dataArr=n.data.user},function(t){console.log(t)})}},watch:{dataArr:function(t,n){console.log(t),this.$refs["sortPickerList"].initPage(t),console.log("bianle")}},onLoad:function(){this.getlist()},onShow:function(){document.title="选择组织架构",(0,c.ChangePageTitle)("选择组织架构")}};n.default=s}).call(this,e("543d")["default"])}},[["37a5","common/runtime","common/vendor"]]]);