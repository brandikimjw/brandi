<template>
  <!--Sub-Swiper -->
  <div class="sub-banner-container">
    <div class="swiper-container sub-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide hide-text">Slide 1</div>
        <div class="swiper-slide hide-text">Slide 2</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SubSlide: "",
      //ismobile에 데이터를 넣어줘야함 근데 pc인지 모바일인지 체크해서 넣어야겠죠?
      ismobile: "",
    };
  },
  created() {
    //브라우저 사이즈를 체크해서 ismobile에 true인지 false인지 넣어주면 되요
    //window.addEventListener('resize') // 브라우저 사이즈가 변할 때 실행되는 이벤트
    window.addEventListener("resize", sizeChanged());
    //window.addEventListener('resize', sizeChanged() );
    function sizeChanged() {
      if (innerWidth <= 768) {
        console.log("리사이즈");
      } else {
        console.log("취소");
      }
    }
  },
  methods: {
    initbanner() {
      this.SubSlide = new Swiper(".sub-container", {
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });
    },
  },
  // watch 를 사용해서 ismobile에 변화가 생기는지 체크 변화가 생기면 함수가 실행되용
  // 만약에 변하는 값이 ture면 슬라이드 생성해주면 되고 flase면 슬라이드 삭제하면 되겠죵
  mounted() {
    this.initbanner();
    // 지금은 무조건 슬라이드가 생성되니까 모바일 에서만 실행되게 체크가 필요
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: url(~@/assets/images/mainbanner02.jpeg) no-repeat center;
  background-size: contain;
  padding-top: 50%;
}
</style>