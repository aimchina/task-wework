<template>
	<view class="">
		<view class="box-loading2" v-if="isShow_loading">
			<Loading13></Loading13>
		</view>
		<view v-if="list.length">
			<mSearch  @search="search($event)"></mSearch>
		</view>
		<Tabs :TabList="TabList" :currentTab="current" @tabs="tabsChange">
			<TabPane v-for='(item,index) in list' :key='index'>
				<view class="box1" v-if="searchShow == false">
					<view class="content" :style="{height:scrollHeight}">
						<span class='spa' v-show='show != index'>
							{{item.name}}&nbsp;{{item.task.length}}
							<span class='sp'>
								<image @click="more_list(index)" src="/static/images/more2.png" style="width: 60upx;height: 60upx;" mode=""></image>
							</span>
						</span>
						<view :class="{'change_title':show == index,'change_title2':show != index}">
							<view class="ipt">
								<input type="text" ref="text" :value="item.name" @input="clkipt" />
							</view>
							<view class="btn">
								<span class='sp2' @click='define(item.id,index)'>确定</span>
								<span class='sp1' @click='remove(index)'>取消</span>
							</view>
						</view>
						<view class="list1">
							<draggable v-model="item.task" @change="change" @Start="start" @End="end" class="list" :id="'itemList'+index"
							 :style="{'height':webheight}" @update="datadragEnd" :options="{animation:100,delay:300,ghostClass:'ghostClass',dragClass:'dragClass',chosenClass: 'sortable-chosen',scroll:true, forceFallback: false}">
								<!-- <transition-group> -->
								<div class="list-item" v-for="(item2, index2) in item.task" :key="index2" @click.stop='goitem_detail(item2.t_id)'
								 :index="index2" @touchstart="showDeleteButton(item2.t_id)">
									{{item2.t_taskContent}}
									<view class="box-loading" v-if="Loadingindex == index2 ">
										<Loading22></Loading22>
									</view>
								</div>
							</draggable>
						</view>
						<view class="list_add" style="{left:0}">
							<view class="btn" @click="active1(index)">
								添加任务
							</view>
						</view>
						<view class="active_add ipt" style="{left:0}" v-if="active == index">
							<view class="act_btn">
								<!-- v-focus  -->
								<textarea value="" ref='ipt' id="ipt_focus" @focus="iosInputFocus(index)" @blur='outInputFocus' placeholder=""
								 v-model="mission_content" />
								<view class="add_btn">
									<view class="btn_left" @click="feiactive1(index)">
										取消
									</view>
									<view class="btn_right" @click="addmission(item.id,index)">
										确定
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 搜索列表 -->
				<view class="list" v-if="searchShow == true">
					<ul>
						<li class='list-item' v-for ='(item,index) in searchList' :key='index' @click='godetail(item.t_id)'>
							{{item.t_taskContent}}
						</li>
					</ul>
				</view>
				 <view :class="{'fix2':listIndex == index||isDel}"  :style="{left:index*750+'upx'}" @click="leave_list">
					<section v-isIphoneX :class="{'fixed_select':listIndex != index,'fixed_select2':listIndex == index}" @click.stop>
						<p class="fixed_title">{{item.name}}</p>
						<view class="select_radio">
							<view class="vw1 vw" @click='choose_plate(item.id,index)'>修改板块标题</view>
							<view class="vw2 vw"  @click='defineDel(true)'>删除板块</view>
							<view class="kong" style="width: 100%;height: 20upx;background: #F3F3F3;"></view>
							<view class="vw1 vw"  @click='leave_list' style="border-bottom: none;">取消</view>
						</view>
					</section>
					<section :class="{'fixed_select3':!isDel,'fixed_select4':isDel}" @click.stop v-isIphoneX>
						<p class="fixed_title2">是否删除此板块</p>
						<view class="select_radio">
							<view class="vw1 vw3" @click='del_plate(item.id)'>确定</view>
							<view class="kong" style="width: 100%;height: 20upx;background: #F3F3F3;"></view>
							<view class="vw2 vw3"  @click='cancel(item.id)'>取消</view>
						</view>
					</section>
				</view>
			</TabPane>
			<TabPane v-if='TabList.length > 0'>
				<view class="addbox1">
					<view class="content2">
						<view :class="{'change_title3':show == TabList.length,'change_title4':show != TabList.length}">
							<view class="ipt">
								<textarea value="" ref='ipt2' v-model="mouldName" placeholder="" />
							</view>
							<view class="btn2">
								<span class='sp2' @click='define_add'>确定</span>
								<span class='sp1' @click='callOf'>取消</span>
							</view>
						</view>
						<view class="list_add2" style="{left:0}" v-if='show != TabList.length && show > TabList.length'>
							<view class="btn" @click="addtask()">
								添加列表
							</view>
						</view>
					</view>
				</view>
			</TabPane>
		</Tabs>
	</view>
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
	import {
		SlickList,
		SlickItem
	} from 'vue-slicksort';
	import Sortable from 'sortablejs';
	import hex_sha1 from "sha1";
	import axios from "axios";
	import draggable from 'vuedraggable'
	import Loading22 from "@/components/loading/loading22.vue";
	import Loading13 from "@/components/loading/loading13.vue";
	import mSearch from '@/components/mehaotian-search/mehaotian-search.vue';
	import {
		ChangePageTitle
	} from '../../title.js';
	import { iscroll } from '../../iscroll.js'
	export default {
		data() {
			return {
				current: 0,
				active: 999999,
				accessToken: '64e9275246c6545a3b5d3ad060fe4c516f44d556',
				appsercert: 'MTExMTEx',
				x: 'x',
				y: 'y',
				tid: '',
				TabList: [],
				show:9999999999,
				dis:true,
				windowHeight: '',
				webheight: '',
				list: [],
				mission_content: '',
				movecount: 0,
				i: '',
				id: '',
				add_content:'',
				userInput: '',
				scrollHeight: '97%',
				Loadingindex: 99999999999999999999,
				isShow_loading: false,
				t_sortid:'',
				listIndex:99999999999,
				isDel:false,
				iptval:'',
				mouldName:'',
				searchList:[],
				searchShow: false
			}
		},
		computed: {},
		watch: { //处理iOS6.7.4之后软键盘关闭后页面无法回退到原来正常的位置
			userInput: function(val) {
				console.log(val)
				if (val) {
					setTimeout(() => {
						// document.body.scrollTop = document.body.scrollHeight
					}, 100)
				} else {
					setTimeout(() => {
						// document.body.scrollTop = document.body.scrollHeight
						document.body.scrollIntoView()
						this.scrollHeight = '97%'
						this.webheight = this.windowHeight - 340 + 'upx'
					}, 100)
				}
			}
		},
		methods: {
			search($event) {
				// console.log(e, val);
				// this['val' + val] = e;
				this.searchShow = true;
				console.log($event)
				let _this = this
				if($event){
					var signStr =
						"access-token=" +
						_this.accessToken +
						"&appsercert=" +
						_this.appsercert +
						"&tid=" +
						_this.tid + 
						'&word = '+ $event;
					// console.log(signStr)
					_this.sha = hex_sha1(signStr);
					console.log(_this.sha)
					axios.get(_this.$baseUrl.missionlist.url+'?access-token='+_this.accessToken+'&sign='+_this.sha+'&tid='+_this.tid +'&word='+$event)
						.then((res)=>{
							console.log(res);
							for(var item of res.data.teamtask){
								for(var item2 of item.task){
									console.log(item2)
									_this.searchList.push(item2)
								}
							}
						})
						.catch((error)=> {
							console.log(error);
						});
				} 
			},
			godetail(id) {
				console.log(id)
				uni.navigateTo({
					url: '/pages/missiondetail/index?id=' + id
				})
			},
			// search2(){
			// 	// console.log('111')
			// 	uni.navigateTo({
			// 		url:'/pages/search-item/index?id='+this.tid
			// 	})
			// },
			//处理iOS软键盘遮挡输入框
			iosInputFocus: function() { //处理iOS软键盘遮挡输入框
				this.userInput = true;
				var that = this;
				if (this.isIOS()) {
					// document.body.scrollTop = 0;
					// document.documentElement.scrollTop = 0;
					that.$refs.ipt[0].scrollIntoView(false);
					// that.scrollHeight = '40%';
					// that.webheight = that.windowHeight / 2 - 380 + 'upx';
				} else {
					document.body.scrollIntoView();
					// this.scrollHeight = '80%';
					this.webheight = this.windowHeight / 2 - 220 + 'upx';
				}
			},
			isIOS() {
				var isIphone = window.navigator.userAgent.toLowerCase().indexOf("iphone") > -1;
				var isIpad = window.navigator.userAgent.toLowerCase().indexOf("ipad") > -1;
				// console.log(window.navigator.userAgent.toLowerCase())
				return isIphone || isIpad;
			},
			outInputFocus() {
				this.userInput = false
			},
			tabsChange(index) {
				this.current = index
			},
			//添加任务
			active1(id) {
				console.log(id)
				this.active = id
				// this.webheight = this.windowHeight - 280 + 'upx'
				
				// this.userInput = true
				// console.log(this.$refs.ipt)
				this.$nextTick(() => {
					this.isfocus()
					var ele = document.getElementById('itemList' + id)
					ele.scrollTop = ele.scrollHeight;
				})
			},
			isfocus(){
				console.log(this.$refs.ipt)
				this.$refs.ipt[0].focus = true
			},
			isfocus2(){
				console.log(this.$refs.ipt2)
				this.$refs.ipt2.focus = true
			},
			isfocus3(i){
				console.log(this.$refs)
				console.log(this.$refs.text[0])
					setTimeout(()=>{
						this.$refs.text[i].focus = true
					},600)
			},
			feiactive1(id) {
				this.active = 9999999
				this.webheight = this.windowHeight - 240 + 'upx'
				this.userInput = false
				this.$nextTick(() => {
					// console.log(document.getElementById('itemList'+id))
					var ele = document.getElementById('itemList' + id)
					ele.scrollTop = 0;
					// this.$refs.ipt.focus()
				})
			},
			isLockd() {
				// alert('输入框聚焦')
			},
			//页面拖动事件
			change(evt) {
				// console.log(evt)
				console.log('移动完成了')
				var _this = this
				var signStr =
					"access-token=" +
					_this.accessToken +
					"&appsercert=" +
					_this.appsercert +
					"&t_id=" +
					_this.t_sortid+
					'&t_sort=2'
					;
				// console.log(signStr)
				_this.sha = hex_sha1(signStr);
				console.log(_this.sha)
				this.$axios({
							url: this.$baseUrl.draggable.url + '?access-token=' + this.accessToken + '&sign=' + this.sha,
							method: 'post'
						}, {
							t_id: _this.t_sortid,
							t_sort: 2
						})
						.then(res => {
							console.log(res)
				
						}, (error) => {
							console.log(error)
						})
			},
			showDeleteButton(id){
				console.log('haha')
				console.log(id)
				this.t_sortid = id
			},
			start(evt) {
				console.log(evt)
			},
			end() {
				console.log('移动完成')
				
			},
			datadragEnd(){
				console.log('jajja')
			},
			goitem_detail(id) {
				console.log(id)
				uni.navigateTo({
					url: '/pages/missiondetail/index?id=' + id
				})
			},
			//获取列表
			getlist() {
				let _this = this
				var signStr =
					"access-token=" +
					_this.accessToken +
					"&appsercert=" +
					_this.appsercert +
					"&tid=" +
					_this.tid;
				// console.log(signStr)
				_this.sha = hex_sha1(signStr);
				console.log(_this.sha)
				axios.get(_this.$baseUrl.missionlist.url+'?access-token='+_this.accessToken+'&sign='+_this.sha+'&tid='+_this.tid)
					.then((res)=>{
						console.log(res);
						this.isShow_loading = false
						if (res == undefined || res == '') {
							uni.showToast({
								title: '网络异常',
								icon: 'none'
						    })
						} else {
							this.list = res.data.teamtask
							// this.list.length = 
							
							this.TabList = res.data.teamtask
							var obj = {
								title:''
							}
							setTimeout(()=>{
								this.TabList = this.TabList.concat(obj)
							},500)
						}
					})
					.catch((error)=> {
						console.log(error);
					});
			},
			//添加
			addmission(id, index) {
				if(this.mission_content) {
					// console.log(id)
					// console.log(index)
					// this.add_content = this.mission_content
					// this.Loadingindex = true
					this.userInput = false
					this.webheight = this.windowHeight - 240 + 'upx'
					var obj = {
						t_taskContent:this.mission_content
					}
					this.list[index].task = this.list[index].task.concat(obj)
					this.Loadingindex = this.list[index].task.length -1
					// setTimeout(() => {
					// 	for (var i = 0; i < this.list[index].task.length; i++) {
					// 		if (this.list[index].task[i].t_taskContent == res.data.t_taskContent) {
					// 			console.log(i);
					// 			this.Loadingindex = i
					// 		}
					// 	}
					// }, 1000)
					var signStr = 
						"access-token=" +
						this.accessToken +
						"&appsercert=" +
						this.appsercert +
						'&t_panel_id=' +
						id +
						'&t_taskContent=' +
						this.mission_content +
						'&t_projectId=' +
						this.tid
					// console.log(signStr)
					this.sha = hex_sha1(signStr);
					console.log(this.sha)
					this.$axios({
							url: this.$baseUrl.addmission.url + '?access-token=' + this.accessToken + '&sign=' + this.sha,
							method: 'post'
						}, {
							t_panel_id: id,
							t_taskContent: this.mission_content,
							t_projectId: this.tid
						})
						.then(res => {
							console.log(res)
							this.$nextTick(() => {
								// console.log(document.getElementById('itemList'+id))
								setTimeout(() => {
									var ele = document.getElementById('itemList' + index)
									console.log(ele)
									ele.scrollTop = ele.scrollHeight;
									
								})
								// this.$refs.ipt.focus()
								// console.log(ele.scrollTop)
								// console.log(ele.scrollHeight)
							})
							
							this.mission_content = ''
							// this.Loadingindex = false
							
							
							if (res.data.t_taskContent) {
								// this.Loadingindex = this.list[index].task.length 
								this.feiactive1(index)
								// this.getlist()
								this.list[index].task[this.list[index].task.length-1] = res.data
								// this.list[index].task.splice(this.list[index].task.length-1,1)
								// console.log(this.Loadingindex)
								// setTimeout(() => {
									this.Loadingindex = 99999999999999
								// }, 5000)
							} else {
								uni.showToast({
									title: res.data.msg,
									icon: 'none'
								})
							}
					
						}, (error) => {
							console.log(error)
						})
				} else {
					uni.showToast({
						title: '任务内容不能为空',
						icon: 'none'
					})
				}
			},
			//更多列表
			more_list(index){
				console.log(index)
				this.listIndex = index
			},
			//离开
			leave_list(){
				this.listIndex = 9999999999999
			},
			//修改板块
			choose_plate(id,index){
				console.log('修改板块')
				this.show = index
				var index = index
				this.$nextTick(() => {
					this.isfocus3(index)
					setTimeout(()=>{
						this.leave_list()
					},100)
				})
			},
			//取消
			remove(i){
				// this.dis = !this.dis
				this.show = 9999999999
				this.$refs.text[i].focus = false
			},
			//确定
			define(id,i){
				this.$set(this.list[i],'name',this.iptval)
				this.remove(i)
				var signStr = 
					"access-token=" +
					this.accessToken +
					"&appsercert=" +
					this.appsercert +
					'&id=' +
					id + '&name='+
					this.iptval
				// console.log(signStr)
				this.sha = hex_sha1(signStr);
					uni.request({
						url:'https://testapi.shiliucrm.com/v1/task/panels/'+id+'?access-token='+this.accessToken+'&sign='+this.sha,
						method:'PUT',
						data:{
							name:this.iptval
						},
						header:{
							'Content-Type':'application/x-www-form-urlencoded'
						},
						success: (res) => {
							console.log(res)
							// if(res.data)
							this.getlist()
						}
					})
			},
			clkipt(e){
				console.log(e)
				this.iptval = e.detail.value
			},
			defineDel(i){
				this.isDel = i
				this.listIndex = 999999999
			},
			cancel(){
				this.isDel = !this.isDel
			},
			//添加板块
			addtask(){
				this.show = this.TabList.length
				this.$nextTick(() => {
					this.isfocus2()
					// var ele = document.getElementById('itemList' + id)
					// ele.scrollTop = ele.scrollHeight;
				})
			},
			//确定添加板块
			define_add(){
				if(!this.mouldName){
					uni.showToast({
						title:'请输入标题',
						icon:'none'
					})
					// this.callOf()
				}
				var signStr = 
					"access-token=" +
					this.accessToken +
					"&appsercert=" +
					this.appsercert +
					 '&name='+
					this.mouldName +
					'&project_id=' +
					this.tid 
				this.sha = hex_sha1(signStr);
				console.log(this.sha)
				this.$axios({
						url: this.$baseUrl.addtaskmould.url+ '?access-token=' + this.accessToken + '&sign=' + this.sha,
						method: 'post'
					}, {
						project_id:this.tid,
						name:this.mouldName
					})
					.then(res => {
						console.log(res)
						if(res.data.name == this.mouldName){
							this.mouldName = ''
							this.callOf()
							this.getlist()
						}
					}, (error) => {
						console.log(error)
					})
			},
			//取消添加板块
			callOf(){
				this.show = 99999999999999
			},
			//删除板块
			del_plate(id){
				var signStr = 
					"access-token=" +
					this.accessToken +
					"&appsercert=" +
					this.appsercert +
					'&id=' +
					id 
				this.sha = hex_sha1(signStr);
				console.log(this.sha)
				this.$axios({
						url: this.$baseUrl.delPlate.url + id + '?access-token=' + this.accessToken + '&sign=' + this.sha,
						method: 'delete'
					}, {
					})
					.then(res => {
						console.log(res);
						if(res.data.status  == 1){
							this.isDel = !this.isDel
							setTimeout(()=>{
								uni.showToast({
									title:res.data.msg,
									icon:'success'
								})
								this.getlist()
							},500)
							
						}else{
							this.isDel = !this.isDel
							setTimeout(()=>{
								uni.showToast({
									title:res.data.msg,
									icon:'none'
								})
							},500)
						}
					}, (error) => {
						console.log(error)
					})
			   
			}
		},
		directives: {
			focus: {
				inserted(el) {
					console.log(el)
					el.focus()
				}
			}
		},
		components: {
			Tabs,
			TabPane,
			SlickItem,
			SlickList,
			draggable,
			Loading22,
			Loading13,
			mSearch
		},
		onLoad(e) {
			var that = this;
			var myScroll;
			setTimeout(function() {
				myScroll = new iScroll('itemList0',{
					hScroll: false,
					hScrollbar:false,
					vScrollbar:false
				});
			},700)
			this.tid = e.id;
			uni.getSystemInfo({
				success: (res) => {
					this.windowHeight = res.windowHeight * 2
					this.webheight = this.windowHeight - 340 + 'upx'
				}
			});
			// uni.showToast({
			// 	title: '弹起前灰色内容块高度:' + this.scrollHeight,
			// 	icon: 'none',
			// 	duration:2000
			// })
			// setTimeout(function() {
			// 	uni.showToast({
			// 		title: '弹起前列表高度:' + that.webheight + 'upx',
			// 		icon: 'none',
			// 		duration:2000
			// 	})
			// },2000)
			// this.getlist()
			this.isShow_loading = true
			// console.log(axios)
			
		},
		onShow() {
			document.title = 'handone'
			ChangePageTitle('handone')
			var list = uni.getStorageSync('login');
			if (list) {
				this.accessToken = list.access_token
				this.appsercert = list.appsercert
			}
			this.getlist()
		},
		mounted() {
			console.log(document.body)
			//为了防止火狐浏览器拖拽的时候以新标签打开，此代码真实有效
			document.body.ondrop = function(event) {
				event.preventDefault();
				event.stopPropagation();
			}
			
			// setTimeout(()=> {
			// 	console.log(this.$refs.ipt);
			// }, 5000)
			// console.log(this.$refs.ipt)
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	body{
		height:100%;
		width:100%;
		/*top:0;
		left:0;*/
		overflow:hidden;
		-webkit-overflow-scrolling: touch;
	}
	.sortable-chosen {
		opacity: 1 !important;
	}

	.ghostClass {
		opacity: 0 !important;
	}

	.box1 {
		width: 100%;
		height: 93%;
		background: #fff;
		box-sizing: border-box;
		padding: 30upx  40upx 0;
	}
	/* 搜索列表 */
	.list-item {
		width: 100%;
		list-style: none;
		background-color: #fff;
		font-size: 30upx;
		/* margin: 10upx 0; */
		box-sizing: border-box;
		padding: 20upx;
		overflow: hidden;
		border-radius: 10upx;
		word-wrap: break-word;
		position: relative;
		border-bottom: 2upx solid #F3F3F3;
	}
	.addbox1{
		width: 100%;
		height: 100%;
		background: #fff;
		box-sizing: border-box;
		padding:40upx;
	}

	.content {
		width: 100%;
		height: 100%;
		background: #F3F3F3;
		/* border-radius: 10upx; */
		box-sizing: border-box;
		overflow: hidden;
		padding: 10upx 0;
		position: relative;
		position: relative;
	}
	.content2 {
		width: 100%;
		height: 100%;
		/* background: #F3F3F3; */
		/* border-radius: 10upx; */
		box-sizing: border-box;
		overflow: hidden;
		padding: 10upx 0;
		position: relative;
		position: relative;
	}

	.content span {
		display: block;
		width: 100%;
		/* padding: 0 30upx 0; */
		/* padding-left: 30upx; */
		box-sizing: border-box;
		font-size: 34upx;
		/* line-height: 80upx; */
		overflow: hidden;
	}

	.spa {
		padding-left: 30upx;
		line-height: 80upx;
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
		/* height: 90%; */
		padding: 0 30upx;
		padding-bottom: 10upx;
		box-sizing: border-box;
		overflow: hidden;
		position: relative;
		overflow-x: hidden;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
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
		position: relative;
	}

	.list-item .box-loading {
		width: 40upx;
		height: 40upx;
		position: absolute;
		top: 50%;
		margin-top: -20upx;
		right: 20upx;
		/* margin-top: -15upx; */
	}

	.list_add,.list_add2 {
		width: 100%;
		height: 80upx;
		box-sizing: border-box !important;
		text-align: center;
		line-height: 80upx;
		background: #F3F3F3;
		color: #000;
		font-size: 28upx;
		padding: 0 40upx;
		position: absolute;
		bottom: 0;
		left: 0;
		box-sizing: border-box;
	}
	.list_add2{
		top: 0;
	}

	.btn {
		width: 100%;
		background: #F3F3F3;
		z-index: 99;
	}

	.active_add {
		width: 100%;
		height: 140upx;
		padding: 0 30upx !important;
		box-sizing: border-box !important;
		text-align: center;
		line-height: 80upx;
		background: #F3F3F3;
		color: #B0B0B0;
		font-size: 28upx;
		/* padding: 0 40upx; */
		position: absolute;
		bottom: 0;
		left: 0;
		box-sizing: border-box;
		overflow: hidden;
	}

	.active_add .act_btn {
		width: 100%;
		height: 100%;
		background: #F3F3F3;
		padding: 8upx 0 0;
		box-sizing: border-box;
	}

	.ipt textarea {
		width: 100%;
		height: 70upx;
		background: #FFFFFF;
		padding: 10upx;
		box-sizing: border-box;
		text-align: left;
		color: #000;
	}

	.ipt .btn_left {
		float: left;
		width: 50%;
		height: 60upx;
		padding: 0 40upx;
		line-height: 60upx;
		box-sizing: border-box;
		text-align: left;
		background: #F3F3F3;
		color: red;
	}

	.ipt .btn_right {
		float: right;
		width: 50%;
		height: 60upx;
		line-height: 60upx;
		padding: 0 40upx;
		box-sizing: border-box;
		text-align: right;
		background: #F3F3F3;
		color: red;
	}

	.box-loading2 {
		position: relative;
		display: flex;
		height: 1200upx;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 10upx;
		margin-top: 30upx;
		/* flex: 0 0 600upx; */
		/* background: #040038; */
		justify-content: center;
		align-items: center;
		overflow: hidden;
		background: #fff;
	}
	.fix2{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0.4);
		z-index: 999;
	}
	.fixed_select {
		width: 100%;
		height: 25%;
		max-width: 1280upx;
		position: fixed;
		bottom: -30%;
		background: white;
		z-index: 1000;
		-webkit-transition: all .4s;
		-moz-transition: all .4s;
	}
	.fixed_select2 {
		width: 100%;
		height: 25%;
		max-width: 1280upx;
		position: fixed;
		bottom: 0;
		background: white;
		z-index: 51;
		-webkit-transition: all .4s;
		-moz-transition: all .4s;
	}
	.fixed_select3 {
		width: 100%;
		height: 20%;
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
		line-height:70upx;
		background: #ececec;
	}
	.fixed_title2 {
		display: block;
		text-align: center;
		font-size: 30upx;
		color: #333;
		height: 70upx;
		line-height:70upx;
		/* background: #ececec; */
		border-bottom: 2upx solid #F3F3F3;
	}
	.select_radio {
		position: absolute;
		top: 70upx;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: auto;
	}
	
	.select_radio .vw {
		padding: 20upx 40upx;
		line-height: 40upx;
		/* color: #555; */
		border-bottom: 2upx solid #ececec;
		/* font-size: 24upx; */
		text-align: center;
	}
	.select_radio .vw3 {
		padding: 20upx 40upx;
		line-height: 40upx;
		/* color: #555; */
		/* border-bottom: 2upx solid #ececec; */
		/* font-size: 24upx; */
		text-align: center;
	}
	.select_radio .vw1{
		font-size: 32upx;
	}
	.select_radio .vw2{
		font-size: 28upx;
		color: red;
	}
	.change_title{
		width: 100%;
		height: 180upx;
		overflow: hidden;
		-webkit-transition: all .4s;
		-moz-transition: all .4s;
		margin-top: 10upx;
	}
	.change_title .ipt,.change_title2 .ipt{
		width: 90%;
		margin: 0 auto;
		height: 80upx;
	}
	.change_title .ipt input,.change_title2 .ipt input{
		width: 100%;
		height: 100%;
		background: #fff;
		padding:16upx 20upx;
		box-sizing: border-box;
		font-size: 28upx;
		/* line-height: 60upx; */
	}
	.change_title .ipt textarea,.change_title2 .ipt textarea{
		width: 100%;
		height: 100%;
		background: #fff;
		padding:6upx 20upx;
		box-sizing: border-box;
		font-size: 28upx;
		/* line-height: 60upx; */
	}
	.change_title .btn,.change_title2 .btn{
		width: 90%;
		margin: 30upx auto 0;
		height: 50upx;
		overflow: hidden;
	}
	.change_title .btn span,.change_title2 .btn span{
		float: right;
		width: 120upx;
		height: 50upx;
	}
	.change_title .btn .sp2,.change_title2 .btn .sp2{
		background: rgb(0,162,232);
		color: #fff;
		font-size: 26upx;
		text-align: center;
		line-height:50upx;
		margin-left: 20upx;
	}
	.change_title .btn .sp1,.change_title2 .btn .sp1{
		/* background: blue; */
		color: #ccc;
		font-size: 26upx;
		text-align: center;
		line-height: 50upx;
		/* margin-left: 20upx; */
		border: 2upx solid #CCCCCC;
	}
	.change_title2{
		width: 100%;
		height: 0upx;
		overflow: hidden;
		-webkit-transition: all 0s;
		-moz-transition: all 0s;
		background: #F3F3F3;
	}
	.change_title3{
		width: 100%;
		height: 160upx;
		overflow: hidden;
		-webkit-transition: all .4s;
		-moz-transition: all .4s;
		/* margin-top: 10upx; */
		background: #F3F3F3;
		padding: 10upx 0;
		box-sizing: border-box;
	}
	.change_title3 .ipt,.change_title4 .ipt{
		width: 90%;
		margin: 0 auto 0;
		height: 60upx;
		padding: 10upx 0;
		box-sizing: border-box;
	}
	.change_title3 .ipt textarea,.change_title4 .ipt textarea{
		width: 100%;
		height: 60upx;
		background: #fff;
		padding:6upx 20upx;
		line-height: 48upx;
		box-sizing: border-box;
		font-size: 28upx;
	}
	.change_title3 .btn2,.change_title4 .btn2{
		width: 90%;
		margin: 20upx auto 0;
		height: 60upx;
		overflow: hidden;
		padding: 0 30upx;
	}
	.change_title3 .btn2 span,.change_title4 .btn2 span{
		width: 100upx;
		height: 50upx;
	}
	.change_title3 .btn2 .sp2,.change_title4 .btn2 .sp2{
		/* background: rgb(0,162,232); */
		color: red;
		float: right;
		font-size: 30upx;
		text-align: center;
		line-height:50upx;
		margin-left: 20upx;
		height: 50upx;
	}
	.change_title3 .btn2 .sp1,.change_title4 .btn2 .sp1{
		color: red;
		font-size: 30upx;
		text-align: center;
		line-height: 50upx;
		float: left;
	}
	.change_title4{
		width: 100%;
		height: 0upx;
		overflow: hidden;
		-webkit-transition: all .4s;
		-moz-transition: all .4s;
		background: #F3F3F3;
	}
</style>
