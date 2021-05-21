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
            <a href="#" class="btn-cart">
              <span class="count">99+</span>
            </a>
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
    border-bottom: 1px solid #ebeef2;
    .artc-continer {
      flex-wrap:nowrap;
      justify-content:space-between;
      align-items:center;
    }
    .logo {
      width: 116px;
      height: 27px;
      > a {
        display: block;
      }
    }
    .form-search {
      display: flex;
      flex: wrap;
      .form-cont {
        // display: flex;
        // flex: wrap;
        input {
          display: none;
        }
        .button-search {
          display: inline-block;
          background: url(~@/assets/images/ic-search-s@3x.png) no-repeat;
          width: 28px;
          height: 28px;
          background-size: cover;
          position: absolute;
          right: 60px; top: 14px;
        }
      }
    }
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
      width: 116px;
      height: 27px;
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
    justify-content:flex-end;
    display: none;
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
  }

  .btn-cart,
  .btn-favor,
  .btn-mypage{
    display:inline-block;
    position:relative;
    width:28px;
    height:28px;
    margin:-10px 0;
    background-repeat:no-repeat;
    background-position:top center;
    background-size:28px 28px;
    overflow:hidden;
    text-indent:-999px;
  }
  .nav-mine {
    position: relative;
    .btn-cart{
      display: inline-block;
      background:url(~@/assets/images/ic-cart-s@3x.png) no-repeat;
      background-size: cover;
      position: absolute;
      right: 4px;
      bottom: -2px;
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

//헤더 밑에 메뉴
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
  .header {
    .artc-header {
      .logo {
          width: 180px;
          height: 42px;
        .link {
          width: 180px;
          height: 42px;
          background-size:contain;
        }
      }
      .form-search {
        margin: 0;
        padding: 0;
        .form-cont {
          width: 304px;
          display: flex;
          margin-left: 45%;
          min-height: 40px;
          margin-right: 40px;
          border-bottom: 2px solid #202429;
          position: relative;
          .button-search {
            position: absolute;
            right: 0%;
            top: 0%;
            width: 32px;
            height: 32px;
          }
          input {
            display: block;
            border: none;
            width: 270px;
            line-height: 20px;
          }
        }
        .nav-mine {
          .btn-cart {display: block;}
          .btn-favor {display: block;}
          .btn-mypage {display: block;}
        }
      }

      .artc-continer {
        padding: 31px 20px;
        .nav-mine {
          flex: 0 0 auto;
          width: 180px;
          height: 50px;
          margin-right: 0px;
          vertical-align: middle;
          line-height: 50px;

          .btn-cart{
            position: static;
            width:40px;
            height:40px;
            text-indent: -999px;
            margin-right: 20px;

            .count {
              display: inline-block;
              font-size: 8px;
              color: #fff;
              background-color: #ff365e;
              position: absolute;
              left: 20px; top: 3px;
              text-indent: 0;
              line-height: 12px;
              padding: 2px 4px 2px 4px;
              border-radius: 8px;
            }
          }
          .btn-favor{
            display:inline-block;
            background: url(~@/assets/images/ic-favorite@3x.png) no-repeat;
            background-repeat:no-repeat;
            background-position:top center;
            background-size:40px 40px;
            width:40px;
            height:40px;
            margin-right: 20px;
          }
          .btn-mypage{
            display:inline-block;
            background: url(~@/assets/images/ic-my@3x.png) no-repeat;
            background-repeat:no-repeat;
            background-position:top center;
            background-size:40px 40px;
            width:40px;
            height:40px;
            margin-right: 0px;

            &::after {
              display: block;
              content: '';
              width: 20px;
              height: 13px;
              background: url(~@/assets/images/ic-off@3x.png) no-repeat;
              background-size: cover;
            }
          }
        }
      }
    }
  }
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