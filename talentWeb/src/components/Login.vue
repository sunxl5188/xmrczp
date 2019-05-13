<template>
    <div class="login">
        <div class="container">
            <div class="loginbox">
                <div class="blk10"></div>
                <div class="loginTitle">
                    用户登录
                </div>
                <div class="blk30"></div>
                <form action="" method="POST" class="form-horizontal" autocomplete="off"
                      @submit.prevent="validateBeforeSubmit">
                    <div class="form-group username">
                        <input type="text" class="form-control" name="username" placeholder="请输入登录帐号"
                               v-model="username">
                    </div>

                    <div class="form-group password">
                        <input type="password" class="form-control" name="password" placeholder="请输入登录密码"
                               v-model="password">
                    </div>

                    <div class="form-group pt-10">
                        <button type="submit" class="btn btn-block btn-lg btn-primary">登录</button>
                    </div>
                    <div class="form-group lh26">
                        <span class="pull-left c999">
                            <label><input type="checkbox" name="isjizhu" class="checkbox-inline"><span
                                    class="dib_vm ml-5">记住账号</span></label>
                        </span>
                        <span class="pull-right">
                            <a href="javascript:void(0);" class="c007">忘记密码?</a>
                        </span>
                        <div class="clear"></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
	import "../assets/js/VeeValidateConfig"

	export default {
		name: "Login",
		data () {
			return {
				username: "",
				password: ""
			}
		},
		mounted () {
          $(".header").hide()
          $(".loginHeader").show()
		},
		methods: {
			validateBeforeSubmit () {
				this.$validator.validateAll().then((result) => {
					if (result) {
						alert("提交数据!")
						return
					}
					alert("纠正他们的错误!")
				})
			}
		}
	}
</script>

<style scoped>

</style>