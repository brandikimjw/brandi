<template>
  <section class="product-special">
    <div class="thumb">
      <a href="#">
        <div class="thumb-img hide-text">상품이미지</div>
        <div class="badge-idx">12%</div>
      </a>
    </div>
    <div class="wrap-info">
      <a href="#">
        <div class="product-info">
          <em class="time">남은시간 19:02:19</em>
        </div>
        <em class="product-title">[타임특가] 민트초코 크롭 블레이져 숏자켓</em>
        <div class="info-price">
          <p class="price">14,000</p>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "SpecialItem",
  data() {
    return {};
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 컴포넌트 노말
.product-special {
  width: 66%;
  display: block;
  padding: 0 4px 0 4px;
  margin-bottom: 3%;
  .thumb {
    overflow: hidden;
    position: relative;
    border-radius: 0;
    a {
      display: block;
    }

    .thumb-img {
      background: url(~@/assets/images/pants01.jpeg) no-repeat;
      width: 100%;
      padding-top: 110%;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .badge-idx {
      position: absolute;
      display: inline-block;
      top: 0;
      left: 0;
      padding: 8px 15px;
      font-size: 13px;
      font-weight: 700;
      line-height: 1;
      color: #fff;
      background-color: #ff365e;
    }
  }

  .product-info {
    box-sizing: border-box;
    width: 100%;
    .time {
      text-align: center;
      display: block;
      padding: 10px 0;
      font-size: 13px;
      color: #808893;
      padding-bottom: 10px;
      border-bottom: 1px solid #ebeef2;
    }
  }
  .product-title {
    margin-top: 10px;
    text-align: center;
    display: block;
    clear: both;
    font-size: 13px;
    font-style: normal;
    color: #202429;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 2px;
    font-size: 13px;
  }
  .info-price {
    .price {
      display: block;
      font-size: 15px;
      font-weight: bold;
      font-style: normal;
      color: #202429;
      text-align: center;
    }
  }
}
</style>