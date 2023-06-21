<template>
	<view class="all">
		<!-- 分页加动效图组件 -->
		<Pagination @test='changeIndex' ref='number' :number1='this.num'></Pagination>

		<!-- 题目 -->
		<view class="df aic jcc fdc">
			<text class="fwb mt16 fz16">{{question}}</text>
			<text class="next">{{$t('investigate.investigate.5qzxa22i3es0')}}</text>
		</view>

		<!-- 选项 -->
		<view class="box df fdc aic jcc fz14 mt50">
			<view v-for="item in data" :key="item" @click="goNext(item)" class="df aic jcs option">{{item}}
				<image class="img" src="../../static/fonts/right.svg" mode="">
				</image>
			</view>
		</view>
	</view>
</template>

<script>
	import Pagination from '@/common/pagination.vue'

	export default {
		components: {
			Pagination
		},
		data() {
			return {
				question: this.$t('investigate.investigate.5qzxa22i2fo0'),
				//选项数组
				data: [this.$t('investigate.investigate.5qzxa22i3u80'), this.$t('investigate.investigate.5qzxa22i42w0'),
					this.$t('investigate.investigate.5qzxa22i49c0')
				],
				indexArr: [], //子传父的数组
				num: '', //接收父亲组件的值
				number: 2, //父传子的值
			};
		},
		//接收父传来的值
		onLoad(data) {
			this.num = data.data
		},
		methods: {
			//这个是接收子传过来的值   仅仅为了测试
			changeIndex(val) {
				this.indexArr = val
			},
			// 点击返回上一页
			goBack() {
				uni.navigateBack(-1)
			},
			// 点击进入下一页
			goNext(item) {
				this.data.map(res => {
					if (res == item) {
						let obj = {
							questions: [{
								name: this.question,
								value: [
									item
								]
							}],
							residence: {
								// regionId: this.$store.getters['countryId'].countryId,
								// nationalityId: this.$store.getters['countryId'].nationalityId,
								// birthplaceId: this.$store.getters['countryId'].birthplaceId,
								// isUSResident: this.$store.getters['countryId'].isUSResident,
								// isLocalBanking: this.$store.getters['countryId'].isLocalBanking,
								regionId: 2,
								nationalityId: 2,
								birthplaceId: 2,
								isUSResident: 0,
								isLocalBanking: 0
							}
						}
						uni.setStorageSync('createUser', obj)
						let x = uni.getStorageSync('createUser')
						console.log(x)
					}
				})
				uni.navigateTo({
					url: '/pages/investigate/investigate2?data=' + this.number
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pages {
		width: 750rpx;
		height: 120rpx;
	}

	.num {
		width: 64rpx;
		height: 64rpx;
		border-radius: 50%;
		text-align: center;
		font-size: 24rpx;
		font-weight: bold;
		color: #757575;
	}

	.img {
		width: 48rpx;
		height: 48rpx;
	}

	// 后期可以根据页面变化修改active的样式
	.active {
		background: #12d18e;
		color: #fff;
	}

	.danamic {
		width: 240rpx;
		height: 240rpx;
		background: #ccc;
	}

	.next {
		font-size: 24rpx;
		color: #9d9e9e;
		margin-top: 16rpx;
	}

	.option {
		width: 590rpx;
		height: 96rpx;
		border-radius: 32rpx;
		margin-bottom: 8rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		&:hover {
			color: white;
			background-color: #12d18e;
		}
	}
</style>