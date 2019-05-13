import Vue from "vue"
import zh_CN from "vee-validate/dist/locale/zh_CN"
import VeeValidate, { Validator } from "vee-validate"

// 加载中文提示
Validator.localize("zh_CN", zh_CN)

// 自定义错误提示
const dictionary = {
	zh_CN: {
		messages: {
			required: (name) => `${name}不能为空!`
		},
		attributes: {
			email: "邮箱地址",
			qq: "QQ",
			idCard: "身份证",
			mobile: "手机号",
			money: "数字",
			date: "日期"
		},
		custom:{}
	}
}
Validator.localize(dictionary)

// 字段特定的自定义消息
const dict = {
	custom: {
		email: {
			required: "邮箱地址不能为空",
		}
	}
}

Validator.localize("zh_CN", dict)

const config = {
	aria: true,
	classNames: {},
	classes: false,
	delay: 200,
	dictionary: null,
	errorBagName: "errors", // change if property conflicts
	events: "input|blur",
	fieldsBagName: "fields",
	i18n: null, // the vue-i18n plugin instance
	i18nRootKey: "validations", // the nested key under which the validation messages will be located
	inject: true,
	locale: "zh_CN",
	validity: false
}

// 自定义规则
// QQ号
Validator.extend("qq", {
	getMessage: field => "请输入正确的QQ号",
	validate: value => {
		return /^[1-9][0-9]{4,14}$/.test(value)
	}
})
// 手机号
Validator.extend("mobile", {
	getMessage: field => "请输入正确的手机号码",
	validate: value => value.length === 11 && /^1[3-8][0-9]{9}$/.test(value)
})
// 18位或带X身份证号
Validator.extend("idCard", {
	getMessage: field => "请输入18位正确的身份证号",
	validate: value => /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|31)|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/.test(value)
})
// 正整数或带两位小数验证货币
Validator.extend("money", {
	getMessage: field => "请输入正确的数字",
	validate: value => /^[1-9]\d*\.\d{2}|^0\.\d[1-9]{1}|^0\.[1-9][\d]{1}|^[1-9]\d*$/.test(value)
})
// 日期 YYYY/MM/DD
Validator.extend("date", {
	getMessage: field => "日期格式不正确",
	validate: value => /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(-|\/)(((0[13578]|1[02])(-|\/)(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02(-|\/)(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))(-|\/)02(-|\/)29)$/.test(value)
})

Vue.use(VeeValidate, config)
