<template>
  <div class="title-nav">
    <h2 class="today-tit">TODAY 베스트</h2>
    <ul class="arrow-wrap">
      <div class="arrow-num"><span>1</span><span>/2</span></div>
      <div class="arrow-box">
        <button
          type="button"
          aria-label="이전 리스트 이동"
          class="button-prev"
        ></button>
        <button
          type="button"
          aria-label="이전 리스트 이동"
          class="button-prev"
        ></button>
      </div>
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 타이틀 네브
.title-nav {
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
    .arrow-num {
      display: inline-block;
      width: auto;
      margin-right: 12px;
      font-size: 16px;
      line-height: 48px;
      color: #888;
      vertical-align: text-bottom;
    }
    .arrow-box {
      display: inline-block;
      border: 1px solid #f2f4f7;
      border-radius: 0;
      background-color: transparent;
      text-shadow: none;
      outline-color: #f2f4f7;
      cursor: pointer;
      .button-prev {
        display: inline-block;
        width: 40px;
        height: 40px;
        margin: 0;
        padding: 0;
        background: url(~@/assets/images/ic-btn-more-m@3x.png) no-repeat/center;
        float: left;
      }
      .button-next {
        display: inline-block;
        width: 40px;
        height: 40px;
        margin: 0;
        padding: 0;
        background: url(~@/assets/images/ic-btn-more-m@3x.png) no-repeat/center;
      }
    }
  }
}
</style>