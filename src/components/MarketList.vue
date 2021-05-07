<template>
  <div class="market-list-wrap">
    <!-- 여기에 이제 스토어 신상 동그라미 스와이퍼 들어가면됌 -->
    <div class="market-list-container swiper-container">
      <nav class="market-store swiper-wrapper">
        <a href="#" class="swiper-slide active">
          <div class="store-thum active hide-text">상품 이미지</div>
          <div class="store-name active">
            <p class="active">업타운홀릭</p>
          </div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name">
            <p>럽앤썸</p>
          </div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name">
            <p>프렌치오브</p>
          </div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name">
            <p>업타운홀릭홀릭업타운홀릭</p>
          </div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name">
            <p>업타운홀릭홀릭업타운홀릭</p>
          </div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name">
            <p>업타운홀릭홀릭업타운홀릭</p>
          </div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name">
            <p>업타운홀릭홀릭업타운홀릭</p>
          </div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name">
            <p>업타운홀릭홀릭업타운홀릭</p>
          </div>
        </a>
        <div class="swiper-slide store-slide-more">
          <a href="#" class="swiper-more">
            <div class="store-thum-more hide-text"></div>
            <p class="store-name-more">찜한 스토어 전체보기</p>
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
      slide: null,
      isMobile: null,
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
    marketSlide() {
      this.storeSlide = new Swiper(".market-list-container", {
        clickable: true,
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        grabCursor: true,
        slidesOffsetBefore: 16,
        watchOverflow: true,
      });
    },
  },
  watch: {
    isMobile(newVal) {
      if (newVal) {
        this.marketSlide();
      } else {
        this.storeSlide.destroy();
      }
    },
  },
  created() {
    this.setScreenSize();
    this.marketSlide();
    window.addEventListener("resize", this.setScreenSize);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
      box-shadow: 0 0 0 3px #ff204b inset;
    }
  }
  .store-name {
    p {
      @include ellipsis();
      padding-bottom: 10px;
      text-align: center;
      margin-top: 10px;
      font-size: 12px;
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
  padding: 18px 0 18px 10px;
  white-space: nowrap;
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
  //찜한 스토어 신상
  .market-store {
    border-bottom: 1px solid#ebeef2;
    padding-right: 176px;
    box-sizing: border-box;
    margin-bottom: 32px;
    .swiper-slide {
      width: calc((100% / 8) - 21px);
      margin-left: 24px;
      margin-right: 0;
      &:first-child {
        margin-left: 0;
      }
      p {
        font-size: 18px;
      }
    }
    .store-slide-more {
      position: absolute;
      top: 0;
      bottom: 18px;
      width: 152px;
      right: 0px;
      height: calc(100% - 18px);
      border-left: 1px solid #ebeef2;
      background-color: #fff;
      .swiper-more {
        display: block;
        height: 100%;
        padding: 0;
        .store-thum-more {
          display: none;
        }
        .store-name-more {
          display: block;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translate(0, -50%);
          font-size: 18px;
          font-weight: 700;
          color: #444;
          padding: 0 23px;
          &:after {
            display: block;
            margin: 12px auto 0;
            content: "";
            background: url(~@/assets/images/path-2@3x.png) no-repeat
              center/cover;
            width: 6px;
            height: 10px;
          }
        }
      }
    }
  }

  //마켓 프로덕트 리스트
  .market-store-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
    background: #fff;
    border: none;
    padding: 0;
    .product-normal {
      width: calc(100% / 4);
      padding: 0 8px 30px;
    }
    .product-more {
      display: none;
    }
  }
}
</style>
