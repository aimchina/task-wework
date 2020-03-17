<template>
	<view class="content">
		<!-- code:{{code}} -->
		<!-- <view class="com">
			code:{{code}}
			access_token:{{access_token}}
			appsercert:{{appsercert}}
			uid:{{uid}}
			<view class="img">
				<image style="width: 100%;height: 100%;border-radius: 6upx;" :src="src" mode=""></image>
			</view>
			<view class="name">
				<span>{{name}}</span>
			</view>
			<view class="btn">
				<button class="cu-btn bg-red" @click="submit">授权登录</button>
			</view>
		</view> -->
		<view class="box-loading" v-if="isShow_loading">
			<Loading13></Loading13>
		</view>
	</view>
</template>

<script>
	import Loading13 from "@/components/loading/loading13.vue";
	export default {
		data() {
			return {
				code: '',
				access_token: '',
				appsercert: '',
				uid: '',
				src: '',
				name: '',
				suite_access_token: '',
				corpid: '',
				userid: '',
				mobile: '',
				email: '',
				corp_name:"",
				isShow_loading:false
			}
		},
		methods: {
			submit() {
				
			}
		},
		components: {
			Loading13
		},
		onLoad(option) {
			this.isShow_loading = true
			// alert(option)
			// alert(JSON.stringify(option))
			// alert('code=')
			this.code = option.code
			// document.write = option.code
			// alert(this.code)
			uni.request({
				url: 'https://testapi.shiliucrm.com/v1/hwechat_callback/callbacktask/suiteaccesstoken',
				data: {
					code: this.code
				},
				success: (res) => {
					// alert(res)
					// alert(JSON.stringify(res))
					// alert(res.data.name)
					this.src = res.data.avatar
					this.name = res.data.name
					this.suite_access_token = res.data.suite_access_token
					this.corpid = res.data.corpid
					this.userid = res.data.userid
					this.mobile = res.data.mobile
					this.email = res.data.email
					this.corp_name = res.data.corp_name
					// alert(this.corpid)
					uni.request({
						url: 'https://testapi.shiliucrm.com/v2/user/user/qywx-login',
						method: 'POST',
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						data: {
							name: this.name,
							access_token: this.suite_access_token,
							cropid: this.corpid,
							userid: this.userid,
							avatar: this.src,
							mobile: this.mobile,
							email: this.email,
							corp_name:this.corp_name
						},
						success: (res) => {
							this.isShow_loading = false
							this.access_token = res.data.access_token
							this.appsercert = res.data.appsercert
							this.uid = res.data.uid
							uni.showToast({
								title: 'componeyId：' + res.data.company_id,
								icon: 'none'
							})
							if (this.access_token && this.appsercert && this.uid) {
								var obj = {
									access_token: this.access_token,
									appsercert: this.appsercert,
									uid: this.uid,
									username: this.name,
									src: this.src,
									cropid: this.corpid,
									userid: this.userid
								}
								uni.setStorageSync('login', obj)
								// sessionStorage.setItem("login", JSON.stringify(obj));
								setTimeout(() => {
									uni.reLaunch({
										url: '/pages/item/index'
									})
								}, 1000)
								
							} else {
								uni.showToast({
									title: '登录失败',
									icon: 'none'
								})
							}
						}
					})
				}
			})
		}
	}
</script>

<style>
	.com {
		overflow: hidden;
	}
	* {
		margin: 0;
		padding: 0;
		-webkit-user-select: auto;
	}

	.img {
		width: 200upx;
		height: 200upx;
		border-radius: 20upx;
		margin: 50upx auto 0;
	}

	.name {
		width: 100%;
		padding: 30upx 0;
		text-align: center;
	}

	.btn {
		width: 80%;
		margin: 0 auto 0;
		padding-top: 200upx;
	}

	.btn button {
		width: 100%;
		height: 80upx !important;
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
</style>
