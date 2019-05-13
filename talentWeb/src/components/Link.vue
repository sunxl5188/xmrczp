<template>
    <div>
        <div class="banner bg6"></div>
        <div class="clearfix text-center">
            <h3 class="font30 fwb mt-60 mb-15">友情链接</h3>
            <span style="width: 160px;height: 4px;display: block;margin: auto;background: #007fdd;"></span>
        </div>
        <div class="blk60"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 link">
                    <span v-for="item in list">
                        <a :href="item.Url" target="_blank">{{item.Name}}</a>
                    </span>
                </div>
            </div>
            <div class="blk100"></div>
            <div class="blk100"></div>
        </div>
    </div>
</template>

<script>
	import request from "@/assets/js/request"

	export default {
		name: "Link",
		data () {
			return {
				list: []
			}
		},
		mounted () {
			let that = this
			request.getRequest("GetLinkList", {}).then(res => {
				that.list = res.Data
			})
		}
	}
</script>

<style scoped>

</style>