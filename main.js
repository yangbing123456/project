import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//引vant组件
// import Vant from 'vant';
// Vue.use(Vant);

//引入store
import store from '@/store/index.js'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView)

// 引入并使用vue-i18n
import i18n from "@/locale/index.js";

App.mpType = 'app'

// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n

const app = new Vue({
	store,
	i18n,
	...App
})
app.$mount()