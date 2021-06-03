<template>
  <div id="adaptive" class="main-banner">
    <div ref="mainBanner" class="swiper-container">
      <ul class="swiper-wrapper">
        <li class="swiper-slide" v-for="(item, index) in mainBannerList" :key="index">
          <img :src="item.image_url" :alt="`배너 슬라이드 ${index+1}`">
        </li>
      </ul>
      <!-- 배너 버튼 영역 -->
      <button type="button" class="swiper-button-prev" aria-label="이전 슬라이드 이동"></button>
      <button type="button" class="swiper-button-next" aria-label="다음 슬라이드 이동"></button>
      <!-- 매인 베너 paging 영역 -->
      <div class="banner-pager-box">
        <button type="button" @click="bannerAutoAction(true)" class="btn-banner-start skip" aria-label="배너 시작"></button>
        <button type="button" @click="bannerAutoAction(false)" class="btn-banner-stop" aria-label="배너 일시정지"></button>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainBanner",
  data() {
    return {
      cnt : 0,
      slideDisplay : 0,
    };
  },
  methods : {
    initSlider : function () {
      // 슬라이더 실행
      let that = this
      let displayCount = 1
      // 기존 배너 슬라이드 설정
      let paginationOption = {
          el : '#adaptive .swiper-pagination',
          type : 'fraction',
          renderFraction : function (currentClass, totalClass) {
            return '<div class="short-type"><span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span></div>'
          },
      }
      this.mainBanner = new Swiper('#adaptive .swiper-container', {
        slidesPerView : displayCount,
        autoHeight : true,
        loop : true,
        loopAdditionalSlides : 1,
        a11y : false,
        watchOverflow : true,
        centeredSlides : true,
        allowTouchMove : false,
        speed : 600,
        autoplay : {
          delay : 3000,
          disableOnInteraction : false,
        },
        navigation : {
          prevEl : '#adaptive .swiper-button-prev',
          nextEl : '#adaptive .swiper-button-next',
        },
        pagination : paginationOption,
        breakpoints : {
          768 : {
            slidesPerView : 1,
            allowTouchMove : true,
            // 추후 모바일에서 불릿 타입이 아닌 텍스트 타입의 페이징을 사용시 아래의 내용을 주석해제하면 됨
            pagination : {
              type : 'fraction',
              renderFraction : function (currentClass, totalClass) {
                return '<div class="short-type"><span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span></div>'
              },
            },
          },
        },
        on : {
          init : function () {
            that.setBanner()
            that.slideDisplay = displayCount
          },
        },
      })
    },
    setBanner : function () {
      this.bindClickEvent()
    },
    bindClickEvent : function () {
      let that = this
      let mainBannerList = this.mainBannerList
    },
    bannerAutoAction : function (chk) {
      let bannerStart = document.querySelector('.banner-pager-box .btn-banner-start')
      let bannerStop = document.querySelector('.banner-pager-box .btn-banner-stop')
      if (chk) {
        this.mainBanner.autoplay.start()
        bannerStart.classList.add('skip')
        bannerStop.classList.remove('skip')
      } else {
        this.mainBanner.autoplay.stop()
        bannerStart.classList.remove('skip')
        bannerStop.classList.add('skip')
      }
    },
  },
  mounted() {
    const vm = this
    this.initSlider()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#adaptive {
  position: relative;
  z-index: 2;
  background-color:#f5f5f5;
  overflow: hidden;
  opacity: 0;
  &.loaded {
    opacity: 1;
  }
}
.swiper-wrapper {
  transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1.000);
  .swiper-slide {
    text-align: center;
    img {
      width: 100%;
      height: auto;
      margin-top: 0;
      vertical-align: top;
      cursor: pointer;
    }
  }
}
.swiper-pagination {
    @include clearfix();
    bottom: 15px;
    left: 0;
    width: 100%;
    padding: 0 15px;
    text-align: right;
    .swiper-pagination-bullet {
      overflow: hidden;
      display: inline-block;
      width: 8px;
      height: 8px;
      margin-left: 8px;
      font-size: 0;
      text-indent: -9999em;
      border-radius: 50%;
      background: #222;
      opacity: 1;
      transition: all 0.1s linear 0s;
      &:first-child {
        margin-left: 0;
      }
      &.swiper-pagination-bullet-active {
        background: #ff204b;
      }
    }
    .short-type{
      float:right;
      min-width: 58px;
      padding:3px 4px 3px;
      border-radius:12px;
      background-color:rgba(32, 36, 41, 0.8);
      color:#fff;
      font-size:12px;
      text-align:center;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    appearance: none;
    display: none;
    position: absolute;
    top: 50%;
    width: 32px;
    height: 32px;
    margin-top: 0;
    border: none;
    border-radius: 0;
    text-shadow: none;
    background: url('#{$imgUrl}/controls.png') no-repeat;
    transform: translateY(-50%);
    cursor: pointer;
    opacity: 0.5;
    z-index: 99;
    &:hover {
      opacity: 1;
    }
  }
  .swiper-button {
    &-prev {
      left: 10px;
      background-position: 0 0;
    }
    &-next {
      right: 10px;
      background-position: -32px 0;
    }
  }
  &.main-banner{
    margin-bottom: 50px;
    .swiper-container{
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
            //background: url('#{$imgUrl}/ic-play-m@3x.png') no-repeat center rgba(32, 36, 41, 0.8);
            background-size: 50%;
          }
          &.btn-banner-stop{
            //background: url('#{$imgUrl}/ic-stop-m@3x.png') no-repeat center rgba(32, 36, 41, 0.8);
            background-size: 50%;
          }
        }
        .swiper-pagination{
          float: left;
          position: static;
          width: auto;
          padding: 0;
          transform: translateX(0);
          .short-type{
            min-width: auto;
            float: none;
            padding: 6px 10px 7px;
            font-size: 11px;
            line-height: 1;
          }
        }
      }
    }
  }