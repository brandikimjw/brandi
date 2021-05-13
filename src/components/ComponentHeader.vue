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
        <nav class="nav-mine">
          <a href="#" class="btn-cart hide-text">장바구니</a>
          <a href="#" class="btn-favor"></a>
          <a href="#" class="btn-mypage"></a>
        </nav>
      </div>
    </div>
    <div class="header-nav-wrap product-list">
      <div class="header-nav-container swiper-container">
        <nav class="swiper-wrapper">
          <a href="#" class="nav-swiper-slide line swiper-slide">홈</a>
          <a href="#" class="nav-swiper-slide swiper-slide">혜택존</a>
          <a href="#" class="nav-swiper-slide swiper-slide">베스트</a>
          <router-link to="/newpage" class="nav-swiper-slide swiper-slide"
            >신상</router-link
          >
          <router-link to="/timedeal" class="nav-swiper-slide swiper-slide"
            >특가</router-link
          >
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
  name: "Header",
  data() {
    return {
      navSlide: "",
      isMobile: '',
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
    navigtationSlide() {
      this.navSlide = new Swiper(".header-nav-container", {
        clickable: true,
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        grabCursor: true,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        watchOverflow: true,
      });
    },
  },
  watch: {
    isMobile(newVal) {
      if (newVal) {
        this.navigtationSlide();
      } else {
        this.navSlide.destroy();
      }
    },
  },
  created() {
    this.setScreenSize();
  },
  mounted() {
    this.navigtationSlide();
    window.addEventListener("resize", this.setScreenSize);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #ebeef2;
  &.fixed {
    .header-nav-wrap {
      position: relative;
      .header-nav-container {
        position: fixed;
        left:50%;
        top:0;
        width:100%;
        transform:translate(-50%, 0);
      }
    }
  }
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
/deep/.header-nav-container {
  margin: 0 auto;
  overflow: hidden;
  z-index: 1;
  .swiper-wrapper {
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    > a {
      width: auto;
      display: block;
      padding: 14px 10px;
      color: #202429;
      font-size: 15px;
      font-weight: bold;
      line-height: 21px;
      word-break: keep-all;
      text-align: center;

      &.line {
        display: inline-block;
        border-bottom: 3px solid #202429;
      }
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
  .header-nav-container {
    padding: 0 12px 0 12px;
    height: inherit;
    .swiper-wrapper {
      .swiper-slide {
        padding: 18px 8px;
        font-size: 18px;
        line-height: 24px;

        &:hover {
          border-bottom: 3px solid #202429;
        }
      }
    }
  }
}
</style>