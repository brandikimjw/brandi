<template>
  <header class="header">
    <div class="artc-header">
        <div class="artc-continer product-list">
          <!-- 로고이미지 -->
          <h1 class="logo hide-text"><a href="/" class="link">BRANDI</a></h1>
          <!-- form 버튼,인풋 -->
          <form method="get" action="/search" class="form-search">
            <div class="form-cont">
              <input type="search" aria-label="검색어 입력란" class="input-search" />
              <button type="submit" name="search" class="button-search hide-text">검색</button>
              <input type="hidden" name="r" value="/" />
            </div>
          </form>
          <!-- //form 버튼,인풋 -->
          <!-- 장바구니/짬하기/마이페이지 -->
          <nav class="nav-mine">
            <a href="#" class="btn-cart hide-text">
              <span class="count">99+</span>
              장바구니
            </a>
            <a href="#" class="btn-favor hide-text">찜하기</a>
            <a href="#" class="btn-mypage hide-text">
              마이페이지
            </a>
          </nav>
        </div>
    </div>
    <div class="artc-main">
      <div class="inner">
        <div class="header-nav-container swiper-container">
            <nav class="swiper-wrapper">
                <a :href="titleItems.link" v-for="(titleItems, index) in titleItems" :key="index" :class="titleItems.getCurrentName + (' swiper-slide')" @mouseover="showList(titleItems)" @mouseleave="listOne = false">{{ titleItems.txt }}
                  <!-- 트렌드 아이템 -->
                  <div class="wrap-item" v-if=" titleItems.getCurrentName === 'trend' || titleItems.getCurrentName === 'brand' || titleItems.getCurrentName === 'beauty' " :class="{ on : listOne }">
                    <div class="inner">
                      <ul v-for="(subItems, index) in subItems" :key="index">
                        {{subItems.txt}}
                        <li v-for="(subItems, index) in subItems.subItems" :key="index">
                          <a href="#">{{ subItems.item }}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </a>
            </nav>
        </div>
      </div>
      <!-- <li>scrollTop() : <span class="pageYOffset">0</span>px</li> -->
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  components: {
  },
  data() {
    return {
      trend: false,
      listOne: false,
      navSlide: '',
      isMobile: '',
      currentIndex : '1',
      currentIndex : 0,
      titleItems: [
        {
          txt: "홈",
          getCurrentName: "home",
          linkType : 'link',
          link : '/',
        },
        {
          txt: "하루배송",
          getCurrentName: "oneday",
          linkType : 'link',
          link : '/todaydelivery',
        },
        {
          txt: "혜택존",
          getCurrentName: "benefit",
          linkType : 'link',
          link : '/benefit',
        },
        {
          txt: "베스트",
          getCurrentName: "best",
          linkType : 'link',
          link : '/best',
        },
        {
          txt: "신상특가",
          getCurrentName: "special",
          linkType : 'link',
          link : '/newpage',
        },
        {
          txt: "트렌드",
          getCurrentName: "trend",
          linkType : 'link',
          link : '/timedeal',
        },
        {
          txt: "브랜드",
          getCurrentName: "brand",
          linkType : 'link',
          link : '/brand',
        },
        {
          txt: "뷰티스토어",
          getCurrentName: "beauty",
          linkType : 'link',
          link : '/todaydelivery',
        },
      ],
      subItems: [
        {
          txt: "옷",
          subItems: [
            { item: "자켓1" },
            { item: "자켓2" },
            { item: "자켓3" },
            { item: "자켓4" },
          ],
        },
        {
          txt: "바지",
          subItems: [
            { item: "바지1" },
            { item: "바지2" },
            { item: "바지3" },
            { item: "바지4" },
          ],
        },
        {
          txt: "치마",
          subItems: [
            { item: "치마1" },
            { item: "치마2" },
            { item: "치마3" },
            { item: "치마4" },
          ],
        },
        {
          txt: "원피스",
          subItems: [
            { item: "원피스1" },
            { item: "원피스2" },
            { item: "원피스3" },
            { item: "원피스4" },
          ],
        },
        {
          txt: "청바지",
          subItems: [
            { item: "청바지1" },
            { item: "청바지2" },
            { item: "청바지3" },
            { item: "청바지4" },
          ],
        },
        {
          txt: "양말",
          subItems: [
            { item: "양말1" },
            { item: "양말2.item" },
            { item: "양말3.item" },
            { item: "양말4.item" },
          ],
        },
        {
          txt: "신발",
          subItems: [
            { item: "신발1.item1" },
            { item: "신발2.item1" },
            { item: "신발3.item1" },
            { item: "신발4.item1" },
          ],
        },
        {
          txt: "티셔츠",
          subItems: [
            { item: "티셔츠1.item1" },
            { item: "티셔츠2.item2" },
            { item: "티셔츠3.item3" },
            { item: "티셔츠4.item4" },
          ],
        },
        {
          txt: "바지",
          subItems: [
            { item: "바지1.item1" },
            { item: "바지2.item2" },
            { item: "바지3.item3" },
            { item: "바지4.item4" },
          ],
        },
      ],
    }
  },
  methods: {
    setScreenSize() {
      if (window.innerWidth > 768) {
        this.isMobile = false;
      }
      if (window.innerWidth <= 768) {
        this.isMobile = true;
      }
    },
    navigtationSlide() {
      this.navSlide = new Swiper(".header-nav-container", {
        clickable: true,
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: true,
        grabCursor: true,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        watchOverflow: true,
      });
    },
    showList(titleItems) {
      if(titleItems.getCurrentName === 'trend' || titleItems.getCurrentName === 'brand' || titleItems.getCurrentName === 'beauty') {
        this.listOne = true
      } else {
        this.listOne = false
      }
    },
    headerSticky(){
      let mobileSticky = document.querySelector('.artc-main');
      //let pageYOffset = (window.pageYOffset || document.documentElement.scrollTop);
      //document.querySelector(".pageYOffset").innerText = pageYOffset + screen.height;
      //console.log(mobileSticky);
      //console.log(mobileSticky.getBoundingClientRect().top);
      if ( mobileSticky.getBoundingClientRect().top < 0 ){
        document.querySelector('.artc-header').style.minHeight = 0
        mobileSticky.classList.add('fixed')
      }else {
        //mobileSticky.classList.remove('fixed')
        //document.querySelector('.artc-header').style.minHeight =
      }
    }
  },
  watch: {
    isMobile(newVal) {
      if (newVal) {
        this.navigtationSlide();
      } else {
        this.navSlide.destroy();
      }
    },
  },
  created() {
    this.setScreenSize();
    this.navigtationSlide();
    window.addEventListener('resize', this.setScreenSize);
  },
  mounted() {
    //this.headerSticky();
    window.addEventListener('scroll', this.headerSticky);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #d3d7df;
  .artc-header {
    border-bottom: 1px solid #ebeef2;
    .artc-continer {
      flex-wrap:nowrap;
      justify-content:space-between;
      align-items:center;
    }
    .logo {
      width: 116px;
      height: 27px;
      > a {
        display: block;
      }
    }
    .form-search {
      display: flex;
      flex: wrap;
      .form-cont {
        // display: flex;
        // flex: wrap;
        input {
          display: none;
        }
        .button-search {
          display: inline-block;
          background: url(~@/assets/images/ic-search-s@3x.png) no-repeat;
          width: 28px;
          height: 28px;
          background-size: cover;
          position: absolute;
          right: 60px; top: 14px;
        }
      }
    }
  }
  .artc-continer {
    display:flex;
    padding:17px 16px 16px;
    flex-wrap:nowrap;
    justify-content:space-between;
    align-items:center;
  }

  .logo {
    flex:0 0 auto;
    margin:0;
    .link{
      display:block;
      width: 116px;
      height: 27px;
      background: url(~@/assets/images/ic-brandi-symbolrogo-l@3x.png) no-repeat 50%;
      background-size: cover;
      overflow:hidden;
      text-indent:-999px;
    }
  }

  .form-search {
    display:flex;
    flex:1 1 auto;
    margin:-10px 0;
    padding:0 2px 0 12px;
    justify-content:flex-end;
    display: none;
  }

  .inpt-search {
    width:calc(100% - 63px);
    height:48px;
    background-color:transparent;
    border:0;
    border-radius:0;
    appearance:none;
    font-size:16px;
    vertical-align:bottom;
    opacity: 0;
  }

  .btn-cart,
  .btn-favor,
  .btn-mypage{
    display:inline-block;
    position:relative;
    width:28px;
    height:28px;
    margin:-10px 0;
    background-repeat:no-repeat;
    background-position:top center;
    background-size:28px 28px;
    overflow:hidden;
    text-indent:-999px;
  }
  .nav-mine {
    position: relative;
    .btn-cart{
      display: inline-block;
      background:url(~@/assets/images/ic-cart-s@3x.png) no-repeat;
      background-size: cover;
      position: absolute;
      right: 4px;
      bottom: -2px;
    }
  }

  .btn-favor{
    display:none;
    background: url(~@/assets/images/ic-favorite@3x.png) no-repeat;
  }
  .btn-mypage{
    display:none;
    background: url(~@/assets/images/ic-my@3x.png) no-repeat;
  }
}

//GNB메뉴
.artc-main {
  width: 100%;
  background-color: #fff;
  &.fixed {
    position:fixed;
    left:50%;
    top:0;
    width:100%;
    transform:translate(-50%, 0);
    z-index: 99999999;
  }
  .inner {
    .header-nav-container {
      .swiper-wrapper {
        display: flex;
        justify-content: space-between;
        .swiper-slide {
          width: auto;
          font-size: 15px;
          font-weight: bold;
          line-height: 21px;
          word-break: keep-all;
          text-align: center;
          padding: 14px 10px;
          color: #202429;
          &.trend { color: #ff4569; }
          &.brand { color: #cea375; }
          &.beauty { color: #dea6a6; }
            .wrap-item {
              display: none;
            }
        }
      }
    }
  }
}

@media screen and (min-width: map-get($breakpoints, "medium")) {
  .header {
    border-bottom: 1px solid #d3d7df;
    .artc-header {
      .logo {
          width: 180px;
          height: 42px;
        .link {
          width: 180px;
          height: 42px;
          background-size:contain;
        }
      }
      .form-search {
        margin: 0;
        padding: 0;
        .form-cont {
          width: 304px;
          display: flex;
          margin-left: 45%;
          min-height: 40px;
          margin-right: 40px;
          border-bottom: 2px solid #202429;
          position: relative;
          .button-search {
            position: absolute;
            right: 0%;
            top: 0%;
            width: 32px;
            height: 32px;
          }
          input {
            display: block;
            border: none;
            width: calc(100% - 40px);
            line-height: 20px;
          }
        }
        .nav-mine {
          .btn-cart {display: block;}
          .btn-favor {display: block;}
          .btn-mypage {display: block;}
        }
      }

      .artc-continer {
        padding: 31px 20px;
        position: static;
        .nav-mine {
          flex: 0 0 auto;
          width: 180px;
          height: 50px;
          margin-right: 0px;
          vertical-align: middle;
          line-height: 50px;

          .btn-cart{
            position: static;
            width:40px;
            height:40px;
            text-indent: -999px;
            margin-right: 20px;

            .count {
              display: inline-block;
              font-size: 8px;
              color: #fff;
              background-color: #ff365e;
              position: absolute;
              left: 20px; top: 3px;
              text-indent: 0;
              line-height: 12px;
              padding: 2px 4px 2px 4px;
              border-radius: 8px;
            }
          }
          .btn-favor{
            display:inline-block;
            background: url(~@/assets/images/ic-favorite@3x.png) no-repeat;
            background-repeat:no-repeat;
            background-position:top center;
            background-size:40px 40px;
            width:40px;
            height:40px;
            margin-right: 20px;
          }
          .btn-mypage{
            display:inline-block;
            background: url(~@/assets/images/ic-my@3x.png) no-repeat;
            background-repeat:no-repeat;
            background-position:top center;
            background-size:40px 40px;
            width:40px;
            height:40px;
            margin-right: 0px;

            &::after {
              display: block;
              content: '';
              width: 20px;
              height: 13px;
              background: url(~@/assets/images/ic-off@3x.png) no-repeat;
              background-size: cover;
            }
          }
        }
      }
    }
  }
  //GNB메뉴
  .artc-main {
    position: relative;
    z-index: 999;
    overflow: visible;
    .inner {
      max-width: 1200px;
      margin: 0 auto;
      .header-nav-container {
        position: static;
        padding: 0 12px;
        .swiper-wrapper {
          position: static;
          padding: 0 12px 0 12px;
          transform: none;
          > a{
            &.home {
              position: relative;
              &:after {
                content: '';
                display: inline-block;
                width: 100%;
                height: 3px;
                position: absolute;
                left: 0; bottom: 0;
                background: #202429;
              }
            }
          }
          .swiper-slide {
            display: block;
            position: static;
            padding: 18px 18px;
            font-size: 18px;
            line-height: 24px;

            &:hover {
              border-bottom: 3px solid #202429;
              padding: 18px 18px 15px 18px;
            }

            &.trend{
             &:hover {
              border-bottom: 3px solid #ff4569;
              padding: 18px 18px 15px 18px;
             }
            }
            &.brand{
             &:hover {
              border-bottom: 3px solid #cea375;
              padding: 18px 18px 15px 18px;
             }
            }
            &.beauty{
             &:hover {
              border-bottom: 3px solid #dea6a6;
              padding: 18px 18px 15px 18px;
             }
            }



            .wrap-item {
              display: block;
              //border-top: 1px solid #d3d7df;
              border-bottom: 1px solid #d3d7df;
              width: 100%;
              position: absolute;
              left: 0;
              top: 60px;
              z-index: 10;
              background: #fff;
              overflow: hidden;
              max-height: 0;
              &.on {
                max-height: 2400px;
                transition: max-height .5s ease-in-out;
                border-top: 1px solid #d3d7df;
              }
              .inner{
                max-width: 1200px;
                display: flex;
                flex-wrap: wrap;
                border-left: 1px solid #e1e1e1;
                border-right: 1px solid #e1e1e1;
                ul {
                  position: relative;
                  padding: 32px 20px;
                  box-sizing: border-box;
                  color: #202429;
                  font-size: 16px;
                  font-weight: bold;
                  width: calc(100%/6);
                  &:after {
                    content: '';
                    display: inline-block;
                    width: 1px;
                    height: 200%;
                    background: #e1e1e1;
                    position: absolute;
                    right: 0; top: 0;
                  }

                  li {
                    > a {
                      display: block;
                      font-size: 15px;
                      margin-top: 8px;
                      color: #737373;
                      font-size: 16px;
                      font-weight: normal;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>