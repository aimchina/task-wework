import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// Vue.http.option.emulateJSON = true

// 引入vuex 状态库
import store from "./store";
// 状态数据
Vue.prototype.$store = store;


//兼容苹果x
Vue.directive('isIphoneX', {
    bind: function (el, binding) {
        const _local = 'ios'
        let isIphoneX = false
        if (_local === 'ios' && window.screen.height) {
            isIphoneX = window.screen.height > 750 ? true : false
        }
        if (isIphoneX) {
            if (binding.value === 'margin') {
                console.log('use margin')
                el.setAttribute('style', 'margin-bottom: 8vw !important;')
            } else if (binding.value === 'height') {
                console.log('use height')
                el.setAttribute(
                    'style',
                    ` padding-bottom: 15vh !important;min-height: 85vh !important;`
                )
            } else {
                console.log('use padding')
                el.setAttribute('style', 'padding-bottom: 8vw !important;')
            }
        } else {
            if (binding.value === 'height') {
                el.setAttribute(
                    'style',
                    ` padding-bottom: 11vh !important;min-height: 89vh !important;`
                )
            }
        }
    },
    update: function (el, binding) { }
})

//输入框自动获取焦点
// Vue.directive('focus', {
//     inserted: function (el) {
//         console.log("xxxx")
//         el.focus()
//     }
// })

import VueDND from 'awe-dnd'
Vue.use(VueDND)

//请求封装
import axios from './Api/index'
import baseUrl from './Api/baseUrl'

Vue.prototype.$axios = axios;
Vue.prototype.$baseUrl = baseUrl;

App.mpType = 'app'
import Tab from './components/tabbar.vue'
Vue.component('tab-bar', Tab)
import Header from './components/header.vue'
Vue.component('header-top', Header)

const app = new Vue({
	...App
})
app.$mount()
