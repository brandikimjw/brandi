<template>
  <!-- 지금 뜨고있는 기획전 -->
  <div class="event-item">
    <a href="#">
      <div class="banner">
        <span class="more">바로가기 &gt;</span>
      </div>
    </a>
    <article class="main-list">
      <ProductNormal />
      <ProductNormal />
      <ProductNormal />
    </article>
  </div>
</template>

<script>
import ProductNormal from "./ProductNormal";
export default {
  name: "RisePop",
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
  border-bottom: 1px solid #ebeef2;
  &:last-child {
    margin-top: 24px;
  }
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
  /deep/ .main-list {
    display: flex;
    .product-normal {
      width: calc(100% / 3);
      padding: 0 4px 0;
      display: inline-block;
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