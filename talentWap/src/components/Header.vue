<template>
    <div>
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand" to="/"></router-link>
            </div>
            <div class="navbar-collapse" id="head-menu">
                <div class="navbarWrap">
                    <div class="btnClose"><i class="iconfont cfff font24">&#xe7f6;</i></div>
                    <ul class="nav navbar-nav">
                        <li>
                            <router-link to="/" exact="">首页</router-link>
                        </li>
                        <li class="more">
                            <i class="iconfonts"></i>
                            <router-link to="/about">关于我们</router-link>
                            <ul>
                                <li>
                                    <router-link :to="{path:'/about'}" exact="">公司简介</router-link>
                                </li>
                                <li>
                                    <router-link :to="{path:'/about/honor'}">公司荣誉</router-link>
                                </li>
                                <li>
                                    <router-link :to="{path:'/about/staff'}">员工风采</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="more">
                            <i class="iconfonts"></i>
                            <router-link :to="{path:'/business'}">业务介绍</router-link>
                            <ul>
                                <li>
                                    <router-link :to="{path:'/business/detail3'}" exact="">培训咨询</router-link>
                                </li>
                                <li>
                                    <router-link :to="{path:'/business/detail1'}">人才派遣</router-link>
                                </li>
                                <li>
                                    <router-link :to="{path:'/business/detail2'}">考试测评</router-link>
                                </li>
                                <li>
                                    <router-link :to="{path:'/business/detail5'}">猎头服务</router-link>
                                </li>
                                <li>
                                    <router-link :to="{path:'/business/detail4'}">人力资源服务外包</router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="more">
                            <i class="iconfonts"></i>
                            <router-link :to="{path:'/article'}">资讯中心</router-link>
                            <ul>
                                <li>
                                    <router-link :to="{path:'/article/list1'}" exact="">企业动态</router-link>
                                </li>
                                <li>
                                    <router-link :to="{path:'/article/list2'}">资讯动态</router-link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="/join">加入我们</router-link>
                        </li>
                        <li>
                            <router-link to="/contact">联系我们</router-link>
                        </li>
                        <li style="display:none;">
                            <div class="search pt-10">
                                <input type="text" name="name" class="form-control" value="" required="required"
                                       placeholder="信息检索">
                                <button type="button" class="btn searchBtn"></button>
                            </div>
                            <div class="clearfix pt-10 pb-10 logo">
                                <router-link to="/login" class="btn btn-default btn-block">登录</router-link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav class="navbar"></nav>
    </div>
</template>

<script>
	export default {
		name: "Header",
		data () {
			return {}
		},
		mounted: function () {
			let that = this
			$(".navbar-nav > li > a").each(function () {
				if ($(this).hasClass("router-link-active")) {
					$(this).siblings("ul").show()
					$(this).siblings("i").addClass("active")
				} else {
					$(this).siblings("ul").hide()
					$(this).siblings("i").removeClass("active")
				}
			})

			$(document).on("click", ".navbar-nav > li > a", function () {
				let obj = $(this).siblings("ul")
				$(this).parent().siblings("li").find("ul").hide()
				if ($(this).hasClass("router-link-active")) {
					return false
				}
				if (obj.is(":hidden") === true) {
					obj.show()
				} else {
					obj.hide()
				}
			})

			$(document).on("click", "#head-menu i.iconfonts", function () {
				let self = $(this)
				let obj = $(this).siblings("ul")
				if (obj.is(":hidden")) {
					obj.show()
					self.addClass("active")
				} else {
					obj.hide()
					self.removeClass("active")
				}
			})

			$(document).on("click", ".searchBtn", function (event) {
				event.preventDefault()
				let wordKey = $(this).siblings("input").val()
				if (wordKey === "") {
					that.layer.alert("请输入关键字搜索", function (index) {
						that.layer.close(index)
					})
					return false
				}
				that.$router.push({path: "/search", query: {wordkey: wordKey}})
				$(".navbar-ex1-collapse").collapse("hide")
			})

			$(document).on("click", ".navbar-header .navbar-toggle", function () {
				$("#head-menu").addClass("show")
				$("html,body").addClass("htmlOv")
			})
			$(document).on("click", ".btnClose i", function () {
				$("#head-menu").removeClass("show")
				$("html,body").removeClass("htmlOv")
			})
			$(document).click(function (e) {
				let i = $(e.target)
				if (i.closest(".icon-bar").length > 0 || i.closest(".navbar-toggle").length > 0) {
					return false
				}
				if (i.closest("#head-menu").length === 0) {
					$("#head-menu").removeClass("show")
					$("html,body").removeClass("htmlOv")
				}
			})
			$(document).on("click", "#head-menu .nav a", function () {
				setTimeout(function () {
					$("#head-menu").removeClass("show")
					$("html,body").removeClass("htmlOv")
				}, 500)
			})

		},
		watch: {
			$route (to, from) {
				setTimeout(function () {
					$(".navbar-nav > li > a").each(function () {
						if ($(this).hasClass("router-link-active")) {
							$(this).siblings("ul").show()
							$(this).siblings("i").addClass("active")
						} else {
							$(this).siblings("ul").hide()
							$(this).siblings("i").removeClass("active")
						}
					})
				}, 1000)
			}
		}
	}
</script>

<style scoped>

</style>