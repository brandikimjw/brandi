<template>
  <div class="product-item" >
    <div class="thumb">
      <a href="#">
        <div class="thumb-img" :style='{ backgroundImage: `url(${productItem.imageUrl})` }'>
          <span class="hide-text">{{ productItem.product }}</span></div>
        <div class="badge-idx">{{ productItem.orderBadge }}</div>
      </a>
    </div>
    <div class="wrap-info">
      <div class="product-info">
        <div class="sellor">
          <a href="#">{{ productItem.sellorName }}</a>
        </div>
        <div class="oneday-svg" v-if="isOneDayShipping" :style='{ backgroundImage: `url(${productItem.onedaySvg})` }'></div>
      </div>
      <em class="product-title"><a class="proudct-name" href="#">{{ productItem.productName }}</a></em>
      <div class="info-price">
        <strong class="dc">{{ productItem.discountRate }}%</strong>
        <em class="dc-price">{{ productItem.price }}</em>
      </div>
    </div>
  </div>
</template>

<script>
import CardBase from "./CardBase";
export default {
  name: "ProductItem",
  mixins: [CardBase],
  props:{
    productItem: Object,
    isOneDayShipping: Boolean
  },
  data() {
    return {

    };
  },
  mounted(){
  // console.log('product:::', this.productItem)
  // console.log('product::', this.isOneDayShipping)
  }
};
</script>

<style lang="scss" scoped>
// 컴포넌트 노말
.product-item {
  width: calc(100%/2);
  padding: 0 4px 20px;
  .thumb {
    overflow: hidden;
    position: relative;
    border-radius: 0;
    a {
      display: block;
    }
    .thumb-img {
      width: 100%;
      padding-top: 110%;
      background-size: cover;
      background-repeat: no-repeat;
      transition: transform 0.3s ease-in-out;
      &:hover{
        transform: scale(1.1);
    }
  }
}
.thumb{
  .badge-idx {
    display: block;
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
    background: #202429;
  }
}
  .wrap-info {
    margin-top: 10px;
    .product-info {
      position: relative;
      .sellor {
        > a {
        display: block;
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
      }
      .oneday-svg {
        width: 54px;
        height: 12px;
        background-size: cover;
        background-position: top right;
        text-align: right;
        position: absolute;
        right: 0;
        top: 0;
        //width: 100px;
      }
    }
    .product-title {
    .proudct-name {
      color: #202429;
      display: block;
      font-size: 13px;
      font-style: normal;
      color: #202429;
      // 한줄효과
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
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
@media screen and (min-width: map-get($breakpoints, "medium")) {
  .product-item  {
    width: calc(100%/4);
    padding: 0 8px 20px;
    .wrap-info {
      .sellor {
        font-size: 13px;
      }
      .product-title {
        font-size: 15px;
      }
      .dc {
        font-size: 18px;
      }
      .dc-price {
        font-size: 18px;
      }
    }
    .product-info {
      .oneday-svg {
        width: 63px;
        height: 14px;
      }
    }
  }
}
</style>