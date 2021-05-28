import Vue from 'vue'

Vue.mixin({
  data() {
    return {
      isMobile: '',
    }
  },
  methods: {
    setScreenSize() {
      (window.innerWidth <= 768) ? this.isMobile = true : this.isMobile = false
    },
  },
  created() {
    this.isMobile = (window.innerWidth <= 768)
    window.addEventListener("resize", this.setScreenSize);
  }
})