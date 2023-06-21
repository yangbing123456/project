<template>
	<view class="df all fdc">
		<!-- 最上层注册和语言切换，后续可以抽历程公共组件 -->
		<view class="top df aic jcsb">
			<view class="df aic">
				<u-icon @click="goBack" name="arrow-leftward"></u-icon>
				<text class="fz18 fwb ml8">{{$t('personInfo.personInfo.5qzx7hnlw2k0')}}</text>
			</view>
			<text class="changeLanguage fz14 gray df aic  jcc">{{$t('personInfo.personInfo.5qzx7hnlx0o0')}}</text>
		</view>

		<!-- 填写个人信息文本 -->
		<view class="welcome fz20 mt35">
			{{$t('personInfo.personInfo.5qzx7hnlx7g0')}}
		</view>
		<text class="desc mt16 fz12">
			{{$t('personInfo.personInfo.5qzx7hnlxao0')}}
			<text class="red">{{$t('personInfo.personInfo.5qzx7hnlxds0')}}</text>。
			{{$t('personInfo.personInfo.5qzx7hnlxo00')}}
			<text class="green">{{$t('personInfo.personInfo.5qzx7hnlxr40')}}</text>，
			{{$t('personInfo.personInfo.5qzx913h37s0')}}
		</text>


		<!-- 首页这一块内容最开始不是劳资写的   样式，数据格式代码优化   改的想吐   你应该感谢我帮你改了一部分   这里还可以优化  但是懒得弄了-->
		<!-- 居住国家，下拉框 -->
		<view class="country df fdc aic jcc">
			<view class="liveConutry df aic jcsb" v-for="item in dataArr" :key="item.id" @click="changestatus(item)">
				<view class="df aic">
					<image class="img" :src="item.countryIcon"></image>
					<view class="title df fdc countryBox">
						<text class="fz12 color9d9e lh20">{{item.title}}</text>
						<text>{{item.label}}</text>

						<view v-if="countryShow" class="conBox">
							<view v-for='item in country' :key="item.id" class="smallBox"
								@click="changeTextHandler(item)">{{item.name}}</view>
						</view>
					</view>
				</view>
				<view class="box">
					<image class="img-down" :src="item.rightIcon" mode=""></image>
				</view>
			</view>


			<!-- 国籍下拉框 -->
			<view class="liveConutry df aic jcsb" v-for="item in dataArr1" :key="item.id" @click="changestatus(item)">
				<view class="df aic">
					<image class="img" :src="item.countryIcon"></image>
					<view class="title df fdc countryBox">
						<text class="fz12 color9d9e lh20">{{item.title}}</text>
						<text>{{item.label}}</text>

						<view v-if="countryShow1" class="conBox">
							<view v-for='item in country1' :key="item.id" class="smallBox"
								@click="changeTextHandler1(item)">{{item.name}}</view>
						</view>
					</view>
				</view>
				<view class="box">
					<image class="img-down" :src="item.rightIcon" mode=""></image>
				</view>
			</view>

			<!-- 出生地下拉框 -->
			<view class="liveConutry df aic jcsb" v-for="item in dataArr2" :key="item.id" @click="changestatus(item)">
				<view class="df aic">
					<image class="img" :src="item.countryIcon"></image>
					<view class="title df fdc countryBox">
						<text class="fz12 color9d9e lh20">{{item.title}}</text>
						<text>{{item.label}}</text>

						<view v-if="countryShow2" class="conBox">
							<view v-for='item in country2' :key="item.id" class="smallBox"
								@click="changeTextHandler2(item)">{{item.name}}</view>
						</view>
					</view>
				</view>
				<view class="box">
					<image class="img-down" :src="item.rightIcon" mode=""></image>
				</view>
			</view>

		</view>

		<!-- 单选框，我不是美国纳税居民 -->
		<view class="radio df aic jcs">
			<image @click="disabled= !disabled" class="radio-icon" :src="disabled==true ? src1 : src2" mode=""></image>
			<text @click="disabled= !disabled">{{$t('personInfo.personInfo.5qzx7hnlxz00')}}</text>
		</view>

		<!-- 继续按钮 -->
		<view class="box1 df aic jcc ">
			<button class="btn df jcc aic mt64"
				@click="goInvestigate">{{$t('personInfo.personInfo.5qzx7hnly280')}}</button>
		</view>

		<view class="text black df jcc">
			{{$t('personInfo.personInfo.5qzx7hnly4w0')}}
			<text class="sign" @click="login">{{$t('login.login.5qzx4k4lnvo0')}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				countryShow: false, //居住国家显示隐藏
				countryShow1: false, //国籍盒子显示隐藏
				countryShow2: false, //出生地显示隐藏
				countryId: this.$t('personInfo.personInfo.5qzx7hnlxwg0'),
				nationalityId: this.$t('personInfo.personInfo.5qzx7hnlxwg0'),
				birthplaceId: this.$t('personInfo.personInfo.5qzx7hnlxwg0'),
				disabled: false, //复选框的值
				src1: require('@/static/fonts/radio.svg'), //这两个图标是复选款的
				src2: require('@/static/fonts/dagou.svg'),
				number: 1, //传入一个值 给子页面   子页面通过这个值来判断进度条的样式
				//居住国家数组
				dataArr: [{
					id: 1,
					countryIcon: '../../static/fonts/hk.svg',
					title: this.$t('personInfo.personInfo.5qzx7hnlxts0'),
					label: this.$t('personInfo.personInfo.5qzx7hnlxwg0'),
					rightIcon: '../../static/fonts/down.svg',
				}, ],
				//国籍数组
				dataArr1: [{
					id: 2,
					countryIcon: '../../static/fonts/hk.svg',
					title: '国籍',
					label: this.$t('personInfo.personInfo.5qzx7hnlxwg0'),
					rightIcon: '../../static/fonts/down.svg',
				}, ],
				//出生地数组
				dataArr2: [{
					id: 3,
					countryIcon: '../../static/fonts/hk.svg',
					title: '出生地',
					label: this.$t('personInfo.personInfo.5qzx7hnlxwg0'),
					rightIcon: '../../static/fonts/down.svg',
				}, ],

				//这里也可以优化  可以写在一个数组里面  也懒得弄了   
				//居住国家
				country: [{
						id: 4,
						name: '香港属于中国，不是一个国家'
					},
					{
						id: 5,
						name: '后续你需要将香港归纳在一个国家的地方全部修改'
					},
					{
						id: 6,
						name: '再重申一边，香港不是一个国家，它属于中国！'
					}
				],
				//国籍
				country1: [{
						id: 7,
						name: '中国'
					},
					{
						id: 8,
						name: '中国'
					},
					{
						id: 9,
						name: '中国'
					}
				],
				//出生地
				country2: [{
						id: 10,
						name: '中国'
					},
					{
						id: 11,
						name: '中国'
					},
					{
						id: 12,
						name: '中国'
					}
				],
			};
		},
		methods: {
			// 点击返回上一页
			goBack() {
				uni.navigateBack(-1)
			},
			//跳转到登录
			login() {
				uni.navigateTo({
					url: '/pages/login/RealLogin/RealLogin'
				})
			},
			changestatus(item) {
				// this.dataArr.map(res => {
				// 	if (res.id == item.id) {
				// 		this.countryId = item.label
				// 		this.nationalityId = item.label
				// 		this.birthplaceId = item.label
				// 	}
				// })
				if (item.title == '居住国家') {
					this.dataArr.map(res => {
						this.countryId = res.label
					})
				} else if (item.title == '国籍') {
					this.dataArr1.map(res => {
						this.nationalityId = item.label
					})
				} else if (item.title == '出生地') {
					this.dataArr2.map(res => {
						this.birthplaceId = item.label
					})
				}

				//这里是点击盒子 显示隐藏
				if (item.title == '居住国家') {
					this.countryShow = !this.countryShow
					this.countryShow1 = false
					this.countryShow2 = false
				} else if (item.title == '国籍') {
					this.countryShow1 = !this.countryShow1
					this.countryShow = false
					this.countryShow2 = false
				} else if (item.title == '出生地') {
					this.countryShow2 = !this.countryShow2
					this.countryShow1 = false
					this.countryShow = false
				}

			},
			//居住国家点击事件
			changeTextHandler(item) {
				this.dataArr.map(res => {
					res.label = item.name
				})
			},
			//国籍点击事件
			changeTextHandler1(item) {
				this.dataArr1.map(res => {
					res.label = item.name
				})
			},
			//出生地点击事件
			changeTextHandler2(item) {
				this.dataArr2.map(res => {
					res.label = item.name
				})
			},

			//点击继续按钮事件
			goInvestigate() {
				let obj = {
					postalCode: '111',
					countryId: this.countryId,
					nationalityId: this.nationalityId,
					birthplaceId: this.birthplaceId,
					isUSResident: this.disabled ? "0" : "1",
					isLocalBanking: '1'
				}
				this.$store.commit('updateCountryId', obj)
				let x = this.$store.getters['countryId']
				console.log(x)
				uni.navigateTo({
					url: '/pages/investigate/investigate?data=' + this.number
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.countryBox {
		position: relative;
	}

	.conBox {
		position: absolute;
		top: 3rem;
		min-width: 15rem;
		background-color: #999999;
		z-index: 99;

		.smallBox {
			width: 100%;
			min-height: 3rem;
			border-bottom: 1px solid #f5f5f5;
			padding: 0.5rem 0;
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
	}

	.changeLanguage {
		min-width: 176rpx;
		height: 64rpx;
		border-radius: 64rpx;
		border: 1px solid #EFEFEF;
		// margin-right: 1rem;
	}

	.desc {
		color: #9d9e9e;
		line-height: 40rpx;
		margin-bottom: 60rpx;
	}

	.red {
		color: #f75555;
	}

	.green {
		color: #12d18e;
	}

	// 图标的样式
	.img {
		width: 64rpx;
		height: 64rpx;
		border-radius: 50%;
		margin-right: 30rpx;
	}

	.img-down {
		width: 30rpx;
		height: 30rpx;
		mask-repeat: no-repeat;
	}

	.liveConutry {
		border: 1px solid #EFEFEF;
		width: 100%;
		height: 140rpx;
		border-radius: 32rpx;
		margin: 0 1rem;
		padding: 0 48rpx;
		margin-bottom: 32rpx;
	}

	.color9d9e {
		color: #9d9e9e;
	}

	.lh20 {
		line-height: 40rpx;
	}

	.radio {
		margin-left: 40rpx;
	}

	.radio-icon {
		width: 48rpx;
		height: 48rpx;
		margin-right: 20rpx;
	}

	.btn {
		width: 686rpx;
		// width: 95%;
		height: 116rpx;
		border-radius: 200rpx;
		background: #12d18e;
		font-size: 32rpx;
		color: white;
		font-weight: bold;

		&::after {
			border: none;
		}
	}

	.box1 {
		width: 100%;
		position: absolute;
		bottom: 3rem;
		left: 0;
		right: 0;
	}

	.text {
		margin-top: 40rpx;
		position: absolute;
		bottom: 1rem;
		left: 0;
		right: 0;
	}
</style>