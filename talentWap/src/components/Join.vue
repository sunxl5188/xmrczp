<template>
    <div>
        <div class="text-center"><img src="../../static/images/019.jpg" class="img-responsive" alt=""></div>
        <div class="container">
            <div class="blk40"></div>
            <div class="join" v-if="id =='' ">
                <table class="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>职位</th>
                        <th>人数</th>
                        <th>有效期</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in list">
                        <td>
                            <router-link :to="{path:'/join/joinDetail', query:{id:item.ID}}" class="c333">
                                {{item.Recruit}}
                            </router-link>
                        </td>
                        <td>
                            <router-link :to="{path:'/join/joinDetail', query:{id:item.ID}}" class="c333">
                                {{item.Count}}人
                            </router-link>
                        </td>
                        <td>
                            <router-link :to="{path:'/join/joinDetail', query:{id:item.ID}}" class="c333">
                                {{formatDate(item.ReleaseDate, item.HoldDay)}}
                            </router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="loading" v-if="loading === true">
                    <img src="../../static/images/loading.gif" alt="">
                    <span class="ml-5">数据加载中...</span>
                </div>
                <div class="noData" v-if="IsScroll === true">
                    <i class="iconfont">&#xe60d;</i>
                    <span>到达最后</span>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
	import request from "@/assets/js/request"

	export default {
		name: "Join",
		data () {
			return {
				id: "",
				p: 1,
				list: [],
				loading: false,
				IsScroll: false
			}
		},
		mounted: function () {
			let that = this
			let id = that.$route.query.id || ""
			that.id = id
			if (id == "") {
				that.getData(that.p)
			}
			if (that.$route.name !== "JoinDetail") {
				window.addEventListener("scroll", that.scrollPage)
			}
		},
		methods: {
			getData (p) {
				let that = this
				that.loading = true
				that.IsScroll = false
				setTimeout(function () {
					request.getRequest("GetJobList", {pageIndex: p}).then(res => {
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
				let top = $(window).scrollTop() + 100
				if (top >= document.body.offsetHeight - document.documentElement.clientHeight && that.IsScroll === false && that.loading === false) {
					that.p++
					that.getData(that.p)
				}
			}
		},
		watch: {
			$route (to, from) {
				let id = to.query.id || ""
				this.id = id
				if (id == "" && to.name === "Join" && from.name !== "JoinDetail") {
					this.list = []
					window.addEventListener("scroll", this.scrollPage)
					this.getData(this.p)
				} else {
					window.removeEventListener("scroll", this.scrollPage)
				}
			}
		}
	}
</script>

<style scoped>

</style>