<template>
  <div class="title-common product-list">
    <h2 class="title-common-tit">내가 찜한 스토어 신상</h2>
  </div>
</template>

<script>
export default {
  name: "CommonTitle",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.title-common {
  width: 100%;
  font-weight: bold;
  .title-common-tit {
    text-align: center;
    margin: 26px 0 16px 0;
    color: #222222;
    font-size: 20px;
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
  .title-common {
    padding: 0;
    .title-common-tit {
      text-align: left;
      font-size: 32px;
    }
  }
}
//large
@media screen and (min-width: map-get($breakpoints, "large")) {
}
</style>
