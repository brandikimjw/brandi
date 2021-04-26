<template>
  <header class="header">
    <div class="nav product-list">
      <div class="nav-swiper-container swiper-container">
        <nav class="swiper-wrapper">
          <a href="#" class="nav-swiper-slide active swiper-slide">홈</a>
          <a href="#" class="nav-swiper-slide swiper-slide">혜택존</a>
          <a href="#" class="nav-swiper-slide swiper-slide">베스트</a>
          <router-link to="/newpage" class="nav-swiper-slide swiper-slide"
            >신상</router-link
          >
          <a href="#" class="nav-swiper-slide swiper-slide">특가</a>
          <a href="#" class="nav-swiper-slide swiper-slide trend">트렌드</a>
          <a href="#" class="nav-swiper-slide swiper-slide brand">브랜드</a>
          <a href="#" class="nav-swiper-slide swiper-slide beauty">뷰티</a>
          <a href="#" class="nav-swiper-slide swiper-slide">스토어</a>
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
        slidesPerView: 6,
        spaceBetween: 0,
        // freeMode: true,
        // grabCursor: true,
        breakpoints: {
          640: {
            slidesPerView: 8,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 9,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 9,
            spaceBetween: 0,
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
    justify-content: space-between;
    .nav-swiper-slide {
      width: auto;
      display: block;
      position: relative;
      padding: 14px 10px;
      color: #202429;
      font-size: 15px;
      font-weight: bold;
      line-height: 21px;
      word-break: keep-all;
      text-align: center;
      &:hover {
        border-bottom: 2px solid #222;
      }
      &.active {
        &::before {
          position: relative;
          padding: 14px 10px;
          color: #202429;
          font-size: 15px;
          font-weight: bold;
          line-height: 21px;
          display: none;
          position: absolute;
          left: 7px;
          right: 7px;
          bottom: 0;
          height: 2px;
          background-color: #000;
        }
      }
    }
    .trend {
      color: #ff4569 !important;
    }
    .brand {
      color: #cea375 !important;
    }
    .beauty {
      color: #dea6a6 !important;
    }
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
  .nav-swiper-container {
    font-size: 14px;
  }
}
</style>