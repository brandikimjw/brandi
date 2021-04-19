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
      SubSlide: "",
      screenSize: null,
    };
  },

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
    setScreenSize() {
      if (window.innerWidth > 768) {
        this.screenSize = "pc";
      }
      if (window.innerWidth <= 768) {
        this.screenSize = "mobile";
      }
    },
    created() {
      this.setScreenSize();
      //this.setSlider();
      window.addEventListener("resize", this.setScreenSize);
    },
  },
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

@media screen and (min-width: map-get($breakpoints, "medium")) {
  //today베스트
  .mobile {
    display: none;
  }
  .swiper-slide {
    width: 50%;
    margin-right: 30px;
  }
}
</style>