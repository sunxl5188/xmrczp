<template>
    <div>
        <div class="clearfix text-center">
            <h3 class="font30 fwb mt-60 mb-15">{{title}}</h3>
            <span style="width: 160px;height: 4px;display: block;margin: auto;background: #007fdd;"></span>
        </div>
        <div class="blk60"></div>
        <div class="container-fluid bdb">
            <div v-if="TopList.length < 4" class="clearfix">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4" v-for="(item,index) in TopList" :key="index">
                    <div class="media">
                        <div class="media-left media-middle">
                            <router-link :to="{path:'/article/'+classId+'/detail', query:{id:item.ID}}">
                                <img src="../../static/images/nopic.jpg" width="160" height="90"
                                     v-if="item.ImageUri==''">
                                <img class="media-object" :src="item.ImageUri" width="160" height="90"
                                     v-if="item.ImageUri!=''">
                            </router-link>
                        </div>
                        <div class="media-body pl-15">
                            <div class="lh20" style="height:65px;">
                                <router-link class="c333"
                                             :to="{path:'/article/'+classId+'/detail', query:{id:item.ID}}">
                                    {{item.DocTitle}}
                                </router-link>
                            </div>
                            <div class="clearfix c999 font12" style="height: 20px;">{{item.PublishTime}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <swiper v-if="TopList.length > 3" :options="swiperOption" style="height: 140px;">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in TopList" :key="index">
                    <div class="media">
                        <div class="media-left media-middle">
                            <router-link :to="{path:'/article/'+classId+'/detail', query:{id:item.ID}}">
                                <img src="../../static/images/nopic.jpg" width="160" height="90"
                                     v-if="item.ImageUri==''">
                                <img class="media-object" :src="item.ImageUri" width="160" height="90"
                                     v-if="item.ImageUri!=''">
                            </router-link>
                        </div>
                        <div class="media-body pl-15">
                            <div class="lh20" style="height:65px;">
                                <router-link class="c333"
                                             :to="{path:'/article/'+classId+'/detail', query:{id:item.ID}}">
                                    {{item.DocTitle}}
                                </router-link>
                            </div>
                            <div class="clearfix c999 font12" style="height: 20px;">{{item.PublishTime}}</div>
                        </div>
                    </div>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="blk30"></div>
        </div>
        <div class="container">
            <div class="blk40"></div>
            <div class="row newsList">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-30" v-for="item in list">
                    <router-link :to="{path:'/article/'+classId+'/detail', query:{id:item.ID}}">
                        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-right font20 lh50 c333">
                            {{formatDate(item.PublishTime)}} >
                        </div>
                        <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                            <div class="font20 lh50 c333">{{item.DocTitle}}</div>
                            <div class="c999">{{item.DocSummary}}</div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="loading" v-if="loading === true"><img src="../../static/images/loading.gif" alt=""><span
                    class="ml-10">数据加载中...</span></div>
            <div class="clearfix text-center c999 pb-100 pt-50" v-if="IsScroll === true && loading === false">
                <i class="iconfont">&#xe60d;</i>
                <span class="dib_vm">到达最后</span>
            </div>
        </div>
    </div>
</template>

<script>
	import "swiper/dist/css/swiper.css"
	import { swiper, swiperSlide } from "vue-awesome-swiper"
	import request from "@/assets/js/request"

	export default {
		name: "ArticleList",
		data () {
			return {
				title: "企业动态",
				classId: "",
				list: [],
				TopList: [],
				page: 1,
				loading: false,
				IsScroll: false,
				swiperOption: {
					loop: true,
					slidesPerView: 3,
					spaceBetween: 30,
					centeredSlides: true,
					autoplay: {
						delay: 3000,
						disableOnInteraction: false
					},
					pagination: {
						el: ".swiper-pagination",
						clickable: true
					}
				}
			}
		},
		created () {
			let that = this
			that.classId = that.$route.name

			if (that.classId) {
				console.log("加载数据")
				that.getData(that.classId, that.page)
			}
		},
		mounted () {
			let that = this
			that.scrollPage()
		},
		methods: {
			// 请求数据
			getData (id, p) {
				let that = this
				let url = ""
				if (id === "list1") {
					url = "GetCompanyNewsList"
					that.title = "企业动态"
				}
				if (id === "list2") {
					url = "GetNewsCenterList"
					that.title = "资讯动态"
				}
				that.loading = true
				that.IsScroll = false
				setTimeout(function () {
					request.getRequest(url, {pageIndex: p})
						.then(res => {
								if (p == 1) {
									that.list = that.unique(res.Data)
								}
								if (p >= 2) {
									that.list = that.unique(that.list.concat(res.Data))
								}
								if (res.Data.length < 10) {
									that.IsScroll = true
								} else {
									that.IsScroll = false
								}
								that.loading = false
							}
						)
					if (p == 1) {
						request.getRequest(url, {isTop: 1})
							.then(res => {
									that.TopList = res.Data
								}
							)
					}
				}, 1500)
			},
			formatDate (time) {
				let times = time.replace(/-/g, "/")
				let d = new Date(times)
				let Y = d.getFullYear()
				let M = d.getMonth() + 1
				let D = d.getDate()
				return Y + "/" + M + "/" + D
			},
			unique (array) {
				let r = []
				for (let i = 0, l = array.length; i < l; i++) {
					for (let j = i + 1; j < l; j++)
						if (array[i]["ID"] === array[j]["ID"]) {
							j = ++i
						}
					r.push(array[i])
				}
				return r
			},
			setImgUrl (html) {
				if (html) {
					return html.replace(/([^"]+(?:jpg|gif|png|bmp|jpeg))/g, "https://test.xmrc.com.cn$1")
				}
			},
			scrollPage () {
				let that = this
				setTimeout(function () {
					$(document).on("scroll", function () {
						let top = $(window).scrollTop() + 100
						if (top >= document.body.offsetHeight - document.documentElement.clientHeight && that.IsScroll === false && that.loading === false) {
							that.page++
							that.IsScroll = true
							that.getData(that.classId, that.page)
						}
					})
				}, 500)
			}
		},
		components: {
			swiper, swiperSlide
		}
		,
		watch: {
			$route (to, from) {
				this.classId = to.name
				if (to.name === "list1" || to.name === "list2") {
					this.scrollPage()
				}
				if (to.name === "detailA" || to.name === "detailB") {
					$(document).unbind("scroll")
				}
			}
		}
	}
</script>

<style>
    .swiper-pagination span.swiper-pagination-bullet {
        background:rgba(234, 234, 234, 1) !important;
    }
    .swiper-pagination span.swiper-pagination-bullet-active {
        background:rgba(234, 234, 234, 0.8) !important;
    }
    a:hover .c333, a:hover .c999 {
        color:#007fdd;
    }
</style>