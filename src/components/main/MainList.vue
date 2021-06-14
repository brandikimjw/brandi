<template>
   <article class="product-list">
    <NavTitle :zoningType="zoningType" :isTab="isTab" :isPager="isPager"/>
      <ProductWrap :isOneDayShipping="isOneDayShipping"/>
      <ButtonCommon :zoningType="zoningType" />
    </article>
</template>

<script>
import NavTitle from '../common/NavTitle'
import ProductWrap from './ProductWrap'
import ButtonCommon from '../common/ButtonCommon'

export default {
  name : 'MainList',
  props : {
    zoningType : String,
    isTab : Boolean,
    isPager : Boolean,
    isOneDayShipping: Boolean
  },
  components : {
    NavTitle,
    ProductWrap,
    ButtonCommon
  },
  data() {
    return{
    };
  }
}
</script>
<style lang="scss" scoped>
.product-list {
  margin-top: 40px;
}

@media screen and (min-width: map-get($breakpoints, "medium")) {

}
</style>