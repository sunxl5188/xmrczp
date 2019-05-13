<template>
    <div class="footer bdt pt-20 text-center mt-15 font12">
        <div class="clearfix c999 lh22">
            © 厦门高新人才开发有限公司版权所有<br>闽ICP备19000856号
        </div>
        <div class="pl-15 pr-15 pt-15 pb-20">
            <div class="row">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <router-link class="c999" to="/">网站首页</router-link>
                </div>
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <router-link class="c999" to="/contact">联系我们</router-link>
                </div>
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <router-link class="c999" to="/link">友情链接</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Footer"
	}
</script>

<style scoped>

</style>