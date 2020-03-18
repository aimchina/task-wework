<template>
	<view>
		<scroll-view scroll-x class="color nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub text-df" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in list" :key="index" @tap="tabSelect(item.name,item.sort,item.id,index)">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="main">
			<view class="block" v-for="(item,index) in itemList" :key="index" @click="goItem(item.id,item.user.t_nickname)">
				<view class="info">
					<text>{{item.user.t_nickname}}</text>
					<text>{{item.add_time}}</text>
				</view>
				<view class="text-black message">
					{{item.name}}
				</view>
				<view class="title">
					{{item.tag}}
				</view>
			</view>
		</view>
		<uni-fab :content="content" :pattern="pattern" horizontal="right" vertical="bottom" direction="vertical" @trigger="trigger"></uni-fab>
	</view>
</template>

<script>
	import hex_sha1 from "sha1"
	import uniFab from '../../components/uni-fab/uni-fab.vue'
	import {ChangePageTitle} from '../../title.js'
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				accessToken: '64e9275246c6545a3b5d3ad060fe4c516f44d556',
				appsercert: 'MTExMTEx',
				sha: '',
				list: [],
				itemList: [],
				pattern: {
					color: '#999',
					selectedColor: '#008eeb',
					backgroundColor: '#fff',
					buttonColor: '#008eeb'
				},
				content: [
					{
						iconPath: '../../static/image/jilulu.png',
						selectedIconPath: '../../static/image/jilulu.png',
						text: '发布',
						active: false
					}
				]
			};
		},
		components: {
			uniFab
		},
		onLoad() {
			this.getTag()
		},
		methods: {
			tabSelect(keyword,sort_id,tag_id,index) {
				this.TabCur = index;
				console.log(keyword)
				console.log(sort_id)
				console.log(tag_id)
				console.log(this.TabCur)
				this.scrollLeft = (index - 1) * 60
				this.getList(keyword,tag_id)
			},
			goItem(id,name) {
				uni.navigateTo({
					url: '../knowItem/knowItem?id=' + id + '&name=' + name
				})
			},
			getTag() {
				uni.showLoading({})
				var signStr ="access-token=" + this.accessToken + "&company_id=2" ;
				console.log(signStr)
				var sign = hex_sha1(signStr);
				console.log(sign)
				uni.request({
					url: 'https://testapi.shiliucrm.com/v2/notes_tag/notes-tags',
					method: 'GET',
					data: {
						company_id: '2',
						'access-token': this.accessToken,
						sign: 'd2754e11d805db39b2ba33db9e884bae26fedbbd',
					},
					success: (res) => {
						console.log(res)
						this.list = res.data.items;
						this.getList(this.list[0].name,this.list[0].id)
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			getList(keyword,tag_id) {
				var signStr ="access-token=" + this.accessToken + "&keyword=" + keyword + '&tag_id=' + tag_id + '&page=1';
				console.log(signStr)
				var sign = hex_sha1(signStr)
				console.log(sign)
				uni.request({
					url: 'https://testapi.shiliucrm.com/v2/note/notes',
					method: 'GET',
					data: {
						'access-token': this.accessToken,
						sign: sign,
						keyword: keyword,
						tag_id: tag_id,
						page: 1
					},
					success: (res) => {
						uni.hideLoading()
						console.log(res)
						this.itemList = res.data.items;
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			trigger(e) {
				console.log(e)
				if(e.index == 0) {
					uni.navigateTo({
						url: '../addKnow/addKnow'
					})
				}
			}
		},
		onShow() {
			document.title = 'handone'
			ChangePageTitle('handone')
			var list = uni.getStorageSync('login');
			if (list) {
				this.accessToken = list.access_token
				this.appsercert = list.appsercert
			}
			this.getTag()
		}
	}
</script>

<style>
	page {
		background: #fff;
	}
	.color {
		background: #f3f3f3;
	}
	
	.main {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-end;
	}
	
	.block {
		width: 720upx;
		box-sizing: border-box;
		border-bottom: 1upx solid #f1f1f1;
		padding: 20upx 0 10upx 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		background: #fff;
	}
	
	.block .info {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #999;
		font-size: 26upx;
		box-sizing: border-box;
		padding-right: 30upx;
	}
	
	.block .message {
		box-sizing: border-box;
		padding: 10upx 0;
		width: 90%;
		font-size: 32upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
	}
	
	.block .title {
		font-size: 20upx;
		color: 000;
		
	}
</style>
