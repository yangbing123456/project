<template>
	<view class="all">
		<Pagination :number1='this.num'></Pagination>
		<view class="df aic jcc fdc">
			<text class="question fwb mt16 fz16">{{question}}</text>
			<text class="next">{{$t('investigate.investigate9.5qzxezl8omo0')}}</text>
		</view>
		<!-- 选项 -->
		<view class="box df fdc aic jcc fz14 mt50">
			<view v-for="item in data" :key="item" @click="goNext(item)" class="df aic jcs option">{{item}}
				<image class="img" src="#" mode="">
				</image>
			</view>
		</view>
		<!-- 确定按钮 -->
		<view class="box df aic jcc">
			<view class="btn df jcc aic" @click="goFinish">{{$t('investigate.investigate9.5qzxezl8ow00')}}</view>
		</view>
	</view>
</template>

<script>
	import userApi from '../../api/uniappRequest.js'
	// 引入公共组件
	import Pagination from '@/common/pagination.vue'
	export default {
		components: {
			Pagination
		},
		data() {
			return {
				question: this.$t('investigate.investigate9.5qzxezl8nmw0'),
				num: '',
				data: [this.$t('investigate.investigate9.5qzxezl8p440'), this.$t('investigate.investigate9.5qzxezl8pbs0')]
			}
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
			},
			//确定按钮事件
			goFinish() {
				let x = uni.getStorageSync('createUser')
				userApi.createRealUser(x).then(res => {
					console.log(res)
				})
				uni.navigateTo({
					url: '/pages/finish/finish'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.question {
		text-align: center;
	}

	.btn {
		width: 590rpx;
		height: 116rpx;
		border-radius: 200rpx;
		background: #12d18e;
		font-size: 32rpx;
		color: white;
		font-weight: bold;
		margin-top: 200rpx;
	}

	.box {
		width: 100%;
	}

	.fwb,
	.next {
		text-align: center;
	}
</style>