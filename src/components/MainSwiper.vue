<template>
  <!-- Main-Swiper -->
  <div class="main-banner-container">
    <div class="swiper-container main-container">
      <ul class="swiper-wrapper">
        <img
          class="swiper-slide hide-text"
          src="../assets/images/bannerImage02.jpeg"
          alt="Slide 1"
        />
        <img
          class="swiper-slide hide-text"
          src="../assets/images/bannerImage03.jpeg"
          alt="Slide 1"
        />
        <img
          class="swiper-slide hide-text"
          src="../assets/images/bannerImage02.jpeg"
          alt="Slide 1"
        />
        <img
          class="swiper-slide hide-text"
          src="../assets/images/bannerImage02.jpeg"
          alt="Slide 1"
        />
        <img
          class="swiper-slide hide-text"
          src="../assets/images/bannerImage02.jpeg"
          alt="Slide 1"
        />
        <img
          class="swiper-slide hide-text"
          src="../assets/images/bannerImage02.jpeg"
          alt="Slide 1"
        />
      </ul>
      <!-- Add Arrows -->
      <div class="swiper-button-box">
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      <div class="main-banner-box">
        <!-- Swiper Button Play -->
        <button @click="pauseBanner" class="swiper-button-pause hide-text">
          배너멈추기
        </button>
        <!-- Add Pagination -->
        <div class="pagination-box">
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
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
      // swiper 관련 설정
      this.mainSlide = new Swiper(".main-container", {
        clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
        slidesPerView: 3,
        spaceBetween: 0,
        slidesPerGroup: 3,
        loop: true,
        loopAdditionalSlides: 3,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
        autoHeight: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          clickable: true,
        },
        navigation: {
          // 버튼 사용자 지정
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
          },
        },
      });
    },
    pauseBanner() {
      console.log("this.mainSlide:", this.mainSlide);
      this.mainSlide.autoplay.stop();
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
.main-banner-container {
  .main-container {
    margin: 0 auto;
    overflow: hidden;
    z-index: 1;
    margin-bottom: 50px;
    .swiper-wrapper {
      //overflow: visible;
      // .swiper-slide {
      //   position: relative;
      //   background: url(~@/assets/images/bannerImage02.jpeg) no-repeat center;
      //   background-size: contain;
      //   padding-top: 41%;
      // }
    }
  }
}
.main-banner-box {
  position: absolute;
  bottom: 12px;
  right: 16px;
  z-index: 100;
  .swiper-button-pause {
    background: url(~@/assets/images/ic-stop-m@3x.png) no-repeat top;
    background-size: cover;
    width: 24px;
    height: 24px;
    margin: 0 4px 0 0;
    padding: 0;
    border: 0;
    border-radius: 50%;
    text-shadow: none;
    background: rgba(32, 36, 41, 0.8);
    cursor: pointer;
    position: absolute;
    right: 46px;
  }
  .pagination-box {
    .swiper-pagination {
      position: static;
      min-width: auto;
      float: none;
      padding: 6px 10px 7px;
      line-height: 1;
      border-radius: 12px;
      background-color: rgba(32, 36, 41, 0.8);
      color: #fff;
      font-size: 12px;
      text-align: center;
    }
  }
}
.swiper-button-box {
  display: none;
  .swiper-button-next {
    display: none;
  }
  .swiper-button-prev {
    display: none;
  }
}

@media screen and (min-width: map-get($breakpoints, "medium")) {
  .main-banner-container {
    .main-container {
      position: relative;
      .swiper-wrapper {
        .swiper-slide {
        }
      }
    }
  }
}
.swiper-button-box {
  display: block;
  .swiper-button-next {
    display: block;
    background: url(~@/assets/images/ic-arrow-r@3x.png) no-repeat top
      center/cover;
    width: 90px;
    height: 90px;
    right: 10%;
  }
  .swiper-button-prev {
    display: block;
    background: url(~@/assets/images/ic-arrow-l@3x.png) no-repeat top
      center/cover;
    width: 90px;
    height: 90px;
    left: 10%;
  }
}
.main-banner-box {
}
</style>