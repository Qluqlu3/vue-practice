const app = Vue.createApp({
  data: () => ({
    message: 'MESSAGE',
    basePrice: 100,
  }),
  methods: {
    reversedMessageMethod: function () {
      return this.message.split('').reverse().join('');
    },
    methodNumber: function () {
      return Math.random();
    },
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('');
    },
    taxIncludedPrice: {
      get: function () {
        return this.basePrice * 1.1;
      },
      set: function (price) {
        this.basePrice = price / 1.1;
      },
    },
    computedNumber: function () {
      return Math.random();
    },
  },
});
app.mount('#app');
