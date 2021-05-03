<template>
  <div class="market-list-wrap">
    <!-- 여기에 이제 스토어 신상 동그라미 스와이퍼 들어가면됌 -->
    <div class="market-list-container swiper-container">
      <nav class="market-store swiper-wrapper">
        <a href="#" class="swiper-slide active">
          <div class="store-thum active hide-text">상품 이미지</div>
          <div class="store-name active">
            <p class="active ellipsis">업타운홀릭</p>
          </div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name">
            <p class="ellipsis">럽앤썸</p>
          </div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name">
            <p class="ellipsis">프렌치오브</p>
          </div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name">
            <p class="ellipsis">업타운홀릭홀릭업타운홀릭</p>
          </div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name">
            <p class="ellipsis">업타운홀릭홀릭업타운홀릭</p>
          </div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name">
            <p class="ellipsis">업타운홀릭홀릭업타운홀릭</p>
          </div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name">
            <p class="ellipsis">업타운홀릭홀릭업타운홀릭</p>
          </div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name">
            <p class="ellipsis">업타운홀릭홀릭업타운홀릭</p>
          </div>
        </a>
        <div class="swiper-slide store-slide-more">
          <a href="#" class="swiper-more">
            <div class="store-thum-more hide-text"></div>
            <div class="store-name-more"><p>찜한 스토어 전체보기</p></div>
          </a>
        </div>
      </nav>
    </div>

    <div class="market-store-list">
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
        sellorName="브랜디"
        orderBadge="1"
        :isOneDayShipping="true"
        storeName="스토어네임"
        productName="플리츠 스커트"
        :discountRate="10"
        :price="50000"
      />
      <ProductNormal
        sellorName="브랜디"
        orderBadge="3"
        :isOneDayShipping="true"
        storeName="스토어네임"
        productName="플리츠 스커트"
        :discountRate="10"
        :price="50000"
      />
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
        sellorName="브랜디"
        orderBadge="0"
        :isOneDayShipping="true"
        storeName="스토어네임"
        productName="플리츠 스커트"
        :discountRate="10"
        :price="50000"
      />
      <div class="product-more">
        <a href="#">
          <div class="more-arrow"></div>
          <p class="more-text">신상더보기</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ProductNormal from "./ProductNormal";
export default {
  name: "MarketList",
  components: {
    ProductNormal,
  },
  data() {
    return {
      storeSlide: "",
    };
  },
  methods: {
    marketSlide() {
      this.storeSlide = new Swiper(".market-list-container", {
        clickable: "true",
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: "true",
        grabCursor: "true",
      });
    },
  },
  mounted() {
    this.marketSlide();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.market-list-container {
  padding: 0 0px 0 18px;
  border-bottom: 1px solid#f2f4f7;
}
.swiper-slide {
  display: block;
  width: 64px;
  margin-right: 14px;
  .store-thum {
    background: url(~@/assets/images/ilang_profile.jpg) no-repeat;
    background-size: cover;
    background-position: top center;
    padding-bottom: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.02);
    border-radius: 50%;
    margin-bottom: 10px;
    display: inline-block;
    box-shadow: 0 0 0 1px #ebeef2 inset;
    &.active {
      // border: 3px solid #ff204b;
      box-shadow: 0 0 0 3px #ff204b inset;
    }
  }
  .store-name {
    white-space: nowrap;
    text-overflow: ellipsis;
    p {
      padding-bottom: 10px;
      text-align: center;
      margin-top: 10px;
      font-size: 12px;
      white-space: nowrap;
      text-overflow: ellipsis;
      &.active {
        color: #ff204b;
        border-bottom: solid 3px #ff204b;
        font-weight: bold;
      }
    }
  }
}

.market-store {
  .store-slide-more {
    width: 64px;
    padding-top: 20px;
  }
  .swiper-slide {
    .store-thum-more {
      margin: 0 auto;
      background: url(~@/assets/images/btn-more@3x.png) no-repeat;
      background-size: cover;
      background-position: top center;
      width: 26px;
      height: 26px;
      background-color: rgba(0, 0, 0, 0.02);
      margin-bottom: 10px;
    }
    .store-name-more {
      padding-bottom: 10px;
      text-align: center;
      margin-top: 10px;
      font-size: 12px;
      color: #ff204b;
    }
  }
}

// 하단에 클릭하면 나오는 거
.market-store-list {
  overflow-x: auto;
  overflow-y: hidden;
  background: #f8f9fb;
  border-bottom: 8px solid#f2f4f7;
  //display: block;
  padding: 18px 0 18px 10px;
  white-space: nowrap;
  // background-color: #f8f9fb;
  .product-normal {
    width: 43%;
    display: inline-block;
    vertical-align: top;
    padding: 0 4px 3px;
    .thumb {
      .badge-idx {
        display: none;
      }
    }
  }
  .product-more {
    display: inline-block;
    width: 64px;
    text-align: center;
    margin-left: 26px;
    margin: 15% 26px 15% 17px;
    a {
      .more-arrow {
        background: url(~@/assets/images/btn-more-gray1@3x.png) no-repeat center;
        background-size: cover;
        width: 64px;
        height: 64px;
      }
      .more-text {
        margin-top: 16px;
        font-size: 11px;
        color: #808893;
      }
    }
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
  .market-list-container {
    padding: 0 20px 0 20px;
  }
  .market-list-container {
    padding: 0;
  }
  //찜한 스토어 전체보기 아이콘
  .market-store {
    position: relative;
    border-bottom: 1px solid#ebeef2;
    padding-right: 170px;
    box-sizing: border-box;
    margin-bottom: 30px;
    .swiper-slide {
      width: calc((100% / 8) - 21px);
      margin-left: 24px;
      p {
        font-size: 18px;
      }
    }
    .store-slide-more {
      border-left: 1px solid #ebeef2;
      position: absolute;
      right: 20px;
      top: -11px;
      background: #fff;
      width: auto;
      .swiper-more {
        .store-thum-more {
          //핑크 화살표 이미지
          display: none;
        }
        .store-name-more {
          p {
            width: 88px;
            height: 44px;
            margin: 20px 0 10px 31px;
            font-size: 18px;
            font-weight: bold;
            font-style: normal;
            line-height: 1.28;
            text-align: center;
            color: #444444;

            &::before {
              content: "";
              background: url(~@/assets/images/path-2@3x.png) no-repeat
                center/cover;
              width: 6px;
              height: 10px;
              position: absolute;
              right: 40px;
              bottom: 40px;
            }
          }
        }
      }
    }
  }

  //마켓 프로덕트 리스트
  .market-store-list {
    display: flex;
    flex-wrap: wrap;
    overflow-x: auto;
    overflow-y: hidden;
    overflow: visible;
    margin: 0;
    padding: 0;
    margin: 0 -8px;
    background: #fff;
    border: none;
    padding: 0 20px 0 20px;
    .product-normal {
      height: 100%;
      width: calc(100% / 4);
      padding: 0 8px 30px;
    }
    .product-more {
      display: none;
    }
  }
}
//large
@media screen and (min-width: map-get($breakpoints, "large")) {
}
</style>
