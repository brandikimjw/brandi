<template>
  <!-- 지금 뜨고있는 기획전 -->
  <div class="event-item">
    <div class="banner">
      <a href="#" class="banner-link"></a>
      <span class="more">바로가기 &gt;</span>
    </div>

    <article class="main-list">
      <ProductNormal
        sellorName="브랜디"
        orderBadge="1"
        :isOneDayShipping="true"
        storeName="스토어네임"
        productName="플리츠 스커트"
        :discountRate="10"
        :price="50000"
      />
      <ProductNormal
        sellorName="브랜디"
        orderBadge="1"
        :isOneDayShipping="true"
        storeName="스토어네임"
        productName="플리츠 스커트"
        :discountRate="10"
        :price="50000"
      />
      <ProductNormal
        sellorName="브랜디"
        orderBadge="1"
        :isOneDayShipping="true"
        storeName="스토어네임"
        productName="플리츠 스커트"
        :discountRate="10"
        :price="50000"
      />
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
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid #ebeef2;
  .banner {
    position: relative;
    .banner-link {
      background: url(~@/assets/images/pop-banner.jpeg) no-repeat;
      overflow: hidden;
      display: block;
      width: 100%;
      padding-top: 45%;
      margin-bottom: 8px;
      line-height: 0;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    .more {
      padding: 8px 15px 8px 16px;
      font-size: 12px;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      position: absolute;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.6);
      cursor: pointer;
    }
  }

  /deep/ .main-list {
    display: flex;
    margin: 0 -4px;
    .product-normal {
      width: calc(100% / 3);
      padding: 0 4px 0;
      display: inline-block;
      .thumb {
        .thumb-img {
          padding-top: 110%;
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