<template>
  <footer class="footer-wrap">
    <nav class="link-wrap product-list">
      <div class="links-about">
        <a href="#" target="_blank" class="terms">이용약관</a>
        <a href="#" target="_blank" class="privacy">개인정보처리방침</a>
        <a href="#" target="_blank" class="business">사업자정보확인</a>
        <a href="#" target="_blank" class="admin">인재채용</a>
      </div>
      <div class="links-social">
        <a href="#" target="_blank" class="question">자주묻는 질문</a>
        <a href="#" target="_blank" class="kakao">플러스친구</a>
        <a href="#" target="_blank" class="facebook">페이스북</a>
        <a href="#" target="_blank" class="instagram">인스타그램</a>
      </div>
    </nav>
    <address class="info-wrap product-list" @click.prevent="$event.target.parentElement.parentElement.parentElement.classList.toggle('active')">
      <div class="info-company">
        <div class="tit-h1">
          <a href="#">(주)브랜디</a>
        </div>
      </div>
      <div class="brandi-info">
        <div class="bundle">
          <span class="part dash">대표이사 : 서정민</span>
          <span class="part dash">사업자등록번호 : 220-88-93187</span>
          <span class="part">통신판매업신고 : 2016-서울강남-00359</span>
        </div>
        <div class="bundle">
          <span class="part dash">호스팅사업자 : (주)브랜디</span>
          <span class="part">주소 : 서울 강남구 테헤란로38길 12 (역삼동) 디앤와이빌딩 (06221)</span>
          <span class="part">개인정보관리책임자 : 윤석호( <a href="#">(privacy@brandi.co.kr)</a> )</span>
        </div>
      </div>
      <p class="alert">
        브랜디는 통신판매중개자로서 통신판매 당사자가 아니며, 판매자가 등록한 상품정보 및 거래에 브랜디는 책임을 지지 않습니다.
      </p>
      <div class="info-cs">
        <h2 class="tit-h1">고객센터 <a href="#">1566-6575</a> </h2>
        <div class="info">
          <h3 class="tit-h2">영업시간</h3>
          <span>AM 10:00 ~ PM 17:00</span>
        </div>
        <div class="info">
          <h3 class="tit-h2">점심시간</h3>
          <span>PM 12:30 ~ PM 13:30</span>
        </div>
        <div class="info">
          <h3 class="tit-h2">고객문의</h3>
          <a href="mailto:brandics@brandi.co.kr"> brandics@brandi.co.kr</a>
        </div>
      </div>
    </address>
  </footer>
</template>

<script>
export default {
  name: 'ComponentHeader',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .footer-wrap {
    border-top: 1px solid #ebeef2;
    background: #F7F8FA;
    margin-top: 80px;
    padding-bottom: 80px;
  }
  //이용약관 처리방침
  .link-wrap {
    border-bottom: 1px solid #ebeef2;
    padding: 20px 16px;
    .links-about {
    display: flex;
    flex: wrap;
    margin-bottom: 12px;
      > a {
        padding: 0px 4px 0;
        color: #5f6773;
        font-size: 11px;
      }
    }
  }
  //아이콘
  .footer-wrap {
    .links-social {
      display: flex;
      flex: wrap;
      .question {
        background: url(~@/assets/images/ic-faq-32@3x.png) no-repeat;
        width: 32px;
        height: 32px;
        background-size: 32px 32px;
        padding: 0 5px 10px;
        box-sizing: content-box;
        background-position: 50% top;
        text-indent: -999px;
      }
      .kakao {
        background: url(~@/assets/images/ic-kakaoplus-rogo-32@3x.png) no-repeat;
        width: 32px;
        height: 32px;
        background-size: 32px 32px;
        padding: 0 5px 10px;
        box-sizing: content-box;
        background-position: 50% top;
        text-indent: -999px;
      }
      .facebook {
        background: url(~@/assets/images/ic-facebook-rogo-32@3x.png) no-repeat;
        width: 32px;
        height: 32px;
        background-size: 32px 32px;
        padding: 0 5px 10px;
        box-sizing: content-box;
        background-position: 50% top;
        text-indent: -999px;
      }
      .instagram {
        background: url(~@/assets/images/ic-insta-rogo-32@3x.png) no-repeat;
        width: 32px;
        height: 32px;
        background-size: 32px 32px;
        padding: 0 5px 10px;
        box-sizing: content-box;
        background-position: 50% top;
        text-indent: -999px;
      }
    }
  }
  //브랜디 제목
  .info-company {
    font-style: normal;

    .tit-h1 {
      margin: 0 0 8px;
      color: #313842;
      font-size: 15px;
      font-weight: 700;
      > a {
        display: block;

        &.active {
         .brandi-info {
           display: block;
         }
        }
      }
      ::after {
        display: inline-block;
        content: '';
        box-sizing: content-box;
        background: url(~@/assets/images/ic-more-down-m@3x.png) no-repeat;
        background-size: 12px 12px;
        width: 12px;
        height: 12px;
        margin-left: 5px;
      }
    }
  }
  //브랜디 정보
  .brandi-info {
    display: none;
    span {
      display: block;
      font-style: normal;
      font-size: 11px;
      color: #5f6773;
      line-height: 16px;
    }
  }
  .info-wrap {
    margin-top: 20px;
    padding: 0 16px 0 16px;
    .alert {
      display: block;
      font-size: 11px;
      color: #313842;
      font-style: normal;
      margin-top: 8px;
      line-height: 16px;
    }

    &.active {
      .brandi-info {
        display: block;
        transition: all 1s;
      }
    }
  }
  .info-cs {
    margin-top: 20px;
    .tit-h1 {
      font-style: normal;
      margin: 0 0 8px;
      color: #313842;
      font-size: 15px;
      font-weight: 700;
      > a {
        color: #313842;
      }
    }
    .info {
      font-style: normal;
      display: flex;
      justify-content: start;
      margin-top: 4px;
      color: #5f6773;
      h3 {
        display: block;
        font-size: 11px;
        margin-right: 5px;
        width: auto;
      }
      span {
        display: block;
        font-size: 11px;
      }
      > a {
        display: block;
        font-size: 11px;
      }
    }
  }
@media screen and (min-width: map-get($breakpoints, "medium")) {
  .link-wrap {
    .links-about {
      position: relative;
      > a {
        font-size: 14px;
      }
      .privacy{
        position: relative;
        margin-left: 12px;
        padding-left: 12px;
        font-weight: bold;
        &::after {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          top: 3px;
          width: 1px;
          height: 14px;
          background-color: #acb3bd;
        }
      }
      .business {
        position: relative;
        margin-left: 12px;
        padding-left: 12px;
        &::after {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          top: 3px;
          width: 1px;
          height: 14px;
          background-color: #acb3bd;
        }
      }
      .admin {
        position: relative;
        margin-left: 12px;
        padding-left: 12px;
        &::after {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          top: 3px;
          width: 1px;
          height: 14px;
          background-color: #acb3bd;
        }
      }
    }
  }
  .footer-wrap {
    .links-social {
      .question {
        width: auto;
        padding-left: 35px;
        background-position: left top;
        color: #5f6773;
        font-size: 14px;
        line-height: 32px;
        text-indent: 0;
      }
      .kakao {
        width: auto;
        padding-left: 35px;
        background-position: left top;
        color: #5f6773;
        font-size: 14px;
        line-height: 32px;
        text-indent: 0;
      }
      .facebook {
        width: auto;
        padding-left: 35px;
        background-position: left top;
        color: #5f6773;
        font-size: 14px;
        line-height: 32px;
        text-indent: 0;
      }
      .instagram {
        width: auto;
        padding-left: 35px;
        background-position: left top;
        color: #5f6773;
        font-size: 14px;
        line-height: 32px;
        text-indent: 0;
      }
    }
  }
}
@media screen and (min-width: map-get($breakpoints, "large")) {
    .link-wrap {
      display: flex;
      justify-content: space-between;
      line-height: 28px;

      .links-about {
        position: relative;
        margin: 0;
        > a {
          font-size: 14px;
        }
        .privacy{
          position: relative;
          margin-left: 10px;
          padding-left: 14px;
          font-weight: bold;
          &::after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: 10px;
            width: 1px;
            height: 14px;
            background-color: #acb3bd;
          }
        }
        .business {
          position: relative;
          margin-left: 10px;
          padding-left: 14px;
          &::after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: 10px;
            width: 1px;
            height: 14px;
            background-color: #acb3bd;
          }
        }
        .admin {
          position: relative;
          margin-left: 10px;
          padding-left: 14px;
          &::after {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: 10px;
            width: 1px;
            height: 14px;
            background-color: #acb3bd;
          }
        }
      }
      .links-social {
        display: inline-block;
      .question {
        font-size: 14px;
        width: auto;
        padding-bottom: 15px;
        padding-top: 5px;
      }
      .kakao {
        font-size: 14px;
        padding-bottom: 15px;
        padding-top: 5px;
      }
      .facebook {
        font-size: 14px;
        padding-bottom: 15px;
        padding-top: 5px;
      }
      .instagram {
        font-size: 14px;
        padding-bottom: 15px;
        padding-top: 5px;
      }
    }
  }

  .info-company {
    display: inline-block;
    width: 70%;
    box-sizing: content-box;
    .tit-h1 {
      font-size: 18px;
      float: left;
      a {
        color: #313842;
        &::after {
          display: none;
        }
      }
    }
  }
  .brandi-info {
    display: inline-block;
    width: 70%;
    line-height: 21px;
    box-sizing: content-box;
    .bundle {
      .part {
        display: inline;
        font-size: 14px;
        line-height: 0px;
        position: relative;
        margin-right: 5px;
        letter-spacing: -0.2px;
      }
      .dash {
        &:after {
          display: inline-block;
          content: '';
          width: 1px;
          height: 12px;
          background-color: #5f6773;
          position: absolute;
          right: -5px; top: 5px;
          margin-left: 5px;
        }
      }
    }
  }
  .info-wrap {
    position: relative;
    .alert {
      display: inline-block;
      width: 70%;
      box-sizing: content-box;
      font-size: 14px;
      line-height: 18px;
    }
  }
  .info-cs {
    display: inline-block;
    width: 30%;
    float: right;
    box-sizing: content-box;
    margin: 0;
    position: absolute;
    top: 0; right: 0;
    .tit-h1 {
      font-size: 18px;
      line-height: 18px;
      margin-bottom: 16px;
    }
    .info {
      > h3 {
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 5px;
      }
      span,
      a {
        font-size: 14px;
        line-height: 16px;
      }
    }
  }
}
</style>