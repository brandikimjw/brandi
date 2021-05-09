<template>
  <!-- 마음에 드는 스토어 찜하고 신상 알림 받아보세요! -->
  <div class="favor-store-link-wrap">
    <div class="favor-link-icon">
      <p>마음에 드는 스토어 찜하고 신상 알림 받아보세요!</p>
    </div>
    <ButtonCommon />
  </div>
</template>

<script>
import ButtonCommon from "./ButtonCommon";
export default {
  name: "FavorStoreLink",
  components: {
    ButtonCommon,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.favor-store-link-wrap {
  height: 30vh;
  .favor-link-icon {
    display: block;
    text-align: center;
    &::before {
      display: block;
      content: "";
      width: 42px;
      height: 52px;
      background: url(~@/assets/images/image@3x.png) no-repeat top center;
      background-size: cover;
      margin: 0 auto;
    }
    > p {
      font-size: 20px;
      margin-top: 24px;
      color: #444444;
    }
  }
  .button-common {
    margin-top: 32px;
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
}
</style>