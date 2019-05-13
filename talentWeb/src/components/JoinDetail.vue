<template>
    <div class="container">
        <div class="clearfix text-center">
            <h3 class="font30 fwb mt-60 mb-15">{{data.Recruit}}</h3>
            <span style="width: 160px;height: 4px;display: block;margin: auto;background: #007fdd;"></span>
        </div>
        <div class="blk60"></div>
        <table class="table">
            <tbody>
            <tr>
                <td class="text-right font-b" width="14%">招聘职位:</td>
                <td>{{data.Recruit}}</td>
            </tr>
            <tr>
                <td class="text-right font-b">部门:</td>
                <td>{{data.Dept}}</td>
            </tr>
            <tr>
                <td class="text-right font-b">地点:</td>
                <td>{{data.Local}}</td>
            </tr>
            <tr>
                <td class="text-right font-b">人数:</td>
                <td>{{data.Count}}人</td>
            </tr>
            <tr>
                <td class="text-right font-b">有效期:</td>
                <td>{{formatDate(data.ReleaseDate, data.HoldDay)}}</td>
            </tr>
            <tr>
                <td class="text-right font-b">学历要求:</td>
                <td>
                    {{data.NeedEdu}}
                </td>
            </tr>
            <tr>
                <td class="text-right font-b">工作经验要求:</td>
                <td>
                    {{data.NeedWorkLength}}
                </td>
            </tr>
            <tr>
                <td class="text-right font-b">岗位职责:</td>
                <td v-html="data.JobDetail"></td>
            </tr>

            <tr>
                <td class="text-right font-b">投递方式:</td>
                <td v-html="data.ApplyType"></td>
            </tr>
            <tr>
                <td colspan="2" class="text-center pt-50 pb-100">
                    <a href="javascript:void(0);" @click="blockPage"><img src="../../static/images/005.png" alt=""></a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
	import request from "../assets/js/request"

	export default {
		name: "JoinDetail",
		data () {
			return {
				data: []
			}
		},
		mounted () {
			let that = this
			let id = that.$route.query.id
			if (/[0-9]+$/.test(id) === false) {
				that.layer.alert("非法访问", function (index) {
					that.layer.close(index)
					that.$router.push("/join")
				})
				return false
			}
			request.getRequest("GetJobInfo", {
				id: id
			}).then(res => {
				that.data = res.Data
				that.$route.meta.title = "厦门高新人才-" + res.Data.Recruit
			})
		},
		methods: {
			blockPage () {
				this.$router.go(-1)
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

<style>
    .table td {padding-top:19px !important;padding-bottom:19px !important;}
    .table tr:first-of-type td {border-top:none;}
</style>