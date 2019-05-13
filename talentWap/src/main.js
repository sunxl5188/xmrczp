// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "animate.css/animate.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "../static/css/main.css"
import "bootstrap/dist/js/bootstrap"
import layer from "vue-layer"
import "../static/js/flexible"
import Vue from "vue"
import App from "./App"
import router from "./router"

//判断是否PC或移动端true:PC false Mobile
let sUserAgent = navigator.userAgent.toLowerCase()
let bIsIpad = sUserAgent.match(/ipad/i) == "ipad"
let bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os"
let bIsMidp = sUserAgent.match(/midp/i) == "midp"
let bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"
let bIsUc = sUserAgent.match(/ucweb/i) == "ucweb"
let bIsAndroid = sUserAgent.match(/android/i) == "android"
let bIsCE = sUserAgent.match(/windows ce/i) == "windows ce"
let bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile"
if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
	let url = window.document.location.href
	url = url.replace("www.xmgxrc.com:8080", "www.xmgxrc.com")
	window.location.replace(url)
}

Vue.prototype.layer = layer(Vue)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	/* 路由发生变化修改页面title */
	setTimeout(function () {
		console.log(to.meta.title)
		if (to.meta.title) {
			document.title = to.meta.title
		}
	},800)
	next()
})

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	components: {App},
	template: "<App/>"
})
