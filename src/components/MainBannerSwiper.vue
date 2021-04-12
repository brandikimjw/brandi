<template>
  <div>
    <!-- <swiper
      :slides-per-view="1"
      :speed="options.speed"
      :loop="options.loop"
      :autoplay="options.autoplay"
      :height="500"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      @reachEnd="reachEnd"
    >
      <swiper-slide v-for="(item, i) in swiperItems" :key="i">
        <div class="slider">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="container">
                  <img :src="item.imgSrc" alt="" class="swiper-image" />
                  <div class="row">
                    <h2 v-html="item.title"></h2>
                    <p>{{ item.subTitle }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper> -->
    <!-- <div class="swiper-button-prev" @click="prev()"></div>
    <div class="swiper-button-next" @click="next()"></div> -->
  </div>
</template>
<script>
// import SwiperCore, { Navigation, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/vue";
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// SwiperCore.use([Navigation, Autoplay]);
// export default {
//   name: "MainSwiper",
//   components: {
//     Swiper,
//     SwiperSlide,
//   },
//   props: {
//     swiperItems: {
//       type: Array,
//       default: () => [],
//     },
//   },
//   data() {
//     return {
//       swiper: null,
//       options: {
//         speed: 1000,
//         loop: true,
//         autoplay: {
//           delay: 6000,
//         },
//       },
//     };
//   },
//   methods: {
//     onSwiper(swiper) {
//       this.swiper = swiper;
//     },
//     onSlideChange() {
//       console.log("slide change");
//     },
//     reachEnd() {
//       console.log("reach End");
//     },
//     handleSlideTo(number) {
//       this.swiper.slideTo(number);
//     },
//     next() {
//       this.swiper.slideNext();
//     },
//     prev() {
//       this.swiper.slidePrev();
//     },
//   },
// };
</script>
