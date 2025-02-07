<template>
	<!-- 翻页组件 -->
	<view class="global_page">
		<el-pagination :total="total" v-model:current-page="current" v-model:page-size="page.page_size"
			:page-sizes="pageSizeOption" :small="small" :disabled="disabled" :background="background"
			layout=" prev, pager, next,sizes,jumper" @size-change="handleSizeChange"
			@current-change="handleCurrentChange" />
	</view>
</template>

<script>
	export default {
		props: {
			total: {
				type: Number,
				default: 0
			},
		},
		components: {},
		data() {
			return {
				current: 1,
				page: {
					page_size: 10,
					page: 1
				},
				pageSizeOption: [10, 20, 30],
				small: false,
				disabled: false,
				background: false,
			}
		},
		methods: {
			// 更改条
			handleSizeChange(val) {
				this.page.page_size = val
				this.$emit("page-size", this.page);
			},
			// 更改页数
			handleCurrentChange(val) {
				this.page.page = val
				this.$emit("page-size", this.page);
			},
			// 重置页面为1
			reset() {
				this.current = 1
				this.page.page = 1
				this.page.page_size = 10
			}
		}
	}
</script>

<style scoped>
	.global_page {
		background-color: #fff;
		width: 20%;
		height: 40px;
		color: #333333;
		font-size: 12px;
		color: #999999;
		margin: 30px auto;
	}
</style>