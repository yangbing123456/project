<template>
	<view class="bigbox">

		<view v-for="res in dataArr" :key="res.id" class="itembox">
			<view class="smallLeftbox">{{res.leftText}}</view>
			<view class="smallrightbox">{{res.rightText}}</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				//上面盒子数组
				dataArr: [{
						id: 1,
						leftText: '交易时间(本地时间)',
						rightText: '周一-周五8：00-22：20',
					},
					{
						id: 2,
						leftText: '最小数量',
						rightText: '100',
					},
					{
						id: 3,
						leftText: '货币',
						rightText: 'USD',
					},
					{
						id: 4,
						leftText: '隔夜费',
						rightText: '一堆，懒得弄  你后续自己改吧',
					},
					{
						id: 5,
						leftText: '杠杆率',
						rightText: '5：1',
					},
					{
						id: 6,
						leftText: '保证金',
						rightText: '20.00%',
					},
					{
						id: 7,
						leftText: '动态价差',
						rightText: '0.0022',
					}
				]
			}
		},
	}
</script>

<style scoped lang="scss">
	.bigbox {
		width: 100%;
		min-height: 10rem;
		display: flex;
		flex-direction: column;



		.itembox {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			min-height: 1rem;
			padding: 0.5rem;
		}


	}
</style>