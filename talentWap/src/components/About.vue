<template>
    <div>
        <img src="../../static/images/003.jpg" alt="" class="img-responsive">
        <div v-if="name === 'about'">
            <div class="container">
                <div class="blk20"></div>
                <div class="title">{{info.DocTitle}}</div>
                <div class="clearfix pt-20">
                    <div class="content" v-html="info.DocContent"></div>
                </div>
            </div>
        </div>

        <div v-if="name === 'honor'">
            <div class="container">
                <div class="blk20"></div>
                <div class="title">公司荣誉</div>
                <div class="clearfix pt-40">
                    <div class="honorItem" v-for="item in list">
                        <em>
                            <img src="../../static/images/nopic.jpg" v-if="item.ImageUri === ''">
                            <img :src="item.ImageUri" v-if="item.ImageUri !== ''">
                        </em>
                        <span>{{item.DocTitle}}</span>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="name === 'staff'">
            <div class="blk20"></div>
            <div class="title">员工风采</div>
            <div class="container">
                <div class="clearfix pt-20">
                    <div class="media elegant" v-for="item in list">
                        <div class="media-left">
                            <router-link :to="{path:'/about/staff/StaffDetail',query:{id:item.ID}}">
                                <img :src="item.ImageUri" v-if="item.ImageUri !==''">
                                <img src="../../static/images/nopic.jpg" v-if="item.ImageUri ==''">
                            </router-link>
                        </div>
                        <div class="media-body">
                            <div class="media-content">
                                <router-link :to="{path:'/about/staff/StaffDetail',query:{id:item.ID}}"
                                             class="font14 c666">
                                    {{item.DocTitle}}
                                </router-link>
                            </div>
                            <div class="c999 lh20">{{item.PublishTime}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <router-view v-if="name === 'staffdetail'" />
    </div>
</template>

<script>
	import request from "@/assets/js/request"

	export default {
		name: "About",
		data () {
			return {
				name: "",
				info: "",
				list: []
			}
		},
		mounted: function () {
			let that = this
			that.name = that.$route.name || "about"
			if (that.name === "about") {
				that.getAbout()
			}
			if (that.name === "honor") {
				that.getHonor()
			}
			if (that.name === "staff") {
				that.getData()
			}
		},
		methods: {
			getAbout () {
				let that = this
				request.getRequest("GeCompanyIntro", {}).then(res => {
					that.info = res.Data
				})
			},
			getData () {
				let that = this
				request.getRequest("GetEmployeeNewsList", {}).then(res => {
					that.list = res.Data
				})
			},
			getHonor () {
				let that = this
				request.getRequest("GethonorInfoList", {}).then(res => {
					that.list = res.Data
				})
			}
		},
		watch: {
			$route (to, from) {
				let names = to.name
				/*if (names === "staffdetail") {
					this.name = ""
				} else {
					this.name = names
				}*/
							this.name = names
				if (names === "about") {
					this.getAbout()
				}
				if (names === "honor") {
					this.getHonor()
				}
				if (names === "staff") {
					this.getData()
				}
			}
		}
	}
</script>

<style scoped>

</style>