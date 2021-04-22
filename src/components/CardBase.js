export default {
  props: {
    sellorName: {
      type: String,
      required: true
    },
    productName: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    isOneDayShipping: {
      type: Boolean,
      default: false
    },
    discountRate: {
      type: Number,
      default: 0
    },
    orderBadge: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  methods: {
    numberToReadableString(number) {
      return `${number} 변환값`
    }
  }
}
