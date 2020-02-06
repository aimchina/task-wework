<template>
	<div>
		<!-- <view class="box-loading2" v-if="isShow_loading">
			<Loading13></Loading13>
		</view> -->
		<view class="box1">
			<view class="title">
				<span>{{t_nickname}}</span>
				<span>{{detail.t_addTime}}</span>
			</view>
			<view class="content">
				<v-edit-div :value='value' @input='changeText'></v-edit-div>
			</view>
			<!-- <view class="footer">
				<span>八个小时之后的需求</span>
				<span>待定需求</span>
			</view> -->
		</view>
		<view class="kong">
		</view>
		<view class="box2">
			<view class='lab' for="" @click="gocustomList">
				<view class="lab1">
					<span><span>相关成员</span></span>
				</view>
				<view class="lab2 select">
					<view class="sp">
						<span v-for='item in memberlist'>
							@{{item.user.t_nickname}}
						</span>
						<span v-for='item in imgList'>
							@{{item}}
						</span>
					</view>
					<span class='right'>
						<image src="/static/images/222.png" mode=""></image>
					</span>
				</view>
			</view>
			<view class='lab' for="" @click="changeEndtime(1)">
				<view class="lab1">
					<span><span>设置截止时间</span></span>
				</view>
				<view class="lab2 select">
					<input type="text" class="max_input " v-model="endtime" disabled placeholder="" />
					<span class='right'>
						<image src="/static/images/222.png" mode=""></image>
					</span>
				</view>
			</view>
			<view class='lab' for="" @click="goaddFile">
				<view class="lab1">
					<span><span>附件</span></span>
				</view>
				<view class="lab2 select">
					<input type="text" class="max_input " v-model="file" disabled placeholder="" />
					<span class='right'>
						<image src="/static/images/222.png" mode=""></image>
					</span>
				</view>
			</view>
			<view class='lab' for="" @click="focus">
				<view class="lab1">
					<span><span>{{active}}</span></span>
				</view>
				<view class="lab2 select">
					<input type="text" class="max_input " disabled placeholder="" />
					<span class='right'>
						<image src="/static/images/222.png" mode=""></image>
					</span>
				</view>
			</view>
			<view class='lab' for="" @click="delmission">
				<view class="lab1">
					<span><span>删除任务</span></span>
				</view>
				<view class="lab2 select">
					<input type="text" class="max_input " disabled placeholder="" />
					<span class='right'>
						<image src="/static/images/222.png" mode=""></image>
					</span>
				</view>
			</view>

		</view>
		<view class="kong">

		</view>
		<view class="box4">
			<view class='lab' for="" @click="complete">
				<view class="lab1">
					<span><span>我已完成</span></span>
				</view>
			</view>
		</view>
		<view class="kong">

		</view>
		<view class="box3">
			<view class="reply">
				回复{{reply}}
			</view>
			<view class="list-box">
				<view style=""></view>
				<view class="container_of_slide" v-for="(item,index) in list" :key="index" :ref="'list'+index">
					<view class="slide_list" @touchstart="touchStart($event,index)" @touchend="touchEnd($event,index)" @touchmove="touchMove($event,index)"
					 @tap="recover(index)" :style="{transform:'translate3d('+item.slide_x+'px, 0, 0)'}">
						<view class="now-message-info" hover-class="uni-list-cell-hover" :style="{width:Screen_width+'px'}">
							<view class="list-right">
								<view class="list-title">{{item.user.t_nickname}}</view>
								<view class="list-detail">{{item.t_replyTime}}</view>
							</view>
							<view class="list-right-1">
								{{item.t_replyContent}}
							</view>
							<!-- <view class="titlebox1">
								<span class='sp1'>{{item.user.t_nickname}}</span>
								<span class='sp2'>{{item.t_replyTime}}</span>
							</view>
							<view class="titlebox2">
								{{item.t_replyContent}}
							</view> -->
						</view>
						<view class="group-btn">
							<view class="removeM btn-div" @tap="removeM(index, item.id)">
								删除
							</view>
						</view>
						<view style="clear:both"></view>
					</view>
				</view>
			</view>
		</view>
		<view class="kk" style="width: 100%;height: 100upx;">

		</view>
		<view class="reply_content iphoneX" v-isIphoneX>
			<view class="con">
				<span>
					<textarea ref='ipt' speech x-webkit-speech @focus="iosInputFocus" @blur="outInputFocus" onwebkitspeechchange='alert(this.value)'
					 type="text" v-model="comment_con" value="" placeholder="请输入回复内容" />
					</span>
				<span @click='submit'>发送</span>
			</view>
		</view>
		<w-picker :startYear="startYear" endYear="2030" :value="pickVal" step="1" @confirm="onConfirm3" ref="picker"
		 themeColor="#f00"></w-picker>
	</div>
</template>

<script>
	import v_edit_div from '@/components/Ainput/Ainput.vue';
	import wPicker from "@/components/w-picker/w-picker.vue";
	import Loading13 from "@/components/loading/loading13.vue";
	import hex_sha1 from "sha1";
	import axios from "axios";
	import wx from 'weixin-js-sdk';
	var Fly = require("flyio/dist/npm/fly");
	var fly = new Fly;
	import {
		ChangePageTitle
	} from '../../title.js'
	export default {
		data() {
			return {
				text: '',
				value: '',
				comment_con: '',
				tabIndex: 0,
				active: '关注任务',
				actfocus: true,
				accessToken: '64e9275246c6545a3b5d3ad060fe4c516f44d556',
				appsercert: 'MTExMTEx',
				id: '',
				t_nickname: '',
				endtime: '',
				detail: [],
				file: "", // 附件
				price: '', //价值
				reply: '', //评论
				memberlist: [], //相关人员列表
				uploadlist: [], //附件列表
				imgList: [],
				startYear: '2000',
				userInput: '',
				pickVal: [],
				replylist: [],
				visible: false,
				start_slide_x: 0,
				isShow_loading: true,
				btnWidth: 0,
				startX: 0,
				LastX: 0,
				startTime: 0,
				screenName: '',
				idList: [9112],
				list: [],
				btuBottom: '0',
				secondHeight: ''
			}
		},
		computed: {
			Screen_width() {
				return uni.getSystemInfoSync().windowWidth;
			}
		},
		watch: { //处理iOS6.7.4之后软键盘关闭后页面无法回退到原来正常的位置
			userInput: function(val) {
				console.log(val)
				if (val) {
					setTimeout(() => {
						document.body.scrollTop = document.body.scrollHeight
					}, 400)
				} else {
					setTimeout(() => {
						document.body.scrollTop = document.body.scrollHeight
					}, 400)
				}
			}
		},
		components: {
			'v-edit-div': v_edit_div,
			wPicker,
			Loading13
		},
		methods: {
			//滑动
			touchStart(e, index) {
				//记录手指放上去的时间
				var i = 'list' + index
				console.log(i)
				console.log(this.$refs.list0)
				this.startTime = e.timeStamp;
				//记录滑块的初始位置
				this.start_slide_x = this.list[index].slide_x;
				// 按钮宽度
				uni.createSelectorQuery()
					.selectAll('.group-btn')
					.boundingClientRect()
					.exec(res => {
						if (res[0] != null) {
							this.btnWidth = res[0][index].width * -1;
						}
					});
				// 记录上一次开始时手指所处位置
				this.startX = e.touches[0].pageX;
				// 记录上一次手指位置
				this.lastX = this.startX;
				//初始化非当前滑动消息列的位置
				this.list.forEach((item, eq) => {
					if (eq !== index) {
						item.slide_x = 0;
					}
				});
			},
			// 滑动中
			touchMove(e, index) {
				const endX = e.touches[0].pageX;
				const distance = endX - this.lastX;
				// 预测滑块所处位置
				const duang = this.list[index].slide_x + distance;
				// 如果在可行区域内
				if (duang <= 0 && duang >= this.btnWidth) {
					this.list[index].slide_x = duang;
				}
				// 此处手指所处位置将成为下次手指移动时的上一次位置
				this.lastX = endX;
			},
			// 滑动结束
			touchEnd(e, index) {
				let distance = 10;
				const endTime = e.timeStamp;
				const x_end_distance = this.startX - this.lastX;
				if (Math.abs(endTime - this.startTime) > 200) {
					distance = this.btnWidth / -2;
				}
				// 判断手指最终位置与手指开始位置的位置差距
				if (x_end_distance > distance) {
					this.list[index].slide_x = this.btnWidth;
				} else if (x_end_distance < distance * -1) {
					this.list[index].slide_x = 0;
				} else {
					this.list[index].slide_x = this.start_slide_x;
				}
			},
			// 点击回复原状
			recover(index) {
				this.list[index].slide_x = 0;
			},
			// 删除
			removeM(index, id) {
				let self = this
				console.log('点击删除')
				uni.showModal({
					title: '',
					content: '确定要删除该信息吗？',
					confirmText: '删除',
					confirmColor: '#ff3b32',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定')
							// self.list.splice(index, 1)
							var signStr =
								"access-token=" +
								self.accessToken +
								"&appsercert=" +
								self.appsercert +
								'&id=' +
								self.id
							// console.log(signStr)
							self.sha = hex_sha1(signStr);
							console.log(self.sha)
							self.$axios({
									url: 'https://testapi.shiliucrm.com/v2/task/replies/' + self.id + '?access-token=' + self.accessToken +
										'&sign=' + self
										.sha,
									method: 'delete'
								})
								.then(res => {
									console.log(res)
									if (res.data.success) {
										uni.showToast({
											title: '删除成功',
											icon: 'none'
										})
										this.getdetail()
									} else {
										uni.showToast({
											title: res.data.message,
											icon: 'none'
										})
									}
								}, (error) => {
									console.log(error)
								})
							// uni.showToast({
							// 	icon: "success",
							// 	title: '操作成功!',
							// 	duration: 2000
							// });
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				});
			},
			//处理iOS软键盘遮挡输入框
			iosInputFocus: function() { //处理iOS软键盘遮挡输入框
				this.userInput = true
				if (this.isIOS()) {
					console.log()
					setTimeout(() => {
						document.body.scrollTop = document.body.scrollHeight
					}, 100)
				}
			},
			outInputFocus() {
				this.userInput = false
			},
			isIOS() {
				var isIphone = window.navigator.userAgent.toLowerCase().indexOf("iphone") > -1;
				var isIpad = window.navigator.userAgent.toLowerCase().indexOf("ipad") > -1;
				return isIphone || isIpad;
			},
			gocustomList() {
				var _this = this
				// uni.navigateTo({
				// 	url:'/pages/memberlist/index'
				// })
				// _this.amendmember()
				uni.request({
					url: 'http://testapi.shiliucrm.com/v1/hwechat_callback/callbacktask/getjsapiticket',
					data: {
						url: window.location.href.split('#')[0]
					},
					success: (res) => {
						console.log(res)
						wx.config({
							debug: false,
							beta: false,
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
								fromDepartmentId:-1,
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
										_this.imgList = _this.imgList.concat(user.name)
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
													// alert(JSON.stringify(res))
													// _this.idList = _this.idList.concat(res.data.user_id)
													_this.idList.push(res.data.user_id)
													// alert(JSON.stringify(_this.idList))
													if(_this.idList){
														_this.amendmember()
													}
														
													// _this.$nextTick(()=>{
													// 	_this.amendmember()
													// })
												}
											})
										}
									}
								}
							})
						});
					},
				})
			},
			changeEndtime(index) {
				this.tabIndex = index;
				this.$refs.picker.show();
			},
			//截止时间
			onConfirm3(val) {
				console.log(val);
				this.endtime = val.result
				if (this.endtime) {
					this.missionedit_time()
				}
			},
			interval() {
				let input = this.$refs.ipt
				console.log(this.$refs.ipt)
				setInterval(() => {
					// input.scrollIntoViewIfNeeded();
				}, 1000);
			},
			goaddFile() {
				// console.log(this.uploadlist)
				var files = JSON.stringify(this.uploadlist)
					uni.navigateTo({
						url: '/pages/addfile/index?id=' + this.id ,
						// + '&file=' + files
					})
				// }
			},
			goaddmoney() {
				uni.navigateTo({
					url: '/pages/addprice/index'
				})
			},
			focus() {
				console.log(this.actfocus)
				if (this.actfocus) {
					this.actfocus = !this.actfocus
					// this.active = '关注任务'
					// uni.showToast({
					// 	title: '取消成功',
					// 	icon: 'none'
					// })
					var signStr =
						"access-token=" +
						this.accessToken +
						"&appsercert=" +
						this.appsercert +
						'&id=' +
						this.id
					// console.log(signStr)
					this.sha = hex_sha1(signStr);
					console.log(this.sha)
					uni.request({
						// /v1/task/task-attentions/1
						url: 'https://testapi.shiliucrm.com/v1/task/task-attentions/' + this.id + '?access-token=' + this.accessToken +
							'&sign=' + this.sha,
						method: 'DELETE',
						header: {
							'content-type': 'application/x-www-form-urlencoded',
						},
						success: (res) => {
							console.log(res)
							// alert(JSON.stringify(res))
							if (res.data.msg == '成功') {
								this.active = '关注任务'
								uni.showToast({
									title: '取消成功',
									icon: 'none'
								})
							}
						}
					})
				} else {
					this.actfocus = !this.actfocus
					var signStr =
						"access-token=" +
						this.accessToken +
						"&appsercert=" +
						this.appsercert +
						'&task_id=' +
						this.id
					// console.log(signStr)
					this.sha = hex_sha1(signStr);
					console.log(this.sha)
					this.$axios({
							url: this.$baseUrl.followmission.url + '?access-token=' + this.accessToken + '&sign=' + this.sha,
							method: 'post'
						}, {
							task_id: this.id
						})
						.then(res => {
							console.log(res)
							if (res.data.status == 1) {
								this.active = '取消关注'
								uni.showToast({
									title: '关注成功',
									icon: 'none'
								})
							}
						}, (error) => {
							console.log(error)
						})
				}
			},
			//删除任务
			delmission() {
				uni.showModal({
					title:'提示',
					content:'是否确认删除？此操作不可恢复',
					success: (res) => {
						if(res.confirm){
							var signStr =
								"access-token=" +
								this.accessToken +
								"&appsercert=" +
								this.appsercert +
								'&id=' +
								this.id
							// console.log(signStr)
							this.sha = hex_sha1(signStr);
							console.log(this.sha)
							this.$axios({
									url: 'https://testapi.shiliucrm.com/v2/task/tasks/' + this.id + '?access-token=' + this.accessToken + '&sign=' +
										this.sha,
									method: 'delete'
								})
								.then(res => {
									console.log(res)
									if (res.data.success) {
										// setTimeout(() => {
											uni.navigateBack({
												delta: 1
											})
										// }, 400)
									} else {
										uni.showToast({
											title: res.data.message,
											icon: 'none'
										})
									}
								}, (error) => {
									console.log(error)
								})
						}
					}
				})
				
			},
			//强制完成
			complete() {
				// console.log('强制完成');
				var signStr =
					"access-token=" +
					this.accessToken +
					"&appsercert=" +
					this.appsercert +
					'&tid=' +
					this.id
				// console.log(signStr)
				this.sha = hex_sha1(signStr);
				console.log(this.sha)
				this.$axios({
						url: this.$baseUrl.complemission.url + '?access-token=' + this.accessToken + '&sign=' + this.sha,
						method: 'post'
					}, {
						tid: this.id
					})
					.then(res => {
						console.log(res)
						if (res.data.state == 1) {
							uni.navigateBack({
								delta: 1
							})
						} else {
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							})
						}
					}, (error) => {
						console.log(error)
					})
			},
			changeText(e) {
				console.log(e)
				this.value = e
				this.$nextTick(() => {
					this.missionedit_content()
				})
			},
			//编辑
			missionedit_content() {
				console.log(11)
				var signStr =
					"access-token=" +
					this.accessToken +
					"&appsercert=" +
					this.appsercert +
					'&t_id=' +
					this.id +
					'&t_taskContent=' +
					this.value
				// console.log(signStr)
				this.sha = hex_sha1(signStr);
				console.log(this.sha)
				this.$axios({
						url: this.$baseUrl.missionedit.url + '?access-token=' + this.accessToken + '&sign=' + this.sha,
						method: 'post'
					}, {
						t_id: this.id,
						t_taskContent: this.value
					})
					.then(res => {
						console.log(res)
					}, (error) => {
						console.log(error)
					})
			},
			//截止时间
			missionedit_time() {
				var signStr =
					"access-token=" +
					this.accessToken +
					"&appsercert=" +
					this.appsercert +
					'&t_id=' +
					this.id +
					'&t_taskEndTime=' +
					this.endtime
				// console.log(signStr)
				this.sha = hex_sha1(signStr);
				console.log(this.sha)
				this.$axios({
						url: this.$baseUrl.missionedit.url + '?access-token=' + this.accessToken + '&sign=' + this.sha,
						method: 'post'
					}, {
						t_id: this.id,
						t_taskEndTime: this.endtime
					})
					.then(res => {
						console.log(res)
					}, (error) => {
						console.log(error)
					})
			},
			//回复
			submit() {
				this.userInput = false
				var signStr =
					"access-token=" +
					this.accessToken +
					"&appsercert=" +
					this.appsercert +
					'&t_replycontent=' +
					this.comment_con +
					'&t_teamtaskid=' +
					this.id
				// console.log(signStr)
				this.sha = hex_sha1(signStr);
				console.log(this.sha)
				this.$axios({
						url: this.$baseUrl.comment_content.url + '?access-token=' + this.accessToken + '&sign=' + this.sha,
						method: 'post'
					}, {
						t_teamTaskId: this.id,
						t_replyContent: this.comment_con
					})
					.then(res => {
						if (res.data.t_replyContent) {
							this.getdetail()
							this.comment_con = ''
						} else {
							uni.showToast({
								title: '回复失败',
								icon: 'none'
							})
						}
					}, (error) => {
						console.log(error)
					})
			},
			// 修改相关成员
			amendmember(){
				var idStr = this.idList.join(',')
				var signStr =
					"access-token=" +
					this.accessToken +
					'&addmember=' +
					idStr +
					"&appsercert=" +
					this.appsercert +
					'&t_id=' +
					this.id
				// console.log(signStr)
				this.sha = hex_sha1(signStr);
				console.log(this.sha)
				this.$axios({
						url: this.$baseUrl.relatedman.url + '?access-token=' + this.accessToken + '&sign=' + this.sha,
						method: 'post'
					}, {
						t_id: this.id,
						addmember: idStr
					})
					.then(res => {
						console.log(res)
						// alert(JSON.stringify(res))
						if(res.deta.msg == '修改成功'){
							this.idList = []
						}
					}, (error) => {
						console.log(error)
					})
			},
			//获取详情
			getdetail() {
				var signStr =
					"access-token=" +
					this.accessToken +
					"&appsercert=" +
					this.appsercert
				// console.log(signStr)
				this.sha = hex_sha1(signStr);
				console.log(this.sha)
				this.$axios({
						url: this.$baseUrl.missiondetail.url + this.id + '?access-token=' + this.accessToken + '&sign=' + this.sha,
						method: 'get'
					})
					.then(res => {
						console.log(res)
						this.isShow_loading = false
						uni.hideLoading()
						this.detail = res.data.task
						this.t_nickname = this.detail.user.t_nickname
						this.value = this.detail.t_taskContent
						this.endtime = this.detail.t_taskEndTime
						this.file = this.detail.upload.length
						this.price = this.detail.worth
						this.reply = this.detail.reply.length
						this.memberlist = this.detail.taskmember
						console.log(this.memberlist)
						// alert(JSON.stringify(this.memberlist))
						this.uploadlist = this.detail.upload
						if (this.detail.is_attention == true) {
							this.active = '取消关注'
							this.actfocus = true
						} else {
							this.active = '关注任务'
							this.actfocus = false
						}
						for (var i = 0; i < this.detail.reply.length; i++) {
							this.$set(this.detail.reply[i], 'slide_x', 0)
						}
						this.list = this.detail.reply
						console.log(this)
						// this.list = res.data.teamtask
						// this.TabList = res.data.teamtask
						// this.$nextTick(() => {
						// 	this.getel()
						// })
					}, (error) => {
						console.log(error)
					})
			}
		},
		onLoad(e) {
			this.id = e.id
		},
		onShow() {
			document.title = 'handone'
			ChangePageTitle('handone')
			this.isShow_loading = true
			uni.showLoading({
				title: '加载中'
			})
			var list = uni.getStorageSync('login');
			if (list) {
				this.accessToken = list.access_token
				this.appsercert = list.appsercert
			}
			this.getdetail()
			var date = new Date()
			var y = date.getFullYear()
			var m = date.getMonth() + 1
			var d = date.getDate()
			console.log(y, m, d)
			this.pickVal = [y - 2000, m - 1, d - 1]
		},
		mounted() {
			// document.body.addEventListener('touchmove',function(e){
			// 	console.log(e)
			// 	e.preventDefault();
			// })
		}

	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	input,
	textarea,
	button,
	select {
		outline: none;
		resize: none;
		border: 0 none;
		color: #555;
		font-family: "Arial", "Microsoft YaHei";
		font-size: 28upx;
	}

	page {
		background-color: #F3F3F3;
	}

	.kong {
		width: 100%;
		height: 20upx;
		background: #F3F3F3;
	}

	.box2 {
		background: #fff;
	}

	.box4 {
		background: #fff;
	}

	.lab {
		width: 100%;
		height: 80upx;
		overflow: hidden;
		padding: 0 0 0 20upx;
		box-sizing: border-box;
		border-bottom: 2upx solid #F3F3F3;
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
		padding: 12upx 0;
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

	.box1 {
		width: 100%;
		padding: 20upx 20upx;
		box-sizing: border-box;
		background: #FFFFFF;
	}

	.box1 .title {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.box1 .title span {
		font-size: 28upx;
	}

	.content {
		width: 100%;
		padding: 10upx;
		box-sizing: border-box;
	}

	.text_box {
		width: 100%;
		/* height: 100%; */
		padding: 10upx;
		box-sizing: border-box;
		outline: 0;
		font-size: 26upx;
	}

	.footer {
		width: 100%;
		margin-top: 10upx;
		display: flex;
		justify-content: flex-start;
	}

	.footer span {
		font-size: 26upx;
	}

	.footer span:nth-child(1) {
		margin-right: 30upx;
	}

	.box3 {
		width: 100%;
		padding: 10upx 0;
		box-sizing: border-box;
		background: #FFFFFF;
	}

	.box3 .reply {
		width: 100%;
		height: 60upx;
		padding: 0 20upx;
		box-sizing: border-box;
		border-bottom: 2upx solid #F3F3F3;
		line-height: 60upx;
		font-size: 28upx;
	}

	/* .box3 .reply span {
		
	} */

	.reply_content {
		width: 100%;
		/* height: 80upx; */
		position: fixed;
		padding: 10upx 20upx;
		box-sizing: border-box;
		border-top: 2upx solid #CCCCCC;
		bottom: 0;
		left: 0;
		overflow: hidden;
		background: #fff;
	}

	.reply_content span {
		float: left;
	}

	.con {
		width: 686upx;
		margin: 0 auto;
	}

	/* .reply_content span:nth-child(1) {
		width: 40upx;
		height: 100%;
		margin-right: 80upx;
	} */

	.reply_content span:nth-child(1) {
		width: 540upx;
		margin-right: 6upx;
		/* height: 80upx;
		border-radius: 8upx; */
	}

	.reply_content span:nth-child(2) {
		/* float: right; */
		width: 140upx;
		height: 72upx;
		background: #0081FF;
		color: #FFFFFF;
		font-size: 24upx;
		text-align: center;
		line-height: 72upx;
		/* border-radius: 10upx; */
		border-radius: 10upx;
	}

	.reply_content span:nth-child(1) textarea {
		border: 2upx solid #CCCCCC;
		padding: 10upx 8upx;
		height: 70upx;
		border-radius: 10upx;
		line-height: 46upx;
		width: 100%;
		box-sizing: border-box;

	}

	.sp {
		float: left !important;
		width: 460upx;
		height: 80upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding: 10upx 0;
		box-sizing: border-box;
		text-align: right;
	}

	.sp span {
		/* float: right; */
		/* height: 100%; */
		text-align: center;
		/* line-height: 60upx; */
		font-size: 26upx;
		box-sizing: border-box;
		/* margin-right: 10upx; */
	}

	/* .sp span image {
		width: 40upx;
		height: 40upx;
		border-radius: 50%;
	} */

	.iphoneX {
		padding-bottom: env(safe-area-inset-bottom);
		/* padding-bottom:50upx; */

	}

	.index {
		background: #F8F8F8;
	}

	/* .list-box{
		padding: 20upx 0;
	} */
	.container_of_slide {
		width: 100%;
		overflow: hidden;
	}

	.slide_list {
		transition: all 100ms;
		transition-timing-function: ease-out;
		min-width: 200%;
		/* height: 160upx; */
		border-bottom: 2upx solid #F3F3F3;
		display: flex;
		align-items: stretch;
	}

	.now-message-info {
		box-sizing: border-box;
		/* display: flex; */
		/* align-items: center; */
		/* justify-content: space-between; */
		font-size: 16px;
		clear: both;
		/* height: 160upx; */
		/* padding: 0 30upx; */
		width: 100%;
		/* margin-bottom: 20upx; */
		background: #FFFFFF;
		padding: 10upx 20upx;
		/* box-sizing: border-box; */

	}

	.now-message-info,
	.group-btn {
		float: left;
	}

	.group-btn {
		display: flex;
		flex-direction: row;
		/* height: in; */
		min-width: 100upx;


	}

	.group-btn .btn-div {
		/* height: 160upx; */
		height: 100%;
		color: #fff;
		text-align: center;
		padding: 0 50upx;
		font-size: 34upx;
		/* line-height: 160upx; */
		align-items: center;
		display: -webkit-flex;
	}

	.group-btn .top {
		background-color: #c4c7cd;
	}

	.group-btn .removeM {
		background-color: #ff3b32;
	}


	.icon-circle {
		background: #3396fb;
		border-radius: 100%;
		width: 100upx;
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		color: #FFFFFF;
		font-weight: bold;
		font-size: 20px;
		float: left;
	}

	.list-right {
		width: 100%;
		float: left;
		/* margin-left: 25upx; */
		margin-right: 30upx;
		overflow: hidden;
	}

	.list-right-1 {
		float: left;
		color: #000;
		overflow: hidden;
		width: 100%;
		/* padding: 10upx; */
		box-sizing: border-box;
		font-size: 24upx;
	}

	/* .titlebox1,.titlebox2{
		width: 750upx;
	} */
	.list-title {
		width: 350upx;
		line-height: 1.5;
		float: left;
		overflow: hidden;
		margin-bottom: 10upx;
		color: #000000;
		font-size: 28upx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.list-detail {
		width: 350upx;
		font-size: 24upx;
		float: right;
		color: #000;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		text-align: right;
	}

	.button-box {
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 998;
		background: #F8F8F8;
	}

	.btn-sub {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		float: left;
		width: 100%;
		height: 100upx;
		background: #F8F8F8;
		color: #7fb2ff;
	}

	.btn-plusempty {
		width: 110upx;
		height: 110upx;
		background: #007bfa;
		position: fixed;
		bottom: 50upx;
		right: 20upx;
		border-radius: 100%;
		overflow: hidden;
		text-align: center;
		line-height: 110upx;
	}

	.empty {
		color: #999999;
	}

	.plusempty-img {
		width: 50upx;
		height: 50upx;
		margin-top: 30upx;
	}

	.scan-box {
		display: block;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.3);
		z-index: 99999;
	}

	.scan-item {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		position: relative;
		margin: 0 auto;
		width: 80%;
		height: 100%;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		opacity: 1;

	}

	.scan-content {
		position: relative;
		width: 400upx;
		height: 500upx;
		background: #FFFFFF;
		border-radius: 20upx;
	}

	.scan-icon {
		position: absolute;
		top: -50upx;
		left: 150upx;
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		box-sizing: border-box;
		background: #FFFFFF;
		padding: 20upx;
	}

	.scan-icon-img {
		width: 100%;
		height: 100%;
	}

	.scan-text {
		position: absolute;
		bottom: 40upx;
		left: 0;
		width: 100%;
		text-align: center;
		font-size: 14px;
	}

	.scan-share {
		width: 100%;
		height: 100%;
	}

	.scan-img {
		width: 300upx;
		height: 300upx;
		margin: auto;
		display: block;
		position: absolute;
		top: 80upx;
		left: 50upx;
		z-index: 99;
	}

	.scan-btn {
		top: -30upx;
		left: auto;
		right: -30upx;
		bottom: auto;
		position: absolute;
		width: 64upx;
		height: 64upx;
		border-radius: 50%;
		z-index: 99999;
		display: flex;
	}

	.uni-list-cell-hover {
		background-color: #eeeeee;
	}

	.bottom-btn-hover {
		background: #0564c7 !important;
		;
	}

	.box-loading2 {
		position: fixed;
		display: flex;
		height: 100%;
		/* border: 1px solid rgba(255, 255, 255, 0.1); */
		border-radius: 10upx;
		margin-top: 30upx;
		/* flex: 0 0 600upx; */
		/* background: #040038; */
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
</style>
