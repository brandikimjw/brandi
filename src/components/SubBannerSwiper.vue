<template>
  <!--Sub-Swiper -->
  <div class="sub-banner-container">
    <div class="swiper-container sub-container">
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
      SubSlide: "",
      isMobile: false,
    };
  },

  // created() {
  //   this.resizeHandler();
  //   window.addEventListenner("resize", this.resizeHandler);
  // },

  methods: {
    initbanner() {
      this.SubSlide = new Swiper(".sub-container", {
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

    // removeSlide() {
    // },

    // createSlide() {
    // },

    // checkMobile(viewPort) {
    //   if (viewPort < 768) {
    //     this.isMobile = true;
    //   } else {
    //     this.isMobile = false;
    //   }
    // },
    // resizeHandler() {
    //   this.checkMobile(window.innerWidth);
    // },
  },

  // watch: {
  //   isMobile(val) {
  //     val ? this.createSlide() : this.removeSlide();
  //   },
  // },

  // beforeDestory() {
  //   window.removeEventListenner("resize", this.resizeHandler);
  // },
  // mounted() {
  //   this.initbanner();
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sub-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: url(~@/assets/images/mainbanner02.jpeg) no-repeat center;
  background-size: contain;
  padding-top: 50%;
}
</style>