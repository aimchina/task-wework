<template>
	<view>
		<uni-nav-bar left-text="取消" right-text="确定" title="选择标签" backgroundColor="#4f9efb" color="#fff" :border="false" @clickLeft="back" @clickRight="submit(tags,text)"></uni-nav-bar>
		<view class="main">
			<view class="addTag">
				+添加知识标签
			</view>
			<checkbox-group @change="CheckboxChange">
				<view class="cu-form-group block" v-for="(item,index) in list" :key="index">
					<checkbox class='round blue' :class="item.checked?'checked':''" :checked="item.check" :value="item.id"></checkbox>
					<view class="title" style="margin-left: 40upx;">{{item.name}}</view>
				</view>
			</checkbox-group>
		</view>
	</view>
</template>

<script>
	import hex_sha1 from "sha1"
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		data: function() {
			return {
				accessToken: '64e9275246c6545a3b5d3ad060fe4c516f44d556',
				list: [],
				tags: '',
				text: ''
			}
		},
		components: {
			uniNavBar
		},
		onLoad(opt) {
			this.getTag()
		},
		methods: {
			getTag() {
				uni.showLoading({})
				var signStr = "access-token=" + this.accessToken + "&company_id=2";
				console.log(signStr)
				var sign = hex_sha1(signStr);
				console.log(sign)
				uni.request({
					url: 'https://testapi.shiliucrm.com/v2/notes_tag/notes-tags',
					method: 'GET',
					data: {
						company_id: '2',
						'access-token': this.accessToken,
						sign: 'd2754e11d805db39b2ba33db9e884bae26fedbbd',
					},
					success: (res) => {
						console.log(res)
						uni.hideLoading()
						var list = res.data.items;
						for (var i = 0; i < list.length; i++) {
							if (list[i].is_del == '0') {
								this.list.push(list[i])
							}
						}
						console.log(this.list)
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			CheckboxChange(e) {
				console.log(e)
				var items = this.list,
					values = e.detail.value,
					text = [];
				for (var i = 0; i < items.length; i++) {
					const item = items[i]
					if (values.includes(item.id)) {
						this.$set(item, 'checked', true)
						text.push(item.name)
					} else {
						this.$set(item, 'checked', false)
					}
				}
				this.text = text.join(',')
				this.tags = values.join(',')
				console.log(this.tags)
				console.log(this.text)
			},
			back() {
				uni.navigateBack({
					delta:1
				})
			},
			submit(tags,text) {
				if(tags) {
					uni.$emit('tags',{tags:tags,text:text})
					uni.navigateBack({
						delta:1
					})
				} else {
					uni.showToast({
						title: '请先选择标签',
						icon: 'none'
					})
				}
			}
		},
		onShow() {
			var list = uni.getStorageSync('login');
			if (list) {
				this.accessToken = list.access_token
			}
		}
	}
</script>

<style>
	page {
		background: #fff;
	}

	.main {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-end;
		background: #fff;
	}

	.addTag {
		width: 720upx;
		height: 100upx;
		border-bottom: 2upx solid #ccc;
		color: #4f9efb;
		font-size: 32upx;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.block {
		width: 720upx;
		border-bottom: 2upx solid #f2f2f2;
		display: flex;
		justify-content: flex-start !important;
		align-items: center;
		padding: 0 !important;
	}
</style>
