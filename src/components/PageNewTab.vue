<template>
  <article class="sub-new-wrapper">
    <section class="sub-market-list-wrap">
      <CommonTitle />
      <MarketList />
    </section>
    <aside class="sub-banner product-list">
      <SubBanner />
    </aside>
    <section class="sub-popular-list-wrap product-list">
      <CommonTitle />
      <!-- 이거 통째로 가져오기 -->
      <article class="main-today">
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
    </section>
    <section class="sub-today-new-wrap">
      <!-- 탭매뉴 클릭하면 바뀌는 거 만들어주기 -->
      <TabTitle />
    </section>
  </article>
</template>

<script>
import CommonTitle from "./CommonTitle";
import MarketList from "./MarketList";
import SubBanner from "./SubBanner";
import ProductNormal from "./ProductNormal";
import ButtonCommon from "./ButtonCommon";
import TabTitle from "./TabTitle";

export default {
  name: "newpage",
  components: {
    CommonTitle,
    MarketList,
    SubBanner,
    ProductNormal,
    ButtonCommon,
    TabTitle,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.product-list {
  padding: 0 18px 0 18px;
}
.sub-market-list-wrap {
  margin-top: 30px;
}
.sub-popular-list-wrap {
  margin-top: 30px;
}
.sub-today-new-wrap {
  margin-top: 30px;
}
.sub-banner {
}
// today베스트ㅜ_ㅜ
.main-today {
}
.today-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px;
  .product-normal {
    height: 100%;
    width: calc(100% / 2);
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
  //today베스트ㅜ_ㅜ가 아니라 겨울 필수템! 아우터 신상
  .product-list {
    padding: 0 20px 0 20px;
  }
  .today-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
    .product-normal {
      height: 100%;
      width: calc(100% / 4);
    }
  }
}
</style>