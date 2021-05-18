<template>
  <header class="header">
    <div class="artc-header">
        <div class="artc-continer product-list">
          <!-- 로고이미지 -->
          <h1 class="logo hide-text"><a href="#" class="link">브랜디</a></h1>
          <!-- form 버튼,인풋 -->
          <form method="get" action="/search" class="form-search">
            <div class="form-cont">
              <input type="search" aria-label="검색어 입력란" class="input-search" />
              <button type="submit" class="button-search hide-text">검색</button>
              <input type="hidden" name="r" value="/" />
            </div>
          </form>
          <!-- //form 버튼,인풋 -->
          <!-- 장바구니/짬하기/마이페이지 -->
          <nav class="nav-mine">
            <a href="#" class="btn-cart hide-text"><small class="count">장바구니</small></a>
            <a href="#" class="btn-favor"></a>
            <a href="#" class="btn-mypage"></a>
          </nav>
        </div>
    </div>
    <!-- 하단 카테고리 메뉴 -->
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
export default {
  name: "Header",
  components: {
  },
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
  .artc-header {
    .artc-continer {
      display:flex;
      padding:17px 16px 16px;
      flex-wrap:nowrap;
      justify-content:space-between;
      align-items:center;
    }
    .logo {
      width: 116px;
      height: 27px;
    }
    // Form
    .form-search {
      margin:0;
      padding:0;

      .form-cont {
        border-bottom:2px solid #202429;
      }

      .inpt-search{
        height:28px;
        opacity: 1;
      }

      .btn-search {
        width:28px;
        height:28px;
        margin-top:0;
      }
    }

    // nav
    .nav-mine{
      //display:none;
    }
  }

  .artc-header {
    position: relative;
    border-bottom:1px solid #ebeef2;
    z-index: 22;
  }

  .artc-continer {
    display:flex;
    padding:17px 16px 16px;
    flex-wrap:nowrap;
    justify-content:space-between;
    align-items:center;
  }

  .logo {
    flex:0 0 auto;
    margin:0;
    .link{
      display:block;
      width:116px;
      height:27px;
      background: url(~@/assets/images/ic-brandi-symbolrogo-l@3x.png) no-repeat 50%;
      background-size: cover;
      overflow:hidden;
      text-indent:-999px;
    }
  }

  .form-search {
    display:flex;
    flex:1 1 auto;
    margin:-10px 0;
    padding:0 2px 0 12px;
    justify-content:space-between;
    display: none;

    .form-cont{
      display:flex;
      flex:1 1 304px;
      justify-content:space-between;
    }
  }

  .inpt-search {
    width:calc(100% - 63px);
    height:48px;
    background-color:transparent;
    border:0;
    border-radius:0;
    appearance:none;
    font-size:16px;
    vertical-align:bottom;
    opacity: 0;
    &::-ms-clear,
    &::-ms-reveal{
      display:none;
      width:0;
      height:0;
    }
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration{
      display:none;
    }
  }

  .btn-search{
    position:relative;
    width:48px;
    height:48px;
    margin:0;
    margin-top:2px;
    padding:0;
    border:0;
    background:transparent url(~@/assets/images/ic-top-ic-a-action-bar-icon-search-nor@3x.png) no-repeat right 50%;
    background-size:28px 28px;
    overflow:hidden;
    text-indent:-999px;
    vertical-align:bottom;
    cursor:pointer;
  }

  .nav-mine{
    flex:0 0 auto;
    margin-right:-10px;
  }
  .btn-cart,
  .btn-favor,
  .btn-mypage{
    display:block;
    position:relative;
    width:48px;
    height:48px;
    margin:-10px 0;
    background-repeat:no-repeat;
    background-position:50%;
    background-size:28px 28px;
    overflow:hidden;
    text-indent:-999px;
  }

  .btn-cart{
    background:url(~@/assets/images/ic-top-ic-a-action-bar-icon-search-nor@3x.png) no-repeat;
    .count{
      position:absolute;
      right:10px;
      top:10px;
      min-width:14px;
      height:12px;
      padding:0 4px;
      border-radius:6px;
      font-size:8px;
      line-height:12px;
      text-indent:0;
      text-align:center;
      text-indent: -999px;
    }
  }
  .btn-favor{
    display:none;
    background: url(~@/assets/images/ic-favorite@3x.png) no-repeat;
  }
  .btn-mypage{
    display:none;
    background: url(~@/assets/images/ic-my@3x.png) no-repeat;
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