<template>
  <div class="product-nav">
    <h2 class="nav-title">{{ title }}</h2>
    <ul class="nav-items">
      <li
        class="nav-item"
        v-for="tab in tabList"
        :key="tab.id"
        :class="{ active: tab.id === 1 }"
      >
        <a href="#">{{ tab.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductNav",
  props: {
    title: {
      type: String,
      default: "",
    },
    tabList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.product-nav {
  .nav-title {
    @include main-h2();
    text-align: center;
  }

  .nav-items {
    width: 50%;
    display: inline-block;
    text-align: right;

    @include main-nav();
    height: 18px;
    text-align: center;
  }

  .nav-item {
    font-size: 17px;
    margin-right: 16px;
    display: inline-block;
    &.active {
      a {
        display: block;
        border-bottom: 2px solid #ff204b;
        font-weight: 700;
        color: #ff204b;
      }
    }
    &:last-child {
      margin: 0;
      padding: 0;
    }
  }
}
</style>