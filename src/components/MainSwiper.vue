<template>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide hide-text">Slide 1</div>
      <div class="swiper-slide hide-text">Slide 2</div>
      <div class="swiper-slide hide-text">Slide 3</div>
      <div class="swiper-slide hide-text">Slide 4</div>
      <div class="swiper-slide hide-text">Slide 5</div>
      <div class="swiper-slide hide-text">Slide 6</div>
      <div class="swiper-slide hide-text">Slide 7</div>
      <div class="swiper-slide hide-text">Slide 8</div>
      <div class="swiper-slide hide-text">Slide 9</div>
    </div>
    <!-- Add Arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainSlide: "",
    };
  },
  methods: {
    initSlide() {
      // swiper 관련 설정u
      this.mainSlide = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: true,
        loopAdditionalSlides: 2,
        pagination: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: true,
        },
        navigation: {
          // 버튼 사용자 지정
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
  },
  mounted() {
    // swiper 실행
    this.initSlide();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./src/assets/scss/vendors/swiper.scss";
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: url(~@/assets/images/mainbanner01.jpeg) no-repeat center;
  background-size: contain;
  padding-top: 50%;
}
</style>