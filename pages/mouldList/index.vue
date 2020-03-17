<template>
	<view class="content">
		<!-- <header-top :back='back1' :title='title'></header-top> -->
		<view class="box">
			<ul>
				<li v-for='(item,index) in lists' :key='index' @click = 'xuanze(item.name,item.id)'>
                     {{item.name}}				
				</li>
			</ul>
		</view>
		<view v-show="isShow">
			<uni-load-more :status="status"></uni-load-more>
		</view>
	</view>
</template>

<script>
	import hex_sha1 from "sha1";
	import uniLoadMore from "@/components/uni-load-more.vue";
	import {ChangePageTitle} from '../../title.js'
	export default {
		data() {
			return {
				accessToken: '64e9275246c6545a3b5d3ad060fe4c516f44d556',
				appsercert: 'MTExMTEx',
				page: 1,
				lists: [],
				status: 'more',
				isShow: false,
			}
		},
		components: {
			uniLoadMore
		},
		methods: {
			getlist() {
				var signStr =
					"access-token=" +
					this.accessToken +
					"&appsercert=" +
					this.appsercert +
					"&page=" +
					this.page;
				this.sha = hex_sha1(signStr);
				this.$axios(this.$baseUrl.templateList, {
						'access-token': this.accessToken,
						sign: this.sha,
						page: this.page
					})
					.then(res => {
						console.log(res)
						this.lists = res.data.items
						// if(res.data._links.self.href.substring(res.data._links.self.href.length-1)!=this.page){
						// 	this.status = "noMore";
						// } else {
						// 	console.log(res.data);
						// 	this.lists = this.lists.concat(res.data.items);
						// 	this.isShow = true
						// 	console.log(this.lists)
						// }
					}, (error) => {
						console.log(error)
					})
			},
			xuanze(name,id){
				console.log(name)
				console.log(id)
				let obj = {}
				// console.log(obj)
				obj.moulde = name
				obj.moulde_id = id
				uni.setStorageSync('list',obj)
				// uni.navigateTo({
				// 	url:'/pages/addmoney/index'
				// })
				uni.navigateBack({
					delta:1
				})
			}
		},
		// onReachBottom() {
		// 	this.status = "loading";
		// 	console.log("我被拉到底部了");
		// 	setTimeout(() => {
		// 		this.page++;
		// 		console.log(this.page);
		// 		this.getlist();
		// 	}, 2000)
		// },
		onLoad() {
			var list = uni.getStorageSync('login');
			if (list) {
				this.accessToken = list.access_token
				this.appsercert = list.appsercert
			}
			this.getlist()
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
	.box{
		width: 100%;
		overflow: hidden;
		/* margin-top: 100upx; */
	}
	.box ul li{
		float: left;
		height: 80upx;
		padding:  0 40upx 0;
		width: 100%;
		line-height: 80upx;
		font-size: 28upx;
		box-sizing: border-box;
		border-bottom: 2upx solid #F3F3F3;
	}
</style>
