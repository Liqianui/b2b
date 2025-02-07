<template>
	<view>
		<!-- 头部导航 -->
		<view class="nav_top">
			<navData></navData>
		</view>
		<!-- 首席筛选分类部分 -->
		<view class="tab_classify">
			<view class="tab_classify_box">
				<view class="tab_classify_box_title">
					Diablo IV Gold
				</view>
				<view class="tab_classify_box_content">
					<up-sticky bgColor="none">
						<up-tabs :activeStyle="{ color: '#ed3726',padding:0,fontSize:'14px'  }" :inactiveStyle="{
						        color: '#303030',
								fontSize:'14px'
						    }" itemStyle=" padding:0;margin-right:20px;" lineColor="none" :list="classifyList"></up-tabs>
					</up-sticky>

				</view>
			</view>
		</view>
		<!-- 筛选数据部分 -->
		<view class="search_data">
			<view class="search_data_left">
				<!-- 筛选组件公共方法 -->
				<staemChooseVue style="margin-right: 10px;" v-for="item,i in chooseList" :titlt='item.name'
					:dataList="item.list" @changList=changeList>
				</staemChooseVue>
				
				<!-- <staemChooseVue titlt='Boosting Type'></staemChooseVue> -->
				<up-input class="search_data_left_inp" placeholder="搜索" v-model="valueSearch" @change="change"
					suffixIcon="search">
				</up-input>
				<up-button style="width: 80px;margin-left: 20px;" type="error" text="确定"></up-button>
			</view>
			<view class="search_data_right">
				<text>在线卖家</text>
				<up-switch activeColor="#20c082" size="20" v-model="openValue" @change="openValueChange"></up-switch>
			</view>
		</view>
		<!-- 筛选结果 -->
		<view class="choose_list">
			<view class="product_box" v-for="item,i in 10" @click="goDetailPage">
				<view class="product_top">
					<p>Rent An Booster Hours Service</p>
					<up-image :show-loading="true" src="https://www.p2pah.com/static/p2pah/images/portrait/items.png"
						width="30px" height="30px" radius='100px'></up-image>

				</view>
				<view class="product_item_selever">
					Eternal SC
				</view>
				<!-- 买家信息 -->
				<view class="product_bot">
					<view class="products_seller">
						<el-badge value="123" style="transform: scale(0.7);">
							<up-image :show-loading="true"
								src="https://www.p2pah.com/upload/avatar/20210511/827c6eaf3724798aea2b9d83eaed3122.jpg"
								width="40px" height="40px" radius='100px'></up-image>
							<view class="seller_online_status"></view>
						</el-badge>
						<view class="item_title">
							Cherry
						</view>
					</view>
					<view class="products_price">
						最低 <text class="price">19.22</text> <text class="currency">EUR</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navData from '../globalComponents/navData.vue';
	import staemChooseVue from '../globalComponents/staemChoose.vue';
	export default {
		components: {
			navData,
			staemChooseVue
		},
		data() {
			return {
				// tab切换列尔表数据
				classifyList: [{
					name: '游戏币'
				}, {
					name: '游戏币'
				}, {
					name: '游戏币'
				}, {
					name: '游戏币'
				}],
				valueSearch: '', //搜索数据
				openValue: '', //在线卖家开关
				chooseList: [{
					name: 'Serve',
					list: [{
						name: 'Server',
						children: [{
							name: '苹果1',
							disabled: false,
						}, {
							name: '苹果2',
							disabled: false,
						}, {
							name: '苹果3',
							disabled: false,
						}, {
							name: '苹果4',
							disabled: false,
						}],
						checkboxValue1: []
					}, {
						name: 'Server',
						children: [{
							name: '苹果1',
							disabled: false,
						}, {
							name: '苹果2',
							disabled: false,
						}, {
							name: '苹果3',
							disabled: false,
						}, {
							name: '苹果4',
							disabled: false,
						}],
						checkboxValue1: []
					}]
				}, {
					name: 'Boosting Type',
					list: [{
						name: 'Server',
						children: [{
							name: '香蕉1',
							disabled: false,
						}, {
							name: '苹果2',
							disabled: false,
						}, {
							name: '苹果3',
							disabled: false,
						}, {
							name: '苹果4',
							disabled: false,
						}],
						checkboxValue1: []
					}, {
						name: 'Server',
						children: [{
							name: '苹果1',
							disabled: false,
						}, {
							name: '苹果2',
							disabled: false,
						}, {
							name: '苹果3',
							disabled: false,
						}, {
							name: '苹果4',
							disabled: false,
						}],
						checkboxValue1: []
					}]
				}, ],
			}
		},
		methods: {
			// 输入框搜索内容触发事件
			change() {

			},
			// 在线卖家选中改变事件
			openValueChange() {

			},
			// 组件staemChooseVue 搜索条件城改传过来的自定义事件 更新视图
			changeList() {

			},
			goDetailPage(){
				uni.navigateTo({
					url: '/pages/shop/detail'
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.nav_top {
		position: sticky;
	}

	.tab_classify {
		width: 100%;
		background-color: #f5f5f5;
		padding: 43px;
		box-sizing: border-box;

		.tab_classify_box {
			width: 1200px;
			margin: 0 auto;

			.tab_classify_box_title {
				font-size: 24px;
				color: #303030;
			}

			.tab_classify_box_content {
				margin-top: 20px;
			}
		}

	}

	.search_data {
		width: 1200px;
		margin: 20px auto;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;

		.search_data_left {
			display: flex;
			justify-content: space-between;

			.search_data_left_inp {
				width: 200px;
				margin-left: 10px;
			}
		}

		.search_data_right {
			display: flex;
			align-items: end;

			text {
				margin-right: 10px;
				font-size: 12px;
				color: #545457;

			}
		}
	}




	.choose_list {
		width: 1200px;
		// background-color: pink;
		// height: 300px;
		margin: 20px auto;
		display: flex;
		flex-wrap: wrap;


		.product_box {
			position: relative;
			border: 1px solid #e0e0e0;
			border-radius: 5px;
			overflow: hidden;
			background: #fff;
			width: 290px;
			// height: 160px;

			box-sizing: border-box;
			margin-right: 10px;
			margin-bottom: 10px;

			.product_top {
				padding: 10px;
				width: 100%;
				display: flex;
				box-sizing: border-box;
				justify-content: space-between;

				p {
					width: 180px;
					height: 75px;
					font-size: 14px;
					color: #4a4a4a;
				}
			}

			.product_item_selever {
				font-size: 12px;
				color: #303030;
			}

			.product_bot {
				padding: 8px 10px;
				background: #f7f7f9;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.products_seller {
					display: flex;
					align-items: center;

					.seller_online_status {
						background: #16da8e;
						width: 15px;
						height: 15px;
						border-radius: 100%;
						position: absolute;
						bottom: 0;
						right: 0;

					}

					.item_title {
						font-size: 12px;
						color: #525257;

					}
				}

				.products_price {
					color: #9292a2;
					font-size: 14px;

					.price {
						color: #000000;
					}

					.currency {
						font-size: 11px;
						color: #000000;
					}
				}
			}


		}

		.product_box:hover {
			box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
			transform: scale(1);
			transition: all 0.6s ease;
			top: -4px;
		}
	}
</style>