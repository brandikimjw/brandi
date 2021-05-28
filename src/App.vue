<template>
  <div id="wrap">
    <!-- <SubBanner /> -->
    <div id="header">
      <Header />
    </div>
    <div id="container">
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
// import SubBanner from './components/SubBanner'
import mixin from './common'

export default {
  name: "App",
  components: {
    Header,
    Footer,
    TabBar,
    // SubBanner
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/main";
</style>
