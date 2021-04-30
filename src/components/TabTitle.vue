<template>
  <div class="title-nav clearfix">
    <h2 class="title-nav-tit">TODAY 베스트</h2>
    <ul class="title-nav-box">
      <li class="title-nav-txt active">
        <a href="javascript:void(0);">전체</a>
      </li>
      <li class="title-nav-txt"><a href="#">쇼핑몰마켓</a></li>
      <li class="title-nav-txt"><a href="#">브랜드</a></li>
      <li class="title-nav-txt"><a href="#">뷰티</a></li>
    </ul>
    <!-- tabBar -->
    <div class="category-filter-container swiper-container">
      <div class="category-filter-list swiper-wrapper">
        <div class="active swiper-slide slide-category">
          <a href="#">전체</a>
        </div>
        <div class="swiper-slide-next swiper-slide slide-category">
          <a class="active" href="#">아우터</a>
        </div>
        <div class="swiper-slide slide-category">
          <a href="#">상의</a>
        </div>
        <div class="swiper-slide slide-category">
          <a href="#">바지</a>
        </div>
        <div class="swiper-slide slide-category">
          <a href="#">원피스</a>
        </div>
        <div class="swiper-slide slide-category">
          <a href="#">스커트</a>
        </div>
        <div class="swiper-slide slide-category">
          <a href="#">신발</a>
        </div>
        <div class="swiper-slide slide-category">
          <a href="#">가방</a>
        </div>
        <div class="swiper-slide slide-category">
          <a href="#">주얼리</a>
        </div>
        <div class="swiper-slide slide-category">
          <a href="#">잡화</a>
        </div>
        <div class="swiper-slide slide-category">
          <a href="#">라이프웨어</a>
        </div>
      </div>
    </div>
    <!-- 이거 통째로 가져오기 -->
    <article class="new-today product-list">
      <!-- <h5>ㅜ_ㅜ투데이베스트가 아니라 겨울 필수템! 아우터 신상</h5> -->
      <div class="today-list">
        <ProductNormal
          sellorName="브랜디"
          orderBadge="1"
          :isOneDayShipping="true"
          storeName="스토어네임"
          productName="플리츠 스커트"
          :discountRate="10"
          :price="50000"
        />
        <ProductNormal
          sellorName="하이버"
          orderBadge="2"
          :isOneDayShipping="false"
          storeName="브랜디"
          productName="[원조/빅사이즈] 큰달과 레터링 오버핏"
          :discountRate="15"
          :price="80000"
        />
        <ProductNormal
          sellorName="트렌디"
          orderBadge="3"
          :isOneDayShipping="true"
          storeName="브랜디"
          productName="데디 퍼프 루즈핏 반팔"
          :discountRate="15"
          :price="80000"
        />
        <ProductNormal
          sellorName="하이버"
          orderBadge="4"
          :isOneDayShipping="true"
          storeName="브랜디"
          productName="봄 니트_프렌치오브"
          :discountRate="15"
          :price="80000"
        />
        <ProductNormal
          sellorName="브랜디"
          orderBadge="5"
          :isOneDayShipping="true"
          storeName="브랜디"
          productName="[세탁후그대로!] 퀄리티 좋은 라운드 반팔"
          :discountRate="15"
          :price="80000"
        />
        <ProductNormal
          sellorName="트렌디"
          orderBadge="6"
          :isOneDayShipping="true"
          storeName="브랜디"
          productName="조커팬츠"
          :discountRate="15"
          :price="80000"
        />
        <ProductNormal
          sellorName="트렌디"
          orderBadge="7"
          :isOneDayShipping="false"
          storeName="브랜디"
          productName="끈나시 브이넥 블라우스 _브링잇"
          :discountRate="15"
          :price="80000"
        />
        <ProductNormal
          sellorName="트렌디"
          orderBadge="8"
          :isOneDayShipping="true"
          storeName="브랜디"
          productName="둥근코 캔버스 스니커즈 뮬 블로퍼 2cm"
          :discountRate="15"
          :price="80000"
        />
      </div>
      <ButtonCommon />
    </article>
  </div>
</template>

<script>
import ProductNormal from "./ProductNormal";
import ButtonCommon from "./ButtonCommon";
export default {
  name: "Tabtitle",
  components: {
    ProductNormal,
    ButtonCommon,
  },
  data() {
    return {
      tabTitleSlide: "",
    };
  },
  methods: {
    tabSlide() {
      this.tabTitleSlide = new Swiper(".category-filter-container", {
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 1,
        loop: false,
        pagination: false,
        resistance: false,
        slideToClickedSlide: true,
      });
    },
  },
  mounted() {
    this.tabSlide();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 타이틀 네브
.title-nav {
  // margin: 0 -4px;
  .title-nav-tit {
    width: 100%;
    margin: 0 0 16px 0;
    font-size: 20px;
    text-align: center;
    word-break: break-word;
  }
  .title-nav-box {
    margin-bottom: 12px;
    text-align: center;
    .title-nav-txt {
      display: inline-block;
      font-size: 14px;
      color: #808893;
      a {
        padding: 0px 8px 10px 8px;
        font-size: 14px;
      }
      &.active {
        a {
          border-bottom: 3px solid #ff204b;
          font-weight: bold;
          color: #ff204b;
        }
      }
    }
  }
}
// 리스트 스와이퍼
.category-filter-container {
  background: #f8f9fb;
  .category-filter-list {
    padding: 7px 16px;
    .slide-category {
      width: auto;
      font-size: 13px;
      line-height: 13px;
      &:nth-last-child() {
        margin-right: 30px;
      }
      a {
        display: block;
        text-align: center;
        padding: 10px 13px;
        color: #acb3bd;
        &.active {
          border-radius: 18px;
          color: #fff;
          background: #ff204b;
        }
      }
    }
    .swiper-slide-active {
      //background: #ff204b;
      //border-radius: 18px;
      a {
        // display: inline-block;
        //color: #fff;
        //text-align: center;
      }
    }
  }
}
// today베스트
.new-today {
  padding: 0 18px 0 18px;
  margin-top: 16px;
  .today-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -4px;
    .product-normal {
      height: 100%;
      width: calc(100% / 2);
    }
  }
}

@media screen and (min-width: map-get($breakpoints, "medium")) {
  .title-nav {
    .title-nav-tit {
      float: left;
      text-align: left;
      font-size: 32px;
      width: auto;
    }
    .title-nav-box {
      float: right;
      text-align: right;
      margin-top: 8px;
      .title-nav-txt {
        font-size: 17px;
        line-height: 17px;
        margin: 0 8px 0 0;
        &:nth-last-child() {
          margin: 0;
        }
      }
    }
  }
  .title-nav-list {
    display: flex;
    flex-wrap: wrap;
    .product-normal {
      height: 100%;
      width: calc(100% / 4);
    }
  }
}
//today베스트
.main-today {
  padding: 0 20px 0 20px;
}
.today-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
  .product-normal {
    height: 100%;
    width: calc(100% / 4);
  }
}

//large
@media screen and (min-width: map-get($breakpoints, "large")) {
}
</style>
