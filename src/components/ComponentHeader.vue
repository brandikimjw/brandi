<template>
  <header class="header">
    <div class="nav">
      <div class="nav-swiper-container">
        <nav class="swiper-wrapper">
          <a href="#" class="nav-swiper-slide">홈</a>
          <a href="#" class="nav-swiper-slide">베스트</a>
          <a href="/PageNewTab" class="nav-swiper-slide">신상</a>
          <a href="#" class="nav-swiper-slide">특가</a>
          <a href="#" class="nav-swiper-slide">쇼핑몰마켓</a>
          <a href="#" class="nav-swiper-slide">브랜드</a>
          <a href="#" class="nav-swiper-slide">뷰티</a>
          <a href="#" class="nav-swiper-slide">기획전</a>
          <a href="#" class="nav-swiper-slide">스토어</a>
        </nav>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination"></div> -->
      </div>
    </div>
  </header>
</template>

<script>
// import MainSwiper from "./MainSwiper";
export default {
  data() {
    return {
      navSlide: "",
    };
  },
  methods: {
    navigtationSlide() {
      this.navSlide = new Swiper(".nav-swiper-container", {
        clickable: true,
        slidesPerView: 5,
        spaceBetween: 1,
        freeMode: true,
        grabCursor: true,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });
    },
  },
  mounted() {
    this.navigtationSlide();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/deep/.nav-swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
  .swiper-wrapper {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    // justify-content: space-between;
    .nav-swiper-slide {
      display: flex;
      width: auto;
      display: block;
      position: relative;
      padding: 14px 10px;
      color: #202429;
      font-size: 15px;
      font-weight: bold;
      line-height: 21px;
    }
  }
}
</style>