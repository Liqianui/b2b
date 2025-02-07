<template>
	<view class="table_box">
		<navData></navData>
		<view class="order-table-list" v-if="table.data">
			<el-table style="width: 100%;" :data="table.data" size="large" v-loading="table.loading">
				<el-table-column prop="date" label="ID" min-width="120" />
				<el-table-column prop="name" label="名称" min-width="100" />
				<el-table-column prop="date" label="价格" min-width="120" />
				<el-table-column prop="date" label="零售价" min-width="180" />
				<el-table-column prop="date" label="总库存" min-width="180" />
				<el-table-column label="状态" min-width="130">
					<template #default="scope">
						<el-tag class="ml-2" v-if="scope.row.status == 1" type="success">上架</el-tag>
						<el-tag class="ml-2" v-if="scope.row.status == 2" type="danger">下架</el-tag>
					</template>
				</el-table-column>
				<el-table-column label="操作" width="300">
					<template #default="scope">
						<el-button size="large" type="primary" v-if="scope.row.status == 2" link
							@click="handleStatus(postUpShelf, scope.row.id)">上架</el-button>
						<el-button size="large" type="primary" v-if="scope.row.status == 1" link
							@click="handleStatus(postDownShelf, scope.row.id)">下架</el-button>
						<el-button v-if="scope.row.status != 0" size="large" type="primary" link
							@click="handleEditGoods('warehous', scope.row.id)">编辑金额</el-button>
					</template>
				</el-table-column>
			</el-table>
			<edit-price ref="edit_price" :id="id" @on-submit="handleRefresh"></edit-price>
			<!-- <view v-if="table.data.length>10"> -->
				<page-component ref="page" @page-size="handlePageChange" :total="total"></page-component>
			<!-- </view> -->
		</view>
		<bottomNav></bottomNav>
	</view>

</template>
<script>
	import {
		ElMessage,
		ElMessageBox
	} from 'element-plus'
	import editPrice from './components/editPrice.vue'
	export default {
		components: {
			editPrice
		},
		mounted() {

		},
		data() {
			return {
				total: 20,
				table: {
					data: [{
							date: '2016-05-03',
							name: 'Tom',
							address: 'No. 189, Grove St, Los Angeles',
							status: 1
						},
						{
							date: '2016-05-02',
							name: 'Tom',
							address: 'No. 189, Grove St, Los Angeles',
							status: 1
						},
						{
							date: '2016-05-04',
							name: 'Tom',
							address: 'No. 189, Grove St, Los Angeles',
							status: 2
						},
						{
							date: '2016-05-01',
							name: 'Tom',
							address: 'No. 189, Grove St, Los Angeles',
							status: 1
						},
					],
					loading: false,
					total: null
				},

			}
		},
		onMounted() {
			getList()
		},
		methods: {
			getList() {
				this.table.loading = true
				let params = Object.assign({
						page_size: this.page.page_size,
						page: this.page.page,
					},
					this.search
				)
				getGoodsList(params).then(res => {
					if (res.code == 200 || res.code == 201) {
						this.table.data = res.result.list
						this.table.loading = false
						this.table.total = res.result.total
					}
				})
			},
			handleEditGoods(type, id) {
				this.type = type
				this.id = id
				this.$nextTick(() => {
					this.$refs['edit_price']?.handleCancel()
				})
			},
			// 上下架
			handleStatus(type, id) {
				type({
					supermarket_id: localStorage.getItem('supermarket_id'),
					base_goods_id: id
				}).then(res => {
					if (res.code == 200) {
						ElMessage.success('操作成功')
						this.handleRefresh()
					}
				})
			},
			handlePageChange(val) {
				this.page = val
				this.getList()
			},
			// 刷新列表
			handleRefresh() {
				this.page = {
					page_size: 10,
					page: 1
				}
				this.reset()
				this.getList()
			},
			// 更新页数
			reset() {
				this.$refs['page']?.reset()
			},
		}
	}
</script>
<style scoped lang="scss">
	.table_box {
		width: 100vw;
		background-color: #ffffff;

		.order-table-list {
			width: 90%;
			margin: 100px auto 150px;
		}
	}
</style>