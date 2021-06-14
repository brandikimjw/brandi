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
      props : {
        // name: {
        //   type: String,
        //   default: '',
        // },
      },
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
// navTitle
.nav-wrap {
  margin-bottom: 12px;
  h2 {
    width:100%;
    text-align: center;
    font-size: 20px;
  }
  .title-nav {
    width: 100%;
    ul {
      display: flex;
      flex: wrap;
      justify-content: center;
      margin-top: 18px;
      li {
        font-size: 14px;
        margin-right: 16px;
        color: #808893;
        >a {
          display: block;
          &.on {
            padding-bottom: 2px;
            color: #ff365e;
            border-bottom: 2px solid #ff365e;
          }
        }
      }
    }
  }
}
// ButtonTitle
.pager-nav {
    text-align: center;
    margin-bottom: 18px;
  h2 {
    font-size: 20px;
  }
}
.arrow-wrap {
  display: none;
}

@media screen and (min-width: map-get($breakpoints, "medium")) {
  .nav-wrap {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    h2 {
      width: 50%;
      font-size: 32px;
      text-align: left;
    }
    .title-nav {
      width: 50%;
      ul {
        display: flex;
        flex: wrap;
        justify-content: flex-end;
        li {
          text-align: right;
          font-size: 17px;
          margin-right: 32px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
  // ButtonTitle
  .pager-nav {
    text-align: center;
    margin-bottom: 18px;
    display: flex;
    flex: wrap;
    justify-content: space-between;
    h2 {
      font-size: 32px;
    }
  }
  .arrow-wrap {
    display: block;
  }

  .arrow-wrap {
    display: block;
    float: right;
    height: 48px;
    .arrow-num {
      line-height: 47px;
      display: inline-block;
      width: auto;
      margin-right: 12px;
      font-size: 16px;
      line-height: 48px;
      color: #888;
      vertical-align: text-bottom;
    }
    .arrow-box {
      cursor: pointer;
      display: inline-block;
      cursor: pointer;
      .button-prev {
        width: 40px;
        height: 40px;
        margin-right: -6px;
        padding: 0;
        background: url(~@/assets/images/ic-square-arrow-l-n@3x.png) no-repeat
          center/cover;
        background-size: 25px 25px;
        transform: rotateX(180deg);
        border: 1px solid #f2f4f7;

        &[disabled] {
          background: url(~@/assets/images/ic-square-arrow-l-n.png) no-repeat
            center/cover;
        }
      }
      .button-next {
        width: 40px;
        height: 40px;
        margin: 0;
        padding: 0;
        background: url(~@/assets/images/ic-square-arrow-r-s.png) no-repeat
          center/cover;
        border: 1px solid #f2f4f7;
        background-size: 40px 40px;
        cursor: pointer;
      }
    }
  }
}
</style>
