<template>
    <div>
        <div class="headerBox">
            <div class="container-fluid">
                <div class="header">
                    <div class="logo">
                        <router-link to="/"></router-link>
                    </div>
                    <div class="header-search" style="display: none;">
                        <a href="javascript:void(0);" class="iconfont font22 bda pl-5 pr-5 showSearch">&#xe741;</a>
                        <router-link to="/login" class="bda pl-15 pr-15">登录</router-link>
                    </div>
                    <div class="header-nav">
                        <router-link to="/" exact>首页</router-link>
                        <router-link to="/about">关于我们
                            <div class="header-layer">
                                <div class="header-layer-nav">
                                    <router-link to="/about" exact>公司介绍</router-link>
                                    <router-link to="/about/honor">公司荣誉</router-link>
                                    <router-link to="/about/staff">员工风采</router-link>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/article">资讯中心
                            <div class="header-layer">
                                <div class="header-layer-nav">
                                    <router-link :to="{path:'/article/list1'}">企业动态
                                    </router-link>
                                    <router-link :to="{path:'/article/list2'}">资讯动态
                                    </router-link>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/business">业务介绍
                            <div class="header-layer">
                                <div class="header-layer-nav">
                                    <router-link :to="{path:'/business/detail3'}" exact="">培训咨询</router-link>
                                    <router-link :to="{path:'/business/detail1'}">人才派遣</router-link>
                                    <router-link :to="{path:'/business/detail2'}">考试测评</router-link>
                                    <router-link :to="{path:'/business/detail5'}">猎头服务</router-link>
                                    <router-link :to="{path:'/business/detail4'}">人力资源服务外包</router-link>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/join">加入我们</router-link>
                        <router-link to="/contact">联系我们</router-link>
                    </div>
                </div>
                <div class="loginHeader">
                    <div class="logo">
                        <router-link to="/"></router-link>
                    </div>
                    <div class="loginMenu">
                        <router-link to="/">返回首页</router-link>
                    </div>
                </div>
                <div class="layer-search">
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 pull-right">
                        <form action="" method="POST" class="form-horizontal" id="searchForm" autocomplete="off">
                            <div class="row">
                                <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 pr-5 pl-5">
                                    <div class="input-group">
                                        <div class="input-group-btn">
                                            <input type="hidden" name="types" value="企业动态">
                                            <button type="button" class="btn btn-default dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false">企业动态
                                                <span class="caret"></span>
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><a href="javascript:void(0);">企业动态</a></li>
                                                <li><a href="javascript:void(0);">资讯动态</a></li>
                                            </ul>
                                        </div>
                                        <input type="text" name="keyword" class="form-control" placeholder="请输入">
                                    </div>
                                </div>
                                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 pr-5 pl-5">
                                    <button type="button" class="btn btn-primary btn-block" @click="searchData">搜索
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="blk100"></div>
    </div>
</template>

<script>
	export default {
		name: "Header",
		mounted () {
			let $this = this
			$(document).on("mouseenter mouseleave", ".header-nav > a", function (event) {
				if (event.type === "mouseenter") {
					$(".layer-search").hide()
					$(this).siblings("a").removeClass("router-link-active").end().addClass("router-link-active")
				}
				if (event.type === "mouseleave") {
					let path = $this.$route.path
					// console.log(path.indexOf("article") >= 0)
					$(this).removeClass("router-link-active")

					if (path.indexOf("about") >= 0) {
						$(".header-nav > a").eq(1).addClass("router-link-active")
					} else if (path.indexOf("article") >= 0) {
						$(".header-nav > a").eq(2).addClass("router-link-active")
					} else if (path.indexOf("business") >= 0) {
						$(".header-nav > a").eq(3).addClass("router-link-active")
					} else if (path.indexOf("join") >= 0) {
						$(".header-nav > a").eq(4).addClass("router-link-active")
					} else if (path.indexOf("contact") >= 0) {
						$(".header-nav > a").eq(5).addClass("router-link-active")
					} else {
						$(".header-nav > a").eq(0).addClass("router-link-active")
					}

				}
			})
			$(window).on("resize load", function () {
				$this.setNav()
			})
			$(".layer-search .dropdown-menu a").click(function () {
				let text = $.trim($(this).text())
				$(this).parents(".input-group-btn").find("button").html(text + " <span class=\"caret\"></span>")
				$(this).parents(".input-group-btn").find("[name=\"types\"]").val(text)
			})
			// 显示搜索
			$(".showSearch").click(function () {

				if ($(".layer-search").is(":hidden")) {
					$(".layer-search").css({top: $(".header").outerHeight()}).show()
				}
			})
			$(document).click(function (e) {
				let i = $(e.target)
				if (i.closest(".layer-search, .showSearch").length === 0 && $(".layer-search").is(":visible")) {
					$(".layer-search").hide()
				}
			})
			$(window).on("scroll load", function () {
				let top = $(window).scrollTop()
				if (top >= 10) {
					$(".headerBox").addClass("headerFixed")
				} else {
					$(".headerBox").removeClass("headerFixed")
				}
			})

		},
		methods: {
			setNav () {
				let l1 = $(".header-nav > a").eq(1).offset().left
				let w1 = $(".header-nav > a").eq(1).find(".header-layer-nav").outerWidth(true)
				$(".header-nav > a").eq(1).find(".header-layer-nav").css({"left": (l1 - w1 / 2) + 55 + "px"})

				let l2 = $(".header-nav > a").eq(2).offset().left
				let w2 = $(".header-nav > a").eq(2).find(".header-layer-nav").outerWidth(true)
				$(".header-nav > a").eq(2).find(".header-layer-nav").css({"left": (l2 - w2 / 2) + 30 + "px"})

				let l3 = $(".header-nav > a").eq(3).offset().left
				let w3 = $(".header-nav > a").eq(3).find(".header-layer-nav").outerWidth(true)
				$(".header-nav > a").eq(3).find(".header-layer-nav").css({"left": (l3 - w3 / 2) + "px"})
			},
			searchData () {
				let types = $("#searchForm").find("[name=\"types\"]").val()
				let keyword = $("#searchForm").find("[name=\"keyword\"]").val()
				if (keyword === "") {
					this.layer.alert("请输入关键字搜索")
					return false
				}
				this.$router.push({name: "search", query: {types: types, keyword: keyword}})
			}
		}
	}
</script>