<template>
  <div class="title-nav">
    <div class="today-box">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="165"
        height="40"
        viewBox="0 0 90 20"
        class="oneday-svg"
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
    <h2 class="today-tit">상품은 내일 도착</h2>
  </div>
</template>

<script>
export default {
  name: "OnedayTitle",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// 타이틀 네브
.title-nav {
  text-align: center;
  width: 100%;
  display: inline-block;
  .today-tit {
    display: inline-block;
    margin: 0 0 16px 0;
    font-size: 20px;
    text-align: center;
  }
  .today-box {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    .oneday-svg {
      width: 90px;
      height: 35px;
    }
    .today-txt {
      display: inline-block;
      padding: 0 4px 4px;
      font-size: 14px;
      color: #808893;
      &.active {
        a {
          border-bottom: 2px solid #ff204b;
          font-weight: 700;
          color: #ff204b;
        }
      }
    }
  }
}

@media screen and (min-width: map-get($breakpoints, "medium")) {
  .title-nav {
    text-align: left;
    margin-bottom: 24px;
    .today-box {
      margin-top: 5px;
      vertical-align: top;
      .oneday-svg {
        width: 161px;
        height: 36px;
      }
    }
    .today-tit {
      margin-bottom: 0;
      font-size: 32px;
      text-align: left;
    }
  }
}
</style>
