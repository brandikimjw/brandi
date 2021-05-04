<template>
  <div class="sub-banner-img product-list">
    <a href="#">
      <img
        src="~@/assets/images/mweb_new_tab_banner.png"
        alt="이벤트 서브 배너 이미지"
        class="sub-moblie"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: "subbanner",
  components: {},
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.sub-banner-img {
  padding: 0 18px 0 18px;
  a {
    display: block;
    img {
      width: 100%;
    }
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
  .sub-banner-img {
    padding: 0;
  }
}
</style>