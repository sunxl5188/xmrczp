<template>
    <div>
        <div class="banner bg5"></div>
        <div class="blk100"></div>
        <div class="container">
            <div class="row">
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div class="contactMap">
                        <img src="../../static/images/019.jpg" alt="">
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div class="bdb pb-15">
                        <h2 class="c007 lh50 pb-15 bdb">厦门高新人才开发有限公司</h2>
                        <p class="lh50 font16 bdb pb-10">联系地址：厦门市湖滨东路319号A座3楼（厦门人才市场大院内）</p>
                        <p class="font16 font-b">联系我们：</p>
                        <p><b>人才培训</b> <span class="ml-20">0592-5396600</span> <span class="ml-20">0592-5396618</span></p>
                        <p><b>测评考试</b> <span class="ml-20">0592-5110333</span> <span class="ml-20">0592-5079565</span></p>
                        <p><b>人才派遣</b> <span class="ml-20">0592-5396610</span> <span class="ml-20">0592-5396653</span></p>
                        <p><b>猎头服务</b> <span class="ml-20">0592-5079586</span></p>
                        <p><b>人力资源服务外包</b> <span class="ml-20">0592-5079586</span></p>

                    </div>

                    <div class="clearfix pt-30 ml-60">
                        <a href="https://www.amap.com/search?query=%E5%8E%A6%E9%97%A8%E9%AB%98%E6%96%B0%E4%BA%BA%E6%89%8D%E5%BC%80%E5%8F%91%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&city=350200&geoobj=118.183844%7C24.528857%7C118.191601%7C24.532718&zoom=18" target="_blank" class="btn btn-primary" style="width: 226px;height: 58px;line-height: 44px;">
                            <i class="iconfont font22">&#xe7d0;</i>
                            <span class="font18 dib_vm">位置导航</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="blk100"></div>
    </div>
</template>
<script>
	export default {
		name: "Contact",
		data () {
			return {}
		}, mounted () {
			// 百度地图API功能
			/*let map = new BMap.Map("allmap")
            map.centerAndZoom(new BMap.Point(118.108289,24.495568), 11)
            map.enableScrollWheelZoom(true)
            map.clearOverlays();
            let new_point = new BMap.Point(118.108289,24.495568);
            let marker = new BMap.Marker(new_point);  // 创建标注
            map.addOverlay(marker);              // 将标注添加到地图中
            map.panTo(new_point);*/

			/*var map = new BMap.Map("allmap");            // 创建Map实例
            map.centerAndZoom(new BMap.Point(118.108289,24.495568), 11);
            map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
            map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
            var local = new BMap.LocalSearch(map, {
                                renderOptions:{map: map}
            });
            local.search("厦门市湖滨东路319号A座3楼");*/

			/*let map = new BMap.Map("allmap")
			let point = new BMap.Point(118.108289, 24.495568)
			let marker = new BMap.Marker(point)  // 创建标注
			let top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT})
			let top_left_navigation = new BMap.NavigationControl()
			let top_right_navigation = new BMap.NavigationControl({
				anchor: BMAP_ANCHOR_TOP_RIGHT,
				type: BMAP_NAVIGATION_CONTROL_SMALL
			})
			map.addOverlay(marker)              // 将标注添加到地图中
			map.centerAndZoom(point, 15)
			map.enableScrollWheelZoom()
			//map.addControl(top_left_control)
			//map.addControl(top_left_navigation)
			//map.addControl(top_right_navigation)

			let opts = {
				width: 200,     // 信息窗口宽度
				height: 100,     // 信息窗口高度
				title: "厦门高新人才开发有限公司", // 信息窗口标题
				enableMessage: true,//设置允许信息窗发送短息
				message: ""
			}
			let infoWindow = new BMap.InfoWindow("地址：厦门市湖滨东路319号A座3楼（厦门市人才市场大院内）", opts)  // 创建信息窗口对象
			marker.addEventListener("click", function () {
				map.openInfoWindow(infoWindow, point) //开启信息窗口
			})
			map.openInfoWindow(infoWindow, point)*/

		}
	}
</script>

<style scoped>

</style>