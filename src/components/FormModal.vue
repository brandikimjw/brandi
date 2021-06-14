<template>
    <transition name="fade-shrink-in">
      <div class="btn-modal-wrap" v-show="open">
        <!-- <div v-show="open" class="dim"> -->
        <div class="inner">
          <form class="btn-modal">
            <input type="search" aria-label="검색어 입력란" class="input-search" />
            <button class="mobile-btn hide-text" @click="close">Close</button>
            <input type="hidden" name="r" value="/" />
          </form>
        </div>
        <div class="dim" @click="close"></div>
      </div>
    </transition>
</template>

<script>
export default {
  props: ["open"],
  methods: {
    close() {
      if(this.isMobile){
        this.$emit("close")
      }else{

      }
    },
  }
}
</script>

<style lang="scss" scoped>
.inner {
  width: 100%;
  background: #fff;
  padding: 14px 16px;
  z-index: 9900;
  position: absolute;
  left: 0;
  top: 0;
}
.btn-modal {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;
}
.input-search {
  width: calc(100% - 33px);
  height: 28px;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  appearance: none;
  font-size: 16px;
  vertical-align: bottom;
  padding-bottom: 2px;
  border-bottom: 2px solid #202429;
}
.mobile-btn {
  background: url(~@/assets/images/ic-search-s@3x.png) no-repeat;
  width: 28px;
  height: 28px;
  background-size: 100% 100%;
  vertical-align: bottom;
}
.dim {
  &:after{
    content: '';
    display: block;
    position: fixed;
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 100vh;
    z-index: 900;
    left:0;
    top:0;
  }
}
.fade-shrink-in-enter-active,
.fade-shrink-in-leave-active {
  transition: all 0.7s ease;
}
// .fade-shrink-in-enter,
// .fade-shrink-in-leave-to {
//   opacity: 0;
//   transform: scale(1.1);
// }
@media screen and (min-width: map-get($breakpoints, "medium")) {
 .fade-shrink-in {display: none;}
 .btn-modal-wrap {display: none;}
}
</style>
