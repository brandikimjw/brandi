<template>
  <div class="banner_wrap">
    <a  href="#" class="header_banner">
      <img class="hide-text" id="introimg" :src="bannerImg" alt="세상에 없던 새벽 '옷'배송 하루배송">
    </a>
  </div>

</template>

<script>
export default {
  name: "HeaderBanner",
  data() {
    return {
    };
  },
  computed: {
    bannerImg(){
      let imgArray = new Array();
      imgArray[0]= require('../assets/images/bannerImage_m.jpeg');
      imgArray[1]= require('../assets/images/bannerImage_w.jpeg');
      if(this.isMobile){
        return imgArray[0];
      } else{
        return imgArray[1];
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.banner_wrap {
  position: relative;
  z-index: 10000;
  > a {
    display: block;
    line-height: 0;
    img {
      max-width: 100%;
    }
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
  .banner_wrap {
  position: relative;
  z-index: 10000;
  > a {
    display: block;
    line-height: 0;
    img {
      max-width: 100%;
      display: block;
      margin: 0 auto;
    }
  }
}
}
</style>
