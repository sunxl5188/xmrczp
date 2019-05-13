<template>
    <div id="app">
        <Header></Header>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>

        <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-class="animated fadeOut">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>

        <Footer></Footer>
    </div>
</template>

<script>
	import Header from "@/components/Header"
	import Footer from "@/components/Footer"
	import ieCheck from "@/components/ieCheck"

	export default {
		name: "App",
		components: {Header, Footer, ieCheck},
		beforeCreate: function () {

		},
		created: function () {
			if (this.isIEbrowser() === 9 || this.isIEbrowser() === 8 || this.isIEbrowser() === 7 || this.isIEbrowser() === 6) {
				this.layer.iframe({
					content: {
						content: ieCheck,
						parent: this,
						data: {}//props
					},
					area: ["740px", "450px"],
					title: "信息提示"
				})
			}
		},
		methods: {
			/**
			 * 判断IE浏览器
			 */
			isIEbrowser: function () {
				try {
					let ie = null
					let browser = navigator.appName
					if (browser === "Microsoft Internet Explorer") {
						let bVersion = navigator.appVersion
						let version = bVersion.split(";")
						let trimVersion = version[1].replace(/[ ]/g, "")
						if (browser === "Microsoft Internet Explorer" && trimVersion === "MSIE6.0") {
							ie = "6"
						} else if (browser === "Microsoft Internet Explorer" && trimVersion === "MSIE7.0") {
							ie = "7"
						} else if (browser === "Microsoft Internet Explorer" && trimVersion === "MSIE8.0") {
							ie = "8"
						} else if (browser === "Microsoft Internet Explorer" && trimVersion === "MSIE9.0") {
							ie = "9"
						} else if (browser === "Microsoft Internet Explorer" && trimVersion === "MSIE10.0") {
							ie = "10"
						} else {
							ie = "未知"
						}
					}
					return ie
				} catch (e) {
					// error 输出
					// console.log(e);
				}
			}
		}
	}
</script>
