<template>
	<view class="all">
		<Pagination :number1='this.num'></Pagination>
		<view class="df aic jcc fdc">
			<text class="fwb mt16 fz16">{{question}}</text>
			<text class="next">{{$t('investigate.investigate6.5qzxes9v93w0')}}</text>
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
				question: this.$t('investigate.investigate6.5qzxes9v8640'),
				num: '',
				number: 7, //父传子的值
				data: [this.$t('investigate.investigate6.5qzxes9v9fg0'), '$100,000-$199,999', '$50,000-$99,999',
					'$20,000-$49,999'
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
					url: '/pages/investigate/investigate7?data=' + this.number
				})
			}
		}
	}
</script>

<style scoped>
	.next {
		text-align: center;
	}
</style>