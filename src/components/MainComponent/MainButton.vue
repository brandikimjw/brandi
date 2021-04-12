<template>
  <div class="btn-common">
    <a class="more" href="#">
      <span class="discount">{{ name }}</span
      >더보기 &gt;</a
    >
  </div>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 공통 하단 버튼
.btn-common-main {
  text-align: center;
  margin-top: 28px;
  .more {
    text-align: center;
    @include btn-common();
    // width: 100%;
    .discount {
      font-weight: bold;
      display: inline;
    }
  }
  margin-bottom: 60px;
}
</style>