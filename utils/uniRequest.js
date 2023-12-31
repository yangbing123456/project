 // 封装uniapp网络请求，后续应该也可以改为微信小程序请求  或者都用通用axios封装
 let request = (url, method, data = {}) => {
 	// 只有promise对象才能使用async await
 	// new 一个promise其实就是一个回调函数 
 	return new Promise((resolve, reject) => {
 		// resolve成功之后做的事
 		// reject失败之后做的事
 		// 对象不能传值,url,method,data只有方法可以传值
 		// 然后返回一个promise
 		uni.request({
 			url: "http://192.168.4.3:9999" + url,
 			method,
 			data,
 			header: {
 				'Authorization': uni.getStorageSync('token') || '',
 				'content-type': url == '/user/addAccountOne.do' ?
 					'application/json' : 'application/x-www-form-urlencoded',

 				// 'content-type':'application/x-www-form-urlencoded'
 				//   application/json   application/x-www-form-urlencoded
 			},
 			success: (res) => { //成功之后返回的结果
 				// resolve 成功之后做的事情  只需要拿到data的数据
 				resolve(res.data)
 			},
 			fail: (err) => {
 				// reject 失败之后做的事情
 				reject(err)
 			}
 		})
 	})
 }

 export default {
 	get(url, data) {
 		return request(url, "get", data)
 	},
 	post(url, data) {
 		return request(url, "post", data)
 	},
 	delete(url, data) {
 		return request(url, "delete", data)
 	},
 	put(url, data) {
 		return request(url, "put", data)
 	},
 }