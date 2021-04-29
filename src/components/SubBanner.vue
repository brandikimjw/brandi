<template>
  <div class="sub-banner-img">
    <a href="#">
      <img
        src="~@/assets/images/mweb_new_tab_banner.png"
        alt="이벤트 서브 배너 이미지"
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
  a {
    display: block;
    img {
      width: 100%;
    }
  }
}
</style>