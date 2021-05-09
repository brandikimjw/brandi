<template>
  <div class="swiper-test-wrap">
    <div class="swiper-container swiper-test-container">
      <ul class="swiper-wrapper swiper-test-wrapper">
        <li class="swiper-slide test1">test01</li>
        <li class="swiper-slide test2">test02</li>
        <li class="swiper-slide test3">test03</li>
        <li class="swiper-slide test4">test04</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwiperTest",
  data() {
    return {
      swiperTest: "",
    };
  },
  methods: {
    SubSwiper() {
      this.swiperTest = new Swiper(".swiper-test-containe", {
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 1,
        loop: false,
        pagination: false,
        resistance: false,
        slideToClickedSlide: true,
        slidesOffsetAfter: 32,
      });
    },
    // SubSwiper: function () {
    //   this.swiperTest = new Swiper(".swiper-test-containe", {
    //     slidesPerView: "auto",
    //     spaceBetween: 8,
    //     autoHeight: true,
    //     freeMode: true,
    //     loop: false,
    //     a11y: false,
    //     slidesOffsetBefore: 16,
    //     slidesOffsetAfter: 16,
    //   });
    // },
  },
  mounted() {
    this.SubSwiper();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.swiper-test-wrapper {
  .test1 {
    width: 50%;
    height: 30vh;
    background: orange;
  }
  .test2 {
    width: 50%;
    height: 30vh;
    background: green;
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
}
</style>
