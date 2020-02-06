<template>
	<Tabs :TabList="TabList" :currentTab="current" @tabs="tabsChange">
		<TabPane v-for='(item,index) in list' :key='index'>
			<view class="box1">
				<view class="content">
					<span>
						{{item.name}}&nbsp;{{item.task.length}}
						<span class='sp'>
							<image src="/static/images/more2.png" style="width: 60upx;height: 60upx;" mode=""></image>
						</span>
					</span>
					<view class="list1">
						<ul class="list" :id="'list'+index">
							<li class="list-item" v-for="(item2, index) in item.task" :index="index" @click='godetail(item2.t_id)' :key="index">
								{{item2.t_taskContent}}
							</li>
						</ul>
					</view>
				</view>
				<view class="list_add" :style="{left:index*750+'upx'}">
					<view class="btn"  @focus="isLocked == index" @click="active1(index)">
						添加任务
					</view>
				</view>
				<view class="active_add ipt" :style="{left:index*750+'upx'}" v-if="active == index">
					<view class="act_btn">
						<textarea value="" placeholder="" v-model="mission_content" />
						<view class="add_btn">
							<view class="btn_left" @click="feiactive1(index)">
								取消
							</view>
							<view class="btn_right" @click="addmission(item.alias_id)">
								确定
							</view>
						</view>
					</view>
				</view>
			</view>
		</TabPane>
	</Tabs>
</template>

<script>
	/**
 * 使用stylus预处理器，可能需要自己添加一下
 * 引入tabs 和tabPane组件  
    为tabs 传入 
    tablist（tab标题），
    currentTab（选中的tab）， 
    @tabs事件  改变选中的tabs
    TabList:[
        {title:'商品介绍'},
        {title:'规格参数'},
        {title:'售后保障'}
    ]  
    TabPane 根据 tab的多少添加。  
    更新：  
        在tabPane区域添加了滑动手指事件。横向滑动切换tab。  
        在tabs.vue中的  tabChange方法中发布了全局事件，不需要可以注释掉。这里主要方便tabpane中的内容监听 tabs的切换做出响应。  
*/
	import TabPane from '@/components/wiszx-tabs/tabPane.vue';
	import Tabs from '@/components/wiszx-tabs/tabs.vue';
	import { SlickList, SlickItem } from 'vue-slicksort';
	import Sortable from 'sortablejs';
	import hex_sha1 from "sha1";
	import {
		ChangePageTitle
	} from '../../title.js';
	export default {
		data() {
			return {
				current: 0,
				active:999999,
				isLocked:999999,
				accessToken: '64e9275246c6545a3b5d3ad060fe4c516f44d556',
				appsercert: 'MTExMTEx',
				x:'x',
				y:'y',
				tid:'',
				TabList: [],
				list:[],
				mission_content:''
			}
		},
		computed: {
		},
		methods: {
			tabsChange(index) {
				this.current = index
			},
			active1(id){
				console.log(id)
				this.active = id
				this.isLocked = id
			},
			feiactive1(id){
				this.active = !id
			},
			godetail(id){
				uni.navigateTo({
					url:'/pages/missiondetail/index?id='+id
				})
			},
			//获取列表
			getlist() {
				var signStr =
					"access-token=" +
					this.accessToken +
					"&appsercert=" +
					this.appsercert +
					"&tid=" +
					this.tid;
				// console.log(signStr)
				this.sha = hex_sha1(signStr);
				console.log(this.sha)
				this.$axios(this.$baseUrl.missionlist, {
						'access-token': this.accessToken,
						sign: this.sha,
						tid: this.tid
					})
					.then(res => {
						console.log(res)
						uni.hideLoading()
						this.list = res.data.teamtask
						this.TabList = res.data.teamtask
						this.$nextTick(()=>{
							this.getel()
						})
					}, (error) => {
						console.log(error)
					})
			},
			addmission(id){
				console.log(id)
				var signStr =
					"access-token=" +
					this.accessToken +
					"&appsercert=" +
					this.appsercert+
					'&t_time_id='
					+id+
					'&t_taskContent='
					+this.mission_content
					+'&t_panel_id='+
					this.tid
				// console.log(signStr)
				this.sha = hex_sha1(signStr);
				console.log(this.sha)
				this.$axios({
						url: this.$baseUrl.addmission.url+'?access-token=' + this.accessToken + '&sign=' + this.sha,
						method: 'post'
					},{
						t_time_id:id,
						t_taskContent:this.mission_content,
						t_panel_id:this.tid
					})
					.then(res => {
						console.log(res)
					}, (error) => {
						console.log(error)
					})
			},
			getel(){
				var _this = this
				for(let i = 0;i<this.TabList.length;i++){
				   fun(this.$el.querySelector('#list'+i),i)
				}
				function fun(list,index) {
						new Sortable(list, {
							onUpdate: function(event) {
								//修改list1数据顺序
								var newIndex = event.newIndex,
									oldIndex = event.oldIndex,
									$li = list.children[newIndex],
									$oldLi = list.children[oldIndex];
								// 先删除移动的节点
								console.log($li)
								list.removeChild($li)
								// 再插入移动的节点到原有节点，还原了移动的操作
								if (newIndex > oldIndex) {
									list.insertBefore($li, $oldLi)
								} else {
									list.insertBefore($li, $oldLi.nextSibling)
								}
								// 更新items数组
								var item = _this.list[index].task.splice(oldIndex, 1)
								_this.list[index].task.splice(newIndex, 0, item[0])
								// 下一个tick就会走patch更新
							},
							group:'shared',
							animation: 150,
						})
				}
		}
		},
		mounted() {
			
			},
		components: {
			Tabs,
			TabPane,
			SlickItem,
			SlickList
		},
		onLoad(e) {
			this.tid = e.id
		},
		created() {
			uni.showLoading({
				title:'加载中'
			})
			var list = uni.getStorageSync('login')
			// alert(JSON.stringify(list))
			if(list){
				this.accessToken = list.access_token
				this.appsercert = list.appsercert
			}
			this.getlist()
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.box1 {
		width: 100%;
		height: 100%;
		background: #fff;
		box-sizing: border-box;
		padding: 40upx;
	}

	.content {
		width: 100%;
		height: 1200upx;
		background: #F3F3F3;
		/* border-radius: 10upx; */
		box-sizing: border-box;
		overflow: hidden;
		padding: 10upx 0;
		position: relative;
	}

	.content span {
		display: block;
		width: 100%;
		/* padding: 0 30upx 0; */
		padding-left: 30upx;
		box-sizing: border-box;
		font-size: 34upx;
		line-height: 80upx;
		overflow: hidden;
	}

	.content span .sp {
		float: right;
		width: 80upx;
		height: 60upx;
		/* margin-top: 10upx; */
		margin: 10upx 30upx 0 0;
	}

/* 	.content span .sp image {
		;
	} */

	.list {
		width: 100%;
		height: 1072upx;
		padding: 0 30upx;
		padding-bottom: 10upx;
		box-sizing: border-box;
		overflow: hidden;
		position: relative;
		/* white-space: nowrap; */
		overflow-x: hidden;
		overflow-y: scroll;
	}
	.list-item {
		width: 100%;
		list-style: none;
		background-color: #fff;
		font-size: 30upx;
		margin: 10upx 0;
		box-sizing: border-box;
		padding: 20upx;
		overflow: hidden;
		border-radius: 10upx;
		word-wrap: break-word;
	}

	.list_add {
		width: 100%;
		height: 80upx;
		box-sizing: border-box !important;
		text-align: center;
		line-height: 80upx;
		background: #FFFFFF;
		color: #000;
		font-size: 28upx;
		padding: 0 40upx;
		position: fixed;
		bottom: 40upx;
		left: 0;
		box-sizing: border-box;
	}
	.btn {
		width: 100%;
		background: #F3F3F3;
		z-index: 99;
	}
	.active_add{
		width: 100%;
		height: 120upx;
		padding: 0 40upx !important;
		box-sizing: border-box !important;
		text-align: center;
		line-height: 80upx;
		background: #FFFFFF;
		color: #B0B0B0;
		font-size: 28upx;
		padding: 0 40upx;
		position: fixed;
		bottom: 30upx;
		left: 0;
		box-sizing: border-box;
		overflow: hidden;
	}
	.active_add .act_btn{
		width: 100%;
		height: 100%;
		background: #F3F3F3;
		padding: 8upx 30upx 0;
		box-sizing: border-box;
	}
	.ipt textarea{
		width: 100%;
		height: 70upx;
		background: #FFFFFF;
		padding: 10upx;
		box-sizing: border-box;
	}
    .ipt .btn_left{
		float: left;
		width: 50%;
		height: 50upx;
		line-height: 50upx;
		text-align: center;
		background: #F3F3F3;
		color: red;
	}
	.ipt .btn_right{
		float: right;
		width: 50%;
		height: 50upx;
		line-height: 50upx;
		text-align: center;
		background: #F3F3F3;
		color: red;
	}
</style>
