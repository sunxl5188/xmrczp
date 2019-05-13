<template>
    <div class="home">
        <swiper :options="swiperOption" ref="mySwiper" class="home-slide">
            <!-- slides -->
            <swiper-slide>
                <router-link :to="{path:'/business/detail3'}">
                    <img src="../../static/images/001.jpg" alt="" class="img-responsive">
                    <div class="swiperText">
                        <div class="swiperTextElement">
                            <p class="font15">培训咨询</p>
                            <p class="lh18 font10">
                                公司拥有2500余平方米的培训研修中心，配套完善的多媒体培训教室、会议室和温馨舒适的休息区。公司依托线上线下资源，踏实打造人事培训学院，大力开展“订单式”培训，积极承接政府委托培训，努力促进大学生就（创）业，参与专业技术人员继续教育，精心培育公益培训品牌，年开展培训300余天，年培训人数1.5万余人次，现已成为在厦门及周边地区知名的品牌培训机构。</p>
                        </div>
                    </div>
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link :to="{path:'/business/detail1'}">
                    <img src="../../static/images/022.jpg" alt="" class="img-responsive">
                    <div class="swiperText">
                        <div class="swiperTextElement">
                            <p class="font15">人才派遣</p>
                            <p class="lh18 font10">公司是厦门地区较早涉足派遣业务的人力资源服务机构，2007年市委编办指定我司为市直机关事业单位非在编人员派遣服务机构。经过多年的努力，公司现有派遣合作单位500余家，业务涉及党政机关、公安、医疗、教育等领域，现已成为我市承接机关事业单位非在编人员人才派遣规模最大的服务机构。</p>
                        </div>
                    </div>
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link :to="{path:'/business/detail2'}">
                    <img src="../../static/images/023.jpg" alt="" class="img-responsive">
                    <div class="swiperText">
                        <div class="swiperTextElement">
                            <p class="font15">考试测评</p>
                            <p class="lh18 font10">公司长期为政府机构、高校、各类企事业单位及个人，提供人才测评及考试服务，具体包括机关事业单位编内外人员笔试面试、国有企业中高层管理人员遴选考试、人才评价等服务。考试业务包括笔试命题、面试命题、笔试面试考务组织；人才测评主要针对中高层管理人员招聘选拔测评、竞争上岗选拔测评、大学生校园招聘选拔测评、社会招聘选拔测评、心理素质、人格特征测评的组织和实施。</p>
                        </div>
                    </div>
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link :to="{path:'/business/detail5'}">
                    <img src="../../static/images/025.jpg" alt="" class="img-responsive">
                    <div class="swiperText">
                        <div class="swiperTextElement">
                            <p class="font15">猎头服务</p>
                            <p class="lh18 font10">依托公司强大的人力资源服务优势及丰富的信息渠道，开展中高端人才寻访、一般人才委托招聘、毕业生（校园）招聘等服务，以专业的服务水平致力于为厦门党政机关、企事业单位引进各类人才。</p>
                        </div>
                    </div>
                </router-link>
            </swiper-slide>
            <swiper-slide>
                <router-link :to="{path:'/business/detail4'}">
                    <img src="../../static/images/024.jpg" alt="" class="img-responsive">
                    <div class="swiperText">
                        <div class="swiperTextElement">
                            <p class="font15">人力资源服务外包</p>
                            <p class="lh18 font10">
                                公司发挥多年在人力资源服务方面的积累与深厚的专业底蕴，承接发包单位的非核心业务及服务。目前公司开展的服务外包主要分为人事代理服务、人力资源外包服务、项目外包服务、人力资源解决方案咨询服务，帮助客户实现人力资源高效运营。</p>
                        </div>
                    </div>
                </router-link>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="container">
            <div class="blk10"></div>
            <img src="../../static/images/002.jpg" alt="" class="img-responsive text-center">
            <div class="font16 lh40 pt-20"><b>厦门高新人才开发有限公司</b></div>
            <p class="c999 lh24 font14">{{info}}</p>
            <div class="clearfix text-center pt-10 pb-10">
                <router-link :to="{path:'/about',query:{sid:1}}" class="btn btn-default">查看更多</router-link>
            </div>
        </div>
    </div>
</template>

<script>
	import request from "@/assets/js/request"
	import "swiper/dist/css/swiper.css"
	import { swiper, swiperSlide } from "vue-awesome-swiper"

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
					autoplay: true,
					debugger: true,
					pagination: {
						el: ".swiper-pagination",
						clickable: true
					}
				}
			}
		},
		mounted () {
			let that = this
			request.getRequest("GeCompanyIntro", {}).then(res => {
				let text = res.Data.DocContent.replace(/<\/?[^>]*>/g, "")
				let text1 = text.replace(/[|]*\n/, "")
				let text2 = text1.replace(/&nbsp;/ig, "")
				//that.info = text2.substr(0, 100) + "..."
				that.info = res.Data.DocSummary
			})
		},
		methods: {},
		components: {
			swiper, swiperSlide
		}
	}
</script>

