<template>
  <section class="product-normal">
    <div class="thumb">
      <a href="#">
        <div class="thumb-img hide-text">이미지</div>
        <div class="badge-index">1</div>
      </a>
    </div>
    <div class="wrap-info">
      <div class="product-info">
        <div class="sellor">프롬헤드투토</div>
        <div class="oneday-svg">
          <!-- 이미지로 삽입하기 -->
        </div>
      </div>
      <em class="product-title">글로우 플리츠 롱스커트</em>
      <div class="info-price">
        <strong class="dc">17%</strong>
        <em class="dc-price">10,000</em>
        <p class="price hide-text">14,000</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // name: "Item",
  // props: {
  //   imgSrc: {
  //     type: String,
  //     default: "~@/assets/images/tshirts.jpeg",
  //   },
  //   productName: {
  //     type: String,
  //     default: "제품값이 입력되지 않았습니다.",
  //   },
  //   isBadge: {
  //     type: Boolean,
  //     default: true,
  //   },
  // },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 컴포넌트 노말
.product-normal {
  display: block;
  padding: 0 4px 0 4px;
  margin-bottom: 3%;
  .thumb {
    overflow: hidden;
    position: relative;
    padding-top: 110%;
    border-radius: 0;
    a {
      display: block;
    }

    .thumb-img {
      background: url(~@/assets/images/tshirts.jpeg) no-repeat;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding-top: 110%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50%;
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
      z-index: 10;
    }
  }

  .wrap-info {
    .product-info {
      .sellor {
        width: 48%;
        display: inline-block;
        overflow: hidden;
        color: #808893;
        font-size: 12px;
        font-style: normal;
        text-align: left;
      }
      .oneday-svg {
        background: url(~@/assets/images/ic-haru-l@3x.png) no-repeat;
        background-size: contain;
        background-position: top right;
        display: inline-block;
        width: 49%;
        height: 14px;
        text-align: right;
      }
    }
    .product-title {
      display: block;
      clear: both;
      font-size: 13px;
      font-style: normal;
      color: #202429;
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