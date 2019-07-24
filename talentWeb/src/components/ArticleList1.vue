<template>
    <div>
        <div :style="name==='list1'?'display: block;':'display: none;'">
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
                                <router-link :to="{path:'/article/list1/detail', query:{id:item.ID}}" v-if="item.LinkUri===''">
                                    <img src="../../static/images/nopic.jpg" width="160" height="90"
                                         v-if="item.ImageUri==''">
                                    <img class="media-object" :src="item.ImageUri" width="160" height="90"
                                         v-if="item.ImageUri!=''">
                                </router-link>
                                <a :href="item.LinkUri" target="_blank" v-if="item.LinkUri!==''">
                                    <img src="../../static/images/nopic.jpg" width="160" height="90"
                                         v-if="item.ImageUri==''">
                                    <img class="media-object" :src="item.ImageUri" width="160" height="90"
                                         v-if="item.ImageUri!=''">
                                </a>
                            </div>
                            <div class="media-body pl-15">
                                <div class="lh20" style="height:65px;">
                                    <router-link class="c333"
                                                 :to="{path:'/article/list1/detail', query:{id:item.ID}}" v-if="item.LinkUri===''">
                                        {{item.DocTitle}}
                                    </router-link>
                                    <a class="c333" :href="item.LinkUri" target="_blank" v-if="item.LinkUri!==''">
                                        {{item.DocTitle}}
                                    </a>
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
                                <router-link :to="{path:'/article/list1/detail', query:{id:item.ID}}" v-if="item.LinkUri===''">
                                    <img src="../../static/images/nopic.jpg" width="160" height="90"
                                         v-if="item.ImageUri==''">
                                    <img class="media-object" :src="item.ImageUri" width="160" height="90"
                                         v-if="item.ImageUri!=''">
                                </router-link>
                                <a :href="item.LinkUri" target="_blank" v-if="item.LinkUri!==''">
                                    <img src="../../static/images/nopic.jpg" width="160" height="90"
                                         v-if="item.ImageUri==''">
                                    <img class="media-object" :src="item.ImageUri" width="160" height="90"
                                         v-if="item.ImageUri!=''">
                                </a>
                            </div>
                            <div class="media-body pl-15">
                                <div class="lh20" style="height:65px;">
                                    <router-link class="c333" :to="{path:'/article/list1/detail', query:{id:item.ID}}" v-if="item.LinkUri===''">
                                        {{item.DocTitle}}
                                    </router-link>
                                    <a class="c333" :href="item.LinkUri" target="_blank" v-if="item.LinkUri!==''">
                                        {{item.DocTitle}}
                                    </a>
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
                        <router-link :to="{path:'/article/list1/detail', query:{id:item.ID}}" v-if="item.LinkUri===''">
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-right font20 lh50 c333">
                                {{formatDate(item.PublishTime)}} >
                            </div>
                            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                <div class="font20 lh50 c333">{{item.DocTitle}}</div>
                                <div class="c999">{{item.DocSummary}}</div>
                            </div>
                        </router-link>
                        <a :href="item.LinkUri" target="_blank" v-if="item.LinkUri!==''">
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-right font20 lh50 c333">
                                {{formatDate(item.PublishTime)}} >
                            </div>
                            <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                                <div class="font20 lh50 c333">{{item.DocTitle}}</div>
                                <div class="c999">{{item.DocSummary}}</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div id="loadingList"></div>
                <div class="loading" v-if="loading === true"><img src="../../static/images/loading.gif" alt=""><span
                        class="ml-10">数据加载中...</span></div>
                <div class="clearfix text-center c999 pb-100 pt-50" v-if="!total && loading === false">
                    <i class="iconfont">&#xe60d;</i>
                    <span class="dib_vm">到达最后</span>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
	import appear from "jquery.appear"
	import "swiper/dist/css/swiper.css"
	import { swiper, swiperSlide } from "vue-awesome-swiper"
	import request from "@/assets/js/request"

	export default {
		name: "ArticleList",
		data () {
			return {
				name: "list1",
				title: "企业动态",
				list: [],
				TopList: [],
				page: 1,
				loading: true,
				total: true,
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
		mounted () {
			let self = this
			self.name = self.$route.name

			$("#loadingList").appear(function () {
				if (self.total && self.name === "list1") {
					self.getData(self.page)
					self.page += 1
				}
			}, {one: false})
		},
		methods: {
			// 请求数据
			getData (p) {
				let that = this
				that.loading = true
				setTimeout(function () {
					request.getRequest("GetCompanyNewsList", {pageIndex: p})
					.then(res => {
							if (res.Data.length > 0) {
								if (p === 1) {
									that.list = res.Data
								} else {
									that.list.push.apply(that.list, res.Data)
								}
							} else {
								that.total = false
							}
							that.loading = false
						}
					)
					if (p === 1) {
						request.getRequest("GetCompanyNewsList", {isTop: 1})
						.then(res => {
								that.TopList = res.Data
							}
						)
					}
				}, 1000)
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
			}
		},
		components: {
			swiper, swiperSlide
		}
		,
		watch: {
			$route (to, from) {
				this.name = to.name
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
