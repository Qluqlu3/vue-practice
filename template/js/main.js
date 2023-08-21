const app = Vue.createApp({
  data: () => ({
    message: 'TEXT',
    text: 'TEXT3',
    html: '<span style="color:blue;">HTML</span>',
    cloakText: 'CLOAK TEXT',
    number: 100,
    isOK: true,
    url: 'https://www.google.co.jp'
  }),
  methods: {
    clickHandler: function (event) {
      this.message = this.message.split('').reverse().join('');
    },
  },
});
app.mount('#app');
