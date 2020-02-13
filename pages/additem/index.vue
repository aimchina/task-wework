<template>
	<view class="box">
		<!-- 原项目名称 -->
		<!-- <view class="content">
			<textarea value="" v-model="title" placeholder="项目名称" />
		</view> -->
		<view class="cu-form-group">
			<view class="title">项目名称</view>
			<input placeholder="请输入" v-model="title"></input>
		</view>
		<!-- <view class="select">
			<view class="title">
				项目成员
			</view>
			<view class="man" @click="goAddMember">
				<span class='sp1' v-if='imgList.length != 0'>
					<span v-for='item in imgList'>
						<image :src="item" mode=""></image>
					</span>
				</span>
				<span class='sp1' v-if='imgList.length == 0'>
					选择项目成员
				</span>
				<span class='sp2'>
					<image src="/static/image/xfh-004.jpg" mode=""></image>
				</span>
			</view>
		</view> -->
		<view class="cu-form-group" @click="goAddMember">
			<view class="title">项目成员</view>
			<view class="img">
				<span v-for='item in imgList'>
					<image :src="item" mode=""></image>
				</span>
			</view>
		</view>
		<!-- <view class='lab' for="" @click="goAddMember">
			<view class="lab1">
				<span><span>项目成员</span></span>
			</view>
			<view class="lab2 select">
				<view class="sp">
					<span v-for='item in imgList'>
						<image :src="item" mode=""></image>
					</span>
				</view>
				<span class='right'>
					<image src="/static/images/222.png" mode=""></image>
				</span>
			</view>
		</view> -->
		<!-- colorui 设置时间 -->
		<view class="cu-form-group">
			<view class="title">设置开始时间</view>
			<picker mode="date" :value="starttime" start="2000-09-01" end="2030-09-01" @change="startChange">
				<view class="picker">
					{{starttime}}
				</view>
			</picker>
		</view>
		<view class="cu-form-group">
			<view class="title">设置截止时间</view>
			<picker mode="date" :value="endtime" start="2000-09-01" end="2030-09-01" @change="endChange">
				<view class="picker">
					{{endtime}}
				</view>
			</picker>
		</view>
		<!-- <view class='lab' for="" @click="changeStarttime(1)">
			<view class="lab1">
				<span><span>设置开始时间</span></span>
			</view>
			<view class="lab2 select">
				<input type="text" class="max_input " v-model="starttime" disabled placeholder="" />
				<span class='right'>
					<image src="/static/images/222.png" mode=""></image>
				</span>
			</view>
		</view> -->
		<!-- <view class='lab' for="" @click="changeEndtime(1)">
			<view class="lab1">
				<span><span>设置截止时间</span></span>
			</view>
			<view class="lab2 select">
				<input type="text" class="max_input " v-model="endtime" disabled placeholder="" />
				<span class='right'>
					<image src="/static/images/222.png" mode=""></image>
				</span>
			</view>
		</view> -->
		<view class="cu-form-group" @click="gomouldlist">
			<view class="title">项目模板</view>
			<view class="mould_name">{{mould_name}}</view>
		</view>
		<!-- <view class='lab' for="" @click="gomouldlist">
			<view class="lab1">
				<span><span>项目模板</span></span>
			</view>
			<view class="lab2 select">
				<input type="text" class="max_input " v-model="mould_name" disabled placeholder="" />
				<span class='right'>
					<image src="/static/images/222.png" mode=""></image>
				</span>
			</view>
		</view> -->
		<!-- <view class="btn" @click="submit">
			<a>完成</a>
		</view> -->
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-blue lg" @click="submit">完成</button>
		</view>
		<!-- <w-picker :startYear="startYear" endYear="2030" :value="pickVal" step="1" @confirm="onConfirm3" ref="picker"
		 themeColor="#f00"></w-picker>
		 <w-picker :startYear="startYear" endYear="2030" :value="pickVal" step="1" @confirm="onConfirm" ref="picker2"
		  themeColor="#f00"></w-picker> -->
	</view>
</template>

<script>
	import hex_sha1 from "sha1";
	import wPicker from "@/components/w-picker/w-picker.vue";
	import {
		ChangePageTitle
	} from '../../title.js'
	import wx from 'weixin-js-sdk'
	export default {
		data() {
			return {
				accessToken: '64e9275246c6545a3b5d3ad060fe4c516f44d556',
				appsercert: 'MTExMTEx',
				imgList: [],
				title: '',
				sha: '',
				idList: [],
				starttime: '请设置',
				endtime: '请设置',
				startYear: '2000',
				tabIndex: '',
				pickVal: [],
				mould_name: '默认模板',
				moulde_id: 1
			}
		},
		components: {
			wPicker
		},
		methods: {
			submit() {
				if (!this.title) {
					uni.showToast({
						title: '项目名称不能为空',
						icon: 'none'
					})
				} else {
					// var lists = [999]
					// for(var i = 0;i<this.imgList.length;i++){
					// 	lists.push(this.imgList[i].id)
					// }
					// console.log(lists)
					var lists = this.idList.join()
					// console.log(lists)
					if (this.starttime > this.endtime) {
						uni.showToast({
							title: '开始时间不能大于截止时间',
							icon: 'none'
						})
					} else {
						if (this.idList.length != 0) {
							var signStr =
								"access-token=" +
								this.accessToken +
								"&appsercert=" +
								this.appsercert +
								'&teamname=' +
								this.title +
								"&team_user=" +
								lists
							// console.log(signStr)
							this.sha = hex_sha1(signStr);
							console.log(this.sha)
							this.$axios({
									url: this.$baseUrl.addtask.url + '?access-token=' + this.accessToken + '&sign=' + this.sha,
									method: 'post'
								}, {
									'access-token': this.accessToken,
									sign: this.sha,
									teamname: this.title,
									team_user: lists,
									start_date: this.starttime,
									end_date: this.endtime,
									template_id: this.moulde_id
								})
								.then(res => {
									console.log(res)
									if (res.data.t_teamName == this.title) {
										uni.showToast({
											title: '添加成功'
										})
										this.title = ''
										this.imgList = []
										setTimeout(() => {
											uni.reLaunch({
												url: '/pages/item/index'
											})
										}, 1200)
									} else {
										uni.showToast({
											title: '添加失败',
											icon: 'none'
										})
									}

								}, (error) => {
									console.log(error)
								})
						} else {
							var signStr =
								"access-token=" +
								this.accessToken +
								"&appsercert=" +
								this.appsercert +
								'&teamname=' +
								this.title
							// console.log(signStr)
							this.sha = hex_sha1(signStr);
							console.log(this.sha)
							this.$axios({
									url: this.$baseUrl.addtask.url + '?access-token=' + this.accessToken + '&sign=' + this.sha,
									method: 'post'
								}, {
									'access-token': this.accessToken,
									sign: this.sha,
									teamname: this.title,
									start_date: this.starttime,
									end_date: this.endtime,
									template_id: this.moulde_id
								})
								.then(res => {
									if (res.data.t_teamName == this.title) {
										uni.showToast({
											title: '添加成功'
										})
										this.title = ''
										this.imgList = []
										setTimeout(() => {
											uni.reLaunch({
												url: '/pages/item/index'
											})
										}, 1200)
									} else {
										uni.showToast({
											title: '添加失败',
											icon: 'none'
										})
									}
								}, (error) => {
									console.log(error)
								})
						}
					}
				}

			},
			startChange(e) {
				this.starttime = e.detail.value
			},
			endChange(e) {
				this.endtime = e.detail.value
			},
			changeEndtime(index) {
				this.tabIndex = index;
				this.$refs.picker.show();
			},
			//截止时间
			onConfirm3(val) {
				console.log(val);
				this.endtime = val.result
			},
			changeStarttime(index) {
				this.tabIndex = index;
				this.$refs.picker2.show();
			},
			//开始时间
			onConfirm(val) {
				console.log(val);
				this.starttime = val.result
			},
			//项目模板
			gomouldlist() {
				uni.navigateTo({
					url: '/pages/mouldList/index'
				})
			},
			goAddMember() {
				var _this = this
				uni.request({
					url: 'http://testapi.shiliucrm.com/v1/hwechat_callback/callbacktask/getjsapiticket',
					data: {
						url: window.location.href.split('#')[0]
					},
					success: (res) => {
						console.log(res)
						wx.config({
							debug: false,
							beta: true,
							appId: res.data.appid,
							timestamp: res.data.timestamp,
							nonceStr: res.data.noncestr,
							signature: res.data.signature,
							jsApiList: [
								'selectEnterpriseContact'
							]
						});
						wx.ready(function() {
							var h = wx.invoke || WeixinJSBridge.invoke;
							h("selectEnterpriseContact", {
								fromDepartmentId: 1,
								mode: "multi",
								type: ["user"],
								selectedDepartmentIds: [],
								selectedUserIds: []
							}, function(res) {
								// alert(JSON.stringify(res))
								if (res.err_msg == "selectEnterpriseContact:ok") {
									if (typeof res.result == 'string') {
										res.result = JSON.parse(res.result) //由于目前各个终端尚未完全兼容，需要开发者额外判断result类型以保证在各个终端的兼容性
									}
									var selectedUserList = res.result.userList; // 已选的成员列表
									for (var i = 0; i < selectedUserList.length; i++) {
										var user = selectedUserList[i];
										_this.imgList = _this.imgList.concat(user.avatar)
										// alert(JSON.stringify(_this.imgList))
										var userId = user.id; // 已选的单个成员ID
										getID(userId)

										function getID(id) {
											uni.request({
												url: 'http://testapi.shiliucrm.com/v1/hwechat_callback/callbacktask/getuserid',
												data: {
													id: id
												},
												success: (res) => {
													// _this.idList = _this.idList.concat(res.data.user_id)
													this.idList.push(res.data.user_id)
												}
											})
										}
									}
								}
							})
						});
					},
				})
			}
		},
		onLoad() {
			// var list = uni.getStorageSync('login')
			// // alert(JSON.stringify(list))
			// if(list){
			// 	this.accessToken = list.access_token
			// 	this.appsercert = list.appsercert
			// }
			var list = uni.getStorageSync('login');
			if (list) {
				this.accessToken = list.access_token
				this.appsercert = list.appsercert
			}

		},
		onTabItemTap() {
			console.log('点击了添加项目页面')
			uni.switchTab({
				url: '/pages/additem/index'
			})
		},
		onShow() {
			// #ifdef H5
			document.title = 'handone'
			ChangePageTitle('handone')
			// #endif
			let list = uni.getStorageSync('list')
			if (list) {
				console.log(list)
				this.moulde_id = list.moulde_id
				this.mould_name = list.moulde
				// this.imgList = this.imgList.concat(list) 
				uni.removeStorageSync('list')
			}
			var date = new Date()
			var y = date.getFullYear()
			var m = date.getMonth() + 1
			var d = date.getDate()
			console.log(y, m, d)
			// this.starttime = y + "-" + m + "-" + d;
			// this.endtime = y + "-" + m+1 + "-" + d; 
			this.pickVal = [y - 2000, m - 1, d - 1]
		}
	}
</script>

<style>
	/* * {
		margin: 0;
		padding: 0;
	} */

	page {
		background: #F3F3F3;
	}
	
	/* .btn {
		width: 630upx;
		height: 90upx;
		margin: 60upx auto 0;
	}
	
	.btn a {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 50upx;
		background: #0081ff;
		text-align: center;
		line-height: 90upx;
		color: #fff;
		font-size: 32upx;
	} */

	/* .content {
		width: 100%;
		box-sizing: border-box;
		border-bottom: 2upx solid #F3F3F3;
		background: #fff;
	}

	.content textarea {
		width: 100%;
		height: 100upx;
		padding: 20upx;
		box-sizing: border-box;
	}

	.select {
		width: 100%;
		overflow: hidden;
	}

	.select view {
		width: 100%;
		float: left;
	}

	.select .title {
		width: 100%;
		padding: 10upx 40upx;
		box-sizing: border-box;
		font-size: 24upx;
		color: #B0B0B0;
	}

	.man {
		width: 100%;
		overflow: hidden;
		padding: 0 20upx 0 40upx;
		box-sizing: border-box;
		margin-top: 20upx;
		border-bottom: 2upx solid #F3F3F3;
		border-top: 2upx solid #F3F3F3;
		height: 100upx;
	} */

	/* .man .sp1 {
		width: 80%;
		height: 100upx;
		float: left;
		box-sizing: border-box;
		font-size: 28upx;
		line-height: 100upx;
	}

	.man .sp1 span {
		width: 60upx;
		height: 60upx !important;
		border-radius: 50%;
		margin-right: 10upx;
	}

	.man .sp1 image {
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
		margin-top: 20upx;
	}

	.man .sp2 {
		width: 60upx;
		height: 60upx;
		float: right;
		padding: 4upx 0 0 0;
		margin-top: 18upx;
	}

	.man .sp2 image {
		width: 100%;
		height: 100%;

	} */

	/* .lab {
		width: 100%;
		height: 80upx;
		overflow: hidden;
		padding: 0 0 0 20upx;
		box-sizing: border-box;
		border-bottom: 2upx solid #F3F3F3;
		background: #fff;
	}

	.lab1 {
		float: left;
		width: 24%;
		height: 80upx;
		text-align: left;
		font-size: 28upx;
		line-height: 80upx;
	}

	.lab2 {
		float: right;
		width: 75%;
		overflow: hidden;
	}

	.select input {
		width: 460upx;
		height: 100%;
		float: left;
		text-align: right;
		padding: 20upx 0;
		box-sizing: border-box;
		color: #000;
	}

	.select .right {
		float: right;
		padding: 20upx;
		box-sizing: border-box;

	}

	.select .right image {
		width: 40upx;
		height: 40upx;
	}

	.select .sp {
		float: left !important;
		width: 460upx;
		height: 80upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding: 10upx 0;
		box-sizing: border-box;
		text-align: right;
	} */

	/* .select .sp span {
		text-align: center;
		font-size: 26upx;
		box-sizing: border-box;
	}

	.select .sp span image {
		width: 40upx;
		height: 40upx;
		border-radius: 50%;
		margin: 10upx 4upx 0;
	}

	.max_input {
		font-size: 28upx;
	} */
</style>
