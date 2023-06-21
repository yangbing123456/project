<template>
	<view class="bigbox">

		<view v-for="item in dataArr" :key="item.id" class="itembox">
			<view class="smallTopbox">{{item.title}}</view>
			<view class="smallBottombox" v-for="res in item.cellArr" :key="res.id">
				<view>{{res.leftText}}</view>
				<view :style="{'color':res.color}">{{res.rightText}}</view>
			</view>
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
						title: '新闻标题',
						cellArr: [{
							id: 1,
							leftText: '内容',
							rightText: '查看详情>',
							color: 'green'
						}]
					},
					{
						id: 2,
						title: '新闻标题',
						cellArr: [{
							id: 1,
							leftText: '内容',
							rightText: '查看详情>',
							color: 'green'
						}]
					},
					{
						id: 3,
						title: '新闻标题',
						cellArr: [{
							id: 1,
							leftText: '内容',
							rightText: '查看详情>',
							color: 'green'
						}]
					},
					{
						id: 4,
						title: '新闻标题',
						cellArr: [{
							id: 1,
							leftText: '内容',
							rightText: '查看详情>',
							color: 'green'
						}]
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
		padding: 1rem 0.5rem 0 0.5rem;


		.itembox {
			width: 100%;
			min-height: 5rem;
			background-color: #F5F5F5;
			border-radius: 1rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-bottom: 0.5rem;
			// padding: 0.5rem 0.3rem;

			.smallTopbox {
				padding: 0 0.5rem 0.3rem 0.5rem;
			}

			.smallBottombox {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 0.5rem;
			}
		}


	}
</style>