import request from '../utils/uniRequest.js'

//注意：虽然有些接口已经写了 但是数据不知道放在哪里，你需要自己去问下  总体来说  就是蹭接口  并且app的图与蹭接口的数据  不符合  你自己想办法把
export default {
	//用户注册接口
	register(data) {
		return request.post(
			'/api/user/reg.do',
			data
		)
	},
	//验证邮箱是否存在
	emailExist(data) {
		return request.get(
			'/api/user/checkEmailExist.do?email=' + data,
			// data
		)
	},

	//真实账户注册，填写账户基础信息
	editRealUserInformation(data) {
		return request.put(
			'/user/addAccountBase.do',
			data
		)
	},
	//创建真实账户，设置问卷调查等
	createRealUser(data) {
		return request.post(
			'/user/addAccountOne.do',
			data
		)
	},
	//账户验证文件路径存储
	UserFile(data) {
		return request.post(
			'/account/realAccount/setVerify.do',
			data
		)
	},
	//图片上传
	picUpload(data) {
		return request.post(
			'/account/upload.do?id=3',
			data
		)

	},



	//用户登录
	userLogin(data) {
		return request.post(
			'/api/user/login.do',
			data
		)
	},
	//获取用户信息
	userInformation() {
		return request.get(
			'/user/getUserInfo.do',
			// data
		)
	},

	//获取账户信息
	accountInformation() {
		return request.get(
			'/account/getAccountInfo.do',
		)
	},

	//获取当前账户金额信息
	accountMoneyInformation() {
		return request.get(
			'/account/getAccountAmtInfo.do',
		)
	}
}