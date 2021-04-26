<template>
  <div class="store-market-list-wrap">
    <NavTitle />
  </div>
</template>

<script>
import NavTitle from "./NavTitle";

export default {
  name: "newpage",
  components: {
    NavTitle,
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