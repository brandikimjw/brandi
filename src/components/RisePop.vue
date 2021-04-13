<template>
  <!-- 지금 뜨고있는 기획전 -->
  <section>
    <div class="main-banner">
      <div class="banner-img"></div>
      <div class="banner-contents">
        <ProductNormal />
        <ProductNormal />
        <ProductNormal />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-banner {
  .banner-img {
    width: 100%;
  }
}
</style>