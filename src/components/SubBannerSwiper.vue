<template>
  <!--Sub-Swiper -->
  <div class="sub-banner-wrap">
    <div class="swiper-container sub-swiper-container">
      <ul class="swiper-wrapper sub-swiper-wrap">
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
  name: "SubBannerSwiper",
  data() {
    return {
      subBannerSlider: null,
    };
  },

  methods: {
    setScreenSize() {
      if (window.innerWidth > 768) {
        this.isMobile = false;
      }
      if (window.innerWidth <= 768) {
        this.isMobile = true;
      }
    },
    BannerSlider() {
      this.subBannerSlider = new Swiper(".sub-swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 8,
        autoHeight: true,
        freeMode: true,
        loop: false,
        a11y: false,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
      });
    },
  },
  watch: {
    isMobile(newVal) {
      if (newVal) {
        this.BannerSlider();
      } else {
        this.storeSlide.destroy();
      }
    },
  },
  mounted() {
    this.setScreenSize();
    this.BannerSlider();
    window.addEventListener("resize", this.setScreenSize);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sub-banner-wrap {
  margin: 0 -16px 60px;
  padding: 0 16px;
  .swiper-wrapper {
    .swiper-slide {
      max-width: 87%;
      background: url(~@/assets/images/mainbanner02.jpeg) no-repeat center;
      background-size: contain;
      > a {
        display: block;
        line-height: 0;
        > img {
          max-width: 100%;
          width: 100%;
          height: auto;
        }
      }
    }
  }
}

@media screen and (min-width: map-get($breakpoints, "medium")) {
  .sub-banner-wrap {
    .swiper-wrapper {
      .swiper-slide {
        max-width: 50%;
        &:first-child {
          margin-right: 32px;
        }
      }
      > a {
        display: block;
        line-height: 0;
        > img {
          max-width: 100%;
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>