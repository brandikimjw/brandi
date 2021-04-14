<template>
  <div class="main-wrapper">
    <div class="main-swiper">
      <MainSwiper />
    </div>
    <article class="main-today container">
      <h5>투데이베스트</h5>
      <NavTitle />
      <div class="today-list">
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
      </div>
      <ButtonCommon />
    </article>
    <article class="main-new container">
      <h5>신상모아보기</h5>
      <NavTitle />
      <div class="new-list">
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
      </div>
      <ButtonCommon />
    </article>
    <aside class="main-sub-banner container">
      <h5>배너</h5>
      <SubBannerSwiper />
    </aside>
    <article class="main-recommend container">
      <h5>당신을위한추천</h5>
      <ButtonTitle />
      <div class="recommend-list">
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
      </div>
      <ButtonCommon />
    </article>
    <article class="main-special container">
      <h5>놓칠 수 없는 브랜디 특가</h5>
      <ButtonTitle />
      <div class="special-list">
        <SpecialItem />
        <SpecialItem />
        <SpecialItem />
      </div>
    </article>
    <article class="main-oneday container">
      <h5>하루배송 상품은 내일 도착</h5>
      <OnedayTitle />
      <div class="today-list">
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
      </div>
      <ButtonCommon />
    </article>
    <article class="main-rise-pop container">
      <h5>지금 뜨고있는 기획전</h5>
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
<style lang="scss" scoped>
@import "~@/assets/scss/pages/main";
</style>