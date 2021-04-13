<template>
  <!-- 지금 뜨고있는 기획전 -->
  <div class="event-item">
    <a href="#">
      <div class="banner">
        <span class="more">바로가기 &gt;</span>
      </div>
    </a>
    <ul class="main-list">
      <ProductNormal />
      <ProductNormal />
      <ProductNormal />
    </ul>
  </div>
</template>

<script>
import ProductNormal from "./ProductNormal";
export default {
  name: "Risepop",
  components: {
    ProductNormal,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.event-item {
  a {
    display: block;
    .banner {
      background: url(~@/assets/images/pop-banner.jpeg) no-repeat;
      width: 100%;
      padding-top: 45%;
      background-size: cover;
      margin-bottom: 8px;
      position: relative;
      .more {
        padding: 8.5px 15px 8.5px 16px;
        font-size: 12px;
        background-color: rgba(0, 0, 0, 0.4);
        color: #fff;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }
  .main-list {
    width: 100%;
    display: inline-block;
    /deep/ .product-normal {
      display: inline-block;
      width: 32%;
      padding: 0;
      .thumb {
        .thumb-img {
          padding-top: 90%;
        }
      }
      .wrap-info {
        .product-info {
          .sellor {
            width: 100%;
          }
          .product-title {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .oneday-svg {
            display: none;
          }
        }
      }
    }
  }
}
</style>