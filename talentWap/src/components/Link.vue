<template>
    <div>
        <div class="text-center"><img src="../../static/images/021.jpg" class="img-responsive" alt=""></div>
        <div class="container">
            <div class="blk20"></div>
            <div class="title">友情链接</div>
            <div class="blk20"></div>
            <div class="row">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" v-for="item in list">
                    <a :href="item.Url" target="_blank">{{item.Name}}</a>
                </div>
            </div>
            <div class="blk50"></div>
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
		}, mounted: function () {
			let that = this
			request.getRequest("GetLinkList", {}).then(res => {
				that.list = res.Data
			})
		}
	}
</script>

<style scoped>

</style>