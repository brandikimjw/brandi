<template>
  <!-- 마음에 드는 스토어 찜하고 신상 알림 받아보세요! -->
  <div class="favor-store-link-wrap product-list">
    <div class="favor-link-icon"></div>
    <div class="favor-link-text">
      <strong>인기 스토어 찜 하러 가기</strong>
      <p>마음에 드는 스토어 찜하고 신상 알림 받아보세요!</p>
      <a href="#" class="favor-link-arrow"></a>
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
  padding: 24px 16px;
  border-bottom: 8px solid #f2f4f7;
  display: flex;
  flex-wrap: wrap;
  .favor-link-icon {
    background: url(~@/assets/images/image@3x.png) no-repeat top center/contain;
    width: 32px;
    height: 50px;
    margin-right: 12px;
  }
  .favor-link-text {
    position: relative;
    width: 85%;
    strong {
      font-size: 15px;
      color: #202429;
    }
    p {
      font-size: 11px;
      color: #808893;
    }
    .favor-link-arrow {
      position: absolute;
      display: block;
      top: 50%;
      right: 0px;
      background: url(~@/assets/images/icons-12-pt-ic-arrow-12-pt-copy@3x.png)
        no-repeat top center/contain;
      width: 14px;
      height: 14px;
      transform: translate(0, -50%);
    }
  }
  .button-common {
    display: none;
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
  .favor-store-link-wrap {
    margin-top: 90px;
    display: block;
    text-align: center;
    border: none;
    .favor-link-icon {
      margin: 0 auto;
      width: 46px;
      height: 46px;
    }
    .favor-link-text {
      width: 100%;
      strong {
        display: none;
      }
      p {
        margin-top: 24px;
        font-size: 20px;
        color: #444444;
      }
      .favor-link-arrow {
        display: none;
      }
    }
  }
  .favor-store-link-wrap {
    .button-common {
      margin-top: 32px;
      display: block;
    }
  }
}
</style>