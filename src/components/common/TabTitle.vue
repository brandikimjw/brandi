<template>
  <div class="title-nav">
    <h2 class="title-nav-tit product-list">오늘의 신상</h2>
    <ul class="title-nav-box">
      <li class="title-nav-txt" v-for="(item, index) in testList" :key="index">
				<a href="#" @click.prevent="clickMenu2(index)" :class="{ on : index === currentIndex2 }">{{ item.txt }}</a>
			</li>
    </ul>
    <!-- tabBar -->
    <div class="swiper-container category-filter-container">
      <ul class="swiper-wrapper category-filter-list">
        <li class="swiper-slide slide-category" v-for="(item, index) in testList2" :key="index">
          <a href="#" @click.prevent="clickMenu3(index)" :class="{ on : index === currentIndex3 }">{{ item.txt2 }}</a>
        </li>
      </ul>
    </div>
    <!-- 이거 통째로 가져오기 -->
    <article class="new-today product-list">
      <!-- <h5>ㅜ_ㅜ투데이베스트가 아니라 겨울 필수템! 아우터 신상</h5> -->
      <div class="today-list">
        <ProductNormal
          sellorName="브랜디"
          orderBadge="1"
          :isOneDayShipping="true"
          storeName="스토어네임"
          productName="플리츠 스커트"
          :discountRate="10"
          :price="50000"
        />
        <ProductNormal
          sellorName="하이버"
          orderBadge="2"
          :isOneDayShipping="false"
          storeName="브랜디"
          productName="[원조/빅사이즈] 큰달과 레터링 오버핏"
          :discountRate="15"
          :price="80000"
        />
        <ProductNormal
          sellorName="트렌디"
          orderBadge="3"
          :isOneDayShipping="true"
          storeName="브랜디"
          productName="데디 퍼프 루즈핏 반팔"
          :discountRate="15"
          :price="80000"
        />
        <ProductNormal
          sellorName="하이버"
          orderBadge="4"
          :isOneDayShipping="true"
          storeName="브랜디"
          productName="봄 니트_프렌치오브"
          :discountRate="15"
          :price="80000"
        />
        <ProductNormal
          sellorName="브랜디"
          orderBadge="5"
          :isOneDayShipping="true"
          storeName="브랜디"
          productName="[세탁후그대로!] 퀄리티 좋은 라운드 반팔"
          :discountRate="15"
          :price="80000"
        />
        <ProductNormal
          sellorName="트렌디"
          orderBadge="6"
          :isOneDayShipping="true"
          storeName="브랜디"
          productName="조커팬츠"
          :discountRate="15"
          :price="80000"
        />
        <ProductNormal
          sellorName="트렌디"
          orderBadge="7"
          :isOneDayShipping="false"
          storeName="브랜디"
          productName="끈나시 브이넥 블라우스 _브링잇"
          :discountRate="15"
          :price="80000"
        />
        <ProductNormal
          sellorName="트렌디"
          orderBadge="8"
          :isOneDayShipping="true"
          storeName="브랜디"
          productName="둥근코 캔버스 스니커즈 뮬 블로퍼 2cm"
          :discountRate="15"
          :price="80000"
        />
      </div>
      <ButtonCommon />
    </article>
  </div>
</template>

<script>
import ProductNormal from '../main/ProductNormal';
import ButtonCommon from './ButtonCommon';
export default {
  name: "TabTitle",
  components: {
    ProductNormal,
    ButtonCommon,
  },
  data() {
    return {
      currentIndex : '1',
      currentIndex2 : 0,
      currentIndex3 : 1,
      testList : [
        {
          txt : '전체',
        },
        {
          txt : '트렌드',
        },
        {
          txt : '브랜드',
        },
        {
          txt : '뷰티',
        },
      ],
      testList2 : [
        {
          txt2 : '전체',
        },
        {
          txt2 : '아우터',
        },
        {
          txt2 : '바지',
        },
        {
          txt2 : '양말',
        },
        {
          txt2 : '자켓',
        },
        {
          txt2 : '티셔츠',
        },
        {
          txt2 : '가디건',
        },
      ],
    };
  },
  methods: {
		clickMenu2 (event) {
      this.currentIndex2 = event.target.dataset.index
    },
    clickMenu2 (index) {
      this.currentIndex2 = index
    },
    clickMenu3 (event) {
      this.currentIndex3 = event.target.dataset.index
    },
    clickMenu3 (index) {
      this.currentIndex3 = index
    },
    tabSlide() {
      this.tabTitleSlide = new Swiper(".category-filter-container", {
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 1,
        loop: false,
        pagination: false,
        resistance: false,
        slideToClickedSlide: true,
        slidesOffsetAfter: 32,
      });
    },
  },
  mounted() {
    this.tabSlide();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 타이틀 네브
.title-nav {
  .title-nav-tit {
    margin-bottom: 18px;
    padding: 0 16px 0 16px;
    width: 100%;
    font-size: 20px;
    text-align: center;
    word-break: break-word;
  }
  // 오늘의 신상 탭 카테고리 큰영역
  .title-nav-box {
    text-align: center;
    .title-nav-txt {
      display: inline-block;
      margin-left: 8px;
      a {
        display: block;
        padding: 0 4px;
        font-size: 14px;
        color: #888;

        &.on {
          padding-bottom: 8px;
          border-bottom: 2px solid #ff204b;
          font-weight: 700;
          color: #ff204b;
        }
      }
    }
  }
}
// 오늘의 신상 스와이퍼
.category-filter-container {
  background: #f8f9fb;
  .category-filter-list {
    padding: 7px 16px;
    .slide-category {
      width: auto;
      font-size: 13px;
      a {
        display: block;
        text-align: center;
        padding: 10px 13px;
        color: #acb3bd;
        &.on {
          border-radius: 18px;
          color: #fff;
          background: #ff204b;
        }
      }
    }
  }
}

// today베스트
.new-today {
  margin-top: 32px;
  padding: 0 18px 0 18px;
  .today-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
    .product-normal {
      height: 100%;
      width: calc(100% / 2);
    }
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
  // 타이틀 네브
  .title-nav {
    .title-nav-tit {
      // 오늘의 신상 타이틀 -Q
      padding: 0;
      font-size: 36px;
      text-align: left;
    }
    // 오늘의 신상 탭 카테고리 큰영역
    .title-nav-box {
      margin-top: 44px;
      width: 100%;
      display: flex;
      flex: wrap;
      text-align: center;
      border-bottom: 1px solid #e1e1e1;
      .title-nav-txt {
        width: 100%;
        a {
          font-size: 18px;
        }
      }
    }
  }
  // 오늘의 신상 탭 클릭후 나오는 영역 스와이퍼
  .category-filter-container {
    .category-filter-list {
      display: inline-block;
      padding: 0;
      text-align: center;
      white-space: nowrap;
      .slide-category {
        display: inline-block;
        a {
          padding: 18px 20px;
          font-size: 14px;
          color: #808893;
          &.on {
            color: #ff204b;
            background: none;
            border-radius: 0;
          }
        }
      }
    }
  }

  // today베스트 - 컨텐츠 가져온거
  .new-today {
    margin-top: 32px;
    padding: 0;
    .today-list {
      margin: 0 -8px;
      margin-bottom: 40px;
      .product-normal {
        height: 100%;
        width: calc(100% / 4);
      }
    }
  }
}

//large
@media screen and (min-width: map-get($breakpoints, "large")) {
}
</style>
