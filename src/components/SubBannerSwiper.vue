<template>
  <!--Sub-Swiper -->
  <div class="sub-banner-container">
    {{ screenSize }}
    <div class="swiper-container sub-container" :class="screenSize">
      <div class="swiper-wrapper">
        <div class="swiper-slide hide-text">Slide 1</div>
        <div class="swiper-slide hide-text">Slide 2</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: null,
      screenSize: null,
    };
  },

  methods: {
    setScreenSize() {
      if (window.innerWidth > 768) {
        this.screenSize = "pc";
      }
      if (window.innerWidth <= 768) {
        this.screenSize = "mobile";
      }
    },
    setSlider() {
      //console.log(window.Swiper);
      this.slider = new Swiper(".sub-container", {
        // 스와이퍼 관련 옵션
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });
    },
  },
  created() {
    this.setScreenSize();
    this.setSlider();
    window.addEventListener("resize", this.setScreenSize);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sub-container {
}

.swiper-slide {
  //margin-top: 15%;
  text-align: center;
  font-size: 18px;
  background: url(~@/assets/images/mainbanner02.jpeg) no-repeat center;
  background-size: contain;
  padding-top: 40%;
}

@media screen and (min-width: map-get($breakpoints, "medium")) {
  //today베스트
  .screenSize {
    display: none;
  }
  .swiper-slide {
    width: 50%;
    margin-right: 30px;
  }
}
</style>