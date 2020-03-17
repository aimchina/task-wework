<template>
	<view>
		<scroll-view scroll-x class="color nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in list" :key="index" @tap="tabSelect" :data-id="index">
					{{item}}
				</view>
			</view>
		</scroll-view>
		<view class="main" v-show="TabCur == 0">
			<view class="block" v-for="(item,index) in knowList" :key="index">
				<view class="info">
					<text>{{item.people}}</text>
					<text>{{item.date}}</text>
				</view>
				<view class="text-black message">
					{{item.content}}
				</view>
				<view class="title">
					{{item.text}}
				</view>
			</view>
		</view>
		<view class="main" v-show="TabCur == 1">
			<view class="block" v-for="(item,index) in kno" :key="index">
				<view class="info">
					<text>{{item.people}}</text>
					<text>{{item.date}}</text>
				</view>
				<view class="text-black message">
					{{item.content}}
				</view>
				<view class="title">
					{{item.text}}
				</view>
			</view>
		</view>
		<view class="main" v-show="TabCur == 2">
			<view class="block" v-for="(item,index) in knowList" :key="index">
				<view class="info">
					<text>{{item.people}}</text>
					<text>{{item.date}}</text>
				</view>
				<view class="text-black message">
					{{item.content}}
				</view>
				<view class="title">
					{{item.text}}
				</view>
			</view>
		</view>
		<view class="main" v-show="TabCur == 3">
			<view class="block" v-for="(item,index) in knowList" :key="index">
				<view class="info">
					<text>{{item.people}}</text>
					<text>{{item.date}}</text>
				</view>
				<view class="text-black message">
					{{item.content}}
				</view>
				<view class="title">
					{{item.text}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import hex_sha1 from "sha1";
	export default {
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0,
				accessToken: '64e9275246c6545a3b5d3ad060fe4c516f44d556',
				appsercert: 'MTExMTEx',
				sha: '',
				list: ['全部','小程序','快递','渠道'],
				knowList: [
					{
						people: '范总',
						date: '2019-10-18',
						content: '服务商搜索',
						text: '项目管理'
					},
					{
						people: '范总',
						date: '2019-10-18',
						content: '服务商搜索',
						text: '项目管理'
					},
					{
						people: '范总',
						date: '2019-10-18',
						content: '服务商搜索',
						text: '项目管理'
					},
					{
						people: '范总',
						date: '2019-10-18',
						content: '服务商搜索',
						text: '项目管理'
					},
					{
						people: '范总',
						date: '2019-10-18',
						content: '服务商搜索',
						text: '项目管理'
					}
				],
				kno: [
					{
						people: '范总',
						date: '2019-10-18',
						content: '服务商搜索',
						text: '项目管理'
					},
					{
						people: '范总',
						date: '2019-10-18',
						content: '服务商搜索',
						text: '项目管理'
					},
				]
			};
		},
		onLoad() {
			
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				console.log(this.TabCur)
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			getTag() {
				var signStr ="access-token=" + this.accessToken + "&appsercert=" + this.appsercert + "&company_id=handone" ;
				this.sha = hex_sha1(signStr);
				uni.request({
					url: 'https://testapi.shiliucrm.com/v2/notes_tag/notes-tags',
					method: 'GET',
					data: {
						'access-token': this.accessToken,
						sign: this.sha,
						company_id: 'handone'
					},
					success: (res) => {
						console.log(res)
					},
					fail: (err) => {
						console.log(err)
					}
				})
			}
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
