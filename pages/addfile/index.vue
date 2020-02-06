<template>
	<div>
		<view class="list-box">
			<view class="container_of_slide" v-for="(item,index) in list" :key="index">

				<view class="slide_list" @click="previewImg()" @touchstart="touchStart($event,index)" @touchend="touchEnd($event,index)"
				 @touchmove="touchMove($event,index)" @tap="recover(index,item.path)" :style="{transform:'translate3d('+item.slide_x+'px, 0, 0)'}">
					<view class="now-message-info" hover-class="uni-list-cell-hover" :style="{width:Screen_width+'px'}">
						<view class="icon-circle">
							<image :src="item.path" mode=""></image>
						</view>
						<view class="list-right">
							<view class="list-title" v-if="item.name">{{item.name}}</view>
							<!-- <view class="list-detail">{{item.remarks}}</view> -->
						</view>
						<view class="list-right-1">
							{{item.nowtime}}
						</view>
					</view>
					<view class="group-btn">
						<view class="removeM btn-div" @click.stop="removeFile(item.id,index)">
							删除
						</view>
					</view>
					<view style="clear:both"></view>
				</view>
			</view>
		</view>
		<!-- <button type="primary" @click="addFile($event)">带那几</button> -->
		<view class="btn iphoneX" v-isIphoneX>
			<span class='sp1'>+添加附件</span>
			<view ref="input" class="input">
			</view>
		</view>
	</div>
</template>

<script>
	var Fly = require("flyio/dist/npm/fly")
	var fly = new Fly;
	import hex_sha1 from "sha1";
	import {
		ChangePageTitle
	} from '../../title.js'
	export default {
		data() {
			return {
				// imgList: [],
				start_slide_x: 0,
				accessToken: '64e9275246c6545a3b5d3ad060fe4c516f44d556',
				appsercert: 'MTExMTEx',
				btnWidth: 0,
				id: '',
				startX: 0,
				LastX: 0,
				startTime: 0,
				screenName: '',
				list: [],
				fileList: [],
				sha: '',
				uploadlist: []
			}
		},
		computed: {
			Screen_width() {
				return uni.getSystemInfoSync().windowWidth;
			}
		},
		directives: {
			isIphoneX:{
				bind: function(el, binding) {
					const _local = 'ios'
					let isIphoneX = false
					if (_local === 'ios' && window.screen.height) {
						isIphoneX = window.screen.height > 750 ? true : false
					}
					if (isIphoneX) {
							el.setAttribute(
								'style',
								` padding-bottom: 8vh !important;min-height: 8vh !important;`
							)
						// alert(binding.value)
						// if (binding.value === 'margin') {
						// 	console.log('use margin')
						// 	el.setAttribute('style', 'margin-bottom: 8vw !important;')
						// } else if (binding.value === 'height') {
						// 	console.log('use height')
						// 	el.setAttribute(
						// 		'style',
						// 		` padding-bottom: 18vh !important;min-height: 85vh !important;`
						// 	)
						// } else {
						// 	console.log('use padding')
						// 	el.setAttribute('style', 'padding-bottom: 8vw !important;')
						// }
					} else {
						if (binding.value === 'height') {
							el.setAttribute(
								'style',
								` padding-bottom: 11vh !important;min-height: 89vh !important;`
							)
						}
					}
				},
				update: function(el, binding) {}
			}
		},
		methods: {
			//查看大图
			previewImg(imgsUrl) {
				console.log(111)
				uni.previewImage({
					urls: imgsUrl,
					longPressActions: {
						itemList: ['预览', '保存图片'],
						success: function(data) {
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				});
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
						uni.hideLoading()
						console.log(res)
						this.detail = res.data.task
						this.list = this.detail.upload
						console.log(this.list)
						for (let item of this.list) {
							console.log(item)
							this.uploadlist.push(item.path)
						}
						var time = new Date()
						var y = time.getFullYear()
						var m = time.getMonth() + 1
						var d = time.getDate(); //得到日期
						for (var i = 0; i < this.list.length; i++) {
							this.$set(this.list[i], 'slide_x', 0)
							this.$set(this.list[i], 'nowtime', y + '-' + m + '-' + d)
						}
						// this.uploadlist = this.uploadlist.concat(list)
					}, (error) => {
						console.log(error)
					})
			},
			//删除附件
			removeFile(id,index) {
				this.$axios({
						url: this.$baseUrl.delFile.url + id,
						method: 'delete'
					})
					.then(res => {
						console.log(res)
						if(res.data.status == '删除成功'){
							this.getdetail()
							setTimeout(()=>{
								uni.showToast({
									title: res.data.status,
									icon: 'none'
								})
							},500)
						}	
					}, (error) => {
						console.log(error)
					})
			},
			// 滑动开始
			touchStart(e, index) {
				// console.log(e)
				// console.log(index)
				//记录手指放上去的时间
				this.startTime = e.timeStamp;
				//记录滑块的初始位置
				this.start_slide_x = this.list[index].slide_x;
				// 按钮宽度
				uni.createSelectorQuery()
					.selectAll('.group-btn')
					.boundingClientRect()
					.exec(res => {
						// console.log(res)
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
				// console.log(e)
				// console.log(index)
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
			recover(index, imgsUrl) {
				console.log(index)
				this.list[index].slide_x = 0;
				uni.previewImage({
					current: this.uploadlist[index],
					/* 传 Number H5 端出现不兼容 */
					urls: this.uploadlist
				});
			},
		},
		mounted() {
			var input = document.createElement('input')
			input.type = 'file'
			input.onchange = (event) => {
				uni.showLoading({
					title: '添加中'
				})
				this.list = []
				this.filename = event.target.files[0].name
				let list = event.target.files[0]
				var form = new FormData();
				this.fileList.push(list);
				// form.append('file', );
				form.append('t_id', this.id);
				this.fileList.forEach((item, index) => {
					form.append(index, item);
				})
				fly.post(this.$baseUrl.addFile.url + '?access-token=' + this.accessToken, form).then((res) => {
					console.log(res)
					if (res.data.length > 0) {
						this.getdetail()
						this.fileList = []
						setTimeout(()=>{
							uni.showToast({
								title: '添加成功',
								icon: 'success'
							})
							uni.hideLoading()
						},500)
						event.target.value = ""
					}
				})
			}
			this.$refs.input.$el.appendChild(input)
		},
		onLoad(e) {
			this.id = e.id
			uni.showLoading({
				title: '加载中'
			})
			// var list = uni.getStorageSync('login')
			var list = uni.getStorageSync('login');
			if (list) {
				this.accessToken = list.access_token
				this.appsercert = list.appsercert
			}
			console.log(e)
			this.getdetail()
		},
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

	page {
		background: #F3F3F3;
	}

	.btn {
		width: 100%;
		height: 80upx;
		border-top: 2upx solid #CCCCCC;
		position: fixed;
		bottom: 0;
		left: 0;
		font-size: 28upx;
		text-align: center;
		line-height: 80upx;
		background: #fff;
	}

	.input {
		float: right;
		width: 500upx;
		height: 80upx;
		/* background: #00A0E9; */
		color: red;
	}

	.input input {
		background: red;
	}

	.btn .sp1 {
		display: block;
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		text-align: center;
		color: #B0B0B0;
		margin-top: 10upx;
		float: left;
		margin: 0 auto;
		border-radius: 6upx;
	}

	.btn .input {
		position: absolute;
		right: 0;
		top: 0px;
		opacity: 0;
		-ms-filter: 'alpha(opacity=0)';
		width: 100%;
		height: 40px;
	}

	.btn .input input {
		position: absolute;
		right: 0;
		top: 0px;
		opacity: 0;
		-ms-filter: 'alpha(opacity=0)';
		width: 600upx !important;
		height: 60px;
	}

	.index {
		background: #F8F8F8;
	}

	.list-box {
		padding: 20upx 0;
	}

	.container_of_slide {
		width: 100%;
		overflow: hidden;
	}

	.slide_list {
		transition: all 100ms;
		transition-timing-function: ease-out;
		min-width: 200%;
		height: 160upx;
	}

	.now-message-info {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
		font-size: 16px;
		clear: both;
		height: 160upx;
		padding: 0 34upx;
		margin-bottom: 20upx;
		background: #FFFFFF;
	}

	.now-message-info,
	.group-btn {
		float: left;
	}

	.group-btn {
		display: flex;
		flex-direction: row;
		height: 160upx;
		min-width: 100upx;
		align-items: center;

	}

	.group-btn .btn-div {
		height: 160upx;
		color: #fff;
		text-align: center;
		padding: 0 50upx;
		font-size: 34upx;
		line-height: 160upx;
	}

	.group-btn .top {
		background-color: #c4c7cd;
	}

	.group-btn .removeM {
		background-color: #ff3b32;
	}

	.icon-circle {
		/* background: #3396fb; */
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

	.icon-circle image {
		width: 100%;
		height: 100%;
	}

	.list-right {
		float: left;
		margin-left: 25upx;
		margin-right: 30upx;
	}

	.list-right-1 {
		float: right;
		color: #A9A9A9;
	}

	.list-title {
		width: 350upx;
		line-height: 1.5;
		overflow: hidden;
		margin-bottom: 10upx;
		color: #333;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.list-detail {
		width: 350upx;
		font-size: 14px;
		color: #a9a9a9;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
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

	.iphoneX {
		/* padding-bottom: env(safe-area-inset-bottom); */
		/* padding-bottom: 100upx; */
		/* box-sizing: border-box; */
	}
</style>
