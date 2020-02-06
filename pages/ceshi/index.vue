<template>
	<view class="content">
		1.文字左对齐 外部显示搜索按钮并且始终显示
		<mSearch @search="search($event,0)"></mSearch>
		搜索的值：{{val0}}
		<br />
		2.文字左对齐 外部显示搜索按钮并且获取焦点时显示
		<mSearch :show="false" @search="search($event,1)"></mSearch>
		搜索的值：{{val1}}

		<br />
		3.文字居中对齐 内部显示搜索按钮并且获取焦点时显示
		<mSearch :mode="2" button="inside" @search="search($event,2)"></mSearch>
		搜索的值：{{val2}}

		<br />
		4.文字居中对齐 内部显示搜索按钮并且获取输入时显示
		<mSearch :mode="2" button="inside" :show="false" @search="search($event,3)"></mSearch>
		搜索的值：{{val3}}
		<br />
		5.自定义输入框
		<mSearch :show="false" radius="5" :placeholder="placeholder" backgroundColor="#ff5a5f" border='1px #999 solid'></mSearch>
	</view>
</template>

<script>
	import mSearch from '@/components/mehaotian-search/mehaotian-search.vue';
	export default {
		components: {
			mSearch
		},
		data() {
			return {
				val0: '',
				val1: '',
				val2: '',
				val3: '',
				placeholder: '动态占位内容'
			};
		},

		methods: {
			search(e, val) {
				console.log(e, val);
				this['val' + val] = e;
			}
		}
	};
</script>
