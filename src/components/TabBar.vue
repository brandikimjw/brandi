<template>
  <div class="tab-wrap">
    <ul class="tab-item">
      <li class="item" v-for="(item, index) in navList" :key="index">
        <a href="#" @click.prevent="clickMenu2(index)" :class="`tab-${item.currentName + (index === currentIndex2 ? ' on' : '')}`">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      currentIndex : '1',
      currentIndex2 : 0,
      navList : [
    {
      title : '홈',
      currentName : 'home'
    },
    {
      title : '하루배송',
      currentName : 'todaydelivery'
    },
    {
      title : '카테고리',
      currentName : 'cate'
    },
    {
      title : '찜',
      currentName : 'favor'
    },
    {
      title : '마이페이지',
      currentName : 'my'
    },
  ]
    }
	},
  methods: {
    clickMenu2 (index) {
      this.currentIndex2 = index
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tab-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  border-top: 1px solid #bcbcbd;
  overflow: hidden;
  background: #fff;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);

  .tab-item {
    display: flex;
    flex: wrap;
    line-height: 30px;

    li {
      font-size: 11px;
      text-indent: -999px;
      padding: 14px 20px;
      width: 20%;
    }
    a {
      display: block;
      color: #acb3bd;
    }
  }

  .tab {
    &-home{
      content: '';
      width: 28px;
      height: 28px;
      background: url(~@/assets/images/home-gnb-3x.png) no-repeat;
      background-size: 28px 28px;

      &.on{
        background: url(~@/assets/images/ic-gnb-home-s@3x.png) no-repeat;
        background-size: 28px 28px;
      }
    }

    &-todaydelivery{
      content: '';
      width: 28px;
      height: 28px;
      background: url(~@/assets/images/icons-gnb-ic-gnb-haru@3x.png) no-repeat;
      background-size: 28px 28px;

      &.on{
        background: url(~@/assets/images/icons-gn-bnew-s-ic-gnb-category-s@3x.png) no-repeat;
        background-size: 28px 28px;
      }
    }

    &-cate{
      content: '';
      width: 28px;
      height: 28px;
      background: url(~@/assets/images/ic-gnb-category@3x.png) no-repeat;
      background-size: 28px 28px;

      &.on{
        background: url(~@/assets/images/icons-gn-bnew-s-ic-gnb-category-s@3x.png) no-repeat;
        background-size: 28px 28px;
      }
    }

    &-favor{
      content: '';
      width: 28px;
      height: 28px;
      background: url(~@/assets/images/ic-gnb-wish@3x.png) no-repeat;
      background-size: 28px 28px;

      &.on{
        background: url(~@/assets/images/ic-gnb-home-s@3x.png) no-repeat;
        background-size: 28px 28px;
      }
    }

    &-my{
      content: '';
      width: 28px;
      height: 28px;
      background: url(~@/assets/images/icons-gnb-ic-gnb-my@3x.png) no-repeat;
      background-size: 28px 28px;

      &.on{
        background: url(~@/assets/images/ic-gnb-home-s@3x.png) no-repeat;
        background-size: 28px 28px;
      }
    }
  }
}

@media screen and (min-width: map-get($breakpoints, "medium")) {
  .tab-wrap {
    display: none;
  }
}
</style>
