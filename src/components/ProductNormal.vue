<template>
  <section class="product-normal">
    <div class="thumb">
      <a href="#">
        <div class="thumb-img hide-text">이미지</div>
        <div class="badge-idx">
          {{ orderBadge }}
        </div>
      </a>
    </div>
    <div class="wrap-info">
      <div class="product-info">
        <div class="sellor">
          <a href="#">{{ sellorName }}</a>
        </div>
        <div v-show="isOneDayShipping" class="oneday-svg"></div>
      </div>
      <em class="product-title"
        ><a class="proudct-name" href="#">{{ productName }}</a></em
      >
      <div class="info-price">
        <strong v-if="discountRate" class="dc">{{ discountRate }}%</strong>
        <em class="dc-price">{{ price }}</em>
        <p class="price hide-text">14,000</p>
      </div>
    </div>
  </section>
</template>

<script>
import CardMixin from "./CardBase";
export default {
  name: "CardItemSmall",
  mixins: [CardMixin],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 컴포넌트 노말
.product-normal {
  padding: 0 4px 20px;
  //margin-bottom: 3%;
  .thumb {
    overflow: hidden;
    position: relative;
    border-radius: 0;
    a {
      display: block;
    }
    .thumb-img {
      background: url(~@/assets/images/tshirts.jpeg) no-repeat;
      width: 100%;
      padding-top: 110%;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .badge-idx {
      background: url(~@/assets/images/ic-bg-flag.png) no-repeat;
      position: absolute;
      left: 0;
      top: 0;
      width: 26px;
      height: 30px;
      font-size: 12px;
      line-height: 30px;
      font-weight: 500;
      text-align: center;
      color: #fff;
      background-size: 100% 100%;
      z-index: 10;
    }
  }

  .wrap-info {
    .product-info {
      position: relative;
      padding-top: 10px;
      .sellor {
        width: 70%;
        overflow: hidden;
        color: #808893;
        font-size: 12px;
        font-style: normal;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
      .oneday-svg {
        background: url(~@/assets/images/ic-haru-l@3x.png) no-repeat;
        background-size: contain;
        background-position: top right;
        height: 14px;
        text-align: right;
        position: absolute;
        right: 0;
        top: 0;
        width: 100px;
        margin-top: 10px;
      }
    }
    .product-title {
      display: block;
      clear: both;
      font-size: 13px;
      font-style: normal;
      color: #202429;
      // 한줄효과
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;

      .proudct-name {
        color: #202429;
      }
    }
    .info-price {
      .dc {
        color: #ff204b;
        font-size: 15px;
        font-weight: bold;
      }
      .dc-price {
        font-size: 15px;
        font-weight: bold;
        font-style: normal;
        color: #202429;
      }
      .price {
        font-size: 15px;
        font-weight: bold;
        font-style: normal;
        color: #202429;
      }
    }
  }
}
</style>