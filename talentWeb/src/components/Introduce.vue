<template>
    <div class="container">
        <div class="clearfix text-center">
            <h3 class="font30 fwb mt-60 mb-15" v-text="title">厦门高新人才开发有限公司</h3>
            <span style="width: 160px;height: 4px;display: block;margin: auto;background: #007fdd;"></span>
        </div>
        <div class="clearfix pt-60 pb-60 bdb lh26 font14">
            <div v-html="content"></div>
        </div>
        <div class="blk100"></div>
        <div class="blk100"></div>
    </div>
</template>

<script>
	import request from "../assets/js/request"

	export default {
		name: "Introduce",
		data () {
			return {
				title: "",
				content: ""
			}
		},
		mounted () {
			let that = this
			request.getRequest("GeCompanyIntro", {}).then(res => {
				that.title = res.Data.ChannelName
				that.content = res.Data.DocContent
			})
		},
		methods: {
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