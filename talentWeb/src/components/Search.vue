<template>
    <div class="container">

        <div class="clearfix text-center">
            <h3 class="font30 fwb mt-60 mb-15">检索包含 “<span class="cf00" v-text="keyword"></span>” 的内容共 <span
                    class="cf00" v-text="total">1</span> 条
            </h3>
            <span style="width: 160px;height: 4px;display: block;margin: auto;background: #007fdd;"></span>
        </div>
        <div class="blk60"></div>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-50">
                <router-link to="/article/list2/articleDetail/61">
                    <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 text-right font24 lh50 c333">
                        2018/10/24 >
                    </div>
                    <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        <div class="font24 lh50 c333">公司紧跟当前人力资源服务行业发展的步伐业</div>
                        <div class="c999">
                            厦门市人才服务中心直属国有专业人力资源服务企业。以人才派遣、人才培训、考试测评、人力资源服务外包等人力资源服务为主线，致力于为政府机关和各类企事业单位提供专业的人力资源解决方案与一站式的人力资源服务
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="clearfix text-center c999 pb-100 pt-50">
            <i class="iconfont">&#xe60d;</i>
            <span class="dib_vm">到达最后</span>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Search",
		data () {
			return {
				keyword: "",
				total: 0
			}
		},
		mounted () {
			this.keyword = this.$route.query.keyword
		},
		methods: {

		},
		watch: {
			$route (to, from) {
				this.keyword = to.query.keyword
			}
		}
	}
</script>

<style scoped>

</style>