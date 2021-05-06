<template>
  <div class="title-nav clearfix">
    <h2 class="title-nav-tit">TODAY 베스트</h2>
    <ul class="title-nav-box">
      <li class="title-nav-txt">
        <a href="javascript:void(0);">전체</a>
      </li>
      <li class="title-nav-txt">
        <a href="#">쇼핑몰마켓</a>
      </li>
      <li class="title-nav-txt">
        <a href="#">브랜드</a>
      </li>
      <li class="title-nav-txt">
        <a href="#">뷰티</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavTitle",
  data() {
    return {
      active: "home",
    };
  },
  methods: {
    makeActive: function (item) {
      this.active = item;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 타이틀 네브
.title-nav {
  // margin: 0 -4px;
  .title-nav-tit {
    width: 100%;
    margin: 0 0 16px 0;
    font-size: 20px;
    text-align: center;
    word-break: break-word;
  }
  .title-nav-box {
    margin-bottom: 12px;
    text-align: center;
    .title-nav-txt {
      display: inline-block;
      padding: 0 4px 4px;
      font-size: 14px;
      color: #808893;
      &.nav.home .home,
      nav.projects .projects,
      nav.services .services,
      nav.contact .contact .active {
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
    .title-nav-tit {
      float: left;
      text-align: left;
      font-size: 32px;
      width: auto;
    }
    .title-nav-box {
      float: right;
      text-align: right;
      margin-top: 8px;
      .title-nav-txt {
        font-size: 17px;
        line-height: 17px;
        margin: 0 8px 0 0;
        &:nth-last-child() {
          margin: 0;
        }
      }
    }
  }
  .title-nav-list {
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
