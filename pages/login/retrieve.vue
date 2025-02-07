<template>
	<view class="login_massage">
		<view class="box_all_bg">
			<view class="box_bg">
			</view>
		</view>
		<!-- 主体 -->
		<view class="register_box">
			<view class="register_box_title">找回密码</view>
			<view class="title">
				<p>忘记密码</p>
				<p>重置代码将发送到您的电子邮件地址.</p>
			</view>
			<view class="register_box_prompt">
				电子邮件或手机号码
			</view>
			<view style="text-align: left;">
				<!-- 校验 -->
				<up-form :model="form" :rules="rules" ref="uFormRef">
					<up-form-item prop="value">
						<up-input placeholder="请输入密码" border="surround" v-model="form.value"
							@change="change"></up-input>
					</up-form-item>

				</up-form>

			</view>
			<view class="btn_box">
				<up-button class="btn" text="返回"></up-button>
				<up-button type="error" class="btn" @click="submitMsg" text="提交"></up-button>
			</view>
			<view class="login_account">
				如果您忘记了您的电子邮件或手机号码，请与 <text @click='goRegister'>客户服务</text>联络。
			</view>
		</view>
		<!-- 选择国家 -->
		<view class="choose_country_vue">
			<chooseCountryVue></chooseCountryVue>
		</view>
		<!-- 验证 -->
		<testVue ref="test_vue"></testVue>
		<!-- 底部 -->
		<view class="bottom_nav_vue">
			<bottomNavVue></bottomNavVue>
		</view>

	</view>
</template>

<script>
	import chooseCountryVue from '../globalComponents/chooseCountry.vue';
	import testVue from './components/test.vue';
	import bottomNavVue from '../globalComponents/bottomNav.vue';
	export default {
		components: {
			chooseCountryVue,
			testVue,
			bottomNavVue
		},
		data() {
			return {
				value: '', //输入邮件绑定值
				aloneChecked: false, //勾选框
				form: {
					value: '',
				}, //编排但绑定数据
				rules: {
					value: {
						type: 'string',
						required: true,
						min: 11,
						message: '至少填写11位',
						trigger: ['blur']
					},
				}, //表单校验

			}
		},
		methods: {
			change(e) {
				// console.log('change', e);
			},
			// 弹窗校验机器人
			openTest() {
				this.$nextTick(() => {
					this.$refs['test_vue']?.open()
				})
			},
			// 跳转客户服务
			goRegister() {
				uni.navigateTo({
					url: '/pages/login/register'
				});
			},
			// 提交
			submitMsg() {
			// 	// 校验填写内容
				this.$refs['uFormRef'].validate().then(valid => {
			
					if (valid) {
						uni.$u.toast('校验通过')
					} else {
						uni.$u.toast('校验失败')
					}
				}).catch(() => {
					// 处理验证错误  
					uni.$u.toast('校验失败')
				});
			}
		},
		

	
	}
</script>

<style scoped lang="scss">
	.login_massage {
		background-color: #f5f5f5;
	}

	.box_all_bg {
		width: 100%;
		height: 300px;
		overflow: hidden;
		position: relative;
	}

	.box_bg {
		position: absolute;
		width: 110%;
		height: 500px;
		border-radius: 40%;
		background-color: rgb(29, 93, 221);
		bottom: 10%;
		left: -5%;
	}

	.register_box {
		background-color: white;
		position: relative;
		width: 500px;
		top: -160px;
		left: calc(50% - 500px/2);
		border-radius: 5px;
		padding: 30px 40px;
		box-sizing: border-box;
		text-align: center;
		color: #000000;
		box-shadow: 2px 2px 5px 0 rgba(245, 245, 240, 0.5);

		.register_box_title {
			font-size: 22px;
			font-weight: 500;
			// margin: 20px 0;
		}

		.title {
			text-align: left;
			font-size: 14px;
			color: #525257;
			margin: 30px 0;
		}

		.register_box_prompt {
			text-align: left;
			color: #9292a2;
			font-size: 14px;
		}
	}

	.btn_box {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin: 30px 0;

		.btn {
			width: 200px;
		}
	}

	.login_account {
		margin: 20px auto 0;
		font-size: 14px;

		text {
			color: #ff0000;
		}
	}

	// .bot_line{
	// 	margin: 40px auto;
	// }
</style>