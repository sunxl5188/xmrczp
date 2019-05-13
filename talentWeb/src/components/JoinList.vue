<template>
    <div class="container">
        <div class="blk100"></div>
        <table class="table table-hover text-center">
            <thead>
            <tr>
                <th>部门</th>
                <th width="15%">职位</th>
                <th width="15%">地点</th>
                <th width="15%">人数</th>
                <th width="15%">有限期</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in list">
                <td>
                    <router-link :to="{path:'/join/joinDetail', query:{id:item.ID}}">{{item.Company}}</router-link>
                </td>
                <td>
                    <router-link :to="{path:'/join/joinDetail', query:{id:item.ID}}">{{item.Recruit}}</router-link>
                </td>
                <td>
                    <router-link :to="{path:'/join/joinDetail', query:{id:item.ID}}">{{item.Local}}</router-link>
                </td>
                <td>
                    <router-link :to="{path:'/join/joinDetail', query:{id:item.ID}}">{{item.Count}}人</router-link>
                </td>
                <td>
                    <router-link :to="{path:'/join/joinDetail', query:{id:item.ID}}">{{formatDate(item.ReleaseDate,
                        item.HoldDay)}}
                    </router-link>
                </td>
            </tr>
            </tbody>
        </table>
        <div class="loading" v-if="loading === true"><img src="../../static/images/loading.gif" alt=""><span
                class="ml-10">数据加载中...</span></div>
        <div class="clearfix text-center c999 pb-100 pt-50" v-if="IsScroll === true && loading === false">
            <i class="iconfont">&#xe60d;</i>
            <span class="dib_vm">到达最后</span>
        </div>
        <div class="blk100"></div>
    </div>
</template>

<script>
	import request from "@/assets/js/request"

	export default {
		name: "JoinList",
		data () {
			return {
				list: [],
				page: 1,
				IsScroll: false,
				loading: false
			}
		},
		created () {
			let that = this
			console.log("加载数据")
			that.getData(1)
		},
		mounted () {
			let that = this
			that.scrollPage()
		},
		beforeDestroy: function () {
			$(document).unbind("scroll")
		},
		methods: {
			getData (p) {
				let that = this
				that.loading = true
				that.IsScroll = false
				setTimeout(function () {
					request.getRequest("GetJobList", {pageIndex: p})
						.then(res => {
							if (res.Result === false) {
								that.list = []
								that.IsScroll = true
								that.loading = false
								return false
							}
							if (p == 1) {
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
				}, 1500)
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
			},
			scrollPage () {
				let that = this
				setTimeout(function () {
					$(document).on("scroll", function () {
						let top = $(window).scrollTop() + 100
						if (top >= document.body.offsetHeight - document.documentElement.clientHeight && that.IsScroll === false && that.loading === false) {
							that.page++
							that.IsScroll = true
							that.getData(that.page)
						}
					})
				}, 500)
			}

		},
		watch: {
			$route (to, from) {
				if (to.name === "JoinList" && this.IsScroll === false) {
					this.scrollPage()
				}
				if (to.name === "JoinList" && from.name !== "JoinDetail") {
					this.page = 1
					this.list = []
					this.getData(this.page)
				}
				if (to.name === "JoinDetail") {
					$(document).unbind("scroll")
				}
			}
		}
	}
</script>

<style scoped>
    .table tr th {
        background:#007fdd;color:#fff; text-align:center;font-size:18px;border-bottom:none;padding-top:12px;padding-bottom:12px;
    }
    .table tr td {
        background:#fafafa;padding-top:14px;padding-bottom:14px;border-top:none;
    }
    .table tr td:first-of-type {border-left:3px solid #fafafa;}
    .table tr:nth-of-type(odd) td {
        background:#f6f6f6;
    }
    .table tr:nth-of-type(odd) td:first-of-type {
        border-left:3px solid #f6f6f6;
    }
    .table tr:hover td {
        background:#f0f9ff;color:#007fdd;
    }
    .table tr:hover td:first-of-type {
        border-left:3px solid #007fdd;
    }
</style>