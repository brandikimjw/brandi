<template>
  <div id="wrap">
    <div id="header">
      <Header />
    </div>
    <div id="container">
      <router-view />
    </div>
    <div id="footer">
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
import Header from "./components/ComponentHeader";
import Footer from "./components/ComponentFooter";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/main";
</style>
