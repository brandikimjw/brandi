export default {
  props: {
    sellorName: {
      type: String,
      // required: true
      default: ''
    },
    productName: {
      type: String,
      // required: true
      default: ''
    },
    price: {
      type: Number,
      // required: true
      default: 0
    },
    isOneDayShipping: {
      type: Boolean,
      default: true
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
    },
    imageUrl: {
      type: String,
      default: ''
    }
  },
  // methods: {
  //   numberToReadableString(number) {
  //     return `${number} 변환값`
  //   }
  // }
}
