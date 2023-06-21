const accountInformation = {
	state: {
		name: {}, //姓名和性别
		birthday: '', //出生日期
		address: {}, //街道，楼号，公寓，城市
		phone: {}, //电话号码和前缀
		countryId: {}, //邮编，国家id，国籍id，出生地id，是否为美国税务居民，存款取款
		setQuestionnaireSurvey: [], //创建真实账户，设置问卷调查
	},

	getters: {
		name: state => state.name, //获取姓名和性别
		birthday: state => state.birthday, //获取出生日期
		address: state => state.address, //获取街道，楼号，公寓，城市
		phone: state => state.phone, //获取电话号码和前缀
		countryId: state => state.countryId, //获取邮编，国家id，国籍id，出生地id，是否为美国税务居民，存款取款
		setQuestionnaireSurvey: state => state.setQuestionnaireSurvey, //获取创建真实账户，设置问卷调查
	},

	mutations: {
		//set方法
		//修改姓名和性别
		updateName(state, name) {
			state.name = name
		},
		//修改出生日期
		updateBirthday(state, birthday) {
			state.birthday = birthday
		},
		//修改街道，楼号，公寓，城市
		updateAddress(state, address) {
			state.address = address
		},
		//修改电话号码和前缀
		updatePhone(state, phone) {
			state.phone = phone
		},
		//修改邮编，国家id，国籍id，出生地id，是否为美国税务居民，存款取款
		updateCountryId(state, countryId) {
			state.countryId = countryId
		},
		//修改创建真实账户，设置问卷调查
		updateSetQuestionnaireSurvey(state, setQuestionnaireSurvey) {
			state.setQuestionnaireSurvey = setQuestionnaireSurvey
		},
	}

}
export default accountInformation