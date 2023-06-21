<template>
	<view class="all">
		<Pagination :number1='this.num'></Pagination>
		<view class="df aic jcc fdc">
			<text class="fwb mt16 fz16">{{question}}</text>
			<text class="next">{{$t('investigate.investigate8.5qzxewew5k00')}}</text>
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
	// 引入公共组件
	import Pagination from '@/common/pagination.vue'
	export default {
		data() {
			return {
				question: this.$t('investigate.investigate8.5qzxewew4cc0'),
				num: '',
				number: 9, //父传子的值
				data: [this.$t('investigate.investigate8.5qzxewew5ug0'), this.$t('investigate.investigate8.5qzxewew60k0'),
					this.$t('investigate.investigate8.5qzxewew66c0'), this.$t('investigate.investigate8.5qzxewew6co0'),
					this.$t('investigate.investigate8.5qzxewew6mo0')
				]
			}
		},
		components: {
			Pagination
		},
		//接收父传来的值
		onLoad(data) {
			this.num = data.data
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
					url: '/pages/investigate/investigate9?data=' + this.number
				})
			}
		}
	}
</script>

<style scoped>
	.fwb,
	.next {
		text-align: center;
	}
</style>