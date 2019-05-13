<template>
    <div>
        <div class="container po_r">
            <div class="home-menu">
                <span><a href="javascript:void(0);" @click="swiperToElement(1)" class="active">培训咨询</a></span>
                <span><a href="javascript:void(0);" @click="swiperToElement(2)">人才派遣</a></span>
                <span><a href="javascript:void(0);" @click="swiperToElement(3)">考试测评</a></span>
                <span><a href="javascript:void(0);" @click="swiperToElement(4)">猎头服务</a></span>
                <span><a href="javascript:void(0);" @click="swiperToElement(5)">人力资源服务外包</a></span>
            </div>
        </div>
        <swiper :options="swiperOption" ref="mySwiper" class="home-slide">
            <!-- slides -->
            <swiper-slide class="stop-swiping bg1">
                <div class="swiperText">
                    <div class="swiperTextElement">
                        <h2>培训咨询</h2>
                        <p class="lh26">
                            公司拥有2500余平方米的培训研修中心，配套完善的多媒体培训教室、会议室和温馨舒适的休息区。公司依托线上线下资源，踏实打造人事培训学院，大力开展“订单式”培训，积极承接政府委托培训，努力促进大学生就（创）业，参与专业技术人员继续教育，精心培育公益培训品牌，年开展培训300余天，年培训人数1.5万余人次，现已成为在厦门及周边地区知名的品牌培训机构。</p>
                        <p>
                            <router-link :to="{path:'/business/detail3'}" class="btn btnd">查看更多
                            </router-link>
                        </p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="stop-swiping bg2">
                <div class="swiperText">
                    <div class="swiperTextElement">
                        <h2>人才派遣</h2>
                        <p class="lh26">公司是厦门地区较早涉足派遣业务的人力资源服务机构，2007年市委编办指定我司为市直机关事业单位非在编人员派遣服务机构。经过多年的努力，公司现有派遣合作单位500余家，业务涉及党政机关、公安、医疗、教育等领域，现已成为我市承接机关事业单位非在编人员人才派遣规模最大的服务机构。</p>
                        <p>
                            <router-link :to="{path:'/business/detail1'}" class="btn btnd">查看更多
                            </router-link>
                        </p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="stop-swiping bg3">
                <div class="swiperText">
                    <div class="swiperTextElement">
                        <h2>考试测评</h2>
                        <p class="lh26">公司长期为政府机构、高校、各类企事业单位及个人，提供人才测评及考试服务，具体包括机关事业单位编内外人员笔试面试、国有企业中高层管理人员遴选考试、人才评价等服务。考试业务包括笔试命题、面试命题、笔试面试考务组织；人才测评主要针对中高层管理人员招聘选拔测评、竞争上岗选拔测评、大学生校园招聘选拔测评、社会招聘选拔测评、心理素质、人格特征测评的组织和实施。</p>
                        <p>
                            <router-link :to="{path:'/business/detail2'}" class="btn btnd">查看更多
                            </router-link>
                        </p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="stop-swiping bg5">
                <div class="swiperText">
                    <div class="swiperTextElement">
                        <h2>猎头服务</h2>
                        <p class="lh26">依托公司强大的人力资源服务优势及丰富的信息渠道，开展中高端人才寻访、一般人才委托招聘、毕业生（校园）招聘等服务，以专业的服务水平致力于为厦门党政机关、企事业单位引进各类人才。</p>
                        <p>
                            <router-link :to="{path:'/business/detail5'}" class="btn btnd">查看更多
                            </router-link>
                        </p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="stop-swiping bg4">
                <div class="swiperText">
                    <div class="swiperTextElement">
                        <h2>人力资源服务外包</h2>
                        <p class="lh26">
                            公司发挥多年在人力资源服务方面的积累与深厚的专业底蕴，承接发包单位的非核心业务及服务。目前公司开展的服务外包主要分为人事代理服务、人力资源外包服务、项目外包服务、人力资源解决方案咨询服务，帮助客户实现人力资源高效运营。</p>
                        <p>
                            <router-link :to="{path:'/business/detail4'}" class="btn btnd">查看更多
                            </router-link>
                        </p>
                    </div>
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

        <div class="container">
            <div class="blk70"></div>
            <div class="home-about">
                <em><img src="../../static/images/018.jpg" alt=""></em>
                <div class="info">
                    <div class="font18 lh50 pb-10">厦门高新人才开发有限公司</div>
                    <div class="c999 lh24" v-html="info"></div>
                    <div class="clearfix pt-30">
                        <router-link to="/about" class="btn btn-default">查看更多</router-link>
                    </div>
                </div>
            </div>
            <div class="blk100"></div>
        </div>

    </div>
</template>

<script>
	import "swiper/dist/css/swiper.css"
	import { swiper, swiperSlide } from "vue-awesome-swiper"
	import request from "../assets/js/request"

	export default {
		name: "Home",
		data () {
			return {
				info: "",
				swiperOption: {
					notNextTick: true,
					loop: true,
					centeredSlides: true,
					spaceBetween: 30,
					noSwiping: true,
					noSwipingClass: "stop-swiping",
					autoplay: true,
					debugger: true,
					pagination: {
						el: ".swiper-pagination",
						clickable: true
					},
					on: {
						autoplay: () => {
							let swiper = this.$refs.mySwiper.swiper
							let i = swiper.activeIndex
							$(".home-menu a").removeClass("active")
							$(".home-menu span").eq(i - 1).find("a").addClass("active")
						},
						click: () => {
							let swiper = this.$refs.mySwiper.swiper
							let i = swiper.activeIndex
							$(".home-menu a").removeClass("active")
							$(".home-menu span").eq(i - 1).find("a").addClass("active")
						}
					}
				}
			}
		},
		computed: {
			swiper () {
				return this.$refs.mySwiper.swiper
			}
		},
		mounted () {
			let that = this
			$(".header").show()
			$(".loginHeader").hide()
			$(document).on("click", ".home-menu a", function () {
				$(this).parent().siblings("span").find("a").removeClass("active")
				$(this).addClass("active")
			})
			request.getRequest("GeCompanyIntro", {}).then(res => {
				let text = res.Data.DocSummary.replace(/<\/?[^>]*>/g, "")
				let text1 = text.replace(/[|]*\n/, "")
				let text2 = text1.replace(/&nbsp;/ig, "")
				//that.info = text2.substr(0, 120) + "..."
				that.info = res.Data.DocSummary
			})
		},
		methods: {
			swiperToElement (len) {
				this.swiper.slideTo(len, 1000, false)
			}
		},
		components: {
			swiper, swiperSlide
		}
	}
</script>
