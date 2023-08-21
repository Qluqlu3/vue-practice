const app = Vue.createApp({
  data: () => ({
    items: null,
    keywords: '',
    message: '',
  }),
  watch: {
    keywords: function (newKeywords, oldKeywords) {
      console.log(newKeywords, oldKeywords);
      this.message = 'typing...';
      this.debouncedGetAnswer();
    },
  },
  mounted: function () {
    // this.keywords = 'JavaScript';
    // this.getAnswer();
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000);
  },
  methods: {
    getAnswer: function () {
      if (this.keywords === '') {
        console.log('empty');
        this.items = null;
        return;
      }
      this.message = 'Loading';
      const vm = this;
      const params = { page: 1, per_page: 20, query: this.keywords };
      axios
        .get('https://qiita.com/api/v2/items', { params })
        .then(function (response) {
          console.log(response);
          vm.items = response.data;
        })
        .catch(function (error) {
          vm.message = 'Error' + error;
        })
        .finally(function () {
          vm.message = '';
        });
    },
  },
});
app.mount('#app');
