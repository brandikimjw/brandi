<template>
    <article>
      <div class="product-wrap">
        <NavTitle />
        <ProductItem v-for="(item, index) in productList" :key="index" :productItem='item' />
      </div>
    </article>
</template>

<script>
import ProductItem from './ProductItem'
import NavTitle from '../common/NavTitle'
import axios from 'axios';
export default {
  name: "PageMain",
  components: {
    ProductItem,
    NavTitle
  },
  created() {
    this.getProductList();
  },
  methods:{
    getProductList(){
       axios({
          method: 'get',
          url: ('https://8d1c891b-6b65-42e8-af4e-06e033fd90de.mock.pstmn.io/item'),
          responseType: 'json'
        }).then(result => {
            //console.log('result2:::',result.data);
            this.productList = result.data.productItem
        })
        //   .then(function (result) {
        //     // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))

        // });
    }
  },
  data() {
    return {
      productList : []
    };
  },
  // watch:{
  //   productList(oldValue, newValue) {
  //     console.log('a')
  //     console.log('oldValue:',oldValue)
  //     console.log('newValue:',newValue)
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.product-wrap {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px;
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
  .product-wrap {
  margin: 0 -8px;
  }
}
</style>