export default {
	state:{
		footer_nav:[
			{
				name:'项目',
				name_code:'admin',
				icon:'',
				select_icon:'',
				size:'small'
			},
			
			{
				name:'',
				name_code:'publish',
				icon:'/static/image/add.png',
				select_icon:'/static/image/add-btn.png',
				size:'big'
			},
			{
				name:'任务',
				name_code:'apply',
				icon:'',
				select_icon:'',
				size:'small'
			}
		],
		now_page_index:0,
	},
	mutations:{
		change_nav_list(state,data){
			state.footer_nav = data;
		},
		change_page(state,index){
			state.now_page_index = index;
		}
	}
}