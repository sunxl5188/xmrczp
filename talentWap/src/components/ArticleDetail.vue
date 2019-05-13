<template>
    <div>
        <div class="title">{{info.DocTitle}}</div>
        <div class="clearfix lh30 text-center pt-15 pb-20">
            <span class="c999">作者：{{info.DocAuditor}}</span>
            <span class="c999 ml-20">时间：{{info.PublishTime}}</span>
        </div>
        <div class="content">
            <div v-html="info.DocContent"></div>

            <div class="clearfix" v-if="JSON.stringify(info.Append) !== '[]'">
                <div class="lh30 font14"><b>附件列表</b></div>
                <p v-for="item in info.Append" class="lh24" style="margin-bottom: 0;">
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
		name: "ArticleDetail",
		data () {
			return {
				info: [],
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
					return false
				})
			}
			request.getRequest("GetInfo", {id: id}).then(res => {
				that.info = res.Data
				document.title = "厦门高新人才-" + res.Data.DocTitle
				that.$route.meta.title = "厦门高新人才-" + res.Data.DocTitle
				let arr = []
				setTimeout(function () {
					$(".content img").each(function () {
						arr.push($(this).attr("src"))
					})
					that.img = arr
				}, 1000)
			})
			$(document).on("click", ".content img", function () {
				that.headleGalleryClick()
			})
		},
		methods: {
			backPage () {
				this.$router.back()
			},
			setImgUrl (html) {
				if (html) {
					return html.replace(/([^"]+(?:jpg|gif|png|bmp|jpeg))/g, "https://test.xmrc.com.cn$1")
				}
			},
			headleGalleryClick () {
				this.galleryShow = true
			},
			headleGalleryClose () {
				this.galleryShow = false
			}
		}, components: {
			Gallery
		}
	}
</script>

<style scoped>

</style>