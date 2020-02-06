<template>
	<view class="content">
		<input-box ref="input1" v-model="username" :verification="['isNull','isPhoneNum']" :verificationTip="['手机号码不能为空','请输入正确的手机号']"
		 placeholder="请输入手机号码" maBtm="10" maxLength="11"></input-box>
		<input-box ref="input2" v-model="password" type="password" :verification="['isNull','isChineseEnlishAndNumber']"
		 :verificationTip="['密码不能为空','']" placeholder="请输入密码" maBtm="10"></input-box>
		<view class="btn">
			<button type="warn" @click="submit">关联</button>
		</view>
	</view>
</template>

<script>
	import inputBox from '@/components/input-box/input-box';
	import {
		ChangePageTitle
	} from '../../title.js'
	export default {
		components: {
			inputBox
		},
		data() {
			return {
				username: '',
				password: '',
				userid: '',
				corpid: ''
			}
		},
		methods: {
			submit() {
				console.log(this.username)
				console.log(this.password)
				uni.request({
					url:'https://testapi.shiliucrm.com/v2/user/user/qywxbinding',
					method:'POST',
					data:{
						user_name: this.username,
						password: this.password,
						cropid:this.cropid,
						userid:this.userid
					},
					header:{
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: (res) => {
						console.log(res)
					}
				})
				
			},
			onerification() {
				if (this.$refs.input1.getValue() && this.$refs.input2.getValue()) {
					uni.showToast({
						icon: 'none',
						title: '校验通过',
						// #ifdef MP-WEIXIN
						duration: 2000,
						// #endif
						// mask: true
					});
				}
			}
		},
		onLoad() {
			var list = uni.getStorageSync('login');
			if (list) {
				this.accessToken = list.access_token
				this.appsercert = list.appsercert
			}
		},
	    onShow() {
	    	document.title = 'handone'
	    	ChangePageTitle('handone')
	    }
	}
</script>

<style>
	.btn {
		width: 80%;
		height: 80upx;
		margin: 40upx auto 0;
	}

	.btn button {
		width: 100%;
		height: 100%;
		font-size: 30upx;
		line-height: 80upx;
	}
</style>
