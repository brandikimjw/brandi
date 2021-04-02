# brandi-main

> A Vue.js project

## Build Setup

``` bash
# node ver
nvm install 14.16.0
nvm use 14.16.0

# install global node package
npm install @vue/cli@4.4.1

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## scss
초기화 스타일로 nomalize css 적용 되어 있음
- nomalize css란? https://webdir.tistory.com/455

base 스타일은 scss/base/_base.scss

### 구조
``` bash
main.scss
├─ abstracts.scss
│  ├─ _functions.scss > sass 전역함수
│  ├─ _mixins.scss > sass 전역믹스인
│  └─ _variables.scss > sass 전역변수
├─ vendors > 라이브러리
│  ├─ _normalize.scss > 브라우저 스타일 초기화 css
│  └─ swiper.scss > swiperjs 라이브러리 스타일
└─ base
   ├─ _base.scss > 기본 스타일
   ├─ _fonts.scss > font-face 정의를 위한 scss > noto san
   └─ _typography.scss > 타이포그라피를 위한 scss

components
├─ _header.scss
└─ _footer.scss

pages
└─ _main.scss
```