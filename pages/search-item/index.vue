<template>
	<view class="content">
		<view>
			<mSearch  @search="search($event)"></mSearch>
		</view>
		<view class="list">
			<ul>
				<li class='list-item' v-for ='(item,index) in list' :key='index' @click='godetail(item.t_id)'>
					{{item.t_taskContent}}
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	import mSearch from '@/components/mehaotian-search/mehaotian-search.vue';
	import hex_sha1 from "sha1";
	import axios from "axios";
	import {
		ChangePageTitle
	} from '../../title.js'
	export default{
		data(){
			return{
				accessToken: '64e9275246c6545a3b5d3ad060fe4c516f44d556',
				appsercert: 'MTExMTEx',
				sha:'',
				t_id:'',
				list:[]
			}
		},
		components: {
			mSearch
		},
		methods:{
			godetail(id) {
				console.log(id)
				uni.navigateTo({
					url: '/pages/missiondetail/index?id=' + id
				})
			},
			search($event){
				console.log($event)
				let _this = this
				if($event){
					var signStr =
						"access-token=" +
						_this.accessToken +
						"&appsercert=" +
						_this.appsercert +
						"&tid=" +
						_this.t_id + 
						'&word = '+ $event;
					// console.log(signStr)
					_this.sha = hex_sha1(signStr);
					console.log(_this.sha)
					axios.get(_this.$baseUrl.missionlist.url+'?access-token='+_this.accessToken+'&sign='+_this.sha+'&tid='+_this.t_id +'&word='+$event)
						.then((res)=>{
							console.log(res);
							for(var item of res.data.teamtask){
								for(var item2 of item.task){
									console.log(item2)
									_this.list.push(item2)
								}
							}
						})
						.catch((error)=> {
							console.log(error);
						});
				}
				
			}
		},
		onLoad(e) {
			console.log(e)
			this.t_id = e.id
			var list = uni.getStorageSync('login');
			if (list) {
				this.accessToken = list.access_token
				this.appsercert = list.appsercert
			}
		},
		onShow() {
			document.title = 'handone'
			ChangePageTitle('handone')
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.list-item {
		width: 100%;
		list-style: none;
		background-color: #fff;
		font-size: 30upx;
		/* margin: 10upx 0; */
		box-sizing: border-box;
		padding: 20upx;
		overflow: hidden;
		border-radius: 10upx;
		word-wrap: break-word;
		position: relative;
		border-bottom: 2upx solid #F3F3F3;
	}
	
</style>
