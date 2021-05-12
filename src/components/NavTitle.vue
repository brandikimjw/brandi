<template>
  <div class="title-nav">
    <h2 class="title-nav-tit">TODAY 베스트</h2>
    <ul class="title-nav-box">
      <li class="title-nav-txt" v-for="(item, index) in testList" :key="index">
        <a href="#" @click.prevent="clickMenu2(index)" :class="{ on : index === currentIndex2 }">{{ item.txt }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavTitle",
  data() {
    return {
      currentIndex : '1',
      currentIndex2 : 0,
      testList : [
        {
          txt : '전체',
        },
        {
          txt : '베스트',
        },
        {
          txt : '신상품',
        },
        {
          txt : '특가상품',
        },
      ],
		}
	},
  methods: {
    clickMenu (event) {
      this.currentIndex = event.target.dataset.index
    },
    clickMenu2 (index) {
      this.currentIndex2 = index
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 타이틀 네브
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
      float: right;
      text-align: right;
      margin-top: 8px;
      .title-nav-txt {
        font-size: 17px;
        line-height: 17px;
        margin: 0 8px 0 0;
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
