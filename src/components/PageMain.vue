<template>
  <div class="main-wrapper">
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
    <aside class="main-sub-banner">
      <h5>배너</h5>
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
    <article class="main-benefit container">
      <h5>지금 뜨고있는 기획전</h5>
    </article>
  </div>
</template>

<script>
import MainBannerSwiper from "./MainBannerSwiper";
import NavTitle from "./NavTitle";
import ProductNormal from "./ProductNormal";
import ButtonCommon from "./ButtonCommon";
import SpecialItem from "./SpecialItem";
import ButtonTitle from "./ButtonTitle";
import OnedayTitle from "./OnedayTitle";

export default {
  name: "PageMain",
  components: {
    MainBannerSwiper,
    ProductNormal,
    ButtonCommon,
    NavTitle,
    SpecialItem,
    ButtonTitle,
    OnedayTitle,
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