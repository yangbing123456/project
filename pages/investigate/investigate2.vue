<template>
	<view class="all">
		<!-- 分页加动效图组件 -->
		<Pagination :number1='this.num'></Pagination>

		<!-- 题目 -->
		<view class="df aic jcc fdc">
			<text class="fwb mt16 fz16">{{question}}</text>
			<text class="next">{{$t('investigate.investigate2.5qzxdmbnn5w0')}}</text>
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
		data() {
			return {
				question: this.$t('investigate.investigate2.5qzxdmbnlcw0'),
				num: '', //接收父亲组件的值
				number: 3, //父传子的值
				data: [this.$t('investigate.investigate2.5qzxdmbnnhs0'), this.$t('investigate.investigate2.5qzxdmbnno40'),
					this.$t('investigate.investigate2.5qzxdmbnnto0'), this.$t('investigate.investigate2.5qzxdmbno2w0'),
					this.$t('investigate.investigate2.5qzxdmbno980')
				]
			}
		},
		//接收父传来的值
		onLoad(data) {
			this.num = data.data
		},
		components: {
			Pagination
		},
		methods: {
			// 点击进入下一页
			goNext(item) {
				this.data.map(res => {
					if (res == item) {
						let obj = {
							name: this.question,
							value: [
								item
							]
						}
						let x = uni.getStorageSync('createUser')
						x.questions.push(obj)
						uni.setStorageSync('createUser', x)
						console.log(uni.getStorageSync('createUser'))


					}
				})
				uni.navigateTo({
					url: '/pages/investigate/investigate3?data=' + this.number
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.next {
		text-align: center;
	}
</style>