<template>
  <!-- <swiper
    :slides-per-view="3"
    :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
  > -->

  <div class="main-wrapper">
    <!-- 스와이퍼 -->
    <article class="main-banner">
      <h2 class="ir">메인베너</h2>
      <section class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <a href="#"
              ><img
                src="https://image.brandi.me/home/banner/bannerImage_16_1617597995.jpg"
                alt="배너슬라이드1"
                class="style"
            /></a>
          </li>
          <li class="swiper-slide">
            <a href="#"><img src="#" alt="배너슬라이드2" class="style" /></a>
          </li>
          <li class="swiper-slide">
            <a href="#"><img src="#" alt="배너슬라이드3" class="style" /></a>
          </li>
        </ul>
      </section>
      <!-- <div class="btn-wrap">
        <button type="button" aria-label="이전 슬라이드 이동" class="swiper-button-prev"></button>
        <button type="button" aria-label="다음 슬라이드 이동" class="swiper-button-next"></button>
      </div> -->
    </article>

    <!-- TODAY 베스트 -->
    <article class="main-products">
      <h2 class="ir">투데이 베스트</h2>
      <div class="container">
        <div class="title-today">
          <h2>TODAY 베스트</h2>
          <ul class="nav">
            <li class="active"><a href="#">전체</a></li>
            <li><a href="#">쇼핑몰마켓</a></li>
            <li><a href="#">브랜드</a></li>
            <li><a href="#">뷰티</a></li>
          </ul>
        </div>

        <section class="main-products">
          <ul class="main-list">
            <li class="product-list">
              <a class="pl-figure" href="#">
                <div class="figure">
                  <img
                    src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                    alt="미쏘 글로우 플리츠"
                  />
                </div>
              </a>
              <span class="badge">1</span>
              <a class="pl-info" href="#">
                <div class="info">
                  <p class="sellor"><a href="#">미쏘</a></p>
                  <strong class="product"
                    ><a href="#">글로우 플리츠 스커트</a></strong
                  >
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
                </div>
              </a>
            </li>

            <li class="product-list">
              <a class="pl-figure" href="#">
                <div class="figure">
                  <img
                    src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                    alt="미쏘 글로우 플리츠"
                  />
                </div>
              </a>
              <span class="badge">1</span>
              <a class="pl-info" href="#">
                <div class="info">
                  <p class="sellor"><a href="#">미쏘</a></p>
                  <strong class="product"
                    ><a href="#">글로우 플리츠 스커트</a></strong
                  >
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
                </div>
              </a>
            </li>

            <li class="product-list">
              <a class="pl-figure" href="#">
                <div class="figure">
                  <img
                    src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                    alt="미쏘 글로우 플리츠"
                  />
                </div>
              </a>
              <span class="badge">1</span>
              <a class="pl-info" href="#">
                <div class="info">
                  <p class="sellor"><a href="#">미쏘</a></p>
                  <strong class="product"
                    ><a href="#">글로우 플리츠 스커트</a></strong
                  >
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
                </div>
              </a>
            </li>

            <li class="product-list">
              <a class="pl-figure" href="#">
                <div class="figure">
                  <img
                    src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                    alt="미쏘 글로우 플리츠"
                  />
                </div>
              </a>
              <span class="badge">1</span>
              <a class="pl-info" href="#">
                <div class="info">
                  <p class="sellor"><a href="#">미쏘</a></p>
                  <strong class="product"
                    ><a href="#">글로우 플리츠 스커트</a></strong
                  >
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
                </div>
              </a>
            </li>

            <li class="product-list">
              <a class="pl-figure" href="#">
                <div class="figure">
                  <img
                    src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                    alt="미쏘 글로우 플리츠"
                  />
                </div>
              </a>
              <span class="badge">1</span>
              <a class="pl-info" href="#">
                <div class="info">
                  <p class="sellor"><a href="#">미쏘</a></p>
                  <strong class="product"
                    ><a href="#">글로우 플리츠 스커트</a></strong
                  >
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
                </div>
              </a>
            </li>

            <li class="product-list">
              <a class="pl-figure" href="#">
                <div class="figure">
                  <img
                    src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                    alt="미쏘 글로우 플리츠"
                  />
                </div>
              </a>
              <span class="badge">1</span>
              <a class="pl-info" href="#">
                <div class="info">
                  <p class="sellor"><a href="#">미쏘</a></p>
                  <strong class="product"
                    ><a href="#">글로우 플리츠 스커트</a></strong
                  >
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
                </div>
              </a>
            </li>

            <li class="product-list">
              <a class="pl-figure" href="#">
                <div class="figure">
                  <img
                    src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                    alt="미쏘 글로우 플리츠"
                  />
                </div>
              </a>
              <span class="badge">1</span>
              <a class="pl-info" href="#">
                <div class="info">
                  <p class="sellor"><a href="#">미쏘</a></p>
                  <strong class="product"
                    ><a href="#">글로우 플리츠 스커트</a></strong
                  >
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
                </div>
              </a>
            </li>

            <li class="product-list">
              <a class="pl-figure" href="#">
                <div class="figure">
                  <img
                    src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                    alt="미쏘 글로우 플리츠"
                  />
                </div>
              </a>
              <span class="badge">1</span>
              <a class="pl-info" href="#">
                <div class="info">
                  <p class="sellor"><a href="#">미쏘</a></p>
                  <strong class="product"
                    ><a href="#">글로우 플리츠 스커트</a></strong
                  >
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
                </div>
              </a>
            </li>
          </ul>
        </section>

        <div class="btn-common-main">
          <a class="more" href="#">
            <span class="discount">베스트</span>더보기 ></a
          >
        </div>
      </div>
    </article>

    <!-- 신상 모아보기 -->
    <article class="main-products-new">
      <h2 class="ir">신상모아보기</h2>
      <div class="title-wrap">
        <div class="main-container container">
          <h2>신상 모아보기</h2>
          <ul class="nav">
            <li class="active"><a href="#">쇼핑몰 마켓</a></li>
            <li><a href="#">브랜드</a></li>
            <li><a href="#">뷰티</a></li>
          </ul>
        </div>
      </div>

      <section class="main-products-list">
        <ul class="main-list">
          <li class="product-list">
            <a class="pl-figure" href="#">
              <div class="figure">
                <img
                  src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                  alt="미쏘 글로우 플리츠"
                />
              </div>
            </a>
            <a class="pl-info" href="#">
              <div class="info">
                <p class="sellor"><a href="#">미쏘</a></p>
                <strong class="product"
                  ><a href="#">글로우 플리츠 스커트</a></strong
                >
                <span class="discount">17%</span>
                <em class="price">25,560</em>
              </div>
            </a>
          </li>

          <li class="product-list">
            <a class="pl-figure" href="#">
              <div class="figure">
                <img
                  src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                  alt="미쏘 글로우 플리츠"
                />
              </div>
            </a>
            <a class="pl-info" href="#">
              <div class="info">
                <p class="sellor"><a href="#">미쏘</a></p>
                <strong class="product"
                  ><a href="#">글로우 플리츠 스커트</a></strong
                >
                <span class="discount">17%</span>
                <em class="price">25,560</em>
              </div>
            </a>
          </li>

          <li class="product-list">
            <a class="pl-figure" href="#">
              <div class="figure">
                <img
                  src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                  alt="미쏘 글로우 플리츠"
                />
              </div>
            </a>
            <a class="pl-info" href="#">
              <div class="info">
                <p class="sellor"><a href="#">미쏘</a></p>
                <strong class="product"
                  ><a href="#">글로우 플리츠 스커트</a></strong
                >
                <span class="discount">17%</span>
                <em class="price">25,560</em>
              </div>
            </a>
          </li>

          <li class="product-list">
            <a class="pl-figure" href="#">
              <div class="figure">
                <img
                  src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                  alt="미쏘 글로우 플리츠"
                />
              </div>
            </a>
            <a class="pl-info" href="#">
              <div class="info">
                <p class="sellor"><a href="#">미쏘</a></p>
                <strong class="product"
                  ><a href="#">글로우 플리츠 스커트</a></strong
                >
                <span class="discount">17%</span>
                <em class="price">25,560</em>
              </div>
            </a>
          </li>

          <li class="product-list">
            <a class="pl-figure" href="#">
              <div class="figure">
                <img
                  src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                  alt="미쏘 글로우 플리츠"
                />
              </div>
            </a>
            <a class="pl-info" href="#">
              <div class="info">
                <p class="sellor"><a href="#">미쏘</a></p>
                <strong class="product"
                  ><a href="#">글로우 플리츠 스커트</a></strong
                >
                <span class="discount">17%</span>
                <em class="price">25,560</em>
              </div>
            </a>
          </li>

          <li class="product-list">
            <a class="pl-figure" href="#">
              <div class="figure">
                <img
                  src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                  alt="미쏘 글로우 플리츠"
                />
              </div>
            </a>
            <a class="pl-info" href="#">
              <div class="info">
                <p class="sellor"><a href="#">미쏘</a></p>
                <strong class="product"
                  ><a href="#">글로우 플리츠 스커트</a></strong
                >
                <span class="discount">17%</span>
                <em class="price">25,560</em>
              </div>
            </a>
          </li>

          <li class="product-list">
            <a class="pl-figure" href="#">
              <div class="figure">
                <img
                  src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                  alt="미쏘 글로우 플리츠"
                />
              </div>
            </a>
            <a class="pl-info" href="#">
              <div class="info">
                <p class="sellor"><a href="#">미쏘</a></p>
                <strong class="product"
                  ><a href="#">글로우 플리츠 스커트</a></strong
                >
                <span class="discount">17%</span>
                <em class="price">25,560</em>
              </div>
            </a>
          </li>

          <li class="product-list">
            <a class="pl-figure" href="#">
              <div class="figure">
                <img
                  src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                  alt="미쏘 글로우 플리츠"
                />
              </div>
            </a>
            <a class="pl-info" href="#">
              <div class="info">
                <p class="sellor"><a href="#">미쏘</a></p>
                <strong class="product"
                  ><a href="#">글로우 플리츠 스커트</a></strong
                >
                <span class="discount">17%</span>
                <em class="price">25,560</em>
              </div>
            </a>
          </li>
        </ul>
      </section>

      <div class="btn-common-main">
        <div class="main-container container">
          <a class="more" href="#"
            ><span class="discount">브랜드 신상 </span>더보기 ></a
          >
        </div>
      </div>
    </article>

    <!-- 서브배너 -->
    <aside class="main-sub-banner">
      <section class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <a href="#">
              <img
                src="https://image.brandi.me/home/banner/bannerImage_41_1617367228.jpg"
                alt="슬라이드이미지1"
              />
            </a>
          </li>
          <li class="swiper-slide">
            <a href="#">
              <img
                src="https://image.brandi.me/home/banner/bannerImage_41_1617367228.jpg"
                alt="슬라이드이미지2"
              />
            </a>
          </li>
        </ul>
      </section>
    </aside>

    <!-- 당신을 위한 추천 -->
    <article class="main-products-new">
      <h2 class="ir"></h2>
      <section class="title-wrap">
        <h2>당신을 위한 추천</h2>
      </section>

      <div class="btn-wrap">
        <div class="btn-page"></div>
        <div class="btn-box">
          <button
            type="button"
            aria-label="이전 리스트 이동"
            class="list-btn-prev"
          ></button>
          <button
            type="button"
            aria-label="다음 리스트 이동"
            class="list-btn-next"
          ></button>
        </div>
      </div>

      <section class="main-products-list">
        <ul class="main-list">
          <li class="product-list">
            <a class="pl-figure" href="#">
              <figure class="figure">
                <img
                  src="https://image.brandi.me/cproduct/2021/04/07/SB000000000024475480_1617757815_image1_S.jpeg"
                  alt="미쏘 글로우 플리츠"
                />
              </figure>
            </a>
            <a class="pl-info" href="#">
              <div class="info">
                <p class="sellor">미쏘</p>
                <strong class="product">글로우 플리츠 스커트</strong>
                <span class="discount">17%</span>
                <em class="price">25,560</em>
              </div>
            </a>
          </li>

          <li class="product-list">
            <a class="pl-figure" href="#">
              <figure class="figure">
                <img
                  src="https://image.brandi.me/cproduct/2021/04/07/SB000000000024475480_1617757815_image1_S.jpeg"
                  alt="미쏘 글로우 플리츠"
                />
              </figure>
            </a>
            <a class="pl-info" href="#">
              <div class="info">
                <p class="sellor">미쏘</p>
                <strong class="product">글로우 플리츠 스커트</strong>
                <span class="discount">17%</span>
                <em class="price">25,560</em>
              </div>
            </a>
          </li>

          <li class="product-list">
            <a class="pl-figure" href="#">
              <figure class="figure">
                <img
                  src="https://image.brandi.me/cproduct/2021/04/07/SB000000000024475480_1617757815_image1_S.jpeg"
                  alt="미쏘 글로우 플리츠"
                />
              </figure>
            </a>
            <a class="pl-info" href="#">
              <div class="info">
                <p class="sellor">미쏘</p>
                <strong class="product">글로우 플리츠 스커트</strong>
                <span class="discount">17%</span>
                <em class="price">25,560</em>
              </div>
            </a>
          </li>

          <li class="product-list">
            <a class="pl-figure" href="#">
              <figure class="figure">
                <img
                  src="https://image.brandi.me/cproduct/2021/04/07/SB000000000024475480_1617757815_image1_S.jpeg"
                  alt="미쏘 글로우 플리츠"
                />
              </figure>
            </a>
            <a class="pl-info" href="#">
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

    <!-- 놓칠 수 없는 브랜디 특가 -->
    <aside class="main-products-special">
      <h2 class="ir">놓칠 수 없는 브랜디 특가</h2>
      <div class="title-wrap">
        <h2>놓칠 수 없는 브랜디 특가</h2>
      </div>
      <div class="btn-wrap">
        <div class="btn-page">
          <span class="btn-num-prev">1</span>/<span class="btn-num-next"
            >3</span
          >
        </div>
        <div class="btn-box">
          <button
            type="button"
            aria-label="이전 리스트 이동"
            class="list-btn-prev"
          ></button>
          <button
            type="button"
            aria-label="다음 리스트 이동"
            class="list-btn-next"
          ></button>
        </div>
      </div>
      <ul class="main-list-special">
        <li class="special-item">
          <strong class="product">BRANDI TIME PRICE</strong>
          <span class="discount"
            >지금 가입하면 5만원 쿠폰팩 지급!추가할인 받고 구매하자!</span
          >
        </li>
        <!-- 이미지1 -->
        <li class="thumb-special">
          <a class="special-img" href="#">
            <figure class="figure">
              <img
                src="https://image.brandi.me/cproduct/2021/03/03/SB000000000021685733_1614782720_image1_S.jpeg"
                alt="덤블 뽀글이 리버시블 베이직..."
              />
            </figure>
          </a>
          <a class="special-img" href="#">
            <div class="badge-special">
              <span class="badge">41%</span>
            </div>
          </a>
          <a class="special-img" href="#">
            <div class="info-special">
              <p class="time">남은시간 123:05:55</p>
              <strong class="product">덤블 뽀글이 리버시블 베이직...</strong>
              <em class="price">75,880</em>
            </div>
          </a>
        </li>

        <li class="thumb-special">
          <a class="special-img" href="#">
            <figure class="figure">
              <img
                src="@/assets/images/tshirts.jpeg"
                alt="덤블 뽀글이 리버시블 베이직..."
              />
            </figure>
          </a>
          <a class="special-img" href="#">
            <div class="badge-special">
              <span class="badge">41%</span>
            </div>
          </a>
          <a class="special-img" href="#">
            <div class="info-special">
              <p class="time">남은시간 123:05:55</p>
              <strong class="product">덤블 뽀글이 리버시블 베이직...</strong>
              <em class="price">75,880</em>
            </div>
          </a>
        </li>

        <li class="thumb-special">
          <a class="special-img" href="#">
            <figure class="figure">
              <img
                src="@/assets/images/tshirts.jpeg"
                alt="덤블 뽀글이 리버시블 베이직..."
              />
            </figure>
          </a>
          <a class="special-img" href="#">
            <div class="badge-special">
              <span class="badge">41%</span>
            </div>
          </a>
          <a class="special-img" href="#">
            <div class="info-special">
              <p class="time">남은시간 123:05:55</p>
              <strong class="product">덤블 뽀글이 리버시블 베이직...</strong>
              <em class="price">75,880</em>
            </div>
          </a>
        </li>
      </ul>
    </aside>

    <!-- 하루 배송 상품은 내일도착 -->
    <article class="main-products">
      <h2 class="ir">하루 배송 상품은 내일도착</h2>
      <div class="container">
        <div class="title-oneday">
          <div class="icon-badge-oneday">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="90"
              height="20"
              viewBox="0 0 90 20"
            >
              <defs>
                <circle id="upih13w80a" cx="10" cy="10" r="10" />
              </defs>
              <g fill="none" fill-rule="evenodd">
                <g>
                  <g>
                    <g>
                      <g>
                        <g fill="#0080E0">
                          <path
                            d="M56.997 12.095c2.406 0 4.203 1.769 4.011 3.953-.191 2.183-2.297 3.951-4.704 3.951-2.406 0-4.201-1.768-4.01-3.951.19-2.184 2.296-3.953 4.703-3.953zM30.302 13.3l-.197 2.259h-6.43l-.277 3.157h-2.501l.277-3.157h-6.439l.197-2.259h15.37zm26.5 1.036c-1.15 0-2.188.783-2.27 1.713-.08.927.82 1.713 1.97 1.713 1.148 0 2.185-.786 2.266-1.713.083-.93-.818-1.713-1.967-1.713zm-43.23-9.802l-.34 3.899h2.432l-.2 2.278h-2.433l-.48 5.483h-2.517l1.02-11.66h2.517zm30.797-.006l-.345 3.94h1.403l.344-3.94h2.399l-1.019 11.648h-2.4l.485-5.534h-1.403l-.484 5.534h-2.365l1.02-11.648h2.365zm-9.042 1.285l-.317 3.631h2.568l.319-3.631h2.363l-.908 10.362h-7.295l.907-10.362h2.363zM6.165 4.769L5.937 7.39h3.237l-.195 2.227H7.762c.352.686.51 1.423.439 2.227-.05.583-.2 1.115-.45 1.612-.249.513-.562.941-.934 1.301-.393.377-.83.669-1.329.873-.499.224-1.021.327-1.537.327-.549 0-1.052-.103-1.512-.327-.462-.204-.848-.496-1.157-.873-.328-.36-.565-.788-.727-1.301-.161-.497-.217-1.029-.167-1.612.071-.804.34-1.541.829-2.227H0L.195 7.39h3.24l.229-2.621h2.501zm31.232 6.747h-2.569l-.226 2.586h2.569l.226-2.586zM4.495 9.737c-.257 0-.483.053-.681.154-.215.103-.416.256-.569.446-.188.189-.326.394-.414.617-.124.24-.18.497-.204.77-.023.275-.013.532.068.772.047.24.149.463.306.633.118.207.294.344.491.447.18.101.397.153.655.153.222 0 .45-.052.665-.153.213-.103.397-.24.587-.447.15-.17.273-.393.398-.633.09-.24.164-.497.188-.772.024-.273-.006-.53-.053-.77-.084-.223-.168-.428-.288-.617-.156-.19-.315-.343-.51-.446-.196-.101-.416-.154-.639-.154zM28.19 2.286l-.497 5.633h-6.798l-.142 1.6h6.8l-.174 1.988h-9.214l.49-5.611h6.8l.145-1.589H18.8l.177-2.021h9.214zm30.57 3.968l-.198 2.239h6.439l-.195 2.227H49.428l.195-2.227h6.439l.196-2.239h2.501zM58.054 0l5.329 5.21-1.877 1.54-3.725-3.638-4.358 3.638-1.61-1.54L58.055 0z"
                            transform="translate(-61 -3102) translate(16 3100) translate(45) translate(0 2) translate(24.286)"
                          />
                        </g>
                        <g
                          transform="translate(-61 -3102) translate(16 3100) translate(45) translate(0 2)"
                        >
                          <mask id="ugml5ouj8b" fill="#fff">
                            <use xlink:href="#upih13w80a" />
                          </mask>
                          <use fill="#0080E0" xlink:href="#upih13w80a" />
                          <path
                            fill="#28E5E5"
                            d="M17.678 2.752h-5.045L10.99 5.2 9.348 7.644h-4.63L2.777 10.09v3.262h1.659v-.001c0-1.462 1.197-2.65 2.67-2.65 1.471 0 2.668 1.188 2.668 2.65v.001h2.874v-.001c0-1.462 1.198-2.65 2.67-2.65s2.669 1.188 2.669 2.65v.001h1.981c.373-1.075.588-2.223.588-3.423 0-2.78-1.099-5.302-2.878-7.177"
                            mask="url(#ugml5ouj8b)"
                          />
                          <path
                            fill="#FFF"
                            d="M8.542 13.35c0-.787-.644-1.426-1.437-1.426s-1.437.64-1.437 1.427.644 1.428 1.437 1.428 1.437-.641 1.437-1.428M16.755 13.35c0-.787-.644-1.426-1.437-1.426s-1.437.64-1.437 1.427.644 1.428 1.437 1.428 1.437-.641 1.437-1.428M9.346 7.644L11.537 4.382 7.31 4.382 4.72 7.644z"
                            mask="url(#ugml5ouj8b)"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <h2 class="title">상품은 내일 도착</h2>
        </div>
        <section class="main-products">
          <ul class="main-list">
            <li class="product-list">
              <a class="pl-figure" href="#">
                <figure class="figure">
                  <img
                    src="https://image.brandi.me/cproduct/2021/03/11/SB000000000021940594_1615465868_image1_S.jpeg"
                    alt="미쏘 글로우 플리츠"
                  />
                </figure>
              </a>
              <a class="pl-info" href="#">
                <div class="info">
                  <p class="sellor"><a href="#">미쏘</a></p>
                  <strong class="product"
                    ><a href="#">글로우 플리츠 스커트</a></strong
                  >
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
                </div>
              </a>
            </li>

            <li class="product-list">
              <a class="pl-figure" href="#">
                <figure class="figure">
                  <img
                    src="https://image.brandi.me/cproduct/2021/03/08/SB000000000021976204_1615199206_image1_S.jpeg"
                    alt="미쏘 글로우 플리츠"
                  />
                </figure>
              </a>
              <a class="pl-info" href="#">
                <div class="info">
                  <p class="sellor"><a href="#">미쏘</a></p>
                  <strong class="product"
                    ><a href="#">글로우 플리츠 스커트</a></strong
                  >
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
                </div>
              </a>
            </li>

            <li class="product-list">
              <a class="pl-figure" href="#">
                <figure class="figure">
                  <img
                    src="https://image.brandi.me/cproduct/2021/03/11/SB000000000021940594_1615465868_image1_S.jpeg"
                    alt="미쏘 글로우 플리츠"
                  />
                </figure>
              </a>
              <a class="pl-info" href="#">
                <div class="info">
                  <p class="sellor"><a href="#">미쏘</a></p>
                  <strong class="product"
                    ><a href="#">글로우 플리츠 스커트</a></strong
                  >
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
                </div>
              </a>
            </li>

            <li class="product-list">
              <a class="pl-figure" href="#">
                <figure class="figure">
                  <img
                    src="@/assets/images/pants01.jpeg"
                    alt="미쏘 글로우 플리츠"
                  />
                </figure>
              </a>
              <a class="pl-info" href="#">
                <div class="info">
                  <p class="sellor">미쏘</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
                </div>
              </a>
            </li>

            <li class="product-list">
              <a class="pl-figure" href="#">
                <figure class="figure">
                  <img
                    src="@/assets/images/pants01.jpeg"
                    alt="미쏘 글로우 플리츠"
                  />
                </figure>
              </a>
              <a class="pl-info" href="#">
                <div class="info">
                  <p class="sellor">미쏘</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
                </div>
              </a>
            </li>

            <li class="product-list">
              <a class="pl-figure" href="#">
                <figure class="figure">
                  <img
                    src="@/assets/images/pants01.jpeg"
                    alt="미쏘 글로우 플리츠"
                  />
                </figure>
              </a>
              <a class="pl-info" href="#">
                <div class="info">
                  <p class="sellor">미쏘</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
                </div>
              </a>
            </li>

            <li class="product-list">
              <a class="pl-figure" href="#">
                <figure class="figure">
                  <img
                    src="@/assets/images/pants01.jpeg"
                    alt="미쏘 글로우 플리츠"
                  />
                </figure>
              </a>
              <a class="pl-info" href="#">
                <div class="info">
                  <p class="sellor">미쏘</p>
                  <strong class="product">글로우 플리츠 스커트</strong>
                  <span class="discount">17%</span>
                  <em class="price">25,560</em>
                </div>
              </a>
            </li>

            <li class="product-list">
              <a class="pl-figure" href="#">
                <figure class="figure">
                  <img
                    src="@/assets/images/pants01.jpeg"
                    alt="미쏘 글로우 플리츠"
                  />
                </figure>
              </a>
              <a class="pl-info" href="#">
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

        <div class="btn-common-main">
          <a class="more" href="#"
            ><span class="discount">하루배송 상품</span>더보기 ></a
          >
        </div>
      </div>
    </article>

    <!-- 지금 뜨고있는 기획전 -->
    <article class="main-products-pop">
      <h2 class="ir">지금 뜨고있는 기획전</h2>
      <div class="container">
        <div class="title-wrap">
          <h2>지금 뜨고있는 기획전</h2>
        </div>

        <div class="btn-wrap">
          <div class="btn-page">
            <span class="btn-num">1</span>/<span class="btn-num">3</span>
          </div>
          <div class="btn-box">
            <button
              type="button"
              aria-label="이전 리스트 이동"
              class="list-btn-prev"
            ></button>
            <button
              type="button"
              aria-label="다음 리스트 이동"
              class="list-btn-next"
            ></button>
          </div>
        </div>

        <div class="event-wrap">
          <div class="event-item">
            <div class="item-banner">
              <figure class="banimg">
                <a href="#">
                  <img
                    src="https://image.brandi.me/event/2021/04/07/1617763913_banner.jpg"
                    alt="mixxo이미지"
                  />
                </a>
              </figure>
              <span class="bage"></span>
            </div>

            <ul class="main-list">
              <li class="product-list">
                <a class="pl-figure" href="#">
                  <figure class="figure">
                    <img
                      src="@/assets/images/pants01.jpeg"
                      alt="미쏘 글로우 플리츠"
                    />
                  </figure>
                </a>
                <a class="pl-info" href="#">
                  <div class="info">
                    <p class="sellor">미쏘</p>
                    <strong class="product">글로우 플리츠 스커트</strong>
                    <span class="discount">17%</span>
                    <em class="price">25,560</em>
                  </div>
                </a>
              </li>

              <li class="product-list">
                <a class="pl-figure" href="#">
                  <figure class="figure">
                    <img
                      src="@/assets/images/pants01.jpeg"
                      alt="미쏘 글로우 플리츠"
                    />
                  </figure>
                </a>
                <a class="pl-info" href="#">
                  <div class="info">
                    <p class="sellor">미쏘</p>
                    <strong class="product">글로우 플리츠 스커트</strong>
                    <span class="discount">17%</span>
                    <em class="price">25,560</em>
                  </div>
                </a>
              </li>

              <li class="product-list">
                <a class="pl-figure" href="#">
                  <figure class="figure">
                    <img
                      src="@/assets/images/pants01.jpeg"
                      alt="미쏘 글로우 플리츠"
                    />
                  </figure>
                </a>
                <a class="pl-info" href="#">
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
          <div class="event-item">
            <div class="item-banner">
              <figure class="banimg">
                <a href="#">
                  <img
                    src="https://image.brandi.me/event/2021/04/07/1617763913_banner.jpg"
                    alt="mixxo이미지"
                  />
                </a>
              </figure>
              <span class="bage"></span>
            </div>

            <ul class="main-list">
              <li class="product-list">
                <a class="pl-figure" href="#">
                  <figure class="figure">
                    <img
                      src="@/assets/images/pants01.jpeg"
                      alt="미쏘 글로우 플리츠"
                    />
                  </figure>
                </a>
                <a class="pl-info" href="#">
                  <div class="info">
                    <p class="sellor">미쏘</p>
                    <strong class="product">글로우 플리츠 스커트</strong>
                    <span class="discount">17%</span>
                    <em class="price">25,560</em>
                  </div>
                </a>
              </li>

              <li class="product-list">
                <a class="pl-figure" href="#">
                  <figure class="figure">
                    <img
                      src="@/assets/images/pants01.jpeg"
                      alt="미쏘 글로우 플리츠"
                    />
                  </figure>
                </a>
                <a class="pl-info" href="#">
                  <div class="info">
                    <p class="sellor">미쏘</p>
                    <strong class="product">글로우 플리츠 스커트</strong>
                    <span class="discount">17%</span>
                    <em class="price">25,560</em>
                  </div>
                </a>
              </li>

              <li class="product-list">
                <a class="pl-figure" href="#">
                  <figure class="figure">
                    <img
                      src="@/assets/images/pants01.jpeg"
                      alt="미쏘 글로우 플리츠"
                    />
                  </figure>
                </a>
                <a class="pl-info" href="#">
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
          <div class="btn-common-main">
            <a class="more" href="#"
              ><span class="discount">더 많은 기획전 </span>보러가기 ></a
            >
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "PageMain",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/assets/scss/pages/main1";
.ir {
  height: 0;
  line-height: 0;
  font-size: 0;
  overflow: hidden;
  text-indent: -10000px;
}
</style>