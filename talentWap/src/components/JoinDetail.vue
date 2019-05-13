<template>
    <div class="container">
        <div class="title">{{data.Recruit}}</div>
        <div class="row font14 jsonDetail">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 bdb">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right c999 lh46">
                    招聘职位：
                </div>
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 lh46">
                    {{data.Recruit}}
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 bdb">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right c999 lh46">
                    部门：
                </div>
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 lh46">
                    {{data.Dept}}
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 bdb">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right c999 lh46">
                    地点：
                </div>
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 lh46">
                    {{data.Local}}
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 bdb">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right c999 lh46">
                    人数：
                </div>
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 lh46">
                    {{data.Count}}人
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 bdb">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right c999 lh46">
                    有效期：
                </div>
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 lh46">
                    {{formatDate(data.ReleaseDate, data.HoldDay)}}
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 bdb">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right c999 lh46" style="padding:0;">
                    学历要求：
                </div>
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 pt-15">
                    {{data.NeedEdu}}
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 bdb">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right c999 lh46" style="padding:0;">
                    工作经验要求：
                </div>
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 pt-15">
                    {{data.NeedWorkLength}}
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 bdb">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right c999 lh46">
                    岗位职责：
                </div>
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 pt-15">
                    <div v-html="data.JobDetail"></div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 bdb">
                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-right c999 lh46">
                    投递方式：
                </div>
                <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 pt-15" v-html="data.ApplyType"></div>
            </div>
        </div>
        <div class="clearfix text-center pb-50 pt-40">
            <img src="../../static/images/006.png" class="backBtn" @click="backPage">
        </div>
    </div>
</template>

<script>
	import request from "@/assets/js/request"

	export default {
		name: "JoinDetail",
		data () {
			return {
				data: []
			}
		},
		mounted: function () {
			let that = this
			let id = that.$route.query.id
			request.getRequest("GetJobInfo", {id: id}).then(res => {
				that.data = res.Data
				that.$route.meta.title = "厦门高新人才-" + res.Data.Recruit
			})
		},
		methods: {
			backPage () {
				this.$router.back()
			},
			formatDate (date, day) {
				let DD = date.replace(/-/g, "/")
				let d = new Date(DD + " 00:00:00").getTime()
				let dd = new Date(d + 86400000 * day)
				let Y = dd.getFullYear()
				let M = dd.getMonth() + 1
				M = (M < 10) ? "0" + M : M
				let D = dd.getDate()
				D = (D < 10) ? "0" + D : D
				return Y + "-" + M + "-" + D
			}
		}
	}
</script>

<style scoped>

</style>