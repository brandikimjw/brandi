<template>
  <div class="market-list-wrap">
    <!-- 여기에 이제 스토어 신상 동그라미 스와이퍼 들어가면됌 -->
    <div class="market-list-container swiper-container">
      <nav class="market-store swiper-wrapper">
        <a href="#" class="active swiper-slide">홈</a>
        <a href="#" class="swiper-slide benefit">혜택존</a>
        <a href="#" class="swiper-slide best">베스트</a>
        <router-link to="/newpage" class="swiper-slide newbrand"
          >신상</router-link
        >
        <a href="#" class="swiper-slide special">특가</a>
        <a href="#" class="swiper-slide trend">트렌드</a>
        <a href="#" class="swiper-slide brand">브랜드</a>
        <a href="#" class="swiper-slide store">스토어</a>
        <a href="#" class="swiper-slide beauty">뷰티</a>
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
      stroeSlide: "",
    };
  },
  methods: {
    marketSlide() {
      this.stroeSlide = new Swiper(".market-list-container", {
        clickable: true,
        slidesPerView: 6,
        spaceBetween: 0,
        freeMode: true,
        // grabCursor: true,
        breakpoints: {
          640: {
            slidesPerView: 8,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 9,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 9,
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
.market-store-list {
  overflow-x: auto;
  overflow-y: hidden;
  //display: block;
  padding: 18px 0 18px 10px;
  white-space: nowrap;
  background-color: #f8f9fb;
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
