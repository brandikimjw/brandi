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
  .today-box {
    display: block;
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
</style>
