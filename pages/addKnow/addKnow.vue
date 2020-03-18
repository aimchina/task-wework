<template>
	<view>
		<uni-nav-bar left-text="返回" leftIcon="back" title="发布知识" backgroundColor="#4f9efb" color="#fff" :border="false" @clickLeft="back"></uni-nav-bar>
		<view class="title">
			<text>标题</text>
			<input type="text" v-model="name" />
		</view>
		<view class="content">
			<text>内容</text>
			<textarea v-model="content" />
		</view>
		<view class="chooseTag" @click="goTag">
			<text>{{text?text:'···'}}</text>
			<text>选择标签</text>
		</view>
		<button class="btn" @click="submit(name,content,tags)">发布</button>
	</view>
</template>

<script>
	import hex_sha1 from "sha1"
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		data:function() {
			return {
				name: '',
				content: '',
				tags: '',
				text: '',
				accessToken: '64e9275246c6545a3b5d3ad060fe4c516f44d556'
			}
		},
		components: {
			uniNavBar
		},
		onLoad() {
			var that = this;
			uni.$on('tags',function(data){
				that.tags = data.tags
				that.text = data.text
			})
		},
		onUnload() {
			uni.$off('tags')
		},
		methods: {
			goTag() {
				uni.navigateTo({
					url: '../tag/tag'
				})
			},
			submit(name,content,tags) {
				if(this.tags == '') {
					uni.showToast({
						title: '请先选择标签',
						icon: 'none'
					})
				} else {
					uni.showLoading({
						title: '正在发布,请稍候'
					})
					var signStr ="name=" + name + "&content=" + content + '&tags=' + tags + '&company_id=2' ;
					console.log(signStr)
					var sign = hex_sha1(signStr);
					console.log(sign)
					uni.request({
						url: 'https://testapi.shiliucrm.com/v1/note/notes?access-token=' + this.accessToken,
						method: 'POST',
						data: {
							company_id: '2',
							sign: sign,
							name: name,
							content: content,
							tags: tags
						},
						header: {
							'Content-Type':'application/x-www-form-urlencoded'
						},
						success: (res) => {
							uni.hideLoading()
							console.log(res)
						},
						fail: (err) => {
							console.log(err)
						}
					})
				}
			},
			back() {
				uni.navigateBack({
					delta:1
				})
			},
		},
		onShow() {
			var list = uni.getStorageSync('login');
			if (list) {
				this.accessToken = list.access_token
			}
		}
	}
</script>

<style>
	page{
		background: #f1f1f1;
	}
	
	.title {
		width: 100%;
		margin: 20upx 0;
		height: 100upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		color: #000;
		background: #fff;
		box-sizing: border-box;
		padding: 0 30upx;
	}
	
	.title text {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		letter-spacing: 2upx;
		font-size: 34upx;
	}
	
	.title input {
		height: 100%;
		margin-left: 30upx;
		color: #999;
		font-size: 30upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.content {
		width: 100%;
		height: 400upx;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		box-sizing: border-box;
		padding: 20upx 30upx;
		background: #fff;
	}
	
	.content text {
		letter-spacing: 2upx;
		font-size: 34upx;
		color: #000;
		padding: 0 0 10upx 0;
	}
	
	.content textarea {
		width: 100%;
		font-size: 28upx;
	}
	
	.chooseTag {
		width: 100%;
		margin: 20upx 0;
		height: 100upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #666;
		font-size: 30upx;
		background: #fff;
		box-sizing: border-box;
		padding: 0 30upx;
	}
	
	.btn {
		width: 690upx;
		height: 100upx;
		background: #4f9efb;
		color: #fff;
		font-size: 36upx;
		letter-spacing: 4upx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 30upx;
	}
</style>
