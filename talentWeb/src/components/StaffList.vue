<template>
    <div>
        <div class="clearfix text-center">
            <h3 class="font30 fwb mt-60 mb-15">员工风采</h3>
            <span style="width: 160px;height: 4px;display: block;margin: auto;background: #007fdd;"></span>
        </div>
        <div class="blk60"></div>
        <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 mb-60" v-for="(value, key) in staffList">
                <div class="media mr-60" v-if="key % 2 == 0">
                    <div class="media-left media-middle">
                        <router-link :to="{ path: '/about/staff/StaffDetail', query: { id:value.ID}}">
                            <img src="../../static/images/nopic.jpg"class="staffImg" v-if="value.ImageUri==''">
                            <img class="media-object staffImg" :src="value.ImageUri" v-if="value.ImageUri!=''">
                        </router-link>
                    </div>
                    <div class="media-body pl-15">
                        <div class="" style="height:80px;">
                            <router-link class="c333" :to="{ path: '/about/staff/StaffDetail', query: { id:value.ID}}">
                                {{value.DocTitle}}
                            </router-link>
                        </div>
                        <div class="lh20 font12 c999" v-text="value.PublishTime"></div>
                    </div>
                </div>
                <div class="media ml-60" v-if="key % 2 == 1">
                    <div class="media-left media-middle">
                        <router-link :to="{ path: '/about/staff/StaffDetail', query: { id:value.ID}}">
                            <img src="../../static/images/nopic.jpg"class="staffImg" v-if="value.ImageUri==''">
                            <img class="media-object staffImg" :src="value.ImageUri" v-if="value.ImageUri!=''">
                        </router-link>
                    </div>
                    <div class="media-body pl-15">
                        <div class="" style="height:80px;">
                            <router-link class="c333" :to="{ path: '/about/staff/StaffDetail', query: { id:value.ID}}">
                                {{value.DocTitle}}
                            </router-link>
                        </div>
                        <div class="lh20 font12 c999" v-text="value.PublishTime"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="blk100"></div>
    </div>
</template>

<script>
	import request from "../assets/js/request"

	export default {
		name: "StaffList",
		data () {
			return {
				staffList: []
			}
		},
		mounted () {
			let that = this
			request.getRequest("GetEmployeeNewsList", {
				pageIndex: 1
			}).then(res => {
				that.staffList = res.Data
			})
		}
	}
</script>

<style scoped>

</style>