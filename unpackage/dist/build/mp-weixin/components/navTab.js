(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/navTab"],{"0ff1":function(t,i,n){},"4b3a":function(t,i,n){"use strict";n.r(i);var e=n("a613"),a=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(i,t,function(){return e[t]})}(c);i["default"]=a.a},7224:function(t,i,n){"use strict";n.r(i);var e=n("f8d8"),a=n("4b3a");for(var c in a)"default"!==c&&function(t){n.d(i,t,function(){return a[t]})}(c);n("fd1c");var o,u=n("f0c5"),f=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],o);i["default"]=f.exports},a613:function(t,i,n){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={name:"navTab",props:{tabTitle:{type:Array,default:[]}},data:function(){return{tabClick:0,isLeft:0,isWidth:0,toView:"",isLongWidth:0}},created:function(){var i=this;t.getSystemInfo({success:function(t){i.isWidth=t.windowWidth/i.tabTitle.length,i.isLongWidth=t.windowWidth/5}}),this.toView="id0"},methods:{navClick:function(t){this.$parent.currentTab=t,this.tabClick=t,this.isLeft=t*this.isWidth},longClick:function(t,i){console.log(i);var n=t-2;n=n<=0?0:n,this.toView="id".concat(n),this.tabClick=t,this.isLeft=t*this.isLongWidth,this.$emit("tab",{index:t,id:i})}}};i.default=n}).call(this,n("543d")["default"])},f8d8:function(t,i,n){"use strict";var e,a=function(){var t=this,i=t.$createElement;t._self._c},c=[];n.d(i,"b",function(){return a}),n.d(i,"c",function(){return c}),n.d(i,"a",function(){return e})},fd1c:function(t,i,n){"use strict";var e=n("0ff1"),a=n.n(e);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/navTab-create-component',
    {
        'components/navTab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7224"))
        })
    },
    [['components/navTab-create-component']]
]);
