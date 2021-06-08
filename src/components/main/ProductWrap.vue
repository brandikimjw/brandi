<template>
    <article class="main-today product-list">
      <div class="today-list">
        <ProductItem v-if="product" />
      </div>
    </article>
</template>

<script>

export default {
  name: "PageMain",
  components: {
    ProductItem,
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