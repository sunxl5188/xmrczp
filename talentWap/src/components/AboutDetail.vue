<template>
    <div class="container">
        <div class="blk20"></div>
        <div class="title">{{data.DocTitle}}</div>
        <div class="clearfix text-center c999 lh50">
            <span>时间：{{data.PublishTime}}</span>
            <span class="ml-20">浏览量：0</span>
        </div>
        <div class="clearfix content">
            <div v-html="data.DocContent"></div>
            <div class="blk50"></div>
            <div class="clearfix" v-if="JSON.stringify(data.Append) !=='[]' ">
                <div class="lh30 font14"><b>附件列表</b></div>
                <p v-for="item in data.Append" class="lh24" style="margin-bottom: 0;">
                    <a :href="item.Uri" target="_blank" :title="item.UriAlt" :download="item.UriAlt" class="font12">{{item.Title}}</a>
                </p>
            </div>
        </div>
        <div class="clearfix text-center pb-50 pt-40">
            <img src="../../static/images/006.png" class="backBtn" @click="backPage">
        </div>

        <gallery :swiperSlides="img" v-if="galleryShow" @close="headleGalleryClose"/>
    </div>
</template>

<script>
	import request from "@/assets/js/request"
	import Gallery from "@/components/Gallery"

	export default {
		name: "AboutDetail",
		data () {
			return {
				data: [],
				galleryShow: false,
				img: []
			}
		},
		mounted: function () {
			let that = this
			let id = that.$route.query.id
			if (/[0-9]+$/.test(id) === false) {
				that.layer.alert("非法访问", function (index) {
					that.layer.close(index)
					that.$router.back()
				})
				return false
			}
			that.getInfo(id)
			$(document).on("click", ".content img", function () {
				that.headleGalleryClick()
			})
		},
		methods: {
			getInfo (id) {
				let that = this
				let arr = []
				request.getRequest("GetInfo", {id: id}).then(res => {
					that.data = res.Data
					document.title= "厦门高新人才-" + res.Data.DocTitle
					that.$route.meta.title = "厦门高新人才-" + res.Data.DocTitle
					setTimeout(function () {
						$(".content img").each(function () {
							arr.push($(this).attr("src"))
						})
						that.img = arr
					}, 1000)
				})
			},
			backPage () {
				this.$router.back()
			},
			headleGalleryClick () {
				this.galleryShow = true
			},
			headleGalleryClose () {
				this.galleryShow = false
			}
		},
		components: {
			Gallery
		}
	}
</script>

<style scoped>

</style>