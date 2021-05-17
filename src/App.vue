<template>
  <div id="wrap">
    <div id="header">
      <Header />
    </div>
    <div id="container">
      <router-link to="pagenewtab"></router-link>
      <router-link to="timedeal"></router-link>
      <router-view />
    </div>
    <div id="footer">
      <Footer />
    </div>
    <div id="tab">
    <TabBar />
    </div>
  </div>
</template>

<script>
import Header from "./components/ComponentHeader";
import Footer from "./components/ComponentFooter";
import TabBar from "./components/TabBar";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    TabBar
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/main";
</style>
