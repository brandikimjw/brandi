<template>
  <!-- total-wrap 100% -->
  <div class="total-wrap">
    <!-- 1200px -->
    <div class="inner product-list">
      <div class="item-box">
        <ProductNormal
          sellorName="하이버"
          orderBadge="2"
          :isOneDayShipping="false"
          storeName="브랜디"
          productName="[원조/빅사이즈] 큰달과 레터링 오버핏"
          :discountRate="15"
          :price="80000"
        />
        <ProductNormal
          sellorName="하이버"
          orderBadge="2"
          :isOneDayShipping="false"
          storeName="브랜디"
          productName="[원조/빅사이즈] 큰달과 레터링 오버핏"
          :discountRate="15"
          :price="80000"
        />
        <ProductNormal
          sellorName="하이버"
          orderBadge="2"
          :isOneDayShipping="false"
          storeName="브랜디"
          productName="[원조/빅사이즈] 큰달과 레터링 오버핏"
          :discountRate="15"
          :price="80000"
        />
        <ProductNormal
          sellorName="하이버"
          orderBadge="2"
          :isOneDayShipping="false"
          storeName="브랜디"
          productName="[원조/빅사이즈] 큰달과 레터링 오버핏"
          :discountRate="15"
          :price="80000"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductNormal from '../main/ProductNormal';

export default {
  name: "timeDeal",
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
.total-wrap {
  width: 100%;
}
.item-box {
  padding: 0 16px 0 16px;
  margin: 0 -4px;
  .product-normal {
    display: inline-block;
    width: calc(100% / 2 - 4px);
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
  .inner {
    padding: 0 20px;
  }
  .item-box {
    padding: 0;
    .product-normal {
      display: inline-block;
      width: calc(100% / 4 - 4px);
    }
  }
}
</style>