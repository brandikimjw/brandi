<template>
  <div class="main-wrapper">
    <article class="main-today container">
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
      <ButtonTitle />
      <div class="new-list">
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
      </div>
      <ButtonCommon />
    </article>
    <aside class="main-sub-banner"></aside>
    <article class="main-recommend container">
      <ButtonTitle />
    </article>
    <article class="main-special container">
      <div class="special-list">
        <SpecialItem />
        <SpecialItem />
        <SpecialItem />
      </div>
    </article>
    <article class="main-oneday container">
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
    <article class="main-benefit container"></article>
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
.ir {
  height: 0;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
  text-indent: -10000px;
}
</style>