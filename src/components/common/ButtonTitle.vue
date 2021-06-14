<template>
  <div class="title-nav">
    <h2 class="today-tit">지금 뜨고 있는 브랜디 혜택</h2>
    <ul class="arrow-wrap">
      <div class="arrow-num"><span>1</span>/<span>2</span></div>
      <div class="arrow-box">
        <button type="button" aria-label="이전 리스트 이동" class="button-prev" disabled="disabled"></button>
        <button type="button" aria-label="다음 리스트 이동" class="button-next" disabled="disabled"></button>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ButtonTitle",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 타이틀 네브
.pager-nav {
  width: 100%;
  display: block;
  .today-tit {
    margin: 0 0 16px 0;
    font-size: 20px;
    text-align: center;
    word-break: break-word;
  }
  .arrow-wrap {
    display: none;
    float: right;
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
  .title-nav {
    margin-bottom: 24px;
    overflow: hidden;
    .today-tit {
      float: left;
      margin-bottom: 0;
      font-size: 32px;
      text-align: left;
      display: block;
    }
    .arrow-wrap {
      display: block;
      float: right;
      height: 48px;
      .arrow-num {
        line-height: 47px;
        display: inline-block;
        width: auto;
        margin-right: 12px;
        font-size: 16px;
        line-height: 48px;
        color: #888;
        vertical-align: text-bottom;
      }
      .arrow-box {
        cursor: pointer;
        display: inline-block;
        cursor: pointer;
        .button-prev {
          width: 40px;
          height: 40px;
          margin-right: -6px;
          padding: 0;
          background: url(~@/assets/images/ic-square-arrow-l-n@3x.png) no-repeat
            center/cover;
          background-size: 25px 25px;
          transform: rotateX(180deg);
          border: 1px solid #f2f4f7;

          &[disabled] {
            background: url(~@/assets/images/ic-square-arrow-l-n.png) no-repeat
              center/cover;
          }
        }
        .button-next {
          width: 40px;
          height: 40px;
          margin: 0;
          padding: 0;
          background: url(~@/assets/images/ic-square-arrow-r-s.png) no-repeat
            center/cover;
          border: 1px solid #f2f4f7;
          background-size: 40px 40px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>