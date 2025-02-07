<template>
	<view class="nav_box">
		<view class="nav_top">
			<navData></navData>
		</view>
		<view class="center_box">
			<view class="center_box_left">
				<view class="center_box_left_title">
					Season 7/ Levels 1-60+ Collection drop+Unlock Torture 1+2+3+4 / /// Self-play AFK/Pilot!
					12
				</view>
				<view class="center_box_store_assage">
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
						聊天
					</view>
				</view>
				<view class="center_box_left_content">
					<up-form labelPosition="left" :model="model1" ref="form1" labelWidth="200px">
						<up-form-item label="产品:"  :borderBottom='true' ref="item1">
							<up-input v-model="model1.name" border="none"></up-input>
						</up-form-item>
						<up-form-item label="游戏:"  :borderBottom='true' ref="item1">
							<up-input v-model="model1.name" border="none"></up-input>
						</up-form-item>
						<up-form-item label="Boosting Type:"  :borderBottom='true' ref="item1">
							<up-input v-model="model1.name" border="none"></up-input>
						</up-form-item>
						<up-form-item label="Server:"  :borderBottom='true' ref="item1">
							<up-input v-model="model1.name" border="none"></up-input>
						</up-form-item>
					</up-form>
				</view>
				<view class="center_box_left_title">
					产品图片
					<view class="center_box_left_img">
						<up-image style="margin-right: 20px;margin-bottom: 20px;" :show-loading="true"
							src="https://www.p2pah.com/upload/avatar/20210511/827c6eaf3724798aea2b9d83eaed3122.jpg"
							width="100px" height="100px"></up-image>
					</view>
					
				</view>
				<view class="center_box_left_title">
					<view class="">
						描述
					</view>
					<text style="font-size: 14px;">eason 7/ Levels 1-60+ Collection drop+Unlock Torture 1+2+3+4 / /// Self-play AFK/Pilot!</text>
				</view>
			</view>
			<view class="center_box_right">
				<view class="center_box_right_top">
					<text>单价</text>
					<text style="font-size: 24px;">13.50USD</text>
				</view>
				<view style="padding: 20px;">
					<view class="center_box_right_titlt">
						<text>单价</text>
						<text style="color: #000000;">13.50USD</text>
					</view>
					<view class="center_box_right_titlt">
						<text>单价</text>
						<text style="color: #000000;">13.50USD</text>
					</view>
				</view>
				<view class="line"></view>
				<view class="center_box_price">
					<el-input-number :precision="0" :step="1" v-model="num" :min="1"  @change="handleChange" />
					<view>1 = 13.50 USD</view>
				</view>
				<view class="line"></view>
				<view style="padding: 20px;">
					<view class="center_box_right_titlt">
						<text>价格</text>
						<text style="color: #000000;font-size: 24px;">121.50 USD</text>
					</view>
				</view>
				<view class="line"></view>
				<view class="btn">
					<el-button style="width: 100%;height: 40px;" type="danger">立即购买</el-button>
				</view>
				
			</view>
		</view>
		<bottomNav></bottomNav>
	</view>

</template>

<script>
	export default{
		data(){
			return{
				model1:{
					 name: 'uview-plus UI',  
				},
				num:1
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav_box{
		background-color: #f5f5f5;
		// padding: 20px;
	}
	.line{
		height: 1px;
		width: 100%;
		background-color: #e2e2e2;
	}
	.center_box {
		width: 1200px;
		
		margin: 20px auto;
		display: flex;
		justify-content: space-between;

		.center_box_left {
			width: 60%;
			// background-color: pink;
			padding: 20px;
			box-sizing: border-box;
			background-color: #fff;
			border-radius: 10px;
			.center_box_left_content{
				margin: 20px auto;
				
			}
			.center_box_left_title{
				font-size: 24px;
				.center_box_left_img{
					display: flex;
					margin-top: 20px;
					
				}
				
			}
			
			.center_box_store_assage{
				width: 100%;
				padding: 20px;
				background-color: #f5f5f5;
				box-sizing: border-box;
				margin: 20px auto;
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
				
			}
		}

		.center_box_right {
			background-color: #fff;
			width: 35%;
			// padding: 20px;
			height: 450px;
			box-sizing: border-box;
			border-radius: 10px;
			overflow: hidden;
			.center_box_right_top{
				background-color: #12cba6;
				position: relative;
				padding: 20px;
				color: #fff;
				display: flex;
				justify-content: space-between;
				font-size: 14px
			}
			.center_box_right_titlt{
				// padding: 20px;
				color: #9e9e9e;
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				margin-bottom: 10px;
			}
			.center_box_price{
				margin: 20px auto;
				text-align: center;
			}
		}
	}
	.btn{
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
	}
</style>