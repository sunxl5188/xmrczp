<template>
    <div>
        <div class="clearfix text-center">
            <h3 class="font30 fwb mt-60 mb-15">{{data.DocTitle}}</h3>
            <span style="width: 160px;height: 4px;display: block;margin: auto;background: #007fdd;"></span>
        </div>
        <div class="clearfix text-center lh30 pt-30 pb-60 c999">
            来源：{{data.DocAuditor}} 时间：{{data.PublishTime}} 浏览量：0
        </div>
        <div class="clearfix content">
            <div v-html="data.DocContent"></div>
            <div class="blk50"></div>
            <div class="clearfix" v-if="JSON.stringify(data.Append) !== '[]'">
                <div class="lh40 font16 pb-10"><b>附件列表</b></div>
                <p v-for="item in data.Append">
                    <a :href="item.Uri" target="_blank" :title="item.UriAlt" :download="item.UriAlt">{{item.Title}}</a>
                </p>
            </div>
        </div>

        <div class="clearfix text-center pt-60">
            <a href="javascript:void(0);" @click="backPage"><img src="../../static/images/005.png" alt=""></a>
        </div>
        <div class="blk100"></div>
    </div>
</template>

<script>
	import request from "../assets/js/request"

	export default {
		name: "StaffDetail",
		data () {
			return {
				data: []
			}
		},
		mounted () {
			let that = this
			let id = that.$route.query.id
			if (/[0-9]+$/.test(id) === false) {
				that.layer.alert("非法访问", function (index) {
					that.layer.close(index)
					that.$router.push("/about/staff")
				})
				return false
			}
			request.getRequest("GetInfo", {
				id: id
			}).then(res => {
				that.data = res.Data
                document.title= "厦门高新人才-" + res.Data.DocTitle
				that.$route.meta.title = "厦门高新人才-" + res.Data.DocTitle
			})
		},
		methods: {
			backPage () {
				this.$router.go(-1)
			},
			setImgUrl (html) {
				if (html) {
					return html.replace(/([^"]+(?:jpg|gif|png|bmp|jpeg))/g, "https://test.xmrc.com.cn$1")
				}
			}
		}
	}
</script>

<style scoped>

</style>