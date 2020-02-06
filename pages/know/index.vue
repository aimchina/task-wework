<template>
	<view class="container999">
		
		<clickCircle ref="clickCircle"></clickCircle>
		<view class='nav'>
			<!-- 导航栏 agents导航栏标题 -->
			<navTab ref="navTab" :tabTitle="tabTitle" @tab='acttab'></navTab>
		</view>
		<!-- swiper切换 swiper-item表示一页 scroll-view表示滚动视窗 -->
		<view class="content" style="min-height: 100vh;" @change="swiperTab">
			<view v-for="(listItem,listIndex) in list" :key="listIndex">
				{{listItem.content}}
			</view>
		</view>
	</view>
</template>

<script>
	const util = require('../../util/util.js');
	import navTab from '../../components/navTab.vue';
	import clickCircle from '../../components/clickCircle.vue';
	import hex_sha1 from "sha1";
	export default {
		components: {
			navTab,
			clickCircle
		},
		data() {
			return {
				currentTab: 0, //sweiper所在页
				accessToken: '64e9275246c6545a3b5d3ad060fe4c516f44d556',
				appsercert: 'MTExMTEx',
				pages: [1, 1, 1, 1, 1, 1, 1, 1, 1], //第几页存储 
				tabTitle: [{
					add_time: "1970-01-01",
					color: "#C0C0C0",
					company_id: "handone",
					id: "",
					ids: null,
					isSelect: true,
					is_del: "98980",
					module_id: "知识",
					name: "全部",
					project_id: "0",
					sort: "3386",
				}], //导航栏格式
				// list: [[1, 2, 3, 4, 5, 6],['a', 'b', 'c', 'd', 'e', 'f'],[],['2233','4234','13144','324244'],[1, 2, 3, 4, 5, 6],['a', 'b', 'c', 'd', 'e', 'f'],['7'],['8'],['9号']] //数据格式
				list: [{
						content: '我是全部页面',
						name:'小白'
					},
					{
						content: '我是全部页面',
						name:'小白'
					},
					{
						content: '我是全部页面',
						name:'小白'
					},
					{
						content: '我是全部页面',
						name:'小白'
					},
					{
						content: '我是全部页面',
						name:'小白'
					}
				]
			};
		},
		onShow() {},
		onHide() {},
		methods: {
			// 点击反馈事件
			conClick(e) {
				this.$refs.clickCircle.conClick(e);
			},
			acttab(e){
				console.log(e)
				this.currentTab = e.index
				this.id = e.id
				console.log(this.id)
			},
			// 其他请求事件 当然刷新和其他请求可以写一起 多一层判断。
			isRequest(pages) {
				return new Promise((resolve, reject) => {
					this.pages[this.currentTab]++
					var that = this
					setTimeout(() => {
						uni.hideLoading()
						uni.showToast({
							icon: 'none',
							title: `请求第${that.currentTab + 1 }个导航栏的第${that.pages[that.currentTab]}页数据成功`
						})
						let newData = ['新数据1', '新数据2', '新数据3']
						resolve(newData)
					}, 1000)
				})
			},
			getlist() {
				var signStr =
					"access-token=" +
					this.accessToken +
					"&appsercert=" +
					this.appsercert + '&module_id=2'
				// console.log(signStr)
				this.sha = hex_sha1(signStr);
				console.log(this.sha)
				this.$axios({
						url: this.$baseUrl.notelist.url + '?access-token=' + this.accessToken + '&sign=' + this.sha + '&module_id=2',
						method: 'get'
					})
					.then(res => {
						console.log(res)
						this.tabTitle = this.tabTitle.concat(res.data.items)
						uni.hideLoading()
					}, (error) => {
						console.log(error)
					})
			}

		},
		onLoad(e) {
			uni.showLoading({
				title:'加载中'
			})
			this.getlist()
		},
	};
</script>

<style lang="scss">
	.container999 {
		width: 100vw;
		font-size: 28upx;
		min-height: 100vh;
		overflow: hidden;
		color: #6B8082;
		position: relative;
		background-color: #f6f6f6;
	}

	.content {
		width: 100%;
		margin-top: 100upx;
	}

	.card {
		width: 90%;
		height: 368upx;
		background-color: white;
		margin: 0 auto 42upx auto;
		background: #FFFFFF;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.10);
		border-radius: 5px;
		position: relative;
	}

	.noCard {
		width: 90%;
		height: 200upx;
		margin: auto;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #999999;
		box-shadow: 0 0 10upx 0 rgba(0, 0, 0, 0.10);
		border-radius: 10upx;
	}


	.nav {
		position: fixed;
		left: 0;
		top: 0;
		color: white;
		width: 100%;
		height: 100upx;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		font-size: 24upx;
		background-color: #50B7EA;
		z-index: 996;
	}

	.searchInput999 {
		width: 90%;
		margin: 0 auto;
		background: white;
		border-radius: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 56upx;
	}

	.search999 {
		width: 32upx;
		height: 32upx;
	}

	.searchBox999 {
		width: 56upx;
		height: 56upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.input999 {
		color: #999;
		width: 80%;
	}
</style>
