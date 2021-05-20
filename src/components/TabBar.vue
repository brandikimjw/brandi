<template>
  <div class="tab-wrap">
    <ul class="tab-item">
      <li class="item" v-for="(item, index) in navList" :key="index">
        <a href="#" @click.prevent="clickMenu2(index)" :class=" `'tab', tab-${item.currentName}`">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      navList : [
    {
      title : '홈',
      linkType : 'link',
      link : '/',
      currentName : 'home'
    },
    {
      title : '하루배송',
      linkType : 'link',
      link : '/todaydelivery',
      currentName : 'todaydelivery'
    },
    {
      title : '카테고리',
      linkType : 'link',
      link : '/category',
      currentName : 'cate'
    },
    {
      title : '찜',
      linkType : 'func',
      link : 'clickFavor',
      currentName : 'favor'
    },
    {
      title : 'MY',
      linkType : 'link',
      link : '/mypage',
      currentName : 'my'
    },
  ]
    }
	},
  methods: {
    clickMenu2 (event) {
      this.currentIndex2 = event.target.dataset.index
    },
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

  li {
    float: left;
    display: flex;
    flex: wrap;
    font-size: 11px;
    justify-content: space-between;
    text-indent: -999px;
    padding: 14px 20px;
    width: 20%;
  }
  a {
  width: 100%;
  height: 100%;
  display: block;
  color: #acb3bd;
  }

  .tab{
    &-home{
      content: '';
      width: 28px;
      height: 28px;
      background: url(~@/assets/images/home-gnb-3x.png) no-repeat;
      background-size: 28px 28px;

      &.on{
        &::before {
          background: url(~@/assets/images/ic-gnb-home-s@3x.png) no-repeat;
        }
      }
    }
    &-todaydelivery{
      content: '';
      width: 28px;
      height: 28px;
      background: url(~@/assets/images/icons-gnb-ic-gnb-haru@3x.png) no-repeat;
      background-size: 28px 28px;
    }
    &-cate{
      content: '';
      width: 28px;
      height: 28px;
      background: url(~@/assets/images/ic-gnb-category@3x.png) no-repeat;
      background-size: 28px 28px;
    }
    &-favor{
      content: '';
      width: 28px;
      height: 28px;
      background: url(~@/assets/images/ic-gnb-wish@3x.png) no-repeat;
      background-size: 28px 28px;
    }
    &-my{
      content: '';
      width: 28px;
      height: 28px;
      background: url(~@/assets/images/icons-gnb-ic-gnb-my@3x.png) no-repeat;
      background-size: 28px 28px;
    }
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
  .tab-wrap {
    display: none;
  }
}
</style>
