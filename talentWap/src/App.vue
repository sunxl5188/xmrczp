<template>
    <div id="app">
        <Header/>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>

        <transition name="custom-classes-transition" enter-active-class="animated fadeIn" leave-class="animated fadeOut">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
        <Footer/>
    </div>
</template>

<script>
	import Header from "@/components/Header"
	import Footer from "@/components/Footer"

	export default {
		name: "App",
		components: {
			Header,
			Footer
		}
	}
</script>
