<template>
    <div class="container">
        <div class="clearfix text-center">
            <h3 class="font30 fwb mt-60 mb-15">公司荣誉</h3>
            <span style="width: 160px;height: 4px;display: block;margin: auto;background: #007fdd;"></span>
        </div>
        <div class="blk60"></div>
        <div class="honor-list">
            <div class="honor-list-item" v-for="item in list">
                <em>
                    <img src="../../static/images/nopic.jpg" v-if="item.ImageUri === ''">
                    <img :src="item.ImageUri" v-if="item.ImageUri !== ''">
                </em>
                <span>{{item.DocTitle}}</span>
            </div>
        </div>
        <div class="blk100"></div>
    </div>
</template>

<script>
	import request from "@/assets/js/request"

	export default {
		name: "Honor",
		data () {
			return {
				list: []
			}
		},
		mounted () {
			let self = this
			request.getRequest("GethonorInfoList", {}).then(res => {
				self.list = res.Data
			})
		}
	}
</script>

<style scoped>

</style>