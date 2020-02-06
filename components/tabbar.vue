<template>
	<view>
		<view class="footer">
			<uni-tabbar>
				<div class="uni-tabbar" style="background-color: rgb(255, 255, 255);">
					<div class="uni-tabbar-border" style="background-color: rgba(0, 0, 0, 0.33);"></div>
					<div class="uni-tabbar__item" @click="change_nav(index)" v-for="(item,index) in footer_nav" :key="index">
						<div class="uni-tabbar__bd">
							<div style="color: #000000; font-size: 28upx;" :class="index==now_index?'act uni-tabbar__label':'uni-tabbar__label'">
								{{item.name}}
							</div>
						</div>
					</div>
					<view class="btn">
						<image class="img" @click="add" :src="src" mode=""></image>
					</view>
				</div>
				<div class="uni-placeholder"></div>
			</uni-tabbar>
		</view>
		<view :class="{'fix2':dis2}" @click="dis">
			<view class="box" :class="{'fixed_select':hh,'fixed_select2':dd}" @click.stop>
				<ul class='ull'>
					<li class='lii' v-for='(item,index) in lists' :key='index' @click='gopage(item.url)'>
						{{item.name}}
					</li>
				</ul>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '/static/image/add-btn.png',
				dis2: false,
				hh: true,
				dd: false,
				lists: [{
						name: '添加客户1111',
						url: '/pages/addcustomer/index'
					},
					{
						name: '添加线索1111',
						url: '/pages/addclue/index'
					},
					{
						name: '添加回款记录1111',
						url: '/pages/addmoney/index'
					},
					{
						name: '添加联系人',
						url: '/pages/addperson/index'
					},
					{
						name: '测试',
						url: '/pages/ceshi/country'
					}
				]
			};
		},
		methods: {
			change_nav(index) {
				this.$store.commit("change_page", index)
			},
			add() {
				this.hh = !this.hh
				this.dd = !this.dd
				this.dis2 = !this.dis2
			},
			dis() {
				this.dis2 = !this.dis2
				this.hh = !this.hh
				this.dd = !this.dd
			},
			gopage(url) {
				uni.navigateTo({
					url: url
				})
				this.dis2 = !this.dis2
				this.hh = !this.hh
				this.dd = !this.dd
			}
		},
		computed: {
			footer_nav() {
				console.log(this.$store.state.footer_store.footer_nav)
				return this.$store.state.footer_store.footer_nav
			},
			now_index() {
				return this.$store.state.footer_store.now_page_index;
			}
		},
		onLoad() {
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	/* .footer {
		height: 120upx;
		position: fixed;
		bottom: -4upx;
		left: 0;
		width: 100%;
		z-index: 999;
		background-color: #FFFFFF;
		color: #fff;
		line-height: 120upx;
		border-top: 2upx solid #f3f3f3;
		color: #000;
		width: 100%;
		padding-bottom: 30upx !important;
	}

	.footer_item {
		float: left;
		width: 20%;
		text-align: center !important;
		font-size: 28upx;
		height: 120upx;
	} */

	@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		.footer {
			height: 120upx;
			position: fixed;
			bottom: -4upx;
			left: 0;
			width: 100%;
			z-index: 999;
			background-color: #FFFFFF;
			color: #fff;
			line-height: 120upx;
			border-top: 2upx solid #f3f3f3;
			color: #000;
			width: 100%;
			padding-bottom: 50upx !important;
		}
	}

	@supports (bottom: env(safe-area-inset-bottom)) {

		body,
		.footer {
			padding-bottom: constant(safe-area-inset-bottom);
			padding-bottom: env(safe-area-inset-bottom);
		}
	}

	.act {
		color: #4f9efb !important;
	}

	.btn {
		width: 250upx;
		height: 120upx;
		position: absolute;
		left: 50%;
		margin-left: -125upx;
	}

	.img {
		position: absolute;
		left: 50%;
		margin-left: -50upx;
		top: 0;
		width: 100upx;
		height: 100upx;
	}

	li {
		list-style: none;
	}

	.ull .lii {
		width: 200upx;
		height: 100upx;
		/* background: blue; */
		background: red;
		text-align: center;
		font-size: 20upx;
		float: left;
		margin: 20upx;
		color: #fff;
	}

	.fix2 {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 99;
	}

	.fixed_select {
		width: 100%;
		height: 400upx;
		max-width: 1280upx;
		position: fixed;
		bottom: -50%;
		background: white;
		/* z-index: 888; */
		-webkit-transition: all .4s;
		-moz-transition: all .4s;
		overflow: hidden;
	}

	.fixed_select2 {
		width: 100%;
		height: 400upx;
		;
		max-width: 1280upx;
		position: fixed;
		bottom: 100upx;
		background: white;
		/* z-index: 51; */
		-webkit-transition: all .4s;
		-moz-transition: all .4s;
		overflow: hidden;
	}
	.footer {
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		z-index: 998;
		height: 100upx;
	}
	
	.footer uni-tabbar {
		display: block;
		width: 100%;
		height: 100upx;
	}
	
	uni-tabbar .uni-tabbar-border {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 1px;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
	}
	
	uni-tabbar .uni-tabbar__bd,
	uni-tabbar .uni-tabbar__item {
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
	}
	
	uni-tabbar .uni-tabbar__item {
		-webkit-flex-direction: column;
		flex-direction: column;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		font-size: 0;
		text-align: center;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}
	
	uni-tabbar .uni-tabbar__bd {
		position: relative;
		height: 50px;
		-webkit-flex-direction: column;
		flex-direction: column;
	}
	
	uni-tabbar .uni-tabbar__bd,
	uni-tabbar .uni-tabbar__item {
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
	}
	
	uni-tabbar .uni-tabbar__icon {
		position: relative;
		display: inline-block;
		margin-top: 5px;
		width: 27px;
		height: 27px;
	}
	
	uni-tabbar .uni-tabbar * {
		box-sizing: border-box;
	}
	
	uni-tabbar .uni-tabbar__icon img {
		width: 100%;
		height: 100%;
	}
	
	uni-tabbar .uni-tabbar__label {
		position: relative;
		text-align: center;
		font-size: 10px;
		line-height: 1.8;
	}
</style>
