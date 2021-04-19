<template>
  <div class="title-nav">
    <h2 class="today-tit">TODAY 베스트</h2>
    <ul class="today-box">
      <li class="today-txt active"><a href="#">전체</a></li>
      <li class="today-txt"><a href="#">쇼핑몰마켓</a></li>
      <li class="today-txt"><a href="#">브랜드</a></li>
      <li class="today-txt"><a href="#">뷰티</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavTitle",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 타이틀 네브
.title-nav {
  display: block;
  margin-bottom: 24px;
  .today-tit {
    margin: 0 0 16px 0;
    font-size: 20px;
    text-align: center;
    word-break: break-word;
  }
  .today-box {
    margin-bottom: 12px;
    text-align: center;
    .today-txt {
      display: inline-block;
      padding: 0 4px 4px;
      font-size: 14px;
      color: #808893;
      &.active {
        a {
          border-bottom: 2px solid #ff204b;
          font-weight: 700;
          color: #ff204b;
        }
      }
    }
  }
}

// $breakpoints: (
//     'small': 320px,
//     'medium': 768px,
//     'large': 1024px,
// ) !default;
//mideum
@media screen and (min-width: map-get($breakpoints, "medium")) {
  .title-nav {
    .today-tit {
      width: 50%;
      float: left;
      font-size: 32px;
      text-align: left;
    }
    .today-box {
      width: 49%;
      display: inline-block;
      text-align: right;
      .today-txt {
        font-size: 17px;
        line-height: 17px;
      }
    }
  }
  .today-list {
    display: flex;
    flex-wrap: wrap;
    .product-normal {
      height: 100%;
      width: calc(100% / 4);
    }
  }
}
//large
@media screen and (min-width: map-get($breakpoints, "large")) {
}
</style>
