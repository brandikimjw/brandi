<template>
  <div class="main-wrapper">
    <!-- main-banner swiper -->
    <article class="main-banner">
      <section class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <a href="#"><img src="#" alt="배너슬라이드1" class="style"></a>
          </li>
          <li class="swiper-slide">
            <a href="#"><img src="#" alt="배너슬라이드2" class="style"></a>
          </li>
          <li class="swiper-slide">
            <a href="#"><img src="#" alt="배너슬라이드3" class="style"></a>
          </li>
        </ul>
      </section>
      <div class="btn-wrap">
        <button type="button" aria-label="이전 슬라이드 이동" class="swiper-button-prev"></button>
        <button type="button" aria-label="다음 슬라이드 이동" class="swiper-button-next"></button>
      </div>
    </article>

    <!-- TODAY 베스트 -->
    <article class="main-products-">
      <div class="title-wrap">
        <h2>TODAY 베스트</h2>
        <ul class="nav">
          <li class="active"><a href="#">전체</a></li>
          <li><a href="#">쇼핑몰마켓</a></li>
          <li><a href="#">브랜드</a></li>
          <li><a href="#">뷰티</a></li>
        </ul>
      </div>

      <!-- list이미지 -->
      <section class="main-products-list">
        <ul class="main-list">
          <!-- list1 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="미쏘 글로우 플리츠">
              </figure>
              <div class="badge">
                  <span class="badge">1</span>
              </div>
              <div class="info">
                  <p class="sellor">미쏘</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
              </div>
            </a>
          </li>
          <!-- list2 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="알파카 부들 도톰니트">
              </figure>
              <div class="badge">
                  <span class="badge">2</span>
              </div>
              <div class="info">
                  <p class="sellor">글로우프로젝트</p>
                  <strong class="product">알파카 부들 도톰니트</strong>
                  <span class="discount">17%</span>
                  <em class="price">44,000</em>
              </div>
            </a>
          </li>
          <!-- lsit3 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="글로우 플리츠 스커트">
              </figure>
              <div class="badge">
                  <span class="badge">3</span>
              </div>
              <div class="info">
                  <p class="sellor">프롬헤드투토</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">11%</span>
                  <em class="price">32,650</em>
              </div>
            </a>
          </li>
          <!-- list4 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="헨드메이드 숏 코트">
              </figure>
              <div class="badge">
                  <span class="badge">4</span>
              </div>
              <div class="info">
                  <p class="sellor">디어썸띵</p>
                  <strong class="product">핸드메이드 숏 코트 [3color]</strong>
                  <span class="discount">10%</span>
                  <em class="price">118,000</em>
              </div>
            </a>
          </li>
          <!-- lsit5 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="[이너로 좋아요] 도톰 코튼…">
              </figure>
              <div class="badge">
                  <span class="badge">5</span>
              </div>
              <div class="info">
                  <p class="sellor">모디데이</p>
                  <strong class="product">[이너로 좋아요] 도톰 코튼…</strong>
                  <em class="price">18,000</em>
              </div>
            </a>
          </li>
          <!-- list6 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="코튼 일자 롱 스커트">
              </figure>
              <div class="badge">
                  <span class="badge">6</span>
              </div>
              <div class="info">
                  <p class="sellor">프롬비기닝</p>
                  <strong class="product">코튼 일자 롱 스커트</strong>
                  <span class="discount">10%</span>
                  <em class="price">27,000</em>
              </div>
            </a>
          </li>
          <!-- list7 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="캔디블 도톰 루즈핏 가디건">
              </figure>
              <div class="badge">
                  <span class="badge">7</span>
              </div>
              <div class="info">
                  <p class="sellor">모디데이</p>
                  <strong class="product">캔디블 도톰 루즈핏 가디건</strong>
                  <em class="price">39,900</em>
              </div>
            </a>
          </li>
          <!-- list8 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="도톰 부들 울 루즈핏 니트">
              </figure>
              <div class="badge">
                  <span class="badge">8</span>
              </div>
              <div class="info">
                  <p class="sellor">프롬비기닝</p>
                  <strong class="product">도톰 부들 울 루즈핏 니트</strong>
                  <span class="discount">10%</span>
                  <em class="price">27,000</em>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>

    <div class="btn-common-main">
      <a href="#"><span class="discount">베스트</span>더보기 ></a>
    </div>

    <!-- 신상 모아보기 -->
    <article class="main-products-new">
      <div class="title-wrap">
        <h2>신상 모아보기</h2>
        <ul class="nav">
          <li class="active"><a href="#">쇼핑몰 마켓</a></li>
          <li><a href="#">브랜드</a></li>
          <li><a href="#">뷰티</a></li>
        </ul>
      </div>
      <!-- list이미지 -->
      <section class="main-products-list">
        <ul class="main-list">
          <!-- list1 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="미쏘 글로우 플리츠">
              </figure>
              <div class="info">
                  <p class="sellor">미쏘</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
              </div>
            </a>
          </li>
          <!-- list2 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="알파카 부들 도톰니트">
              </figure>
              <div class="info">
                  <p class="sellor">글로우프로젝트</p>
                  <strong class="product">알파카 부들 도톰니트</strong>
                  <em class="price">44,000</em>
              </div>
            </a>
          </li>
          <!-- lsit3 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="글로우 플리츠 스커트">
              </figure>
              <div class="info">
                  <p class="sellor">프롬헤드투토</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">11%</span>
                  <em class="price">32,650</em>
              </div>
            </a>
          </li>
          <!-- lsit4 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="글로우 플리츠 스커트">
              </figure>
              <div class="info">
                  <p class="sellor">프롬헤드투토</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">11%</span>
                  <em class="price">32,650</em>
              </div>
            </a>
          </li>
          <!-- lsit5 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="글로우 플리츠 스커트">
              </figure>
              <div class="info">
                  <p class="sellor">프롬헤드투토</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">11%</span>
                  <em class="price">32,650</em>
              </div>
            </a>
          </li>
          <!-- lsit6 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="글로우 플리츠 스커트">
              </figure>
              <div class="info">
                  <p class="sellor">프롬헤드투토</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">11%</span>
                  <em class="price">32,650</em>
              </div>
            </a>
          </li>
          <!-- lsit7 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="글로우 플리츠 스커트">
              </figure>
              <div class="info">
                  <p class="sellor">프롬헤드투토</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">11%</span>
                  <em class="price">32,650</em>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>

    <div class="btn-common-main">
      <a href="#"><span class="discount">브랜드 신상</span>더보기 ></a>
    </div>

    <!-- 서브배너 -->
    <aside class="main-sub-banner">
      <section class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="#">
              <img src="#" alt="슬라이드이미지1">
            </a>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="#" alt="슬라이드이미지2">
            </a>
          </div>
        </div>
      </section>
    </aside>

    <!-- 당신을 위한 추천 -->
    <!-- mobile version -->
    <article class="main-products-recommand">
      <section class="title-wrap">
        <h2>당신을 위한 추천</h2>
      </section>

      <!-- web version -->
      <section class="title-wrap">
        <h2>유하영님을 위한 추천</h2>
      </section>

      <div class="btn-wrap">
        <div class="btn-page">1/5</div>
        <div class="btn-box">
          <button type="button" aria-label="이전 리스트 이동" class="list-btn-prev"></button>
          <button type="button" aria-label="다음 리스트 이동" class="list-btn-next"></button>
        </div>
      </div>
      <!-- list이미지 -->
      <section class="main-products-list">
        <ul class="main-list">
          <!-- list1 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="미쏘 글로우 플리츠">
              </figure>
              <div class="info">
                  <p class="sellor">미쏘</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
              </div>
            </a>
          </li>
          <!-- list2 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="알파카 부들 도톰니트">
              </figure>
              <div class="info">
                  <p class="sellor">글로우프로젝트</p>
                  <strong class="product">알파카 부들 도톰니트</strong>
                  <span class="discount">11%</span>
                  <em class="price">44,000</em>
              </div>
            </a>
          </li>
          <!-- lsit3 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="글로우 플리츠 스커트">
              </figure>
              <div class="info">
                  <p class="sellor">프롬헤드투토</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">11%</span>
                  <em class="price">32,650</em>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>

    <!-- 놓칠 수 없는 브랜디 특가 -->
    <article class="main-products-special">
      <div class="title-wrap">
        <h2>놓칠 수 없는 브랜디 특가</h2>
      </div>
      <div class="btn-wrap">
        <div class="btn-page">1/5</div>
        <div class="btn-box">
          <button type="button" aria-label="이전 리스트 이동" class="list-btn-prev"></button>
          <button type="button" aria-label="다음 리스트 이동" class="list-btn-next"></button>
        </div>
      </div>
      <ul class="main-list-a">
        <li class="thumb-a info">
          <strong class="product">BRANDI TIME PRICE</strong>
          <span class="discount">지금 가입하면 5만원 쿠폰팩 지급!추가할인 받고 구매하자!</span>
        </li>
        <!-- list1 -->
        <li class="thumb-a">
          <a href="#">
            <figure class="figure">
                <img src="#" alt="덤블 뽀글이 리버시블 베이직...">
            </figure>
            <div class="badge-a">
                <span class="badge">41%</span>
            </div>
            <div class="info">
                <p class="sellor">남은시간 123:05:55</p>
                <strong class="product">덤블 뽀글이 리버시블 베이직...</strong>
                <em class="price">75,880</em>
            </div>
          </a>
        </li>
        <!-- list2 -->
        <li class="thumb-a">
          <a href="#">
            <figure class="figure">
                <img src="#" alt="덤블 뽀글이 리버시블 베이직...">
            </figure>
            <div class="badge-a">
                <span class="badge">41%</span>
            </div>
            <div class="info">
                <p class="sellor">남은시간 123:05:55</p>
                <strong class="product">덤블 뽀글이 리버시블 베이직...</strong>
                <em class="price">75,880</em>
            </div>
          </a>
        </li>
        <!-- list3 -->
        <li class="thumb-a">
          <a href="#">
            <figure class="figure">
                <img src="#" alt="덤블 뽀글이 리버시블 베이직...">
            </figure>
            <div class="badge-a">
                <span class="badge">41%</span>
            </div>
            <div class="info">
                <p class="sellor">남은시간 123:05:55</p>
                <strong class="product">덤블 뽀글이 리버시블 베이직...</strong>
                <em class="price">75,880</em>
            </div>
          </a>
        </li>
      </ul>
    </article>

    <!-- 하루 배송 상품은 내일도착 -->
    <article class="main-products-oneday">
      <div class="title-wrap">
        <figure>
          <img src="#" alt="">
        </figure>
        <h2 class="title">상품은 내일 도착</h2>
      </div>

      <!-- list이미지 -->
      <section class="main-products-list">
        <ul class="main-list">
          <!-- list1 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="미쏘 글로우 플리츠">
              </figure>
              <div class="badge">
                  <figure>
                    <img src="#" alt="하루배송">
                  </figure>
              </div>
              <div class="info">
                  <p class="sellor">미쏘</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
              </div>
            </a>
          </li>
          <!-- list2 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="미쏘 글로우 플리츠">
              </figure>
              <div class="badge">
                  <figure>
                    <img src="#" alt="하루배송">
                  </figure>
              </div>
              <div class="info">
                  <p class="sellor">미쏘</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
              </div>
            </a>
          </li>
          <!-- list3 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="미쏘 글로우 플리츠">
              </figure>
              <div class="badge">
                  <figure>
                    <img src="#" alt="하루배송">
                  </figure>
              </div>
              <div class="info">
                  <p class="sellor">미쏘</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
              </div>
            </a>
          </li>
          <!-- list4 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="미쏘 글로우 플리츠">
              </figure>
              <div class="badge">
                  <figure>
                    <img src="#" alt="하루배송">
                  </figure>
              </div>
              <div class="info">
                  <p class="sellor">미쏘</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
              </div>
            </a>
          </li>
          <!-- list5 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="미쏘 글로우 플리츠">
              </figure>
              <div class="badge">
                  <figure>
                    <img src="#" alt="하루배송">
                  </figure>
              </div>
              <div class="info">
                  <p class="sellor">미쏘</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
              </div>
            </a>
          </li>
          <!-- list6 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="미쏘 글로우 플리츠">
              </figure>
              <div class="badge">
                  <figure>
                    <img src="#" alt="하루배송">
                  </figure>
              </div>
              <div class="info">
                  <p class="sellor">미쏘</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
              </div>
            </a>
          </li>
          <!-- list7 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="미쏘 글로우 플리츠">
              </figure>
              <div class="badge">
                  <figure>
                    <img src="#" alt="하루배송">
                  </figure>
              </div>
              <div class="info">
                  <p class="sellor">미쏘</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
              </div>
            </a>
          </li>
          <!-- list8 -->
          <li class="thumb">
            <a href="#">
              <figure class="figure">
                  <img src="#" alt="미쏘 글로우 플리츠">
              </figure>
              <div class="badge">
                  <figure>
                    <img src="#" alt="하루배송">
                  </figure>
              </div>
              <div class="info">
                  <p class="sellor">미쏘</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
              </div>
            </a>
          </li>
        </ul>
      </section>
    </article>

    <div class="btn-common-main">
      <a href="#"><span class="discount">하루배송 상품</span>더보기 ></a>
    </div>

    <!-- 지금 뜨고있는 기획전 -->
    <article class="main-products-pop">
      <div class="title-wrap">
        <h2>지금 뜨고있는 기획전</h2>
      </div>
      <div class="btn-wrap">
        <div class="btn-page">1/5</div>
        <div class="btn-box">
          <button type="button" aria-label="이전 리스트 이동" class="list-btn-prev"></button>
          <button type="button" aria-label="다음 리스트 이동" class="list-btn-next"></button>
        </div>
      </div>

      <!-- list이미지 -->
      <div class="main-products-list">
          <!-- item-left -->
          <div class="item-left">
            <ul class="main-list">
              <li class="banner">
                <a href="#">
                  <figure>
                    <img src="#" alt="mixxo배너이미지">
                  </figure>
                </a>
              </li>
              <!-- list1 -->
              <li class="thumb">
                <a href="#">
                  <figure class="figure">
                      <img src="#" alt="미쏘 글로우 플리츠">
                  </figure>
                  <div class="badge">
                      <figure>
                        <img src="#" alt="하루배송">
                      </figure>
                  </div>
                  <div class="info">
                      <p class="sellor">미쏘</p>
                      <strong class="product">글로우 플리츠 스커트</strong>
                      <span class="discount">17%</span>
                      <em class="price">25,560</em>
                  </div>
                </a>
              </li>
              <!-- list2 -->
              <li class="thumb">
                <a href="#">
                  <figure class="figure">
                      <img src="#" alt="미쏘 글로우 플리츠">
                  </figure>
                  <div class="badge">
                      <figure>
                        <img src="#" alt="하루배송">
                      </figure>
                  </div>
                  <div class="info">
                      <p class="sellor">미쏘</p>
                      <strong class="product">글로우 플리츠 스커트</strong>
                      <span class="discount">17%</span>
                      <em class="price">25,560</em>
                  </div>
                </a>
              </li>
              <!-- list3 -->
              <li class="thumb">
                <a href="#">
                  <figure class="figure">
                      <img src="#" alt="미쏘 글로우 플리츠">
                  </figure>
                  <div class="badge">
                      <figure>
                        <img src="#" alt="하루배송">
                      </figure>
                  </div>
                  <div class="info">
                      <p class="sellor">미쏘</p>
                      <strong class="product">글로우 플리츠 스커트</strong>
                      <span class="discount">17%</span>
                      <em class="price">25,560</em>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <!-- item-right -->
          <div class="item-right">
            <ul class="main-list">
              <li class="banner">
                <a href="#">
                  <figure>
                    <img src="#" alt="brandi단독이미지">
                  </figure>
                </a>
              </li>
              <!-- list1 -->
              <li class="thumb">
                <a href="#">
                  <figure class="figure">
                      <img src="#" alt="미쏘 글로우 플리츠">
                  </figure>
                  <div class="badge">
                      <figure>
                        <img src="#" alt="하루배송">
                      </figure>
                  </div>
                  <div class="info">
                      <p class="sellor">미쏘</p>
                      <strong class="product">글로우 플리츠 스커트</strong>
                      <span class="discount">17%</span>
                      <em class="price">25,560</em>
                  </div>
                </a>
              </li>
              <!-- list2 -->
              <li class="thumb">
                <a href="#">
                  <figure class="figure">
                      <img src="#" alt="미쏘 글로우 플리츠">
                  </figure>
                  <div class="badge">
                      <figure>
                        <img src="#" alt="하루배송">
                      </figure>
                  </div>
                  <div class="info">
                      <p class="sellor">미쏘</p>
                      <strong class="product">글로우 플리츠 스커트</strong>
                      <span class="discount">17%</span>
                      <em class="price">25,560</em>
                  </div>
                </a>
              </li>
              <!-- list3 -->
              <li class="thumb">
                <a href="#">
                  <figure class="figure">
                      <img src="#" alt="미쏘 글로우 플리츠">
                  </figure>
                  <div class="badge">
                      <figure>
                        <img src="#" alt="하루배송">
                      </figure>
                  </div>
                  <div class="info">
                      <p class="sellor">미쏘</p>
                      <strong class="product">글로우 플리츠 스커트</strong>
                      <span class="discount">17%</span>
                      <em class="price">25,560</em>
                  </div>
                </a>
              </li>
            </ul>
          </div>
      </div>
    </article>

    <div class="btn-common-main">
      <a href="#"><span class="discount">더 많은 기획전</span>보러가기 ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageMain',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/assets/scss/pages/main';
</style>