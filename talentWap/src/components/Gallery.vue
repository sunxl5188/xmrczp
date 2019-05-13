<template>
    <div class="gallery">
        <i class="iconfont SwiperClose">&#xe7f6;</i>
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="slide in swiperSlides" :key="slide">
                <img :src="slide" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
  import "swiper/dist/css/swiper.css"
  import { swiper, swiperSlide } from "vue-awesome-swiper"
  export default {
    name: "Gallery",
    props: {
      swiperSlides: Array
    },
    data () {
      return {
        swiperOption: {
          width:window.screen.width,
          notNextTick: true,
          loop: false,
          centeredSlides: true,
          spaceBetween: 0,
          noSwiping: true,
          autoplay: false,
          debugger: true,
          pagination: {
            el: ".swiper-pagination",
            type:"fraction",
            clickable: true
          }
        }
      }
    },
    computed: { //选项/数据=>计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted(){
      let self = this
      let divWrap = document.getElementsByClassName("gallery")[0]
      divWrap.style.width = window.screen.width + "px"
      divWrap.style.height = window.screen.height + "px"
      document.getElementsByClassName("gallery")[0].classList.add("active")
      $(".gallery").on("click", ".SwiperClose", function(){
        self.handleGalleryClick()
      })
    },
    methods: {
       handleGalleryClick(){
         this.$emit("close")
       }
    },
    components: {
       swiper, swiperSlide
    }
  }
</script>

<style scoped>

</style>