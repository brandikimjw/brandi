<template>
  <article class="sub-new-wrapper">
    <section class="sub-market-list-wrap product-list">
      <CommonTitle />
      <MarketList />
    </section>
    <aside class="sub-banner product-list">
      <SubBanner />
    </aside>
  </article>
</template>

<script>
import CommonTitle from "./CommonTitle";
import MarketList from "./MarketList";
import SubBanner from "./SubBanner";

export default {
  name: "newpage",
  components: {
    CommonTitle,
    MarketList,
    SubBanner,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sub-banner {
  width: 100%;
}
</style>