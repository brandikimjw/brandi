<template>
  <div class="button-common">
    <a href="#">
      <span class="btn-tit">베스트</span>
      <span class="btn-more">더보기&gt;</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "ButtonCommon",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.button-common {
  text-align: center;
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

@media screen and (min-width: map-get($breakpoints, "medium")) {
  .button-common {
    a {
      min-width: 320px;
      padding: 15px;
      font-size: 14px;
    }
    .btn-tit {
    }
    .btn-more {
    }
  }
}
</style>