<template>
	<view>
		<view class="header">
			<span v-if='back' @click='goback' class='sp1'>
				<image src="/static/image/return.png" mode=""></image>
				<span>返回</span>
			</span>
			<span>{{title}}</span>
			<span class='sp2'>{{twotitle}}</span>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				twotitle:''
			};
		},
		methods:{
			goback(){
				uni.navigateBack({
					delta:1
				})
			}
		},
		props:{
			title:String,
			back:Boolean
		}
	}
</script>

<style>
	.header{
		width: 100%;
		height: 100upx;
		background: rgb(74,119,176);
		padding: 0 20upx;
		box-sizing: border-box;
		color: #FFFFFF;
		line-height: 100upx;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		text-align: center;
	}
	.sp1{
		display: block;
		/* width: 120upx; */
		height: 60upx;
		position: absolute;
		top: 50%;
		margin-top: -30upx;
		left: 0;
	}
	.sp1 image{
		width: 40upx;
		height: 40upx;
		position: absolute;
		top: 50%;
		left: 20upx;
		/* margin-left: -20upx; */
		margin-top: -20upx;
	}
	.sp1  span{
		display: block;
		position: absolute;
		left: 60upx;
		top: 0;
		width:100upx;
		height:60upx;
		text-align: left;
		line-height: 60upx;
		font-size: 28upx;
	}

</style>
