<template>
	<!-- 筛选下拉框 -->
	<view class="steam_choose">
		<div class="flex flex-wrap items-center">
			<el-dropdown trigger="click"  ref="dropdown1">
				<el-button class="btn_box" text bg>
					<view class="btn_text">
						{{titlt}}
					</view>
					<el-icon>
						<ArrowDownBold />
					</el-icon>
				</el-button>
				<template #dropdown>
					<view class="box_content">
						<up-search @change="inValueChange" :clearabled="false" v-model="inValue" class="choose_search"
							:show-action="false" shape='square' bgColor="#fff" :animation="false" placeholder="输入搜索关键词"
							height="50px"></up-search>
						<view class="line"></view>
						<view class="choose_label">
							<view class="choose_label_box_fat" v-for="item,i in list">
								<up-text :text="item.name"></up-text>
								<up-checkbox-group v-model="item.checkboxValue1" placement="row" @change="checkboxChange" >
									<up-checkbox style="width: 150px;" :customStyle="{marginBottom: '8px'}"  activeColor="red" 
										v-for="(item2, index) in item.children" :key="'index'+index" :label="item2.name"
										:name="item2.name">
									</up-checkbox>
								</up-checkbox-group>
							</view>
						</view>
						<view class="line"></view>
						<view class="bottom">
							<el-button text @click="clearData"> 清除所有</el-button>
							<el-button type="danger" @click="submitData">确定</el-button>
						</view>
					</view>
				</template>
			</el-dropdown>
		</div>

	</view>
</template>

<script>
	import {
		ArrowDown
	} from '@element-plus/icons-vue'
	export default {
		props:{
			// 接收父组件传过来的渲染列表数据
			dataList: {
				type: Array,
				default: () =>[]
			},
			// 标题
			titlt:{
				type:String,
				default:''
			}
		},
		data() {
			return {
				inValue: '',//搜索框数据
				list:[],//渲染列表
			}
		},
		mounted() {
			this.list=this.dataList
		},
		methods: {
			// 搜索框数据变化监听事件用于搜索数据使用
			inValueChange(e) {
			},
			// 点击事件清空所有已选中数据
			clearData() {
				this.list.forEach((item, i) => {
					item.checkboxValue1=[]
				})
				this.$refs['dropdown1'].handleClose()
			},
			 checkboxChange (n)  {
			  console.log('change', n);
			},
			// 筛选完成提交筛选数据到父组件更新筛选列表数据
			submitData(){
				let arr=[]
				this.dataList.forEach((item)=>{
					arr.push(...item.checkboxValue1)
				})
				console.log('arr',arr);
				this.$emit('changList')
			}
		}
	}
</script>

<style scoped lang="scss">
	.box_content {
		width: 400px;
		// height: 600px;

		// background-color: pink;
		.line {
			width: 100%;
			height: 1px;
			background-color: #ebebeb;
			// margin-bottom: 10px;
		}
	}

	// 搜索内容布局
	.choose_label {
		padding: 20px;

		.choose_label_box_fat {
			.choose_label_children {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;

				.up_checkbox_group {
					width: 150px;
				}
			}
		}
	}
	.btn_box{
		height: 42px;
	}
.btn_text{
	margin-right: 20px;
}
	.bottom {
		padding: 20px;
		display: flex;
		justify-content: space-between;
	}
</style>