<template>
  <div class="market-list-wrap">
    <!-- 여기에 이제 스토어 신상 동그라미 스와이퍼 들어가면됌 -->
    <div class="market-list-container swiper-container">
      <nav class="market-store swiper-wrapper">
        <a href="#" class="swiper-slide active">
          <div class="store-thum active hide-text">상품 이미지</div>
          <div class="store-name active"><p class="active">업타운홀릭</p></div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name"><p>업타운홀릭</p></div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name"><p>업타운홀릭</p></div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name"><p>업타운홀릭</p></div>
        </a>
        <a href="#" class="swiper-slide">
          <div class="store-thum hide-text">상품 이미지</div>
          <div class="store-name"><p>업타운홀릭</p></div>
        </a>
      </nav>
    </div>
    <!-- swiper재도전 -->

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
        clickable: true,
        // auto 사용했을 시 슬라이더가 해제되는 문제 해결하기
        slidesPerView: auto,
        spaceBetween: 0,
        freeMode: true,
        grabCursor: true,
        breakpoints: {
          640: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        },
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
}
.swiper-slide {
  display: block;
  width: 20%;
  margin-right: 14px;
  .store-thum {
    background: url(~@/assets/images/ilang_profile.jpg) no-repeat;
    background-size: cover;
    background-position: top center;
    padding-bottom: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.02);
    margin-bottom: 10px;
    &.active {
      border: 3px solid #ff204b inset;
    }
  }
  .store-name {
    p {
      padding-bottom: 10px;
      text-align: center;
      margin-top: 10px;
      font-size: 12px;
      &.active {
        font-size: 12px;
        color: #ff204b;
        border-bottom: solid 3px #ff204b;
        font-weight: bold;
      }
    }
  }
}
.market-store-list {
  overflow-x: auto;
  overflow-y: hidden;
  //display: block;
  padding: 18px 0 18px 10px;
  white-space: nowrap;
  // background-color: #f8f9fb;
  .product-normal {
    width: 43%;
    display: inline-block;
    vertical-align: top;
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
}
//large
@media screen and (min-width: map-get($breakpoints, "large")) {
}
</style>
