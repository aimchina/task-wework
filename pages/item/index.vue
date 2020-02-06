<template>
	<view class="content">
		<!-- <header-top :back='back1' :title='title'></header-top> -->
		<!-- <view @click="btn" style="width: 100%;height: 80upx; background: red; color: #fff;">点我</view> -->
		<view class="box" v-if="dis">
			<view class="ctx">
				<span>加星号的项目1</span>
			</view>
			<view class="context">
				<ul>
					<li v-for='(item,index) in impList' :key='index' @click.stop='godetail(item.t_id)' @touchstart="delItem(item.t_id)"
					 @touchmove='touchmove' @touchend='touchend'>
						{{item.t_teamName}}
					</li>
				</ul>
			</view>
		</view>
		<view class="box2" v-if="dis">
			<view class="ctx">
				<span>我的项目1</span>
			</view>
			<view class="context2">
				<ul>
					<li v-for='(item,index) in commonList' :key='index' @click.stop='godetail(item.t_id)' @touchstart="delItem(item.t_id)"
					 @touchmove='touchmove' @touchend='touchend'>
						<span><img src="" alt=""></span>
						<span>{{item.t_teamName}}</span>
						<span v-if="item.t_tag == 0">
							<image src="/static/images/jingdiananli_kongwujiaoxing_shoucang.png" mode="" @click.stop="setImp(item.t_id,item.t_tag)"></image>
						</span>
						<span v-if="item.t_tag == 1">
							<image src="/static/images/jingdiananli_wujiaoxing_shoucanghou.png" mode="" @click.stop="setImp(item.t_id,item.t_tag)"></image>
						</span>
					</li>
				</ul>
			</view>
		</view>
		<no-data v-if="dataImg"></no-data>
		<view :class="{'fix2':show}">
			<section v-isIphoneX :class="{'fixed_select':showList,'fixed_select2':!showList}" @click.stop>
				<!-- <p class="fixed_title">{{item.name}}</p> -->
				<view class="select_radio">
					<view class="vw2 vw" @touchstart='down' @touchend="defineDel">删除项目</view>
					<view class="kong" style="width: 100%;height: 20upx;background: #F3F3F3;"></view>
					<view class="vw1 vw" @click='leave_list' style="border-bottom: none;">取消</view>
				</view>
			</section>
			<section :class="{'fixed_select3':!showList2,'fixed_select4':showList2}" @click.stop v-isIphoneX>
				<p class="fixed_title2">是否删除此项目</p>
				<view class="select_radio2">
					<view class="vw1 vw3" @click='del_plate()'>确定</view>
					<view class="kong" style="width: 100%;height: 20upx;background: #F3F3F3;"></view>
					<view class="vw2 vw3" @click='cancel'>取消</view>
				</view>
			</section>
		</view>
		<view class="box-loading" v-if="isShow_loading">
			<Loading13></Loading13>
		</view>
		<!-- -->
		<view v-show="isShow">
			<uni-load-more :status="status"></uni-load-more>
		</view>
	</view>
</template>

<script>
	import hex_sha1 from "sha1";
	import noData from '../../components/noData/noData.vue'
	import uniLoadMore from "@/components/uni-load-more.vue";
	import Loading13 from "@/components/loading/loading13.vue";
	import axios from "axios";
	import wx from 'weixin-js-sdk'
	import {
		ChangePageTitle
	} from '../../title.js'
	export default {
		data() {
			return {
				back1: true,
				title: '客户名称',
				// accessToken: '64e9275246c6545a3b5d3ad060fe4c516f44d556',
				// appsercert: 'MTExMTEx',
				accessToken: '',
				appsercert: '',
				page: 1,
				commonList: [],
				impList: [],
				status: 'more',
				isShow: false,
				dis: false,
				isShow_loading: false,
				timeOutEvent: 0,
				ss: '',
				id: '',
				show: false,
				showList: false,
				showList2: false,
				isdown: '',
				dataImg:false
			}
		},
		components: {
			uniLoadMore,
			Loading13,
			noData
		},
		onLoad(e) {
			var ua = navigator.userAgent.toLowerCase()
			console.log('index')
			if (ua.indexOf('iphone') != -1 || ua.indexOf('android') != -1) {
				this.isShow_loading = true
				var list = uni.getStorageSync('login');
				// alert(JSON.stringify(list))
				if (list.access_token) {
					uni.request({
						url: 'https://testapi.shiliucrm.com/v1/hwechat_callback/callbacktask/authorize',
						data: {
							access_token: list.access_token
						},
						success: (res) => {
							// alert(JSON.stringify(res))
							if (res.data == 1) {
								this.accessToken = list.access_token
								this.appsercert = list.appsercert
								this.getlist()
							} else {
								window.location.href =
									'https://open.weixin.qq.com/connect/oauth2/authorize?appid=ww05249b75c1172723&redirect_uri=http://hdtest.handone.com/h5/%23/pages/login/index&response_type=code&scope=snsapi_privateinfo#wechat_redirect'
							}
						},
						fail: (err) => {
							console.log(err)
						}
					})
				} else {
					window.location.href =
						'https://open.weixin.qq.com/connect/oauth2/authorize?appid=ww05249b75c1172723&redirect_uri=http://hdtest.handone.com/h5/%23/pages/login/index&response_type=code&scope=snsapi_privateinfo#wechat_redirect'
				}
				// // var list2 = JSON.parse(list)
				// if(!list){
				// 	
				// }else{
				// 	this.accessToken = list2.access_token
				// 	this.appsercert = list2.appsercert
				// 	this.isShow_loading = true
				// 	this.getlist()
				// }
			} else if (ua.indexOf('windows') != -1 || ua.indexOf('mac') != -1) {
				window.location.href =
					'https://open.weixin.qq.com/connect/oauth2/authorize?appid=ww05249b75c1172723&redirect_uri=http://hdtest.handone.com/site/qylogin&response_type=code&scope=snsapi_userinfo#wechat_redirect  '
			}
		},
		methods: {
			gogunlain() {
				uni.navigateTo({
					url: '/pages/relehand/index'
				})
			},
			getlist() {
				let _this = this
				var signStr =
					"access-token=" +
					_this.accessToken +
					"&appsercert=" +
					_this.appsercert +
					"&page=" +
					_this.page;
				// console.log(signStr)
				_this.sha = hex_sha1(signStr);
				console.log(_this.sha)
				axios.get(_this.$baseUrl.tasklist.url + '?access-token=' + _this.accessToken + '&sign=' + _this.sha)
					.then((res) => {
						console.log(res)
						_this.isShow_loading = false
						if (res == undefined) {
							uni.showToast({
								title: '网络异常',
								icon: 'none'
							})
							_this.dataImg = true;
						} else {
							_this.commonList = res.data;
							if(_this.commonList.length == 0) {
								_this.dataImg = true;
							} else {
								_this.dis = true;
								for (var i = 0; i < res.data.length; i++) {
									if (res.data[i].t_tag == 1) {
										_this.impList = _this.impList.concat(res.data[i])
									}
								}
							}
							
						}
					})
					.catch((error) => {
						console.log(error);
						this.dataImg = true;
					});
			},
			//删除项目
			delItem(id) {
				console.log(this.timeOutEvent)
				this.ss = setInterval(() => {
					this.timeOutEvent++
					console.log(this.timeOutEvent)
					if (this.timeOutEvent >= 1) { //点击
						//此处为点击事件----在此处添加跳转详情页
						console.log('长按了')
						console.log(id)
						this.id = id
						this.show = true
						this.showList = true
						clearInterval(this.ss)
						this.timeOutEvent = 0
					}
				}, 1000)
			},
			touchmove: function(e) {
				// console.log(e)
				// this.timeOutEvent = 0;
				// e.preventDefault();
			},
			touchend: function(e) {
				// console.log(this.timeOutEvent);
				clearTimeout(this.timeOutEvent);
				if (this.timeOutEvent >= 1) { //点击
					//此处为点击事件----在此处添加跳转详情页
					clearInterval(this.ss)
					this.timeOutEvent = 0
				} else {
					clearInterval(this.ss)
					this.timeOutEvent = 0
				}
			},
			down() {
				this.isdown = true
			},
			//删除项目交互
			//取消
			leave_list() {
				this.show = false
				this.showList = false
				this.showList2 = false
			},
			//删除项目，弹出确认删除
			defineDel() {
				if (this.isdown) {
					this.showList = false
					this.showList2 = true
					this.isdown = false
				}
			},
			//是否删除此项目取消
			cancel() {
				this.leave_list()
			},
			//确定删除项目
			del_plate() {
				var _this = this
				var signStr =
					"access-token=" +
					_this.accessToken +
					"&appsercert=" +
					_this.appsercert +
					'&id=' +
					_this.id
				// console.log(signStr)
				_this.sha = hex_sha1(signStr);
				console.log(_this.sha)
				_this.$axios({
						url: this.$baseUrl.del_item.url + _this.id + '?access-token=' + _this.accessToken +
							'&sign=' + _this
							.sha,
						method: 'delete'
					})
					.then(res => {
						console.log(res)
						if (res.data.msg == '成功') {
							uni.showToast({
								title: '删除成功',
								icon: 'none'
							})
							_this.show = false
							_this.showList2 = false
							_this.dis = false
							_this.$nextTick(function() {
								_this.commonList = []
								_this.impList = []

								_this.getlist()
							})
						}
					}, (error) => {
						console.log(error)
					})
			},
			//跳转详情
			godetail(id) {
				uni.navigateTo({
					url: '/pages/itemdetail2/index?id=' + id
				})
			},
			//设置为常用项目
			setImp(id, i) {
				console.log(i)
				if (i == 0) {
					this.$axios({
							url: this.$baseUrl.isImportant.url + '?access-token=' + this.accessToken,
							method: 'post'
						}, {
							t_id: id,
							type: 1
						})
						.then(res => {
							console.log(res)
							this.dis = false
							this.commonList = []
							this.impList = []
							this.getlist()
						}, (error) => {
							console.log(error)
						})
				} else if (i == 1) {
					this.$axios({
							url: this.$baseUrl.isImportant.url + '?access-token=' + this.accessToken,
							method: 'post'
						}, {
							t_id: id,
							type: 0
						})
						.then(res => {
							console.log(res)
							this.dis = false
							this.commonList = []
							this.impList = []
							this.getlist()
						}, (error) => {
							console.log(error)
						})
				}

			}
		},
		mounted() {},
		onShow() {
			document.title = 'handone'
			ChangePageTitle('handone')
		}

	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	html,
	body,
	#app,
	.wx-pages {
		padding: 0;
		margin: 0;
		height: 100%;
		overflow: hidden;
		-webkit-overflow-scrolling: touch;
	}

	.box {
		width: 100%;
		overflow: hidden;
		/* margin-top: 100upx; */
	}

	.box ul li {}

	.ctx {
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		padding: 0 20upx;
		box-sizing: border-box;
		font-size: 28upx;
	}

	.context,
	.context2 {
		width: 100%;
		padding: 20upx;
		box-sizing: border-box;
		border-bottom: 2upx solid #F3F3F3;
		border-top: 2upx solid #F3F3F3;
		overflow: hidden;
	}

	.context2 {
		padding: 20upx 0 !important;
	}

	.context ul li {
		width: 48%;
		height: 160upx;
		margin: 10upx 6upx 20upx 8upx;
		background: #2f6ba7;
		float: left;
		list-style: none;
		border-radius: 6upx;
		font-size: 30upx;
		padding: 20upx;
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #FFFFFF;
	}

	.context2 ul li {
		list-style: none;
		overflow: hidden;
		float: left;
		height: 90upx;
		padding: 15upx 40upx;
		width: 100%;
		line-height: 60upx;
		font-size: 28upx;
		box-sizing: border-box;
		border-bottom: 2upx solid #F3F3F3;
	}

	.context2 ul li span {
		float: left;
	}

	.context2 ul li span:nth-child(1) {
		width: 60upx;
		height: 60upx;
		background: #2f6ba7;
		border-radius: 8upx;
		margin-right: 20upx;
	}

	.context2 ul li span:last-child {
		float: right;
		width: 60upx;
		height: 60upx;
	}

	.context2 ul li span:last-child image {
		width: 100%;
		height: 100%;
	}

	.box-loading {
		position: relative;
		display: flex;
		height: 1000upx;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 10upx;
		margin-top: 30upx;
		/* flex: 0 0 600upx; */
		/* background: #040038; */
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.fix2 {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 999;
	}

	.fixed_select {
		width: 100%;
		height: 14%;
		max-width: 1280upx;
		position: fixed;
		bottom: 0;
		background: white;
		z-index: 1000;
		-webkit-transition: all .4s;
		-moz-transition: all .4s;
	}

	.fixed_select2 {
		width: 100%;
		height: 14%;
		max-width: 1280upx;
		position: fixed;
		bottom: -10%;
		background: white;
		z-index: 51;
		-webkit-transition: all .4s;
		-moz-transition: all .4s;
	}

	.fixed_select3 {
		width: 100%;
		height: 14%;
		max-width: 1280upx;
		position: fixed;
		bottom: -25%;
		background: white;
		z-index: 1000;
		-webkit-transition: all .4s;
		-moz-transition: all .4s;
	}

	.fixed_select4 {
		width: 100%;
		height: 20%;
		max-width: 1280upx;
		position: fixed;
		bottom: 0;
		background: white;
		z-index: 51;
		-webkit-transition: all .4s;
		-moz-transition: all .4s;
	}

	.fixed_title {
		display: block;
		text-align: center;
		font-size: 24upx;
		color: #333;
		height: 70upx;
		line-height: 70upx;
		background: #ececec;
	}

	.fixed_title2 {
		display: block;
		text-align: center;
		font-size: 30upx;
		color: #333;
		height: 70upx;
		line-height: 70upx;
		/* background: #ececec; */
		border-bottom: 2upx solid #F3F3F3;
	}

	.select_radio,
	.select_radio2 {
		position: absolute;
		top: 0upx;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: auto;
	}

	.select_radio2 {
		top: 70upx !important;
	}

	.select_radio .vw,
	.select_radio2 .vw {
		padding: 20upx 40upx;
		line-height: 40upx;
		/* color: #555; */
		border-bottom: 2upx solid #ececec;
		/* font-size: 24upx; */
		text-align: center;
	}

	.select_radio .vw3,
	.select_radio2 .vw3 {
		padding: 20upx 40upx;
		line-height: 40upx;
		text-align: center;
	}

	.select_radio .vw1,
	.select_radio2 .vw1 {
		font-size: 32upx;
	}

	.select_radio .vw2,
	.select_radio2 .vw2 {
		font-size: 28upx;
		color: red;
	}
</style>
