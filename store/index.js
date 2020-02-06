import Vue from 'vue'
import Vuex from 'vuex'
import footer_store from "./modules/footer.js"
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		loading: '0',
		list: [],
		detail: ''
	},
	mutations: {},
	actions: {},
	get_detail(ctx, id) {},
	modules: {
		footer_store
	}
})

export default store
