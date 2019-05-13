<template>
    <div>
        <div class="ie-check-box">
            <div class="ie-check-left"></div>
            <div class="ie-check-right">
                <div class="ie-check-tipsy">你的浏览器版本过低，可能存在安全风险。<br>建议您使用以下浏览器：</div>
                <div class="ie-check-icon">
                    <div class="ie-check-item"><span><img src="../../static/images/Chrome.png" alt=""></span>
                        <p>谷歌浏览器</p><div class="clearfix pt10"><a href="http://rj.baidu.com/soft/detail/14744.html" target="_blank"
                                                                  class="button blue">点击下载</a></div></div>
                    <div class="ie-check-item"><span><img src="../../static/images/Firefox.png" alt=""></span>
                        <p>火狐浏览器</p><div class="clearfix pt10"><a href="http://www.firefox.com.cn/download/" target="_blank"
                                                                  class="button blue">点击下载</a></div></div>
                    <div class="ie-check-item"><span><img src="../../static/images/IE.png" alt=""></span>
                        <p>IE浏览器</p><div class="clearfix pt10"><a
                                href="https://www.microsoft.com/zh-cn/download/internet-explorer-7-details.aspx" target="_blank"
                                class="button blue">点击下载</a></div></div>
                    <div class="clear"></div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
	export default {
		name: "ieCheck"
	}
</script>

<style scoped>

</style>