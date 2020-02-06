(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/navTab"],{"59cb":function(t,i,n){},"5c00":function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"navTab",props:{tabTitle:{type:Array,default:[]}},data:function(){return{tabClick:0,isLeft:0,isWidth:0,toView:"",isLongWidth:0}},created:function(){var i=this;t.getSystemInfo({success:function(t){i.isWidth=t.windowWidth/i.tabTitle.length,i.isLongWidth=t.windowWidth/5}}),this.toView="id0"},methods:{navClick:function(t){this.$parent.currentTab=t,this.tabClick=t,this.isLeft=t*this.isWidth},longClick:function(t,i){console.log(i);var n=t-2;n=n<=0?0:n,this.toView="id".concat(n),this.tabClick=t,this.isLeft=t*this.isLongWidth,this.$emit("tab",{index:t,id:i})}}};i.default=n}).call(this,n("543d")["default"])},"699e":function(t,i,n){"use strict";n.r(i);var e=n("5c00"),c=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(i,t,function(){return e[t]})}(a);i["default"]=c.a},"76dc":function(t,i,n){"use strict";var e=n("59cb"),c=n.n(e);c.a},c730:function(t,i,n){"use strict";n.r(i);var e=n("e036"),c=n("699e");for(var a in c)"default"!==a&&function(t){n.d(i,t,function(){return c[t]})}(a);n("76dc");var o,u=n("f0c5"),s=Object(u["a"])(c["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);i["default"]=s.exports},e036:function(t,i,n){"use strict";var e,c=function(){var t=this,i=t.$createElement;t._self._c},a=[];n.d(i,"b",function(){return c}),n.d(i,"c",function(){return a}),n.d(i,"a",function(){return e})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/navTab-create-component',
    {
        'components/navTab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c730"))
        })
    },
    [['components/navTab-create-component']]
]);
