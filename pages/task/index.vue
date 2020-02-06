<template>
	<view class="content">
		<view class="box-loading" v-if="isShow_loading">
			<Loading13></Loading13>
		</view>
		<!-- <header-top :back='back1' :title='title'></header-top> -->
		<view class="act" v-if="!isShow_loading">
			<div class="btn" @click='select'>
				<span>{{msg}}</span>
				<image :src="src" mode="" style="width: 40upx;height: 40upx; margin-bottom:-8upx;"></image>
			</div>
			<view :class="{'list':hide,'list2':show}">
				<ul>
					<li v-for='(item,index) in lists' :key='index' @click='clk(index,item.id,item.name)' :class="currentid == index ? 'active' : ''">{{item.name}}<span></span></li>
				</ul>
			</view>
		</view>
		<div class="xiansuo">
			<view class="show" v-if="missionlists.length == 0">
				暂无记录
			</view>
			<ul>
				<li v-for="(item,index) in missionlists" :key="index" @click="todetail(item.t_id)" :class='act == index?"activeLi":""'>
					<view class="left_btn">
						<span @click.stop='del_mission(item.t_id,index)'></span>
					</view>
					<view class="right_btn">
						<span style='display: block;box-sizing: border-box;padding-bottom: 10upx;width: 100%;font-size: 28upx;'>{{item.t_taskContent}}</span>
						<span style='font-size: 28upx;color: #B0B0B0;width: 100%;'>{{item.t_taskEndTime}}</span>
						<span style='font-size: 28upx;color: red;width: 100%;' v-if='item.guoqi'>已过期{{item.guoqi}}</span>
						
						<!-- <span style='width: 30%;float: right;text-align: right;font-size: 28upx;'>{{item.t_addTime}}</span> -->
					</view>
				</li>
			</ul>
		</div>
		<view v-show="isShow">
			<uni-load-more :status="status"></uni-load-more>
		</view>
	</view>
</template>

<script>
	import hexSha1 from 'hex-sha1';
	import hex_sha1 from "sha1";
	import uniLoadMore from "@/components/uni-load-more.vue"
	import Loading13 from "@/components/loading/loading13.vue";
	import axios from "axios";
	import {ChangePageTitle} from '../../title.js'
	export default {
		data() {
			return {
				title: '我的任务',
				back1: true,
				accessToken: '64e9275246c6545a3b5d3ad060fe4c516f44d556',
				appsercert: 'MTExMTEx',
				sha: '',
				keys: [],
				lists: [],
				currentid2: "",
				currentid: 0,
				page: 1,
				id: '',
				name: "",
				hide: false,
				show: true,
				status: 'more',
				isShow: false,
				src: '../../static/image/down.png',
				show1: false,
				show2: false,
				show3: false,
				show4: false,
				msg: '',
				styleObject: '',
				isShow_loading: false,
				act: 99999999999999,
				missionlists: []
			}
		},
		components: {
			uniLoadMore,
			Loading13
		},
		methods: {
			getlist() {
				var num = Number(this.currentid) + 1
				var signStr =
					"access-token=" +
					this.accessToken +
					"&appsercert=" +
					this.appsercert +
					"&pid=" +
					num;
				console.log(signStr)
				this.sha = hexSha1(signStr);
				console.log(this.sha)
				axios.get(this.$baseUrl.tasklist2.url + '?access-token=' + this.accessToken + '&sign=' + this.sha + '&pid=' +
						num)
					.then((res) => {
						console.log(res)
						// alert(JSON.stringify(res))
						this.lists = res.data.teamtask
						uni.hideLoading()
						// alert(JSON.stringify(res.data.teamtask[0]))
						// this.isShow_loading = false
						this.msg = this.lists[this.currentid].name
						this.missionlists = this.lists[this.currentid].task
						for (var i = 0; i < this.missionlists.length; i++) {
							var d2 = new Date();
							var d1 = new Date(this.missionlists[i].t_taskEndTime);
							// console.log(Math.floor(parseInt(d2 - d1) / 3600000 / 24)); //两个时间相差的小时数
							// console.log(Math.floor(parseInt(d2 - d1) / 3600000 % 24))
							if (Math.floor(parseInt(d2 - d1) / 3600000 % 24) > 0) {
								this.$set(this.missionlists[i], 'guoqi', Math.floor(parseInt(d2 - d1) / 3600000 / 24) + '天' + Math.floor(
									parseInt(d2 -d1) / 3600000 % 24) + '小时')
							}else{
								this.$set(this.missionlists[i], 'guoqi',false)
							}
						}
					})
					.catch((error) => {
						console.log(error);
					});
			},
			del_mission(id, index) {
				console.log(index)
				console.log(id)
				this.act = index
				var _this = this
				var signStr =
					"access-token=" +
					_this.accessToken +
					"&appsercert=" +
					_this.appsercert +
					"&tid=" +
					id
				// console.log(signStr)
				_this.sha = hex_sha1(signStr);
				console.log(_this.sha)
				_this.$axios({
						url: _this.$baseUrl.delMission.url + '?access-token=' + _this.accessToken + '&sign=' + _this.sha,
						method: 'post'
					}, {
						tid: id
					})
					.then(res => {
						console.log(res)
						if (res.data.msg == '成功') {
							_this.act = 99999999999999999
							_this.getlist()
						}

					}, (error) => {
						console.log(error)
					})
			},
			todetail(id) {
				console.log(id)
				uni.navigateTo({
					url: '/pages/missiondetail/index?id=' + id
				})
			},
			// 选择
			select() {
				this.hide = !this.hide
				this.show = !this.show
				if (this.hide) {
					this.src = '../../static/image/up.png'
				} else {
					this.src = '../../static/image/down.png'
				}
			},
			clk(index, id, name) {
				this.currentid = index
				// console.log(Number(this.currentid) + Number(1))
				let num = Number(this.currentid) + Number(1)
				this.id = id
				this.msg = name
				this.hide = !this.hide
				this.show = !this.show
				if (this.hide) {
					this.src = '../../static/image/up.png'
				} else {
					this.src = '../../static/image/down.png'
				}
				this.getlist()
				// var signStr =
				// 	"access-token=" +
				// 	this.accessToken +
				// 	"&appsercert=" +
				// 	this.appsercert +
				// 	"&pid=" +
				// 	num;
				// console.log(signStr)
				// this.sha = hexSha1(signStr);
				// console.log(this.sha)
				// axios.get(this.$baseUrl.tasklist2.url + '?access-token=' + this.accessToken + '&sign=' + this.sha + '&pid=' +
				// 		num)
				// 	.then((res) => {
				// 		console.log(res)
				// 		this.lists = res.data.teamtask
				// 		this.isShow_loading = false
				// 		// this.msg = this.lists[this.currentid].name
				// 		this.missionlists = this.lists[this.currentid].task
				// 		for (var i = 0; i < this.missionlists.length; i++) {
				// 			var d2 = new Date();
				// 			var d1 = new Date(this.missionlists[i].t_addTime);
				// 			// console.log(Math.floor(parseInt(d2 - d1) / 3600000/24)); //两个时间相差的小时数
				// 			// console.log(Math.floor(parseInt(d2 - d1) / 3600000%24))
				// 			this.$set(this.missionlists[i], 'guoqi', Math.floor(parseInt(d2 - d1) / 3600000 / 24) + '天' + Math.floor(parseInt(d2 -
				// 				d1) / 3600000 % 24) + '小时')
				// 		}
				// 	})
				// 	.catch((error) => {
				// 		console.log(error);
				// 	});
			},
			check(index) {
				this.currentid2 = index
			},
		},
		onReachBottom() {
			this.status = "loading";
			console.log("我被拉到底部了");
			setTimeout(() => {
				this.page++;
				console.log(this.page);
				this.getlist();
			}, 2000)
		},
		onShow() {
			document.title = 'handone'
			ChangePageTitle('handone')
			// var list = uni.getStorageSync('login')
			// if (list) {
			// 	this.accessToken = list.access_token
			// 	this.appsercert = list.appsercert
			// }
			var list = uni.getStorageSync('login');
			if (list) {
				this.accessToken = list.access_token
				this.appsercert = list.appsercert
			}
			uni.showLoading({
				title: '加载中'
			})
			this.getlist()
			// this.isShow_loading = true
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	page {
		background: #F3F3F3;
	}

	.xiansuo {
		width: 100%;
		margin-top: 62upx;
		position: relative;
	}

	.xiansuo ul li {
		width: 100%;
		/* height: 400upx; */
		padding: 20upx 30upx;
		box-sizing: border-box;
		border-bottom: 1px solid #f3f3f3;
		background: #fff;
		overflow: hidden;
		/* position: relative; */
		/* z-index: 1; */
	}

	.xiansuo ul li span {
		/* width: 100%; */
		float: left;
		margin: 6upx 0;
		/* height: 40upx; */
		line-height: 40upx;
	}

	.xiansuo ul li .left_btn {
		float: left;
		width: 10%upx;
		/* height: 100upx; */
	}

	.xiansuo ul li .left_btn span {
		width: 40upx;
		height: 40upx;
		border-radius: 8upx;
		border: 2upx solid #CCCCCC;
		display: block;
	}

	.xiansuo ul li .right_btn {
		float: right;
		width: 90%;
	}

	.sp1 {
		/* font-weight: bold; */
		color: #000;
	}

	.sp2 {
		font-size: 30upx;
		color: #b0b0b0;
	}

	.act {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 99999;
	}

	.btn {
		width: 100%;
		height: 60upx;
		background: #FFFFFF;
		text-align: center;
		font-size: 26upx;
		border-bottom: 2upx solid #f3f3f3;
		line-height: 60upx;
	}

	.list {
		width: 100%;
		height: 290upx;
		-webkit-transition: all .5s ease;
		-moz-transition: all .5s ease;
		transition: all .5s ease;
		overflow: hidden;
		font-size: 28upx;
		background: #FFFFFF;
		position: relative;
		z-index: 22;
	}

	.list2 {
		width: 100%;
		height: 0;
		-webkit-transition: all .5s ease;
		-moz-transition: all .5s ease;
		transition: all .5s ease;
		overflow: hidden;
		font-size: 28upx;
		background: #FFFFFF;
		position: relative;
		z-index: 22;
	}

	.list ul li,
	.list2 ul li {
		width: 100%;
		height: 70upx;
		border-bottom: 2upx solid #f3f3f3;
		text-align: left;
		padding: 0 20upx;
		box-sizing: border-box;
		line-height: 70upx;
		font-size: 26upx;
		z-index: 999999999 !important;
		background: #FFFFFF;

	}

	.list ul li span,
	.list2 ul li span {
		display: block;
		width: 30upx;
		height: 30upx;
		float: right;
		border: 2upx solid #cecece;
		border-radius: 50%;
		margin-top: 20upx;
	}

	.list ul .active span:after,
	.list2 ul .active span:after {
		content: "";
		display: block;
		width: 20upx;
		height: 20upx;
		background: rgb(74, 119, 176);
		border-radius: 50%;
		margin: 6upx;
	}

	.list ul li span:after,
	.list2 ul li span:after {
		content: "";
		display: block;
		width: 20upx;
		height: 20upx;
		/* background: rgb(74,119,176); */
		border-radius: 50%;
		margin: 6upx;
	}

	.show {
		width: 100%;
		/* height: 100%; */
		text-align: center;
		padding: 200upx 0;
		font-size: 28upx;
	}

	.box-loading {
		position: fixed;
		display: flex;
		width: 100%;
		height: 1000upx;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 10upx;
		/* margin-top: 30upx; */
		background: #fff;
		/* flex: 0 0 600upx; */
		/* background: #040038; */
		justify-content: center;
		align-items: center;
		overflow: hidden;
		z-index: 99999999999;
	}

	.activeLi {
		background: #F3F3F3 !important;
	}
</style>
