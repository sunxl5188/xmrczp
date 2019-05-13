<template>
    <div>
        <div class="container-fluid bdt">
            <div class="footer">
            <span class="pull-left c999 font12 lh100">
                © 厦门高新人才开发有限公司版权所有 闽ICP备19000856号
            </span>
                <span class="pull-right lh35 font12">
                 <span><img src="../../static/images/024.jpg" alt=""></span>
                 <span class="ml-10 mr-20"><img src="../../static/images/025.jpg" alt=""></span>
                <router-link to="/" class="c999">网站首页</router-link>
                <router-link to="/contact" class="c999">联系我们</router-link>
                <router-link to="/link" class="c999">友情链接</router-link>
            </span>
            </div>
        </div>
        <div class="kefu">
            <div>
                <a href="javascript:void(0);">
                    <i class="iconfont font20">&#xe602;</i>
                    <div></div>
                </a>
            </div>
            <div class="goto">
                <a href="javascript:void(0);">
                    <i class="iconfont font20">&#xe688;</i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Footer",
		data () {
			return {}
		},
		mounted () {
			this.showTop()
		},
		methods: {
			showTop () {
				if (document.body.offsetHeight - document.documentElement.clientHeight > 200) {
					$(window).scroll(function () {
						if ($(window).scrollTop() > 100) {
							$(".kefu>div").eq(1).fadeIn()
						} else {
							$(".kefu>div").eq(1).fadeOut()
						}
					})
				}
				$(".goto a").on("click", function () {
					$("html,body").animate({scrollTop: 0}, 800)
				})
			}
		},
		watch: {
			$route (to, form) {
				this.showTop()
			}
		}
	}
</script>