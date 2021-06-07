<template>
  <!-- Main-Swiper -->
  <div class="main-banner-container">
    <div class="swiper-container main-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide" v-for="(item, index) in mainBannerList" :key="index">
          <img :src="item.image_url" :alt="`배너 슬라이드${index+1}`">
        </li>
      </ul>
      <!-- 화살표 -->
      <button type="button" class="swiper-button-prev" aria-label="이전 슬라이드 이동"></button>
      <button type="button" class="swiper-button-next" aria-label="다음 슬라이드 이동"></button>
      <!-- 플레이/스탑 -->
      <div class="banner-pager-box">
        <button type="button" @click="bannerAutoAction(true)" class="btn-banner-start skip" aria-label="배너 시작"></button>
        <button type="button" @click="bannerAutoAction(false)" class="btn-banner-stop" aria-label="배너 일시정지"></button>
        <div class="swiper-pagination">
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
      mainBannerList : [
        {
          tit : '이미지 슬라이드1',
          image_url : 'https://placeimg.com/1000/454/any'
        },
        {
          tit : '이미지 슬라이드2',
          image_url : 'https://placeimg.com/1000/454/any'
        },
        {
          tit : '이미지 슬라이드3',
          image_url : 'https://placeimg.com/1000/454/any'
        },
        {
          tit : '이미지 슬라이드4',
          image_url : 'https://placeimg.com/1000/454/any'
        },
        {
          tit : '이미지 슬라이드5',
          image_url : 'https://placeimg.com/1000/454/any'
        },
      ]
    };
  },
  methods: {
    initSlide() {
      // swiper 관련 설정
      this.mainSlide = new Swiper(".main-container", {
        clickable: true,
        slidesPerView: 1,
        loop: true,
        loopAdditionalSlides: 1,
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
      });
    },
    pauseBanner() {
      console.log("this.mainSlide:", this.mainSlide);
    },
    bannerAutoAction(chk) {
      console.log(chk);
      let bannerStart = document.querySelector('.btn-banner-start')
      let bannerStop = document.querySelector('.btn-banner-stop')
      if (chk) {
        this.mainSlide.autoplay.start()
        bannerStart.classList.add('skip')
        bannerStop.classList.remove('skip')
      } else {
        this.mainSlide.autoplay.stop()
        bannerStart.classList.remove('skip')
        bannerStop.classList.add('skip')
      }
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
  .swiper-slide {
    display: inline-block;
    display: block;
    line-height: 0;
    img {
      width: 100%;
      height: inherit;
      cursor: pointer;
    }
  }
}
.swiper-button-prev {display: none}
.swiper-button-next {display: none}
.banner-pager-box{
  @include clearfix();
  position: absolute;
  bottom: 12px;
  right: 16px;
  z-index: 100;
  button{
    float: left;
    appearance: none;
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 4px 0 0;
    padding: 0;
    border: 0;
    border-radius: 50%;
    text-shadow: none;
    background: rgba(32, 36, 41, 0.8);
    cursor: pointer;
    &.skip{
      overflow: hidden;
      position: absolute;
      left: -9999px;
      width: 1px;
      height: 1px;
      font-size: 0;
      line-height: 0;
    }
    &.btn-banner-start{
      background: url(~@/assets/images/ic-stop-r@3x.png) no-repeat center rgba(32, 36, 41, 0.8);
      background-size: 50%;
    }
    &.btn-banner-stop{
      background: url(~@/assets/images/ic-play-r@3x.png) no-repeat center rgba(32, 36, 41, 0.8);
      background-size: 50%;
    }
  }
  .swiper-pagination{
    float: left;
    position: static;
    width: auto;
    padding: 0;
    transform: translateX(0);
    background-color: rgba(32, 36, 41, 0.8);
    padding: 6px 10px 7px;
    font-size: 11px;
    color: #fff;
    border-radius:12px;
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
  .main-banner-container {
    .swiper-container {
      overflow: visible;
      width: 83%;
      margin: 0 auto;
      &::before {
        content: "";
        display: block;
        width: 1000%;
        position: absolute;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10;
        left: -1000%;
      }
      &::after {
        content: "";
        display: block;
        width: 1000%;
        position: absolute;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1;
        right: -1000%;
      }
    }
  }
  .banner-pager-box {
    button {
      width: 38px;
      height: 38px;
    }
    .swiper-pagination {
      padding: 11.5px 21.5px 12.5px;
      border-radius: 30px;
      font-size: 14px;
      margin: 0 8px 8px 0;
    }
  }
  .swiper-button-next:after, .swiper-container-rtl .swiper-button-prev:after {
    display: none;
  }
  .swiper-button-prev:after, .swiper-container-rtl .swiper-button-next:after {
    display: none;
  }
  .swiper-container {
    .swiper-button-prev {
      display: block;
      appearance: none;
      position: absolute;
      top: 50%;
      left: -30px;
      width: 62px;
      height: 62px;
      // border: none;
      border-radius: 0;
      text-shadow: none;
      background: url(~@/assets/images/ic-arrow-l@3x.png) no-repeat center/140%;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 900;
    }
    .swiper-button-next {
      display: block;
      appearance: none;
      position: absolute;
      top: 50%;
      right: -30px;
      width: 62px;
      height: 62px;
      margin-top: 0;
      border: none;
      border-radius: 0;
      text-shadow: none;
      background: url(~@/assets/images/ic-arrow-r@3x.png) no-repeat center/140%;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 900;
    }
  }
}
@media screen and (min-width: map-get($breakpoints, "large")) {
  .main-banner-container {
    .main-container {
      width: 1000px;
    }
  }
  .main-banner-box {
    .pagination-box {
      .swiper-pagination {
        padding: 11px 21px 12px;
        border-radius: 30px;
        font-size: 14px;
      }
    }
  }
}
</style>