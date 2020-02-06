<template>
	<div>
		<view class="add">
			<input type="number" value="" v-model="price" placeholder="请输入价格" />
		</view>
		<view class="btn">
			完成
		</view>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				price:''
			}
		}
	}
</script>

<style>
	page {
		background: #F3F3F3;
	}

	.add {
		width: 100%;
		height: 100upx;
		background: #fff;
	}

	.add input {
		width: 60%;
		margin: 0 auto;
		font-size: 28upx;
		height: 100upx;
	}

	.btn {
		width: 600upx;
		height: 80upx;
		text-align: center;
		line-height: 80upx;
		font-size: 28upx;
		color: #FFFFFF;
		background: #e14b16;
		margin: 50upx auto 0;
		border-radius: 20upx;
	}
</style>
