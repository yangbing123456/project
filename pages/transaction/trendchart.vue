<template>
	<view>
		<!-- 头部标题和收藏图标 -->
		<view class="head df aic jcsb">
			<view class="left df aic">
				<image @click="goBack" class="wh24 mr8" src="../../static/transaction/left.svg" mode=""></image>
				<text class="fz18">BTC/USDT</text>
			</view>
			<view class="right df aic">
				<image class="wh24 mr32" src="../../static/transaction/collect-s.svg" mode=""></image>
				<image class="wh24" src="../../static/transaction/remind-s.svg" mode=""></image>
			</view>
		</view>
		<!-- 数据 -->
		<view class="data df jcsb">
			<view class="data-left">
				<view class="line1 df ">
					<p class="fz28 f75 fwb">27,373.91</p>
					<view class="box1 df aic jcc">-1.06%</view>
				</view>
				<view class="line2 fz12 twoOne mt8">
					≈27,343.91 USD
				</view>
			</view>
			<view class="data-right">
				<view class="item1 fz12 md16">
					<view class="df aic jcsb">
						<text class="nineD">24h {{$t('transaction.trendchart.5r02ub67ypw0')}}</text>
						<text>27,993.93</text>
					</view>
					<view class="middle df aic jcsb">
						<text class="nineD">24h {{$t('transaction.trendchart.5r02ub6802s0')}}</text>
						<text>27,160.00</text>
					</view>
					<view class="df aic jcsb">
						<text class="nineD">24h {{$t('transaction.trendchart.5r02ub680e00')}}</text>
						<text>111.81M</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 交易走势图 -->
		<view class="trendchart">
		</view>
		<!-- 分割线  背景图 -->
		<view class="segment"></view>
		<!-- 最下面三个选项 -->
		<view class="foot">
			<view class="list df aic jcsb">
				<u-tabs-swiper class="fz14" active-color="#12D18E" inactive-color="#9D9E9E" lineWidth="40"
					lineColor="#12d18e" :list="list" @change="change" :current='current'></u-tabs-swiper>
			</view>
			<com v-if="current==0"></com>
			<market-information v-if="current==1"></market-information>
			<news-center v-if="current==2"></news-center>

			<view class="bottombox">
				<u-button class="leftBtn">买入(27373.06)</u-button>
				<u-button class="rightBtn">卖出(27373.98)</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	//引入委托订单
	import com from './transactionInformation.vue'

	//市场信息
	import marketInformation from './Market-information.vue'

	//新闻中心

	import NewsCenter from './News-center.vue'
	export default {
		components: {
			com,
			marketInformation,
			NewsCenter
		},
		data() {
			return {
				current: 0, //选项下标
				// 下方选项数据
				list: [{
					name: '委托订单',
				}, {
					name: '市场信息',
				}, {
					name: '新闻中心'
				}]
			}
		},
		methods: {
			// 点击返回上一页
			goBack() {
				uni.navigateBack(-1)
			},
			//切换选项事件
			change(index) {
				this.current = index
			},
		}
	}
</script>

<style scoped lang="scss">
	.bottombox {
		width: 100%;
		min-height: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem 0;
		border-top: 2px solid #F5F5F5;

		.leftBtn,
		.rightBtn {
			width: 45%;
			color: white;
			border-radius: 1.5rem;
		}

		.leftBtn {
			background-color: green;
			margin-right: 1rem;
		}

		.rightBtn {
			background-color: red;
		}
	}

	.head {
		width: 100%;
		height: 88rpx;
		padding: 0 20rpx 0 32rpx;
		margin-bottom: 16rpx;
	}

	.data {
		width: 100%;
		padding: 0 32rpx;
	}

	.data-left {
		width: 53%;
		margin-right: 48rpx;
	}

	.data-right {
		width: 33%;
	}

	.box1 {
		width: 96rpx;
		height: 32rpx;
		border-radius: 8rpx;
		background: rgba(247, 85, 85, 0.2);
		font-size: 10px;
		color: #f75555;
	}

	.middle {
		margin: 8rpx 0;
	}

	//交易走势图
	.trendchart {
		width: 100%;
		height: 608rpx;
		margin: 72rpx 0 88rpx;
		background: url('../../static/transaction/4B7565F1C82B4C4288B4E50FEF740A23 2.svg');
		background-size: cover;
		background-repeat: no-repeat;
	}

	// 分割图
	.segment {
		width: 100%;
		height: 8rpx;
		background: url('../../static/transaction/segment.svg') repeat fixed center;
	}

	.list {
		font-size: 14px;
		margin-top: 88rpx;
	}

	.noData {
		width: 100%;
	}

	.noData-img {
		width: 400rpx;
		height: 300rpx;
	}
</style>