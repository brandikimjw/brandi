<template>
  <div class="event-item">
    <NavTitle :zoningType="zoningType" :isTab="isTab" :isPager="isPager"/>
    <div class="banner">
      <a href="#" class="banner-link"></a>
      <span class="more">바로가기 &gt;</span>
    </div>
    <div class="pop-wrap">
      <ProductItem v-for="(item, index) in productList.slice(3)" :key="index" :productItem='item' />
    </div>
  </div>
</template>

<script>
import NavTitle from '../common/NavTitle'
import ProductItem from './ProductItem'
import ButtonCommon from '../common/ButtonCommon'
import axios from 'axios';

export default {
  name: "RisePop",
  props : {
    zoningType : String,
    isTab : Boolean,
    isPager : Boolean,
  },
  components : {
    NavTitle,
    ProductItem,
    ButtonCommon
  },
  data() {
    return {
      productList : []
    };
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.event-item {
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid #ebeef2;
  .banner {
    position: relative;
    .banner-link {
      background: url(~@/assets/images/pop-banner.jpeg) no-repeat;
      overflow: hidden;
      display: block;
      width: 100%;
      padding-top: 45%;
      margin-bottom: 8px;
      line-height: 0;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    .more {
      padding: 8px 15px 8px 16px;
      font-size: 12px;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
      position: absolute;
      bottom: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.6);
      cursor: pointer;
    }
  }
}
// 컴포넌트 노말
/deep/.pop-wrap {
  display: flex;
  flex-wrap : wrap;
  .product-item {
    width: calc(100%/3);
    padding: 0 4px 20px;
    .thumb {
      overflow: hidden;
      position: relative;
      border-radius: 0;
      a {
        display: block;
      }
      .thumb-img {
        width: 100%;
        padding-top: 110%;
        background-size: cover;
        background-repeat: no-repeat;
        transition: transform 0.3s ease-in-out;
        &:hover{
          transform: scale(1.1);
      }
    }
  }
  .thumb{
    .badge-idx {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 26px;
      height: 30px;
      font-size: 12px;
      line-height: 30px;
      font-weight: 500;
      text-align: center;
      color: #fff;
      background-size: 100% 100%;
      z-index: 10;
      background: #202429;
    }
  }
    .wrap-info {
      margin-top: 10px;
      .product-info {
        position: relative;
        .sellor {
          > a {
          display: block;
          width: 70%;
          overflow: hidden;
          color: #808893;
          font-size: 12px;
          font-style: normal;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          }
        }
        .oneday-svg {
          width: 54px;
          height: 12px;
          background-size: cover;
          background-position: top right;
          text-align: right;
          position: absolute;
          right: 0;
          top: 0;
          //width: 100px;
        }
      }
      .product-title {
      .proudct-name {
        color: #202429;
        display: block;
        font-size: 13px;
        font-style: normal;
        color: #202429;
        // 한줄효과
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
    }
      .info-price {
        .dc {
          color: #ff204b;
          font-size: 15px;
          font-weight: bold;
        }
        .dc-price {
          font-size: 15px;
          font-weight: bold;
          font-style: normal;
          color: #202429;
        }
        .price {
          font-size: 15px;
          font-weight: bold;
          font-style: normal;
          color: #202429;
        }
      }
    }
  }
}
@media screen and (min-width: map-get($breakpoints, "medium")) {
}
</style>