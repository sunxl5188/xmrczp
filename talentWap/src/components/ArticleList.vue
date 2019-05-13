<template>
    <div>
        <div v-if="listShow === true">
            <div class="title">{{title}}</div>
            <div class="container">
                <div class="blk35"></div>
                <div class="news-slide pb-20" v-if="TopList.length === 1" v-for="item in TopList">
                    <div class="media">
                        <div class="media-left">
                            <router-link :to="{path:'/article/'+classId+'/detail',query:{id:item.ID}}">
                                <img class="Img" src="../../static/images/nopic.jpg" v-if="item.ImageUri===''">
                                <img class="Img" :src="item.ImageUri"
                                     v-if="item.ImageUri !==''">
                            </router-link>
                        </div>
                        <div class="media-body">
                            <div class="media-title">
                                <router-link :to="{path:'/article/'+classId+'/detail',query:{id:item.ID}}">
                                    {{cutStr(item.DocTitle, 24)}}
                                </router-link>
                            </div>
                            <div class="lh20 c999">{{item.PublishTime}}</div>
                        </div>
                    </div>
                </div>
                <swiper :options="swiperOption" v-if="TopList.length > 1" ref="mySwiper" class="news-slide">
                    <!-- slides -->
                    <swiper-slide v-for="(item, index) in TopList" :key="index">
                        <div class="media">
                            <div class="media-left">
                                <router-link :to="{path:'/article/'+classId+'/detail',query:{id:item.ID}}">
                                    <img class="Img" src="../../static/images/nopic.jpg" v-if="item.ImageUri===''">
                                    <img class="Img" :src="item.ImageUri"
                                         v-if="item.ImageUri !==''">
                                </router-link>
                            </div>
                            <div class="media-body">
                                <div class="media-title">
                                    <router-link :to="{path:'/article/'+classId+'/detail',query:{id:item.ID}}">
                                        {{cutStr(item.DocTitle, 24)}}
                                    </router-link>
                                </div>
                                <div class="lh20 c999">{{item.PublishTime}}</div>
                            </div>
                        </div>
                    </swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="blk20"></div>
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pb-30" v-for="item in list">
                        <p class="font12 c999">{{formatDate(item.PublishTime)}}</p>
                        <router-link :to="{path:'/article/'+classId+'/detail',query:{id:item.ID}}"
                                     class="font18 lh22 c333">
                            {{item.DocTitle}}
                        </router-link>
                    </div>
                    <div class="loading" v-if="loading === true">
                        <img src="../../static/images/loading.gif" alt="">
                        <span class="ml-5">数据加载中...</span>
                    </div>
                    <div class="noData" v-if="IsScroll === true">
                        <i class="iconfont">&#xe60d;</i>
                        <span>到达最后</span>
                    </div>
                </div>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script>
	import request from "@/assets/js/request"
	import "swiper/dist/css/swiper.css"
	import { swiper, swiperSlide } from "vue-awesome-swiper"

	export default {
		name: "ArticleList",
		data () {
			return {
				title: "企业动态",
				cid: "",
				classId: "",
				listShow: "",
				list: [],
				TopList: [],
				page: 1,
				loading: false,
				IsScroll: false,
				len: 24,
				swiperOption: {
					notNextTick: true,
					loop: true,
					centeredSlides: true,
					spaceBetween: 30,
					noSwiping: true,
					autoplay: true,
					debugger: true,
					pagination: {
						el: ".swiper-pagination",
						clickable: true
					}
				}
			}
		}, created () {
			let that = this
			let cid = 1
			if (that.$route.name === "list1") {
				cid = 1
			}
			if (that.$route.name === "list2") {
				cid = 2
			}
			that.classId = that.$route.name
			that.cid = cid
			if (cid && that.$route.name !== "ADetail1" && that.$route.name !== "ADetail2") {
				console.log("加载数据")
				that.listShow = true
				that.getData(cid, that.page)
			} else {
				that.listShow = false
			}
		},
		mounted: function () {
			let that = this
			if (that.$route.name !== "ADetail1" && that.$route.name !== "ADetail2") {
				this.listShow = true
				window.addEventListener("scroll", that.scrollPage)
			} else {
				this.listShow = false
			}
			if (document.body.offsetWidth > 540) {
				that.len = 70
			} else if (document.body.offsetWidth <= 540 && document.body.offsetWidth > 320) {
				that.len = 24
			} else if (document.body.offsetWidth <= 320) {
				that.len = 18
			}
		},
		methods: {
			getData (cid, p) {
				let that = this
				let url = ""
				if (cid == "1") {
					that.title = "企业动态"
					url = "GetCompanyNewsList"
				}
				if (cid == "2") {
					that.title = "资讯动态"
					url = "GetNewsCenterList"
				}
				that.loading = true
				that.IsScroll = false
				setTimeout(function () {
					request.getRequest(url, {pageIndex: p}).then(res => {
						if (p === 1) {
							that.list = res.Data
						}
						if (p >= 2) {
							that.list = that.list.concat(res.Data)
						}
						if (res.Data.length < 10) {
							that.IsScroll = true
						} else {
							that.IsScroll = false
						}
						that.loading = false
					})
					if (p == 1) {
						request.getRequest(url, {isTop: 1})
							.then(res => {
									that.TopList = res.Data
								}
							)
					}
				}, 1500)
			},
			scrollPage () {
				let that = this
				let top = $(window).scrollTop() + 100
				if (top >= document.body.offsetHeight - document.documentElement.clientHeight && that.IsScroll === false && that.loading === false) {
					that.page++
					that.IsScroll = true
					that.getData(that.cid, that.page)
				}
			},
			cutStr (str) {
				if (str) {
					let num = str.length
					if (num > this.len) {
						return str.substr(0, this.len) + "..."
					} else {
						return str
					}
				} else {
					return str
				}
			},
			formatDate (time) {
				let times = time.replace(/-/g, "/")
				let d = new Date(times)
				let Y = d.getFullYear()
				let M = d.getMonth() + 1
				let D = d.getDate()
				return Y + "/" + M + "/" + D
			}
		},
		components: {
			swiper, swiperSlide
		},
		watch: {
			$route (to, from) {
				this.classId = to.name
				if (to.name === "list1") {
					this.cid = 1
				}
				if (to.name === "list2") {
					this.cid = 2
				}
				if ((to.name === "list1" || to.name === "list2") && this.IsScroll === false) {
					window.addEventListener("scroll", this.scrollPage)
				}
				if (to.name === "list1" && from.name !== "ADetail1" || to.name === "list2" && from.name !== "ADetail2") {
					this.page = 1
					this.list = []
					window.addEventListener("scroll", this.scrollPage)
					this.getData(this.cid, this.page)
				}
				if (to.name !== "list1" && to.name !== "list2") {
					this.listShow = false
					window.removeEventListener("scroll", this.scrollPage)
				} else {
					this.listShow = true
				}
			}
		}
	}
</script>

<style scoped>

</style>