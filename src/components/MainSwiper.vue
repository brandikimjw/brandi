<template>
  <!-- Main-Swiper -->
  <div class="main-banner-container">
    <div class="swiper-container main-container">
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
      <div class="main-banner-box">
        <!-- Swiper Button Play -->
        <button @click="pauseBanner" class="swiper-button-pause hide-text">
          Pause
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
        slidesPerView: "auto",
        spaceBetween: 0,
        loop: true,
        loopAdditionalSlides: 2,
        //pagination: false,
        autoplay: {
          delay: 1000,
          disableOnInteraction: true,
        },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          // 버튼 사용자 지정
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      //console.log("this.mainSlide:", this.mainSlide);
      // };
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
    position: relative;
    overflow: hidden;
    z-index: 1;
    margin-bottom: 50px;
    .swiper-wrapper {
      height: inherit;
      .swiper-slide {
        background: url(~@/assets/images/mainbanner01.jpeg) no-repeat center;
        background-size: contain;
        width: 100%;
        padding-top: 38%;
      }
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

.swiper-button-next {
  display: none;
}
.swiper-button-prev {
  display: none;
}
// .main-container {
//   width: 100%;
// }

// .swiper-wrapper {
//   position: relative;
//   .swiper-slide {
//     text-align: center;
//     background: url(~@/assets/images/mainbanner01.jpeg) no-repeat center;
//     background-size: contain;
//     width: 100%;
//     padding-top: 37%;
//   }

//   .main-banner-box {
//     position: absolute;
//     bottom: 12px;
//     right: 16px;
//     z-index: 100;
//   }
// }

// .swiper-button-pause {
//   background: url(~@/assets/images/ic-stop-m.png) no-repeat center
//     rgba(32, 36, 41, 0.76);
//   background-size: contain;
//   width: 24px;
//   height: 24px;
//   margin: 0 4px 0 0;
//   padding: 0;
//   border: 0;
//   border-radius: 50%;
//   text-shadow: none;
//   background: rgba(32, 36, 41, 0.8);
//   cursor: pointer;
// }
// .swiper-pagination {
//   font-size: 12px;
//   float: none;
//   padding: 6px 10px 7px;
//   line-height: 1;
//   font-size: 11px;
//   line-height: 1;
//   border-radius: 12px;
//   background-color: rgba(32, 36, 41, 0.8);
//   color: #fff;
//   display: inline-block;
// }
// .swiper-pagination-fraction {
//   width: 15%;
// }
// .swiper-button-next {
//   display: none;
// }
// .swiper-button-prev {
//   display: none;
// }
</style>