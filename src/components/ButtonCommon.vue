<template>
  <div class="button-common">
    <a href="#">
      <span class="btn-tit">베스트</span>
      <span class="btn-more">더보기&gt;</span>
    </a>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.ir {
  height: 0;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
  text-indent: -10000px;
}
.button-common {
  margin: 0 auto;
  text-align: center;
  margin-bottom: 60px;
  a {
    display: inline-block;
    min-width: 240px;
    padding: 10.5px;
    border: solid 1px #d3d7df;
    border-radius: 28px;
    font-size: 13px;
    color: #5f6773;
  }
  .btn-tit {
    margin-right: 2px;
    font-weight: 700;
  }
  .btn-more {
    position: relative;
    display: inline-block;
    height: 19px;
    padding-right: 8px;
  }
}
</style>