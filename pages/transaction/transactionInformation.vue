<template>
	<view class="bigbox">
		<!-- 本来写的是两个盒子 两个数组循环   简写哈  更方便 -->
		<view class="topbox">
			<view class="leftbox" v-for="item in dataArr" :key="item.id">
				<view v-for="res in item.cellArr" :key="res.id" class="itembox">
					<view class="smallLeftbox" :style="{'color':res.color}">{{res.leftValue}}</view>
					<view class="smallrightbox">{{res.rightValue}}</view>
				</view>
			</view>

			<!-- <view class="rightbox">
				<view v-for="item in rightDataArr" :key="item.id" class="itembox">
					<view class="smallLeftbox">{{item.leftValue}}</view>
					<view class="smallrightbox">{{item.rightValue}}</view>
				</view>
			</view> -->
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
						cellArr: [{
								id: 1,
								leftValue: "27.332.0",
								rightValue: '0.000',
								color: 'red'
							},
							{
								id: 2,
								leftValue: "27.332.0",
								rightValue: '0.000',
								color: 'red'
							},
							{
								id: 3,
								leftValue: "27.332.0",
								rightValue: '0.000',
								color: 'red'
							},
							{
								id: 4,
								leftValue: "27.332.0",
								rightValue: '0.000',
								color: 'red'
							}
						]
					},
					{
						id: 2,
						cellArr: [{
								id: 1,
								leftValue: "27.332.0",
								rightValue: '222',
								color: 'green'
							},
							{
								id: 2,
								leftValue: "27.332.0",
								rightValue: '222',
								color: 'green'
							},
							{
								id: 3,
								leftValue: "27.332.0",
								rightValue: '222',
								color: 'green'
							},
							{
								id: 4,
								leftValue: "27.332.0",
								rightValue: '0.000',
								color: 'green'
							}
						]
					}
				],
				//没用了
				leftDataArr: [{
						id: 1,
						leftValue: "27.332.0",
						rightValue: '0.000'
					},
					{
						id: 2,
						leftValue: "27.332.0",
						rightValue: '0.000'
					},
					{
						id: 3,
						leftValue: "27.332.0",
						rightValue: '0.000'
					},
					{
						id: 4,
						leftValue: "27.332.0",
						rightValue: '0.000'
					}
				],
				//没用了
				rightDataArr: [{
						id: 1,
						leftValue: "27.332.0",
						rightValue: '222'
					},
					{
						id: 2,
						leftValue: "27.332.0",
						rightValue: '222'
					},
					{
						id: 3,
						leftValue: "27.332.0",
						rightValue: '222'
					},
					{
						id: 4,
						leftValue: "27.332.0",
						rightValue: '0.000'
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

		// background-color: black;
		.topbox {
			width: 100%;
			min-height: 7rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0.5rem 1rem;

			.leftbox {
				width: 45%;
				min-height: 7rem;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;

				.itembox {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 100%;
					min-height: 1rem;
				}

				.smallLeftbox,
				.smallrightbox {
					padding: 0.5rem 0;
				}

			}

			// .rightbox {
			// 	width: 45%;
			// 	min-height: 7rem;
			// 	border: 1px solid;
			// 	display: flex;
			// 	flex-direction: column;
			// 	justify-content: space-between;
			// 	align-items: center;

			// 	.itembox {
			// 		display: flex;
			// 		justify-content: space-between;
			// 		align-items: center;
			// 		width: 100%;
			// 		min-height: 1rem;
			// 	}

			// 	.smallLeftbox,
			// 	.smallrightbox {
			// 		padding: 0.5rem 0;
			// 	}
			// }

			// margin-bottom: 1rem;
		}


	}
</style>