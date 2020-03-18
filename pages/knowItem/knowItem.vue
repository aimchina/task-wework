<template>
	<view>
		<view class="header">
			<text class="title">{{info.name}}</text>
			<view class="user">
				<text>{{name}}</text>
				<text>{{info.add_time?info.add_time:'正在加载中'}}</text>
			</view>
		</view>
		<view class="main">
			<u-parse :content="info.content?info.content:content"></u-parse>
		</view>
		<view class="list">
			<text>回复区域</text>
			<view class="block" v-if="show == true">
				
			</view>
			<view class="noData" v-if="show == false">
				暂无回复
			</view>
		</view>
	</view>
</template>

<script>
	import hex_sha1 from "sha1"
	import uParse from '../../components/u-parse/u-parse.vue'
	import {ChangePageTitle} from '../../title.js'
	export default {
		data: function() {
			return {
				accessToken: '64e9275246c6545a3b5d3ad060fe4c516f44d556',
				info: [],
				name: '',
				content: '<p style="text-align:center;font-size:36upx;width:690upx;color:#999;">暂无内容</p>',
				replies: [],
				show: false
			}
		},
		components: {
			uParse
		},
		onLoad(opt) {
			var id = opt.id
			this.getDetail(id)
			this.name = opt.name
		},
		methods: {
			getDetail(id) {
				var signStr ="access-token=" + this.accessToken ;
				var sign = hex_sha1(signStr)
				console.log(sign)
				uni.request({
					url: 'https://testapi.shiliucrm.com/v1/note/notes/' + id,
					method: 'GET',
					data: {
						'access-token' : this.accessToken,
						sign: sign
					},
					success: (res) => {
						console.log(res)
						this.info = res.data.note;
						if(res.data.replies.length) {
							this.show = true;
							this.replies = res.data.replies;
						} 
					},
					fail: (err) => {
						console.log(err)
					}
				})
			}
		},
		onShow() {
			document.title = '详情'
			ChangePageTitle('详情')
			var list = uni.getStorageSync('login');
			if (list) {
				this.accessToken = list.access_token
			}
		}
	}
</script>

<style>
	page {
		background: #f7f7f7;
	}
	.header {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		background: #fff;
	}
	
	.header .title {
		width: 100%;
		box-sizing: border-box;
		padding: 20upx 30upx;
		color: #333;
		font-size: 32upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
	}
	
	.header .user {
		width: 100%;
		box-sizing: border-box;
		padding: 0 30upx;
		color: #999;
		font-size: 28upx;
		margin-bottom: 20upx;
	}
	
	.header .user text:nth-child(1) {
		margin-right: 30upx;
	}
	
	.main {
		width: 100%;
		box-sizing: border-box;
		padding: 30upx;
		background: #fff;
		margin-top: 30upx;
		font-size: 30upx;
	}
	
	.list {
		width: 100%;
		box-sizing: border-box;
		padding: 30upx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		background: #fff;
		margin-top: 30upx;
	}
	
	.list text:nth-child(1) {
		color: #333;
		font-size: 32upx;
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 60upx;
	}
	
	.list .block {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
	
	.list .noData {
		color: #999;
		font-size: 32upx;
	}
</style>
