<template>
    <div class="login" :style="winH">
        <div class="text-center pt-70 pb-70">
            <router-link to="/">
                <img src="../../static/images/logo2.png" class="loginLogo" alt="">
            </router-link>
        </div>
        <div class="pl-55 pr-55">
            <form action="" method="POST" class="form-horizontal" >
                <div class="form-group form-group-lg">
                    <div class="input-group">
                        <div class="input-group-addon iconfont c999 font18">&#xe89a;</div>
                        <input name="username" type="text" class="form-control" placeholder="请输入帐号">
                    </div>
                </div>
                <div class="form-group form-group-lg">
                    <div class="input-group">
                        <div class="input-group-addon iconfont c999 font18">&#xe635;</div>
                        <input name="password" type="password" class="form-control" placeholder="请输入密码">
                    </div>
                </div>

                <div class="form-group form-group-lg">
                    <div class="input-group-btn">
                        <button type="button" class="btn btn-primary btn-block btn-lg" style="-webkit-border-radius: .05rem;-moz-border-radius: .05rem;border-radius: .05rem;">登录</button>
                    </div>
                </div>
                <div class="form-group form-group-lg">
                    <div class="pull-left checkbox">
                        <label><input type="checkbox" name=""> 记住账号</label>
                    </div>
                    <div class="pull-right pt-5">
                        <a href="javascript:void(0);" class="c007 lh22">忘记密码 ?</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Login",
		data () {
			return {
				winH: ""
			}
		},
		mounted () {
			let self = this
			$(".navbar, .footer").hide()
			self.winH = "height:" + window.screen.height + "px"
		},
		beforeDestroy () {
			$(".navbar, .footer").show()
		},
		methods: {}
	}
</script>

<style scoped>

</style>