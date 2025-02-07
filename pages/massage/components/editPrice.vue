<template>
	<!-- 商品管理 -->
	<view>
		<el-dialog v-model="dialogFormVisible" :title="title" width="30%" align-center>
			<el-form ref="ruleFormRef" :model="ruleForm" label-position="left" :rules="rules">
				<el-form-item label="输入更改的金额：" :label-width="formLabelWidth" prop="goods_num">
					<el-input-number v-model="ruleForm.goods_num" :min="1" :max="sku" />
				</el-form-item>
				<el-form-item label="备注：" :label-width="formLabelWidth">
					<el-input resize="none" v-model="ruleForm.remark" style="width: 60%" type="textarea" show-word-limit
						maxlength="200" />
				</el-form-item>
			</el-form>
			<template #footer>
				<div class="dialog-footer">
					<el-button type="primary" @click="submitForm(ruleFormRef)">确认</el-button>
					<el-button @click="handleReset()">
						取消
					</el-button>
				</div>
			</template>
		</el-dialog>
	</view>
</template>
<script>
	// import { postAddStock, postSubStock } from '@/api/goods'
	export default {
		props: {
			type: {
				type: String,
				default: () => ''
			},
			id: {
				type: Number,
				default: () => null
			},
			sku: {
				type: Number,
				default: () => null
			},

		},
		data() {
			return {
				dialogFormVisible: false,
				formLabelWidth: '9.375rem',
				title: '',
				ruleForm: {
					goods_num: 1,
					remark: ''
				},
				rules: {
					goods_num: [{
						required: true,
						message: '请填写部门名称',
						trigger: 'blur'
					}, ],
				}
			}
		},
		methods: {
			handleCancel() {
				if (this.type == 'warehous') {
					this.title = '入库'
				} else {
					this.title = '出库'
				}
				this.dialogFormVisible = true
			},
			async submitForm() {
				if (this.dialogFormVisible) {
					if (!this.$refs['ruleFormRef']) return
					await this.$refs['ruleFormRef'].validate((valid) => {
						if (valid) {
							this.dialogFormVisible = false
							this.changeStock()

						}
					})
				}

			},
			handleReset() {
				this.$refs['ruleFormRef'].resetFields()
				this.ruleForm = {
					goods_num: 1,
					remark: ''
				}
				this.dialogFormVisible = false
			},
			changeStock() {
				let _api = null
				if (this.type == 'warehous') {
					_api = postAddStock
				} else {
					_api = postSubStock
				}

				_api({
					supermarket_id: localStorage.getItem('supermarket_id'),
					base_goods_id: this.id,
					goods_num: this.ruleForm.goods_num,
					remark: this.ruleForm.remark
				}).then(res => {
					if (res.code == 200) {
						ElMessage.success('操作成功')
						this.$emit('on-submit')
						this.handleReset()
					}
				})
			}
		}
	}
</script>