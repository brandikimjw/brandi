<template>
  <!--Sub-Swiper -->
  <div class="sub-banner-container">
    {{ screenSize }}
    <div class="swiper-container sub-container" :class="screenSize">
      <ul class="swiper-wrapper">
        <li class="swiper-slide">
          <a href="#"
            ><img
              src="../assets/images/mainbanner02.jpeg"
              alt="서브배너 슬라이드 이미지1"
          /></a>
        </li>
        <li class="swiper-slide">
          <a href="#"
            ><img
              src="~@/assets/images/mainbanner02.jpeg"
              alt="서브배너 슬라이드 이미지2"
          /></a>
        </li>
      </ul>
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
        this.screenSize = "";
      }
      if (window.innerWidth <= 768) {
        this.screenSize = setSlider();
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
// .swiper-slide {
//   text-align: center;
//   //background: url(~@/assets/images/mainbanner02.jpeg) no-repeat center;
//   background-size: contain;
// }
.swiper-wrapper {
  height: 251px;
  .swiper-slide {
    max-width: 87%;
    margin-right: 20px;
    a {
      display: block;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

@media screen and (min-width: map-get($breakpoints, "medium")) {
  //today베스트
  .swiper-wrapper {
    display: flex;
    margin: 0 auto;
    .swiper-slide {
      max-width: calc(50% - 16px);
      margin-right: 32px;
    }
  }
}
</style>