<template>
  <div class="main-wrapper">
    <div class="main-swiper">
      <MainSwiper />
    </div>
    <article class="main-today product-list">
      <!-- <h5>투데이베스트</h5> -->
      <NavTitle />
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
    <article class="main-new product-list">
      <!-- <h5>신상모아보기</h5> -->
      <NavTitle />
      <div class="new-list">
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
      <ButtonCommon />
    </article>
    <aside class="main-sub-banner product-list">
      <!-- <h5>배너</h5> -->
      <SubBannerSwiper />
    </aside>
    <article class="main-recommend product-list">
      <!-- <h5>당신을위한추천</h5> -->
      <ButtonTitle />
      <div class="recommend-list">
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
      <ButtonCommon />
    </article>
    <article class="main-special product-list">
      <!-- <h5>놓칠 수 없는 브랜디 특가</h5> -->
      <ButtonTitle />
      <div class="special-list">
        <div class="special-image">
          <h3 class="hide-text">BRANDI TIME PRICE</h3>
          <p class="hide-text">
            지금 가입하면 5만원 쿠폰팩 지급! 추가할인 받고 구매하자!
          </p>
        </div>
        <SpecialItem />
        <SpecialItem />
        <SpecialItem />
      </div>
    </article>
    <article class="main-oneday product-list">
      <!-- <h5>하루배송 상품은 내일 도착</h5> -->
      <OnedayTitle />
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
      <ButtonCommon />
    </article>
    <article class="main-rise-pop product-list">
      <!-- <h5>지금 뜨고있는 기획전</h5> -->
      <ButtonTitle />
      <div class="rise-list">
        <RisePop />
        <RisePop />
      </div>
      <ButtonCommon />
    </article>
  </div>
</template>

<script>
import MainSwiper from "./MainSwiper";
import NavTitle from "./NavTitle";
import ProductNormal from "./ProductNormal";
import ButtonCommon from "./ButtonCommon";
import SpecialItem from "./SpecialItem";
import ButtonTitle from "./ButtonTitle";
import OnedayTitle from "./OnedayTitle";
import RisePop from "./RisePop";
import SubBannerSwiper from "./SubBannerSwiper";

export default {
  name: "PageMain",
  components: {
    MainSwiper,
    ProductNormal,
    ButtonCommon,
    NavTitle,
    SpecialItem,
    ButtonTitle,
    OnedayTitle,
    RisePop,
    SubBannerSwiper,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~@/assets/scss/pages/main";

.main-oneday {
  .today-tit {
  }
}
</style>