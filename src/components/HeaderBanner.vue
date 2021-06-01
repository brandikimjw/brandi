<template>
  <div class="banner_wrap">
    <a  href="#" class="header_banner">
      <img class="hide-text" id="introimg" :src="bannerImg" alt="세상에 없던 새벽 '옷'배송 하루배송">
    </a>
  </div>

</template>

<script>
export default {
  name: "CommonTitle",
  data() {
    return {
    };
  },
  computed: {
    bannerImg(){
      let imgArray = new Array();
      imgArray[0]= './src/assets/images/bannerImage_m.jpeg'
      imgArray[1]= '~@/assets/images/bannerImage_w.jpeg';
      if(this.isMobile){
        // objImg.url = imgArray[0];
        return imgArray[0];
      } else{
        // objImg.src=imgArray[1];
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.banner_wrap {
  > a {
    display: block;
    img {
      max-width: 100%;
    }
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
}
</style>
