<template>
   <article class="main-today product-list">
      <NavTitle :zoningType="zoningType" :isTab="isTab" :isPager="isPager"/>
      <ProductWrap />
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