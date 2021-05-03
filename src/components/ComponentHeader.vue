<template>
  <header class="header">
    <div class="artc-header">
      <div class="artc-continer">
        <div class="logo hide-text"><a href="#">브랜디</a></div>
        <form method="get" action="/search" class="form-search">
          <div class="form-cont">
            <input
              type="search"
              aria-label="검색어 입력란"
              class="input-search"
            />
            <button type="submit" class="button-search hide-text">검색</button>
            <input type="hidden" name="r" value="/" />
          </div>
        </form>
      </div>
    </div>
    <div class="nav product-list">
      <div class="nav-swiper-container swiper-container">
        <nav class="swiper-wrapper">
          <a href="#" class="nav-swiper-slide active swiper-slide">홈</a>
          <a href="#" class="nav-swiper-slide swiper-slide">혜택존</a>
          <a href="#" class="nav-swiper-slide swiper-slide">베스트</a>
          <router-link to="/newpage" class="nav-swiper-slide swiper-slide"
            >신상</router-link
          >
          <a href="#" class="nav-swiper-slide swiper-slide">특가</a>
          <a href="#" class="nav-swiper-slide swiper-slide trend">트렌드</a>
          <a href="#" class="nav-swiper-slide swiper-slide brand">브랜드</a>
          <a href="#" class="nav-swiper-slide swiper-slide beauty">뷰티</a>
          <a href="#" class="nav-swiper-slide swiper-slide">스토어</a>
        </nav>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination"></div> -->
      </div>
    </div>
  </header>
</template>

<script>
// import MainSwiper from "./MainSwiper";
export default {
  data() {
    return {
      navSlide: "",
    };
  },
  methods: {
    navigtationSlide() {
      this.navSlide = new Swiper(".nav-swiper-container", {
        clickable: true,
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        grabCursor: true,
      });
    },
  },
  mounted() {
    this.navigtationSlide();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// scss > components > _header.scss에 옮기고 import 시키키
// 웹화면으로 봤을때 스와이퍼 제거되는거
// 옆으로 드래그 했을때 다시 원상태로 돌아오지 않고 멈춰있게 하기
.header {
  border-bottom: 1px solid #ebeef2;
}
.artc-header {
  .artc-continer {
    display: flex;
    padding: 11px 16px 11px 16px;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ebeef2;
    .logo {
      width: 99px;
      height: 16px;
      background: url(~@/assets/images/14-ic-01-logo-sign-ic-logo-branditxt@3x.png)
        no-repeat top;
      background-size: contain;
      overflow: hidden;
      line-height: 27px;
      a {
        display: block;
      }
    }
  }
  .form-search {
    .form-cont {
      .input-search {
        // width: calc(100% - 63px);
        height: 48px;
        width: 48px;
        background-color: transparent;
        border: 0;
        border-radius: 0;
        appearance: none;
        font-size: 16px;
        vertical-align: bottom;
        opacity: 0;
      }
      .button-search {
        width: 28px;
        height: 28px;
        background: url(~@/assets/images/14-ic-02-header-n-a-action-bar-icon-search-nor@3x.png)
          no-repeat top/cover;
      }
    }
  }
}
/deep/.nav-swiper-container {
  margin: 0 auto;
  overflow: hidden;
  z-index: 1;
  .swiper-wrapper {
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .nav-swiper-slide {
      width: auto;
      display: block;
      padding: 14px 10px;
      color: #202429;
      font-size: 15px;
      font-weight: bold;
      line-height: 21px;
      word-break: keep-all;
      text-align: center;
      // &:hover {
      //   border-bottom: 2px solid #222;
      // }
      // &.active {
      //   &::before {
      //     padding: 14px 10px;
      //     color: #202429;
      //     font-size: 15px;
      //     font-weight: bold;
      //     line-height: 21px;
      //     display: none;
      //     position: absolute;
      //     left: 7px;
      //     right: 7px;
      //     bottom: 0;
      //     height: 2px;
      //     background-color: #000;
      //   }
      // }
    }
    .trend {
      color: #ff4569 !important;
    }
    .brand {
      color: #cea375 !important;
    }
    .beauty {
      color: #dea6a6 !important;
    }
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
  .nav-swiper-container {
    font-size: 14px;
  }
}
</style>