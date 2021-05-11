<template>
  <div class="sub-banner-wrap product-list">
    <div class="sub-banner-mobile">
      <a href="#">
        <img
          src="~@/assets/images/mweb_new_tab_banner.png"
          alt="신상고정배너 mobile"
          class="sub-moblie"
        />
      </a>
    </div>
    <div class="sub-banner-web product-list">
      <a href="#">
        <img
          src="~@/assets/images/web_new_tab_banner_20210310.png"
          alt="신상고정배너 web"
          class="sub-web"
        />
      </a>
    </div>
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
.sub-banner-mobile {
  padding: 0 18px 0 18px;
  > a {
    display: block;
    img {
      width: 100%;
    }
  }
}
.sub-banner-web {
  display: none;
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
  .sub-banner-mobile {
    display: none;
  }
  .sub-banner-web {
    display: block;
    > a {
      display: block;
      img {
        width: 100%;
      }
    }
  }
}
</style>