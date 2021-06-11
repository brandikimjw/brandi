<template>
  <div class="main-wrapper">
    <div class="main-swiper">
      <MainSwiper />
    </div>
    <!-- TodayBest 카테고리 -->
    <MainList class="main-product-list" :zoningType="'best'" :isTab="true"/>
    <!-- 신상 모아보기 카테고리 -->
    <MainList class="main-product-list" :zoningType="'new'" :isTab="true"/>
    <!-- 서브배너 -->
    <aside class="main-sub-banner product-list"><SubBannerSwiper /></aside>
    <!-- 신상 모아보기 카테고리 -->
    <MainList class="main-product-list" :zoningType="'ai'" :isPager="true" />
    <!-- 오늘 이상품 어때요 -->
    <article class="main-special product-list">
      <div class="special-list">
        <div class="special-image">
          <h3 class="hide-text">BRANDI TIME PRICE</h3>
          <p class="hide-text">
            지금 가입하면 5만원 쿠폰팩 지급! 추가할인 받고 구매하자!
          </p>
        </div>
        <SpecialItem />
        <SpecialItem />
        <SpecialItem />
      </div>
    </article>
    <article class="main-oneday product-list">
      <!-- <h5>하루배송 상품은 내일 도착</h5> -->
      <OnedayTitle />
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
          sellorName="브랜디"
          orderBadge="1"
          :isOneDayShipping="true"
          storeName="스토어네임"
          productName="플리츠 스커트"
          :discountRate="10"
          :price="50000"
        />
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
          sellorName="브랜디"
          orderBadge="1"
          :isOneDayShipping="true"
          storeName="스토어네임"
          productName="플리츠 스커트"
          :discountRate="10"
          :price="50000"
        />
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
          sellorName="브랜디"
          orderBadge="1"
          :isOneDayShipping="true"
          storeName="스토어네임"
          productName="플리츠 스커트"
          :discountRate="10"
          :price="50000"
        />
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
          sellorName="브랜디"
          orderBadge="1"
          :isOneDayShipping="true"
          storeName="스토어네임"
          productName="플리츠 스커트"
          :discountRate="10"
          :price="50000"
        />
      </div>
      <ButtonCommon name='신상품' />
    </article>
    <article class="main-rise-pop product-list">
      <!-- <h5>지금 뜨고있는 기획전</h5> -->
      <ButtonTitle />
      <div class="rise-list">
        <RisePop />
        <RisePop />
      </div>
      <ButtonCommon name='기획전' />
    </article>
  </div>
</template>

<script>
import MainSwiper from '../main/MainSwiper';
import MainList from '../main/MainList'
import SpecialItem from '../main/SpecialItem';
// import OnedayTitle from '../common/OnedayTitle';
import RisePop from '../main/RisePop';
import SubBannerSwiper from '../SubBannerSwiper';
import ProductWrap from './ProductWrap'

export default {
  name: "PageMain",
  // props: {
  //   // productList : Array,
  // },
  components: {
    MainSwiper,
    MainList,
    SpecialItem,
    // OnedayTitle,
    RisePop,
    SubBannerSwiper,
    ProductWrap
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "~@/assets/scss/pages/main";
</style>