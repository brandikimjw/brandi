<template>
<div class="title-wrap">
  <!-- navTitle -->
  <div v-if="isTab" class="nav-wrap">
    <h2><IconHaru v-if="zoningType === 'todayDelivery'" />{{title}}</h2>
    <div class="title-nav">
      <ul class="title-nav-box">
        <li class="title-nav-txt" v-for="(item, index) in testList" :key="index">
          <a href="#" @click.prevent="clickMenu2(index)" :class="{ on : index === currentIndex2 }">{{ item.txt }}</a>
        </li>
      </ul>
    </div>
  </div>
  <!-- ButtonTitle -->
  <div v-if="isPager" class="pager-nav">
    <h2><IconHaru v-if="zoningType === 'todayDelivery'" />{{title}}</h2>
    <ul class="arrow-wrap">
      <div class="arrow-num"><span>1</span>/<span>2</span></div>
      <div class="arrow-box">
        <button type="button" aria-label="이전 리스트 이동" class="button-prev" disabled="disabled"></button>
        <button type="button" aria-label="다음 리스트 이동" class="button-next" disabled="disabled"></button>
      </div>
    </ul>
  </div>
</div>
</template>

<script>
import Iconharu from "../common/IconHaru"

export default{
  name: "NavTitle",
  data() {
    return {
      currentIndex : '1',
      currentIndex2 : 0,
      // props : {
      //   name: {
      //     type: String,
      //     default: '',
      //   },
      // },
      nav : [
        {
          id : '1',
          title : '전체',
        }
      ],
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
		}
	},
  props: {
    zoningType : String,
    isTab : Boolean,
    isPager : Boolean,
  },
  methods: {
    clickMenu2 (index) {
      this.currentIndex2 = index
    },
  },
  computed: {
    title : function () {
      let returnTitle = ''

      switch (this.zoningType) {
        case 'best':
          returnTitle = 'TODAY 베스트'
          break
        case 'new':
          returnTitle = '신상 모아보기'
          break
        case 'ai':
          returnTitle = '오늘은 이 상품 어때요?'
          break
        case 'todayDelivery':
          returnTitle = '상품은 내일 도착!'
          break
        default:
          break
      }

      return returnTitle
    },
  },
  components: {
    Iconharu,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 타이틀 네브
.nav-wrap {
  h2 {
    font-size: 30px;
  }
}
.title-nav {
  margin-bottom: 12px;
  .title-nav-tit {
    font-size: 20px;
    word-break: break-word;
    text-align: center;
  }
  .title-nav-box {
    text-align: center;
    .title-nav-txt {
      display: inline-block;
      font-size: 14px;
      color: #808893;
      margin-left: 5px;
      &:nth-child(1) {
        margin-left: 0;
      }
      a {
        display: block;
        padding: 0 4px 4px;
        &.on{
          border-bottom: 2px solid #ff204b;
          font-weight: 700;
          color: #ff204b;
        }
      }
    }
  }
}
// 페이저 네브
.pager-nav {
  width: 100%;
  display: block;
  .today-tit {
    margin: 0 0 16px 0;
    font-size: 20px;
    text-align: center;
    word-break: break-word;
  }
  .arrow-wrap {
    display: none;
    float: right;
  }
}

@media screen and (min-width: map-get($breakpoints, "medium")) {
  .title-nav {
    margin-bottom: 24px;
    .title-nav-tit {
      float: left;
      text-align: left;
      font-size: 32px;
      width: auto;
    }
    .title-nav-box {
      display: flex;
      flex: wrap;
      float: right;
      margin: 9px 0 0 0;
      .title-nav-txt {
        font-size: 17px;
        line-height: 17px;
        margin-left: 19px;
        > a {
          padding: 0 4px 4px;
          font-size: 17px;
        }
        &:nth-last-child() {
          margin: 0;
        }
      }
    }
  }
  .title-nav-list {
    display: flex;
    flex-wrap: wrap;
    .product-normal {
      height: 100%;
      width: calc(100% / 4);
    }
  }
}
//large
@media screen and (min-width: map-get($breakpoints, "large")) {
}
</style>
