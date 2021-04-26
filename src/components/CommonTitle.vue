<template>
  <div class="title-common clearfix">
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
  margin-top: 26px;
  .title-common-tit {
    text-align: center;
    margin: 0px 16px 16px;
    color: #222222;
    font-size: 20px;
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
}
//large
@media screen and (min-width: map-get($breakpoints, "large")) {
}
</style>
