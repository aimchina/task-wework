<template>
	<view class="content">
		<!-- <header-top :back='back1' :title='title'></header-top> -->
		<SortPickerList class='list' ref="sortPickerList" @clickData="clickData"></SortPickerList>
		<view class="btn" @click="goback">
			确定
		</view>
	</view>
</template>

<script>
	import hex_sha1 from "sha1";
	import SortPickerList from "@/components/nickro-sortPickerList/nickro-sortPickerList.vue"
	import {ChangePageTitle} from '../../title.js'
	export default {
		name: "contury",
		components: {
			SortPickerList
		},
		data() {
			return {
				back1: true,
				title: '选择组织架构',
				accessToken: '64e9275246c6545a3b5d3ad060fe4c516f44d556',
				appsercert: 'MTExMTEx',
				dataArr: [],
				datalist: []
			}
		},
		methods: {
			clickData(data) {
				// 				console.log('获取名：' + data.label)
				// 				console.log('获取值：' + data.value)
				// 				console.log('获取值：' + data.image)
				this.datalist.push(data)
				console.log(this.datalist)
			},
			goback(){
				// let obj = uni.getStorageSync('list')
				// console.log(obj)
				// obj.shenhe = this.datalist
				// uni.setStorageSync('list',obj)
				// uni.navigateTo({
				// 	url: '/pages/addmoney/index'
				// })
				let obj = this.datalist
				uni.setStorageSync('list', obj)
				uni.navigateBack({
					delta:1
				})
			},
			getlist() {
				var signStr =
					"access-token=" +
					this.accessToken +
					"&appsercert=" +
					this.appsercert
				// console.log(signStr)
				this.sha = hex_sha1(signStr);
				console.log(this.sha)
				this.$axios(this.$baseUrl.shenherenlist, {
						'access-token': this.accessToken,
						sign: this.sha
					})
					.then(res => {
						console.log(res)
						this.dataArr = res.data.user
					}, (error) => {
						console.log(error)
					})
			}
		},
		watch: {
			dataArr: function(newd, oldd) {
				console.log(newd)
				this.$refs["sortPickerList"].initPage(newd)
				// console.log(oldd)
				console.log('bianle')
			}
		},
		onLoad() {
			this.getlist()
		},
		onShow() {
			document.title = '选择组织架构'
			ChangePageTitle('选择组织架构')
		}
	}
</script>

<style>
	.list {
		/* margin-top: 100upx; */
	}

	.btn {
		width: 180upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
		background: rgb(254, 148, 0);
		color: #FFFFFF;
		position: fixed;
		right: 50upx;
		bottom: 50upx;
		border-radius: 16upx;
		font-size: 28upx;
	}
</style>
