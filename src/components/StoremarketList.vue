<template>
  <div class="store-market-list-wrap">
    <CommonTitle />
  </div>
</template>

<script>
import CommonTitle from "./CommonTitle";

export default {
  name: "newpage",
  components: {
    CommonTitle,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~@/assets/scss/pages/main";
</style>